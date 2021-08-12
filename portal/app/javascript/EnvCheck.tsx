import { isuxportal } from "./pb";
import { ApiClient } from "./ApiClient";

import React from "react";

import { ErrorMessage } from "./ErrorMessage";

const stateMap = new Map([
  [null, { type: "", icon: "hourglass_top", desc: "状態取得中" }],
  [
    isuxportal.proto.resources.EnvCheckStatus.NOT_STARTED,
    { type: "is-danger", icon: "cancel", desc: "確認が未完了です。下記の手順に従って競技環境の確認を行ってください。" },
  ],
  [
    isuxportal.proto.resources.EnvCheckStatus.CREATED_INSTANCE,
    {
      type: "is-danger",
      icon: "cancel",
      desc: "確認が未完了です。下記の手順の通りインスタンスへのSSH接続を行ってください。",
    },
  ],
  [
    isuxportal.proto.resources.EnvCheckStatus.DONE,
    { type: "is-info", icon: "check_circle", desc: "確認が完了しています。ご協力ありがとうございます。" },
  ],
] as const);

const FETCH_INFORMATION_INTERVAL = 60 * 1000; // 1min

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export interface State {
  template: string;
  checkStatus: isuxportal.proto.resources.EnvCheckStatus | null;
  instanceIP: string;
  isFetching: boolean;
  intervalId: number | null;
  error: Error | null;
}

