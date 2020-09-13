import type { isuxportal } from "./pb";
import { ApiError, ApiClient } from "./ApiClient";

import React from "react";
import { Link } from "react-router-dom";

import { Timestamp } from "./Timestamp";
import { TimeDuration } from "./TimeDuration";

export interface Props {
  clarification: isuxportal.proto.resources.IClarification;
  admin: boolean;
}

export const Clarification: React.FC<Props> = (props: Props) => {
  const clar = props.clarification;
  const originalQuestionAvailable = clar.originalQuestion !== "" && clar.originalQuestion !== clar.question;

  const [showOriginalQuestion, setShowOriginalQuestion] = React.useState<boolean>(originalQuestionAvailable);
  const onQuestionTabClick = (flag: boolean) => {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setShowOriginalQuestion(flag);
    };
  };

  return (
    <article className="message mt-5">
      <div className="message-header">
        <h4 className="is-4 message-header-title">Clarification #{clar.id!.toString()}</h4>
      </div>
      <div className="message-body">
        <div className="level">
          <div className="level-left">
            <p>
              {clar.team ? (
                clar.answered ? (
                  clar.admin ? null : (
                    <span className="tag is-primary mr-1">回答済</span>
                  )
                ) : (
                  <span className="tag is-danger mr-1">未回答</span>
                )
              ) : null}
              {!clar.answered ? null : clar.disclosed ? (
                <span className="tag is-primary mr-1">全体公開</span>
              ) : (
                <span className="tag is-warning mr-1">個別回答</span>
              )}
            </p>
            <p>
              <span className="mr-2">
                送信: <Timestamp timestamp={clar.createdAt!} />
              </span>
              {clar.answeredAt ? (
                <span>
                  回答: <Timestamp timestamp={clar.answeredAt} />
                </span>
              ) : null}
              {!clar.admin && props.admin ? (
                <span>
                  経過時間: <TimeDuration a={clar.createdAt!} b={clar.answeredAt} />
                </span>
              ) : null}
            </p>
          </div>
          <div className="level-right">
            <div className="level-item">
              {clar.team ? (
                <>
                  {props.admin ? (
                    <>
                      <Link to={`/admin/teams/${encodeURIComponent(clar.team!.id!.toString())}`}>
                        {clar.team.name} (#{clar.team.id!.toString()})
                      </Link>
                      <Link to={`/admin/clarifications?team_id=${encodeURIComponent(clar.team!.id!.toString())}`}>
                        <i className="material-icons-outlined">question_answer</i>
                      </Link>
                    </>
                  ) : (
                    <>
                      {clar.team.name} (#{clar.team.id!.toString()})
                    </>
                  )}
                </>
              ) : null}
              {clar.admin ? <span className="tag is-dark ml-5">運営</span> : null}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-6">
            <h5 className="is-5">質問/要求</h5>
            {originalQuestionAvailable ? (
              <div className="tabs">
                <ul>
                  <li className={showOriginalQuestion ? "" : "is-active"}>
                    <a href="#" onClick={onQuestionTabClick(false)}>
                      原文
                    </a>
                  </li>
                  <li className={showOriginalQuestion ? "is-active" : ""}>
                    <a href="#" onClick={onQuestionTabClick(true)}>
                      校正版
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
            <section>
              <pre className="isux-clarification-pre">
                {showOriginalQuestion ? clar.originalQuestion : clar.question}
              </pre>
            </section>
          </div>
          <div className="column is-6">
            <h5 className="is-5">回答</h5>
            <section>
              {clar.answered ? <pre className="isux-clarification-pre">{clar.answer}</pre> : <p>N/A</p>}
            </section>
          </div>
        </div>
        <p>
          {props.admin ? (
            <Link
              to={`/admin/clarifications/${encodeURIComponent(clar.id!.toString())}`}
              className="button is-small is-info mr-2"
            >
              回答/編集
            </Link>
          ) : null}
        </p>
      </div>
    </article>
  );
};
