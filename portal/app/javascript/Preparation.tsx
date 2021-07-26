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
        <main className="mt-2">
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
      <section>
        <h3 className="title is-3">事前チェック</h3>
        <p className="block">
          予選では各チームで AWS アカウントを用意し、その AWS
          アカウントで競技環境を構築して、それを利用して競技に参加します。また、この競技環境の構築には AWS
          CloudFormation
          を利用します。予選実施前に実際に競技環境が用意できるかのチェックのため、以下の手順で事前チェックを行ってください。
          <b>必ずSSHの接続まで</b> 行ってください。
        </p>
        <ol className="block ml-4">
          <li>
            テンプレートをダウンロードする
            <br />
            <a className="button is-info" href={templateBase64} download="test_cloudformation.yaml">
              CloudFormation テンプレートをダウンロード
            </a>
          </li>
          <li>
            <a href="https://ap-northeast-1.console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/">
              AWS マネジメントコンソールの CloudFormation
            </a>{" "}
            を開く
          </li>
          <li>「スタックを作成」をクリック</li>
          <li>
            「テンプレートの準備完了」、「テンプレートファイルのアップロード」を指定し、ダウンロードしたテンプレートをアップロードする
          </li>
          <li>画面にしたがって進める</li>
          <li>
            インスタンスの起動後、GitHubに登録してあるSSH鍵によりSSHができるようになるので、インスタンスにSSHを行う
          </li>
        </ol>
      </section>
    );
  }
}
