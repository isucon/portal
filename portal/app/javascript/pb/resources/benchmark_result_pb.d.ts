// package: isuxportal.proto.resources
// file: resources/benchmark_result.proto

import * as jspb from "google-protobuf";

export class BenchmarkResult extends jspb.Message {
  getFinished(): boolean;
  setFinished(value: boolean): void;

  getPassed(): boolean;
  setPassed(value: boolean): void;

  getScore(): number;
  setScore(value: number): void;

  hasScoreBreakdown(): boolean;
  clearScoreBreakdown(): void;
  getScoreBreakdown(): BenchmarkResult.ScoreBreakdown | undefined;
  setScoreBreakdown(value?: BenchmarkResult.ScoreBreakdown): void;

  getReason(): string;
  setReason(value: string): void;

  getStdout(): string;
  setStdout(value: string): void;

  getStderr(): string;
  setStderr(value: string): void;

  hasSurvey(): boolean;
  clearSurvey(): void;
  getSurvey(): BenchmarkResult.Survey | undefined;
  setSurvey(value?: BenchmarkResult.Survey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BenchmarkResult.AsObject;
  static toObject(includeInstance: boolean, msg: BenchmarkResult): BenchmarkResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BenchmarkResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BenchmarkResult;
  static deserializeBinaryFromReader(message: BenchmarkResult, reader: jspb.BinaryReader): BenchmarkResult;
}

export namespace BenchmarkResult {
  export type AsObject = {
    finished: boolean,
    passed: boolean,
    score: number,
    scoreBreakdown?: BenchmarkResult.ScoreBreakdown.AsObject,
    reason: string,
    stdout: string,
    stderr: string,
    survey?: BenchmarkResult.Survey.AsObject,
  }

  export class ScoreBreakdown extends jspb.Message {
    getBase(): number;
    setBase(value: number): void;

    getDeduction(): number;
    setDeduction(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScoreBreakdown.AsObject;
    static toObject(includeInstance: boolean, msg: ScoreBreakdown): ScoreBreakdown.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ScoreBreakdown, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScoreBreakdown;
    static deserializeBinaryFromReader(message: ScoreBreakdown, reader: jspb.BinaryReader): ScoreBreakdown;
  }

  export namespace ScoreBreakdown {
    export type AsObject = {
      base: number,
      deduction: number,
    }
  }

  export class Survey extends jspb.Message {
    getLanguage(): string;
    setLanguage(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Survey.AsObject;
    static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Survey;
    static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
  }

  export namespace Survey {
    export type AsObject = {
      language: string,
    }
  }
}

