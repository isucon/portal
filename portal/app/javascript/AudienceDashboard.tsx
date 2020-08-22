import {isuxportal} from "./pb";
import {ApiError, ApiClient} from "./ApiClient";

import React from "react";

import {ErrorMessage} from "./ErrorMessage";

import {ScoreGraph} from "./ScoreGraph";
import {BenchmarkJobList} from "./BenchmarkJobList";
import {Leaderboard} from "./Leaderboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export const AudienceDashboard: React.FC<Props> = ({ session, client }) => {
  const [ dashboard, setDashboard ] = React.useState<isuxportal.proto.services.audience.DashboardResponse | null>(null);
  const [ error, setError ] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!dashboard) {
      client.getAudienceDashboard().then((db) => setDashboard(db))
        .catch((e) => setError(e));
    }
  }, [dashboard]);

  React.useEffect(() => {
    // TODO: Retry with backoff
    const timer = setInterval(() => {
      client.getAudienceDashboard().then((db) => setDashboard(db))
        .catch((e) => setError(e));
    }, 30000);
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
      <div className="column is-12">
        <section className="py-5">
          <p className="title"> Leaderboard </p>
          <Leaderboard leaderboard={dashboard?.leaderboard!} />
        </section>
      </div>
    </div>
  </>;
};
