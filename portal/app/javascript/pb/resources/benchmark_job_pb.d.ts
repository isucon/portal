// package: isuxportal.proto.resources
// file: resources/benchmark_job.proto

import * as jspb from "google-protobuf";
import * as resources_benchmark_result_pb from "../resources/benchmark_result_pb";
import * as resources_contestant_instance_pb from "../resources/contestant_instance_pb";
import * as resources_team_pb from "../resources/team_pb";
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
  getResult(): resources_benchmark_result_pb.BenchmarkResult | undefined;
  setResult(value?: resources_benchmark_result_pb.BenchmarkResult): void;

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
  getTeam(): resources_team_pb.Team | undefined;
  setTeam(value?: resources_team_pb.Team): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): resources_contestant_instance_pb.ContestantInstance | undefined;
  setTarget(value?: resources_contestant_instance_pb.ContestantInstance): void;

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
    result?: resources_benchmark_result_pb.BenchmarkResult.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    startedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    team?: resources_team_pb.Team.AsObject,
    target?: resources_contestant_instance_pb.ContestantInstance.AsObject,
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

