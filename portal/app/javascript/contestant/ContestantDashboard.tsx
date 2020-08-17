import {isuxportal} from "../pb";
import {ApiError, ApiClient} from "../ApiClient";

import React from "react";
import { Link } from "react-router-dom";

import {ErrorMessage} from "../ErrorMessage";

import {ScoreGraph} from "../ScoreGraph";
import {BenchmarkJobList} from "../BenchmarkJobList";
import {ContestantBenchmarkJobForm} from "./ContestantBenchmarkJobForm";
import {Leaderboard} from "../Leaderboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export const ContestantDashboard: React.FC<Props> = ({ session, client }) => {
  const [ dashboard, setDashboard ] = React.useState<isuxportal.proto.services.contestant.DashboardResponse | null>(null);
  const [ error, setError ] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!dashboard) {
      client.getDashboard().then((db) => setDashboard(db))
        .catch((e) => setError(e));
    }
  }, [dashboard]);

  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => {
      client.getDashboard().then((db) => setDashboard(db))
        .catch((e) => setError(e));
    }, 5000);
    return (() => clearInterval(timer));
  }, []);

  if (!dashboard) return <>
    {error ? <ErrorMessage error={error} /> : null}
    <p>Loading...</p>
  </>;

  return <>
    {error ? <ErrorMessage error={error} /> : null}
    <section className="is-fullwidth px-5 py-5">
      <ScoreGraph teams={dashboard?.leaderboard?.teams!} />
    </section>
    <div className="columns">
      <div className="column is-7 px-5">
        <section className="py-5">
          <p className="title"> Leaderboard </p>
          <Leaderboard leaderboard={dashboard?.leaderboard!} />
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
          <BenchmarkJobList list={dashboard.jobs!} />
        </section>
      </div>
    </div>
  </>;
};
