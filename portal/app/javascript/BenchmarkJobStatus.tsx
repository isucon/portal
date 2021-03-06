import { isuxportal } from "./pb";

import React from "react";

export interface Props {
  status: isuxportal.proto.resources.BenchmarkJob.Status;
}

const COLORS: { [key: string]: string } = {
  PENDING: "dark",
  RUNNING: "warning",
  CANCELLED: "info",
  FINISHED: "success",
  ERRORED: "danger",
};

export const BenchmarkJobStatus: React.FC<Props> = (props: Props) => {
  const status = isuxportal.proto.resources.BenchmarkJob.Status[props.status];
  const color = COLORS[status] || "light";

  return <span className={`tag is-${color}`}>{status}</span>;
};
