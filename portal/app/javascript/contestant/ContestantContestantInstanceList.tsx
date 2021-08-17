import type { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";

import React, { useEffect, useState } from "react";

import { ContestantInstanceStatus } from "../ContestantInstanceStatus";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export const ContestantContestantInstanceList: React.FC<Props> = ({ session, client }) => {
  const [template, setTemplate] = useState("");
  useEffect(() => {
    (async () => {
      const res = await client.getCloudFormation();
      setTemplate(res.template);
    })();
  }, []);

  const templateBase64 = `data:text/plain,${encodeURIComponent(template)}`;

  const renderRow = (ci: isuxportal.proto.resources.IContestantInstance) => {
    return (
      <tr>
        <td>{ci.number}</td>
        <td>{ci.publicIpv4Address}</td>
        <td>
          <ContestantInstanceStatus status={ci.status!} />
        </td>
      </tr>
    );
  };
  return (
    <>
      <header>
        <h1 className="title is-1">サーバーリスト</h1>
      </header>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>IPv4 Address</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>{(session.contestantInstances || []).map((ci) => renderRow(ci))}</tbody>
      </table>

      <header>
        <h1 className="title is-1">CloudFormation テンプレート</h1>
      </header>

      <a
        className={`button is-info ${template === "" ? "is-loading" : ""}`}
        href={templateBase64}
        download="qualify_cloudformation.yaml"
      >
        CloudFormation テンプレートをダウンロード
      </a>
    </>
  );
};
