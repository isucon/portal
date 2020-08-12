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

import {Navbar} from "./Navbar";
import {TeamList} from "./TeamList";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
}

export class AudienceApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <BrowserRouter>
      <Navbar session={this.props.session} client={this.props.client} />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" render={({match}) => {
            return <>
              <div className="columns is-centered">
                <article className="column is-9">
                  <p className="is-sr-only">ISUCON 告知動画</p>
                  <div className="i-yt">
                    <iframe src="https://www.youtube.com/embed/TC4mLW-pQ0U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                  </div>
                </article>
              </div>
              <TeamList session={this.props.session} client={this.props.client} />
            </>;
          }} />
        </Switch>
      </div>
    </BrowserRouter>;
  }
}
