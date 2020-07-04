// package: isuxportal.proto.services.dcim
// file: isuxportal/services/dcim/instance_management.proto

import * as jspb from "google-protobuf";
import * as isuxportal_resources_contestant_instance_pb from "../../../isuxportal/resources/contestant_instance_pb";

export class InformInstanceStateUpdateRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasInstance(): boolean;
  clearInstance(): void;
  getInstance(): isuxportal_resources_contestant_instance_pb.ContestantInstance | undefined;
  setInstance(value?: isuxportal_resources_contestant_instance_pb.ContestantInstance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InformInstanceStateUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InformInstanceStateUpdateRequest): InformInstanceStateUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InformInstanceStateUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InformInstanceStateUpdateRequest;
  static deserializeBinaryFromReader(message: InformInstanceStateUpdateRequest, reader: jspb.BinaryReader): InformInstanceStateUpdateRequest;
}

export namespace InformInstanceStateUpdateRequest {
  export type AsObject = {
    token: string,
    instance?: isuxportal_resources_contestant_instance_pb.ContestantInstance.AsObject,
  }
}

export class InformInstanceStateUpdateResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InformInstanceStateUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InformInstanceStateUpdateResponse): InformInstanceStateUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InformInstanceStateUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InformInstanceStateUpdateResponse;
  static deserializeBinaryFromReader(message: InformInstanceStateUpdateResponse, reader: jspb.BinaryReader): InformInstanceStateUpdateResponse;
}

export namespace InformInstanceStateUpdateResponse {
  export type AsObject = {
  }
}

