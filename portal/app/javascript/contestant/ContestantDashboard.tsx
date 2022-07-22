import { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";
import { TeamPinsMap, TeamPins } from "../TeamPins";

import React from "react";
import { Link } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";
import { ReloadButton } from "../ReloadButton";

import { ContestClock } from "../ContestClock";
import { ScoreGraph } from "../ScoreGraph";
import { BenchmarkJobList } from "../BenchmarkJobList";
import { ContestantBenchmarkJobForm } from "./ContestantBenchmarkJobForm";
import { Leaderboard } from "../Leaderboard";
import { ContestantNotificationSubscriptionPanel } from "./ContestantNotificationSubscriptionPanel";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;

  serviceWorker: ServiceWorkerRegistration | null;
  localNotificationEnabled: boolean;
  setLocalNotificationEnabled: (flag: boolean) => any;
}

export const ContestantDashboard: React.FC<Props> = (props: Props) => {
  const { session, client } = props;
  const [requestingDashboard, setRequestingDashboard] = React.useState(false);
  const [requestingJobs, setRequestingJobs] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.audience.IDashboardResponse | null>(null);
  const [jobs, setJobs] = React.useState<isuxportal.proto.resources.IBenchmarkJob[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const [pinnedTeamLeaderboardItems, setPinnedTeamLeaderboardItems] = React.useState<
    isuxportal.proto.resources.ILeaderboardItem[]
  >([]);

  const [teamPins, setTeamPins] = React.useState(new TeamPins());
  const [teamPinsMap, setTeamPinsMap] = React.useState(teamPins.all());
  teamPins.onChange = setTeamPinsMap;

  const refreshDashboard = async () => {
    if (requestingDashboard) return;
    setRequestingDashboard(true);

    try {
      const db = await client.getContestantMergedDashboard(session.team!.id! as number);
      setDashboard(db);

      const items = await client.getAudienceLeaderboardItems(Array.from(teamPinsMap.keys()));
      setPinnedTeamLeaderboardItems(items);

      setError(null);
      setRequestingDashboard(false);
    } catch (e) {
      setError(e);
      setRequestingDashboard(false);
    }
  };
  const refreshJobs = () => {
    if (requestingJobs) return;
    setRequestingJobs(true);
    return client
      .listBenchmarkJobs(5)
      .then((r) => {
        setJobs(r.jobs);
        setError(null);
        setRequestingJobs(false);
      })
      .catch((e) => {
        setError(e);
        setRequestingJobs(false);
      });
  };
  const refreshAll = () => {
    refreshDashboard();
    refreshJobs();
  };

  React.useEffect(() => {
    if (!dashboard) refreshDashboard();
  }, [dashboard]);
  React.useEffect(() => {
    if (!jobs) refreshJobs();
  }, [jobs]);

  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => refreshAll(), 10000);
    return () => clearInterval(timer);
  }, [refreshAll, teamPinsMap]);

  React.useEffect(() => {
    if (!dashboard || !teamPins) return;
    teamPins.removeUnknownItems(() =>
      [...(dashboard.leaderboard?.teams ?? []), ...(dashboard.leaderboard?.hiddenTeams ?? [])].map((v) =>
        v.team!.id!.toString()
      )
    );
  }, [teamPins, dashboard]);

  if (!dashboard || !jobs)
    return (
      <>
        {error ? <ErrorMessage error={error} /> : null}
        <p>Loading...</p>
      </>
    );

  const scoreGraphTeams = [...pinnedTeamLeaderboardItems];
  if (dashboard?.leaderboard && session) {
    const contestantTeamLeaderboardItem = dashboard.leaderboard.teams?.find((v) => session.team!.id === v.team!.id);
    if (contestantTeamLeaderboardItem) scoreGraphTeams.push(contestantTeamLeaderboardItem);

    const contestantTeamLeaderboardHiddenItem = dashboard.leaderboard.hiddenTeams?.find(
      (v) => session.team!.id === v.team!.id
    );
    if (contestantTeamLeaderboardHiddenItem) scoreGraphTeams.push(contestantTeamLeaderboardHiddenItem);
  }

  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      <section className="">
        <div className="level">
          <div className="level-left">
            <ContestClock contest={session.contest!} />
          </div>
          <div className="level-right has-text-right">
            <div className="mr-1">
              <ContestantNotificationSubscriptionPanel
                session={session}
                client={client}
                serviceWorker={props.serviceWorker}
                localNotificationEnabled={props.localNotificationEnabled}
                setLocalNotificationEnabled={props.setLocalNotificationEnabled}
              />
            </div>
            <ReloadButton requesting={requestingDashboard || requestingJobs} onClick={refreshAll} />
          </div>
        </div>
      </section>
      <section className="is-fullwidth py-5 is-hidden-touch">
        <ScoreGraph teams={scoreGraphTeams} contest={session.contest!} teamId={session.team!.id!} />
      </section>
      <div className="columns">
        <div className="column is-7 px-5">
          <section className="py-5">
            <p className="title"> Leaderboard </p>
            <Leaderboard
              leaderboard={dashboard?.leaderboard!}
              teamId={session.team!.id!}
              teamPins={teamPinsMap}
              onPin={teamPins.setAndEnsureCapacity}
              enableHiddenTeamsMode={false}
            />
          </section>
        </div>
        <div className="column is-5 px-5">
          <section className="py-5">
            <p className="title"> Job Enqueue Form </p>
            <ContestantBenchmarkJobForm session={session} client={client} />
          </section>
          <section className="py-5">
            <p className="title"> Job List </p>
            <p>
              <Link to="/contestant/benchmark_jobs">Show All</Link>
            </p>
            <BenchmarkJobList list={jobs} />
          </section>
        </div>
      </div>
    </>
  );
};
