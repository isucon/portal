// package: isuxportal.proto.resources
// file: isuxportal/resources/contestant.proto

import * as jspb from "google-protobuf";

export class Contestant extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTeamId(): number;
  setTeamId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasContestantDetail(): boolean;
  clearContestantDetail(): void;
  getContestantDetail(): Contestant.ContestantDetail | undefined;
  setContestantDetail(value?: Contestant.ContestantDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contestant.AsObject;
  static toObject(includeInstance: boolean, msg: Contestant): Contestant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contestant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contestant;
  static deserializeBinaryFromReader(message: Contestant, reader: jspb.BinaryReader): Contestant;
}

export namespace Contestant {
  export type AsObject = {
    id: number,
    teamId: number,
    name: string,
    contestantDetail?: Contestant.ContestantDetail.AsObject,
  }

  export class ContestantDetail extends jspb.Message {
    getGithubLogin(): string;
    setGithubLogin(value: string): void;

    getDiscordTag(): string;
    setDiscordTag(value: string): void;

    getIsStudent(): boolean;
    setIsStudent(value: boolean): void;

    getAvatarUrl(): string;
    setAvatarUrl(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContestantDetail.AsObject;
    static toObject(includeInstance: boolean, msg: ContestantDetail): ContestantDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContestantDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContestantDetail;
    static deserializeBinaryFromReader(message: ContestantDetail, reader: jspb.BinaryReader): ContestantDetail;
  }

  export namespace ContestantDetail {
    export type AsObject = {
      githubLogin: string,
      discordTag: string,
      isStudent: boolean,
      avatarUrl: string,
    }
  }
}

