import type { isuxportal } from "../pb";
import React from "react";
import dayjs from "dayjs";
import durationPlugin from "dayjs/plugin/duration";
import relativeTimePlugin from "dayjs/plugin/relativeTime";
dayjs.extend(durationPlugin);
dayjs.extend(relativeTimePlugin);

export interface Props {
  contest: isuxportal.proto.resources.IContest;
}

export const BroadcastClock: React.FC<Props> = ({ contest }) => {
  const [now, setNow] = React.useState(dayjs());
  React.useEffect(() => {
    let timer = setInterval(() => {
      setNow(dayjs());
    }, 100);
    return () => clearInterval(timer);
  });

  const contestStartsAt = dayjs(
    (contest.startsAt!.seconds as number) * 1000 + (contest.startsAt!.nanos as number) / 1000000
  );
  const contestFreezesAt = dayjs(
    (contest.freezesAt!.seconds as number) * 1000 + (contest.freezesAt!.nanos as number) / 1000000
  );
  const contestEndsAt = dayjs((contest.endsAt!.seconds as number) * 1000 + (contest.endsAt!.nanos as number) / 1000000);

  const duration = contestEndsAt.diff(contestStartsAt);
  const untilStart = contestStartsAt.diff(now);
  const untilEnd = contestEndsAt.diff(now);
  const untilFreeze = contestFreezesAt.diff(now);

  const remaining = dayjs.duration(untilEnd);
  const digits = (n: number) => (n < 10 ? `0${Math.floor(n)}` : `${Math.floor(n)}`);

  let status = "running";
  let text = (
    <p>
      {digits(remaining.hours())}:{digits(remaining.minutes())}:{digits(remaining.seconds())}
    </p>
  );
  let progress = (
    <progress className="progress is-small is-link" max={100} value={100 - (untilEnd / duration) * 100}></progress>
  );
  if (untilEnd <= 0) {
    status = "end";
    text = <p>00:00:00</p>;
    progress = <progress className="progress is-small is-danger" max={100} value={100}></progress>;
  } else if (untilFreeze <= 0) {
    status = "frozen";
    progress = (
      <progress className="progress is-small is-danger" max={100} value={100 - (untilEnd / duration) * 100}></progress>
    );
  } else if (untilStart > 0) {
    status = "before";
    text = <p>--:--:--</p>;
    progress = <progress className="progress is-small" max={100} value={0}></progress>;
  }

  return (
    <div className={`isux-broadcast-clock isux-broadcast-clock--${status} mt-1`}>
      <div className="columns">
        <div className="column is-12 isux-broadcast-clock-text px-0 mx-0 py-0 my-0">{text}</div>
      </div>
      <div className="columns">
        <div className="column is-12">{progress}</div>
      </div>
    </div>
  );
};
