import type { isuxportal } from "../pb";
import { ApiClient } from "../ApiClient";
import React from "react";
import ReactDOM from "react-dom";

import { Timestamp } from "../Timestamp";
import { ErrorMessage } from "../ErrorMessage";

interface ChangeItemProps {
  position: number;
  lastPosition: number;
  lastScore: number;
  lastBestScore: number;
  item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
}

type ChangeDirection = "up" | "down" | undefined;

const ChangeItem: React.FC<ChangeItemProps> = ({ position, lastPosition, lastScore, lastBestScore, item }) => {
  const score = item.latestScore!.score as number;
  const bestScore = (item.bestScore?.score as number) || 0;
  if (
    lastScore === null ||
    lastScore === undefined ||
    lastBestScore === null ||
    lastBestScore === undefined ||
    lastPosition === null ||
    lastPosition === undefined ||
    ((position === lastPosition || score === lastScore) && lastBestScore >= bestScore)
  ) {
    return <></>;
  }

  const studentStatus = item.team!.student?.status && <span className="material-icons">school</span>;

  const classNames = ["isux-broadcast-scorechanges-item", "columns", "is-mobile", "is-vcentered", "is-gapless"];

  let direction: ChangeDirection = undefined;
  if (position < lastPosition) {
    direction = "up";
  } else if (position > lastPosition) {
    direction = "down";
  } else if (lastBestScore < bestScore) {
    direction = "up";
  }
  classNames.push(`isux-broadcast-scorechanges-item--${direction}`);

  const scoreDiff = score - lastScore;

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
      <div className="column isux-broadcast-scorechanges-item-student">{studentStatus}</div>
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

const onLeaderboardUpdate = (
  leaderboard: isuxportal.proto.resources.ILeaderboard,
  prevLeaderboard: isuxportal.proto.resources.ILeaderboard | null | undefined,
  limit: number,
  key: string
) => {
  type TeamStanding = {
    position: number;
    item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
    lastPosition?: number;
    lastScore?: number | Long;
    lastBestScore?: number | Long;
  };

  const prevRanks = new Map(
    (prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, idx + 1];
    })
  );
  const prevTeams = new Map(
    (prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, t];
    })
  );

  //console.log(prevRanks);
  //console.log(prevScores);

  const teams = leaderboard
    .teams!.map(
      (item, idx): TeamStanding => {
        const prev = prevTeams.get(item.team!.id);
        const lastScore = prev?.latestScore?.score!;
        const lastBestScore = prev?.bestScore?.score!;
        return { position: idx + 1, lastPosition: prevRanks.get(item.team!.id!), lastScore, lastBestScore, item };
      }
    )
    .filter((team) => team.item.latestScore && team.lastScore !== undefined)
    .filter(
      (team) =>
        (team.lastPosition != team.position && team.lastScore != team.item.latestScore!.score!) ||
        (team.lastBestScore && team.item.bestScore && team.lastBestScore < team.item.bestScore.score!)
    );

  const renderTeam = (key: string, { item, position, lastPosition, lastScore, lastBestScore }: TeamStanding) => {
    return (
      <ChangeItem
        item={item}
        position={position}
        lastPosition={lastPosition!}
        lastScore={lastScore! as number}
        lastBestScore={lastBestScore! as number}
        key={`${key}-${item.team!.id!.toString()}`}
      />
    );
  };

  const pages = [];
  for (let i = 0; i < teams.length; i += limit) {
    const page = teams.slice(i, i + limit).map((item) => renderTeam(key, item));
    console.log(page);
    pages.push(page);
  }
  return pages;
};

interface Props {
  client: ApiClient;
  limit: number;
  showDummy?: boolean;
  bottom?: boolean;
  leaderboard?: isuxportal.proto.resources.ILeaderboard;
}

export const BroadcastScoreChanges: React.FC<Props> = (props: Props) => {
  const { client } = props;

  const [error, setError] = React.useState<Error | null>(null);
  const [requesting, setRequesting] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);

  const refresh = () => {
    if (requesting) return;
    setRequesting(true);
    client
      .getAudienceDashboard()
      .then((db) => {
        ReactDOM.unstable_batchedUpdates(() => {
          const prev = dashboard;
          setDashboard(db);
          setError(null);
          setRequesting(false);
        });
      })
      .catch((e) => {
        ReactDOM.unstable_batchedUpdates(() => {
          setError(e);
          setRequesting(false);
        });
      });
  };

  React.useEffect(() => {
    if (!dashboard) refresh();
  }, []);
  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => refresh(), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      <BroadcastScoreChangesInner {...props} leaderboard={dashboard?.leaderboard!} />
    </>
  );
};

const usePrevious = function <T>(value: T) {
  const ref = React.useRef<T>();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const BroadcastScoreChangesInner: React.FC<Props> = (props: Props) => {
  const prevProps = usePrevious(props);
  const prevLeaderboard = prevProps?.leaderboard;

  const [changeItemPages, setChangeItemPages] = React.useState<JSX.Element[][]>([]);
  const [newChangeItemPages, setNewChangeItemPages] = React.useState<JSX.Element[][] | null>(null);

  React.useEffect(() => {
    if (!props.leaderboard) return;
    //console.log("setNewChangeItemPages (onLeaderboardUpdate)", changeItemPages);
    setNewChangeItemPages(
      onLeaderboardUpdate(
        props.leaderboard,
        prevLeaderboard,
        props.limit,
        `${props.leaderboard?.generatedAt?.seconds}/${props.leaderboard?.generatedAt?.nanos}`
      )
    );
    //console.log("setNewChangeItemPages (onLeaderboardUpdate) done", changeItemPages);
  }, [`${props.leaderboard?.generatedAt?.seconds}/${props.leaderboard?.generatedAt?.nanos}`]);

  React.useEffect(() => {
    if (newChangeItemPages) {
      setChangeItemPages([...changeItemPages, ...newChangeItemPages]);
      setNewChangeItemPages(null);
    }
    const timer = setTimeout(() => {
      //console.log("setChangeItemPages (timeout)", changeItemPages);
      setChangeItemPages(changeItemPages.slice(1, undefined));
    }, 4000);
    return () => {
      //console.log("setChangeItemPages (clearTimeout)", changeItemPages);
      clearTimeout(timer);
    };
  }, [setChangeItemPages, changeItemPages, newChangeItemPages]);

  console.log("render", changeItemPages);

  const dummies = props.showDummy
    ? [
        <ChangeItem
          item={{
            latestScore: { score: 10000 },
            team: { id: 424242, name: "あいうあいうあいう", student: { status: true } },
          }}
          lastBestScore={10000000}
          lastScore={50000}
          lastPosition={123}
          position={523}
          key="dummy1"
        />,
        <ChangeItem
          item={{ latestScore: { score: 20000 }, team: { id: 424243, name: "なにぬなにぬなにぬ" } }}
          lastBestScore={10000000}
          lastScore={10000}
          lastPosition={542}
          position={142}
          key="dummy2"
        />,
        <ChangeItem
          item={{
            latestScore: { score: 87654321 },
            team: {
              id: 400000,
              name: "railsへの執着はもはや煩悩の域であり、開発者一同は瞑想したほうがいいと思います。",
            },
          }}
          lastBestScore={10000000}
          lastScore={12345678}
          lastPosition={542}
          position={142}
          key="dummy3"
        />,
      ]
    : [];

  return (
    <div className={`isux-broadcast-scorechanges ${props.bottom ? "isux-broadcast-bottomflex" : ""}`}>
      {dummies}
      {changeItemPages[0]}
    </div>
  );
};
