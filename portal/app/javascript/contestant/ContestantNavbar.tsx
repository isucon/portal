import {isuxportal} from "../pb";
import {ApiError, ApiClient} from "../ApiClient";
import * as Rails from "@rails/ujs";

import React from "react";
import {
  Link,
} from "react-router-dom";

import {ErrorMessage} from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
}

export class ContestantNavbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/contestant">
            ISUCON10 Contest
          </Link>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">

            <Link className="navbar-item" to="/contestant">
              ダッシュボード
            </Link>
            <Link className="navbar-item" to="/contestant/benchmark_jobs">
              ベンチ実行リスト
            </Link>
            <Link className="navbar-item" to="/contestant/clarifications">
              質問/サポート
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">ドキュメント</a>
              <div className="navbar-dropdown">
                <a className="navbar-item" href="/teams">
                  チーム一覧
                </a>
                <a className="navbar-item" href="/terms">
                  規約
                </a>
                <a className="navbar-item" href="/rules">
                  レギュレーション
                </a>
                <a className="navbar-item" href="/">
                  パブリックダッシュボード
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="media isux-navbar-contestant">
                <div className="media-left">
                  <p className="image">
                    <img src={this.props.session.contestant!.contestantDetail!.avatarUrl!} height={32} width={32} />
                  </p>
                </div>
                <div className="media-content">
                  <p className="">{this.props.session.contestant!.name}</p>
                  <div className="level is-size-7 is-mobile">
                    <div className="level-left">
                      {this.props.session.team!.name}
                    </div>
                    <div className="level-right">
                      (チームID: {this.props.session.team!.id})
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-item">
              <div className="buttons">
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
  }


  public renderNavbarLoginButtons() {
    return (
      <>
        <a className="button is-light" href="/session" onClick={this.onLogout.bind(this)}>
          ログアウト
        </a>
      </>
    );
  }


  onLogout(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/session";
    document.body.appendChild(form);

    const csrfToken = document.createElement("input");
    csrfToken.type = "hidden";
    csrfToken.name = Rails.csrfParam() || "";
    csrfToken.value = Rails.csrfToken() || "";
    form.appendChild(csrfToken);

    const method = document.createElement("input");
    method.type = "hidden";
    method.name = "_method";
    method.value = "delete";
    form.appendChild(method);

    form.submit();
  }
}
