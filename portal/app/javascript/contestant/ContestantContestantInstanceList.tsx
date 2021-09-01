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
        <td>
          {ci.publicIpv4Address}
          <SmallCopyButton content={ci.publicIpv4Address!} />
        </td>
        <td>
          {ci.privateIpv4Address}
          <SmallCopyButton content={ci.privateIpv4Address!} />
        </td>
        <td>
          <ContestantInstanceStatus status={ci.status!} />
        </td>
        <td>
          <code>ssh isucon@{ci.publicIpv4Address}</code>
          <SmallCopyButton content={`ssh isucon@${ci.publicIpv4Address}`} />
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
            <th>Public IPv4</th>
            <th>Private IPv4</th>
            <th>Status</th>
            <th>SSH Command Example</th>
          </tr>
        </thead>

        <tbody>{(session.contestantInstances || []).map((ci) => renderRow(ci))}</tbody>
      </table>

      {false && (
        <>
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
      )}
    </>
  );
};

const SmallCopyButton = ({ content }: { content: string }) => {
  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await navigator.clipboard.writeText(content);
  };

  return (
    <button className="button is-small ml-2" onClick={onClick}>
      <span className="material-icons-outlined is-size-6">content_copy</span>
    </button>
  );
};
