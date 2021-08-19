import { isuxportal } from "../pb";
import { ApiError, ApiClient } from "../ApiClient";
import * as Rails from "@rails/ujs";

import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { ErrorMessage } from "../ErrorMessage";

type Props = {
  instances: isuxportal.proto.resources.IContestantInstance[];
};

export const ContestantCloudFormationMessage = ({ instances }: Props) => {
  const [closed, setClosed] = useState((window.localStorage.getItem("isuxportal-closed-cloudformation-message") || "false") === "true")
  const onCloseButtonClick = () => {
    window.localStorage.setItem("isuxportal-closed-cloudformation-message", "true")
    setClosed(true);
  }

  const isServerListRoute = !!useRouteMatch({ path: '/contestant/contestant_instances', exact: true })

  if (isServerListRoute) return null;
  if (instances.length > 0) return null;
  if (closed) return null;

  return (
    <div className="notification is-info is-light">
      <button className="delete" onClick={onCloseButtonClick}></button>
      インスタンスの登録が完了していません。CloudFormationのテンプレートは
      <Link to="/contestant/contestant_instances">サーバーリスト</Link>からダウンロードできます。
      インスタンスの起動後には画面のリロードが必要です。
    </div>
  );
};
