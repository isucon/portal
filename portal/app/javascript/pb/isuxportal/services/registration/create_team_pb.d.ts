// package: isuxportal.proto.services.registration
// file: isuxportal/services/registration/create_team.proto

import * as jspb from "google-protobuf";

export class CreateTeamRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getEmailAddress(): string;
  setEmailAddress(value: string): void;

  getIsStudent(): boolean;
  setIsStudent(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamRequest): CreateTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamRequest;
  static deserializeBinaryFromReader(message: CreateTeamRequest, reader: jspb.BinaryReader): CreateTeamRequest;
}

export namespace CreateTeamRequest {
  export type AsObject = {
    name: string,
    emailAddress: string,
    isStudent: boolean,
  }
}

export class CreateTeamResponse extends jspb.Message {
  getTeamId(): number;
  setTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTeamResponse): CreateTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTeamResponse;
  static deserializeBinaryFromReader(message: CreateTeamResponse, reader: jspb.BinaryReader): CreateTeamResponse;
}

export namespace CreateTeamResponse {
  export type AsObject = {
    teamId: number,
  }
}

