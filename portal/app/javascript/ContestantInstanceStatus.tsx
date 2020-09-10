import { isuxportal } from "./pb";

import React from "react";

export interface Props {
  status: isuxportal.proto.resources.ContestantInstance.Status;
}

const COLORS: { [key: string]: string } = {
  PENDING: "dark",
  MODIFYING: "warning",
  RUNNING: "success",
  STOPPED: "danger",
  TERMINATED: "danger",
};

export const ContestantInstanceStatus: React.FC<Props> = (props: Props) => {
  const status = isuxportal.proto.resources.ContestantInstance.Status[props.status];
  const color = COLORS[status] || "light";

  return <span className={`tag is-${color}`}>{status}</span>;
};
