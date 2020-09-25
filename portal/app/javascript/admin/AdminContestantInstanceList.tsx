import { isuxportal } from "../pb_admin";
import { ApiError, ApiClient } from "../ApiClient";
import { AdminApiClient } from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";
import { TimeDuration } from "../TimeDuration";
import { Timestamp } from "../Timestamp";
import { ContestantInstanceStatus } from "../ContestantInstanceStatus";

type ListFilterProps = {
  teamId: string | null;
};
const ListFilter: React.FC<ListFilterProps> = (props: ListFilterProps) => {
  const [redirect, setRedirect] = React.useState<JSX.Element | null>(null);
  const { register, handleSubmit, watch, setValue, errors } = useForm<ListFilterProps>({
    defaultValues: props,
  });
  const onSubmit = handleSubmit((data) => {
    const search = new URLSearchParams();
    search.set("team_id", data.teamId || "");
    setRedirect(
      <Redirect
        push={true}
        to={{
          pathname: "/admin/contestant_instances",
          search: `?${search.toString()}`,
        }}
      />
    );
  });

  return (
    <div className="card mt-5">
      {redirect}
      <div className="card-content">
        <form onSubmit={onSubmit}>
          <div className="columns">
            <div className="column is-3 field">
              <label className="label" htmlFor="AdminContestantInstanceListFilter-teamId">
                Team ID
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="teamId"
                  id="AdminContestantInstanceListFilter-teamId"
                  ref={register}
                />
              </div>
            </div>
            <div className="column is-3 field">
              <button className="button is-link" type="submit">
                Filter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
  teamId: string | null;
}

export interface State {
  list: isuxportal.proto.services.admin.ListContestantInstancesResponse | null;
  error: Error | null;
}

export class AdminContestantInstanceList extends React.Component<Props, State> {
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
      const list = await this.props.client.listContestantInstances(
        this.props.teamId ? parseInt(this.props.teamId, 10) : null
      );
      this.setState({ list });
    } catch (error) {
      this.setState({ error });
    }
  }

  public render() {
    return (
      <>
        <header>
          <h1 className="title is-1">Contestant Instances</h1>
        </header>
        <main>
          {this.renderFilter()}
          {this.renderError()}
          {this.renderList()}
        </main>
      </>
    );
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  renderFilter() {
    return <ListFilter teamId={this.props.teamId} />;
  }

  renderList() {
    if (!this.state.list) return <p>Loading...</p>;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cloud ID</th>
            <th>Team</th>
            <th>Number</th>
            <th>Private Address</th>
            <th>Public Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{this.state.list.contestantInstances!.map((ci, i) => this.renderContestantInstance(ci, i))}</tbody>
      </table>
    );
  }

  renderContestantInstance(ci: isuxportal.proto.resources.IContestantInstance, i: number) {
    const id = ci.id!.toString();
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{ci.cloudId}</td>
        <td>
          <Link to={`/admin/teams/${ci.team!.id!.toString()}`}>
            {ci.team!.name} (#{ci.team!.id})
          </Link>
        </td>
        <td>{ci.number}</td>
        <td>{ci.privateIpv4Address}</td>
        <td>{ci.publicIpv4Address}</td>
        <td>
          <ContestantInstanceStatus status={ci.status!} />
        </td>
      </tr>
    );
  }
}
