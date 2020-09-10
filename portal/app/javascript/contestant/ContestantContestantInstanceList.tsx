import type { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";

import React from "react";

import { ContestantInstanceStatus } from "../ContestantInstanceStatus";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export const ContestantContestantInstanceList: React.FC<Props> = ({ session }) => {
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
    </>
  );
};
