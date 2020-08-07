import {isuxportal} from "../pb_admin";
import {ApiError, ApiClient} from "../ApiClient";
import {AdminApiClient} from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import {ErrorMessage} from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: AdminApiClient,
  teamId: string | null, 
  incompleteOnly: boolean,
}

export interface State {
  list: isuxportal.proto.services.admin.ListBenchmarkJobsResponse | null,
  error: Error | null,
}

export class AdminBenchmarkJobList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: null,
      error: null,
    };
  }

  public componentDidMount() {
    this.updateList();
  }

  async updateList() {
    try {
      const list = await this.props.client.listBenchmarkJobs(
        this.props.teamId ? parseInt(this.props.teamId, 10) : null,
        this.props.incompleteOnly,
      );
      this.setState({list});
    } catch (error) {
      this.setState({error});
    }
  }

  public render() {
    return <>
      <header>
        <h1 className="title is-1">Benchmark Jobs</h1>
      </header>
      <main>
        {this.renderError()}
        {this.renderList()}
      </main>
    </>;
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  renderList() {
    if (!this.state.list) return <p>Loading...</p>;
    return <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Team</th>
          <th>Score</th>
          <th>Instance</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {this.state.list.jobs!.map((job,i) => this.renderJob(job, i))}
      </tbody>
    </table>;
  }

  renderJob(job: isuxportal.proto.resources.IBenchmarkJob, i: number) {
    const id = job.id!.toString();
    return <tr key={id}>
      <td><Link to={`/admin/benchmark_jobs/${encodeURIComponent(id)}`}>#{id}</Link></td>
      <td><Link to={`/admin/teams/${encodeURIComponent(job.team!.id!.toString())}`}>{job.team!.id}: {job.team!.name}</Link></td>
      <td>{job.score}</td>
      <td>{job.instanceName}</td>
      <td>
        {job.status}
      </td>
    </tr>;
  }
}
