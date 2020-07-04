// package: isuxportal.proto.services.registration
// file: isuxportal/services/registration/join.proto

import * as jspb from "google-protobuf";

export class JoinTeamRequest extends jspb.Message {
  getInviteToken(): string;
  setInviteToken(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeamRequest): JoinTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeamRequest;
  static deserializeBinaryFromReader(message: JoinTeamRequest, reader: jspb.BinaryReader): JoinTeamRequest;
}

export namespace JoinTeamRequest {
  export type AsObject = {
    inviteToken: string,
    name: string,
  }
}

export class JoinTeamResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinTeamResponse): JoinTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinTeamResponse;
  static deserializeBinaryFromReader(message: JoinTeamResponse, reader: jspb.BinaryReader): JoinTeamResponse;
}

export namespace JoinTeamResponse {
  export type AsObject = {
  }
}

