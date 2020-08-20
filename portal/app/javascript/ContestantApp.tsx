import {isuxportal} from "./pb";
import {ApiError, ApiClient} from "./ApiClient";

import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {ErrorMessage} from "./ErrorMessage";

import {ContestantNavbar} from "./contestant/ContestantNavbar";
import {ContestantBenchmarkJobList} from "./contestant/ContestantBenchmarkJobList";
import {ContestantBenchmarkJobDetail} from "./contestant/ContestantBenchmarkJobDetail";
import {ContestantClarificationList} from "./contestant/ContestantClarificationList";
import {ContestantDashboard} from "./contestant/ContestantDashboard";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
}

export class ContestantApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <BrowserRouter>
      <ContestantNavbar session={this.props.session} client={this.props.client} />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/contestant" render={({match}) => {
            return <ContestantDashboard session={this.props.session} client={this.props.client} />;
          }} />
          <Route exact path="/contestant/benchmark_jobs" render={({match}) => {
            return <ContestantBenchmarkJobList session={this.props.session} client={this.props.client} />;
          }} />
          <Route path="/contestant/benchmark_jobs/:id" render={({match}) => {
            return <ContestantBenchmarkJobDetail session={this.props.session} client={this.props.client} id={match.params.id} />;
          }} />
          <Route exact path="/contestant/clarifications" render={({match}) => {
            return <ContestantClarificationList session={this.props.session} client={this.props.client} />;
          }} />

        </Switch>
      </div>
    </BrowserRouter>;
  }
}
