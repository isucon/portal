import { isuxportal } from "../pb_admin";
import { ApiError, ApiClient } from "../ApiClient";
import { AdminApiClient } from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";

import { AdminTeamEdit } from "./AdminTeamEdit";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
  teamId: string;
}

export interface State {
  team: isuxportal.proto.resources.ITeam | null;
  error: Error | null;
}

export class AdminTeamDetail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      team: null,
      error: null,
    };
  }

  public componentDidMount() {
    this.updateTeamInfo();
  }

  async updateTeamInfo() {
    try {
      const resp = await this.props.client.getTeam(parseInt(this.props.teamId, 10));
      this.setState({ team: resp.team! });
    } catch (error) {
      this.setState({ error });
    }
  }
  public render() {
    return (
      <>
        <main>
          {this.renderError()}
          {this.renderContent()}
        </main>
      </>
    );
  }

  renderContent() {
    if (!this.state.team) return <p>Loading...</p>;
    return (
      <Switch>
        <Route exact path="/admin/teams/:id">
          {this.renderTeam()}
          {this.renderMembers()}
        </Route>
        <Route exact path="/admin/teams/:id/edit">
          <AdminTeamEdit session={this.props.session} client={this.props.client} team={this.state.team} />
        </Route>
      </Switch>
    );
  }

  public renderTeam() {
    if (!this.state.team) return <p>Loading...</p>;
    return (
      <>
        <h3 className="title is-3">{this.state.team.name}</h3>
        <div className="card mt-5">
          <div className="card-header">
            <h5 className="card-header-title is-5">Details</h5>
          </div>
          <div className="card-content">
            <p className="subtitle">
              {this.teamIsStudent() ? <span className="tag is-info">学生チーム</span> : null}
              {this.state.team.withdrawn ? <span className="tag is-warning">辞退</span> : null}
              {this.state.team.disqualified ? <span className="tag is-danger">失格</span> : null}
              {this.state.team.hidden ? <span className="tag is-black">非表示</span> : null}
            </p>

            <p>ID: {this.state.team.id}</p>
            <p>
              代表者メールアドレス:{" "}
              <a href={`mailto:${this.state.team.detail!.emailAddress}`}>{this.state.team.detail!.emailAddress}</a>
            </p>

            <p>
              <Link to={`/admin/teams/${this.state.team.id}/edit`} className="button is-info">
                編集
              </Link>
            </p>
          </div>
        </div>
      </>
    );
  }

  renderMembers() {
    if (!this.state.team) return null;
    return this.state.team.members!.map((v) => this.renderMember(v));
  }

  renderMember(member: isuxportal.proto.resources.IContestant) {
    return (
      <div className="card mt-4" key={member.id as number}>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={member.contestantDetail!.avatarUrl || "https://avatars2.githubusercontent.com/u/10137?s=144"}
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{member.name}</p>
              <p className="subtitle is-6">
                {member.contestantDetail!.isStudent ? <span className="tag is-info">学生</span> : null}
                <span>
                  GitHub:
                  <a href={`https://github.com/${member.contestantDetail!.githubLogin}`}>
                    @{member.contestantDetail!.githubLogin}
                  </a>
                </span>
                <span>
                  Discord:
                  {member.contestantDetail!.discordTag}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  teamIsStudent() {
    return (
      this.state.team?.members && this.state.team.members.filter((v) => !v.contestantDetail!.isStudent).length == 0
    );
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }
}
