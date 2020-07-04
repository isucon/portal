// package: isuxportal.proto.services.common
// file: services/common/me.proto

import * as jspb from "google-protobuf";
import * as resources_team_pb from "../../resources/team_pb";
import * as resources_contestant_pb from "../../resources/contestant_pb";

export class GetCurrentSessionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSessionRequest): GetCurrentSessionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSessionRequest;
  static deserializeBinaryFromReader(message: GetCurrentSessionRequest, reader: jspb.BinaryReader): GetCurrentSessionRequest;
}

export namespace GetCurrentSessionRequest {
  export type AsObject = {
  }
}

export class GetCurrentSettionResponse extends jspb.Message {
  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): resources_team_pb.Team | undefined;
  setTeam(value?: resources_team_pb.Team): void;

  hasContestant(): boolean;
  clearContestant(): void;
  getContestant(): resources_contestant_pb.Contestant | undefined;
  setContestant(value?: resources_contestant_pb.Contestant): void;

  getDiscordInvitationUrl(): string;
  setDiscordInvitationUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentSettionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentSettionResponse): GetCurrentSettionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrentSettionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentSettionResponse;
  static deserializeBinaryFromReader(message: GetCurrentSettionResponse, reader: jspb.BinaryReader): GetCurrentSettionResponse;
}

export namespace GetCurrentSettionResponse {
  export type AsObject = {
    team?: resources_team_pb.Team.AsObject,
    contestant?: resources_contestant_pb.Contestant.AsObject,
    discordInvitationUrl: string,
  }
}

