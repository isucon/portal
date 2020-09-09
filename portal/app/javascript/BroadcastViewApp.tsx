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
import {BroadcastLeaderboard} from "./broadcast_view/BroadcastLeaderboard";

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
        <Route exact path="/broadcast_view/leaderboard" render={({match, location}) => {
          const params = new URLSearchParams(location.search);
          return <>
            <BroadcastLeaderboard client={this.props.client} limit={parseInt(params.get('limit') || '15', 10)} mode={(params.get('mode') || 'all')} />
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
