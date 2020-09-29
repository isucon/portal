import type { isuxportal } from "../pb";
import { ApiClient } from "../ApiClient";
import React from "react";

import { Timestamp } from "../Timestamp";
import { ErrorMessage } from "../ErrorMessage";

interface TeamItemProps {
  position: number;
  lastPosition?: number;
  item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
  changed: boolean;
}

const TeamItem: React.FC<TeamItemProps> = ({ position, lastPosition, changed, item }) => {
  const [animationClassName, setAnimationClassName] = React.useState<string | null>(null);
  const [animationEpoch, setAnimationEpoch] = React.useState<number>(0);

  const studentStatus = item.team!.student?.status && <span className="material-icons">school</span>;

  React.useEffect(() => {
    if (!lastPosition) return;
    if (!changed) return;
    const set = lastPosition && lastPosition != position;
    if (lastPosition > position) {
      setAnimationClassName("isux-broadcast-leaderboard-change-up");
    } else if (lastPosition < position) {
      setAnimationClassName("isux-broadcast-leaderboard-change-down");
    }
    if (!set) return;
    setAnimationEpoch(animationEpoch + 1);
  }, [lastPosition, position]);

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setAnimationClassName(null);
    }, 4000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [animationEpoch]);

  const classNames = ["isux-broadcast-leaderboard-item", "columns", "is-mobile", "is-vcentered", "is-gapless"];
  return (
    <div className={classNames.join(" ")}>
      <div className={`column isux-broadcast-leaderboard-item-position ${animationClassName}`}>
        <p>{position}</p>
      </div>
      <div className="column isux-broadcast-leaderboard-item-team">
        <p>{item.team!.name}</p>
      </div>
      <div className="column isux-broadcast-leaderboard-item-student">{studentStatus}</div>
      <div className="column has-text-right isux-broadcast-leaderboard-item-score">
        <p>{item.latestScore?.score || 0}</p>
      </div>
    </div>
  );
};

type Mode = "all" | "general" | "students" | "hidden";

interface Props {
  client: ApiClient;
  limit: number;
  mode?: string;
  bottom?: boolean;
  leaderboard?: isuxportal.proto.resources.ILeaderboard;
}

export const BroadcastLeaderboard: React.FC<Props> = (props: Props) => {
  const { client, limit, mode } = props;

  const [error, setError] = React.useState<Error | null>(null);
  const [requesting, setRequesting] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);
  const refresh = () => {
    if (requesting) return;
    setRequesting(true);
    client
      .getAudienceDashboard()
      .then((db) => {
        setDashboard(db);
        setError(null);
        setRequesting(false);
      })
      .catch((e) => {
        setError(e);
        setRequesting(false);
      });
  };
  React.useEffect(() => {
    if (!dashboard) refresh();
  }, [dashboard]);
  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => refresh(), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      <BroadcastLeaderboardInner {...props} leaderboard={dashboard?.leaderboard!} />
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

const BroadcastLeaderboardInner: React.FC<Props> = (props: Props) => {
  const { leaderboard, mode, limit } = props;
  const prevProps = usePrevious(props);
  const prevLeaderboard = prevProps?.leaderboard;

  if (!leaderboard) return <p>Loading</p>;

  const prevRanks = new Map(
    (prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, idx + 1];
    })
  );
  const prevScores = new Map(
    (prevLeaderboard?.teams || []).map((t, idx) => {
      return [t.team!.id, t.latestScore?.score!];
    })
  );

  type TeamStanding = {
    position: number;
    item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
    lastPosition?: number;
    lastScore?: number | Long;
  };
  const selectTeam = () => {
    switch(mode) {
      case "all":
        return leaderboard.teams!;
      case "general":
        return leaderboard.generalTeams!;
      case "student":
        return leaderboard.studentTeams!;
      case "hidden":
        return leaderboard.hiddenTeams!;
      default:
        throw new Error("unknown mode");
    }
  };
  const teams = selectTeam()
    .map(
      (item, idx): TeamStanding => {
        return {
          position: idx + 1,
          lastPosition: prevRanks.get(item.team!.id!),
          lastScore: prevScores.get(item.team!.id!),
          item,
        };
      }
    )
    .filter((team) => !!team.item.latestScore);
  const renderTeam = (key: string, { item, position, lastPosition, lastScore }: TeamStanding) => {
    return (
      <TeamItem
        item={item}
        position={position}
        lastPosition={lastPosition}
        changed={lastScore != item.latestScore?.score!}
        key={`${key}-${item.team!.id!.toString()}`}
      />
    );
  };
  return (
    <div className={`isux-broadcast-leaderboard ${props.bottom ? "isux-broadcast-bottomflex" : ""}`}>
      {teams.slice(0, limit || undefined).map((v) => renderTeam("standings", v))}
    </div>
  );
};
