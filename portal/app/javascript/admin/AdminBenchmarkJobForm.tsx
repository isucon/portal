import { isuxportal } from "../pb_admin";
import { ApiError, ApiClient } from "../ApiClient";
import { AdminApiClient } from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

type Props = {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
};

export const AdminBenchmarkJobForm: React.FC<Props> = (props: Props) => {
  const [redirect, setRedirect] = React.useState<JSX.Element | null>(null);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);
  const { register, handleSubmit, watch, setValue, errors } = useForm<{
    teamId: string;
    targetId: string;
  }>({
    defaultValues: {},
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setRequesting(true);
      const resp = await props.client.enqueueBenchmarkJob({
        teamId: parseInt(data.teamId, 10),
        targetId: data.targetId ? parseInt(data.targetId, 10) : 0,
      });
      setRedirect(
        <Redirect
          push={true}
          to={{
            pathname: `/admin/benchmark_jobs/${encodeURIComponent(resp.job!.id!.toString())}`,
          }}
        />
      );
    } catch (e) {
      setError(e);
      setRequesting(false);
    }
  });

  return (
    <div className="card mt-5">
      {redirect}
      <div className="card-content">
        <form onSubmit={onSubmit}>
          <div className="columns">
            <div className="column is-3 field">
              <label className="label" htmlFor="AdminBenchmarkJobForm-teamId">
                Team ID
              </label>
              <div className="control">
                <input className="input" type="text" name="teamId" id="AdminBenchmarkJobForm-teamId" ref={register} />
              </div>
            </div>
            <div className="column is-3 field">
              <label className="label" htmlFor="AdminBenchmarkJobForm-targetId">
                Target ID
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="targetId"
                  id="AdminBenchmarkJobForm-targetId"
                  ref={register}
                />
              </div>
            </div>
            <div className="column is-3 field">
              <button className="button is-link" type="submit" disabled={requesting}>
                Enqueue
              </button>
            </div>
          </div>
          {error ? <ErrorMessage error={error} /> : null}
        </form>
      </div>
    </div>
  );
};