export class EnvCheck extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      template: "",
      checkStatus: null,
      instanceIP: "",
      isFetching: false,
      intervalId: null,
      error: null,
    };
  }

  public componentDidMount() {
    this.fetchEnvCheckInformation().then((status) => {
      if (status === isuxportal.proto.resources.EnvCheckStatus.DONE) return;

      const intervalId = setInterval(async () => {
        const status = await this.fetchEnvCheckInformation();
        if (status === isuxportal.proto.resources.EnvCheckStatus.DONE) {
          if (this.state.intervalId) {
            clearInterval(this.state.intervalId);
            this.setState({ intervalId: null });
          } else {
            console.warn("intervalId should exist here");
          }
        }
      }, FETCH_INFORMATION_INTERVAL) as unknown as number;
      this.setState({ intervalId });
    });
  }

  public componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  async fetchEnvCheckInformation() {
    if (!this.props.session.team) return;
    if (this.state.isFetching) return;
    this.setState({ isFetching: true });

    try {
      const info = await this.props.client.getEnvCheckInformation();
      this.setState({
        template: info.template,
        checkStatus: info.status,
        instanceIP: info.instanceIp,
        isFetching: false,
      });
      return info.status;
    } catch (err) {
      this.setState({ error: err, isFetching: false });
    }
  }

  public render() {
    return (
      <>
        <header>
          <h1 className="title is-1">競技環境確認</h1>
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

    const templateBase64 = `data:text/plain,${encodeURI(this.state.template ?? "")}`;

    return (
      <section>
        <p className="block">
          予選では各チームで AWS アカウントを用意し、その AWS
          アカウントで競技環境を構築して、それを利用して競技に参加します。また、この競技環境の構築には AWS
          CloudFormation
          を利用します。予選実施前に実際に競技環境が用意できるかのチェックのため、以下の手順で競技環境確認を行ってください。
          <b>必ずSSHの接続まで</b>{" "}
          行ってください。一回でも行えば確認完了と表示されますが、念の為チーム全員が行うことをお勧めします。
        </p>
        {this.renderState()}
        {this.renderReloadButton()}
        <h2 className="title is-2">手順</h2>

        <h3 className="title is-3">1. テンプレートのダウンロード</h3>
        <div className="content">
          <p>
            テンプレートをダウンロードする。このテンプレートはチームごとに固有のものなので<b>共有厳禁</b>です。
          </p>
          <article className="message">
            <div className="message-body">
              このテンプレートでは{" "}
              <a href="https://aws.amazon.com/jp/free/" target="_blank" rel="noreferrer noopener">
                AWS 無料利用枠
              </a>{" "}
              に収まる範囲で EC2 インスタンス、VPC、インターネットゲートウェイ、セキュリティグループ、また Availability
              Zone 情報取得に利用する Lambda 関数を作成します。また、EC2 環境の情報取得を行うための IAM
              ロールを含みます。IAM ロールは EC2 インスタンスおよび Lambda
              関数でのみ利用されます。また、許可されているアクションは AWS の仕様上、アカウントに存在する他の EC2
              リソースの情報も閲覧できる設定になっていますが、不要な情報は取得いたしません。
            </div>
          </article>
          <a
            className={`button is-info ${this.state.template === "" ? "is-loading" : ""}`}
            href={templateBase64}
            download="test_cloudformation.yaml"
          >
            CloudFormation テンプレートをダウンロード
          </a>
        </div>

        <h3 className="title is-3">2. テンプレートでのスタックの作成</h3>
        <ol className="content ml-4" type="i">
          <li>
            <a href="https://ap-northeast-1.console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/">
              AWS マネジメントコンソールの CloudFormation
            </a>{" "}
            を開く。
          </li>
          <li>「スタックを作成」をクリック。</li>
          <li>
            「テンプレートの準備完了」、「テンプレートファイルのアップロード」を指定し、ダウンロードしたテンプレートをアップロードする。
          </li>
          <li>画面にしたがって進める。</li>
        </ol>

        <h3 className="title is-3">3. インスタンスへのSSH</h3>
        <div className="content">
          <p>
            インスタンスの起動後、GitHubに登録してあるSSH鍵によりSSHができるようになるので、インスタンスに対してユーザー名「isucon」でSSHを行う。
          </p>
          {this.renderInstanceIPAndSSHCommand()}
        </div>

        <h3 className="title is-3">4. 状態の確認とスタックの削除</h3>
        <p className="content">
          画面上部の状態が「完了」になっていることを確認する。
          完了になったら、CloudFormationのスタックの削除を行う。確認が完了しない場合は、Discordの#generalにてご連絡ください。
        </p>
      </section>
    );
  }

  renderState() {
    if (!stateMap.has(this.state.checkStatus)) {
      console.warn("Unexpected state:", this.state.checkStatus);
      return null;
    }

    const { type, icon, desc } = stateMap.get(this.state.checkStatus)!;
    return (
      <div className={`notification ${type}`}>
        <span className="icon-text">
          <span className="icon">
            <span className={"material-icons-outlined"}>{icon}</span>
          </span>
          <span>{desc}</span>
        </span>
      </div>
    );
  }

  onReloadButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.fetchEnvCheckInformation();
  }

  renderReloadButton() {
    return (
      <div className="is-flex is-flex-direction-row is-justify-content-flex-end">
        <button
          className={`button ${this.state.isFetching ? "is-loading" : ""}`}
          onClick={this.onReloadButtonClick.bind(this)}
        >
          <span className={"material-icons-outlined"}>refresh</span> 情報再取得
        </button>
      </div>
    );
  }

  selectAllText(event: React.MouseEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      event.target.select();
    }
  }

  async onCopyInstanceIPButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!this.state.instanceIP) return;
    await navigator.clipboard.writeText(this.state.instanceIP);
  }

  async onCopySSHCommandButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!this.state.instanceIP) return;
    await navigator.clipboard.writeText(this.getSSHCommand());
  }

  private getSSHCommand() {
    return `ssh -T isucon@${this.state.instanceIP || "{IP_ADDRESS}"}`;
  }

  renderInstanceIPAndSSHCommand() {
    const ipNotFetched = this.state.instanceIP === "";

    return (
      <>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">IPアドレス</label>
          </div>
          <div className="field-body">
            <div className="field has-addons">
              <div className={`control ${ipNotFetched ? "is-loading" : ""}`}>
                <input
                  className="input"
                  type="text"
                  readOnly
                  disabled={ipNotFetched}
                  value={this.state.instanceIP ?? "取得中"}
                  onClick={this.selectAllText.bind(this)}
                />
              </div>
              <div className="control">
                <button
                  className="button"
                  disabled={ipNotFetched}
                  onClick={this.onCopySSHCommandButtonClick.bind(this)}
                >
                  <span className="material-icons">content_copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">SSHコマンド例</label>
          </div>
          <div className="field-body">
            <div className="field has-addons">
              <div className={`control ${ipNotFetched ? "is-loading" : ""}`}>
                <input
                  className="input"
                  type="text"
                  readOnly
                  disabled={ipNotFetched}
                  value={this.getSSHCommand()}
                  onClick={this.selectAllText.bind(this)}
                />
              </div>
              <div className="control">
                <button
                  className="button"
                  disabled={ipNotFetched}
                  onClick={this.onCopySSHCommandButtonClick.bind(this)}
                >
                  <span className="material-icons">content_copy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
