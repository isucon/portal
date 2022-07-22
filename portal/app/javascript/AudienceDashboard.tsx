import { isuxportal } from "./pb";
import { ApiError, ApiClient } from "./ApiClient";
import { TeamPinsMap, TeamPins } from "./TeamPins";

import React from "react";

import { ErrorMessage } from "./ErrorMessage";
import { ReloadButton } from "./ReloadButton";

import { ContestClock } from "./ContestClock";
import { ScoreGraph } from "./ScoreGraph";
import { Leaderboard } from "./Leaderboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export const AudienceDashboard: React.FC<Props> = ({ session, client }) => {
  const [requesting, setRequesting] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);
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
      const db = await client.getAudienceDashboard();
      setDashboard(db);

      const items = await client.getAudienceLeaderboardItems(Array.from(teamPinsMap.keys()));
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
      <section className="is-fullwidth py-5 is-hidden-touch">
        <ScoreGraph teams={pinnedTeamLeaderboardItems} contest={session.contest!} />
      </section>
      <div className="columns">
        <div className="column is-12">
          <section className="py-5">
            <p className="title"> Leaderboard </p>
            <Leaderboard
              leaderboard={dashboard?.leaderboard!}
              teamPins={teamPinsMap}
              onPin={teamPins.set}
              enableHiddenTeamsMode={false}
            />
          </section>
        </div>
      </div>
    </>
  );
};
