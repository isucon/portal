import { AdminApiClient } from "./AdminApiClient";

import React from "react";

export interface Props {
  client: AdminApiClient;
  teamId: number;
  type: "test" | "qualify";
}

export interface State {}

export class AdminTeamCloudFormationDownloadButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  async downloadCloudFormation() {
    try {
      const cf = await this.props.client.getCloudFormation(this.props.teamId, this.props.type)
      const templateBase64 = `data:text/plain,${encodeURI(cf.template)}`;

      const linkElement = document.createElement('a')
      linkElement.href = templateBase64
      linkElement.download = `cf_${this.props.teamId}_${this.props.type}.yaml`
      linkElement.click()
    } catch (e) {
      console.error("Download Error:", e)
    }
  }

  public render() {
    return <button className="button is-light" onClick={this.downloadCloudFormation.bind(this)}>{this.props.children}</button>
  }
}
