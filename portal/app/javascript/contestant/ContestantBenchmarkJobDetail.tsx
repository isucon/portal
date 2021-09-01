import { isuxportal } from "../pb_admin";
import { ApiError, ApiClient } from "../ApiClient";

import React from "react";

import { BenchmarkJobDetail } from "../BenchmarkJobDetail";

import { ErrorMessage } from "../ErrorMessage";
import { ReloadButton } from "../ReloadButton";
import { ContestantBenchmarkJobForm } from "./ContestantBenchmarkJobForm";
import { Redirect } from "react-router-dom";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
  id: number | string;
}

export interface State {
  job: isuxportal.proto.resources.IBenchmarkJob | null;
  error: Error | null;
  requesting: boolean;
  timer: number | null;
}

export class ContestantBenchmarkJobDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      job: null,
      error: null,
      requesting: false,
      timer: null,
    };
  }

  public componentDidMount() {
    this.updateJob();
    this.setState({ timer: window.setInterval(this.updateJob.bind(this), 5000) });
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps !== this.props) this.updateJob();
  }

  public componentWillUnmount() {
    if (this.state.timer) window.clearInterval(this.state.timer);
  }

  async updateJob() {
    if (this.state.requesting) return;
    try {
      this.setState({ requesting: true });
      const resp = await this.props.client.getBenchmarkJob(this.props.id);
      this.setState({ job: resp.job!, requesting: false, error: null });
    } catch (error) {
      this.setState({ error, requesting: false });
    }
  }

  public render() {
    return (
      <>
        <header className="block">
          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">Job #{this.props.id}</h1>
            </div>
            <div className="level-right">
              <ReloadButton requesting={this.state.requesting} onClick={this.updateJob.bind(this)} />
            </div>
          </div>
        </header>
        <main className="block">
          {this.renderError()}
          {this.renderJob()}
        </main>
        <aside className="block">{this.renderForm()}</aside>
      </>
    );
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  renderJob() {
    if (!this.state.job) return <p>Loading...</p>;
    return (
      <>
        <BenchmarkJobDetail job={this.state.job} admin={false} />
      </>
    );
  }

  renderForm() {
    return (
      <>
        <ContestantBenchmarkReEnqueueForm job={this.state.job} client={this.props.client} />
      </>
    );
  }
}

const ContestantBenchmarkReEnqueueForm = ({
  job,
  client,
}: {
  job: isuxportal.proto.resources.IBenchmarkJob | null;
  client: ApiClient;
}) => {
  const [redirect, setRedirect] = React.useState<JSX.Element | null>(null);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<Error | null>(null);
  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const jobId = job?.target?.id
    if (!jobId) return

    try {
      setRequesting(true);
      const resp = await client.enqueueBenchmarkJob({
        targetId: jobId,
      });
      setRedirect(
        <Redirect
          push={true}
          to={{
            pathname: `/contestant/benchmark_jobs/${encodeURIComponent(resp.job!.id!.toString())}`,
          }}
        />
      );
    } catch (e) {
      setError(e);
    } finally {
      setRequesting(false);
    }
  };

  if (!job?.result?.execution) return null;

  return (
    <div className="card mt-5">
      {redirect}
      <header className="card-header">
        <h4 className="is-4 card-header-title">Re-Enqueue</h4>
      </header>
      <div className="card-content">
        <div className="field has-addons">
          <div className="control">
            <button className="button is-primary" type="submit" disabled={requesting} onClick={onClick}>
              Re-Enqueue
            </button>
          </div>
        </div>
        <p className="is-size-7">
          同一ベンチ対象サーバーで再度 Enqueue できます。
        </p>
        {error ? <ErrorMessage error={error} /> : null}
      </div>
    </div>
  )
};
