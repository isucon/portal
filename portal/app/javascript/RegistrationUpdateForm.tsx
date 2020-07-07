import {isuxportal} from "./pb";
import {ApiClient} from "./ApiClient";
import React from "react";

export interface Props {
  client: ApiClient,
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  registrationSession: isuxportal.proto.services.registration.GetRegistrationSessionResponse,
  updateRegistrationSession: () => void,
}

export interface State {
}

export class RegistrationUpdateForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <>
      <section className="mt-2">
        <h3 className="title is-3">登録完了</h3>
        <ol>
          <li>必要に応じ、下記より招待 URL をコピー & チームメンバーへ共有し、チームメンバーの参加登録を行ってください (代表者を含め 3 人まで)。</li>
          <li>代表者・メンバー問わず、Discord サーバーへ <b>必ず</b> 参加してください。各種アナウンスは原則 Discord もしくは本サイト (ポータル) において行われます。</li>
        </ol>
      </section>

      <div className="mt-3">
        <div className="columns">
          <section className="column">
            <h4 className="title is-4">チーム: {this.props.registrationSession.team!.name}</h4>
            <p>招待URL: <small><a href={this.props.registrationSession.memberInviteUrl}>{this.props.registrationSession.memberInviteUrl}</a></small></p>

            <h5 className="title is-5 mt-3">メンバーリスト</h5>
            {this.renderTeamMembers()}
          </section>

          <section className="column">
            <h4 className="title is-4">Discord</h4>
            <iframe src={`https://discordapp.com/widget?id=${this.props.registrationSession.discordServerId}`} width="350" height="500" frameBorder={0}></iframe>
          </section>
        </div>
      </div>

      <section className="mt-3">
        <h4 className="title is-4">その他</h4>
        <p>登録内容の変更については、Discord 上で運営へお問い合わせください。</p>
        <p><a href="/terms">参加規約</a>, <a href="/rules">レギュレーション</a></p>
      </section>
    </>;
  }

  renderTeamMembers() {
    return this.props.registrationSession.team!.members!.map((member) => this.renderTeamMember(member));
  }

  renderTeamMember(member: isuxportal.proto.resources.IContestant) {
    return <div className="card mt-2" key={member.id!.toString()}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={member.contestantDetail!.avatarUrl || ""} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{member.name}</p>
            <p className="subtitle is-6">
              {this.props.registrationSession.team!.leaderId == member.id ? "代表者, " : ""}
              GitHub @{member.contestantDetail!.githubLogin}, Discord {member.contestantDetail!.discordTag}
            </p>
          </div>
        </div>
      </div>
    </div>;
  }
}

