// package: isuxportal.proto.resources
// file: isuxportal/resources/benchmark_job.proto

import * as jspb from "google-protobuf";
import * as isuxportal_resources_benchmark_result_pb from "../../isuxportal/resources/benchmark_result_pb";
import * as isuxportal_resources_contestant_instance_pb from "../../isuxportal/resources/contestant_instance_pb";
import * as isuxportal_resources_team_pb from "../../isuxportal/resources/team_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class BenchmarkJob extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  getTargetId(): number;
  setTargetId(value: number): void;

  getStatus(): BenchmarkJob.StatusMap[keyof BenchmarkJob.StatusMap];
  setStatus(value: BenchmarkJob.StatusMap[keyof BenchmarkJob.StatusMap]): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): isuxportal_resources_benchmark_result_pb.BenchmarkResult | undefined;
  setResult(value?: isuxportal_resources_benchmark_result_pb.BenchmarkResult): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStartedAt(): boolean;
  clearStartedAt(): void;
  getStartedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFinishedAt(): boolean;
  clearFinishedAt(): void;
  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): isuxportal_resources_team_pb.Team | undefined;
  setTeam(value?: isuxportal_resources_team_pb.Team): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): isuxportal_resources_contestant_instance_pb.ContestantInstance | undefined;
  setTarget(value?: isuxportal_resources_contestant_instance_pb.ContestantInstance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BenchmarkJob.AsObject;
  static toObject(includeInstance: boolean, msg: BenchmarkJob): BenchmarkJob.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BenchmarkJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BenchmarkJob;
  static deserializeBinaryFromReader(message: BenchmarkJob, reader: jspb.BinaryReader): BenchmarkJob;
}

export namespace BenchmarkJob {
  export type AsObject = {
    id: number,
    teamId: number,
    targetId: number,
    status: BenchmarkJob.StatusMap[keyof BenchmarkJob.StatusMap],
    result?: isuxportal_resources_benchmark_result_pb.BenchmarkResult.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    team?: isuxportal_resources_team_pb.Team.AsObject,
    target?: isuxportal_resources_contestant_instance_pb.ContestantInstance.AsObject,
  }

  export interface StatusMap {
    PENDING: 0;
    RUNNING: 1;
    ERRORED: 2;
    CANCELLED: 3;
    FINISHED: 4;
  }

  export const Status: StatusMap;
}

