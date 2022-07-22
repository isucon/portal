import { isuxportal } from "../pb_admin";
import { AdminApiClient } from "./AdminApiClient";
import { TeamPinsMap, TeamPins } from "../TeamPins";
import dayjs from "dayjs";
import utcPlugin from "dayjs/plugin/utc";
import timezonePlugin from "dayjs/plugin/timezone";
dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.tz.setDefault("Asia/Tokyo");

import React, { useState } from "react";

import { ErrorMessage } from "../ErrorMessage";
import { TimeDuration } from "../TimeDuration";
import { ReloadButton } from "../ReloadButton";

import { ContestClock } from "../ContestClock";
import { ScoreGraph } from "../ScoreGraph";
import { Leaderboard } from "../Leaderboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
}

export const AdminDashboard: React.FC<Props> = ({ session, client }) => {
  const [requesting, setRequesting] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.admin.DashboardResponse | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const [pinnedTeamLeaderboardItems, setPinnedTeamLeaderboardItems] = React.useState<
    isuxportal.proto.resources.ILeaderboardItem[]
  >([]);

  const [teamPins, setTeamPins] = React.useState(new TeamPins());
  const [teamPinsMap, setTeamPinsMap] = React.useState(teamPins.all());
  teamPins.onChange = setTeamPinsMap;

  const refresh = async () => {
    if (requesting) return;
    setRequesting(true);

    try {
      const db = await client.getDashboard();
      setDashboard(db);

      const items = await client.getLeaderboardItems(Array.from(teamPinsMap.keys()));
      setPinnedTeamLeaderboardItems(items);

      setError(null);
      setRequesting(false);
    } catch (e) {
      setError(e);
      setRequesting(false);
    }
  };
  React.useEffect(() => {
    if (!dashboard) refresh();
  }, [dashboard]);

  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => refresh(), 10000);
    return () => clearInterval(timer);
  }, [refresh, teamPinsMap]);

  React.useEffect(() => {
    if (!dashboard || !teamPins) return;
    teamPins.removeUnknownItems(() =>
      [...(dashboard.leaderboard?.teams ?? []), ...(dashboard.leaderboard?.hiddenTeams ?? [])].map((v) =>
        v.team!.id!.toString()
      )
    );
  }, [teamPins, dashboard]);

  if (!dashboard)
    return (
      <>
        {error ? <ErrorMessage error={error} /> : null}
        <p>Loading...</p>
      </>
    );

  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      <section className="">
        <div className="level">
          <div className="level-left">
            <ContestClock contest={session.contest!} />
          </div>
          <div className="level-right">
            <ReloadButton requesting={requesting} onClick={refresh} />
          </div>
        </div>
      </section>
      <section className="is-fullwidth px-5 py-5 is-hidden-touch">
        <ScoreGraph teams={pinnedTeamLeaderboardItems} contest={session.contest!} />
      </section>
      <section className="mt-3">
        <div className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Unanswered clars</p>
              <p className="title">{dashboard.unansweredClarificationCount}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Longest waiting clar</p>
              <p className="title">
                {dashboard.earliestUnansweredClarificationAt ? (
                  <TimeDuration a={dashboard.earliestUnansweredClarificationAt} />
                ) : (
                  "--:--:--"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="columns mt-3">
        <div className="column is-12">
          <section className="py-5">
            <p className="title"> Leaderboard </p>
            <Leaderboard
              leaderboard={dashboard?.leaderboard!}
              teamPins={teamPinsMap}
              onPin={teamPins.set}
              enableHiddenTeamsMode={true}
            />
          </section>
        </div>
      </div>
      <div className="columns mt-3">
        <div className="column is-12">
          <section className="py-5">
            <p className="title"> Dump Leaderboard </p>
            <DumpLeaderboard client={client} />
            <p>Dev consoleに出力されます</p>
          </section>
        </div>
      </div>
    </>
  );
};

const DumpLeaderboard = ({ client }: { client: AdminApiClient }) => {
  const [when, setWhen] = useState(dayjs());

  const getWhenString = () => {
    const isoString = when.format("YYYY-MM-DDTHH:mm:ss.SSSZ");
    return isoString.substring(0, ((isoString.indexOf("T") | 0) + 6) | 0);
  };
  const setWhenString = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhen(dayjs(`${e.target.value}:00`));
  };

  const onDumpClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const res = await client.getDumpLeaderboard(when.toDate());
    console.table(
      res.items.map((item) => ({
        position: item.position,
        teamName: item.team?.name,
        latestScore: item.latestScore?.score,
        bestScore: item.bestScore?.score,
      }))
    );
    console.log(res.items);
    console.log(JSON.stringify(res.items));
  };

  return (
    <>
      <input type="datetime-local" value={getWhenString()} onChange={setWhenString} />
      <button onClick={onDumpClick}>Dump</button>
    </>
  );
};
