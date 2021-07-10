import { isuxportal } from "./pb";
import { ApiClient } from "./ApiClient";
import React from "react";

import { ErrorMessage } from "./ErrorMessage";

export interface Props {
  client: ApiClient;
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  registrationSession: isuxportal.proto.services.registration.GetRegistrationSessionResponse;
  updateRegistrationSession: () => void;
  enableEdit: () => void;
}

export interface State {
  error: Error | null;
}

export class RegistrationStatus extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  onEditButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.enableEdit();
  }

  async onWithdrawButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!confirm("本当にキャンセルしてよろしいですか? この操作は元に戻すことができません。")) return;
    try {
      await this.props.client.deleteRegistration();
      alert("参加をキャンセルしました。");
      document.location.href = "/";
    } catch (error) {
      this.setState({ error });
    }
  }

  onInviteUrlClick(event: React.MouseEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      event.target.select();
    }
  }

  async onCopyInviteButtonClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    await navigator.clipboard.writeText(this.props.registrationSession.memberInviteUrl);
  }

  public render() {
    const isTeamConditionOk = this.props.registrationSession.team!.members!.every(
      (member) => member.detail!.isSshKeyRegistered && member.detail!.isDiscordGuildMember
    );

    return (
      <>
        <section className="isux-registration-status-complete mt-2">
          <h3 className="title is-3">登録完了</h3>
          <ol>
            <li>
              必要に応じ、下記より招待 URL をコピー & チームメンバーへ共有し、チームメンバーの参加登録を行ってください
              (代表者を含め 3 人まで)。
            </li>
            <li>
              代表者・メンバー問わず、Discord サーバーへ <b>必ず</b> 参加してください。各種アナウンスは原則 Discord
              もしくは本サイト (ポータル) において行われます。
            </li>
          </ol>
        </section>

        <div className="mt-3">
          <div className="columns">
            <section className="column is-6">
              <h4 className="title is-4">チーム: {this.props.registrationSession.team!.name}</h4>
              <div className={`notification ${isTeamConditionOk ? "is-info" : "is-danger"}`}>
                {this.renderConditions(
                  isTeamConditionOk,
                  "現地点での準備が整っています。次のアナウンスをお待ちください。",
                  "参加準備が整っていません。"
                )}
              </div>
              <div className="field">
                <label className="label">招待URL</label>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      readOnly
                      value={this.props.registrationSession.memberInviteUrl}
                      onClick={this.onInviteUrlClick.bind(this)}
                    />
                  </div>
                  <div className="control">
                    <button className="button" onClick={this.onCopyInviteButtonClick.bind(this)}>
                      <span className="material-icons">content_copy</span>
                    </button>
                  </div>
                </div>
              </div>

              <h5 className="title is-5 mt-3">メンバーリスト</h5>
              {this.renderTeamMembers()}
            </section>

            <section className="column is-6">
              <h4 className="title is-4">Discord</h4>
              <iframe
                src={`https://discordapp.com/widget?id=${this.props.registrationSession.discordServerId}`}
                width="350"
                height="500"
                frameBorder={0}
              ></iframe>
            </section>
          </div>
        </div>

        <section className="mt-3">
          <h4 className="title is-4">登録内容の編集</h4>
          <p className="block">
            <div className="buttons">
              <button className="button is-info" onClick={this.onEditButtonClick.bind(this)}>
                編集
              </button>
              <a className="button is-light" href={this.discordLoginUrl()}>
                Discordアカウント変更
              </a>
            </div>
            参加者名・学生申告といった登録内容の修正ができます。チーム名は代表者のみが変更可能です。
          </p>
          <p className="block">
            <button className="button is-danger" onClick={this.onWithdrawButtonClick.bind(this)}>
              辞退
            </button>
            <br />
            参加をキャンセルします。
            {this.props.registrationSession.team!.leaderId == this.props.session.contestant!.id ? (
              <strong>代表者のため、辞退するとチームとして参加辞退となります。</strong>
            ) : (
              <span>チームメンバーであるため、チームから離脱します (他のメンバーには影響しません)。</span>
            )}
          </p>
          {this.renderError()}
        </section>
      </>
    );
  }

  discordLoginUrl() {
    return (document.querySelector('meta[name="isux:discord-auth-path"]') as HTMLMetaElement).content;
  }

  renderTeamMembers() {
    return this.props.registrationSession.team!.members!.map((member) => this.renderTeamMember(member));
  }

  renderTeamMember(member: isuxportal.proto.resources.IContestant) {
    return (
      <div className="card mt-2 isux-registration-member-card" key={member.id!.toString()}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={member.detail!.avatarUrl || ""} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{member.name}</p>
              <p className="subtitle is-6">
                {this.props.registrationSession.team!.leaderId == member.id ? (
                  <span className="tag is-danger mr-1">代表者</span>
                ) : null}
                {member.detail!.isStudent ? <span className="tag is-info mr-1">学生</span> : null}
                GitHub @{member.detail!.githubLogin}, Discord {member.detail!.discordTag}
              </p>
            </div>
          </div>
          <div className="content">
            {this.renderConditions(
              !!member.detail!.isSshKeyRegistered,
              "GitHubにSSH鍵が登録されています",
              "GitHubにSSH鍵が登録されていません"
            )}
            {this.renderConditions(
              !!member.detail!.isDiscordGuildMember,
              "Discordサーバーに参加しています",
              "Discordサーバーに参加していません"
            )}
          </div>
        </div>
      </div>
    );
  }

  renderConditions(isOk: boolean, okString: string, ngString: string) {
    return (
      <span className="icon-text">
        <span className="icon">
          <span className={`material-icons-outlined status-${isOk ? "ok" : "ng"}`}>
            {isOk ? "check_circle" : "cancel"}
          </span>
        </span>
        <span>{isOk ? okString : ngString}</span>
      </span>
    );
  }

  renderError() {
    if (!this.state.error) return null;
    return <ErrorMessage error={this.state.error} />;
  }
}
