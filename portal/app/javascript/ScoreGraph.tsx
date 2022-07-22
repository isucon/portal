import type { isuxportal } from "./pb";

import React from "react";
import uPlot from "uplot";

import { COLORS } from "./ScoreGraphColors";

interface Props {
  teams: isuxportal.proto.resources.ILeaderboardItem[];
  contest: isuxportal.proto.resources.IContest;
  width?: number;
  teamId?: number | Long;
}

const usePrevious = <T extends unknown>(value: T) => {
  const ref = React.useRef<T | undefined>();
  React.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

const calculateGraphCacheKey = (teams: isuxportal.proto.resources.ILeaderboardItem[]) => {
  let numTeams = teams.length;
  let numScores = teams.map((item) => (item.scoreHistory?.scores || []).length).reduce((a, b) => a + b, 0);
  let latestTimestamp = 0;
  teams.forEach((item) => {
    (item.scoreHistory?.scores || []).forEach((score) => {
      const ts = score.markedAt!.seconds! as number;
      if (latestTimestamp < ts) latestTimestamp = ts;
    });
  });
  return JSON.stringify([numTeams, numScores, latestTimestamp]);
};

const calculateTargetTeamLegendCacheKey = (targetTeams: isuxportal.proto.resources.ILeaderboardItem[]) => {
  return JSON.stringify(
    [...targetTeams]
      .sort((a, b) => (a.team!.id as number) - (b.team!.id as number))
      .map((t) => [t.team!.name, t.team!.id])
  );
};

export const ScoreGraph: React.FC<Props> = ({ teams, contest, width, teamId }) => {
  const [scoreFilter, setScoreFilter] = React.useState<number | null>(null);

  const elem = React.useRef<HTMLDivElement>(null);
  const [chart, setChart] = React.useState<uPlot | null>(null);

  const targetTeams = React.useMemo(() => {
    let t = teams;
    if (scoreFilter) t = t.filter((item) => ((item.bestScore?.score! as number) ?? 0) >= scoreFilter);
    return t;
  }, [calculateGraphCacheKey(teams), teamId, scoreFilter]);

  const uplotOpts = React.useMemo(
    (): uPlot.Options => ({
      width: width || 950,
      height: 500,
      scales: {
        x: {
          auto: false,
          range: (min, max) => [contest.startsAt!.seconds! as number, (contest.endsAt!.seconds! as number) + 3600],
        },
        pt: {
          auto: true,
        },
      },
      series: [
        {
          scale: "x",
        },
        ...targetTeams.map((item) => {
          return {
            label: item.team!.name!,
            stroke: COLORS[(item.team!.id! as number) % COLORS.length],
            scale: "pt",
            id: 0,
          };
        }),
      ],
      axes: [
        {},
        {
          label: "Score",
          scale: "pt",
          show: true,
        },
      ],
      legend: {
        show: true,
      },
    }),
    [width, contest.startsAt!.seconds!, contest.endsAt!.seconds!, calculateTargetTeamLegendCacheKey(targetTeams)]
  );

  const data = React.useMemo(() => {
    //console.log("ScoreGraph: setData", cacheKey);
    const timestamps: number[] = [
      ...new Set(
        targetTeams.flatMap((item) => (item.scoreHistory?.scores || []).map((s) => s.markedAt!.seconds! as number))
      ),
    ].sort((a, b) => a - b);
    const d: [number[], ...Array<Array<number | null>>] = [timestamps];

    targetTeams.forEach((item, idx) => {
      const scores = item.scoreHistory?.scores || [];
      const lastTs = scores.length > 0 ? scores[scores.length - 1]?.markedAt!.seconds : 0;
      const series = [];
      let tsPtr = 0;
      let scorePtr = -1;
      while (tsPtr < timestamps.length) {
        const ts = timestamps[tsPtr];

        const score = scores[scorePtr];
        const scoreNext = scores[scorePtr + 1];

        //console.log({team: item.team!.id!, tsPtr: tsPtr, scorePtr: scorePtr, now: ts, cur: scores[scorePtr]?.markedAt?.seconds!, next: scoreNext?.markedAt?.seconds! });

        if (!score || (score && ts >= score.markedAt!.seconds!)) {
          if (scoreNext && ts >= scoreNext.markedAt!.seconds!) {
            scorePtr++;
          }
        }

        //if (lastTs && lastTs < ts) {
        //  series.push(null);
        //} else {
        if (scorePtr >= 0) {
          series.push(scores[scorePtr].score! as number);
        } else {
          series.push(0);
        }
        //}

        tsPtr++;
      }
      d.push(series);
    });

    return d;
  }, [targetTeams]);

  const prevValues = usePrevious({ setChart, elemCurrent: elem.current, uplotOpts, data });
  React.useEffect(() => {
    if (!elem.current) return;

    if (
      !prevValues ||
      prevValues.setChart !== setChart ||
      prevValues.elemCurrent !== elem.current ||
      prevValues.uplotOpts !== uplotOpts
    ) {
      console.log("ScoreGraph: setChart");
      chart?.destroy();
      const newChart = new uPlot(uplotOpts, data, elem.current);
      setChart(newChart);
    } else if (prevValues.data !== data) {
      console.log("ScoreGraph: setData");
      chart?.setData(data);
    }
  }, [setChart, elem.current, uplotOpts, data]);

  React.useEffect(() => {
    return () => {
      chart?.destroy();
    };
  }, []);

  const classNames = ["isux-scoregraph", "isux-scoregraph-pinnedonly"]; // XXX: unify 2 classes to one

  return (
    <section>
      <div className="level">
        <div className="level-left">
          <h5 className="title is-5">Timeline</h5>
        </div>

        <div className="level-right has-text-right">
          <ScoreGraphScoreFilter onChange={setScoreFilter} />
        </div>
      </div>
      <div className={classNames.join(" ")} ref={elem} />
    </section>
  );
};

const ScoreGraphScoreFilter = ({ onChange }: { onChange: (scoreFilter: number | null) => void }) => {
  const [scoreFilterForm, setScoreFilterForm] = React.useState("");
  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onChange(scoreFilterForm.length === 0 ? null : parseInt(scoreFilterForm, 10));
    },
    [onChange, scoreFilterForm]
  );
  const onScoreFilterFormChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setScoreFilterForm(e.target.value);
    },
    [setScoreFilterForm]
  );

  return (
    <form onSubmit={onSubmit}>
      <input
        className="input is-small"
        type="text"
        placeholder="Filter by best score"
        size={15}
        onChange={onScoreFilterFormChange}
        value={scoreFilterForm}
      />
    </form>
  );
};
