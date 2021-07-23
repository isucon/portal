import { isuxportal } from "./pb";
import { ApiClient } from "./ApiClient";

import React from "react";

import { ErrorMessage } from "./ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export interface State {
  template: string;
  error: Error | null;
}

export class Preparation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      template: "",
      error: null,
    };
  }

  public componentDidMount() {
    this.fetchCloudFormation();
  }

  async fetchCloudFormation() {
    if (!this.props.session.team) return;

    try {
      const cf = await this.props.client.getTestCloudFormation();
      this.setState({ template: cf.template });
    } catch (err) {
      this.setState({ error: err });
    }
  }

  public render() {
    return (
      <>
        <header>
          <h1 className="title is-1">参加準備</h1>
        </header>
        <main>
          {this.renderError()}
          {this.renderMain()}
        </main>
      </>
    );
  }

  public renderError() {
    if (!this.state.error) return;
    return <ErrorMessage error={this.state.error} />;
  }

  public renderMain() {
    if (!this.props.session.team) {
      return <>未ログインです</>;
    }

    const templateBase64 = `data:text/plain,${encodeURI(this.state.template)}`;

    return (
      <>
        <a href={templateBase64} download="test_cloudformation.yaml">
          download
        </a>
      </>
    );
  }
}
