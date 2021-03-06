import { isuxportal } from "./pb";
import { ApiError, ApiClient } from "./ApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { ErrorMessage } from "./ErrorMessage";

import { Navbar } from "./Navbar";
import { TeamList } from "./TeamList";
import { AudienceDashboard } from "./AudienceDashboard";
import { Landing } from './Landing';
import { Registration } from "./Registration";
import { EnvCheck } from "./EnvCheck";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export interface State {}

export class AudienceApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <BrowserRouter>
        <Navbar session={this.props.session} client={this.props.client} />

        <div className="container px-5 py-5">
          <Switch>
            <Route
              exact
              path="/"
              render={({ match }) => {
                return (
                  <>
                    {this.props.session.contest!.status == isuxportal.proto.resources.Contest.Status.FINISHED ||
                    this.props.session.contest!.status == isuxportal.proto.resources.Contest.Status.STARTED ? (
                      <AudienceDashboard session={this.props.session} client={this.props.client} />
                    ) : (
                      <Landing session={this.props.session} client={this.props.client} />
                    )}
                  </>
                );
              }}
            />
            <Route
              exact
              path="/teams"
              render={({ match }) => {
                return (
                  <>
                    <TeamList session={this.props.session} client={this.props.client} />
                  </>
                );
              }}
            />
            <Route
              exact
              path="/registration"
              render={({ match }) => {
                return (
                  <>
                    <Registration session={this.props.session} client={this.props.client} />
                  </>
                );
              }}
            />
            <Route
              exact
              path="/registration/env_check"
              render={({ match }) => {
                return (
                  <>
                    <EnvCheck session={this.props.session} client={this.props.client} />
                  </>
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
