import {isuxportal} from "./pb";
import {ApiError, ApiClient} from "./ApiClient";
import * as Rails from "@rails/ujs";

import React from "react";
import {
  Link,
} from "react-router-dom";

import {ErrorMessage} from "./ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse,
  client: ApiClient,
}

export interface State {
}

export class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            ISUCON10 Portal
          </Link>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <Link className="navbar-item" to="/teams">
              チーム一覧
            </Link>
            <a className="navbar-item" href="/terms">
              規約
            </a>
            <a className="navbar-item" href="/rules">
              レギュレーション
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {this.renderNavbarRegistrationButtons()}
                {this.renderNavbarLoginButtons()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>;
  }

  public renderNavbarRegistrationButtons() {
    if (this.props.session.contestant) {
      return (
        <Link className="button is-light" to="/registration">
          登録確認
        </Link>
      );
    } else {
      // TODO: What if registration closed?
      return (
        <Link className="button is-light" to="/registration">
          参加登録
        </Link>
      );
    }
  }

  public renderNavbarLoginButtons() {
    if (this.props.session.contestant) {
      return (
        <>
          <a className="button is-light" href="/session" onClick={this.onLogout.bind(this)}>
            ログアウト
          </a>
        </>
      );
    } else {
      return (
        <>
          <a className="button is-light" href={this.loginPath()}>
            ログイン
          </a>
        </>
      );
    }
  }

  loginPath() {
    return (document.querySelector('meta[name="isux:github-auth-path"]')! as HTMLMetaElement).content;
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
