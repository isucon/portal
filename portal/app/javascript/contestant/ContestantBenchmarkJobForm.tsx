import {isuxportal} from "../pb";
import {ApiError, ApiClient} from "../ApiClient";

import React from "react";
import { Redirect } from "react-router-dom";
import { useForm } from 'react-hook-form';

import {ErrorMessage} from "../ErrorMessage";

type Props = {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
};

export const ContestantBenchmarkJobForm: React.FC<Props>  = (props: Props) => {
  const [redirect, setRedirect] = React.useState<JSX.Element | null>(null);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);
  const { register, handleSubmit, watch, setValue, errors } = useForm<{
    targetId: string,
  }>({
    defaultValues: {},
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setRequesting(true);
      const resp = await props.client.enqueueBenchmarkJob({
        targetId: data.targetId ? parseInt(data.targetId, 10) : 0, // TODO: ContestantInstance
      });
      setRedirect(<Redirect push={true} to={{
        pathname: `/contestant/benchmark_jobs/${encodeURIComponent(resp.job!.id!.toString())}`,
      }} />);
    } catch (e) {
      setError(e);
      setRequesting(false);
    }
  });

  return <div className="card mt-5">
    {redirect}
    <div className="card-content">
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className="column is-3 field has-addons">
            <div className="control">
              <input className="input" type="text" name="targetId" id="ContestantBenchmarkJobForm-targetId" ref={register} placeholder="Target ID" />
            </div>
            <div className="control">
              <button className="button is-link" type="submit" disabled={requesting}>Enqueue</button>
            </div>
          </div>
        </div>
        {error ? <ErrorMessage error={error} /> : null}
      </form>
    </div>
  </div>;
}


