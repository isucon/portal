import React from "react";

export type Props = Record<"isStudent" | "withdrawn" | "disqualified" | "hidden" | "finalParticipation", boolean>;

export const AdminTeamTagList = ({ isStudent, withdrawn, disqualified, hidden, finalParticipation }: Props) => {
  return (
    <>
      {isStudent ? <span className="tag is-info">学生</span> : null}
      {withdrawn ? <span className="tag is-warning">辞退</span> : null}
      {disqualified ? <span className="tag is-danger">失格</span> : null}
      {hidden ? <span className="tag is-black">非表示</span> : null}
      {finalParticipation ? <span className="tag is-success">本選</span> : null}
    </>
  );
};
