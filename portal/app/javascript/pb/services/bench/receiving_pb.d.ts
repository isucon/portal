// package: isuxportal.proto.services.bench
// file: services/bench/receiving.proto

import * as jspb from "google-protobuf";

export class ReceiveBenchmarkJobRequest extends jspb.Message {
  getInstanceName(): string;
  setInstanceName(value: string): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveBenchmarkJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveBenchmarkJobRequest): ReceiveBenchmarkJobRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveBenchmarkJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveBenchmarkJobRequest;
  static deserializeBinaryFromReader(message: ReceiveBenchmarkJobRequest, reader: jspb.BinaryReader): ReceiveBenchmarkJobRequest;
}

export namespace ReceiveBenchmarkJobRequest {
  export type AsObject = {
    instanceName: string,
    teamId: number,
  }
}

export class ReceiveBenchmarkJobResponse extends jspb.Message {
  getJobId(): number;
  setJobId(value: number): void;

  getHandle(): string;
  setHandle(value: string): void;

  getTargetIpv4Address(): string;
  setTargetIpv4Address(value: string): void;

  getDescriptionHuman(): string;
  setDescriptionHuman(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiveBenchmarkJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiveBenchmarkJobResponse): ReceiveBenchmarkJobResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReceiveBenchmarkJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiveBenchmarkJobResponse;
  static deserializeBinaryFromReader(message: ReceiveBenchmarkJobResponse, reader: jspb.BinaryReader): ReceiveBenchmarkJobResponse;
}

export namespace ReceiveBenchmarkJobResponse {
  export type AsObject = {
    jobId: number,
    handle: string,
    targetIpv4Address: string,
    descriptionHuman: string,
  }
}

