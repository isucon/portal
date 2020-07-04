// package: isuxportal.proto.resources
// file: isuxportal/resources/contestant_instance.proto

import * as jspb from "google-protobuf";
import * as isuxportal_resources_team_pb from "../../isuxportal/resources/team_pb";

export class ContestantInstance extends jspb.Message {
  getCloudId(): string;
  setCloudId(value: string): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  getNumber(): number;
  setNumber(value: number): void;

  getPublicIpv4Address(): string;
  setPublicIpv4Address(value: string): void;

  getPrivateIpv4Address(): string;
  setPrivateIpv4Address(value: string): void;

  getStatus(): ContestantInstance.StatusMap[keyof ContestantInstance.StatusMap];
  setStatus(value: ContestantInstance.StatusMap[keyof ContestantInstance.StatusMap]): void;

  hasTeam(): boolean;
  clearTeam(): void;
  getTeam(): isuxportal_resources_team_pb.Team | undefined;
  setTeam(value?: isuxportal_resources_team_pb.Team): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContestantInstance.AsObject;
  static toObject(includeInstance: boolean, msg: ContestantInstance): ContestantInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContestantInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContestantInstance;
  static deserializeBinaryFromReader(message: ContestantInstance, reader: jspb.BinaryReader): ContestantInstance;
}

export namespace ContestantInstance {
  export type AsObject = {
    cloudId: string,
    teamId: number,
    number: number,
    publicIpv4Address: string,
    privateIpv4Address: string,
    status: ContestantInstance.StatusMap[keyof ContestantInstance.StatusMap],
    team?: isuxportal_resources_team_pb.Team.AsObject,
  }

  export interface StatusMap {
    UNKNOWN: 0;
    PENDING: 1;
    MODIFYING: 2;
    STOPPED: 3;
    RUNNING: 4;
    TERMINATED: 5;
  }

  export const Status: StatusMap;
}

