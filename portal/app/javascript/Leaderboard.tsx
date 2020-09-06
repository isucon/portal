import type { isuxportal } from "./pb";
import React from "react";

import {Timestamp} from "./Timestamp";

const NUMBER_OF_ROWS_VISIBLE_BY_DEFAULT = 25;

interface TeamItemProps {
  position: number;
  item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem;
  pinned: boolean,
  onPin: (teamId: string, flag: boolean) => void,
  me: boolean,
}

const TeamItem: React.FC<TeamItemProps> = ({ position, item, pinned, onPin, me }) => {
  const studentStatus = item.team!.student?.status && (
    <span className="tag is-info is-pulled-right">学生</span>
  );
  return (
    <tr className={(pinned || me) ? "isux-leaderboard-pinned" : ""}>
      <th className="has-text-centered">
        {pinned ?
          <button className="button is-small is-dark" onClick={() => onPin(item.team!.id!.toString(), false)} >Pin</button>
        : <button className="button is-small is-light" onClick={() => onPin(item.team!.id!.toString(), true)} >Pin</button>}
        </th>
      <th className="has-text-right">{position}</th>
      <td>{item.team!.id}: {item.team!.name}</td>
      <td className="has-text-right">{item.bestScore!.score}</td>
      <td className="has-text-right">{item.latestScore!.score}</td>
      <td><Timestamp timestamp={item.latestScore!.markedAt!} short /></td>
      <td>{studentStatus}</td>
    </tr>
  );
};

type Mode = "all" | "general" | "students";

interface Props {
  leaderboard: isuxportal.proto.resources.ILeaderboard;
  teamId?: number | Long,
}

const loadPins = () => {
  const map: Map<string, boolean> = new Map();
  const item = window.localStorage.getItem('isuxportal-dashboard-pins');
  if (item) {
    const teamIds: string[] = JSON.parse(item);
    for (const id of teamIds) {
      map.set(id, true);
    }
  }
  return map;
};

const savePins = (pins: Map<string, boolean>) => {
  window.localStorage.setItem('isuxportal-dashboard-pins', JSON.stringify(Array.from(pins.keys())));
};

export const Leaderboard: React.FC<Props> = ({ leaderboard, teamId }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [pins, setPins] = React.useState(loadPins)
  const [mode, setMode] = React.useState<Mode>("all");

  const onPin = (teamId: string, flag: boolean) => {
    if (flag) {
      pins.set(teamId, true);
    } else {
      pins.delete(teamId);
    }
    savePins(pins);
    setPins(new Map(pins));
  };

  type TeamStanding = {position: number, item: isuxportal.proto.resources.Leaderboard.ILeaderboardItem, pinned: boolean, me: boolean};
  const teams = leaderboard.teams!.filter(({ team }) => {
                  switch (mode) {
                    case "all":
                      return true;
                    case "general":
                      return !team?.student?.status;
                    case "students":
                      return team?.student?.status;
                    default:
                      true;
                  }
                }).map((item, idx): TeamStanding => {
                  const pinned = pins.has(item.team!.id!.toString());
                  const me = item.team!.id === teamId;
                  return {position: idx + 1,  item, pinned, me}
                });
  const renderTeam = (key: string, {item, pinned, me, position}: TeamStanding) => {
    return <TeamItem item={item} position={position} key={`${key}-${item.team!.id!.toString()}`} pinned={pinned} onPin={onPin} me={me} />;
  };
  const teamMe = teams.filter((v) => v.me);
  return (
    <>
      <div className="tabs is-boxed mb-0">
        <ul>
          <li className={mode === "all" ? "is-active" : ""}>
            <a onClick={() => setMode("all")}>
              <span>All</span>
            </a>
          </li>
          <li className={mode === "general" ? "is-active" : ""}>
            <a onClick={() => setMode("general")}>
              <span>General</span>
            </a>
          </li>
          <li className={mode === "students" ? "is-active" : ""}>
            <a onClick={() => setMode("students")}>
              <span>Students</span>
            </a>
          </li>
        </ul>
      </div>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr className="has-background-light">
            <th></th>
            <th className="has-text-right">#</th>
            <th>Team</th>
            <th className="has-text-right">Best</th>
            <th className="has-text-right">Latest</th>
            <th>Time</th>
            <th>{/* isStudent? */}</th>
          </tr>
        </thead>
        <tbody>
          {teamMe[0] && teamMe[0].position > NUMBER_OF_ROWS_VISIBLE_BY_DEFAULT ? teamMe.map((v) => renderTeam("me", v)) : []}
          {teams.filter((v) => v.pinned).map((v) => renderTeam("pinned", v))}
          {teams.slice(0, expanded ? undefined : NUMBER_OF_ROWS_VISIBLE_BY_DEFAULT).map((v) => renderTeam("standings", v))}
          <tr>
            <td colSpan={7} className="has-text-centered">
              {expanded ? 
                <button className="button is-text" onClick={() => setExpanded(false)}>Collapse...</button>
              : <button className="button is-text" onClick={() => setExpanded(true)}>Show All</button>}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
