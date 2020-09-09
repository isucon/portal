import type { isuxportal } from "../pb";
import { ApiClient } from "../ApiClient";
import React from "react";

import {Timestamp} from "../Timestamp";
import {ErrorMessage} from "../ErrorMessage";

interface ChangeItemProps {
  position: number,
  lastPosition: number,
  lastScore: number,
  item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
}

type ChangeDirection = "up" | "down" | undefined;

const ChangeItem: React.FC<ChangeItemProps> = ({ position, lastPosition, lastScore, item }) => {
  const score = item.latestScore!.score as number;
  if (!lastScore || !lastPosition || position == lastPosition || score == lastScore) return <></>;

  const studentStatus = item.team!.student?.status && (
    <span className="material-icons">school</span>
  );

  const classNames = ["isux-broadcast-scorechanges-item","columns", "is-mobile", "is-vcentered", "is-gapless"];

  let direction: ChangeDirection = undefined;
  if (position < lastPosition) {
    direction = "up";
  } else if (position > lastPosition) {
    direction = "down";
  }
  classNames.push(`isux-broadcast-scorechanges-item--${direction}`);

  const scoreDiff = score-lastScore;

  return (
    <div className={classNames.join(" ")}>
      <div className={`column isux-broadcast-scorechanges-item-position`}>
        <span className="isux-broadcast-scorechanges-direction-icon material-icons">
          {direction == "up" ? "arrow_upward" : null}
          {direction == "down" ? "arrow_downward" : null}
        </span>
        <p className="isux-broadcast-scorechanges-direction-text">
          {lastPosition} <span className="material-icons">play_arrow</span> {position}
        </p>
      </div>
      <div className="column isux-broadcast-scorechanges-item-team">
        <p>{item.team!.name}</p>
      </div>
      <div className="column isux-broadcast-scorechanges-item-student">
        {studentStatus}
      </div>
      <div className="column has-text-right isux-broadcast-scorechanges-item-score">
        <p className="isux-broadcast-scorechanges-newscore">{score}</p>
        <p className={`isux-broadcast-scorechanges-scorediff isux-broadcast-scorechanges-item--${direction}`}>
          <span className="isux-broadcast-scorechanges-scorediff-sign">{scoreDiff > 0 ? "+" : "-"}</span>
          <span className="isux-broadcast-scorechanges-scorediff-value">{Math.abs(scoreDiff)}</span>
        </p>
      </div>
    </div>
  );
};

  const onDashboardUpdate = (dashboard: isuxportal.proto.services.audience.DashboardResponse, prevDashboard: isuxportal.proto.services.audience.DashboardResponse | null, limit: number) => {
    type TeamStanding = {position: number, item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem, lastPosition?: number, lastScore?: number | Long};

    if (!dashboard) throw new Error("[BUG] onDashboardUpdate needs a dashboard");

    const leaderboard = dashboard.leaderboard!;
    const prevLeaderboard = prevDashboard?.leaderboard;

    const prevRanks = new Map((prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, idx+1];
    }));
    const prevScores = new Map((prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, t.latestScore?.score!];
    }));

    const teams = leaderboard.teams!.map((item, idx): TeamStanding => {
                    return {position: idx + 1, lastPosition: prevRanks.get(item.team!.id!), lastScore: prevScores.get(item.team!.id!), item};
                  })
                  .filter((team) => !!team.item.latestScore && team.lastScore !== undefined)
                  .filter((team) => team.lastPosition != team.position && team.lastScore != team.item.latestScore!.score!);

    const renderTeam = (key: string, {item, position, lastPosition, lastScore}: TeamStanding) => {
      return <ChangeItem item={item} position={position} lastPosition={lastPosition!} lastScore={lastScore! as number} key={`${key}-${item.team!.id!.toString()}`} />;
    };

    const pages = [];
    for (let i = 0; i < teams.length; i += limit) {
      const page = teams.slice(i, i + limit).map((item) => renderTeam("change", item));
      pages.push(page);
    };
    return pages;
  };

interface Props {
  client: ApiClient,
  limit: number,
  showDummy?: bool,
}

export const BroadcastScoreChanges: React.FC<Props> = (props: Props) => {
  const { client, limit } = props;

  const [ error, setError ] = React.useState<Error | null>(null);
  const [ requesting, setRequesting ] = React.useState(false);
  const [ prevDashboard, setPrevDashboard ] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);
  const [ dashboard, setDashboard ] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);

  const [ changeItemPages, setChangeItemPages ] = React.useState<JSX.Element[][]>([]);


  const refresh = () => {
    if (requesting) return;
    setRequesting(true);
    client.getAudienceDashboard().then((db) => {
      setPrevDashboard(dashboard);
      setDashboard(db);
      setChangeItemPages([...changeItemPages, ...onDashboardUpdate(db, prevDashboard, limit)]);
      setError(null);
      setRequesting(false);
    }).catch((e) => {
      setError(e);
      setRequesting(false);
    });
  };
  React.useEffect(() => {
    if (!dashboard) refresh();
  }, [dashboard]);
  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => refresh(), 10000);
    return (() => clearInterval(timer));
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => setChangeItemPages(changeItemPages.slice(1,undefined)), 4000);
    return (() => clearTimeout(timer));
  }, [changeItemPages]);

  if (error) return <ErrorMessage error={error} />;


  const dummies = props.showDummy ? [
      <ChangeItem item={{latestScore: {score: 10000}, team: {id: 424242, name: 'あいうあいうあいう', student: {status: true}}}} lastScore={50000} lastPosition={123} position={523} key="dummy1" />,
      <ChangeItem item={{latestScore: {score: 20000}, team: {id: 424243, name: 'なにぬなにぬなにぬ'}}} lastScore={10000} lastPosition={542} position={142} key="dummy2" />,
      <ChangeItem item={{latestScore: {score: 87654321}, team: {id: 400000, name: 'railsへの執着はもはや煩悩の域であり、開発者一同は瞑想したほうがいいと思います。'}}} lastScore={12345678} lastPosition={542} position={142} key="dummy3" />,
  ] : [];

  return (
    <div className="isux-broadcast-scorechanges">
      {dummies}
      {changeItemPages[0]}
    </div>
  );
};
