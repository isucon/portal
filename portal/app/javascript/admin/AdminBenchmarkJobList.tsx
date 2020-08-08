import {isuxportal} from "../pb_admin";
import {ApiError, ApiClient} from "../ApiClient";
import {AdminApiClient} from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useForm } from 'react-hook-form';

import {ErrorMessage} from "../ErrorMessage";

type ListFilterProps = {
  teamId: string | null,
  incompleteOnly: boolean,
}
const ListFilter: React.FC<ListFilterProps>  = (props: ListFilterProps) => {
  const [redirect, setRedirect] = React.useState<JSX.Element | null>(null);
  const { register, handleSubmit, watch, setValue, errors } = useForm<ListFilterProps>({
    defaultValues: props,
  });
  const onSubmit = handleSubmit((data) => {
    const search = new URLSearchParams();
    search.set("team_id", data.teamId || "");
    search.set("incompleteOnly", data.incompleteOnly ? '1' : '0');
    setRedirect(<Redirect push={true} to={{
      pathname: "/admin/benchmark_jobs",
      search: `?${search.toString()}`,
    }} />);
  });

  return <div className="card mt-5">
    {redirect}
    <div className="card-content">
      <form onSubmit={onSubmit}>
        <div className="columns">
          <div className="column is-3 field">
            <label className="label" htmlFor="AdminBenchmarkJobListFilter-teamId">Team ID</label>
            <div className="control">
              <input className="input" type="text" name="teamId" id="AdminBenchmarkJobListFilter-teamId" ref={register} />
            </div>
          </div>
          <div className="column is-3 field">
            <label className="label" htmlFor="AdminBenchmarkJobListFilter-incompleteOnly">Incomplete only</label>
            <div className="control">
              <input type="checkbox" name="incompleteOnly" id="AdminBenchmarkJobListFilter-incompleteOnly" ref={register} />
            </div>
          </div>
          <div className="column is-3 field">
            <button className="button is-link" type="submit">Filter</button>
          </div>
        </div>
      </form>
    </div>
  </div>;
}

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

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps !== this.props) this.updateList();
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
      <Switch>
        <Route exact path="/admin/benchmark_jobs">
          <header>
            <h1 className="title is-1">Benchmark Jobs</h1>
          </header>
          <main>
            {this.renderFilter()}
            {this.renderError()}
            {this.renderList()}
          </main>
        </Route>
      </Switch>
    </>;
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  renderFilter() {
    return <ListFilter teamId={this.props.teamId} incompleteOnly={this.props.incompleteOnly} />;
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
        {isuxportal.proto.resources.BenchmarkJob.Status[job.status!]}
      </td>
    </tr>;
  }
}


