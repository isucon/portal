// package: isuxportal.proto.services.registration
// file: services/registration/invite.proto

import * as jspb from "google-protobuf";

export class GetTeamInvitationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamInvitationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamInvitationRequest): GetTeamInvitationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTeamInvitationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamInvitationRequest;
  static deserializeBinaryFromReader(message: GetTeamInvitationRequest, reader: jspb.BinaryReader): GetTeamInvitationRequest;
}

export namespace GetTeamInvitationRequest {
  export type AsObject = {
  }
}

export class GetTeamInvitationResponse extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): void;

  getInviteUrl(): string;
  setInviteUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTeamInvitationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTeamInvitationResponse): GetTeamInvitationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTeamInvitationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTeamInvitationResponse;
  static deserializeBinaryFromReader(message: GetTeamInvitationResponse, reader: jspb.BinaryReader): GetTeamInvitationResponse;
}

export namespace GetTeamInvitationResponse {
  export type AsObject = {
    teamId: number,
    inviteUrl: string,
  }
}

