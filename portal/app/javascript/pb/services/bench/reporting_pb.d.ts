// package: isuxportal.proto.services.bench
// file: services/bench/reporting.proto

import * as jspb from "google-protobuf";
import * as resources_benchmark_result_pb from "../../resources/benchmark_result_pb";

export class ReportBenchmarkResultRequest extends jspb.Message {
  getJobId(): number;
  setJobId(value: number): void;

  getHandle(): string;
  setHandle(value: string): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): resources_benchmark_result_pb.BenchmarkResult | undefined;
  setResult(value?: resources_benchmark_result_pb.BenchmarkResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportBenchmarkResultRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportBenchmarkResultRequest): ReportBenchmarkResultRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportBenchmarkResultRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportBenchmarkResultRequest;
  static deserializeBinaryFromReader(message: ReportBenchmarkResultRequest, reader: jspb.BinaryReader): ReportBenchmarkResultRequest;
}

export namespace ReportBenchmarkResultRequest {
  export type AsObject = {
    jobId: number,
    handle: string,
    result?: resources_benchmark_result_pb.BenchmarkResult.AsObject,
  }
}

export class ReportBenchmarkResultResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportBenchmarkResultResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportBenchmarkResultResponse): ReportBenchmarkResultResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportBenchmarkResultResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportBenchmarkResultResponse;
  static deserializeBinaryFromReader(message: ReportBenchmarkResultResponse, reader: jspb.BinaryReader): ReportBenchmarkResultResponse;
}

export namespace ReportBenchmarkResultResponse {
  export type AsObject = {
  }
}

