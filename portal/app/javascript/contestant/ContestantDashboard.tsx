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

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export const ContestantDashboard: React.FC<Props> = ({ session, client }) => {
  const [requestingDashboard, setRequestingDashboard] = React.useState(false);
  const [requestingJobs, setRequestingJobs] = React.useState(false);
  const [dashboard, setDashboard] = React.useState<isuxportal.proto.services.contestant.DashboardResponse | null>(null);
  const [jobs, setJobs] = React.useState<isuxportal.proto.resources.IBenchmarkJob[] | null>(null);
  const [error, setError] = React.useState<Error | null>(null);

  const [teamPins, setTeamPins] = React.useState(new TeamPins());
  const [teamPinsMap, setTeamPinsMap] = React.useState(teamPins.all());
  teamPins.onChange = setTeamPinsMap;

  const refreshDashboard = () => {
    if (requestingDashboard) return;
    setRequestingDashboard(true);
    return client
      .getDashboard()
      .then((db) => {
        setDashboard(db);
        setError(null);
        setRequestingDashboard(false);
      })
      .catch((e) => {
        setError(e);
        setRequestingDashboard(false);
      });
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
  }, []);

  if (!dashboard || !jobs)
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
            <ReloadButton requesting={requestingDashboard || requestingJobs} onClick={refreshAll} />
          </div>
        </div>
      </section>
      <section className="is-fullwidth px-5 py-5 is-hidden-touch">
        <ScoreGraph
          teams={dashboard?.leaderboard?.teams!}
          contest={session.contest!}
          teamId={session.team!.id!}
          teamPins={teamPinsMap}
        />
      </section>
      <div className="columns">
        <div className="column is-7 px-5">
          <section className="py-5">
            <p className="title"> Leaderboard </p>
            <Leaderboard
              leaderboard={dashboard?.leaderboard!}
              teamId={session.team!.id!}
              teamPins={teamPinsMap}
              onPin={teamPins.set}
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
