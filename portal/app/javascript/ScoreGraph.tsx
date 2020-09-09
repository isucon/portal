import type {isuxportal} from "./pb";
import React from "react";
import dayjs from "dayjs";

import uPlot from "uplot";

import {COLORS} from "./ScoreGraphColors";

interface Props {
  teams: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[],
  contest: isuxportal.proto.resources.IContest,
  width?: number,
}

export const ScoreGraph: React.FC<Props> = ({ teams, contest, width }) => {
  const elem = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!elem.current) return;

    const rect = elem.current.getBoundingClientRect()

    const opts: uPlot.Options = {
      width: width || 950,
      height: 500,
      scales: {
        x: {
          auto: false,
          range: (min, max) => [contest.startsAt!.seconds! as number, (contest.endsAt!.seconds! as number)+3600],
        },
        pt: {
          auto: true,
        }
      },
      series: [
        {
          scale: 'x',
        },
        ...teams.map((item) => {
          return {
            label: item.team!.name!,
            stroke: COLORS[(item.team!.id! as number) % COLORS.length],
            scale: 'pt',
          }
        })
      ],
      axes: [
        {},
        {
          label: 'Score',
          scale: 'pt',
          show: true,
        },
      ],
    };

    const timestamps: number[] = [...new Set(teams.flatMap((item) => item.scores!.map((s) => s.markedAt!.seconds! as number)))].sort((a,b) => a - b);
    const data = [timestamps];

    teams.forEach((item, idx) => {
      const scores = item.scores || [];
      const series = [];
      let tsPtr = 0;
      let scorePtr = -1;
      while (tsPtr < timestamps.length) {
        const ts = timestamps[tsPtr];

        const score = scores[scorePtr];
        const scoreNext = scores[scorePtr+1];

        //console.log({team: item.team!.id!, tsPtr: tsPtr, scorePtr: scorePtr, now: ts, cur: scores[scorePtr]?.markedAt?.seconds!, next: scoreNext?.markedAt?.seconds! });

        if (!score || (score && ts >= score.markedAt!.seconds!)) {
          if (scoreNext && ts >= scoreNext.markedAt!.seconds!) {
            scorePtr++;
          }
        }

        if (scorePtr >= 0) {
          series.push(scores[scorePtr].score! as number);
        } else {
          series.push(0);
        }

        tsPtr++;
      }
      data.push(series);
    });
    console.log(data);

    const chart = new uPlot(opts, data, elem.current);

    return (() => chart.destroy());
  }, [elem, teams]);

  return <div className="isux-scoregraph" ref={elem} />;
};
