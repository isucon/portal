import {isuxportal} from "../pb_admin";
import {ApiError, ApiClient} from "../ApiClient";

import React from "react";

import {BenchmarkJobDetail} from "../BenchmarkJobDetail";

import {ErrorMessage} from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
  id: number, 
}

export interface State {
  job: isuxportal.proto.resources.IBenchmarkJob | null,
  error: Error | null,
  requesting: boolean,
}

export class ContestantBenchmarkJobDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      job: null,
      error: null,
      requesting: false,
    };
  }

  public componentDidMount() {
    this.updateJob();
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps !== this.props) this.updateJob();
  }

  async updateJob() {
    try {
      const resp = await this.props.client.getBenchmarkJob(this.props.id);
      this.setState({job: resp.job!});
    } catch (error) {
      this.setState({error});
    }
  }

  public render() {
    return <>
      <header>
        <h1 className="title is-1">Job #{this.props.id}</h1>
      </header>
      <main>
        {this.renderError()}
        {this.renderJob()}
      </main>
    </>;
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  renderJob() {
    if (!this.state.job) return <p>Loading...</p>;
    return <>
      <BenchmarkJobDetail job={this.state.job} admin={false} />
    </>;
  }
}


