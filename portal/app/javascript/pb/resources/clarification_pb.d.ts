// package: isuxportal.proto.resources
// file: resources/clarification.proto

import * as jspb from "google-protobuf";
import * as resources_team_pb from "../resources/team_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Clarification extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  getAnswered(): boolean;
  setAnswered(value: boolean): void;

  getDisclosed(): boolean;
  setDisclosed(value: boolean): void;

  getQuestion(): string;
  setQuestion(value: string): void;

  getAnswer(): string;
  setAnswer(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasAnsweredAt(): boolean;
  clearAnsweredAt(): void;
  getAnsweredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAnsweredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): resources_team_pb.Team | undefined;
  setTeam(value?: resources_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Clarification.AsObject;
  static toObject(includeInstance: boolean, msg: Clarification): Clarification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Clarification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Clarification;
  static deserializeBinaryFromReader(message: Clarification, reader: jspb.BinaryReader): Clarification;
}

export namespace Clarification {
  export type AsObject = {
    id: number,
    teamId: number,
    answered: boolean,
    disclosed: boolean,
    question: string,
    answer: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    answeredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    team?: resources_team_pb.Team.AsObject,
  }
}

