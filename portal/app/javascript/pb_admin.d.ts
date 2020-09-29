import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace isuxportal. */
export namespace isuxportal {

    /** Namespace proto. */
    namespace proto {

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (number|null);

            /** Error name */
            name?: (string|null);

            /** Error humanMessage */
            humanMessage?: (string|null);

            /** Error humanDescriptions */
            humanDescriptions?: (string[]|null);

            /** Error debugInfo */
            debugInfo?: (isuxportal.proto.Error.IDebugInfo|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: isuxportal.proto.IError);

            /** Error code. */
            public code: number;

            /** Error name. */
            public name: string;

            /** Error humanMessage. */
            public humanMessage: string;

            /** Error humanDescriptions. */
            public humanDescriptions: string[];

            /** Error debugInfo. */
            public debugInfo?: (isuxportal.proto.Error.IDebugInfo|null);

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: isuxportal.proto.IError): isuxportal.proto.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: isuxportal.proto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: isuxportal.proto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.Error;

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Error
             */
            public static fromObject(object: { [k: string]: any }): isuxportal.proto.Error;

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @param message Error
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: isuxportal.proto.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Error to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Error {

            /** Properties of a DebugInfo. */
            interface IDebugInfo {

                /** DebugInfo exception */
                exception?: (string|null);

                /** DebugInfo trace */
                trace?: (string[]|null);

                /** DebugInfo applicationTrace */
                applicationTrace?: (string[]|null);

                /** DebugInfo frameworkTrace */
                frameworkTrace?: (string[]|null);
            }

            /** Represents a DebugInfo. */
            class DebugInfo implements IDebugInfo {

                /**
                 * Constructs a new DebugInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.Error.IDebugInfo);

                /** DebugInfo exception. */
                public exception: string;

                /** DebugInfo trace. */
                public trace: string[];

                /** DebugInfo applicationTrace. */
                public applicationTrace: string[];

                /** DebugInfo frameworkTrace. */
                public frameworkTrace: string[];

                /**
                 * Creates a new DebugInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns DebugInfo instance
                 */
                public static create(properties?: isuxportal.proto.Error.IDebugInfo): isuxportal.proto.Error.DebugInfo;

                /**
                 * Encodes the specified DebugInfo message. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @param message DebugInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.Error.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @param message DebugInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.Error.IDebugInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.Error.DebugInfo;

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.Error.DebugInfo;

                /**
                 * Verifies a DebugInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DebugInfo
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.Error.DebugInfo;

                /**
                 * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
                 * @param message DebugInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.Error.DebugInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DebugInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace resources. */
        namespace resources {

            /** Properties of a BenchmarkJob. */
            interface IBenchmarkJob {

                /** BenchmarkJob id */
                id?: (number|Long|null);

                /** BenchmarkJob teamId */
                teamId?: (number|Long|null);

                /** BenchmarkJob targetId */
                targetId?: (number|Long|null);

                /** BenchmarkJob status */
                status?: (isuxportal.proto.resources.BenchmarkJob.Status|null);

                /** BenchmarkJob createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob updatedAt */
                updatedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob startedAt */
                startedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob finishedAt */
                finishedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob score */
                score?: (number|Long|null);

                /** BenchmarkJob instanceName */
                instanceName?: (string|null);

                /** BenchmarkJob team */
                team?: (isuxportal.proto.resources.ITeam|null);

                /** BenchmarkJob target */
                target?: (isuxportal.proto.resources.IContestantInstance|null);

                /** BenchmarkJob result */
                result?: (isuxportal.proto.resources.IBenchmarkResult|null);
            }

            /** Represents a BenchmarkJob. */
            class BenchmarkJob implements IBenchmarkJob {

                /**
                 * Constructs a new BenchmarkJob.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IBenchmarkJob);

                /** BenchmarkJob id. */
                public id: (number|Long);

                /** BenchmarkJob teamId. */
                public teamId: (number|Long);

                /** BenchmarkJob targetId. */
                public targetId: (number|Long);

                /** BenchmarkJob status. */
                public status: isuxportal.proto.resources.BenchmarkJob.Status;

                /** BenchmarkJob createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob updatedAt. */
                public updatedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob startedAt. */
                public startedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob finishedAt. */
                public finishedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkJob score. */
                public score: (number|Long);

                /** BenchmarkJob instanceName. */
                public instanceName: string;

                /** BenchmarkJob team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /** BenchmarkJob target. */
                public target?: (isuxportal.proto.resources.IContestantInstance|null);

                /** BenchmarkJob result. */
                public result?: (isuxportal.proto.resources.IBenchmarkResult|null);

                /**
                 * Creates a new BenchmarkJob instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BenchmarkJob instance
                 */
                public static create(properties?: isuxportal.proto.resources.IBenchmarkJob): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Encodes the specified BenchmarkJob message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @param message BenchmarkJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IBenchmarkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BenchmarkJob message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @param message BenchmarkJob message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IBenchmarkJob, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Verifies a BenchmarkJob message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BenchmarkJob message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BenchmarkJob
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkJob;

                /**
                 * Creates a plain object from a BenchmarkJob message. Also converts values to other types if specified.
                 * @param message BenchmarkJob
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.BenchmarkJob, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BenchmarkJob to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BenchmarkJob {

                /** Status enum. */
                enum Status {
                    PENDING = 0,
                    RUNNING = 1,
                    ERRORED = 2,
                    CANCELLED = 3,
                    FINISHED = 4
                }
            }

            /** Properties of a BenchmarkResult. */
            interface IBenchmarkResult {

                /** BenchmarkResult finished */
                finished?: (boolean|null);

                /** BenchmarkResult passed */
                passed?: (boolean|null);

                /** BenchmarkResult score */
                score?: (number|Long|null);

                /** BenchmarkResult scoreBreakdown */
                scoreBreakdown?: (isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null);

                /** BenchmarkResult execution */
                execution?: (isuxportal.proto.resources.BenchmarkResult.IExecution|null);

                /** BenchmarkResult markedAt */
                markedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkResult surveyResponse */
                surveyResponse?: (isuxportal.proto.resources.ISurveyResponse|null);
            }

            /** Represents a BenchmarkResult. */
            class BenchmarkResult implements IBenchmarkResult {

                /**
                 * Constructs a new BenchmarkResult.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IBenchmarkResult);

                /** BenchmarkResult finished. */
                public finished: boolean;

                /** BenchmarkResult passed. */
                public passed: boolean;

                /** BenchmarkResult score. */
                public score: (number|Long);

                /** BenchmarkResult scoreBreakdown. */
                public scoreBreakdown?: (isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null);

                /** BenchmarkResult execution. */
                public execution?: (isuxportal.proto.resources.BenchmarkResult.IExecution|null);

                /** BenchmarkResult markedAt. */
                public markedAt?: (google.protobuf.ITimestamp|null);

                /** BenchmarkResult surveyResponse. */
                public surveyResponse?: (isuxportal.proto.resources.ISurveyResponse|null);

                /**
                 * Creates a new BenchmarkResult instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BenchmarkResult instance
                 */
                public static create(properties?: isuxportal.proto.resources.IBenchmarkResult): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Encodes the specified BenchmarkResult message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @param message BenchmarkResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IBenchmarkResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BenchmarkResult message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @param message BenchmarkResult message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IBenchmarkResult, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Verifies a BenchmarkResult message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BenchmarkResult message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BenchmarkResult
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult;

                /**
                 * Creates a plain object from a BenchmarkResult message. Also converts values to other types if specified.
                 * @param message BenchmarkResult
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.BenchmarkResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BenchmarkResult to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BenchmarkResult {

                /** Properties of a ScoreBreakdown. */
                interface IScoreBreakdown {

                    /** ScoreBreakdown raw */
                    raw?: (number|Long|null);

                    /** ScoreBreakdown deduction */
                    deduction?: (number|Long|null);
                }

                /** Represents a ScoreBreakdown. */
                class ScoreBreakdown implements IScoreBreakdown {

                    /**
                     * Constructs a new ScoreBreakdown.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown);

                    /** ScoreBreakdown raw. */
                    public raw: (number|Long);

                    /** ScoreBreakdown deduction. */
                    public deduction: (number|Long);

                    /**
                     * Creates a new ScoreBreakdown instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScoreBreakdown instance
                     */
                    public static create(properties?: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Encodes the specified ScoreBreakdown message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @param message ScoreBreakdown message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScoreBreakdown message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @param message ScoreBreakdown message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Verifies a ScoreBreakdown message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScoreBreakdown message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScoreBreakdown
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown;

                    /**
                     * Creates a plain object from a ScoreBreakdown message. Also converts values to other types if specified.
                     * @param message ScoreBreakdown
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScoreBreakdown to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Execution. */
                interface IExecution {

                    /** Execution reason */
                    reason?: (string|null);

                    /** Execution stdout */
                    stdout?: (string|null);

                    /** Execution stderr */
                    stderr?: (string|null);

                    /** Execution exitStatus */
                    exitStatus?: (number|null);

                    /** Execution exitSignal */
                    exitSignal?: (number|null);

                    /** Execution signaled */
                    signaled?: (boolean|null);
                }

                /** Represents an Execution. */
                class Execution implements IExecution {

                    /**
                     * Constructs a new Execution.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.BenchmarkResult.IExecution);

                    /** Execution reason. */
                    public reason: string;

                    /** Execution stdout. */
                    public stdout: string;

                    /** Execution stderr. */
                    public stderr: string;

                    /** Execution exitStatus. */
                    public exitStatus: number;

                    /** Execution exitSignal. */
                    public exitSignal: number;

                    /** Execution signaled. */
                    public signaled: boolean;

                    /**
                     * Creates a new Execution instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Execution instance
                     */
                    public static create(properties?: isuxportal.proto.resources.BenchmarkResult.IExecution): isuxportal.proto.resources.BenchmarkResult.Execution;

                    /**
                     * Encodes the specified Execution message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @param message Execution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.BenchmarkResult.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Execution message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @param message Execution message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.BenchmarkResult.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Execution message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.BenchmarkResult.Execution;

                    /**
                     * Decodes an Execution message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.BenchmarkResult.Execution;

                    /**
                     * Verifies an Execution message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Execution message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Execution
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.BenchmarkResult.Execution;

                    /**
                     * Creates a plain object from an Execution message. Also converts values to other types if specified.
                     * @param message Execution
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.BenchmarkResult.Execution, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Execution to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a ContestantInstance. */
            interface IContestantInstance {

                /** ContestantInstance id */
                id?: (number|Long|null);

                /** ContestantInstance cloudId */
                cloudId?: (string|null);

                /** ContestantInstance teamId */
                teamId?: (number|Long|null);

                /** ContestantInstance number */
                number?: (number|Long|null);

                /** ContestantInstance publicIpv4Address */
                publicIpv4Address?: (string|null);

                /** ContestantInstance privateIpv4Address */
                privateIpv4Address?: (string|null);

                /** ContestantInstance status */
                status?: (isuxportal.proto.resources.ContestantInstance.Status|null);

                /** ContestantInstance team */
                team?: (isuxportal.proto.resources.ITeam|null);
            }

            /** Represents a ContestantInstance. */
            class ContestantInstance implements IContestantInstance {

                /**
                 * Constructs a new ContestantInstance.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IContestantInstance);

                /** ContestantInstance id. */
                public id: (number|Long);

                /** ContestantInstance cloudId. */
                public cloudId: string;

                /** ContestantInstance teamId. */
                public teamId: (number|Long);

                /** ContestantInstance number. */
                public number: (number|Long);

                /** ContestantInstance publicIpv4Address. */
                public publicIpv4Address: string;

                /** ContestantInstance privateIpv4Address. */
                public privateIpv4Address: string;

                /** ContestantInstance status. */
                public status: isuxportal.proto.resources.ContestantInstance.Status;

                /** ContestantInstance team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /**
                 * Creates a new ContestantInstance instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ContestantInstance instance
                 */
                public static create(properties?: isuxportal.proto.resources.IContestantInstance): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Encodes the specified ContestantInstance message. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @param message ContestantInstance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IContestantInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ContestantInstance message, length delimited. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @param message ContestantInstance message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IContestantInstance, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Verifies a ContestantInstance message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ContestantInstance message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ContestantInstance
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.ContestantInstance;

                /**
                 * Creates a plain object from a ContestantInstance message. Also converts values to other types if specified.
                 * @param message ContestantInstance
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.ContestantInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ContestantInstance to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ContestantInstance {

                /** Status enum. */
                enum Status {
                    UNKNOWN = 0,
                    PENDING = 1,
                    MODIFYING = 2,
                    STOPPED = 3,
                    RUNNING = 4,
                    TERMINATED = 5
                }
            }

            /** Properties of a Team. */
            interface ITeam {

                /** Team id */
                id?: (number|Long|null);

                /** Team name */
                name?: (string|null);

                /** Team leaderId */
                leaderId?: (number|Long|null);

                /** Team memberIds */
                memberIds?: ((number|Long)[]|null);

                /** Team finalParticipation */
                finalParticipation?: (boolean|null);

                /** Team hidden */
                hidden?: (boolean|null);

                /** Team withdrawn */
                withdrawn?: (boolean|null);

                /** Team disqualified */
                disqualified?: (boolean|null);

                /** Team student */
                student?: (isuxportal.proto.resources.Team.IStudentStatus|null);

                /** Team detail */
                detail?: (isuxportal.proto.resources.Team.ITeamDetail|null);

                /** Team leader */
                leader?: (isuxportal.proto.resources.IContestant|null);

                /** Team members */
                members?: (isuxportal.proto.resources.IContestant[]|null);
            }

            /** Represents a Team. */
            class Team implements ITeam {

                /**
                 * Constructs a new Team.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.ITeam);

                /** Team id. */
                public id: (number|Long);

                /** Team name. */
                public name: string;

                /** Team leaderId. */
                public leaderId: (number|Long);

                /** Team memberIds. */
                public memberIds: (number|Long)[];

                /** Team finalParticipation. */
                public finalParticipation: boolean;

                /** Team hidden. */
                public hidden: boolean;

                /** Team withdrawn. */
                public withdrawn: boolean;

                /** Team disqualified. */
                public disqualified: boolean;

                /** Team student. */
                public student?: (isuxportal.proto.resources.Team.IStudentStatus|null);

                /** Team detail. */
                public detail?: (isuxportal.proto.resources.Team.ITeamDetail|null);

                /** Team leader. */
                public leader?: (isuxportal.proto.resources.IContestant|null);

                /** Team members. */
                public members: isuxportal.proto.resources.IContestant[];

                /**
                 * Creates a new Team instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Team instance
                 */
                public static create(properties?: isuxportal.proto.resources.ITeam): isuxportal.proto.resources.Team;

                /**
                 * Encodes the specified Team message. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @param message Team message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Team message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @param message Team message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.ITeam, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Team message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Team;

                /**
                 * Decodes a Team message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Team;

                /**
                 * Verifies a Team message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Team message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Team
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Team;

                /**
                 * Creates a plain object from a Team message. Also converts values to other types if specified.
                 * @param message Team
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Team, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Team to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Team {

                /** Properties of a StudentStatus. */
                interface IStudentStatus {

                    /** StudentStatus status */
                    status?: (boolean|null);
                }

                /** Represents a StudentStatus. */
                class StudentStatus implements IStudentStatus {

                    /**
                     * Constructs a new StudentStatus.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Team.IStudentStatus);

                    /** StudentStatus status. */
                    public status: boolean;

                    /**
                     * Creates a new StudentStatus instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StudentStatus instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Team.IStudentStatus): isuxportal.proto.resources.Team.StudentStatus;

                    /**
                     * Encodes the specified StudentStatus message. Does not implicitly {@link isuxportal.proto.resources.Team.StudentStatus.verify|verify} messages.
                     * @param message StudentStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Team.IStudentStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StudentStatus message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.StudentStatus.verify|verify} messages.
                     * @param message StudentStatus message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Team.IStudentStatus, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StudentStatus message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StudentStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Team.StudentStatus;

                    /**
                     * Decodes a StudentStatus message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StudentStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Team.StudentStatus;

                    /**
                     * Verifies a StudentStatus message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StudentStatus message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StudentStatus
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Team.StudentStatus;

                    /**
                     * Creates a plain object from a StudentStatus message. Also converts values to other types if specified.
                     * @param message StudentStatus
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Team.StudentStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StudentStatus to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TeamDetail. */
                interface ITeamDetail {

                    /** TeamDetail emailAddress */
                    emailAddress?: (string|null);

                    /** TeamDetail inviteToken */
                    inviteToken?: (string|null);
                }

                /** Represents a TeamDetail. */
                class TeamDetail implements ITeamDetail {

                    /**
                     * Constructs a new TeamDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Team.ITeamDetail);

                    /** TeamDetail emailAddress. */
                    public emailAddress: string;

                    /** TeamDetail inviteToken. */
                    public inviteToken: string;

                    /**
                     * Creates a new TeamDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TeamDetail instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Team.ITeamDetail): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Encodes the specified TeamDetail message. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @param message TeamDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Team.ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @param message TeamDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Team.ITeamDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Verifies a TeamDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TeamDetail
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Team.TeamDetail;

                    /**
                     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
                     * @param message TeamDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Team.TeamDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TeamDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Contestant. */
            interface IContestant {

                /** Contestant id */
                id?: (number|Long|null);

                /** Contestant teamId */
                teamId?: (number|Long|null);

                /** Contestant name */
                name?: (string|null);

                /** Contestant contestantDetail */
                contestantDetail?: (isuxportal.proto.resources.Contestant.IContestantDetail|null);
            }

            /** Represents a Contestant. */
            class Contestant implements IContestant {

                /**
                 * Constructs a new Contestant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IContestant);

                /** Contestant id. */
                public id: (number|Long);

                /** Contestant teamId. */
                public teamId: (number|Long);

                /** Contestant name. */
                public name: string;

                /** Contestant contestantDetail. */
                public contestantDetail?: (isuxportal.proto.resources.Contestant.IContestantDetail|null);

                /**
                 * Creates a new Contestant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Contestant instance
                 */
                public static create(properties?: isuxportal.proto.resources.IContestant): isuxportal.proto.resources.Contestant;

                /**
                 * Encodes the specified Contestant message. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @param message Contestant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IContestant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Contestant message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @param message Contestant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IContestant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Contestant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Contestant;

                /**
                 * Decodes a Contestant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Contestant;

                /**
                 * Verifies a Contestant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Contestant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Contestant
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Contestant;

                /**
                 * Creates a plain object from a Contestant message. Also converts values to other types if specified.
                 * @param message Contestant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Contestant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Contestant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Contestant {

                /** Properties of a ContestantDetail. */
                interface IContestantDetail {

                    /** ContestantDetail githubLogin */
                    githubLogin?: (string|null);

                    /** ContestantDetail discordTag */
                    discordTag?: (string|null);

                    /** ContestantDetail isStudent */
                    isStudent?: (boolean|null);

                    /** ContestantDetail avatarUrl */
                    avatarUrl?: (string|null);

                    /** ContestantDetail githubId */
                    githubId?: (string|null);

                    /** ContestantDetail discordId */
                    discordId?: (string|null);
                }

                /** Represents a ContestantDetail. */
                class ContestantDetail implements IContestantDetail {

                    /**
                     * Constructs a new ContestantDetail.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Contestant.IContestantDetail);

                    /** ContestantDetail githubLogin. */
                    public githubLogin: string;

                    /** ContestantDetail discordTag. */
                    public discordTag: string;

                    /** ContestantDetail isStudent. */
                    public isStudent: boolean;

                    /** ContestantDetail avatarUrl. */
                    public avatarUrl: string;

                    /** ContestantDetail githubId. */
                    public githubId: string;

                    /** ContestantDetail discordId. */
                    public discordId: string;

                    /**
                     * Creates a new ContestantDetail instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ContestantDetail instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Contestant.IContestantDetail): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Encodes the specified ContestantDetail message. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @param message ContestantDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Contestant.IContestantDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ContestantDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @param message ContestantDetail message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Contestant.IContestantDetail, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Verifies a ContestantDetail message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ContestantDetail message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ContestantDetail
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Contestant.ContestantDetail;

                    /**
                     * Creates a plain object from a ContestantDetail message. Also converts values to other types if specified.
                     * @param message ContestantDetail
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Contestant.ContestantDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ContestantDetail to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Clarification. */
            interface IClarification {

                /** Clarification id */
                id?: (number|Long|null);

                /** Clarification teamId */
                teamId?: (number|Long|null);

                /** Clarification answered */
                answered?: (boolean|null);

                /** Clarification disclosed */
                disclosed?: (boolean|null);

                /** Clarification question */
                question?: (string|null);

                /** Clarification answer */
                answer?: (string|null);

                /** Clarification createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Clarification answeredAt */
                answeredAt?: (google.protobuf.ITimestamp|null);

                /** Clarification originalQuestion */
                originalQuestion?: (string|null);

                /** Clarification admin */
                admin?: (boolean|null);

                /** Clarification team */
                team?: (isuxportal.proto.resources.ITeam|null);
            }

            /** Represents a Clarification. */
            class Clarification implements IClarification {

                /**
                 * Constructs a new Clarification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IClarification);

                /** Clarification id. */
                public id: (number|Long);

                /** Clarification teamId. */
                public teamId: (number|Long);

                /** Clarification answered. */
                public answered: boolean;

                /** Clarification disclosed. */
                public disclosed: boolean;

                /** Clarification question. */
                public question: string;

                /** Clarification answer. */
                public answer: string;

                /** Clarification createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Clarification answeredAt. */
                public answeredAt?: (google.protobuf.ITimestamp|null);

                /** Clarification originalQuestion. */
                public originalQuestion: string;

                /** Clarification admin. */
                public admin: boolean;

                /** Clarification team. */
                public team?: (isuxportal.proto.resources.ITeam|null);

                /**
                 * Creates a new Clarification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Clarification instance
                 */
                public static create(properties?: isuxportal.proto.resources.IClarification): isuxportal.proto.resources.Clarification;

                /**
                 * Encodes the specified Clarification message. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @param message Clarification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IClarification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Clarification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @param message Clarification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IClarification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Clarification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Clarification;

                /**
                 * Decodes a Clarification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Clarification;

                /**
                 * Verifies a Clarification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Clarification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Clarification
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Clarification;

                /**
                 * Creates a plain object from a Clarification message. Also converts values to other types if specified.
                 * @param message Clarification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Clarification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Clarification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Contest. */
            interface IContest {

                /** Contest registrationOpensAt */
                registrationOpensAt?: (google.protobuf.ITimestamp|null);

                /** Contest registrationClosesAt */
                registrationClosesAt?: (google.protobuf.ITimestamp|null);

                /** Contest startsAt */
                startsAt?: (google.protobuf.ITimestamp|null);

                /** Contest freezesAt */
                freezesAt?: (google.protobuf.ITimestamp|null);

                /** Contest endsAt */
                endsAt?: (google.protobuf.ITimestamp|null);

                /** Contest status */
                status?: (isuxportal.proto.resources.Contest.Status|null);

                /** Contest frozen */
                frozen?: (boolean|null);
            }

            /** Represents a Contest. */
            class Contest implements IContest {

                /**
                 * Constructs a new Contest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IContest);

                /** Contest registrationOpensAt. */
                public registrationOpensAt?: (google.protobuf.ITimestamp|null);

                /** Contest registrationClosesAt. */
                public registrationClosesAt?: (google.protobuf.ITimestamp|null);

                /** Contest startsAt. */
                public startsAt?: (google.protobuf.ITimestamp|null);

                /** Contest freezesAt. */
                public freezesAt?: (google.protobuf.ITimestamp|null);

                /** Contest endsAt. */
                public endsAt?: (google.protobuf.ITimestamp|null);

                /** Contest status. */
                public status: isuxportal.proto.resources.Contest.Status;

                /** Contest frozen. */
                public frozen: boolean;

                /**
                 * Creates a new Contest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Contest instance
                 */
                public static create(properties?: isuxportal.proto.resources.IContest): isuxportal.proto.resources.Contest;

                /**
                 * Encodes the specified Contest message. Does not implicitly {@link isuxportal.proto.resources.Contest.verify|verify} messages.
                 * @param message Contest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IContest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Contest message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contest.verify|verify} messages.
                 * @param message Contest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IContest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Contest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Contest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Contest;

                /**
                 * Decodes a Contest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Contest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Contest;

                /**
                 * Verifies a Contest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Contest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Contest
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Contest;

                /**
                 * Creates a plain object from a Contest message. Also converts values to other types if specified.
                 * @param message Contest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Contest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Contest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Contest {

                /** Status enum. */
                enum Status {
                    STANDBY = 0,
                    REGISTRATION = 1,
                    STARTED = 2,
                    FINISHED = 3
                }
            }

            /** Properties of a Leaderboard. */
            interface ILeaderboard {

                /** Leaderboard teams */
                teams?: (isuxportal.proto.resources.Leaderboard.ILeaderboardItem[]|null);

                /** Leaderboard generalTeams */
                generalTeams?: (isuxportal.proto.resources.Leaderboard.ILeaderboardItem[]|null);

                /** Leaderboard studentTeams */
                studentTeams?: (isuxportal.proto.resources.Leaderboard.ILeaderboardItem[]|null);

                /** Leaderboard hiddenTeams */
                hiddenTeams?: (isuxportal.proto.resources.Leaderboard.ILeaderboardItem[]|null);

                /** Leaderboard progresses */
                progresses?: (isuxportal.proto.resources.Leaderboard.ILeaderboardItem[]|null);

                /** Leaderboard generatedAt */
                generatedAt?: (google.protobuf.ITimestamp|null);

                /** Leaderboard contest */
                contest?: (isuxportal.proto.resources.IContest|null);
            }

            /** Represents a Leaderboard. */
            class Leaderboard implements ILeaderboard {

                /**
                 * Constructs a new Leaderboard.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.ILeaderboard);

                /** Leaderboard teams. */
                public teams: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[];

                /** Leaderboard generalTeams. */
                public generalTeams: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[];

                /** Leaderboard studentTeams. */
                public studentTeams: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[];

                /** Leaderboard hiddenTeams. */
                public hiddenTeams: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[];

                /** Leaderboard progresses. */
                public progresses: isuxportal.proto.resources.Leaderboard.ILeaderboardItem[];

                /** Leaderboard generatedAt. */
                public generatedAt?: (google.protobuf.ITimestamp|null);

                /** Leaderboard contest. */
                public contest?: (isuxportal.proto.resources.IContest|null);

                /**
                 * Creates a new Leaderboard instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Leaderboard instance
                 */
                public static create(properties?: isuxportal.proto.resources.ILeaderboard): isuxportal.proto.resources.Leaderboard;

                /**
                 * Encodes the specified Leaderboard message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @param message Leaderboard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.ILeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Leaderboard message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @param message Leaderboard message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.ILeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Leaderboard;

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Leaderboard;

                /**
                 * Verifies a Leaderboard message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Leaderboard message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Leaderboard
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Leaderboard;

                /**
                 * Creates a plain object from a Leaderboard message. Also converts values to other types if specified.
                 * @param message Leaderboard
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Leaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Leaderboard to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Leaderboard {

                /** Properties of a LeaderboardItem. */
                interface ILeaderboardItem {

                    /** LeaderboardItem scores */
                    scores?: (isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore[]|null);

                    /** LeaderboardItem bestScore */
                    bestScore?: (isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null);

                    /** LeaderboardItem latestScore */
                    latestScore?: (isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null);

                    /** LeaderboardItem team */
                    team?: (isuxportal.proto.resources.ITeam|null);
                }

                /** Represents a LeaderboardItem. */
                class LeaderboardItem implements ILeaderboardItem {

                    /**
                     * Constructs a new LeaderboardItem.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Leaderboard.ILeaderboardItem);

                    /** LeaderboardItem scores. */
                    public scores: isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore[];

                    /** LeaderboardItem bestScore. */
                    public bestScore?: (isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null);

                    /** LeaderboardItem latestScore. */
                    public latestScore?: (isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null);

                    /** LeaderboardItem team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /**
                     * Creates a new LeaderboardItem instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LeaderboardItem instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Leaderboard.ILeaderboardItem): isuxportal.proto.resources.Leaderboard.LeaderboardItem;

                    /**
                     * Encodes the specified LeaderboardItem message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @param message LeaderboardItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Leaderboard.ILeaderboardItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LeaderboardItem message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @param message LeaderboardItem message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Leaderboard.ILeaderboardItem, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LeaderboardItem message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Leaderboard.LeaderboardItem;

                    /**
                     * Decodes a LeaderboardItem message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Leaderboard.LeaderboardItem;

                    /**
                     * Verifies a LeaderboardItem message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LeaderboardItem message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LeaderboardItem
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Leaderboard.LeaderboardItem;

                    /**
                     * Creates a plain object from a LeaderboardItem message. Also converts values to other types if specified.
                     * @param message LeaderboardItem
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Leaderboard.LeaderboardItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LeaderboardItem to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace LeaderboardItem {

                    /** Properties of a LeaderboardScore. */
                    interface ILeaderboardScore {

                        /** LeaderboardScore score */
                        score?: (number|Long|null);

                        /** LeaderboardScore startedAt */
                        startedAt?: (google.protobuf.ITimestamp|null);

                        /** LeaderboardScore markedAt */
                        markedAt?: (google.protobuf.ITimestamp|null);
                    }

                    /** Represents a LeaderboardScore. */
                    class LeaderboardScore implements ILeaderboardScore {

                        /**
                         * Constructs a new LeaderboardScore.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore);

                        /** LeaderboardScore score. */
                        public score: (number|Long);

                        /** LeaderboardScore startedAt. */
                        public startedAt?: (google.protobuf.ITimestamp|null);

                        /** LeaderboardScore markedAt. */
                        public markedAt?: (google.protobuf.ITimestamp|null);

                        /**
                         * Creates a new LeaderboardScore instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns LeaderboardScore instance
                         */
                        public static create(properties?: isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore): isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore;

                        /**
                         * Encodes the specified LeaderboardScore message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @param message LeaderboardScore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified LeaderboardScore message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @param message LeaderboardScore message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore;

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore;

                        /**
                         * Verifies a LeaderboardScore message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a LeaderboardScore message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns LeaderboardScore
                         */
                        public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore;

                        /**
                         * Creates a plain object from a LeaderboardScore message. Also converts values to other types if specified.
                         * @param message LeaderboardScore
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this LeaderboardScore to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Properties of a Notification. */
            interface INotification {

                /** Notification id */
                id?: (number|Long|null);

                /** Notification createdAt */
                createdAt?: (google.protobuf.ITimestamp|null);

                /** Notification contentBenchmarkJob */
                contentBenchmarkJob?: (isuxportal.proto.resources.Notification.IBenchmarkJobMessage|null);

                /** Notification contentClarification */
                contentClarification?: (isuxportal.proto.resources.Notification.IClarificationMessage|null);

                /** Notification contentTest */
                contentTest?: (isuxportal.proto.resources.Notification.ITestMessage|null);
            }

            /** Represents a Notification. */
            class Notification implements INotification {

                /**
                 * Constructs a new Notification.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.INotification);

                /** Notification id. */
                public id: (number|Long);

                /** Notification createdAt. */
                public createdAt?: (google.protobuf.ITimestamp|null);

                /** Notification contentBenchmarkJob. */
                public contentBenchmarkJob?: (isuxportal.proto.resources.Notification.IBenchmarkJobMessage|null);

                /** Notification contentClarification. */
                public contentClarification?: (isuxportal.proto.resources.Notification.IClarificationMessage|null);

                /** Notification contentTest. */
                public contentTest?: (isuxportal.proto.resources.Notification.ITestMessage|null);

                /** Notification content. */
                public content?: ("contentBenchmarkJob"|"contentClarification"|"contentTest");

                /**
                 * Creates a new Notification instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Notification instance
                 */
                public static create(properties?: isuxportal.proto.resources.INotification): isuxportal.proto.resources.Notification;

                /**
                 * Encodes the specified Notification message. Does not implicitly {@link isuxportal.proto.resources.Notification.verify|verify} messages.
                 * @param message Notification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Notification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.verify|verify} messages.
                 * @param message Notification message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Notification message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Notification;

                /**
                 * Decodes a Notification message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Notification;

                /**
                 * Verifies a Notification message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Notification message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Notification
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Notification;

                /**
                 * Creates a plain object from a Notification message. Also converts values to other types if specified.
                 * @param message Notification
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Notification, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Notification to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace Notification {

                /** Properties of a BenchmarkJobMessage. */
                interface IBenchmarkJobMessage {

                    /** BenchmarkJobMessage benchmarkJobId */
                    benchmarkJobId?: (number|Long|null);
                }

                /** Represents a BenchmarkJobMessage. */
                class BenchmarkJobMessage implements IBenchmarkJobMessage {

                    /**
                     * Constructs a new BenchmarkJobMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Notification.IBenchmarkJobMessage);

                    /** BenchmarkJobMessage benchmarkJobId. */
                    public benchmarkJobId: (number|Long);

                    /**
                     * Creates a new BenchmarkJobMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BenchmarkJobMessage instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Notification.IBenchmarkJobMessage): isuxportal.proto.resources.Notification.BenchmarkJobMessage;

                    /**
                     * Encodes the specified BenchmarkJobMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.BenchmarkJobMessage.verify|verify} messages.
                     * @param message BenchmarkJobMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Notification.IBenchmarkJobMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BenchmarkJobMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.BenchmarkJobMessage.verify|verify} messages.
                     * @param message BenchmarkJobMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Notification.IBenchmarkJobMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BenchmarkJobMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BenchmarkJobMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Notification.BenchmarkJobMessage;

                    /**
                     * Decodes a BenchmarkJobMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BenchmarkJobMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Notification.BenchmarkJobMessage;

                    /**
                     * Verifies a BenchmarkJobMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BenchmarkJobMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BenchmarkJobMessage
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Notification.BenchmarkJobMessage;

                    /**
                     * Creates a plain object from a BenchmarkJobMessage message. Also converts values to other types if specified.
                     * @param message BenchmarkJobMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Notification.BenchmarkJobMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BenchmarkJobMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ClarificationMessage. */
                interface IClarificationMessage {

                    /** ClarificationMessage clarificationId */
                    clarificationId?: (number|Long|null);

                    /** ClarificationMessage owned */
                    owned?: (boolean|null);

                    /** ClarificationMessage updated */
                    updated?: (boolean|null);

                    /** ClarificationMessage admin */
                    admin?: (boolean|null);
                }

                /** Represents a ClarificationMessage. */
                class ClarificationMessage implements IClarificationMessage {

                    /**
                     * Constructs a new ClarificationMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Notification.IClarificationMessage);

                    /** ClarificationMessage clarificationId. */
                    public clarificationId: (number|Long);

                    /** ClarificationMessage owned. */
                    public owned: boolean;

                    /** ClarificationMessage updated. */
                    public updated: boolean;

                    /** ClarificationMessage admin. */
                    public admin: boolean;

                    /**
                     * Creates a new ClarificationMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ClarificationMessage instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Notification.IClarificationMessage): isuxportal.proto.resources.Notification.ClarificationMessage;

                    /**
                     * Encodes the specified ClarificationMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.ClarificationMessage.verify|verify} messages.
                     * @param message ClarificationMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Notification.IClarificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ClarificationMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.ClarificationMessage.verify|verify} messages.
                     * @param message ClarificationMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Notification.IClarificationMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ClarificationMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Notification.ClarificationMessage;

                    /**
                     * Decodes a ClarificationMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Notification.ClarificationMessage;

                    /**
                     * Verifies a ClarificationMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ClarificationMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ClarificationMessage
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Notification.ClarificationMessage;

                    /**
                     * Creates a plain object from a ClarificationMessage message. Also converts values to other types if specified.
                     * @param message ClarificationMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Notification.ClarificationMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ClarificationMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TestMessage. */
                interface ITestMessage {

                    /** TestMessage something */
                    something?: (number|Long|null);
                }

                /** Represents a TestMessage. */
                class TestMessage implements ITestMessage {

                    /**
                     * Constructs a new TestMessage.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.resources.Notification.ITestMessage);

                    /** TestMessage something. */
                    public something: (number|Long);

                    /**
                     * Creates a new TestMessage instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TestMessage instance
                     */
                    public static create(properties?: isuxportal.proto.resources.Notification.ITestMessage): isuxportal.proto.resources.Notification.TestMessage;

                    /**
                     * Encodes the specified TestMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.TestMessage.verify|verify} messages.
                     * @param message TestMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.resources.Notification.ITestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.TestMessage.verify|verify} messages.
                     * @param message TestMessage message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.resources.Notification.ITestMessage, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TestMessage message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TestMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Notification.TestMessage;

                    /**
                     * Decodes a TestMessage message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TestMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Notification.TestMessage;

                    /**
                     * Verifies a TestMessage message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TestMessage
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Notification.TestMessage;

                    /**
                     * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
                     * @param message TestMessage
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.resources.Notification.TestMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TestMessage to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Properties of a Staff. */
            interface IStaff {

                /** Staff id */
                id?: (number|Long|null);

                /** Staff githubLogin */
                githubLogin?: (string|null);
            }

            /** Represents a Staff. */
            class Staff implements IStaff {

                /**
                 * Constructs a new Staff.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.IStaff);

                /** Staff id. */
                public id: (number|Long);

                /** Staff githubLogin. */
                public githubLogin: string;

                /**
                 * Creates a new Staff instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Staff instance
                 */
                public static create(properties?: isuxportal.proto.resources.IStaff): isuxportal.proto.resources.Staff;

                /**
                 * Encodes the specified Staff message. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @param message Staff message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.IStaff, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Staff message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @param message Staff message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.IStaff, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Staff message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.Staff;

                /**
                 * Decodes a Staff message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.Staff;

                /**
                 * Verifies a Staff message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Staff message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Staff
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.Staff;

                /**
                 * Creates a plain object from a Staff message. Also converts values to other types if specified.
                 * @param message Staff
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.Staff, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Staff to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SurveyResponse. */
            interface ISurveyResponse {

                /** SurveyResponse language */
                language?: (string|null);
            }

            /** Represents a SurveyResponse. */
            class SurveyResponse implements ISurveyResponse {

                /**
                 * Constructs a new SurveyResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: isuxportal.proto.resources.ISurveyResponse);

                /** SurveyResponse language. */
                public language: string;

                /**
                 * Creates a new SurveyResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SurveyResponse instance
                 */
                public static create(properties?: isuxportal.proto.resources.ISurveyResponse): isuxportal.proto.resources.SurveyResponse;

                /**
                 * Encodes the specified SurveyResponse message. Does not implicitly {@link isuxportal.proto.resources.SurveyResponse.verify|verify} messages.
                 * @param message SurveyResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: isuxportal.proto.resources.ISurveyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SurveyResponse message, length delimited. Does not implicitly {@link isuxportal.proto.resources.SurveyResponse.verify|verify} messages.
                 * @param message SurveyResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: isuxportal.proto.resources.ISurveyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SurveyResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SurveyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.resources.SurveyResponse;

                /**
                 * Decodes a SurveyResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SurveyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.resources.SurveyResponse;

                /**
                 * Verifies a SurveyResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SurveyResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SurveyResponse
                 */
                public static fromObject(object: { [k: string]: any }): isuxportal.proto.resources.SurveyResponse;

                /**
                 * Creates a plain object from a SurveyResponse message. Also converts values to other types if specified.
                 * @param message SurveyResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: isuxportal.proto.resources.SurveyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SurveyResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace services. */
        namespace services {

            /** Namespace common. */
            namespace common {

                /** Properties of a GetCurrentSessionRequest. */
                interface IGetCurrentSessionRequest {
                }

                /** Represents a GetCurrentSessionRequest. */
                class GetCurrentSessionRequest implements IGetCurrentSessionRequest {

                    /**
                     * Constructs a new GetCurrentSessionRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.common.IGetCurrentSessionRequest);

                    /**
                     * Creates a new GetCurrentSessionRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCurrentSessionRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.common.IGetCurrentSessionRequest): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Encodes the specified GetCurrentSessionRequest message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @param message GetCurrentSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.common.IGetCurrentSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCurrentSessionRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @param message GetCurrentSessionRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.common.IGetCurrentSessionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Verifies a GetCurrentSessionRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCurrentSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCurrentSessionRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.common.GetCurrentSessionRequest;

                    /**
                     * Creates a plain object from a GetCurrentSessionRequest message. Also converts values to other types if specified.
                     * @param message GetCurrentSessionRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.common.GetCurrentSessionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCurrentSessionRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetCurrentSessionResponse. */
                interface IGetCurrentSessionResponse {

                    /** GetCurrentSessionResponse team */
                    team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetCurrentSessionResponse contestant */
                    contestant?: (isuxportal.proto.resources.IContestant|null);

                    /** GetCurrentSessionResponse discordServerId */
                    discordServerId?: (string|null);

                    /** GetCurrentSessionResponse contest */
                    contest?: (isuxportal.proto.resources.IContest|null);

                    /** GetCurrentSessionResponse contestantInstances */
                    contestantInstances?: (isuxportal.proto.resources.IContestantInstance[]|null);

                    /** GetCurrentSessionResponse pushVapidKey */
                    pushVapidKey?: (string|null);
                }

                /** Represents a GetCurrentSessionResponse. */
                class GetCurrentSessionResponse implements IGetCurrentSessionResponse {

                    /**
                     * Constructs a new GetCurrentSessionResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.common.IGetCurrentSessionResponse);

                    /** GetCurrentSessionResponse team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetCurrentSessionResponse contestant. */
                    public contestant?: (isuxportal.proto.resources.IContestant|null);

                    /** GetCurrentSessionResponse discordServerId. */
                    public discordServerId: string;

                    /** GetCurrentSessionResponse contest. */
                    public contest?: (isuxportal.proto.resources.IContest|null);

                    /** GetCurrentSessionResponse contestantInstances. */
                    public contestantInstances: isuxportal.proto.resources.IContestantInstance[];

                    /** GetCurrentSessionResponse pushVapidKey. */
                    public pushVapidKey: string;

                    /**
                     * Creates a new GetCurrentSessionResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetCurrentSessionResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.common.IGetCurrentSessionResponse): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Encodes the specified GetCurrentSessionResponse message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @param message GetCurrentSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.common.IGetCurrentSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetCurrentSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @param message GetCurrentSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.common.IGetCurrentSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Verifies a GetCurrentSessionResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetCurrentSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetCurrentSessionResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.common.GetCurrentSessionResponse;

                    /**
                     * Creates a plain object from a GetCurrentSessionResponse message. Also converts values to other types if specified.
                     * @param message GetCurrentSessionResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.common.GetCurrentSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetCurrentSessionResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace admin. */
            namespace admin {

                /** Properties of a ListBenchmarkJobsQuery. */
                interface IListBenchmarkJobsQuery {

                    /** ListBenchmarkJobsQuery teamId */
                    teamId?: (number|Long|null);

                    /** ListBenchmarkJobsQuery incompleteOnly */
                    incompleteOnly?: (boolean|null);
                }

                /** Represents a ListBenchmarkJobsQuery. */
                class ListBenchmarkJobsQuery implements IListBenchmarkJobsQuery {

                    /**
                     * Constructs a new ListBenchmarkJobsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListBenchmarkJobsQuery);

                    /** ListBenchmarkJobsQuery teamId. */
                    public teamId: (number|Long);

                    /** ListBenchmarkJobsQuery incompleteOnly. */
                    public incompleteOnly: boolean;

                    /**
                     * Creates a new ListBenchmarkJobsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBenchmarkJobsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListBenchmarkJobsQuery): isuxportal.proto.services.admin.ListBenchmarkJobsQuery;

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @param message ListBenchmarkJobsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListBenchmarkJobsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @param message ListBenchmarkJobsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListBenchmarkJobsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListBenchmarkJobsQuery;

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListBenchmarkJobsQuery;

                    /**
                     * Verifies a ListBenchmarkJobsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBenchmarkJobsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBenchmarkJobsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListBenchmarkJobsQuery;

                    /**
                     * Creates a plain object from a ListBenchmarkJobsQuery message. Also converts values to other types if specified.
                     * @param message ListBenchmarkJobsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListBenchmarkJobsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBenchmarkJobsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBenchmarkJobsResponse. */
                interface IListBenchmarkJobsResponse {

                    /** ListBenchmarkJobsResponse jobs */
                    jobs?: (isuxportal.proto.resources.IBenchmarkJob[]|null);

                    /** ListBenchmarkJobsResponse maxPage */
                    maxPage?: (number|Long|null);
                }

                /** Represents a ListBenchmarkJobsResponse. */
                class ListBenchmarkJobsResponse implements IListBenchmarkJobsResponse {

                    /**
                     * Constructs a new ListBenchmarkJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListBenchmarkJobsResponse);

                    /** ListBenchmarkJobsResponse jobs. */
                    public jobs: isuxportal.proto.resources.IBenchmarkJob[];

                    /** ListBenchmarkJobsResponse maxPage. */
                    public maxPage: (number|Long);

                    /**
                     * Creates a new ListBenchmarkJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBenchmarkJobsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListBenchmarkJobsResponse): isuxportal.proto.services.admin.ListBenchmarkJobsResponse;

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @param message ListBenchmarkJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListBenchmarkJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @param message ListBenchmarkJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListBenchmarkJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListBenchmarkJobsResponse;

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListBenchmarkJobsResponse;

                    /**
                     * Verifies a ListBenchmarkJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBenchmarkJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBenchmarkJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListBenchmarkJobsResponse;

                    /**
                     * Creates a plain object from a ListBenchmarkJobsResponse message. Also converts values to other types if specified.
                     * @param message ListBenchmarkJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListBenchmarkJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBenchmarkJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnqueueBenchmarkJobRequest. */
                interface IEnqueueBenchmarkJobRequest {

                    /** EnqueueBenchmarkJobRequest teamId */
                    teamId?: (number|Long|null);

                    /** EnqueueBenchmarkJobRequest targetId */
                    targetId?: (number|Long|null);
                }

                /** Represents an EnqueueBenchmarkJobRequest. */
                class EnqueueBenchmarkJobRequest implements IEnqueueBenchmarkJobRequest {

                    /**
                     * Constructs a new EnqueueBenchmarkJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest);

                    /** EnqueueBenchmarkJobRequest teamId. */
                    public teamId: (number|Long);

                    /** EnqueueBenchmarkJobRequest targetId. */
                    public targetId: (number|Long);

                    /**
                     * Creates a new EnqueueBenchmarkJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnqueueBenchmarkJobRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest): isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest;

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest;

                    /**
                     * Verifies an EnqueueBenchmarkJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnqueueBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnqueueBenchmarkJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest;

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @param message EnqueueBenchmarkJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnqueueBenchmarkJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnqueueBenchmarkJobResponse. */
                interface IEnqueueBenchmarkJobResponse {

                    /** EnqueueBenchmarkJobResponse job */
                    job?: (isuxportal.proto.resources.IBenchmarkJob|null);
                }

                /** Represents an EnqueueBenchmarkJobResponse. */
                class EnqueueBenchmarkJobResponse implements IEnqueueBenchmarkJobResponse {

                    /**
                     * Constructs a new EnqueueBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse);

                    /** EnqueueBenchmarkJobResponse job. */
                    public job?: (isuxportal.proto.resources.IBenchmarkJob|null);

                    /**
                     * Creates a new EnqueueBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnqueueBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse): isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IEnqueueBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse;

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse;

                    /**
                     * Verifies an EnqueueBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnqueueBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnqueueBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse;

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message EnqueueBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnqueueBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelBenchmarkJobQuery. */
                interface ICancelBenchmarkJobQuery {

                    /** CancelBenchmarkJobQuery id */
                    id?: (number|Long|null);
                }

                /** Represents a CancelBenchmarkJobQuery. */
                class CancelBenchmarkJobQuery implements ICancelBenchmarkJobQuery {

                    /**
                     * Constructs a new CancelBenchmarkJobQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.ICancelBenchmarkJobQuery);

                    /** CancelBenchmarkJobQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new CancelBenchmarkJobQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelBenchmarkJobQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.ICancelBenchmarkJobQuery): isuxportal.proto.services.admin.CancelBenchmarkJobQuery;

                    /**
                     * Encodes the specified CancelBenchmarkJobQuery message. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobQuery.verify|verify} messages.
                     * @param message CancelBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.ICancelBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelBenchmarkJobQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobQuery.verify|verify} messages.
                     * @param message CancelBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.ICancelBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelBenchmarkJobQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.CancelBenchmarkJobQuery;

                    /**
                     * Decodes a CancelBenchmarkJobQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.CancelBenchmarkJobQuery;

                    /**
                     * Verifies a CancelBenchmarkJobQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelBenchmarkJobQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelBenchmarkJobQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.CancelBenchmarkJobQuery;

                    /**
                     * Creates a plain object from a CancelBenchmarkJobQuery message. Also converts values to other types if specified.
                     * @param message CancelBenchmarkJobQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.CancelBenchmarkJobQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelBenchmarkJobQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CancelBenchmarkJobResponse. */
                interface ICancelBenchmarkJobResponse {

                    /** CancelBenchmarkJobResponse job */
                    job?: (isuxportal.proto.resources.IBenchmarkJob|null);
                }

                /** Represents a CancelBenchmarkJobResponse. */
                class CancelBenchmarkJobResponse implements ICancelBenchmarkJobResponse {

                    /**
                     * Constructs a new CancelBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.ICancelBenchmarkJobResponse);

                    /** CancelBenchmarkJobResponse job. */
                    public job?: (isuxportal.proto.resources.IBenchmarkJob|null);

                    /**
                     * Creates a new CancelBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CancelBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.ICancelBenchmarkJobResponse): isuxportal.proto.services.admin.CancelBenchmarkJobResponse;

                    /**
                     * Encodes the specified CancelBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobResponse.verify|verify} messages.
                     * @param message CancelBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.ICancelBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CancelBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CancelBenchmarkJobResponse.verify|verify} messages.
                     * @param message CancelBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.ICancelBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CancelBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CancelBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.CancelBenchmarkJobResponse;

                    /**
                     * Decodes a CancelBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CancelBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.CancelBenchmarkJobResponse;

                    /**
                     * Verifies a CancelBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CancelBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CancelBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.CancelBenchmarkJobResponse;

                    /**
                     * Creates a plain object from a CancelBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message CancelBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.CancelBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CancelBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBenchmarkJobQuery. */
                interface IGetBenchmarkJobQuery {

                    /** GetBenchmarkJobQuery id */
                    id?: (number|Long|null);
                }

                /** Represents a GetBenchmarkJobQuery. */
                class GetBenchmarkJobQuery implements IGetBenchmarkJobQuery {

                    /**
                     * Constructs a new GetBenchmarkJobQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetBenchmarkJobQuery);

                    /** GetBenchmarkJobQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new GetBenchmarkJobQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBenchmarkJobQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetBenchmarkJobQuery): isuxportal.proto.services.admin.GetBenchmarkJobQuery;

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobQuery.verify|verify} messages.
                     * @param message GetBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobQuery.verify|verify} messages.
                     * @param message GetBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetBenchmarkJobQuery;

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetBenchmarkJobQuery;

                    /**
                     * Verifies a GetBenchmarkJobQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBenchmarkJobQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBenchmarkJobQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetBenchmarkJobQuery;

                    /**
                     * Creates a plain object from a GetBenchmarkJobQuery message. Also converts values to other types if specified.
                     * @param message GetBenchmarkJobQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetBenchmarkJobQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBenchmarkJobQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBenchmarkJobResponse. */
                interface IGetBenchmarkJobResponse {

                    /** GetBenchmarkJobResponse job */
                    job?: (isuxportal.proto.resources.IBenchmarkJob|null);
                }

                /** Represents a GetBenchmarkJobResponse. */
                class GetBenchmarkJobResponse implements IGetBenchmarkJobResponse {

                    /**
                     * Constructs a new GetBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetBenchmarkJobResponse);

                    /** GetBenchmarkJobResponse job. */
                    public job?: (isuxportal.proto.resources.IBenchmarkJob|null);

                    /**
                     * Creates a new GetBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetBenchmarkJobResponse): isuxportal.proto.services.admin.GetBenchmarkJobResponse;

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobResponse.verify|verify} messages.
                     * @param message GetBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetBenchmarkJobResponse.verify|verify} messages.
                     * @param message GetBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetBenchmarkJobResponse;

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetBenchmarkJobResponse;

                    /**
                     * Verifies a GetBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetBenchmarkJobResponse;

                    /**
                     * Creates a plain object from a GetBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message GetBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClarificationsQuery. */
                interface IListClarificationsQuery {

                    /** ListClarificationsQuery teamId */
                    teamId?: (number|Long|null);

                    /** ListClarificationsQuery unansweredOnly */
                    unansweredOnly?: (boolean|null);
                }

                /** Represents a ListClarificationsQuery. */
                class ListClarificationsQuery implements IListClarificationsQuery {

                    /**
                     * Constructs a new ListClarificationsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListClarificationsQuery);

                    /** ListClarificationsQuery teamId. */
                    public teamId: (number|Long);

                    /** ListClarificationsQuery unansweredOnly. */
                    public unansweredOnly: boolean;

                    /**
                     * Creates a new ListClarificationsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClarificationsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListClarificationsQuery): isuxportal.proto.services.admin.ListClarificationsQuery;

                    /**
                     * Encodes the specified ListClarificationsQuery message. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsQuery.verify|verify} messages.
                     * @param message ListClarificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListClarificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClarificationsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsQuery.verify|verify} messages.
                     * @param message ListClarificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListClarificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListClarificationsQuery;

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListClarificationsQuery;

                    /**
                     * Verifies a ListClarificationsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClarificationsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClarificationsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListClarificationsQuery;

                    /**
                     * Creates a plain object from a ListClarificationsQuery message. Also converts values to other types if specified.
                     * @param message ListClarificationsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListClarificationsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClarificationsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClarificationsResponse. */
                interface IListClarificationsResponse {

                    /** ListClarificationsResponse clarifications */
                    clarifications?: (isuxportal.proto.resources.IClarification[]|null);
                }

                /** Represents a ListClarificationsResponse. */
                class ListClarificationsResponse implements IListClarificationsResponse {

                    /**
                     * Constructs a new ListClarificationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListClarificationsResponse);

                    /** ListClarificationsResponse clarifications. */
                    public clarifications: isuxportal.proto.resources.IClarification[];

                    /**
                     * Creates a new ListClarificationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClarificationsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListClarificationsResponse): isuxportal.proto.services.admin.ListClarificationsResponse;

                    /**
                     * Encodes the specified ListClarificationsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsResponse.verify|verify} messages.
                     * @param message ListClarificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListClarificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClarificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListClarificationsResponse.verify|verify} messages.
                     * @param message ListClarificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListClarificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListClarificationsResponse;

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListClarificationsResponse;

                    /**
                     * Verifies a ListClarificationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClarificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClarificationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListClarificationsResponse;

                    /**
                     * Creates a plain object from a ListClarificationsResponse message. Also converts values to other types if specified.
                     * @param message ListClarificationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListClarificationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClarificationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetClarificationQuery. */
                interface IGetClarificationQuery {

                    /** GetClarificationQuery id */
                    id?: (number|Long|null);
                }

                /** Represents a GetClarificationQuery. */
                class GetClarificationQuery implements IGetClarificationQuery {

                    /**
                     * Constructs a new GetClarificationQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetClarificationQuery);

                    /** GetClarificationQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new GetClarificationQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClarificationQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetClarificationQuery): isuxportal.proto.services.admin.GetClarificationQuery;

                    /**
                     * Encodes the specified GetClarificationQuery message. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationQuery.verify|verify} messages.
                     * @param message GetClarificationQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetClarificationQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClarificationQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationQuery.verify|verify} messages.
                     * @param message GetClarificationQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetClarificationQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClarificationQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClarificationQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetClarificationQuery;

                    /**
                     * Decodes a GetClarificationQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClarificationQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetClarificationQuery;

                    /**
                     * Verifies a GetClarificationQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClarificationQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClarificationQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetClarificationQuery;

                    /**
                     * Creates a plain object from a GetClarificationQuery message. Also converts values to other types if specified.
                     * @param message GetClarificationQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetClarificationQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClarificationQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetClarificationResponse. */
                interface IGetClarificationResponse {

                    /** GetClarificationResponse clarification */
                    clarification?: (isuxportal.proto.resources.IClarification|null);
                }

                /** Represents a GetClarificationResponse. */
                class GetClarificationResponse implements IGetClarificationResponse {

                    /**
                     * Constructs a new GetClarificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetClarificationResponse);

                    /** GetClarificationResponse clarification. */
                    public clarification?: (isuxportal.proto.resources.IClarification|null);

                    /**
                     * Creates a new GetClarificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetClarificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetClarificationResponse): isuxportal.proto.services.admin.GetClarificationResponse;

                    /**
                     * Encodes the specified GetClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationResponse.verify|verify} messages.
                     * @param message GetClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetClarificationResponse.verify|verify} messages.
                     * @param message GetClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetClarificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetClarificationResponse;

                    /**
                     * Decodes a GetClarificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetClarificationResponse;

                    /**
                     * Verifies a GetClarificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetClarificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetClarificationResponse;

                    /**
                     * Creates a plain object from a GetClarificationResponse message. Also converts values to other types if specified.
                     * @param message GetClarificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetClarificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetClarificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RespondClarificationRequest. */
                interface IRespondClarificationRequest {

                    /** RespondClarificationRequest id */
                    id?: (number|Long|null);

                    /** RespondClarificationRequest disclose */
                    disclose?: (boolean|null);

                    /** RespondClarificationRequest answer */
                    answer?: (string|null);

                    /** RespondClarificationRequest question */
                    question?: (string|null);
                }

                /** Represents a RespondClarificationRequest. */
                class RespondClarificationRequest implements IRespondClarificationRequest {

                    /**
                     * Constructs a new RespondClarificationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IRespondClarificationRequest);

                    /** RespondClarificationRequest id. */
                    public id: (number|Long);

                    /** RespondClarificationRequest disclose. */
                    public disclose: boolean;

                    /** RespondClarificationRequest answer. */
                    public answer: string;

                    /** RespondClarificationRequest question. */
                    public question: string;

                    /**
                     * Creates a new RespondClarificationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RespondClarificationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IRespondClarificationRequest): isuxportal.proto.services.admin.RespondClarificationRequest;

                    /**
                     * Encodes the specified RespondClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationRequest.verify|verify} messages.
                     * @param message RespondClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IRespondClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RespondClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationRequest.verify|verify} messages.
                     * @param message RespondClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IRespondClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RespondClarificationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RespondClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.RespondClarificationRequest;

                    /**
                     * Decodes a RespondClarificationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RespondClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.RespondClarificationRequest;

                    /**
                     * Verifies a RespondClarificationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RespondClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RespondClarificationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.RespondClarificationRequest;

                    /**
                     * Creates a plain object from a RespondClarificationRequest message. Also converts values to other types if specified.
                     * @param message RespondClarificationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.RespondClarificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RespondClarificationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RespondClarificationResponse. */
                interface IRespondClarificationResponse {

                    /** RespondClarificationResponse clarification */
                    clarification?: (isuxportal.proto.resources.IClarification|null);
                }

                /** Represents a RespondClarificationResponse. */
                class RespondClarificationResponse implements IRespondClarificationResponse {

                    /**
                     * Constructs a new RespondClarificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IRespondClarificationResponse);

                    /** RespondClarificationResponse clarification. */
                    public clarification?: (isuxportal.proto.resources.IClarification|null);

                    /**
                     * Creates a new RespondClarificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RespondClarificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IRespondClarificationResponse): isuxportal.proto.services.admin.RespondClarificationResponse;

                    /**
                     * Encodes the specified RespondClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationResponse.verify|verify} messages.
                     * @param message RespondClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IRespondClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RespondClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.RespondClarificationResponse.verify|verify} messages.
                     * @param message RespondClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IRespondClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RespondClarificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RespondClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.RespondClarificationResponse;

                    /**
                     * Decodes a RespondClarificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RespondClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.RespondClarificationResponse;

                    /**
                     * Verifies a RespondClarificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RespondClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RespondClarificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.RespondClarificationResponse;

                    /**
                     * Creates a plain object from a RespondClarificationResponse message. Also converts values to other types if specified.
                     * @param message RespondClarificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.RespondClarificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RespondClarificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateClarificationRequest. */
                interface ICreateClarificationRequest {

                    /** CreateClarificationRequest answer */
                    answer?: (string|null);

                    /** CreateClarificationRequest question */
                    question?: (string|null);

                    /** CreateClarificationRequest teamId */
                    teamId?: (number|Long|null);
                }

                /** Represents a CreateClarificationRequest. */
                class CreateClarificationRequest implements ICreateClarificationRequest {

                    /**
                     * Constructs a new CreateClarificationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.ICreateClarificationRequest);

                    /** CreateClarificationRequest answer. */
                    public answer: string;

                    /** CreateClarificationRequest question. */
                    public question: string;

                    /** CreateClarificationRequest teamId. */
                    public teamId: (number|Long);

                    /**
                     * Creates a new CreateClarificationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClarificationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.ICreateClarificationRequest): isuxportal.proto.services.admin.CreateClarificationRequest;

                    /**
                     * Encodes the specified CreateClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationRequest.verify|verify} messages.
                     * @param message CreateClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.ICreateClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationRequest.verify|verify} messages.
                     * @param message CreateClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.ICreateClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClarificationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.CreateClarificationRequest;

                    /**
                     * Decodes a CreateClarificationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.CreateClarificationRequest;

                    /**
                     * Verifies a CreateClarificationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClarificationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.CreateClarificationRequest;

                    /**
                     * Creates a plain object from a CreateClarificationRequest message. Also converts values to other types if specified.
                     * @param message CreateClarificationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.CreateClarificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClarificationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateClarificationResponse. */
                interface ICreateClarificationResponse {

                    /** CreateClarificationResponse clarification */
                    clarification?: (isuxportal.proto.resources.IClarification|null);
                }

                /** Represents a CreateClarificationResponse. */
                class CreateClarificationResponse implements ICreateClarificationResponse {

                    /**
                     * Constructs a new CreateClarificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.ICreateClarificationResponse);

                    /** CreateClarificationResponse clarification. */
                    public clarification?: (isuxportal.proto.resources.IClarification|null);

                    /**
                     * Creates a new CreateClarificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateClarificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.ICreateClarificationResponse): isuxportal.proto.services.admin.CreateClarificationResponse;

                    /**
                     * Encodes the specified CreateClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationResponse.verify|verify} messages.
                     * @param message CreateClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.ICreateClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.CreateClarificationResponse.verify|verify} messages.
                     * @param message CreateClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.ICreateClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateClarificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.CreateClarificationResponse;

                    /**
                     * Decodes a CreateClarificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.CreateClarificationResponse;

                    /**
                     * Verifies a CreateClarificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateClarificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.CreateClarificationResponse;

                    /**
                     * Creates a plain object from a CreateClarificationResponse message. Also converts values to other types if specified.
                     * @param message CreateClarificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.CreateClarificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateClarificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListContestantInstancesQuery. */
                interface IListContestantInstancesQuery {

                    /** ListContestantInstancesQuery teamId */
                    teamId?: (number|Long|null);
                }

                /** Represents a ListContestantInstancesQuery. */
                class ListContestantInstancesQuery implements IListContestantInstancesQuery {

                    /**
                     * Constructs a new ListContestantInstancesQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListContestantInstancesQuery);

                    /** ListContestantInstancesQuery teamId. */
                    public teamId: (number|Long);

                    /**
                     * Creates a new ListContestantInstancesQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListContestantInstancesQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListContestantInstancesQuery): isuxportal.proto.services.admin.ListContestantInstancesQuery;

                    /**
                     * Encodes the specified ListContestantInstancesQuery message. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesQuery.verify|verify} messages.
                     * @param message ListContestantInstancesQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListContestantInstancesQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListContestantInstancesQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesQuery.verify|verify} messages.
                     * @param message ListContestantInstancesQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListContestantInstancesQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListContestantInstancesQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListContestantInstancesQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListContestantInstancesQuery;

                    /**
                     * Decodes a ListContestantInstancesQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListContestantInstancesQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListContestantInstancesQuery;

                    /**
                     * Verifies a ListContestantInstancesQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListContestantInstancesQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListContestantInstancesQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListContestantInstancesQuery;

                    /**
                     * Creates a plain object from a ListContestantInstancesQuery message. Also converts values to other types if specified.
                     * @param message ListContestantInstancesQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListContestantInstancesQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListContestantInstancesQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListContestantInstancesResponse. */
                interface IListContestantInstancesResponse {

                    /** ListContestantInstancesResponse contestantInstances */
                    contestantInstances?: (isuxportal.proto.resources.IContestantInstance[]|null);
                }

                /** Represents a ListContestantInstancesResponse. */
                class ListContestantInstancesResponse implements IListContestantInstancesResponse {

                    /**
                     * Constructs a new ListContestantInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListContestantInstancesResponse);

                    /** ListContestantInstancesResponse contestantInstances. */
                    public contestantInstances: isuxportal.proto.resources.IContestantInstance[];

                    /**
                     * Creates a new ListContestantInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListContestantInstancesResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListContestantInstancesResponse): isuxportal.proto.services.admin.ListContestantInstancesResponse;

                    /**
                     * Encodes the specified ListContestantInstancesResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesResponse.verify|verify} messages.
                     * @param message ListContestantInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListContestantInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListContestantInstancesResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListContestantInstancesResponse.verify|verify} messages.
                     * @param message ListContestantInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListContestantInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListContestantInstancesResponse;

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListContestantInstancesResponse;

                    /**
                     * Verifies a ListContestantInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListContestantInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListContestantInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListContestantInstancesResponse;

                    /**
                     * Creates a plain object from a ListContestantInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListContestantInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListContestantInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListContestantInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DashboardQuery. */
                interface IDashboardQuery {
                }

                /** Represents a DashboardQuery. */
                class DashboardQuery implements IDashboardQuery {

                    /**
                     * Constructs a new DashboardQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IDashboardQuery);

                    /**
                     * Creates a new DashboardQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IDashboardQuery): isuxportal.proto.services.admin.DashboardQuery;

                    /**
                     * Encodes the specified DashboardQuery message. Does not implicitly {@link isuxportal.proto.services.admin.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.DashboardQuery;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.DashboardQuery;

                    /**
                     * Verifies a DashboardQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.DashboardQuery;

                    /**
                     * Creates a plain object from a DashboardQuery message. Also converts values to other types if specified.
                     * @param message DashboardQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.DashboardQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DashboardResponse. */
                interface IDashboardResponse {

                    /** DashboardResponse leaderboard */
                    leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);

                    /** DashboardResponse earliestUnansweredClarificationAt */
                    earliestUnansweredClarificationAt?: (google.protobuf.ITimestamp|null);

                    /** DashboardResponse unansweredClarificationCount */
                    unansweredClarificationCount?: (number|Long|null);
                }

                /** Represents a DashboardResponse. */
                class DashboardResponse implements IDashboardResponse {

                    /**
                     * Constructs a new DashboardResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IDashboardResponse);

                    /** DashboardResponse leaderboard. */
                    public leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);

                    /** DashboardResponse earliestUnansweredClarificationAt. */
                    public earliestUnansweredClarificationAt?: (google.protobuf.ITimestamp|null);

                    /** DashboardResponse unansweredClarificationCount. */
                    public unansweredClarificationCount: (number|Long);

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IDashboardResponse): isuxportal.proto.services.admin.DashboardResponse;

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.admin.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.DashboardResponse;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.DashboardResponse;

                    /**
                     * Verifies a DashboardResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.DashboardResponse;

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @param message DashboardResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.DashboardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTeamsQuery. */
                interface IListTeamsQuery {
                }

                /** Represents a ListTeamsQuery. */
                class ListTeamsQuery implements IListTeamsQuery {

                    /**
                     * Constructs a new ListTeamsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListTeamsQuery);

                    /**
                     * Creates a new ListTeamsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListTeamsQuery): isuxportal.proto.services.admin.ListTeamsQuery;

                    /**
                     * Encodes the specified ListTeamsQuery message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsQuery.verify|verify} messages.
                     * @param message ListTeamsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListTeamsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsQuery.verify|verify} messages.
                     * @param message ListTeamsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListTeamsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListTeamsQuery;

                    /**
                     * Decodes a ListTeamsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListTeamsQuery;

                    /**
                     * Verifies a ListTeamsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListTeamsQuery;

                    /**
                     * Creates a plain object from a ListTeamsQuery message. Also converts values to other types if specified.
                     * @param message ListTeamsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListTeamsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTeamsResponse. */
                interface IListTeamsResponse {

                    /** ListTeamsResponse teams */
                    teams?: (isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem[]|null);
                }

                /** Represents a ListTeamsResponse. */
                class ListTeamsResponse implements IListTeamsResponse {

                    /**
                     * Constructs a new ListTeamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IListTeamsResponse);

                    /** ListTeamsResponse teams. */
                    public teams: isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem[];

                    /**
                     * Creates a new ListTeamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IListTeamsResponse): isuxportal.proto.services.admin.ListTeamsResponse;

                    /**
                     * Encodes the specified ListTeamsResponse message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.verify|verify} messages.
                     * @param message ListTeamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IListTeamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.verify|verify} messages.
                     * @param message ListTeamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IListTeamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListTeamsResponse;

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListTeamsResponse;

                    /**
                     * Verifies a ListTeamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListTeamsResponse;

                    /**
                     * Creates a plain object from a ListTeamsResponse message. Also converts values to other types if specified.
                     * @param message ListTeamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.ListTeamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListTeamsResponse {

                    /** Properties of a TeamListItem. */
                    interface ITeamListItem {

                        /** TeamListItem teamId */
                        teamId?: (number|Long|null);

                        /** TeamListItem name */
                        name?: (string|null);

                        /** TeamListItem memberNames */
                        memberNames?: (string[]|null);

                        /** TeamListItem finalParticipation */
                        finalParticipation?: (boolean|null);

                        /** TeamListItem isStudent */
                        isStudent?: (boolean|null);

                        /** TeamListItem withdrawn */
                        withdrawn?: (boolean|null);

                        /** TeamListItem disqualified */
                        disqualified?: (boolean|null);

                        /** TeamListItem hidden */
                        hidden?: (boolean|null);
                    }

                    /** Represents a TeamListItem. */
                    class TeamListItem implements ITeamListItem {

                        /**
                         * Constructs a new TeamListItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem);

                        /** TeamListItem teamId. */
                        public teamId: (number|Long);

                        /** TeamListItem name. */
                        public name: string;

                        /** TeamListItem memberNames. */
                        public memberNames: string[];

                        /** TeamListItem finalParticipation. */
                        public finalParticipation: boolean;

                        /** TeamListItem isStudent. */
                        public isStudent: boolean;

                        /** TeamListItem withdrawn. */
                        public withdrawn: boolean;

                        /** TeamListItem disqualified. */
                        public disqualified: boolean;

                        /** TeamListItem hidden. */
                        public hidden: boolean;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TeamListItem instance
                         */
                        public static create(properties?: isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem): isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem;

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: isuxportal.proto.services.admin.ListTeamsResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem;

                        /**
                         * Verifies a TeamListItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TeamListItem
                         */
                        public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem;

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @param message TeamListItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: isuxportal.proto.services.admin.ListTeamsResponse.TeamListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a GetTeamQuery. */
                interface IGetTeamQuery {

                    /** GetTeamQuery id */
                    id?: (number|Long|null);
                }

                /** Represents a GetTeamQuery. */
                class GetTeamQuery implements IGetTeamQuery {

                    /**
                     * Constructs a new GetTeamQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetTeamQuery);

                    /** GetTeamQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new GetTeamQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTeamQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetTeamQuery): isuxportal.proto.services.admin.GetTeamQuery;

                    /**
                     * Encodes the specified GetTeamQuery message. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamQuery.verify|verify} messages.
                     * @param message GetTeamQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetTeamQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTeamQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamQuery.verify|verify} messages.
                     * @param message GetTeamQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetTeamQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTeamQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetTeamQuery;

                    /**
                     * Decodes a GetTeamQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetTeamQuery;

                    /**
                     * Verifies a GetTeamQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTeamQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTeamQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetTeamQuery;

                    /**
                     * Creates a plain object from a GetTeamQuery message. Also converts values to other types if specified.
                     * @param message GetTeamQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetTeamQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTeamQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetTeamResponse. */
                interface IGetTeamResponse {

                    /** GetTeamResponse team */
                    team?: (isuxportal.proto.resources.ITeam|null);
                }

                /** Represents a GetTeamResponse. */
                class GetTeamResponse implements IGetTeamResponse {

                    /**
                     * Constructs a new GetTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IGetTeamResponse);

                    /** GetTeamResponse team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /**
                     * Creates a new GetTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IGetTeamResponse): isuxportal.proto.services.admin.GetTeamResponse;

                    /**
                     * Encodes the specified GetTeamResponse message. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamResponse.verify|verify} messages.
                     * @param message GetTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IGetTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.GetTeamResponse.verify|verify} messages.
                     * @param message GetTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IGetTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.GetTeamResponse;

                    /**
                     * Decodes a GetTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.GetTeamResponse;

                    /**
                     * Verifies a GetTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.GetTeamResponse;

                    /**
                     * Creates a plain object from a GetTeamResponse message. Also converts values to other types if specified.
                     * @param message GetTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.GetTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTeamQuery. */
                interface IUpdateTeamQuery {

                    /** UpdateTeamQuery id */
                    id?: (number|Long|null);
                }

                /** Represents an UpdateTeamQuery. */
                class UpdateTeamQuery implements IUpdateTeamQuery {

                    /**
                     * Constructs a new UpdateTeamQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IUpdateTeamQuery);

                    /** UpdateTeamQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new UpdateTeamQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTeamQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IUpdateTeamQuery): isuxportal.proto.services.admin.UpdateTeamQuery;

                    /**
                     * Encodes the specified UpdateTeamQuery message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamQuery.verify|verify} messages.
                     * @param message UpdateTeamQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IUpdateTeamQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTeamQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamQuery.verify|verify} messages.
                     * @param message UpdateTeamQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IUpdateTeamQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTeamQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.UpdateTeamQuery;

                    /**
                     * Decodes an UpdateTeamQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTeamQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.UpdateTeamQuery;

                    /**
                     * Verifies an UpdateTeamQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTeamQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTeamQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.UpdateTeamQuery;

                    /**
                     * Creates a plain object from an UpdateTeamQuery message. Also converts values to other types if specified.
                     * @param message UpdateTeamQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.UpdateTeamQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTeamQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTeamRequest. */
                interface IUpdateTeamRequest {

                    /** UpdateTeamRequest team */
                    team?: (isuxportal.proto.resources.ITeam|null);

                    /** UpdateTeamRequest contestants */
                    contestants?: (isuxportal.proto.resources.IContestant[]|null);
                }

                /** Represents an UpdateTeamRequest. */
                class UpdateTeamRequest implements IUpdateTeamRequest {

                    /**
                     * Constructs a new UpdateTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IUpdateTeamRequest);

                    /** UpdateTeamRequest team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /** UpdateTeamRequest contestants. */
                    public contestants: isuxportal.proto.resources.IContestant[];

                    /**
                     * Creates a new UpdateTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IUpdateTeamRequest): isuxportal.proto.services.admin.UpdateTeamRequest;

                    /**
                     * Encodes the specified UpdateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamRequest.verify|verify} messages.
                     * @param message UpdateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamRequest.verify|verify} messages.
                     * @param message UpdateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IUpdateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.UpdateTeamRequest;

                    /**
                     * Decodes an UpdateTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.UpdateTeamRequest;

                    /**
                     * Verifies an UpdateTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.UpdateTeamRequest;

                    /**
                     * Creates a plain object from an UpdateTeamRequest message. Also converts values to other types if specified.
                     * @param message UpdateTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.UpdateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateTeamResponse. */
                interface IUpdateTeamResponse {
                }

                /** Represents an UpdateTeamResponse. */
                class UpdateTeamResponse implements IUpdateTeamResponse {

                    /**
                     * Constructs a new UpdateTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.admin.IUpdateTeamResponse);

                    /**
                     * Creates a new UpdateTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.admin.IUpdateTeamResponse): isuxportal.proto.services.admin.UpdateTeamResponse;

                    /**
                     * Encodes the specified UpdateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamResponse.verify|verify} messages.
                     * @param message UpdateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.admin.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.admin.UpdateTeamResponse.verify|verify} messages.
                     * @param message UpdateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.admin.IUpdateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.admin.UpdateTeamResponse;

                    /**
                     * Decodes an UpdateTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.admin.UpdateTeamResponse;

                    /**
                     * Verifies an UpdateTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.admin.UpdateTeamResponse;

                    /**
                     * Creates a plain object from an UpdateTeamResponse message. Also converts values to other types if specified.
                     * @param message UpdateTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.admin.UpdateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace audience. */
            namespace audience {

                /** Properties of a DashboardQuery. */
                interface IDashboardQuery {
                }

                /** Represents a DashboardQuery. */
                class DashboardQuery implements IDashboardQuery {

                    /**
                     * Constructs a new DashboardQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IDashboardQuery);

                    /**
                     * Creates a new DashboardQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IDashboardQuery): isuxportal.proto.services.audience.DashboardQuery;

                    /**
                     * Encodes the specified DashboardQuery message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.DashboardQuery;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.DashboardQuery;

                    /**
                     * Verifies a DashboardQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.DashboardQuery;

                    /**
                     * Creates a plain object from a DashboardQuery message. Also converts values to other types if specified.
                     * @param message DashboardQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.DashboardQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DashboardResponse. */
                interface IDashboardResponse {

                    /** DashboardResponse leaderboard */
                    leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);
                }

                /** Represents a DashboardResponse. */
                class DashboardResponse implements IDashboardResponse {

                    /**
                     * Constructs a new DashboardResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IDashboardResponse);

                    /** DashboardResponse leaderboard. */
                    public leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IDashboardResponse): isuxportal.proto.services.audience.DashboardResponse;

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.DashboardResponse;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.DashboardResponse;

                    /**
                     * Verifies a DashboardResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.DashboardResponse;

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @param message DashboardResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.DashboardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTeamsRequest. */
                interface IListTeamsRequest {
                }

                /** Represents a ListTeamsRequest. */
                class ListTeamsRequest implements IListTeamsRequest {

                    /**
                     * Constructs a new ListTeamsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IListTeamsRequest);

                    /**
                     * Creates a new ListTeamsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamsRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IListTeamsRequest): isuxportal.proto.services.audience.ListTeamsRequest;

                    /**
                     * Encodes the specified ListTeamsRequest message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @param message ListTeamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IListTeamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamsRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @param message ListTeamsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IListTeamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamsRequest;

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamsRequest;

                    /**
                     * Verifies a ListTeamsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamsRequest;

                    /**
                     * Creates a plain object from a ListTeamsRequest message. Also converts values to other types if specified.
                     * @param message ListTeamsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.ListTeamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListTeamsResponse. */
                interface IListTeamsResponse {

                    /** ListTeamsResponse teams */
                    teams?: (isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem[]|null);
                }

                /** Represents a ListTeamsResponse. */
                class ListTeamsResponse implements IListTeamsResponse {

                    /**
                     * Constructs a new ListTeamsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.audience.IListTeamsResponse);

                    /** ListTeamsResponse teams. */
                    public teams: isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem[];

                    /**
                     * Creates a new ListTeamsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListTeamsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.audience.IListTeamsResponse): isuxportal.proto.services.audience.ListTeamsResponse;

                    /**
                     * Encodes the specified ListTeamsResponse message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @param message ListTeamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.audience.IListTeamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListTeamsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @param message ListTeamsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.audience.IListTeamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamsResponse;

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamsResponse;

                    /**
                     * Verifies a ListTeamsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListTeamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListTeamsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamsResponse;

                    /**
                     * Creates a plain object from a ListTeamsResponse message. Also converts values to other types if specified.
                     * @param message ListTeamsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.audience.ListTeamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListTeamsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListTeamsResponse {

                    /** Properties of a TeamListItem. */
                    interface ITeamListItem {

                        /** TeamListItem teamId */
                        teamId?: (number|Long|null);

                        /** TeamListItem name */
                        name?: (string|null);

                        /** TeamListItem memberNames */
                        memberNames?: (string[]|null);

                        /** TeamListItem finalParticipation */
                        finalParticipation?: (boolean|null);

                        /** TeamListItem isStudent */
                        isStudent?: (boolean|null);
                    }

                    /** Represents a TeamListItem. */
                    class TeamListItem implements ITeamListItem {

                        /**
                         * Constructs a new TeamListItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem);

                        /** TeamListItem teamId. */
                        public teamId: (number|Long);

                        /** TeamListItem name. */
                        public name: string;

                        /** TeamListItem memberNames. */
                        public memberNames: string[];

                        /** TeamListItem finalParticipation. */
                        public finalParticipation: boolean;

                        /** TeamListItem isStudent. */
                        public isStudent: boolean;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TeamListItem instance
                         */
                        public static create(properties?: isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem): isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem;

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @param message TeamListItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem;

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem;

                        /**
                         * Verifies a TeamListItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TeamListItem
                         */
                        public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem;

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @param message TeamListItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace contestant. */
            namespace contestant {

                /** Properties of a ListBenchmarkJobsQuery. */
                interface IListBenchmarkJobsQuery {

                    /** ListBenchmarkJobsQuery limit */
                    limit?: (number|Long|null);
                }

                /** Represents a ListBenchmarkJobsQuery. */
                class ListBenchmarkJobsQuery implements IListBenchmarkJobsQuery {

                    /**
                     * Constructs a new ListBenchmarkJobsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListBenchmarkJobsQuery);

                    /** ListBenchmarkJobsQuery limit. */
                    public limit: (number|Long);

                    /**
                     * Creates a new ListBenchmarkJobsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBenchmarkJobsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListBenchmarkJobsQuery): isuxportal.proto.services.contestant.ListBenchmarkJobsQuery;

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @param message ListBenchmarkJobsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListBenchmarkJobsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @param message ListBenchmarkJobsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListBenchmarkJobsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListBenchmarkJobsQuery;

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListBenchmarkJobsQuery;

                    /**
                     * Verifies a ListBenchmarkJobsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBenchmarkJobsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBenchmarkJobsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListBenchmarkJobsQuery;

                    /**
                     * Creates a plain object from a ListBenchmarkJobsQuery message. Also converts values to other types if specified.
                     * @param message ListBenchmarkJobsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListBenchmarkJobsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBenchmarkJobsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListBenchmarkJobsResponse. */
                interface IListBenchmarkJobsResponse {

                    /** ListBenchmarkJobsResponse jobs */
                    jobs?: (isuxportal.proto.resources.IBenchmarkJob[]|null);
                }

                /** Represents a ListBenchmarkJobsResponse. */
                class ListBenchmarkJobsResponse implements IListBenchmarkJobsResponse {

                    /**
                     * Constructs a new ListBenchmarkJobsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListBenchmarkJobsResponse);

                    /** ListBenchmarkJobsResponse jobs. */
                    public jobs: isuxportal.proto.resources.IBenchmarkJob[];

                    /**
                     * Creates a new ListBenchmarkJobsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListBenchmarkJobsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListBenchmarkJobsResponse): isuxportal.proto.services.contestant.ListBenchmarkJobsResponse;

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @param message ListBenchmarkJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListBenchmarkJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @param message ListBenchmarkJobsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListBenchmarkJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListBenchmarkJobsResponse;

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListBenchmarkJobsResponse;

                    /**
                     * Verifies a ListBenchmarkJobsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListBenchmarkJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListBenchmarkJobsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListBenchmarkJobsResponse;

                    /**
                     * Creates a plain object from a ListBenchmarkJobsResponse message. Also converts values to other types if specified.
                     * @param message ListBenchmarkJobsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListBenchmarkJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListBenchmarkJobsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnqueueBenchmarkJobRequest. */
                interface IEnqueueBenchmarkJobRequest {

                    /** EnqueueBenchmarkJobRequest targetId */
                    targetId?: (number|Long|null);
                }

                /** Represents an EnqueueBenchmarkJobRequest. */
                class EnqueueBenchmarkJobRequest implements IEnqueueBenchmarkJobRequest {

                    /**
                     * Constructs a new EnqueueBenchmarkJobRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest);

                    /** EnqueueBenchmarkJobRequest targetId. */
                    public targetId: (number|Long);

                    /**
                     * Creates a new EnqueueBenchmarkJobRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnqueueBenchmarkJobRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest): isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest;

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest;

                    /**
                     * Verifies an EnqueueBenchmarkJobRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnqueueBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnqueueBenchmarkJobRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest;

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @param message EnqueueBenchmarkJobRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnqueueBenchmarkJobRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an EnqueueBenchmarkJobResponse. */
                interface IEnqueueBenchmarkJobResponse {

                    /** EnqueueBenchmarkJobResponse job */
                    job?: (isuxportal.proto.resources.IBenchmarkJob|null);
                }

                /** Represents an EnqueueBenchmarkJobResponse. */
                class EnqueueBenchmarkJobResponse implements IEnqueueBenchmarkJobResponse {

                    /**
                     * Constructs a new EnqueueBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse);

                    /** EnqueueBenchmarkJobResponse job. */
                    public job?: (isuxportal.proto.resources.IBenchmarkJob|null);

                    /**
                     * Creates a new EnqueueBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EnqueueBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse): isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @param message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse;

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse;

                    /**
                     * Verifies an EnqueueBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EnqueueBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EnqueueBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse;

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message EnqueueBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EnqueueBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBenchmarkJobQuery. */
                interface IGetBenchmarkJobQuery {

                    /** GetBenchmarkJobQuery id */
                    id?: (number|Long|null);
                }

                /** Represents a GetBenchmarkJobQuery. */
                class GetBenchmarkJobQuery implements IGetBenchmarkJobQuery {

                    /**
                     * Constructs a new GetBenchmarkJobQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IGetBenchmarkJobQuery);

                    /** GetBenchmarkJobQuery id. */
                    public id: (number|Long);

                    /**
                     * Creates a new GetBenchmarkJobQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBenchmarkJobQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IGetBenchmarkJobQuery): isuxportal.proto.services.contestant.GetBenchmarkJobQuery;

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobQuery.verify|verify} messages.
                     * @param message GetBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IGetBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobQuery.verify|verify} messages.
                     * @param message GetBenchmarkJobQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IGetBenchmarkJobQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.GetBenchmarkJobQuery;

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.GetBenchmarkJobQuery;

                    /**
                     * Verifies a GetBenchmarkJobQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBenchmarkJobQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBenchmarkJobQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.GetBenchmarkJobQuery;

                    /**
                     * Creates a plain object from a GetBenchmarkJobQuery message. Also converts values to other types if specified.
                     * @param message GetBenchmarkJobQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.GetBenchmarkJobQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBenchmarkJobQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetBenchmarkJobResponse. */
                interface IGetBenchmarkJobResponse {

                    /** GetBenchmarkJobResponse job */
                    job?: (isuxportal.proto.resources.IBenchmarkJob|null);
                }

                /** Represents a GetBenchmarkJobResponse. */
                class GetBenchmarkJobResponse implements IGetBenchmarkJobResponse {

                    /**
                     * Constructs a new GetBenchmarkJobResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IGetBenchmarkJobResponse);

                    /** GetBenchmarkJobResponse job. */
                    public job?: (isuxportal.proto.resources.IBenchmarkJob|null);

                    /**
                     * Creates a new GetBenchmarkJobResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetBenchmarkJobResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IGetBenchmarkJobResponse): isuxportal.proto.services.contestant.GetBenchmarkJobResponse;

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobResponse.verify|verify} messages.
                     * @param message GetBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IGetBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobResponse.verify|verify} messages.
                     * @param message GetBenchmarkJobResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IGetBenchmarkJobResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.GetBenchmarkJobResponse;

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.GetBenchmarkJobResponse;

                    /**
                     * Verifies a GetBenchmarkJobResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetBenchmarkJobResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.GetBenchmarkJobResponse;

                    /**
                     * Creates a plain object from a GetBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @param message GetBenchmarkJobResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.GetBenchmarkJobResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetBenchmarkJobResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClarificationsQuery. */
                interface IListClarificationsQuery {
                }

                /** Represents a ListClarificationsQuery. */
                class ListClarificationsQuery implements IListClarificationsQuery {

                    /**
                     * Constructs a new ListClarificationsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListClarificationsQuery);

                    /**
                     * Creates a new ListClarificationsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClarificationsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListClarificationsQuery): isuxportal.proto.services.contestant.ListClarificationsQuery;

                    /**
                     * Encodes the specified ListClarificationsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsQuery.verify|verify} messages.
                     * @param message ListClarificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListClarificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClarificationsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsQuery.verify|verify} messages.
                     * @param message ListClarificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListClarificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListClarificationsQuery;

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListClarificationsQuery;

                    /**
                     * Verifies a ListClarificationsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClarificationsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClarificationsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListClarificationsQuery;

                    /**
                     * Creates a plain object from a ListClarificationsQuery message. Also converts values to other types if specified.
                     * @param message ListClarificationsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListClarificationsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClarificationsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListClarificationsResponse. */
                interface IListClarificationsResponse {

                    /** ListClarificationsResponse clarifications */
                    clarifications?: (isuxportal.proto.resources.IClarification[]|null);
                }

                /** Represents a ListClarificationsResponse. */
                class ListClarificationsResponse implements IListClarificationsResponse {

                    /**
                     * Constructs a new ListClarificationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListClarificationsResponse);

                    /** ListClarificationsResponse clarifications. */
                    public clarifications: isuxportal.proto.resources.IClarification[];

                    /**
                     * Creates a new ListClarificationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListClarificationsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListClarificationsResponse): isuxportal.proto.services.contestant.ListClarificationsResponse;

                    /**
                     * Encodes the specified ListClarificationsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsResponse.verify|verify} messages.
                     * @param message ListClarificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListClarificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListClarificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsResponse.verify|verify} messages.
                     * @param message ListClarificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListClarificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListClarificationsResponse;

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListClarificationsResponse;

                    /**
                     * Verifies a ListClarificationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListClarificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListClarificationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListClarificationsResponse;

                    /**
                     * Creates a plain object from a ListClarificationsResponse message. Also converts values to other types if specified.
                     * @param message ListClarificationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListClarificationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListClarificationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RequestClarificationRequest. */
                interface IRequestClarificationRequest {

                    /** RequestClarificationRequest question */
                    question?: (string|null);
                }

                /** Represents a RequestClarificationRequest. */
                class RequestClarificationRequest implements IRequestClarificationRequest {

                    /**
                     * Constructs a new RequestClarificationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IRequestClarificationRequest);

                    /** RequestClarificationRequest question. */
                    public question: string;

                    /**
                     * Creates a new RequestClarificationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RequestClarificationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IRequestClarificationRequest): isuxportal.proto.services.contestant.RequestClarificationRequest;

                    /**
                     * Encodes the specified RequestClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationRequest.verify|verify} messages.
                     * @param message RequestClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IRequestClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RequestClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationRequest.verify|verify} messages.
                     * @param message RequestClarificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IRequestClarificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RequestClarificationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RequestClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.RequestClarificationRequest;

                    /**
                     * Decodes a RequestClarificationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RequestClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.RequestClarificationRequest;

                    /**
                     * Verifies a RequestClarificationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RequestClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RequestClarificationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.RequestClarificationRequest;

                    /**
                     * Creates a plain object from a RequestClarificationRequest message. Also converts values to other types if specified.
                     * @param message RequestClarificationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.RequestClarificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RequestClarificationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RequestClarificationResponse. */
                interface IRequestClarificationResponse {

                    /** RequestClarificationResponse clarification */
                    clarification?: (isuxportal.proto.resources.IClarification|null);
                }

                /** Represents a RequestClarificationResponse. */
                class RequestClarificationResponse implements IRequestClarificationResponse {

                    /**
                     * Constructs a new RequestClarificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IRequestClarificationResponse);

                    /** RequestClarificationResponse clarification. */
                    public clarification?: (isuxportal.proto.resources.IClarification|null);

                    /**
                     * Creates a new RequestClarificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RequestClarificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IRequestClarificationResponse): isuxportal.proto.services.contestant.RequestClarificationResponse;

                    /**
                     * Encodes the specified RequestClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationResponse.verify|verify} messages.
                     * @param message RequestClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IRequestClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RequestClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationResponse.verify|verify} messages.
                     * @param message RequestClarificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IRequestClarificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RequestClarificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RequestClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.RequestClarificationResponse;

                    /**
                     * Decodes a RequestClarificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RequestClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.RequestClarificationResponse;

                    /**
                     * Verifies a RequestClarificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RequestClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RequestClarificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.RequestClarificationResponse;

                    /**
                     * Creates a plain object from a RequestClarificationResponse message. Also converts values to other types if specified.
                     * @param message RequestClarificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.RequestClarificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RequestClarificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DashboardQuery. */
                interface IDashboardQuery {
                }

                /** Represents a DashboardQuery. */
                class DashboardQuery implements IDashboardQuery {

                    /**
                     * Constructs a new DashboardQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IDashboardQuery);

                    /**
                     * Creates a new DashboardQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IDashboardQuery): isuxportal.proto.services.contestant.DashboardQuery;

                    /**
                     * Encodes the specified DashboardQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardQuery.verify|verify} messages.
                     * @param message DashboardQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IDashboardQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.DashboardQuery;

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.DashboardQuery;

                    /**
                     * Verifies a DashboardQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.DashboardQuery;

                    /**
                     * Creates a plain object from a DashboardQuery message. Also converts values to other types if specified.
                     * @param message DashboardQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.DashboardQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DashboardResponse. */
                interface IDashboardResponse {

                    /** DashboardResponse leaderboard */
                    leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);
                }

                /** Represents a DashboardResponse. */
                class DashboardResponse implements IDashboardResponse {

                    /**
                     * Constructs a new DashboardResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IDashboardResponse);

                    /** DashboardResponse leaderboard. */
                    public leaderboard?: (isuxportal.proto.resources.ILeaderboard|null);

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DashboardResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IDashboardResponse): isuxportal.proto.services.contestant.DashboardResponse;

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardResponse.verify|verify} messages.
                     * @param message DashboardResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IDashboardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.DashboardResponse;

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.DashboardResponse;

                    /**
                     * Verifies a DashboardResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DashboardResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.DashboardResponse;

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @param message DashboardResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.DashboardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListContestantInstancesRequest. */
                interface IListContestantInstancesRequest {
                }

                /** Represents a ListContestantInstancesRequest. */
                class ListContestantInstancesRequest implements IListContestantInstancesRequest {

                    /**
                     * Constructs a new ListContestantInstancesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListContestantInstancesRequest);

                    /**
                     * Creates a new ListContestantInstancesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListContestantInstancesRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListContestantInstancesRequest): isuxportal.proto.services.contestant.ListContestantInstancesRequest;

                    /**
                     * Encodes the specified ListContestantInstancesRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesRequest.verify|verify} messages.
                     * @param message ListContestantInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListContestantInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListContestantInstancesRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesRequest.verify|verify} messages.
                     * @param message ListContestantInstancesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListContestantInstancesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListContestantInstancesRequest;

                    /**
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListContestantInstancesRequest;

                    /**
                     * Verifies a ListContestantInstancesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListContestantInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListContestantInstancesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListContestantInstancesRequest;

                    /**
                     * Creates a plain object from a ListContestantInstancesRequest message. Also converts values to other types if specified.
                     * @param message ListContestantInstancesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListContestantInstancesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListContestantInstancesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListContestantInstancesResponse. */
                interface IListContestantInstancesResponse {

                    /** ListContestantInstancesResponse contestantInstances */
                    contestantInstances?: (isuxportal.proto.resources.IContestantInstance[]|null);
                }

                /** Represents a ListContestantInstancesResponse. */
                class ListContestantInstancesResponse implements IListContestantInstancesResponse {

                    /**
                     * Constructs a new ListContestantInstancesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListContestantInstancesResponse);

                    /** ListContestantInstancesResponse contestantInstances. */
                    public contestantInstances: isuxportal.proto.resources.IContestantInstance[];

                    /**
                     * Creates a new ListContestantInstancesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListContestantInstancesResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListContestantInstancesResponse): isuxportal.proto.services.contestant.ListContestantInstancesResponse;

                    /**
                     * Encodes the specified ListContestantInstancesResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesResponse.verify|verify} messages.
                     * @param message ListContestantInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListContestantInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListContestantInstancesResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesResponse.verify|verify} messages.
                     * @param message ListContestantInstancesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListContestantInstancesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListContestantInstancesResponse;

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListContestantInstancesResponse;

                    /**
                     * Verifies a ListContestantInstancesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListContestantInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListContestantInstancesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListContestantInstancesResponse;

                    /**
                     * Creates a plain object from a ListContestantInstancesResponse message. Also converts values to other types if specified.
                     * @param message ListContestantInstancesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListContestantInstancesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListContestantInstancesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListNotificationsQuery. */
                interface IListNotificationsQuery {

                    /** ListNotificationsQuery after */
                    after?: (number|Long|null);
                }

                /** Represents a ListNotificationsQuery. */
                class ListNotificationsQuery implements IListNotificationsQuery {

                    /**
                     * Constructs a new ListNotificationsQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListNotificationsQuery);

                    /** ListNotificationsQuery after. */
                    public after: (number|Long);

                    /**
                     * Creates a new ListNotificationsQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNotificationsQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListNotificationsQuery): isuxportal.proto.services.contestant.ListNotificationsQuery;

                    /**
                     * Encodes the specified ListNotificationsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsQuery.verify|verify} messages.
                     * @param message ListNotificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListNotificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNotificationsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsQuery.verify|verify} messages.
                     * @param message ListNotificationsQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListNotificationsQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNotificationsQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNotificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListNotificationsQuery;

                    /**
                     * Decodes a ListNotificationsQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNotificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListNotificationsQuery;

                    /**
                     * Verifies a ListNotificationsQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNotificationsQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNotificationsQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListNotificationsQuery;

                    /**
                     * Creates a plain object from a ListNotificationsQuery message. Also converts values to other types if specified.
                     * @param message ListNotificationsQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListNotificationsQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNotificationsQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListNotificationsResponse. */
                interface IListNotificationsResponse {

                    /** ListNotificationsResponse lastAnsweredClarificationId */
                    lastAnsweredClarificationId?: (number|Long|null);

                    /** ListNotificationsResponse notifications */
                    notifications?: (isuxportal.proto.resources.INotification[]|null);
                }

                /** Represents a ListNotificationsResponse. */
                class ListNotificationsResponse implements IListNotificationsResponse {

                    /**
                     * Constructs a new ListNotificationsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IListNotificationsResponse);

                    /** ListNotificationsResponse lastAnsweredClarificationId. */
                    public lastAnsweredClarificationId: (number|Long);

                    /** ListNotificationsResponse notifications. */
                    public notifications: isuxportal.proto.resources.INotification[];

                    /**
                     * Creates a new ListNotificationsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListNotificationsResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IListNotificationsResponse): isuxportal.proto.services.contestant.ListNotificationsResponse;

                    /**
                     * Encodes the specified ListNotificationsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsResponse.verify|verify} messages.
                     * @param message ListNotificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IListNotificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListNotificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsResponse.verify|verify} messages.
                     * @param message ListNotificationsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IListNotificationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListNotificationsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListNotificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.ListNotificationsResponse;

                    /**
                     * Decodes a ListNotificationsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListNotificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.ListNotificationsResponse;

                    /**
                     * Verifies a ListNotificationsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListNotificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListNotificationsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.ListNotificationsResponse;

                    /**
                     * Creates a plain object from a ListNotificationsResponse message. Also converts values to other types if specified.
                     * @param message ListNotificationsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.ListNotificationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListNotificationsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubscribeNotificationRequest. */
                interface ISubscribeNotificationRequest {

                    /** SubscribeNotificationRequest endpoint */
                    endpoint?: (string|null);

                    /** SubscribeNotificationRequest p256dh */
                    p256dh?: (string|null);

                    /** SubscribeNotificationRequest auth */
                    auth?: (string|null);
                }

                /** Represents a SubscribeNotificationRequest. */
                class SubscribeNotificationRequest implements ISubscribeNotificationRequest {

                    /**
                     * Constructs a new SubscribeNotificationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.ISubscribeNotificationRequest);

                    /** SubscribeNotificationRequest endpoint. */
                    public endpoint: string;

                    /** SubscribeNotificationRequest p256dh. */
                    public p256dh: string;

                    /** SubscribeNotificationRequest auth. */
                    public auth: string;

                    /**
                     * Creates a new SubscribeNotificationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubscribeNotificationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.ISubscribeNotificationRequest): isuxportal.proto.services.contestant.SubscribeNotificationRequest;

                    /**
                     * Encodes the specified SubscribeNotificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationRequest.verify|verify} messages.
                     * @param message SubscribeNotificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.ISubscribeNotificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubscribeNotificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationRequest.verify|verify} messages.
                     * @param message SubscribeNotificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.ISubscribeNotificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubscribeNotificationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.SubscribeNotificationRequest;

                    /**
                     * Decodes a SubscribeNotificationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.SubscribeNotificationRequest;

                    /**
                     * Verifies a SubscribeNotificationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubscribeNotificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubscribeNotificationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.SubscribeNotificationRequest;

                    /**
                     * Creates a plain object from a SubscribeNotificationRequest message. Also converts values to other types if specified.
                     * @param message SubscribeNotificationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.SubscribeNotificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubscribeNotificationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SubscribeNotificationResponse. */
                interface ISubscribeNotificationResponse {
                }

                /** Represents a SubscribeNotificationResponse. */
                class SubscribeNotificationResponse implements ISubscribeNotificationResponse {

                    /**
                     * Constructs a new SubscribeNotificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.ISubscribeNotificationResponse);

                    /**
                     * Creates a new SubscribeNotificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SubscribeNotificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.ISubscribeNotificationResponse): isuxportal.proto.services.contestant.SubscribeNotificationResponse;

                    /**
                     * Encodes the specified SubscribeNotificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationResponse.verify|verify} messages.
                     * @param message SubscribeNotificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.ISubscribeNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SubscribeNotificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationResponse.verify|verify} messages.
                     * @param message SubscribeNotificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.ISubscribeNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SubscribeNotificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.SubscribeNotificationResponse;

                    /**
                     * Decodes a SubscribeNotificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.SubscribeNotificationResponse;

                    /**
                     * Verifies a SubscribeNotificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SubscribeNotificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SubscribeNotificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.SubscribeNotificationResponse;

                    /**
                     * Creates a plain object from a SubscribeNotificationResponse message. Also converts values to other types if specified.
                     * @param message SubscribeNotificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.SubscribeNotificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SubscribeNotificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UnsubscribeNotificationRequest. */
                interface IUnsubscribeNotificationRequest {

                    /** UnsubscribeNotificationRequest endpoint */
                    endpoint?: (string|null);
                }

                /** Represents an UnsubscribeNotificationRequest. */
                class UnsubscribeNotificationRequest implements IUnsubscribeNotificationRequest {

                    /**
                     * Constructs a new UnsubscribeNotificationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest);

                    /** UnsubscribeNotificationRequest endpoint. */
                    public endpoint: string;

                    /**
                     * Creates a new UnsubscribeNotificationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnsubscribeNotificationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest): isuxportal.proto.services.contestant.UnsubscribeNotificationRequest;

                    /**
                     * Encodes the specified UnsubscribeNotificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationRequest.verify|verify} messages.
                     * @param message UnsubscribeNotificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnsubscribeNotificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationRequest.verify|verify} messages.
                     * @param message UnsubscribeNotificationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnsubscribeNotificationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnsubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.UnsubscribeNotificationRequest;

                    /**
                     * Decodes an UnsubscribeNotificationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnsubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.UnsubscribeNotificationRequest;

                    /**
                     * Verifies an UnsubscribeNotificationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnsubscribeNotificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnsubscribeNotificationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.UnsubscribeNotificationRequest;

                    /**
                     * Creates a plain object from an UnsubscribeNotificationRequest message. Also converts values to other types if specified.
                     * @param message UnsubscribeNotificationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.UnsubscribeNotificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnsubscribeNotificationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UnsubscribeNotificationResponse. */
                interface IUnsubscribeNotificationResponse {
                }

                /** Represents an UnsubscribeNotificationResponse. */
                class UnsubscribeNotificationResponse implements IUnsubscribeNotificationResponse {

                    /**
                     * Constructs a new UnsubscribeNotificationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse);

                    /**
                     * Creates a new UnsubscribeNotificationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UnsubscribeNotificationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse): isuxportal.proto.services.contestant.UnsubscribeNotificationResponse;

                    /**
                     * Encodes the specified UnsubscribeNotificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationResponse.verify|verify} messages.
                     * @param message UnsubscribeNotificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UnsubscribeNotificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationResponse.verify|verify} messages.
                     * @param message UnsubscribeNotificationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UnsubscribeNotificationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UnsubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.contestant.UnsubscribeNotificationResponse;

                    /**
                     * Decodes an UnsubscribeNotificationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UnsubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.contestant.UnsubscribeNotificationResponse;

                    /**
                     * Verifies an UnsubscribeNotificationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UnsubscribeNotificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UnsubscribeNotificationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.contestant.UnsubscribeNotificationResponse;

                    /**
                     * Creates a plain object from an UnsubscribeNotificationResponse message. Also converts values to other types if specified.
                     * @param message UnsubscribeNotificationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.contestant.UnsubscribeNotificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UnsubscribeNotificationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace registration. */
            namespace registration {

                /** Properties of a CreateTeamRequest. */
                interface ICreateTeamRequest {

                    /** CreateTeamRequest teamName */
                    teamName?: (string|null);

                    /** CreateTeamRequest name */
                    name?: (string|null);

                    /** CreateTeamRequest emailAddress */
                    emailAddress?: (string|null);

                    /** CreateTeamRequest isStudent */
                    isStudent?: (boolean|null);

                    /** CreateTeamRequest hidden */
                    hidden?: (boolean|null);
                }

                /** Represents a CreateTeamRequest. */
                class CreateTeamRequest implements ICreateTeamRequest {

                    /**
                     * Constructs a new CreateTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.ICreateTeamRequest);

                    /** CreateTeamRequest teamName. */
                    public teamName: string;

                    /** CreateTeamRequest name. */
                    public name: string;

                    /** CreateTeamRequest emailAddress. */
                    public emailAddress: string;

                    /** CreateTeamRequest isStudent. */
                    public isStudent: boolean;

                    /** CreateTeamRequest hidden. */
                    public hidden: boolean;

                    /**
                     * Creates a new CreateTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.ICreateTeamRequest): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Encodes the specified CreateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @param message CreateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @param message CreateTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.ICreateTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Verifies a CreateTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.CreateTeamRequest;

                    /**
                     * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
                     * @param message CreateTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.CreateTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateTeamResponse. */
                interface ICreateTeamResponse {

                    /** CreateTeamResponse teamId */
                    teamId?: (number|Long|null);
                }

                /** Represents a CreateTeamResponse. */
                class CreateTeamResponse implements ICreateTeamResponse {

                    /**
                     * Constructs a new CreateTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.ICreateTeamResponse);

                    /** CreateTeamResponse teamId. */
                    public teamId: (number|Long);

                    /**
                     * Creates a new CreateTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.ICreateTeamResponse): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Encodes the specified CreateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @param message CreateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @param message CreateTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.ICreateTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Verifies a CreateTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.CreateTeamResponse;

                    /**
                     * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
                     * @param message CreateTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.CreateTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JoinTeamRequest. */
                interface IJoinTeamRequest {

                    /** JoinTeamRequest teamId */
                    teamId?: (number|Long|null);

                    /** JoinTeamRequest inviteToken */
                    inviteToken?: (string|null);

                    /** JoinTeamRequest name */
                    name?: (string|null);

                    /** JoinTeamRequest isStudent */
                    isStudent?: (boolean|null);
                }

                /** Represents a JoinTeamRequest. */
                class JoinTeamRequest implements IJoinTeamRequest {

                    /**
                     * Constructs a new JoinTeamRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IJoinTeamRequest);

                    /** JoinTeamRequest teamId. */
                    public teamId: (number|Long);

                    /** JoinTeamRequest inviteToken. */
                    public inviteToken: string;

                    /** JoinTeamRequest name. */
                    public name: string;

                    /** JoinTeamRequest isStudent. */
                    public isStudent: boolean;

                    /**
                     * Creates a new JoinTeamRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinTeamRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IJoinTeamRequest): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Encodes the specified JoinTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @param message JoinTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @param message JoinTeamRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IJoinTeamRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Verifies a JoinTeamRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinTeamRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.JoinTeamRequest;

                    /**
                     * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
                     * @param message JoinTeamRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.JoinTeamRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinTeamRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a JoinTeamResponse. */
                interface IJoinTeamResponse {
                }

                /** Represents a JoinTeamResponse. */
                class JoinTeamResponse implements IJoinTeamResponse {

                    /**
                     * Constructs a new JoinTeamResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IJoinTeamResponse);

                    /**
                     * Creates a new JoinTeamResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns JoinTeamResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IJoinTeamResponse): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Encodes the specified JoinTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @param message JoinTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @param message JoinTeamResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IJoinTeamResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Verifies a JoinTeamResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns JoinTeamResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.JoinTeamResponse;

                    /**
                     * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
                     * @param message JoinTeamResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.JoinTeamResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this JoinTeamResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationSessionQuery. */
                interface IGetRegistrationSessionQuery {

                    /** GetRegistrationSessionQuery teamId */
                    teamId?: (number|Long|null);

                    /** GetRegistrationSessionQuery inviteToken */
                    inviteToken?: (string|null);

                    /** GetRegistrationSessionQuery bypassToken */
                    bypassToken?: (string|null);
                }

                /** Represents a GetRegistrationSessionQuery. */
                class GetRegistrationSessionQuery implements IGetRegistrationSessionQuery {

                    /**
                     * Constructs a new GetRegistrationSessionQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionQuery);

                    /** GetRegistrationSessionQuery teamId. */
                    public teamId: (number|Long);

                    /** GetRegistrationSessionQuery inviteToken. */
                    public inviteToken: string;

                    /** GetRegistrationSessionQuery bypassToken. */
                    public bypassToken: string;

                    /**
                     * Creates a new GetRegistrationSessionQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationSessionQuery instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionQuery): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @param message GetRegistrationSessionQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IGetRegistrationSessionQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @param message GetRegistrationSessionQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IGetRegistrationSessionQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Verifies a GetRegistrationSessionQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationSessionQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationSessionQuery
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.GetRegistrationSessionQuery;

                    /**
                     * Creates a plain object from a GetRegistrationSessionQuery message. Also converts values to other types if specified.
                     * @param message GetRegistrationSessionQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.GetRegistrationSessionQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationSessionQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetRegistrationSessionResponse. */
                interface IGetRegistrationSessionResponse {

                    /** GetRegistrationSessionResponse team */
                    team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetRegistrationSessionResponse status */
                    status?: (isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status|null);

                    /** GetRegistrationSessionResponse githubLogin */
                    githubLogin?: (string|null);

                    /** GetRegistrationSessionResponse githubAvatarUrl */
                    githubAvatarUrl?: (string|null);

                    /** GetRegistrationSessionResponse discordTag */
                    discordTag?: (string|null);

                    /** GetRegistrationSessionResponse discordAvatarUrl */
                    discordAvatarUrl?: (string|null);

                    /** GetRegistrationSessionResponse memberInviteUrl */
                    memberInviteUrl?: (string|null);

                    /** GetRegistrationSessionResponse discordServerId */
                    discordServerId?: (string|null);
                }

                /** Represents a GetRegistrationSessionResponse. */
                class GetRegistrationSessionResponse implements IGetRegistrationSessionResponse {

                    /**
                     * Constructs a new GetRegistrationSessionResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionResponse);

                    /** GetRegistrationSessionResponse team. */
                    public team?: (isuxportal.proto.resources.ITeam|null);

                    /** GetRegistrationSessionResponse status. */
                    public status: isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status;

                    /** GetRegistrationSessionResponse githubLogin. */
                    public githubLogin: string;

                    /** GetRegistrationSessionResponse githubAvatarUrl. */
                    public githubAvatarUrl: string;

                    /** GetRegistrationSessionResponse discordTag. */
                    public discordTag: string;

                    /** GetRegistrationSessionResponse discordAvatarUrl. */
                    public discordAvatarUrl: string;

                    /** GetRegistrationSessionResponse memberInviteUrl. */
                    public memberInviteUrl: string;

                    /** GetRegistrationSessionResponse discordServerId. */
                    public discordServerId: string;

                    /**
                     * Creates a new GetRegistrationSessionResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetRegistrationSessionResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IGetRegistrationSessionResponse): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @param message GetRegistrationSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IGetRegistrationSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @param message GetRegistrationSessionResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IGetRegistrationSessionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Verifies a GetRegistrationSessionResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetRegistrationSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetRegistrationSessionResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.GetRegistrationSessionResponse;

                    /**
                     * Creates a plain object from a GetRegistrationSessionResponse message. Also converts values to other types if specified.
                     * @param message GetRegistrationSessionResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.GetRegistrationSessionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetRegistrationSessionResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace GetRegistrationSessionResponse {

                    /** Status enum. */
                    enum Status {
                        CLOSED = 0,
                        NOT_JOINABLE = 1,
                        NOT_LOGGED_IN = 2,
                        CREATABLE = 3,
                        JOINABLE = 4,
                        JOINED = 5
                    }
                }

                /** Properties of an UpdateRegistrationRequest. */
                interface IUpdateRegistrationRequest {

                    /** UpdateRegistrationRequest teamName */
                    teamName?: (string|null);

                    /** UpdateRegistrationRequest name */
                    name?: (string|null);

                    /** UpdateRegistrationRequest emailAddress */
                    emailAddress?: (string|null);

                    /** UpdateRegistrationRequest isStudent */
                    isStudent?: (boolean|null);
                }

                /** Represents an UpdateRegistrationRequest. */
                class UpdateRegistrationRequest implements IUpdateRegistrationRequest {

                    /**
                     * Constructs a new UpdateRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IUpdateRegistrationRequest);

                    /** UpdateRegistrationRequest teamName. */
                    public teamName: string;

                    /** UpdateRegistrationRequest name. */
                    public name: string;

                    /** UpdateRegistrationRequest emailAddress. */
                    public emailAddress: string;

                    /** UpdateRegistrationRequest isStudent. */
                    public isStudent: boolean;

                    /**
                     * Creates a new UpdateRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRegistrationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IUpdateRegistrationRequest): isuxportal.proto.services.registration.UpdateRegistrationRequest;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @param message UpdateRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IUpdateRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.UpdateRegistrationRequest;

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.UpdateRegistrationRequest;

                    /**
                     * Verifies an UpdateRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.UpdateRegistrationRequest;

                    /**
                     * Creates a plain object from an UpdateRegistrationRequest message. Also converts values to other types if specified.
                     * @param message UpdateRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.UpdateRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateRegistrationResponse. */
                interface IUpdateRegistrationResponse {
                }

                /** Represents an UpdateRegistrationResponse. */
                class UpdateRegistrationResponse implements IUpdateRegistrationResponse {

                    /**
                     * Constructs a new UpdateRegistrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IUpdateRegistrationResponse);

                    /**
                     * Creates a new UpdateRegistrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateRegistrationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IUpdateRegistrationResponse): isuxportal.proto.services.registration.UpdateRegistrationResponse;

                    /**
                     * Encodes the specified UpdateRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @param message UpdateRegistrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IUpdateRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @param message UpdateRegistrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IUpdateRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.UpdateRegistrationResponse;

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.UpdateRegistrationResponse;

                    /**
                     * Verifies an UpdateRegistrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateRegistrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.UpdateRegistrationResponse;

                    /**
                     * Creates a plain object from an UpdateRegistrationResponse message. Also converts values to other types if specified.
                     * @param message UpdateRegistrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.UpdateRegistrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateRegistrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRegistrationRequest. */
                interface IDeleteRegistrationRequest {
                }

                /** Represents a DeleteRegistrationRequest. */
                class DeleteRegistrationRequest implements IDeleteRegistrationRequest {

                    /**
                     * Constructs a new DeleteRegistrationRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IDeleteRegistrationRequest);

                    /**
                     * Creates a new DeleteRegistrationRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRegistrationRequest instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IDeleteRegistrationRequest): isuxportal.proto.services.registration.DeleteRegistrationRequest;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @param message DeleteRegistrationRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IDeleteRegistrationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.DeleteRegistrationRequest;

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.DeleteRegistrationRequest;

                    /**
                     * Verifies a DeleteRegistrationRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRegistrationRequest
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.DeleteRegistrationRequest;

                    /**
                     * Creates a plain object from a DeleteRegistrationRequest message. Also converts values to other types if specified.
                     * @param message DeleteRegistrationRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.DeleteRegistrationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRegistrationRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteRegistrationResponse. */
                interface IDeleteRegistrationResponse {
                }

                /** Represents a DeleteRegistrationResponse. */
                class DeleteRegistrationResponse implements IDeleteRegistrationResponse {

                    /**
                     * Constructs a new DeleteRegistrationResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: isuxportal.proto.services.registration.IDeleteRegistrationResponse);

                    /**
                     * Creates a new DeleteRegistrationResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteRegistrationResponse instance
                     */
                    public static create(properties?: isuxportal.proto.services.registration.IDeleteRegistrationResponse): isuxportal.proto.services.registration.DeleteRegistrationResponse;

                    /**
                     * Encodes the specified DeleteRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @param message DeleteRegistrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: isuxportal.proto.services.registration.IDeleteRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @param message DeleteRegistrationResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: isuxportal.proto.services.registration.IDeleteRegistrationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): isuxportal.proto.services.registration.DeleteRegistrationResponse;

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): isuxportal.proto.services.registration.DeleteRegistrationResponse;

                    /**
                     * Verifies a DeleteRegistrationResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteRegistrationResponse
                     */
                    public static fromObject(object: { [k: string]: any }): isuxportal.proto.services.registration.DeleteRegistrationResponse;

                    /**
                     * Creates a plain object from a DeleteRegistrationResponse message. Also converts values to other types if specified.
                     * @param message DeleteRegistrationResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: isuxportal.proto.services.registration.DeleteRegistrationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteRegistrationResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
