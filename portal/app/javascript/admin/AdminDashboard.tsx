import {isuxportal} from "../pb_admin";
import {AdminApiClient} from "./AdminApiClient";

import React from "react";

import {ErrorMessage} from "../ErrorMessage";
import {ReloadButton} from "../ReloadButton";

import {ContestClock} from "../ContestClock";
import {ScoreGraph} from "../ScoreGraph";
import {Leaderboard} from "../Leaderboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: AdminApiClient,
}

export const AdminDashboard: React.FC<Props> = ({ session, client }) => {
  const [ requesting, setRequesting ] = React.useState(false);
  const [ dashboard, setDashboard ] = React.useState<isuxportal.proto.services.admin.DashboardResponse | null>(null);
  const [ error, setError ] = React.useState<Error | null>(null);

  const refresh = () => {
    if (requesting) return;
    setRequesting(true);
    client.getDashboard().then((db) => {
      setDashboard(db);
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
    const timer = setInterval(() => refresh(), 5000);
    return (() => clearInterval(timer));
  }, []);

  if (!dashboard) return <>
    {error ? <ErrorMessage error={error} /> : null}
    <p>Loading...</p>
  </>;

  return <>
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
    <section className="is-fullwidth px-5 py-5">
      <ScoreGraph teams={dashboard?.leaderboard?.teams!} contest={session.contest!} />
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
