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
  template: string | null;
  checkStatus: isuxportal.proto.resources.EnvCheckStatus | null;
  instanceIP: string | null;
  isFetching: boolean;
  intervalId: number | null;
  error: Error | null;
}

export class EnvCheck extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      template: null,
      checkStatus: null,
      instanceIP: null,
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
          を利用します。予選実施前に実際に競技環境が用意できるかのチェックのため、以下の手順で事前チェックを行ってください。
          <b>必ずSSHの接続まで</b> 行ってください。
        </p>
        {this.renderState()}
        {this.renderReloadButton()}
        <ol className="block ml-4">
          <li>
            テンプレートをダウンロードする。このテンプレートはチームごとに固有のものなので<b>共有厳禁</b>
            です。このテンプレートを利用すると、EC2インスタンスとそれに付随するVPC、また情報取得用のLambdaなどが作成されます。
            <br />
            <a
              className={`button is-info ${this.state.template === null ? "is-loading" : ""}`}
              href={templateBase64}
              download="test_cloudformation.yaml"
            >
              CloudFormation テンプレートをダウンロード
            </a>
          </li>
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
          <li>
            インスタンスの起動後、GitHubに登録してあるSSH鍵によりSSHができるようになるので、インスタンスに対してユーザー名「isucon」でSSHを行う。
            <br />
            {this.renderInstanceIP()}
          </li>
          <li>
            確認完了が表示された後に、CloudFormationのスタックの削除を行う。確認が完了しない場合は、Discordの#generalにてご連絡ください。
          </li>
        </ol>
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
      <div className="block is-flex is-flex-direction-row is-justify-content-flex-end">
        <button
          className={`button ${this.state.isFetching ? "is-loading" : ""}`}
          onClick={this.onReloadButtonClick.bind(this)}
        >
          <span className={"material-icons-outlined"}>refresh</span> 情報再取得
        </button>
      </div>
    );
  }

  onInstanceIPClick(event: React.MouseEvent<HTMLInputElement>) {
    if (event.target instanceof HTMLInputElement) {
      event.target.select();
    }
  }

  async onCopyInstanceIPButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!this.state.instanceIP) return;
    await navigator.clipboard.writeText(this.state.instanceIP);
  }

  renderInstanceIP() {
    return (
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">IPアドレス</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <div className={`control ${this.state.instanceIP === null ? "is-loading" : ""}`}>
              <input
                className="input"
                type="text"
                readOnly
                disabled={this.state.instanceIP === null}
                value={this.state.instanceIP ?? "取得中"}
                onClick={this.onInstanceIPClick.bind(this)}
              />
            </div>
            <div className="control">
              <button
                className="button"
                disabled={this.state.instanceIP === null}
                onClick={this.onCopyInstanceIPButtonClick.bind(this)}
              >
                <span className="material-icons">content_copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
