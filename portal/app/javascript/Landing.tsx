import { isuxportal } from "./pb";
import { ApiClient } from "./ApiClient";
import React from "react";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export interface State {}

export class Landing extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        {this.renderHero()}
        {this.renderMain()}
      </>
    );
  }

  public renderHero() {
    return (
      <header className="hero">
        <div className="hero-body">
          <div className="isux-landing-logo-wrapper container has-text-centered">
            <img src="/isucon11_logo.png" />
          </div>
        </div>
      </header>
    )
  }

  public renderMain() {
    if (this.props.session.contestant) {
      return (
        <main>
          <p className="block">
            参加登録が完了しています。情報を修正したい場合は右上の「参加登録/修正」から行えます。
          </p>
        </main>
      )
    }

    if (this.props.session.contest?.status === isuxportal.proto.resources.Contest.Status.REGISTRATION) {
      return (
        <main>
          <p className="block">
            参加登録は右上から行えます
          </p>
        </main>
      )
    } else {
      return (
        <main>
          <p className="block">
            現在は参加登録を受け付けていません
          </p>
        </main>
      )
    }
  }
}
