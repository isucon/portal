import {isuxportal} from "./pb_admin";
import {ApiError, ApiClient} from "./ApiClient";
import {AdminApiClient} from "./admin/AdminApiClient";

import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {ErrorMessage} from "./ErrorMessage";
import {Navbar} from "./Navbar";

import {AdminTeamList} from "./admin/AdminTeamList";
import {AdminTeamDetail} from "./admin/AdminTeamDetail";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
  adminClient: AdminApiClient,
}

export class AdminApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      adminClient: new AdminApiClient(this.props.client),
    };
  }

  public render() {
    return <BrowserRouter>
      <Navbar session={this.props.session} client={this.props.client} />

      <div className="columns">
        <div className="column is-3">
          <aside className="menu">
            <p className="menu-label">Aaaaa</p>
          </aside>
        </div>

        <div className="column is-9">
          <main>
            <Switch>
              <Route exact path="/admin" render={({match}) => {
                return <></>;
              }} />
              <Route exact path="/admin/teams" render={({match}) => {
                return <AdminTeamList session={this.props.session} client={this.state.adminClient} />;
              }} />
              <Route path="/admin/teams/:id" render={({match}) => {
                return <AdminTeamDetail session={this.props.session} client={this.state.adminClient} teamId={match.params.id} />;
              }} />

            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>;
  }
}
