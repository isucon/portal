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
import {BroadcastClock} from "./broadcast_view/BroadcastClock";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
}

export class BroadcastViewApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <BrowserRouter>
      <Switch>
        <Route exact path="/broadcast_view/clock" render={({match}) => {
          return <>
            <BroadcastClock contest={this.props.session.contest!} />
          </>;
        }} />
        <Route exact path="/broadcast_view/leaderboard" render={({match}) => {
          return <>
          </>;
        }} />
        <Route exact path="/broadcast_view/score_updates" render={({match}) => {
          return <>
          </>;
        }} />
      </Switch>
    </BrowserRouter>;
  }
}
