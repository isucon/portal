// package: isuxportal.proto.resources
// file: resources/team.proto

import * as jspb from "google-protobuf";
import * as resources_contestant_pb from "../resources/contestant_pb";

export class Team extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getLeaderId(): number;
  setLeaderId(value: number): void;

  clearMemberIdsList(): void;
  getMemberIdsList(): Array<number>;
  setMemberIdsList(value: Array<number>): void;
  addMemberIds(value: number, index?: number): number;

  getFinalParticipation(): boolean;
  setFinalParticipation(value: boolean): void;

  getHidden(): boolean;
  setHidden(value: boolean): void;

  getWithdrawn(): boolean;
  setWithdrawn(value: boolean): void;

  hasDetail(): boolean;
  clearDetail(): void;
  getDetail(): Team.TeamDetail | undefined;
  setDetail(value?: Team.TeamDetail): void;

  hasLeader(): boolean;
  clearLeader(): void;
  getLeader(): resources_contestant_pb.Contestant | undefined;
  setLeader(value?: resources_contestant_pb.Contestant): void;

  clearMembersList(): void;
  getMembersList(): Array<resources_contestant_pb.Contestant>;
  setMembersList(value: Array<resources_contestant_pb.Contestant>): void;
  addMembers(value?: resources_contestant_pb.Contestant, index?: number): resources_contestant_pb.Contestant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Team.AsObject;
  static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Team;
  static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
}

export namespace Team {
  export type AsObject = {
    id: number,
    name: string,
    leaderId: number,
    memberIdsList: Array<number>,
    finalParticipation: boolean,
    hidden: boolean,
    withdrawn: boolean,
    detail?: Team.TeamDetail.AsObject,
    leader?: resources_contestant_pb.Contestant.AsObject,
    membersList: Array<resources_contestant_pb.Contestant.AsObject>,
  }

  export class TeamDetail extends jspb.Message {
    getEmailAddress(): string;
    setEmailAddress(value: string): void;

    getBenchmarkTargetId(): number;
    setBenchmarkTargetId(value: number): void;

    getInviteToken(): string;
    setInviteToken(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamDetail.AsObject;
    static toObject(includeInstance: boolean, msg: TeamDetail): TeamDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamDetail;
    static deserializeBinaryFromReader(message: TeamDetail, reader: jspb.BinaryReader): TeamDetail;
  }

  export namespace TeamDetail {
    export type AsObject = {
      emailAddress: string,
      benchmarkTargetId: number,
      inviteToken: string,
    }
  }
}

