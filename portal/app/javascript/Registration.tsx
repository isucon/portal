import {isuxportal} from "./pb";
import {ApiError, ApiClient} from "./ApiClient";
import React from "react";

import {ErrorMessage} from "./ErrorMessage";

import {RegistrationLogin} from "./RegistrationLogin";
import {RegistrationForm} from "./RegistrationForm";
import {RegistrationUpdateForm} from "./RegistrationUpdateForm";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
  registrationSession: isuxportal.proto.services.registration.GetRegistrationSessionResponse | null,
  teamId: number | null,
  inviteToken: string | null,
  error: Error | null,
}

export class Registration extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const params = new URLSearchParams(document.location.search)
    this.state = {
      registrationSession: null,
      teamId: parseInt(params.get("team_id") || '0', 10),
      inviteToken: params.get("invite_token"),
      error: null,
    };
  }

  public componentDidMount() {
    this.updateRegistrationSession();
  }

  async updateRegistrationSession() {
    try {
      const session = await this.props.client.getRegistrationSession({
        teamId: this.state.teamId,
        inviteToken: this.state.inviteToken,
      });
      this.setState({registrationSession: session});
    } catch (err) {
      this.setState({error: err});
    }
  }
  public render() {
    return <>
      <header>
        <h1 className="title is-1">参加登録</h1>
      </header>
      <main>
        {this.renderError()}
        {this.renderPhase()}
      </main>
    </>;
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  public renderPhase() {
    if (this.state.registrationSession) {
      const login = <>
        {this.renderTeam()}
        <RegistrationLogin client={this.props.client} session={this.props.session} registrationSession={this.state.registrationSession} />
      </>;
      switch(this.state.registrationSession.status) {
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.NOT_LOGGED_IN:
          return login;
          break;
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.CLOSED:
          return <>
            <div className="message is-danger">
              <div className="message-body">
                参加登録受付は終了しました (定員到達もしくは締切を過ぎたため)
              </div>
            </div>
            {login}
          </>;
          break;
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.NOT_JOINABLE:
          return <>
            <div className="message is-danger">
              <div className="message-body">
                招待元のチームメンバー数が上限に達しているため、この招待を利用して参加登録を進めることはできません。
              </div>
            </div>
            {login}
          </>;
          break;
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.CREATABLE:
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINABLE:
          return <>
            {login}
            <RegistrationForm client={this.props.client} session={this.props.session} inviteToken={this.state.inviteToken} registrationSession={this.state.registrationSession} updateRegistrationSession={this.updateRegistrationSession.bind(this)} />
          </>;
          break;
        case isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status.JOINED:
          return <RegistrationUpdateForm client={this.props.client} session={this.props.session} registrationSession={this.state.registrationSession}  updateRegistrationSession={this.updateRegistrationSession.bind(this)} />;
          break;
      }
    } else {
      return <p>Loading...</p>;
    }
    const err = new Error("[BUG] undeterminable state");
    throw err;
  }

  renderTeam() {
    if (!this.state.registrationSession || !this.state.registrationSession.team) return;

    const team = this.state.registrationSession.team;
    return <>
      <section className="mt-3">
        <h3 className="title is-3">チームから招待されています</h3>
        <p>{team.leader!.name} のチーム {team.name} からの招待を受諾して参加登録します。</p>
      </section>
    </>;
  }
}
