import type { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";

import React from "react";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: ApiClient;
}

export const ContestantDiscordPage: React.FC<Props> = ({ session }) => {
  return (
    <div className="mt-2">
      <header className="mb-2">
        <h1 className="title is-1">Discord サーバ情報</h1>
      </header>

      <iframe
        src={`https://discordapp.com/widget?id=${session.discordServerId}`}
        width="350"
        height="500"
        frameBorder={0}
      ></iframe>
    </div>
  );
};
