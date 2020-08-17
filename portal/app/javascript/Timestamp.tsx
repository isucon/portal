import {google} from "./pb";
import moment from "moment";

import React from "react";

export interface Props {
  timestamp: google.protobuf.ITimestamp,
  short?: boolean,
}

export const Timestamp: React.FC<Props> = (props: Props) => {
  const ts = props.timestamp;
  const t = moment((ts.seconds as number) * 1000 + (ts.nanos as number) / 1000000);
  return <time dateTime={t.toISOString()}>
    {t.format(props.short ? "HH:mm:ss" : "YYYY-MM-DD HH:mm:ss.SSS")}
  </time>;
}
