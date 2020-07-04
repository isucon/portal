// package: isuxportal.proto.services.registration
// file: isuxportal/services/registration/session.proto

import * as jspb from "google-protobuf";
import * as isuxportal_resources_team_pb from "../../../isuxportal/resources/team_pb";

export class GetRegistrationSessionRequest extends jspb.Message {
  getInviteToken(): string;
  setInviteToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegistrationSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegistrationSessionRequest): GetRegistrationSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegistrationSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegistrationSessionRequest;
  static deserializeBinaryFromReader(message: GetRegistrationSessionRequest, reader: jspb.BinaryReader): GetRegistrationSessionRequest;
}

export namespace GetRegistrationSessionRequest {
  export type AsObject = {
    inviteToken: string,
  }
}

export class GetRegistrationSessionResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): isuxportal_resources_team_pb.Team | undefined;
  setTeam(value?: isuxportal_resources_team_pb.Team): void;

  getReady(): boolean;
  setReady(value: boolean): void;

  getGithubLogin(): string;
  setGithubLogin(value: string): void;

  getDiscordTag(): string;
  setDiscordTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRegistrationSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRegistrationSessionResponse): GetRegistrationSessionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRegistrationSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRegistrationSessionResponse;
  static deserializeBinaryFromReader(message: GetRegistrationSessionResponse, reader: jspb.BinaryReader): GetRegistrationSessionResponse;
}

export namespace GetRegistrationSessionResponse {
  export type AsObject = {
    team?: isuxportal_resources_team_pb.Team.AsObject,
    ready: boolean,
    githubLogin: string,
    discordTag: string,
  }
}

