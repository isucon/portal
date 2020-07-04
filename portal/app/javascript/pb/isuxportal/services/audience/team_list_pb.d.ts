// package: isuxportal.proto.services.audience
// file: isuxportal/services/audience/team_list.proto

import * as jspb from "google-protobuf";

export class ListTeamRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamRequest): ListTeamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTeamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamRequest;
  static deserializeBinaryFromReader(message: ListTeamRequest, reader: jspb.BinaryReader): ListTeamRequest;
}

export namespace ListTeamRequest {
  export type AsObject = {
  }
}

export class ListTeamResponse extends jspb.Message {
  clearTeamsList(): void;
  getTeamsList(): Array<ListTeamResponse.TeamListItem>;
  setTeamsList(value: Array<ListTeamResponse.TeamListItem>): void;
  addTeams(value?: ListTeamResponse.TeamListItem, index?: number): ListTeamResponse.TeamListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTeamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTeamResponse): ListTeamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTeamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTeamResponse;
  static deserializeBinaryFromReader(message: ListTeamResponse, reader: jspb.BinaryReader): ListTeamResponse;
}

export namespace ListTeamResponse {
  export type AsObject = {
    teamsList: Array<ListTeamResponse.TeamListItem.AsObject>,
  }

  export class TeamListItem extends jspb.Message {
    getTeamId(): number;
    setTeamId(value: number): void;

    getName(): string;
    setName(value: string): void;

    clearMemberNamesList(): void;
    getMemberNamesList(): Array<string>;
    setMemberNamesList(value: Array<string>): void;
    addMemberNames(value: string, index?: number): string;

    getFinalParticipation(): boolean;
    setFinalParticipation(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TeamListItem.AsObject;
    static toObject(includeInstance: boolean, msg: TeamListItem): TeamListItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TeamListItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TeamListItem;
    static deserializeBinaryFromReader(message: TeamListItem, reader: jspb.BinaryReader): TeamListItem;
  }

  export namespace TeamListItem {
    export type AsObject = {
      teamId: number,
      name: string,
      memberNamesList: Array<string>,
      finalParticipation: boolean,
    }
  }
}

