import { isuxportal } from "./pb_admin";
import { ApiError, ApiClient } from "./ApiClient";
import { AdminApiClient } from "./admin/AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";

import { ErrorMessage } from "./ErrorMessage";
import { AdminNavbar } from "./admin/AdminNavbar";

import { AdminTeamList } from "./admin/AdminTeamList";
import { AdminTeamDetail } from "./admin/AdminTeamDetail";
import { AdminBenchmarkJobList } from "./admin/AdminBenchmarkJobList";
import { AdminBenchmarkJobDetail } from "./admin/AdminBenchmarkJobDetail";
import { AdminClarificationList } from "./admin/AdminClarificationList";
import { AdminClarificationDetail } from "./admin/AdminClarificationDetail";
import { AdminContestantInstanceList } from "./admin/AdminContestantInstanceList";
import { AdminDashboard } from "./admin/AdminDashboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export interface State {
  adminClient: AdminApiClient;
}

export class AdminApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      adminClient: new AdminApiClient(this.props.client),
    };
  }

  public render() {
    return (
      <BrowserRouter>
        <AdminNavbar session={this.props.session} client={this.state.adminClient} />

        <div className="container mt-5">
          <div className="columns">
            <div className="column is-3">
              <aside className="menu">
                <p className="menu-label">Contest</p>
                <ul className="menu-list">
                  <li>
                    <NavLink exact to="/admin" activeClassName="is-active">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/benchmark_jobs" activeClassName="is-active">
                      Benchmark Jobs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin/clarifications" activeClassName="is-active">
                      Clarifications
                    </NavLink>
                  </li>
                </ul>
                <p className="menu-label">DCIM</p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/admin/contestant_instances" activeClassName="is-active">
                      Contestant Instances
                    </NavLink>
                  </li>
                </ul>

                <p className="menu-label">Registration</p>
                <ul className="menu-list">
                  <li>
                    <NavLink to="/admin/teams" activeClassName="is-active">
                      Teams
                    </NavLink>
                  </li>
                </ul>
              </aside>
            </div>

            <div className="column is-9">
              <main>
                <Switch>
                  <Route
                    exact
                    path="/admin"
                    render={({ match }) => {
                      return <AdminDashboard session={this.props.session} client={this.state.adminClient} />;
                    }}
                  />
                  <Route
                    exact
                    path="/admin/teams"
                    render={({ match }) => {
                      return <AdminTeamList session={this.props.session} client={this.state.adminClient} />;
                    }}
                  />
                  <Route
                    path="/admin/teams/:id"
                    render={({ match }) => {
                      return (
                        <AdminTeamDetail
                          session={this.props.session}
                          client={this.state.adminClient}
                          teamId={match.params.id}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/admin/benchmark_jobs"
                    render={({ match, location }) => {
                      const query = new URLSearchParams(location.search);
                      return (
                        <AdminBenchmarkJobList
                          session={this.props.session}
                          client={this.state.adminClient}
                          teamId={query.get("team_id")}
                          incompleteOnly={query.get("incomplete_only") === "1"}
                        />
                      );
                    }}
                  />
                  <Route
                    path="/admin/benchmark_jobs/:id"
                    render={({ match }) => {
                      return (
                        <AdminBenchmarkJobDetail
                          session={this.props.session}
                          client={this.state.adminClient}
                          id={match.params.id}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/admin/clarifications"
                    render={({ location }) => {
                      const query = new URLSearchParams(location.search);
                      return (
                        <AdminClarificationList
                          session={this.props.session}
                          client={this.state.adminClient}
                          teamId={query.get("team_id")}
                          unansweredOnly={query.get("unanswered_only") === "1"}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/admin/clarifications/:id"
                    render={({ match }) => {
                      return (
                        <AdminClarificationDetail
                          session={this.props.session}
                          client={this.state.adminClient}
                          id={match.params.id}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
                    path="/admin/contestant_instances"
                    render={({ match, location }) => {
                      const query = new URLSearchParams(location.search);
                      return (
                        <AdminContestantInstanceList
                          session={this.props.session}
                          client={this.state.adminClient}
                          teamId={query.get("team_id")}
                        />
                      );
                    }}
                  />
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
