import { isuxportal } from "../pb_admin";
import { ApiError, ApiClient } from "../ApiClient";
import { AdminApiClient } from "./AdminApiClient";

import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { ErrorMessage } from "../ErrorMessage";

export interface Props {
  session: isuxportal.proto.services.common.GetCurrentSessionResponse;
  client: AdminApiClient;
  team: isuxportal.proto.resources.ITeam;
}

export interface State {
  error: Error | null;
}

export const AdminTeamEdit: React.FC<Props> = (props: Props) => {
  const history = useHistory();
  const [requestError, setRequestError] = React.useState<Error | null>(null);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{
    team: isuxportal.proto.resources.ITeam;
    contestants: isuxportal.proto.resources.IContestant[];
  }>({
    defaultValues: {
      team: props.team,
      contestants: props.team.members!,
    },
  });
  const onSubmit = handleSubmit(async (data) => {
    setRequesting(true);
    try {
      const resp = await props.client.updateTeam(data);
      history.push(`/admin/teams/${encodeURIComponent(props.team.id!.toString())}`);
    } catch (e) {
      setRequesting(false);
      setRequestError(e);
    }
  });

  return (
    <>
      <section>
        <h3 className="title is-3">
          Edit: {props.team.name} ({props.team.id!.toString()})
        </h3>
      </section>
      <form onSubmit={onSubmit}>
        <input type="hidden" {...register("team.id")} value={props.team.id!.toString()} />
        <div className="card mt-5">
          <div className="card-content">
            <div className="field">
              <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-name`}>
                Name
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  required={true}
                  {...register("team.name")}
                  id={`AdminTeamEdit-${props.team.id}-name`}
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-leaderId`}>
                Leader
              </label>
              <div className="control">
                <div className="select">
                  <select required={true} {...register("team.leaderId")} id={`AdminTeamEdit-${props.team.id}-leaderId`}>
                    {props.team.members!.map((v) => (
                      <option key={v.id!.toString()} value={v.id!.toString()}>
                        {v.id!.toString()}: {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-emailAddress`}>
                Email Address
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  required={true}
                  {...register("team.detail.emailAddress")}
                  id={`AdminTeamEdit-${props.team.id}-emailAddress`}
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" {...register("team.hidden")} />
                  Hidden
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" {...register("team.finalParticipation")} />
                  Final Participation
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" {...register("team.withdrawn")} />
                  Withdrawn
                </label>
              </div>
            </div>

            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" {...register("team.disqualified")} />
                  Disqualified
                </label>
              </div>
            </div>
          </div>
        </div>

        {props.team.members!.map((member, i) => {
          return (
            <div className="card mt-5" key={member.id!.toString()}>
              <input type="hidden" name={`contestants[${i}].id`} value={member.id!.toString()} />
              <div className="card-content">
                <div className="field">
                  <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-${member.id}-name`}>
                    Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      name={`contestants[${i}].name`}
                      id={`AdminTeamEdit-${props.team.id}-${member.id}-name`}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-${member.id}-githubLogin`}>
                    GitHub Login
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      name={`contestants[${i}].contestantDetail.githubLogin`}
                      id={`AdminTeamEdit-${props.team.id}-${member.id}-githubLogin`}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-${member.id}-githubId`}>
                    GitHub ID
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      name={`contestants[${i}].contestantDetail.githubId`}
                      id={`AdminTeamEdit-${props.team.id}-${member.id}-githubid`}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-${member.id}-discordTag`}>
                    Discord Tag
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      name={`contestants[${i}].contestantDetail.discordTag`}
                      id={`AdminTeamEdit-${props.team.id}-${member.id}-discordTag`}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={`AdminTeamEdit-${props.team.id}-${member.id}-discordId`}>
                    Discord ID
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      required={true}
                      name={`contestants[${i}].contestantDetail.discordId`}
                      id={`AdminTeamEdit-${props.team.id}-${member.id}-discordId`}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" name={`contestants[${i}].contestantDetail.isStudent`} />
                      Student
                    </label>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="card mt-5">
          <div className="card-content">
            <div className="field">
              <button className="button is-link" type="submit" disabled={requesting}>
                Save
              </button>
            </div>
          </div>
        </div>

        {requestError ? <ErrorMessage error={requestError} /> : null}
      </form>
    </>
  );
};
