/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

$root.isuxportal = (function() {

    /**
     * Namespace isuxportal.
     * @exports isuxportal
     * @namespace
     */
    var isuxportal = {};

    isuxportal.proto = (function() {

        /**
         * Namespace proto.
         * @memberof isuxportal
         * @namespace
         */
        var proto = {};

        proto.Error = (function() {

            /**
             * Properties of an Error.
             * @memberof isuxportal.proto
             * @interface IError
             * @property {number|null} [code] Error code
             * @property {string|null} [name] Error name
             * @property {string|null} [humanMessage] Error humanMessage
             * @property {Array.<string>|null} [humanDescriptions] Error humanDescriptions
             * @property {isuxportal.proto.Error.IDebugInfo|null} [debugInfo] Error debugInfo
             */

            /**
             * Constructs a new Error.
             * @memberof isuxportal.proto
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {isuxportal.proto.IError=} [properties] Properties to set
             */
            function Error(properties) {
                this.humanDescriptions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Error code.
             * @member {number} code
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.code = 0;

            /**
             * Error name.
             * @member {string} name
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.name = "";

            /**
             * Error humanMessage.
             * @member {string} humanMessage
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.humanMessage = "";

            /**
             * Error humanDescriptions.
             * @member {Array.<string>} humanDescriptions
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.humanDescriptions = $util.emptyArray;

            /**
             * Error debugInfo.
             * @member {isuxportal.proto.Error.IDebugInfo|null|undefined} debugInfo
             * @memberof isuxportal.proto.Error
             * @instance
             */
            Error.prototype.debugInfo = null;

            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError=} [properties] Properties to set
             * @returns {isuxportal.proto.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };

            /**
             * Encodes the specified Error message. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @function encode
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.humanMessage != null && Object.hasOwnProperty.call(message, "humanMessage"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.humanMessage);
                if (message.humanDescriptions != null && message.humanDescriptions.length)
                    for (var i = 0; i < message.humanDescriptions.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.humanDescriptions[i]);
                if (message.debugInfo != null && Object.hasOwnProperty.call(message, "debugInfo"))
                    $root.isuxportal.proto.Error.DebugInfo.encode(message.debugInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link isuxportal.proto.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof isuxportal.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {isuxportal.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.int32();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.humanMessage = reader.string();
                        break;
                    case 4:
                        if (!(message.humanDescriptions && message.humanDescriptions.length))
                            message.humanDescriptions = [];
                        message.humanDescriptions.push(reader.string());
                        break;
                    case 16:
                        message.debugInfo = $root.isuxportal.proto.Error.DebugInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof isuxportal.proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {isuxportal.proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Error message.
             * @function verify
             * @memberof isuxportal.proto.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.humanMessage != null && message.hasOwnProperty("humanMessage"))
                    if (!$util.isString(message.humanMessage))
                        return "humanMessage: string expected";
                if (message.humanDescriptions != null && message.hasOwnProperty("humanDescriptions")) {
                    if (!Array.isArray(message.humanDescriptions))
                        return "humanDescriptions: array expected";
                    for (var i = 0; i < message.humanDescriptions.length; ++i)
                        if (!$util.isString(message.humanDescriptions[i]))
                            return "humanDescriptions: string[] expected";
                }
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo")) {
                    var error = $root.isuxportal.proto.Error.DebugInfo.verify(message.debugInfo);
                    if (error)
                        return "debugInfo." + error;
                }
                return null;
            };

            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof isuxportal.proto.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {isuxportal.proto.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.isuxportal.proto.Error)
                    return object;
                var message = new $root.isuxportal.proto.Error();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.name != null)
                    message.name = String(object.name);
                if (object.humanMessage != null)
                    message.humanMessage = String(object.humanMessage);
                if (object.humanDescriptions) {
                    if (!Array.isArray(object.humanDescriptions))
                        throw TypeError(".isuxportal.proto.Error.humanDescriptions: array expected");
                    message.humanDescriptions = [];
                    for (var i = 0; i < object.humanDescriptions.length; ++i)
                        message.humanDescriptions[i] = String(object.humanDescriptions[i]);
                }
                if (object.debugInfo != null) {
                    if (typeof object.debugInfo !== "object")
                        throw TypeError(".isuxportal.proto.Error.debugInfo: object expected");
                    message.debugInfo = $root.isuxportal.proto.Error.DebugInfo.fromObject(object.debugInfo);
                }
                return message;
            };

            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof isuxportal.proto.Error
             * @static
             * @param {isuxportal.proto.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.humanDescriptions = [];
                if (options.defaults) {
                    object.code = 0;
                    object.name = "";
                    object.humanMessage = "";
                    object.debugInfo = null;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.humanMessage != null && message.hasOwnProperty("humanMessage"))
                    object.humanMessage = message.humanMessage;
                if (message.humanDescriptions && message.humanDescriptions.length) {
                    object.humanDescriptions = [];
                    for (var j = 0; j < message.humanDescriptions.length; ++j)
                        object.humanDescriptions[j] = message.humanDescriptions[j];
                }
                if (message.debugInfo != null && message.hasOwnProperty("debugInfo"))
                    object.debugInfo = $root.isuxportal.proto.Error.DebugInfo.toObject(message.debugInfo, options);
                return object;
            };

            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof isuxportal.proto.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            Error.DebugInfo = (function() {

                /**
                 * Properties of a DebugInfo.
                 * @memberof isuxportal.proto.Error
                 * @interface IDebugInfo
                 * @property {string|null} [exception] DebugInfo exception
                 * @property {Array.<string>|null} [trace] DebugInfo trace
                 * @property {Array.<string>|null} [applicationTrace] DebugInfo applicationTrace
                 * @property {Array.<string>|null} [frameworkTrace] DebugInfo frameworkTrace
                 */

                /**
                 * Constructs a new DebugInfo.
                 * @memberof isuxportal.proto.Error
                 * @classdesc Represents a DebugInfo.
                 * @implements IDebugInfo
                 * @constructor
                 * @param {isuxportal.proto.Error.IDebugInfo=} [properties] Properties to set
                 */
                function DebugInfo(properties) {
                    this.trace = [];
                    this.applicationTrace = [];
                    this.frameworkTrace = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DebugInfo exception.
                 * @member {string} exception
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.exception = "";

                /**
                 * DebugInfo trace.
                 * @member {Array.<string>} trace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.trace = $util.emptyArray;

                /**
                 * DebugInfo applicationTrace.
                 * @member {Array.<string>} applicationTrace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.applicationTrace = $util.emptyArray;

                /**
                 * DebugInfo frameworkTrace.
                 * @member {Array.<string>} frameworkTrace
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 */
                DebugInfo.prototype.frameworkTrace = $util.emptyArray;

                /**
                 * Creates a new DebugInfo instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo=} [properties] Properties to set
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo instance
                 */
                DebugInfo.create = function create(properties) {
                    return new DebugInfo(properties);
                };

                /**
                 * Encodes the specified DebugInfo message. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.exception != null && Object.hasOwnProperty.call(message, "exception"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.exception);
                    if (message.trace != null && message.trace.length)
                        for (var i = 0; i < message.trace.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.trace[i]);
                    if (message.applicationTrace != null && message.applicationTrace.length)
                        for (var i = 0; i < message.applicationTrace.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.applicationTrace[i]);
                    if (message.frameworkTrace != null && message.frameworkTrace.length)
                        for (var i = 0; i < message.frameworkTrace.length; ++i)
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.frameworkTrace[i]);
                    return writer;
                };

                /**
                 * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link isuxportal.proto.Error.DebugInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.IDebugInfo} message DebugInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DebugInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.Error.DebugInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.exception = reader.string();
                            break;
                        case 2:
                            if (!(message.trace && message.trace.length))
                                message.trace = [];
                            message.trace.push(reader.string());
                            break;
                        case 3:
                            if (!(message.applicationTrace && message.applicationTrace.length))
                                message.applicationTrace = [];
                            message.applicationTrace.push(reader.string());
                            break;
                        case 4:
                            if (!(message.frameworkTrace && message.frameworkTrace.length))
                                message.frameworkTrace = [];
                            message.frameworkTrace.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DebugInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DebugInfo message.
                 * @function verify
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DebugInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.exception != null && message.hasOwnProperty("exception"))
                        if (!$util.isString(message.exception))
                            return "exception: string expected";
                    if (message.trace != null && message.hasOwnProperty("trace")) {
                        if (!Array.isArray(message.trace))
                            return "trace: array expected";
                        for (var i = 0; i < message.trace.length; ++i)
                            if (!$util.isString(message.trace[i]))
                                return "trace: string[] expected";
                    }
                    if (message.applicationTrace != null && message.hasOwnProperty("applicationTrace")) {
                        if (!Array.isArray(message.applicationTrace))
                            return "applicationTrace: array expected";
                        for (var i = 0; i < message.applicationTrace.length; ++i)
                            if (!$util.isString(message.applicationTrace[i]))
                                return "applicationTrace: string[] expected";
                    }
                    if (message.frameworkTrace != null && message.hasOwnProperty("frameworkTrace")) {
                        if (!Array.isArray(message.frameworkTrace))
                            return "frameworkTrace: array expected";
                        for (var i = 0; i < message.frameworkTrace.length; ++i)
                            if (!$util.isString(message.frameworkTrace[i]))
                                return "frameworkTrace: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.Error.DebugInfo} DebugInfo
                 */
                DebugInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.Error.DebugInfo)
                        return object;
                    var message = new $root.isuxportal.proto.Error.DebugInfo();
                    if (object.exception != null)
                        message.exception = String(object.exception);
                    if (object.trace) {
                        if (!Array.isArray(object.trace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.trace: array expected");
                        message.trace = [];
                        for (var i = 0; i < object.trace.length; ++i)
                            message.trace[i] = String(object.trace[i]);
                    }
                    if (object.applicationTrace) {
                        if (!Array.isArray(object.applicationTrace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.applicationTrace: array expected");
                        message.applicationTrace = [];
                        for (var i = 0; i < object.applicationTrace.length; ++i)
                            message.applicationTrace[i] = String(object.applicationTrace[i]);
                    }
                    if (object.frameworkTrace) {
                        if (!Array.isArray(object.frameworkTrace))
                            throw TypeError(".isuxportal.proto.Error.DebugInfo.frameworkTrace: array expected");
                        message.frameworkTrace = [];
                        for (var i = 0; i < object.frameworkTrace.length; ++i)
                            message.frameworkTrace[i] = String(object.frameworkTrace[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @static
                 * @param {isuxportal.proto.Error.DebugInfo} message DebugInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DebugInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.trace = [];
                        object.applicationTrace = [];
                        object.frameworkTrace = [];
                    }
                    if (options.defaults)
                        object.exception = "";
                    if (message.exception != null && message.hasOwnProperty("exception"))
                        object.exception = message.exception;
                    if (message.trace && message.trace.length) {
                        object.trace = [];
                        for (var j = 0; j < message.trace.length; ++j)
                            object.trace[j] = message.trace[j];
                    }
                    if (message.applicationTrace && message.applicationTrace.length) {
                        object.applicationTrace = [];
                        for (var j = 0; j < message.applicationTrace.length; ++j)
                            object.applicationTrace[j] = message.applicationTrace[j];
                    }
                    if (message.frameworkTrace && message.frameworkTrace.length) {
                        object.frameworkTrace = [];
                        for (var j = 0; j < message.frameworkTrace.length; ++j)
                            object.frameworkTrace[j] = message.frameworkTrace[j];
                    }
                    return object;
                };

                /**
                 * Converts this DebugInfo to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.Error.DebugInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DebugInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DebugInfo;
            })();

            return Error;
        })();

        proto.resources = (function() {

            /**
             * Namespace resources.
             * @memberof isuxportal.proto
             * @namespace
             */
            var resources = {};

            resources.BenchmarkJob = (function() {

                /**
                 * Properties of a BenchmarkJob.
                 * @memberof isuxportal.proto.resources
                 * @interface IBenchmarkJob
                 * @property {number|Long|null} [id] BenchmarkJob id
                 * @property {number|Long|null} [teamId] BenchmarkJob teamId
                 * @property {number|Long|null} [targetId] BenchmarkJob targetId
                 * @property {isuxportal.proto.resources.BenchmarkJob.Status|null} [status] BenchmarkJob status
                 * @property {google.protobuf.ITimestamp|null} [createdAt] BenchmarkJob createdAt
                 * @property {google.protobuf.ITimestamp|null} [updatedAt] BenchmarkJob updatedAt
                 * @property {google.protobuf.ITimestamp|null} [startedAt] BenchmarkJob startedAt
                 * @property {google.protobuf.ITimestamp|null} [finishedAt] BenchmarkJob finishedAt
                 * @property {number|Long|null} [score] BenchmarkJob score
                 * @property {string|null} [instanceName] BenchmarkJob instanceName
                 * @property {isuxportal.proto.resources.ITeam|null} [team] BenchmarkJob team
                 * @property {isuxportal.proto.resources.IContestantInstance|null} [target] BenchmarkJob target
                 * @property {isuxportal.proto.resources.IBenchmarkResult|null} [result] BenchmarkJob result
                 */

                /**
                 * Constructs a new BenchmarkJob.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a BenchmarkJob.
                 * @implements IBenchmarkJob
                 * @constructor
                 * @param {isuxportal.proto.resources.IBenchmarkJob=} [properties] Properties to set
                 */
                function BenchmarkJob(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BenchmarkJob id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob targetId.
                 * @member {number|Long} targetId
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob status.
                 * @member {isuxportal.proto.resources.BenchmarkJob.Status} status
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.status = 0;

                /**
                 * BenchmarkJob createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.createdAt = null;

                /**
                 * BenchmarkJob updatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} updatedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.updatedAt = null;

                /**
                 * BenchmarkJob startedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} startedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.startedAt = null;

                /**
                 * BenchmarkJob finishedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} finishedAt
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.finishedAt = null;

                /**
                 * BenchmarkJob score.
                 * @member {number|Long} score
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkJob instanceName.
                 * @member {string} instanceName
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.instanceName = "";

                /**
                 * BenchmarkJob team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.team = null;

                /**
                 * BenchmarkJob target.
                 * @member {isuxportal.proto.resources.IContestantInstance|null|undefined} target
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.target = null;

                /**
                 * BenchmarkJob result.
                 * @member {isuxportal.proto.resources.IBenchmarkResult|null|undefined} result
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 */
                BenchmarkJob.prototype.result = null;

                /**
                 * Creates a new BenchmarkJob instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob instance
                 */
                BenchmarkJob.create = function create(properties) {
                    return new BenchmarkJob(properties);
                };

                /**
                 * Encodes the specified BenchmarkJob message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob} message BenchmarkJob message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkJob.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.targetId);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.updatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                        $root.google.protobuf.Timestamp.encode(message.startedAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                        $root.google.protobuf.Timestamp.encode(message.finishedAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int64(message.score);
                    if (message.instanceName != null && Object.hasOwnProperty.call(message, "instanceName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.instanceName);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    if (message.target != null && Object.hasOwnProperty.call(message, "target"))
                        $root.isuxportal.proto.resources.ContestantInstance.encode(message.target, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                        $root.isuxportal.proto.resources.BenchmarkResult.encode(message.result, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified BenchmarkJob message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkJob.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkJob} message BenchmarkJob message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkJob.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkJob.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkJob();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.targetId = reader.int64();
                            break;
                        case 4:
                            message.status = reader.int32();
                            break;
                        case 5:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.updatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.startedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.finishedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.score = reader.int64();
                            break;
                        case 10:
                            message.instanceName = reader.string();
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        case 17:
                            message.target = $root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32());
                            break;
                        case 18:
                            message.result = $root.isuxportal.proto.resources.BenchmarkResult.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BenchmarkJob message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkJob.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BenchmarkJob message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BenchmarkJob.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.targetId != null && message.hasOwnProperty("targetId"))
                        if (!$util.isInteger(message.targetId) && !(message.targetId && $util.isInteger(message.targetId.low) && $util.isInteger(message.targetId.high)))
                            return "targetId: integer|Long expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                            break;
                        }
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.updatedAt);
                        if (error)
                            return "updatedAt." + error;
                    }
                    if (message.startedAt != null && message.hasOwnProperty("startedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.startedAt);
                        if (error)
                            return "startedAt." + error;
                    }
                    if (message.finishedAt != null && message.hasOwnProperty("finishedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.finishedAt);
                        if (error)
                            return "finishedAt." + error;
                    }
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                            return "score: integer|Long expected";
                    if (message.instanceName != null && message.hasOwnProperty("instanceName"))
                        if (!$util.isString(message.instanceName))
                            return "instanceName: string expected";
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    if (message.target != null && message.hasOwnProperty("target")) {
                        var error = $root.isuxportal.proto.resources.ContestantInstance.verify(message.target);
                        if (error)
                            return "target." + error;
                    }
                    if (message.result != null && message.hasOwnProperty("result")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.verify(message.result);
                        if (error)
                            return "result." + error;
                    }
                    return null;
                };

                /**
                 * Creates a BenchmarkJob message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.BenchmarkJob} BenchmarkJob
                 */
                BenchmarkJob.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.BenchmarkJob)
                        return object;
                    var message = new $root.isuxportal.proto.resources.BenchmarkJob();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.targetId != null)
                        if ($util.Long)
                            (message.targetId = $util.Long.fromValue(object.targetId)).unsigned = false;
                        else if (typeof object.targetId === "string")
                            message.targetId = parseInt(object.targetId, 10);
                        else if (typeof object.targetId === "number")
                            message.targetId = object.targetId;
                        else if (typeof object.targetId === "object")
                            message.targetId = new $util.LongBits(object.targetId.low >>> 0, object.targetId.high >>> 0).toNumber();
                    switch (object.status) {
                    case "PENDING":
                    case 0:
                        message.status = 0;
                        break;
                    case "RUNNING":
                    case 1:
                        message.status = 1;
                        break;
                    case "ERRORED":
                    case 2:
                        message.status = 2;
                        break;
                    case "CANCELLED":
                    case 3:
                        message.status = 3;
                        break;
                    case "FINISHED":
                    case 4:
                        message.status = 4;
                        break;
                    }
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.updatedAt != null) {
                        if (typeof object.updatedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.updatedAt: object expected");
                        message.updatedAt = $root.google.protobuf.Timestamp.fromObject(object.updatedAt);
                    }
                    if (object.startedAt != null) {
                        if (typeof object.startedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.startedAt: object expected");
                        message.startedAt = $root.google.protobuf.Timestamp.fromObject(object.startedAt);
                    }
                    if (object.finishedAt != null) {
                        if (typeof object.finishedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.finishedAt: object expected");
                        message.finishedAt = $root.google.protobuf.Timestamp.fromObject(object.finishedAt);
                    }
                    if (object.score != null)
                        if ($util.Long)
                            (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                        else if (typeof object.score === "string")
                            message.score = parseInt(object.score, 10);
                        else if (typeof object.score === "number")
                            message.score = object.score;
                        else if (typeof object.score === "object")
                            message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                    if (object.instanceName != null)
                        message.instanceName = String(object.instanceName);
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    if (object.target != null) {
                        if (typeof object.target !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.target: object expected");
                        message.target = $root.isuxportal.proto.resources.ContestantInstance.fromObject(object.target);
                    }
                    if (object.result != null) {
                        if (typeof object.result !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkJob.result: object expected");
                        message.result = $root.isuxportal.proto.resources.BenchmarkResult.fromObject(object.result);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BenchmarkJob message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @static
                 * @param {isuxportal.proto.resources.BenchmarkJob} message BenchmarkJob
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BenchmarkJob.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.targetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.targetId = options.longs === String ? "0" : 0;
                        object.status = options.enums === String ? "PENDING" : 0;
                        object.createdAt = null;
                        object.updatedAt = null;
                        object.startedAt = null;
                        object.finishedAt = null;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.score = options.longs === String ? "0" : 0;
                        object.instanceName = "";
                        object.team = null;
                        object.target = null;
                        object.result = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.targetId != null && message.hasOwnProperty("targetId"))
                        if (typeof message.targetId === "number")
                            object.targetId = options.longs === String ? String(message.targetId) : message.targetId;
                        else
                            object.targetId = options.longs === String ? $util.Long.prototype.toString.call(message.targetId) : options.longs === Number ? new $util.LongBits(message.targetId.low >>> 0, message.targetId.high >>> 0).toNumber() : message.targetId;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.isuxportal.proto.resources.BenchmarkJob.Status[message.status] : message.status;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                        object.updatedAt = $root.google.protobuf.Timestamp.toObject(message.updatedAt, options);
                    if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                        object.startedAt = $root.google.protobuf.Timestamp.toObject(message.startedAt, options);
                    if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                        object.finishedAt = $root.google.protobuf.Timestamp.toObject(message.finishedAt, options);
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (typeof message.score === "number")
                            object.score = options.longs === String ? String(message.score) : message.score;
                        else
                            object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                    if (message.instanceName != null && message.hasOwnProperty("instanceName"))
                        object.instanceName = message.instanceName;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    if (message.target != null && message.hasOwnProperty("target"))
                        object.target = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.target, options);
                    if (message.result != null && message.hasOwnProperty("result"))
                        object.result = $root.isuxportal.proto.resources.BenchmarkResult.toObject(message.result, options);
                    return object;
                };

                /**
                 * Converts this BenchmarkJob to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.BenchmarkJob
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BenchmarkJob.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Status enum.
                 * @name isuxportal.proto.resources.BenchmarkJob.Status
                 * @enum {number}
                 * @property {number} PENDING=0 PENDING value
                 * @property {number} RUNNING=1 RUNNING value
                 * @property {number} ERRORED=2 ERRORED value
                 * @property {number} CANCELLED=3 CANCELLED value
                 * @property {number} FINISHED=4 FINISHED value
                 */
                BenchmarkJob.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "PENDING"] = 0;
                    values[valuesById[1] = "RUNNING"] = 1;
                    values[valuesById[2] = "ERRORED"] = 2;
                    values[valuesById[3] = "CANCELLED"] = 3;
                    values[valuesById[4] = "FINISHED"] = 4;
                    return values;
                })();

                return BenchmarkJob;
            })();

            resources.BenchmarkResult = (function() {

                /**
                 * Properties of a BenchmarkResult.
                 * @memberof isuxportal.proto.resources
                 * @interface IBenchmarkResult
                 * @property {boolean|null} [finished] BenchmarkResult finished
                 * @property {boolean|null} [passed] BenchmarkResult passed
                 * @property {number|Long|null} [score] BenchmarkResult score
                 * @property {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null} [scoreBreakdown] BenchmarkResult scoreBreakdown
                 * @property {isuxportal.proto.resources.BenchmarkResult.IExecution|null} [execution] BenchmarkResult execution
                 * @property {google.protobuf.ITimestamp|null} [markedAt] BenchmarkResult markedAt
                 * @property {isuxportal.proto.resources.ISurveyResponse|null} [surveyResponse] BenchmarkResult surveyResponse
                 */

                /**
                 * Constructs a new BenchmarkResult.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a BenchmarkResult.
                 * @implements IBenchmarkResult
                 * @constructor
                 * @param {isuxportal.proto.resources.IBenchmarkResult=} [properties] Properties to set
                 */
                function BenchmarkResult(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * BenchmarkResult finished.
                 * @member {boolean} finished
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.finished = false;

                /**
                 * BenchmarkResult passed.
                 * @member {boolean} passed
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.passed = false;

                /**
                 * BenchmarkResult score.
                 * @member {number|Long} score
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * BenchmarkResult scoreBreakdown.
                 * @member {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown|null|undefined} scoreBreakdown
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.scoreBreakdown = null;

                /**
                 * BenchmarkResult execution.
                 * @member {isuxportal.proto.resources.BenchmarkResult.IExecution|null|undefined} execution
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.execution = null;

                /**
                 * BenchmarkResult markedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} markedAt
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.markedAt = null;

                /**
                 * BenchmarkResult surveyResponse.
                 * @member {isuxportal.proto.resources.ISurveyResponse|null|undefined} surveyResponse
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 */
                BenchmarkResult.prototype.surveyResponse = null;

                /**
                 * Creates a new BenchmarkResult instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult instance
                 */
                BenchmarkResult.create = function create(properties) {
                    return new BenchmarkResult(properties);
                };

                /**
                 * Encodes the specified BenchmarkResult message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult} message BenchmarkResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkResult.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.finished != null && Object.hasOwnProperty.call(message, "finished"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.finished);
                    if (message.passed != null && Object.hasOwnProperty.call(message, "passed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.passed);
                    if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.score);
                    if (message.scoreBreakdown != null && Object.hasOwnProperty.call(message, "scoreBreakdown"))
                        $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.encode(message.scoreBreakdown, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.execution != null && Object.hasOwnProperty.call(message, "execution"))
                        $root.isuxportal.proto.resources.BenchmarkResult.Execution.encode(message.execution, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.markedAt != null && Object.hasOwnProperty.call(message, "markedAt"))
                        $root.google.protobuf.Timestamp.encode(message.markedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.surveyResponse != null && Object.hasOwnProperty.call(message, "surveyResponse"))
                        $root.isuxportal.proto.resources.SurveyResponse.encode(message.surveyResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified BenchmarkResult message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.IBenchmarkResult} message BenchmarkResult message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BenchmarkResult.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkResult.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.finished = reader.bool();
                            break;
                        case 2:
                            message.passed = reader.bool();
                            break;
                        case 3:
                            message.score = reader.int64();
                            break;
                        case 4:
                            message.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.markedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.surveyResponse = $root.isuxportal.proto.resources.SurveyResponse.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a BenchmarkResult message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BenchmarkResult.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a BenchmarkResult message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BenchmarkResult.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.finished != null && message.hasOwnProperty("finished"))
                        if (typeof message.finished !== "boolean")
                            return "finished: boolean expected";
                    if (message.passed != null && message.hasOwnProperty("passed"))
                        if (typeof message.passed !== "boolean")
                            return "passed: boolean expected";
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                            return "score: integer|Long expected";
                    if (message.scoreBreakdown != null && message.hasOwnProperty("scoreBreakdown")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify(message.scoreBreakdown);
                        if (error)
                            return "scoreBreakdown." + error;
                    }
                    if (message.execution != null && message.hasOwnProperty("execution")) {
                        var error = $root.isuxportal.proto.resources.BenchmarkResult.Execution.verify(message.execution);
                        if (error)
                            return "execution." + error;
                    }
                    if (message.markedAt != null && message.hasOwnProperty("markedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.markedAt);
                        if (error)
                            return "markedAt." + error;
                    }
                    if (message.surveyResponse != null && message.hasOwnProperty("surveyResponse")) {
                        var error = $root.isuxportal.proto.resources.SurveyResponse.verify(message.surveyResponse);
                        if (error)
                            return "surveyResponse." + error;
                    }
                    return null;
                };

                /**
                 * Creates a BenchmarkResult message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.BenchmarkResult} BenchmarkResult
                 */
                BenchmarkResult.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult)
                        return object;
                    var message = new $root.isuxportal.proto.resources.BenchmarkResult();
                    if (object.finished != null)
                        message.finished = Boolean(object.finished);
                    if (object.passed != null)
                        message.passed = Boolean(object.passed);
                    if (object.score != null)
                        if ($util.Long)
                            (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                        else if (typeof object.score === "string")
                            message.score = parseInt(object.score, 10);
                        else if (typeof object.score === "number")
                            message.score = object.score;
                        else if (typeof object.score === "object")
                            message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                    if (object.scoreBreakdown != null) {
                        if (typeof object.scoreBreakdown !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.scoreBreakdown: object expected");
                        message.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.fromObject(object.scoreBreakdown);
                    }
                    if (object.execution != null) {
                        if (typeof object.execution !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.execution: object expected");
                        message.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.fromObject(object.execution);
                    }
                    if (object.markedAt != null) {
                        if (typeof object.markedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.markedAt: object expected");
                        message.markedAt = $root.google.protobuf.Timestamp.fromObject(object.markedAt);
                    }
                    if (object.surveyResponse != null) {
                        if (typeof object.surveyResponse !== "object")
                            throw TypeError(".isuxportal.proto.resources.BenchmarkResult.surveyResponse: object expected");
                        message.surveyResponse = $root.isuxportal.proto.resources.SurveyResponse.fromObject(object.surveyResponse);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a BenchmarkResult message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @static
                 * @param {isuxportal.proto.resources.BenchmarkResult} message BenchmarkResult
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BenchmarkResult.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.finished = false;
                        object.passed = false;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.score = options.longs === String ? "0" : 0;
                        object.scoreBreakdown = null;
                        object.execution = null;
                        object.markedAt = null;
                        object.surveyResponse = null;
                    }
                    if (message.finished != null && message.hasOwnProperty("finished"))
                        object.finished = message.finished;
                    if (message.passed != null && message.hasOwnProperty("passed"))
                        object.passed = message.passed;
                    if (message.score != null && message.hasOwnProperty("score"))
                        if (typeof message.score === "number")
                            object.score = options.longs === String ? String(message.score) : message.score;
                        else
                            object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                    if (message.scoreBreakdown != null && message.hasOwnProperty("scoreBreakdown"))
                        object.scoreBreakdown = $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.toObject(message.scoreBreakdown, options);
                    if (message.execution != null && message.hasOwnProperty("execution"))
                        object.execution = $root.isuxportal.proto.resources.BenchmarkResult.Execution.toObject(message.execution, options);
                    if (message.markedAt != null && message.hasOwnProperty("markedAt"))
                        object.markedAt = $root.google.protobuf.Timestamp.toObject(message.markedAt, options);
                    if (message.surveyResponse != null && message.hasOwnProperty("surveyResponse"))
                        object.surveyResponse = $root.isuxportal.proto.resources.SurveyResponse.toObject(message.surveyResponse, options);
                    return object;
                };

                /**
                 * Converts this BenchmarkResult to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.BenchmarkResult
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BenchmarkResult.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                BenchmarkResult.ScoreBreakdown = (function() {

                    /**
                     * Properties of a ScoreBreakdown.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @interface IScoreBreakdown
                     * @property {number|Long|null} [raw] ScoreBreakdown raw
                     * @property {number|Long|null} [deduction] ScoreBreakdown deduction
                     */

                    /**
                     * Constructs a new ScoreBreakdown.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @classdesc Represents a ScoreBreakdown.
                     * @implements IScoreBreakdown
                     * @constructor
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown=} [properties] Properties to set
                     */
                    function ScoreBreakdown(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ScoreBreakdown raw.
                     * @member {number|Long} raw
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     */
                    ScoreBreakdown.prototype.raw = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ScoreBreakdown deduction.
                     * @member {number|Long} deduction
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     */
                    ScoreBreakdown.prototype.deduction = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ScoreBreakdown instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown instance
                     */
                    ScoreBreakdown.create = function create(properties) {
                        return new ScoreBreakdown(properties);
                    };

                    /**
                     * Encodes the specified ScoreBreakdown message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown} message ScoreBreakdown message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreBreakdown.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.raw != null && Object.hasOwnProperty.call(message, "raw"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.raw);
                        if (message.deduction != null && Object.hasOwnProperty.call(message, "deduction"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.deduction);
                        return writer;
                    };

                    /**
                     * Encodes the specified ScoreBreakdown message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IScoreBreakdown} message ScoreBreakdown message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ScoreBreakdown.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreBreakdown.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.raw = reader.int64();
                                break;
                            case 2:
                                message.deduction = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ScoreBreakdown message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ScoreBreakdown.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ScoreBreakdown message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ScoreBreakdown.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.raw != null && message.hasOwnProperty("raw"))
                            if (!$util.isInteger(message.raw) && !(message.raw && $util.isInteger(message.raw.low) && $util.isInteger(message.raw.high)))
                                return "raw: integer|Long expected";
                        if (message.deduction != null && message.hasOwnProperty("deduction"))
                            if (!$util.isInteger(message.deduction) && !(message.deduction && $util.isInteger(message.deduction.low) && $util.isInteger(message.deduction.high)))
                                return "deduction: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ScoreBreakdown message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} ScoreBreakdown
                     */
                    ScoreBreakdown.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown)
                            return object;
                        var message = new $root.isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown();
                        if (object.raw != null)
                            if ($util.Long)
                                (message.raw = $util.Long.fromValue(object.raw)).unsigned = false;
                            else if (typeof object.raw === "string")
                                message.raw = parseInt(object.raw, 10);
                            else if (typeof object.raw === "number")
                                message.raw = object.raw;
                            else if (typeof object.raw === "object")
                                message.raw = new $util.LongBits(object.raw.low >>> 0, object.raw.high >>> 0).toNumber();
                        if (object.deduction != null)
                            if ($util.Long)
                                (message.deduction = $util.Long.fromValue(object.deduction)).unsigned = false;
                            else if (typeof object.deduction === "string")
                                message.deduction = parseInt(object.deduction, 10);
                            else if (typeof object.deduction === "number")
                                message.deduction = object.deduction;
                            else if (typeof object.deduction === "object")
                                message.deduction = new $util.LongBits(object.deduction.low >>> 0, object.deduction.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a ScoreBreakdown message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown} message ScoreBreakdown
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ScoreBreakdown.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.raw = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.raw = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.deduction = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.deduction = options.longs === String ? "0" : 0;
                        }
                        if (message.raw != null && message.hasOwnProperty("raw"))
                            if (typeof message.raw === "number")
                                object.raw = options.longs === String ? String(message.raw) : message.raw;
                            else
                                object.raw = options.longs === String ? $util.Long.prototype.toString.call(message.raw) : options.longs === Number ? new $util.LongBits(message.raw.low >>> 0, message.raw.high >>> 0).toNumber() : message.raw;
                        if (message.deduction != null && message.hasOwnProperty("deduction"))
                            if (typeof message.deduction === "number")
                                object.deduction = options.longs === String ? String(message.deduction) : message.deduction;
                            else
                                object.deduction = options.longs === String ? $util.Long.prototype.toString.call(message.deduction) : options.longs === Number ? new $util.LongBits(message.deduction.low >>> 0, message.deduction.high >>> 0).toNumber() : message.deduction;
                        return object;
                    };

                    /**
                     * Converts this ScoreBreakdown to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.BenchmarkResult.ScoreBreakdown
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ScoreBreakdown.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ScoreBreakdown;
                })();

                BenchmarkResult.Execution = (function() {

                    /**
                     * Properties of an Execution.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @interface IExecution
                     * @property {string|null} [reason] Execution reason
                     * @property {string|null} [stdout] Execution stdout
                     * @property {string|null} [stderr] Execution stderr
                     * @property {number|null} [exitStatus] Execution exitStatus
                     * @property {number|null} [exitSignal] Execution exitSignal
                     * @property {boolean|null} [signaled] Execution signaled
                     */

                    /**
                     * Constructs a new Execution.
                     * @memberof isuxportal.proto.resources.BenchmarkResult
                     * @classdesc Represents an Execution.
                     * @implements IExecution
                     * @constructor
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution=} [properties] Properties to set
                     */
                    function Execution(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Execution reason.
                     * @member {string} reason
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.reason = "";

                    /**
                     * Execution stdout.
                     * @member {string} stdout
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.stdout = "";

                    /**
                     * Execution stderr.
                     * @member {string} stderr
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.stderr = "";

                    /**
                     * Execution exitStatus.
                     * @member {number} exitStatus
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.exitStatus = 0;

                    /**
                     * Execution exitSignal.
                     * @member {number} exitSignal
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.exitSignal = 0;

                    /**
                     * Execution signaled.
                     * @member {boolean} signaled
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     */
                    Execution.prototype.signaled = false;

                    /**
                     * Creates a new Execution instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution instance
                     */
                    Execution.create = function create(properties) {
                        return new Execution(properties);
                    };

                    /**
                     * Encodes the specified Execution message. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution} message Execution message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Execution.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                        if (message.stdout != null && Object.hasOwnProperty.call(message, "stdout"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stdout);
                        if (message.stderr != null && Object.hasOwnProperty.call(message, "stderr"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.stderr);
                        if (message.exitStatus != null && Object.hasOwnProperty.call(message, "exitStatus"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.exitStatus);
                        if (message.exitSignal != null && Object.hasOwnProperty.call(message, "exitSignal"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.exitSignal);
                        if (message.signaled != null && Object.hasOwnProperty.call(message, "signaled"))
                            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.signaled);
                        return writer;
                    };

                    /**
                     * Encodes the specified Execution message, length delimited. Does not implicitly {@link isuxportal.proto.resources.BenchmarkResult.Execution.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.IExecution} message Execution message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Execution.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an Execution message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Execution.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.BenchmarkResult.Execution();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.reason = reader.string();
                                break;
                            case 2:
                                message.stdout = reader.string();
                                break;
                            case 3:
                                message.stderr = reader.string();
                                break;
                            case 4:
                                message.exitStatus = reader.int32();
                                break;
                            case 5:
                                message.exitSignal = reader.int32();
                                break;
                            case 6:
                                message.signaled = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an Execution message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Execution.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an Execution message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Execution.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        if (message.stdout != null && message.hasOwnProperty("stdout"))
                            if (!$util.isString(message.stdout))
                                return "stdout: string expected";
                        if (message.stderr != null && message.hasOwnProperty("stderr"))
                            if (!$util.isString(message.stderr))
                                return "stderr: string expected";
                        if (message.exitStatus != null && message.hasOwnProperty("exitStatus"))
                            if (!$util.isInteger(message.exitStatus))
                                return "exitStatus: integer expected";
                        if (message.exitSignal != null && message.hasOwnProperty("exitSignal"))
                            if (!$util.isInteger(message.exitSignal))
                                return "exitSignal: integer expected";
                        if (message.signaled != null && message.hasOwnProperty("signaled"))
                            if (typeof message.signaled !== "boolean")
                                return "signaled: boolean expected";
                        return null;
                    };

                    /**
                     * Creates an Execution message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.BenchmarkResult.Execution} Execution
                     */
                    Execution.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.BenchmarkResult.Execution)
                            return object;
                        var message = new $root.isuxportal.proto.resources.BenchmarkResult.Execution();
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        if (object.stdout != null)
                            message.stdout = String(object.stdout);
                        if (object.stderr != null)
                            message.stderr = String(object.stderr);
                        if (object.exitStatus != null)
                            message.exitStatus = object.exitStatus | 0;
                        if (object.exitSignal != null)
                            message.exitSignal = object.exitSignal | 0;
                        if (object.signaled != null)
                            message.signaled = Boolean(object.signaled);
                        return message;
                    };

                    /**
                     * Creates a plain object from an Execution message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @static
                     * @param {isuxportal.proto.resources.BenchmarkResult.Execution} message Execution
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Execution.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.reason = "";
                            object.stdout = "";
                            object.stderr = "";
                            object.exitStatus = 0;
                            object.exitSignal = 0;
                            object.signaled = false;
                        }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        if (message.stdout != null && message.hasOwnProperty("stdout"))
                            object.stdout = message.stdout;
                        if (message.stderr != null && message.hasOwnProperty("stderr"))
                            object.stderr = message.stderr;
                        if (message.exitStatus != null && message.hasOwnProperty("exitStatus"))
                            object.exitStatus = message.exitStatus;
                        if (message.exitSignal != null && message.hasOwnProperty("exitSignal"))
                            object.exitSignal = message.exitSignal;
                        if (message.signaled != null && message.hasOwnProperty("signaled"))
                            object.signaled = message.signaled;
                        return object;
                    };

                    /**
                     * Converts this Execution to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.BenchmarkResult.Execution
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Execution.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Execution;
                })();

                return BenchmarkResult;
            })();

            resources.ContestantInstance = (function() {

                /**
                 * Properties of a ContestantInstance.
                 * @memberof isuxportal.proto.resources
                 * @interface IContestantInstance
                 * @property {number|Long|null} [id] ContestantInstance id
                 * @property {string|null} [cloudId] ContestantInstance cloudId
                 * @property {number|Long|null} [teamId] ContestantInstance teamId
                 * @property {number|Long|null} [number] ContestantInstance number
                 * @property {string|null} [publicIpv4Address] ContestantInstance publicIpv4Address
                 * @property {string|null} [privateIpv4Address] ContestantInstance privateIpv4Address
                 * @property {isuxportal.proto.resources.ContestantInstance.Status|null} [status] ContestantInstance status
                 * @property {isuxportal.proto.resources.ITeam|null} [team] ContestantInstance team
                 */

                /**
                 * Constructs a new ContestantInstance.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a ContestantInstance.
                 * @implements IContestantInstance
                 * @constructor
                 * @param {isuxportal.proto.resources.IContestantInstance=} [properties] Properties to set
                 */
                function ContestantInstance(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ContestantInstance id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ContestantInstance cloudId.
                 * @member {string} cloudId
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.cloudId = "";

                /**
                 * ContestantInstance teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ContestantInstance number.
                 * @member {number|Long} number
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * ContestantInstance publicIpv4Address.
                 * @member {string} publicIpv4Address
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.publicIpv4Address = "";

                /**
                 * ContestantInstance privateIpv4Address.
                 * @member {string} privateIpv4Address
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.privateIpv4Address = "";

                /**
                 * ContestantInstance status.
                 * @member {isuxportal.proto.resources.ContestantInstance.Status} status
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.status = 0;

                /**
                 * ContestantInstance team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 */
                ContestantInstance.prototype.team = null;

                /**
                 * Creates a new ContestantInstance instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance instance
                 */
                ContestantInstance.create = function create(properties) {
                    return new ContestantInstance(properties);
                };

                /**
                 * Encodes the specified ContestantInstance message. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance} message ContestantInstance message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContestantInstance.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.cloudId != null && Object.hasOwnProperty.call(message, "cloudId"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.cloudId);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.number);
                    if (message.publicIpv4Address != null && Object.hasOwnProperty.call(message, "publicIpv4Address"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.publicIpv4Address);
                    if (message.privateIpv4Address != null && Object.hasOwnProperty.call(message, "privateIpv4Address"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.privateIpv4Address);
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 7, wireType 0 =*/56).int64(message.id);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ContestantInstance message, length delimited. Does not implicitly {@link isuxportal.proto.resources.ContestantInstance.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.IContestantInstance} message ContestantInstance message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ContestantInstance.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContestantInstance.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.ContestantInstance();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 7:
                            message.id = reader.int64();
                            break;
                        case 1:
                            message.cloudId = reader.string();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.number = reader.int64();
                            break;
                        case 4:
                            message.publicIpv4Address = reader.string();
                            break;
                        case 5:
                            message.privateIpv4Address = reader.string();
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ContestantInstance message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ContestantInstance.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ContestantInstance message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ContestantInstance.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.cloudId != null && message.hasOwnProperty("cloudId"))
                        if (!$util.isString(message.cloudId))
                            return "cloudId: string expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                            return "number: integer|Long expected";
                    if (message.publicIpv4Address != null && message.hasOwnProperty("publicIpv4Address"))
                        if (!$util.isString(message.publicIpv4Address))
                            return "publicIpv4Address: string expected";
                    if (message.privateIpv4Address != null && message.hasOwnProperty("privateIpv4Address"))
                        if (!$util.isString(message.privateIpv4Address))
                            return "privateIpv4Address: string expected";
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        }
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ContestantInstance message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.ContestantInstance} ContestantInstance
                 */
                ContestantInstance.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.ContestantInstance)
                        return object;
                    var message = new $root.isuxportal.proto.resources.ContestantInstance();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.cloudId != null)
                        message.cloudId = String(object.cloudId);
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.number != null)
                        if ($util.Long)
                            (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                        else if (typeof object.number === "string")
                            message.number = parseInt(object.number, 10);
                        else if (typeof object.number === "number")
                            message.number = object.number;
                        else if (typeof object.number === "object")
                            message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                    if (object.publicIpv4Address != null)
                        message.publicIpv4Address = String(object.publicIpv4Address);
                    if (object.privateIpv4Address != null)
                        message.privateIpv4Address = String(object.privateIpv4Address);
                    switch (object.status) {
                    case "UNKNOWN":
                    case 0:
                        message.status = 0;
                        break;
                    case "PENDING":
                    case 1:
                        message.status = 1;
                        break;
                    case "MODIFYING":
                    case 2:
                        message.status = 2;
                        break;
                    case "STOPPED":
                    case 3:
                        message.status = 3;
                        break;
                    case "RUNNING":
                    case 4:
                        message.status = 4;
                        break;
                    case "TERMINATED":
                    case 5:
                        message.status = 5;
                        break;
                    }
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.ContestantInstance.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ContestantInstance message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @static
                 * @param {isuxportal.proto.resources.ContestantInstance} message ContestantInstance
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ContestantInstance.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.cloudId = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.number = options.longs === String ? "0" : 0;
                        object.publicIpv4Address = "";
                        object.privateIpv4Address = "";
                        object.status = options.enums === String ? "UNKNOWN" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.team = null;
                    }
                    if (message.cloudId != null && message.hasOwnProperty("cloudId"))
                        object.cloudId = message.cloudId;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (typeof message.number === "number")
                            object.number = options.longs === String ? String(message.number) : message.number;
                        else
                            object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                    if (message.publicIpv4Address != null && message.hasOwnProperty("publicIpv4Address"))
                        object.publicIpv4Address = message.publicIpv4Address;
                    if (message.privateIpv4Address != null && message.hasOwnProperty("privateIpv4Address"))
                        object.privateIpv4Address = message.privateIpv4Address;
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.isuxportal.proto.resources.ContestantInstance.Status[message.status] : message.status;
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    return object;
                };

                /**
                 * Converts this ContestantInstance to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.ContestantInstance
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ContestantInstance.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Status enum.
                 * @name isuxportal.proto.resources.ContestantInstance.Status
                 * @enum {number}
                 * @property {number} UNKNOWN=0 UNKNOWN value
                 * @property {number} PENDING=1 PENDING value
                 * @property {number} MODIFYING=2 MODIFYING value
                 * @property {number} STOPPED=3 STOPPED value
                 * @property {number} RUNNING=4 RUNNING value
                 * @property {number} TERMINATED=5 TERMINATED value
                 */
                ContestantInstance.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "PENDING"] = 1;
                    values[valuesById[2] = "MODIFYING"] = 2;
                    values[valuesById[3] = "STOPPED"] = 3;
                    values[valuesById[4] = "RUNNING"] = 4;
                    values[valuesById[5] = "TERMINATED"] = 5;
                    return values;
                })();

                return ContestantInstance;
            })();

            resources.Team = (function() {

                /**
                 * Properties of a Team.
                 * @memberof isuxportal.proto.resources
                 * @interface ITeam
                 * @property {number|Long|null} [id] Team id
                 * @property {string|null} [name] Team name
                 * @property {number|Long|null} [leaderId] Team leaderId
                 * @property {Array.<number|Long>|null} [memberIds] Team memberIds
                 * @property {boolean|null} [finalParticipation] Team finalParticipation
                 * @property {boolean|null} [hidden] Team hidden
                 * @property {boolean|null} [withdrawn] Team withdrawn
                 * @property {boolean|null} [disqualified] Team disqualified
                 * @property {isuxportal.proto.resources.Team.IStudentStatus|null} [student] Team student
                 * @property {isuxportal.proto.resources.Team.ITeamDetail|null} [detail] Team detail
                 * @property {isuxportal.proto.resources.IContestant|null} [leader] Team leader
                 * @property {Array.<isuxportal.proto.resources.IContestant>|null} [members] Team members
                 */

                /**
                 * Constructs a new Team.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Team.
                 * @implements ITeam
                 * @constructor
                 * @param {isuxportal.proto.resources.ITeam=} [properties] Properties to set
                 */
                function Team(properties) {
                    this.memberIds = [];
                    this.members = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Team id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Team name.
                 * @member {string} name
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.name = "";

                /**
                 * Team leaderId.
                 * @member {number|Long} leaderId
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.leaderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Team memberIds.
                 * @member {Array.<number|Long>} memberIds
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.memberIds = $util.emptyArray;

                /**
                 * Team finalParticipation.
                 * @member {boolean} finalParticipation
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.finalParticipation = false;

                /**
                 * Team hidden.
                 * @member {boolean} hidden
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.hidden = false;

                /**
                 * Team withdrawn.
                 * @member {boolean} withdrawn
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.withdrawn = false;

                /**
                 * Team disqualified.
                 * @member {boolean} disqualified
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.disqualified = false;

                /**
                 * Team student.
                 * @member {isuxportal.proto.resources.Team.IStudentStatus|null|undefined} student
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.student = null;

                /**
                 * Team detail.
                 * @member {isuxportal.proto.resources.Team.ITeamDetail|null|undefined} detail
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.detail = null;

                /**
                 * Team leader.
                 * @member {isuxportal.proto.resources.IContestant|null|undefined} leader
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.leader = null;

                /**
                 * Team members.
                 * @member {Array.<isuxportal.proto.resources.IContestant>} members
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 */
                Team.prototype.members = $util.emptyArray;

                /**
                 * Creates a new Team instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Team} Team instance
                 */
                Team.create = function create(properties) {
                    return new Team(properties);
                };

                /**
                 * Encodes the specified Team message. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam} message Team message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Team.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                    if (message.leaderId != null && Object.hasOwnProperty.call(message, "leaderId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.leaderId);
                    if (message.memberIds != null && message.memberIds.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.memberIds.length; ++i)
                            writer.int64(message.memberIds[i]);
                        writer.ldelim();
                    }
                    if (message.finalParticipation != null && Object.hasOwnProperty.call(message, "finalParticipation"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.finalParticipation);
                    if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hidden);
                    if (message.withdrawn != null && Object.hasOwnProperty.call(message, "withdrawn"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.withdrawn);
                    if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                        $root.isuxportal.proto.resources.Team.TeamDetail.encode(message.detail, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.disqualified != null && Object.hasOwnProperty.call(message, "disqualified"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.disqualified);
                    if (message.student != null && Object.hasOwnProperty.call(message, "student"))
                        $root.isuxportal.proto.resources.Team.StudentStatus.encode(message.student, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                    if (message.leader != null && Object.hasOwnProperty.call(message, "leader"))
                        $root.isuxportal.proto.resources.Contestant.encode(message.leader, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    if (message.members != null && message.members.length)
                        for (var i = 0; i < message.members.length; ++i)
                            $root.isuxportal.proto.resources.Contestant.encode(message.members[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Team message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.ITeam} message Team message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Team.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Team message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Team} Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Team.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Team();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.leaderId = reader.int64();
                            break;
                        case 4:
                            if (!(message.memberIds && message.memberIds.length))
                                message.memberIds = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.memberIds.push(reader.int64());
                            } else
                                message.memberIds.push(reader.int64());
                            break;
                        case 5:
                            message.finalParticipation = reader.bool();
                            break;
                        case 6:
                            message.hidden = reader.bool();
                            break;
                        case 7:
                            message.withdrawn = reader.bool();
                            break;
                        case 9:
                            message.disqualified = reader.bool();
                            break;
                        case 10:
                            message.student = $root.isuxportal.proto.resources.Team.StudentStatus.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.detail = $root.isuxportal.proto.resources.Team.TeamDetail.decode(reader, reader.uint32());
                            break;
                        case 16:
                            message.leader = $root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32());
                            break;
                        case 17:
                            if (!(message.members && message.members.length))
                                message.members = [];
                            message.members.push($root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Team message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Team} Team
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Team.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Team message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Team.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                        if (!$util.isInteger(message.leaderId) && !(message.leaderId && $util.isInteger(message.leaderId.low) && $util.isInteger(message.leaderId.high)))
                            return "leaderId: integer|Long expected";
                    if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                        if (!Array.isArray(message.memberIds))
                            return "memberIds: array expected";
                        for (var i = 0; i < message.memberIds.length; ++i)
                            if (!$util.isInteger(message.memberIds[i]) && !(message.memberIds[i] && $util.isInteger(message.memberIds[i].low) && $util.isInteger(message.memberIds[i].high)))
                                return "memberIds: integer|Long[] expected";
                    }
                    if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                        if (typeof message.finalParticipation !== "boolean")
                            return "finalParticipation: boolean expected";
                    if (message.hidden != null && message.hasOwnProperty("hidden"))
                        if (typeof message.hidden !== "boolean")
                            return "hidden: boolean expected";
                    if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                        if (typeof message.withdrawn !== "boolean")
                            return "withdrawn: boolean expected";
                    if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                        if (typeof message.disqualified !== "boolean")
                            return "disqualified: boolean expected";
                    if (message.student != null && message.hasOwnProperty("student")) {
                        var error = $root.isuxportal.proto.resources.Team.StudentStatus.verify(message.student);
                        if (error)
                            return "student." + error;
                    }
                    if (message.detail != null && message.hasOwnProperty("detail")) {
                        var error = $root.isuxportal.proto.resources.Team.TeamDetail.verify(message.detail);
                        if (error)
                            return "detail." + error;
                    }
                    if (message.leader != null && message.hasOwnProperty("leader")) {
                        var error = $root.isuxportal.proto.resources.Contestant.verify(message.leader);
                        if (error)
                            return "leader." + error;
                    }
                    if (message.members != null && message.hasOwnProperty("members")) {
                        if (!Array.isArray(message.members))
                            return "members: array expected";
                        for (var i = 0; i < message.members.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Contestant.verify(message.members[i]);
                            if (error)
                                return "members." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Team message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Team} Team
                 */
                Team.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Team)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Team();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.leaderId != null)
                        if ($util.Long)
                            (message.leaderId = $util.Long.fromValue(object.leaderId)).unsigned = false;
                        else if (typeof object.leaderId === "string")
                            message.leaderId = parseInt(object.leaderId, 10);
                        else if (typeof object.leaderId === "number")
                            message.leaderId = object.leaderId;
                        else if (typeof object.leaderId === "object")
                            message.leaderId = new $util.LongBits(object.leaderId.low >>> 0, object.leaderId.high >>> 0).toNumber();
                    if (object.memberIds) {
                        if (!Array.isArray(object.memberIds))
                            throw TypeError(".isuxportal.proto.resources.Team.memberIds: array expected");
                        message.memberIds = [];
                        for (var i = 0; i < object.memberIds.length; ++i)
                            if ($util.Long)
                                (message.memberIds[i] = $util.Long.fromValue(object.memberIds[i])).unsigned = false;
                            else if (typeof object.memberIds[i] === "string")
                                message.memberIds[i] = parseInt(object.memberIds[i], 10);
                            else if (typeof object.memberIds[i] === "number")
                                message.memberIds[i] = object.memberIds[i];
                            else if (typeof object.memberIds[i] === "object")
                                message.memberIds[i] = new $util.LongBits(object.memberIds[i].low >>> 0, object.memberIds[i].high >>> 0).toNumber();
                    }
                    if (object.finalParticipation != null)
                        message.finalParticipation = Boolean(object.finalParticipation);
                    if (object.hidden != null)
                        message.hidden = Boolean(object.hidden);
                    if (object.withdrawn != null)
                        message.withdrawn = Boolean(object.withdrawn);
                    if (object.disqualified != null)
                        message.disqualified = Boolean(object.disqualified);
                    if (object.student != null) {
                        if (typeof object.student !== "object")
                            throw TypeError(".isuxportal.proto.resources.Team.student: object expected");
                        message.student = $root.isuxportal.proto.resources.Team.StudentStatus.fromObject(object.student);
                    }
                    if (object.detail != null) {
                        if (typeof object.detail !== "object")
                            throw TypeError(".isuxportal.proto.resources.Team.detail: object expected");
                        message.detail = $root.isuxportal.proto.resources.Team.TeamDetail.fromObject(object.detail);
                    }
                    if (object.leader != null) {
                        if (typeof object.leader !== "object")
                            throw TypeError(".isuxportal.proto.resources.Team.leader: object expected");
                        message.leader = $root.isuxportal.proto.resources.Contestant.fromObject(object.leader);
                    }
                    if (object.members) {
                        if (!Array.isArray(object.members))
                            throw TypeError(".isuxportal.proto.resources.Team.members: array expected");
                        message.members = [];
                        for (var i = 0; i < object.members.length; ++i) {
                            if (typeof object.members[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Team.members: object expected");
                            message.members[i] = $root.isuxportal.proto.resources.Contestant.fromObject(object.members[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Team message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Team
                 * @static
                 * @param {isuxportal.proto.resources.Team} message Team
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Team.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.memberIds = [];
                        object.members = [];
                    }
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.name = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.leaderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.leaderId = options.longs === String ? "0" : 0;
                        object.finalParticipation = false;
                        object.hidden = false;
                        object.withdrawn = false;
                        object.detail = null;
                        object.disqualified = false;
                        object.student = null;
                        object.leader = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                        if (typeof message.leaderId === "number")
                            object.leaderId = options.longs === String ? String(message.leaderId) : message.leaderId;
                        else
                            object.leaderId = options.longs === String ? $util.Long.prototype.toString.call(message.leaderId) : options.longs === Number ? new $util.LongBits(message.leaderId.low >>> 0, message.leaderId.high >>> 0).toNumber() : message.leaderId;
                    if (message.memberIds && message.memberIds.length) {
                        object.memberIds = [];
                        for (var j = 0; j < message.memberIds.length; ++j)
                            if (typeof message.memberIds[j] === "number")
                                object.memberIds[j] = options.longs === String ? String(message.memberIds[j]) : message.memberIds[j];
                            else
                                object.memberIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.memberIds[j]) : options.longs === Number ? new $util.LongBits(message.memberIds[j].low >>> 0, message.memberIds[j].high >>> 0).toNumber() : message.memberIds[j];
                    }
                    if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                        object.finalParticipation = message.finalParticipation;
                    if (message.hidden != null && message.hasOwnProperty("hidden"))
                        object.hidden = message.hidden;
                    if (message.withdrawn != null && message.hasOwnProperty("withdrawn"))
                        object.withdrawn = message.withdrawn;
                    if (message.detail != null && message.hasOwnProperty("detail"))
                        object.detail = $root.isuxportal.proto.resources.Team.TeamDetail.toObject(message.detail, options);
                    if (message.disqualified != null && message.hasOwnProperty("disqualified"))
                        object.disqualified = message.disqualified;
                    if (message.student != null && message.hasOwnProperty("student"))
                        object.student = $root.isuxportal.proto.resources.Team.StudentStatus.toObject(message.student, options);
                    if (message.leader != null && message.hasOwnProperty("leader"))
                        object.leader = $root.isuxportal.proto.resources.Contestant.toObject(message.leader, options);
                    if (message.members && message.members.length) {
                        object.members = [];
                        for (var j = 0; j < message.members.length; ++j)
                            object.members[j] = $root.isuxportal.proto.resources.Contestant.toObject(message.members[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Team to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Team
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Team.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Team.StudentStatus = (function() {

                    /**
                     * Properties of a StudentStatus.
                     * @memberof isuxportal.proto.resources.Team
                     * @interface IStudentStatus
                     * @property {boolean|null} [status] StudentStatus status
                     */

                    /**
                     * Constructs a new StudentStatus.
                     * @memberof isuxportal.proto.resources.Team
                     * @classdesc Represents a StudentStatus.
                     * @implements IStudentStatus
                     * @constructor
                     * @param {isuxportal.proto.resources.Team.IStudentStatus=} [properties] Properties to set
                     */
                    function StudentStatus(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * StudentStatus status.
                     * @member {boolean} status
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @instance
                     */
                    StudentStatus.prototype.status = false;

                    /**
                     * Creates a new StudentStatus instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {isuxportal.proto.resources.Team.IStudentStatus=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Team.StudentStatus} StudentStatus instance
                     */
                    StudentStatus.create = function create(properties) {
                        return new StudentStatus(properties);
                    };

                    /**
                     * Encodes the specified StudentStatus message. Does not implicitly {@link isuxportal.proto.resources.Team.StudentStatus.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {isuxportal.proto.resources.Team.IStudentStatus} message StudentStatus message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StudentStatus.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.status);
                        return writer;
                    };

                    /**
                     * Encodes the specified StudentStatus message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.StudentStatus.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {isuxportal.proto.resources.Team.IStudentStatus} message StudentStatus message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    StudentStatus.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a StudentStatus message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Team.StudentStatus} StudentStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StudentStatus.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Team.StudentStatus();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.status = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a StudentStatus message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Team.StudentStatus} StudentStatus
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    StudentStatus.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a StudentStatus message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    StudentStatus.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.status != null && message.hasOwnProperty("status"))
                            if (typeof message.status !== "boolean")
                                return "status: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a StudentStatus message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Team.StudentStatus} StudentStatus
                     */
                    StudentStatus.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Team.StudentStatus)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Team.StudentStatus();
                        if (object.status != null)
                            message.status = Boolean(object.status);
                        return message;
                    };

                    /**
                     * Creates a plain object from a StudentStatus message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @static
                     * @param {isuxportal.proto.resources.Team.StudentStatus} message StudentStatus
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    StudentStatus.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.status = false;
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = message.status;
                        return object;
                    };

                    /**
                     * Converts this StudentStatus to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Team.StudentStatus
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    StudentStatus.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return StudentStatus;
                })();

                Team.TeamDetail = (function() {

                    /**
                     * Properties of a TeamDetail.
                     * @memberof isuxportal.proto.resources.Team
                     * @interface ITeamDetail
                     * @property {string|null} [emailAddress] TeamDetail emailAddress
                     * @property {string|null} [inviteToken] TeamDetail inviteToken
                     */

                    /**
                     * Constructs a new TeamDetail.
                     * @memberof isuxportal.proto.resources.Team
                     * @classdesc Represents a TeamDetail.
                     * @implements ITeamDetail
                     * @constructor
                     * @param {isuxportal.proto.resources.Team.ITeamDetail=} [properties] Properties to set
                     */
                    function TeamDetail(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TeamDetail emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     */
                    TeamDetail.prototype.emailAddress = "";

                    /**
                     * TeamDetail inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     */
                    TeamDetail.prototype.inviteToken = "";

                    /**
                     * Creates a new TeamDetail instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail instance
                     */
                    TeamDetail.create = function create(properties) {
                        return new TeamDetail(properties);
                    };

                    /**
                     * Encodes the specified TeamDetail message. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail} message TeamDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.emailAddress);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.inviteToken);
                        return writer;
                    };

                    /**
                     * Encodes the specified TeamDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Team.TeamDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.ITeamDetail} message TeamDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Team.TeamDetail();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.emailAddress = reader.string();
                                break;
                            case 16:
                                message.inviteToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TeamDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TeamDetail message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TeamDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        return null;
                    };

                    /**
                     * Creates a TeamDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Team.TeamDetail} TeamDetail
                     */
                    TeamDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Team.TeamDetail)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Team.TeamDetail();
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TeamDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @static
                     * @param {isuxportal.proto.resources.Team.TeamDetail} message TeamDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TeamDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.emailAddress = "";
                            object.inviteToken = "";
                        }
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        return object;
                    };

                    /**
                     * Converts this TeamDetail to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Team.TeamDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TeamDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TeamDetail;
                })();

                return Team;
            })();

            resources.Contestant = (function() {

                /**
                 * Properties of a Contestant.
                 * @memberof isuxportal.proto.resources
                 * @interface IContestant
                 * @property {number|Long|null} [id] Contestant id
                 * @property {number|Long|null} [teamId] Contestant teamId
                 * @property {string|null} [name] Contestant name
                 * @property {isuxportal.proto.resources.Contestant.IContestantDetail|null} [contestantDetail] Contestant contestantDetail
                 */

                /**
                 * Constructs a new Contestant.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Contestant.
                 * @implements IContestant
                 * @constructor
                 * @param {isuxportal.proto.resources.IContestant=} [properties] Properties to set
                 */
                function Contestant(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Contestant id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Contestant teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Contestant name.
                 * @member {string} name
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.name = "";

                /**
                 * Contestant contestantDetail.
                 * @member {isuxportal.proto.resources.Contestant.IContestantDetail|null|undefined} contestantDetail
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 */
                Contestant.prototype.contestantDetail = null;

                /**
                 * Creates a new Contestant instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Contestant} Contestant instance
                 */
                Contestant.create = function create(properties) {
                    return new Contestant(properties);
                };

                /**
                 * Encodes the specified Contestant message. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant} message Contestant message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contestant.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    if (message.contestantDetail != null && Object.hasOwnProperty.call(message, "contestantDetail"))
                        $root.isuxportal.proto.resources.Contestant.ContestantDetail.encode(message.contestantDetail, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Contestant message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.IContestant} message Contestant message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contestant.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Contestant message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contestant.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Contestant();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        case 7:
                            message.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Contestant message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contestant.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Contestant message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Contestant.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.contestantDetail != null && message.hasOwnProperty("contestantDetail")) {
                        var error = $root.isuxportal.proto.resources.Contestant.ContestantDetail.verify(message.contestantDetail);
                        if (error)
                            return "contestantDetail." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Contestant message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Contestant} Contestant
                 */
                Contestant.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Contestant)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Contestant();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.contestantDetail != null) {
                        if (typeof object.contestantDetail !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contestant.contestantDetail: object expected");
                        message.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.fromObject(object.contestantDetail);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Contestant message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Contestant
                 * @static
                 * @param {isuxportal.proto.resources.Contestant} message Contestant
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Contestant.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        object.name = "";
                        object.contestantDetail = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.contestantDetail != null && message.hasOwnProperty("contestantDetail"))
                        object.contestantDetail = $root.isuxportal.proto.resources.Contestant.ContestantDetail.toObject(message.contestantDetail, options);
                    return object;
                };

                /**
                 * Converts this Contestant to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Contestant
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Contestant.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Contestant.ContestantDetail = (function() {

                    /**
                     * Properties of a ContestantDetail.
                     * @memberof isuxportal.proto.resources.Contestant
                     * @interface IContestantDetail
                     * @property {string|null} [githubLogin] ContestantDetail githubLogin
                     * @property {string|null} [discordTag] ContestantDetail discordTag
                     * @property {boolean|null} [isStudent] ContestantDetail isStudent
                     * @property {string|null} [avatarUrl] ContestantDetail avatarUrl
                     * @property {string|null} [githubId] ContestantDetail githubId
                     * @property {string|null} [discordId] ContestantDetail discordId
                     */

                    /**
                     * Constructs a new ContestantDetail.
                     * @memberof isuxportal.proto.resources.Contestant
                     * @classdesc Represents a ContestantDetail.
                     * @implements IContestantDetail
                     * @constructor
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail=} [properties] Properties to set
                     */
                    function ContestantDetail(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ContestantDetail githubLogin.
                     * @member {string} githubLogin
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.githubLogin = "";

                    /**
                     * ContestantDetail discordTag.
                     * @member {string} discordTag
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.discordTag = "";

                    /**
                     * ContestantDetail isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.isStudent = false;

                    /**
                     * ContestantDetail avatarUrl.
                     * @member {string} avatarUrl
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.avatarUrl = "";

                    /**
                     * ContestantDetail githubId.
                     * @member {string} githubId
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.githubId = "";

                    /**
                     * ContestantDetail discordId.
                     * @member {string} discordId
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     */
                    ContestantDetail.prototype.discordId = "";

                    /**
                     * Creates a new ContestantDetail instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail instance
                     */
                    ContestantDetail.create = function create(properties) {
                        return new ContestantDetail(properties);
                    };

                    /**
                     * Encodes the specified ContestantDetail message. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail} message ContestantDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ContestantDetail.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.githubLogin);
                        if (message.discordTag != null && Object.hasOwnProperty.call(message, "discordTag"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.discordTag);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isStudent);
                        if (message.avatarUrl != null && Object.hasOwnProperty.call(message, "avatarUrl"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
                        if (message.githubId != null && Object.hasOwnProperty.call(message, "githubId"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.githubId);
                        if (message.discordId != null && Object.hasOwnProperty.call(message, "discordId"))
                            writer.uint32(/* id 17, wireType 2 =*/138).string(message.discordId);
                        return writer;
                    };

                    /**
                     * Encodes the specified ContestantDetail message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contestant.ContestantDetail.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.IContestantDetail} message ContestantDetail message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ContestantDetail.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ContestantDetail.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Contestant.ContestantDetail();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.githubLogin = reader.string();
                                break;
                            case 2:
                                message.discordTag = reader.string();
                                break;
                            case 3:
                                message.isStudent = reader.bool();
                                break;
                            case 4:
                                message.avatarUrl = reader.string();
                                break;
                            case 16:
                                message.githubId = reader.string();
                                break;
                            case 17:
                                message.discordId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ContestantDetail message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ContestantDetail.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ContestantDetail message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ContestantDetail.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            if (!$util.isString(message.githubLogin))
                                return "githubLogin: string expected";
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            if (!$util.isString(message.discordTag))
                                return "discordTag: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                            if (!$util.isString(message.avatarUrl))
                                return "avatarUrl: string expected";
                        if (message.githubId != null && message.hasOwnProperty("githubId"))
                            if (!$util.isString(message.githubId))
                                return "githubId: string expected";
                        if (message.discordId != null && message.hasOwnProperty("discordId"))
                            if (!$util.isString(message.discordId))
                                return "discordId: string expected";
                        return null;
                    };

                    /**
                     * Creates a ContestantDetail message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Contestant.ContestantDetail} ContestantDetail
                     */
                    ContestantDetail.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Contestant.ContestantDetail)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Contestant.ContestantDetail();
                        if (object.githubLogin != null)
                            message.githubLogin = String(object.githubLogin);
                        if (object.discordTag != null)
                            message.discordTag = String(object.discordTag);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        if (object.avatarUrl != null)
                            message.avatarUrl = String(object.avatarUrl);
                        if (object.githubId != null)
                            message.githubId = String(object.githubId);
                        if (object.discordId != null)
                            message.discordId = String(object.discordId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ContestantDetail message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @static
                     * @param {isuxportal.proto.resources.Contestant.ContestantDetail} message ContestantDetail
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ContestantDetail.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.githubLogin = "";
                            object.discordTag = "";
                            object.isStudent = false;
                            object.avatarUrl = "";
                            object.githubId = "";
                            object.discordId = "";
                        }
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            object.githubLogin = message.githubLogin;
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            object.discordTag = message.discordTag;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                            object.avatarUrl = message.avatarUrl;
                        if (message.githubId != null && message.hasOwnProperty("githubId"))
                            object.githubId = message.githubId;
                        if (message.discordId != null && message.hasOwnProperty("discordId"))
                            object.discordId = message.discordId;
                        return object;
                    };

                    /**
                     * Converts this ContestantDetail to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Contestant.ContestantDetail
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ContestantDetail.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ContestantDetail;
                })();

                return Contestant;
            })();

            resources.Clarification = (function() {

                /**
                 * Properties of a Clarification.
                 * @memberof isuxportal.proto.resources
                 * @interface IClarification
                 * @property {number|Long|null} [id] Clarification id
                 * @property {number|Long|null} [teamId] Clarification teamId
                 * @property {boolean|null} [answered] Clarification answered
                 * @property {boolean|null} [disclosed] Clarification disclosed
                 * @property {string|null} [question] Clarification question
                 * @property {string|null} [answer] Clarification answer
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Clarification createdAt
                 * @property {google.protobuf.ITimestamp|null} [answeredAt] Clarification answeredAt
                 * @property {string|null} [originalQuestion] Clarification originalQuestion
                 * @property {boolean|null} [admin] Clarification admin
                 * @property {isuxportal.proto.resources.ITeam|null} [team] Clarification team
                 */

                /**
                 * Constructs a new Clarification.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Clarification.
                 * @implements IClarification
                 * @constructor
                 * @param {isuxportal.proto.resources.IClarification=} [properties] Properties to set
                 */
                function Clarification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Clarification id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Clarification teamId.
                 * @member {number|Long} teamId
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Clarification answered.
                 * @member {boolean} answered
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answered = false;

                /**
                 * Clarification disclosed.
                 * @member {boolean} disclosed
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.disclosed = false;

                /**
                 * Clarification question.
                 * @member {string} question
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.question = "";

                /**
                 * Clarification answer.
                 * @member {string} answer
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answer = "";

                /**
                 * Clarification createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.createdAt = null;

                /**
                 * Clarification answeredAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} answeredAt
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.answeredAt = null;

                /**
                 * Clarification originalQuestion.
                 * @member {string} originalQuestion
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.originalQuestion = "";

                /**
                 * Clarification admin.
                 * @member {boolean} admin
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.admin = false;

                /**
                 * Clarification team.
                 * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 */
                Clarification.prototype.team = null;

                /**
                 * Creates a new Clarification instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Clarification} Clarification instance
                 */
                Clarification.create = function create(properties) {
                    return new Clarification(properties);
                };

                /**
                 * Encodes the specified Clarification message. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int64(message.teamId);
                    if (message.answered != null && Object.hasOwnProperty.call(message, "answered"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.answered);
                    if (message.disclosed != null && Object.hasOwnProperty.call(message, "disclosed"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.disclosed);
                    if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.question);
                    if (message.answer != null && Object.hasOwnProperty.call(message, "answer"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.answer);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.answeredAt != null && Object.hasOwnProperty.call(message, "answeredAt"))
                        $root.google.protobuf.Timestamp.encode(message.answeredAt, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.originalQuestion != null && Object.hasOwnProperty.call(message, "originalQuestion"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.originalQuestion);
                    if (message.admin != null && Object.hasOwnProperty.call(message, "admin"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.admin);
                    if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                        $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Clarification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Clarification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.IClarification} message Clarification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Clarification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Clarification message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Clarification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.teamId = reader.int64();
                            break;
                        case 3:
                            message.answered = reader.bool();
                            break;
                        case 4:
                            message.disclosed = reader.bool();
                            break;
                        case 5:
                            message.question = reader.string();
                            break;
                        case 6:
                            message.answer = reader.string();
                            break;
                        case 7:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 8:
                            message.answeredAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.originalQuestion = reader.string();
                            break;
                        case 10:
                            message.admin = reader.bool();
                            break;
                        case 16:
                            message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Clarification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Clarification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Clarification message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Clarification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                            return "teamId: integer|Long expected";
                    if (message.answered != null && message.hasOwnProperty("answered"))
                        if (typeof message.answered !== "boolean")
                            return "answered: boolean expected";
                    if (message.disclosed != null && message.hasOwnProperty("disclosed"))
                        if (typeof message.disclosed !== "boolean")
                            return "disclosed: boolean expected";
                    if (message.question != null && message.hasOwnProperty("question"))
                        if (!$util.isString(message.question))
                            return "question: string expected";
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        if (!$util.isString(message.answer))
                            return "answer: string expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.answeredAt != null && message.hasOwnProperty("answeredAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.answeredAt);
                        if (error)
                            return "answeredAt." + error;
                    }
                    if (message.originalQuestion != null && message.hasOwnProperty("originalQuestion"))
                        if (!$util.isString(message.originalQuestion))
                            return "originalQuestion: string expected";
                    if (message.admin != null && message.hasOwnProperty("admin"))
                        if (typeof message.admin !== "boolean")
                            return "admin: boolean expected";
                    if (message.team != null && message.hasOwnProperty("team")) {
                        var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                        if (error)
                            return "team." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Clarification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Clarification} Clarification
                 */
                Clarification.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Clarification)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Clarification();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.teamId != null)
                        if ($util.Long)
                            (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                        else if (typeof object.teamId === "string")
                            message.teamId = parseInt(object.teamId, 10);
                        else if (typeof object.teamId === "number")
                            message.teamId = object.teamId;
                        else if (typeof object.teamId === "object")
                            message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                    if (object.answered != null)
                        message.answered = Boolean(object.answered);
                    if (object.disclosed != null)
                        message.disclosed = Boolean(object.disclosed);
                    if (object.question != null)
                        message.question = String(object.question);
                    if (object.answer != null)
                        message.answer = String(object.answer);
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.answeredAt != null) {
                        if (typeof object.answeredAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.answeredAt: object expected");
                        message.answeredAt = $root.google.protobuf.Timestamp.fromObject(object.answeredAt);
                    }
                    if (object.originalQuestion != null)
                        message.originalQuestion = String(object.originalQuestion);
                    if (object.admin != null)
                        message.admin = Boolean(object.admin);
                    if (object.team != null) {
                        if (typeof object.team !== "object")
                            throw TypeError(".isuxportal.proto.resources.Clarification.team: object expected");
                        message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Clarification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Clarification
                 * @static
                 * @param {isuxportal.proto.resources.Clarification} message Clarification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Clarification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.teamId = options.longs === String ? "0" : 0;
                        object.answered = false;
                        object.disclosed = false;
                        object.question = "";
                        object.answer = "";
                        object.createdAt = null;
                        object.answeredAt = null;
                        object.originalQuestion = "";
                        object.admin = false;
                        object.team = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.teamId != null && message.hasOwnProperty("teamId"))
                        if (typeof message.teamId === "number")
                            object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                        else
                            object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                    if (message.answered != null && message.hasOwnProperty("answered"))
                        object.answered = message.answered;
                    if (message.disclosed != null && message.hasOwnProperty("disclosed"))
                        object.disclosed = message.disclosed;
                    if (message.question != null && message.hasOwnProperty("question"))
                        object.question = message.question;
                    if (message.answer != null && message.hasOwnProperty("answer"))
                        object.answer = message.answer;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.answeredAt != null && message.hasOwnProperty("answeredAt"))
                        object.answeredAt = $root.google.protobuf.Timestamp.toObject(message.answeredAt, options);
                    if (message.originalQuestion != null && message.hasOwnProperty("originalQuestion"))
                        object.originalQuestion = message.originalQuestion;
                    if (message.admin != null && message.hasOwnProperty("admin"))
                        object.admin = message.admin;
                    if (message.team != null && message.hasOwnProperty("team"))
                        object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                    return object;
                };

                /**
                 * Converts this Clarification to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Clarification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Clarification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Clarification;
            })();

            resources.Contest = (function() {

                /**
                 * Properties of a Contest.
                 * @memberof isuxportal.proto.resources
                 * @interface IContest
                 * @property {google.protobuf.ITimestamp|null} [registrationOpensAt] Contest registrationOpensAt
                 * @property {google.protobuf.ITimestamp|null} [registrationClosesAt] Contest registrationClosesAt
                 * @property {google.protobuf.ITimestamp|null} [startsAt] Contest startsAt
                 * @property {google.protobuf.ITimestamp|null} [freezesAt] Contest freezesAt
                 * @property {google.protobuf.ITimestamp|null} [endsAt] Contest endsAt
                 * @property {isuxportal.proto.resources.Contest.Status|null} [status] Contest status
                 * @property {boolean|null} [frozen] Contest frozen
                 */

                /**
                 * Constructs a new Contest.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Contest.
                 * @implements IContest
                 * @constructor
                 * @param {isuxportal.proto.resources.IContest=} [properties] Properties to set
                 */
                function Contest(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Contest registrationOpensAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} registrationOpensAt
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.registrationOpensAt = null;

                /**
                 * Contest registrationClosesAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} registrationClosesAt
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.registrationClosesAt = null;

                /**
                 * Contest startsAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} startsAt
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.startsAt = null;

                /**
                 * Contest freezesAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} freezesAt
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.freezesAt = null;

                /**
                 * Contest endsAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} endsAt
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.endsAt = null;

                /**
                 * Contest status.
                 * @member {isuxportal.proto.resources.Contest.Status} status
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.status = 0;

                /**
                 * Contest frozen.
                 * @member {boolean} frozen
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 */
                Contest.prototype.frozen = false;

                /**
                 * Creates a new Contest instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {isuxportal.proto.resources.IContest=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Contest} Contest instance
                 */
                Contest.create = function create(properties) {
                    return new Contest(properties);
                };

                /**
                 * Encodes the specified Contest message. Does not implicitly {@link isuxportal.proto.resources.Contest.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {isuxportal.proto.resources.IContest} message Contest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.registrationOpensAt != null && Object.hasOwnProperty.call(message, "registrationOpensAt"))
                        $root.google.protobuf.Timestamp.encode(message.registrationOpensAt, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.registrationClosesAt != null && Object.hasOwnProperty.call(message, "registrationClosesAt"))
                        $root.google.protobuf.Timestamp.encode(message.registrationClosesAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.startsAt != null && Object.hasOwnProperty.call(message, "startsAt"))
                        $root.google.protobuf.Timestamp.encode(message.startsAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.freezesAt != null && Object.hasOwnProperty.call(message, "freezesAt"))
                        $root.google.protobuf.Timestamp.encode(message.freezesAt, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.endsAt != null && Object.hasOwnProperty.call(message, "endsAt"))
                        $root.google.protobuf.Timestamp.encode(message.endsAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status);
                    if (message.frozen != null && Object.hasOwnProperty.call(message, "frozen"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.frozen);
                    return writer;
                };

                /**
                 * Encodes the specified Contest message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Contest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {isuxportal.proto.resources.IContest} message Contest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Contest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Contest message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Contest} Contest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Contest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.registrationOpensAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.registrationClosesAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.startsAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.freezesAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.endsAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 6:
                            message.status = reader.int32();
                            break;
                        case 7:
                            message.frozen = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Contest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Contest} Contest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Contest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Contest message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Contest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.registrationOpensAt != null && message.hasOwnProperty("registrationOpensAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.registrationOpensAt);
                        if (error)
                            return "registrationOpensAt." + error;
                    }
                    if (message.registrationClosesAt != null && message.hasOwnProperty("registrationClosesAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.registrationClosesAt);
                        if (error)
                            return "registrationClosesAt." + error;
                    }
                    if (message.startsAt != null && message.hasOwnProperty("startsAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.startsAt);
                        if (error)
                            return "startsAt." + error;
                    }
                    if (message.freezesAt != null && message.hasOwnProperty("freezesAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.freezesAt);
                        if (error)
                            return "freezesAt." + error;
                    }
                    if (message.endsAt != null && message.hasOwnProperty("endsAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.endsAt);
                        if (error)
                            return "endsAt." + error;
                    }
                    if (message.status != null && message.hasOwnProperty("status"))
                        switch (message.status) {
                        default:
                            return "status: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.frozen != null && message.hasOwnProperty("frozen"))
                        if (typeof message.frozen !== "boolean")
                            return "frozen: boolean expected";
                    return null;
                };

                /**
                 * Creates a Contest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Contest} Contest
                 */
                Contest.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Contest)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Contest();
                    if (object.registrationOpensAt != null) {
                        if (typeof object.registrationOpensAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contest.registrationOpensAt: object expected");
                        message.registrationOpensAt = $root.google.protobuf.Timestamp.fromObject(object.registrationOpensAt);
                    }
                    if (object.registrationClosesAt != null) {
                        if (typeof object.registrationClosesAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contest.registrationClosesAt: object expected");
                        message.registrationClosesAt = $root.google.protobuf.Timestamp.fromObject(object.registrationClosesAt);
                    }
                    if (object.startsAt != null) {
                        if (typeof object.startsAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contest.startsAt: object expected");
                        message.startsAt = $root.google.protobuf.Timestamp.fromObject(object.startsAt);
                    }
                    if (object.freezesAt != null) {
                        if (typeof object.freezesAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contest.freezesAt: object expected");
                        message.freezesAt = $root.google.protobuf.Timestamp.fromObject(object.freezesAt);
                    }
                    if (object.endsAt != null) {
                        if (typeof object.endsAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Contest.endsAt: object expected");
                        message.endsAt = $root.google.protobuf.Timestamp.fromObject(object.endsAt);
                    }
                    switch (object.status) {
                    case "STANDBY":
                    case 0:
                        message.status = 0;
                        break;
                    case "REGISTRATION":
                    case 1:
                        message.status = 1;
                        break;
                    case "STARTED":
                    case 2:
                        message.status = 2;
                        break;
                    case "FINISHED":
                    case 3:
                        message.status = 3;
                        break;
                    }
                    if (object.frozen != null)
                        message.frozen = Boolean(object.frozen);
                    return message;
                };

                /**
                 * Creates a plain object from a Contest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Contest
                 * @static
                 * @param {isuxportal.proto.resources.Contest} message Contest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Contest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.registrationOpensAt = null;
                        object.registrationClosesAt = null;
                        object.startsAt = null;
                        object.freezesAt = null;
                        object.endsAt = null;
                        object.status = options.enums === String ? "STANDBY" : 0;
                        object.frozen = false;
                    }
                    if (message.registrationOpensAt != null && message.hasOwnProperty("registrationOpensAt"))
                        object.registrationOpensAt = $root.google.protobuf.Timestamp.toObject(message.registrationOpensAt, options);
                    if (message.registrationClosesAt != null && message.hasOwnProperty("registrationClosesAt"))
                        object.registrationClosesAt = $root.google.protobuf.Timestamp.toObject(message.registrationClosesAt, options);
                    if (message.startsAt != null && message.hasOwnProperty("startsAt"))
                        object.startsAt = $root.google.protobuf.Timestamp.toObject(message.startsAt, options);
                    if (message.freezesAt != null && message.hasOwnProperty("freezesAt"))
                        object.freezesAt = $root.google.protobuf.Timestamp.toObject(message.freezesAt, options);
                    if (message.endsAt != null && message.hasOwnProperty("endsAt"))
                        object.endsAt = $root.google.protobuf.Timestamp.toObject(message.endsAt, options);
                    if (message.status != null && message.hasOwnProperty("status"))
                        object.status = options.enums === String ? $root.isuxportal.proto.resources.Contest.Status[message.status] : message.status;
                    if (message.frozen != null && message.hasOwnProperty("frozen"))
                        object.frozen = message.frozen;
                    return object;
                };

                /**
                 * Converts this Contest to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Contest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Contest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Status enum.
                 * @name isuxportal.proto.resources.Contest.Status
                 * @enum {number}
                 * @property {number} STANDBY=0 STANDBY value
                 * @property {number} REGISTRATION=1 REGISTRATION value
                 * @property {number} STARTED=2 STARTED value
                 * @property {number} FINISHED=3 FINISHED value
                 */
                Contest.Status = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STANDBY"] = 0;
                    values[valuesById[1] = "REGISTRATION"] = 1;
                    values[valuesById[2] = "STARTED"] = 2;
                    values[valuesById[3] = "FINISHED"] = 3;
                    return values;
                })();

                return Contest;
            })();

            resources.Leaderboard = (function() {

                /**
                 * Properties of a Leaderboard.
                 * @memberof isuxportal.proto.resources
                 * @interface ILeaderboard
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [teams] Leaderboard teams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [generalTeams] Leaderboard generalTeams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [studentTeams] Leaderboard studentTeams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [hiddenTeams] Leaderboard hiddenTeams
                 * @property {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>|null} [progresses] Leaderboard progresses
                 * @property {google.protobuf.ITimestamp|null} [generatedAt] Leaderboard generatedAt
                 * @property {isuxportal.proto.resources.IContest|null} [contest] Leaderboard contest
                 */

                /**
                 * Constructs a new Leaderboard.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Leaderboard.
                 * @implements ILeaderboard
                 * @constructor
                 * @param {isuxportal.proto.resources.ILeaderboard=} [properties] Properties to set
                 */
                function Leaderboard(properties) {
                    this.teams = [];
                    this.generalTeams = [];
                    this.studentTeams = [];
                    this.hiddenTeams = [];
                    this.progresses = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Leaderboard teams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} teams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.teams = $util.emptyArray;

                /**
                 * Leaderboard generalTeams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} generalTeams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.generalTeams = $util.emptyArray;

                /**
                 * Leaderboard studentTeams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} studentTeams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.studentTeams = $util.emptyArray;

                /**
                 * Leaderboard hiddenTeams.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} hiddenTeams
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.hiddenTeams = $util.emptyArray;

                /**
                 * Leaderboard progresses.
                 * @member {Array.<isuxportal.proto.resources.Leaderboard.ILeaderboardItem>} progresses
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.progresses = $util.emptyArray;

                /**
                 * Leaderboard generatedAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} generatedAt
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.generatedAt = null;

                /**
                 * Leaderboard contest.
                 * @member {isuxportal.proto.resources.IContest|null|undefined} contest
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 */
                Leaderboard.prototype.contest = null;

                /**
                 * Creates a new Leaderboard instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard instance
                 */
                Leaderboard.create = function create(properties) {
                    return new Leaderboard(properties);
                };

                /**
                 * Encodes the specified Leaderboard message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard} message Leaderboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Leaderboard.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.teams != null && message.teams.length)
                        for (var i = 0; i < message.teams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.generalTeams != null && message.generalTeams.length)
                        for (var i = 0; i < message.generalTeams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.generalTeams[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.studentTeams != null && message.studentTeams.length)
                        for (var i = 0; i < message.studentTeams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.studentTeams[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.progresses != null && message.progresses.length)
                        for (var i = 0; i < message.progresses.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.progresses[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.contest != null && Object.hasOwnProperty.call(message, "contest"))
                        $root.isuxportal.proto.resources.Contest.encode(message.contest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.generatedAt != null && Object.hasOwnProperty.call(message, "generatedAt"))
                        $root.google.protobuf.Timestamp.encode(message.generatedAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.hiddenTeams != null && message.hiddenTeams.length)
                        for (var i = 0; i < message.hiddenTeams.length; ++i)
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.encode(message.hiddenTeams[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Leaderboard message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.ILeaderboard} message Leaderboard message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Leaderboard.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Leaderboard.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.teams && message.teams.length))
                                message.teams = [];
                            message.teams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.generalTeams && message.generalTeams.length))
                                message.generalTeams = [];
                            message.generalTeams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.studentTeams && message.studentTeams.length))
                                message.studentTeams = [];
                            message.studentTeams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.hiddenTeams && message.hiddenTeams.length))
                                message.hiddenTeams = [];
                            message.hiddenTeams.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.progresses && message.progresses.length))
                                message.progresses = [];
                            message.progresses.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            message.generatedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.contest = $root.isuxportal.proto.resources.Contest.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Leaderboard message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Leaderboard.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Leaderboard message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Leaderboard.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.teams != null && message.hasOwnProperty("teams")) {
                        if (!Array.isArray(message.teams))
                            return "teams: array expected";
                        for (var i = 0; i < message.teams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.teams[i]);
                            if (error)
                                return "teams." + error;
                        }
                    }
                    if (message.generalTeams != null && message.hasOwnProperty("generalTeams")) {
                        if (!Array.isArray(message.generalTeams))
                            return "generalTeams: array expected";
                        for (var i = 0; i < message.generalTeams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.generalTeams[i]);
                            if (error)
                                return "generalTeams." + error;
                        }
                    }
                    if (message.studentTeams != null && message.hasOwnProperty("studentTeams")) {
                        if (!Array.isArray(message.studentTeams))
                            return "studentTeams: array expected";
                        for (var i = 0; i < message.studentTeams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.studentTeams[i]);
                            if (error)
                                return "studentTeams." + error;
                        }
                    }
                    if (message.hiddenTeams != null && message.hasOwnProperty("hiddenTeams")) {
                        if (!Array.isArray(message.hiddenTeams))
                            return "hiddenTeams: array expected";
                        for (var i = 0; i < message.hiddenTeams.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.hiddenTeams[i]);
                            if (error)
                                return "hiddenTeams." + error;
                        }
                    }
                    if (message.progresses != null && message.hasOwnProperty("progresses")) {
                        if (!Array.isArray(message.progresses))
                            return "progresses: array expected";
                        for (var i = 0; i < message.progresses.length; ++i) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify(message.progresses[i]);
                            if (error)
                                return "progresses." + error;
                        }
                    }
                    if (message.generatedAt != null && message.hasOwnProperty("generatedAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.generatedAt);
                        if (error)
                            return "generatedAt." + error;
                    }
                    if (message.contest != null && message.hasOwnProperty("contest")) {
                        var error = $root.isuxportal.proto.resources.Contest.verify(message.contest);
                        if (error)
                            return "contest." + error;
                    }
                    return null;
                };

                /**
                 * Creates a Leaderboard message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Leaderboard} Leaderboard
                 */
                Leaderboard.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Leaderboard)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Leaderboard();
                    if (object.teams) {
                        if (!Array.isArray(object.teams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.teams: array expected");
                        message.teams = [];
                        for (var i = 0; i < object.teams.length; ++i) {
                            if (typeof object.teams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.teams: object expected");
                            message.teams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.teams[i]);
                        }
                    }
                    if (object.generalTeams) {
                        if (!Array.isArray(object.generalTeams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.generalTeams: array expected");
                        message.generalTeams = [];
                        for (var i = 0; i < object.generalTeams.length; ++i) {
                            if (typeof object.generalTeams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.generalTeams: object expected");
                            message.generalTeams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.generalTeams[i]);
                        }
                    }
                    if (object.studentTeams) {
                        if (!Array.isArray(object.studentTeams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.studentTeams: array expected");
                        message.studentTeams = [];
                        for (var i = 0; i < object.studentTeams.length; ++i) {
                            if (typeof object.studentTeams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.studentTeams: object expected");
                            message.studentTeams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.studentTeams[i]);
                        }
                    }
                    if (object.hiddenTeams) {
                        if (!Array.isArray(object.hiddenTeams))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.hiddenTeams: array expected");
                        message.hiddenTeams = [];
                        for (var i = 0; i < object.hiddenTeams.length; ++i) {
                            if (typeof object.hiddenTeams[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.hiddenTeams: object expected");
                            message.hiddenTeams[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.hiddenTeams[i]);
                        }
                    }
                    if (object.progresses) {
                        if (!Array.isArray(object.progresses))
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.progresses: array expected");
                        message.progresses = [];
                        for (var i = 0; i < object.progresses.length; ++i) {
                            if (typeof object.progresses[i] !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.progresses: object expected");
                            message.progresses[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.fromObject(object.progresses[i]);
                        }
                    }
                    if (object.generatedAt != null) {
                        if (typeof object.generatedAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.generatedAt: object expected");
                        message.generatedAt = $root.google.protobuf.Timestamp.fromObject(object.generatedAt);
                    }
                    if (object.contest != null) {
                        if (typeof object.contest !== "object")
                            throw TypeError(".isuxportal.proto.resources.Leaderboard.contest: object expected");
                        message.contest = $root.isuxportal.proto.resources.Contest.fromObject(object.contest);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Leaderboard message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @static
                 * @param {isuxportal.proto.resources.Leaderboard} message Leaderboard
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Leaderboard.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.teams = [];
                        object.generalTeams = [];
                        object.studentTeams = [];
                        object.progresses = [];
                        object.hiddenTeams = [];
                    }
                    if (options.defaults) {
                        object.contest = null;
                        object.generatedAt = null;
                    }
                    if (message.teams && message.teams.length) {
                        object.teams = [];
                        for (var j = 0; j < message.teams.length; ++j)
                            object.teams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.teams[j], options);
                    }
                    if (message.generalTeams && message.generalTeams.length) {
                        object.generalTeams = [];
                        for (var j = 0; j < message.generalTeams.length; ++j)
                            object.generalTeams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.generalTeams[j], options);
                    }
                    if (message.studentTeams && message.studentTeams.length) {
                        object.studentTeams = [];
                        for (var j = 0; j < message.studentTeams.length; ++j)
                            object.studentTeams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.studentTeams[j], options);
                    }
                    if (message.progresses && message.progresses.length) {
                        object.progresses = [];
                        for (var j = 0; j < message.progresses.length; ++j)
                            object.progresses[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.progresses[j], options);
                    }
                    if (message.contest != null && message.hasOwnProperty("contest"))
                        object.contest = $root.isuxportal.proto.resources.Contest.toObject(message.contest, options);
                    if (message.generatedAt != null && message.hasOwnProperty("generatedAt"))
                        object.generatedAt = $root.google.protobuf.Timestamp.toObject(message.generatedAt, options);
                    if (message.hiddenTeams && message.hiddenTeams.length) {
                        object.hiddenTeams = [];
                        for (var j = 0; j < message.hiddenTeams.length; ++j)
                            object.hiddenTeams[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.toObject(message.hiddenTeams[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this Leaderboard to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Leaderboard
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Leaderboard.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Leaderboard.LeaderboardItem = (function() {

                    /**
                     * Properties of a LeaderboardItem.
                     * @memberof isuxportal.proto.resources.Leaderboard
                     * @interface ILeaderboardItem
                     * @property {Array.<isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore>|null} [scores] LeaderboardItem scores
                     * @property {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null} [bestScore] LeaderboardItem bestScore
                     * @property {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null} [latestScore] LeaderboardItem latestScore
                     * @property {isuxportal.proto.resources.ITeam|null} [team] LeaderboardItem team
                     */

                    /**
                     * Constructs a new LeaderboardItem.
                     * @memberof isuxportal.proto.resources.Leaderboard
                     * @classdesc Represents a LeaderboardItem.
                     * @implements ILeaderboardItem
                     * @constructor
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem=} [properties] Properties to set
                     */
                    function LeaderboardItem(properties) {
                        this.scores = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * LeaderboardItem scores.
                     * @member {Array.<isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore>} scores
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.scores = $util.emptyArray;

                    /**
                     * LeaderboardItem bestScore.
                     * @member {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null|undefined} bestScore
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.bestScore = null;

                    /**
                     * LeaderboardItem latestScore.
                     * @member {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore|null|undefined} latestScore
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.latestScore = null;

                    /**
                     * LeaderboardItem team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     */
                    LeaderboardItem.prototype.team = null;

                    /**
                     * Creates a new LeaderboardItem instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem instance
                     */
                    LeaderboardItem.create = function create(properties) {
                        return new LeaderboardItem(properties);
                    };

                    /**
                     * Encodes the specified LeaderboardItem message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem} message LeaderboardItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LeaderboardItem.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.scores != null && message.scores.length)
                            for (var i = 0; i < message.scores.length; ++i)
                                $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.encode(message.scores[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.bestScore != null && Object.hasOwnProperty.call(message, "bestScore"))
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.encode(message.bestScore, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.latestScore != null && Object.hasOwnProperty.call(message, "latestScore"))
                            $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.encode(message.latestScore, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified LeaderboardItem message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.ILeaderboardItem} message LeaderboardItem message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    LeaderboardItem.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a LeaderboardItem message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LeaderboardItem.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.scores && message.scores.length))
                                    message.scores = [];
                                message.scores.push($root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.bestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.latestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.decode(reader, reader.uint32());
                                break;
                            case 16:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a LeaderboardItem message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    LeaderboardItem.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a LeaderboardItem message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    LeaderboardItem.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.scores != null && message.hasOwnProperty("scores")) {
                            if (!Array.isArray(message.scores))
                                return "scores: array expected";
                            for (var i = 0; i < message.scores.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify(message.scores[i]);
                                if (error)
                                    return "scores." + error;
                            }
                        }
                        if (message.bestScore != null && message.hasOwnProperty("bestScore")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify(message.bestScore);
                            if (error)
                                return "bestScore." + error;
                        }
                        if (message.latestScore != null && message.hasOwnProperty("latestScore")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify(message.latestScore);
                            if (error)
                                return "latestScore." + error;
                        }
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a LeaderboardItem message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem} LeaderboardItem
                     */
                    LeaderboardItem.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem();
                        if (object.scores) {
                            if (!Array.isArray(object.scores))
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.scores: array expected");
                            message.scores = [];
                            for (var i = 0; i < object.scores.length; ++i) {
                                if (typeof object.scores[i] !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.scores: object expected");
                                message.scores[i] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.fromObject(object.scores[i]);
                            }
                        }
                        if (object.bestScore != null) {
                            if (typeof object.bestScore !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.bestScore: object expected");
                            message.bestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.fromObject(object.bestScore);
                        }
                        if (object.latestScore != null) {
                            if (typeof object.latestScore !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.latestScore: object expected");
                            message.latestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.fromObject(object.latestScore);
                        }
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a LeaderboardItem message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @static
                     * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem} message LeaderboardItem
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    LeaderboardItem.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.scores = [];
                        if (options.defaults) {
                            object.bestScore = null;
                            object.latestScore = null;
                            object.team = null;
                        }
                        if (message.scores && message.scores.length) {
                            object.scores = [];
                            for (var j = 0; j < message.scores.length; ++j)
                                object.scores[j] = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.toObject(message.scores[j], options);
                        }
                        if (message.bestScore != null && message.hasOwnProperty("bestScore"))
                            object.bestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.toObject(message.bestScore, options);
                        if (message.latestScore != null && message.hasOwnProperty("latestScore"))
                            object.latestScore = $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.toObject(message.latestScore, options);
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        return object;
                    };

                    /**
                     * Converts this LeaderboardItem to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    LeaderboardItem.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    LeaderboardItem.LeaderboardScore = (function() {

                        /**
                         * Properties of a LeaderboardScore.
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                         * @interface ILeaderboardScore
                         * @property {number|Long|null} [score] LeaderboardScore score
                         * @property {google.protobuf.ITimestamp|null} [startedAt] LeaderboardScore startedAt
                         * @property {google.protobuf.ITimestamp|null} [markedAt] LeaderboardScore markedAt
                         */

                        /**
                         * Constructs a new LeaderboardScore.
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem
                         * @classdesc Represents a LeaderboardScore.
                         * @implements ILeaderboardScore
                         * @constructor
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore=} [properties] Properties to set
                         */
                        function LeaderboardScore(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * LeaderboardScore score.
                         * @member {number|Long} score
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * LeaderboardScore startedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} startedAt
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.startedAt = null;

                        /**
                         * LeaderboardScore markedAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} markedAt
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         */
                        LeaderboardScore.prototype.markedAt = null;

                        /**
                         * Creates a new LeaderboardScore instance using the specified properties.
                         * @function create
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore=} [properties] Properties to set
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore instance
                         */
                        LeaderboardScore.create = function create(properties) {
                            return new LeaderboardScore(properties);
                        };

                        /**
                         * Encodes the specified LeaderboardScore message. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @function encode
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore} message LeaderboardScore message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LeaderboardScore.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.score);
                            if (message.startedAt != null && Object.hasOwnProperty.call(message, "startedAt"))
                                $root.google.protobuf.Timestamp.encode(message.startedAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            if (message.markedAt != null && Object.hasOwnProperty.call(message, "markedAt"))
                                $root.google.protobuf.Timestamp.encode(message.markedAt, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified LeaderboardScore message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.ILeaderboardScore} message LeaderboardScore message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        LeaderboardScore.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer.
                         * @function decode
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LeaderboardScore.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.score = reader.int64();
                                    break;
                                case 2:
                                    message.startedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 3:
                                    message.markedAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a LeaderboardScore message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        LeaderboardScore.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a LeaderboardScore message.
                         * @function verify
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        LeaderboardScore.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (!$util.isInteger(message.score) && !(message.score && $util.isInteger(message.score.low) && $util.isInteger(message.score.high)))
                                    return "score: integer|Long expected";
                            if (message.startedAt != null && message.hasOwnProperty("startedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.startedAt);
                                if (error)
                                    return "startedAt." + error;
                            }
                            if (message.markedAt != null && message.hasOwnProperty("markedAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.markedAt);
                                if (error)
                                    return "markedAt." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a LeaderboardScore message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} LeaderboardScore
                         */
                        LeaderboardScore.fromObject = function fromObject(object) {
                            if (object instanceof $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore)
                                return object;
                            var message = new $root.isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore();
                            if (object.score != null)
                                if ($util.Long)
                                    (message.score = $util.Long.fromValue(object.score)).unsigned = false;
                                else if (typeof object.score === "string")
                                    message.score = parseInt(object.score, 10);
                                else if (typeof object.score === "number")
                                    message.score = object.score;
                                else if (typeof object.score === "object")
                                    message.score = new $util.LongBits(object.score.low >>> 0, object.score.high >>> 0).toNumber();
                            if (object.startedAt != null) {
                                if (typeof object.startedAt !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.startedAt: object expected");
                                message.startedAt = $root.google.protobuf.Timestamp.fromObject(object.startedAt);
                            }
                            if (object.markedAt != null) {
                                if (typeof object.markedAt !== "object")
                                    throw TypeError(".isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore.markedAt: object expected");
                                message.markedAt = $root.google.protobuf.Timestamp.fromObject(object.markedAt);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a LeaderboardScore message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @static
                         * @param {isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore} message LeaderboardScore
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        LeaderboardScore.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.score = options.longs === String ? "0" : 0;
                                object.startedAt = null;
                                object.markedAt = null;
                            }
                            if (message.score != null && message.hasOwnProperty("score"))
                                if (typeof message.score === "number")
                                    object.score = options.longs === String ? String(message.score) : message.score;
                                else
                                    object.score = options.longs === String ? $util.Long.prototype.toString.call(message.score) : options.longs === Number ? new $util.LongBits(message.score.low >>> 0, message.score.high >>> 0).toNumber() : message.score;
                            if (message.startedAt != null && message.hasOwnProperty("startedAt"))
                                object.startedAt = $root.google.protobuf.Timestamp.toObject(message.startedAt, options);
                            if (message.markedAt != null && message.hasOwnProperty("markedAt"))
                                object.markedAt = $root.google.protobuf.Timestamp.toObject(message.markedAt, options);
                            return object;
                        };

                        /**
                         * Converts this LeaderboardScore to JSON.
                         * @function toJSON
                         * @memberof isuxportal.proto.resources.Leaderboard.LeaderboardItem.LeaderboardScore
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        LeaderboardScore.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return LeaderboardScore;
                    })();

                    return LeaderboardItem;
                })();

                return Leaderboard;
            })();

            resources.Notification = (function() {

                /**
                 * Properties of a Notification.
                 * @memberof isuxportal.proto.resources
                 * @interface INotification
                 * @property {number|Long|null} [id] Notification id
                 * @property {google.protobuf.ITimestamp|null} [createdAt] Notification createdAt
                 * @property {isuxportal.proto.resources.Notification.IBenchmarkJobMessage|null} [contentBenchmarkJob] Notification contentBenchmarkJob
                 * @property {isuxportal.proto.resources.Notification.IClarificationMessage|null} [contentClarification] Notification contentClarification
                 * @property {isuxportal.proto.resources.Notification.ITestMessage|null} [contentTest] Notification contentTest
                 */

                /**
                 * Constructs a new Notification.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Notification.
                 * @implements INotification
                 * @constructor
                 * @param {isuxportal.proto.resources.INotification=} [properties] Properties to set
                 */
                function Notification(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Notification id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Notification.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Notification createdAt.
                 * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Notification.prototype.createdAt = null;

                /**
                 * Notification contentBenchmarkJob.
                 * @member {isuxportal.proto.resources.Notification.IBenchmarkJobMessage|null|undefined} contentBenchmarkJob
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Notification.prototype.contentBenchmarkJob = null;

                /**
                 * Notification contentClarification.
                 * @member {isuxportal.proto.resources.Notification.IClarificationMessage|null|undefined} contentClarification
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Notification.prototype.contentClarification = null;

                /**
                 * Notification contentTest.
                 * @member {isuxportal.proto.resources.Notification.ITestMessage|null|undefined} contentTest
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Notification.prototype.contentTest = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Notification content.
                 * @member {"contentBenchmarkJob"|"contentClarification"|"contentTest"|undefined} content
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 */
                Object.defineProperty(Notification.prototype, "content", {
                    get: $util.oneOfGetter($oneOfFields = ["contentBenchmarkJob", "contentClarification", "contentTest"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Notification instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {isuxportal.proto.resources.INotification=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Notification} Notification instance
                 */
                Notification.create = function create(properties) {
                    return new Notification(properties);
                };

                /**
                 * Encodes the specified Notification message. Does not implicitly {@link isuxportal.proto.resources.Notification.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {isuxportal.proto.resources.INotification} message Notification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Notification.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                        $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.contentBenchmarkJob != null && Object.hasOwnProperty.call(message, "contentBenchmarkJob"))
                        $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage.encode(message.contentBenchmarkJob, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.contentClarification != null && Object.hasOwnProperty.call(message, "contentClarification"))
                        $root.isuxportal.proto.resources.Notification.ClarificationMessage.encode(message.contentClarification, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.contentTest != null && Object.hasOwnProperty.call(message, "contentTest"))
                        $root.isuxportal.proto.resources.Notification.TestMessage.encode(message.contentTest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Notification message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {isuxportal.proto.resources.INotification} message Notification message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Notification.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Notification message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Notification} Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Notification.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Notification();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.contentBenchmarkJob = $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.contentClarification = $root.isuxportal.proto.resources.Notification.ClarificationMessage.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.contentTest = $root.isuxportal.proto.resources.Notification.TestMessage.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Notification message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Notification} Notification
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Notification.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Notification message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Notification.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                        if (error)
                            return "createdAt." + error;
                    }
                    if (message.contentBenchmarkJob != null && message.hasOwnProperty("contentBenchmarkJob")) {
                        properties.content = 1;
                        {
                            var error = $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage.verify(message.contentBenchmarkJob);
                            if (error)
                                return "contentBenchmarkJob." + error;
                        }
                    }
                    if (message.contentClarification != null && message.hasOwnProperty("contentClarification")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.isuxportal.proto.resources.Notification.ClarificationMessage.verify(message.contentClarification);
                            if (error)
                                return "contentClarification." + error;
                        }
                    }
                    if (message.contentTest != null && message.hasOwnProperty("contentTest")) {
                        if (properties.content === 1)
                            return "content: multiple values";
                        properties.content = 1;
                        {
                            var error = $root.isuxportal.proto.resources.Notification.TestMessage.verify(message.contentTest);
                            if (error)
                                return "contentTest." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a Notification message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Notification} Notification
                 */
                Notification.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Notification)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Notification();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.createdAt != null) {
                        if (typeof object.createdAt !== "object")
                            throw TypeError(".isuxportal.proto.resources.Notification.createdAt: object expected");
                        message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                    }
                    if (object.contentBenchmarkJob != null) {
                        if (typeof object.contentBenchmarkJob !== "object")
                            throw TypeError(".isuxportal.proto.resources.Notification.contentBenchmarkJob: object expected");
                        message.contentBenchmarkJob = $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage.fromObject(object.contentBenchmarkJob);
                    }
                    if (object.contentClarification != null) {
                        if (typeof object.contentClarification !== "object")
                            throw TypeError(".isuxportal.proto.resources.Notification.contentClarification: object expected");
                        message.contentClarification = $root.isuxportal.proto.resources.Notification.ClarificationMessage.fromObject(object.contentClarification);
                    }
                    if (object.contentTest != null) {
                        if (typeof object.contentTest !== "object")
                            throw TypeError(".isuxportal.proto.resources.Notification.contentTest: object expected");
                        message.contentTest = $root.isuxportal.proto.resources.Notification.TestMessage.fromObject(object.contentTest);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a Notification message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Notification
                 * @static
                 * @param {isuxportal.proto.resources.Notification} message Notification
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Notification.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.createdAt = null;
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                        object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                    if (message.contentBenchmarkJob != null && message.hasOwnProperty("contentBenchmarkJob")) {
                        object.contentBenchmarkJob = $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage.toObject(message.contentBenchmarkJob, options);
                        if (options.oneofs)
                            object.content = "contentBenchmarkJob";
                    }
                    if (message.contentClarification != null && message.hasOwnProperty("contentClarification")) {
                        object.contentClarification = $root.isuxportal.proto.resources.Notification.ClarificationMessage.toObject(message.contentClarification, options);
                        if (options.oneofs)
                            object.content = "contentClarification";
                    }
                    if (message.contentTest != null && message.hasOwnProperty("contentTest")) {
                        object.contentTest = $root.isuxportal.proto.resources.Notification.TestMessage.toObject(message.contentTest, options);
                        if (options.oneofs)
                            object.content = "contentTest";
                    }
                    return object;
                };

                /**
                 * Converts this Notification to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Notification
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Notification.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                Notification.BenchmarkJobMessage = (function() {

                    /**
                     * Properties of a BenchmarkJobMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @interface IBenchmarkJobMessage
                     * @property {number|Long|null} [benchmarkJobId] BenchmarkJobMessage benchmarkJobId
                     */

                    /**
                     * Constructs a new BenchmarkJobMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @classdesc Represents a BenchmarkJobMessage.
                     * @implements IBenchmarkJobMessage
                     * @constructor
                     * @param {isuxportal.proto.resources.Notification.IBenchmarkJobMessage=} [properties] Properties to set
                     */
                    function BenchmarkJobMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * BenchmarkJobMessage benchmarkJobId.
                     * @member {number|Long} benchmarkJobId
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @instance
                     */
                    BenchmarkJobMessage.prototype.benchmarkJobId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new BenchmarkJobMessage instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IBenchmarkJobMessage=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Notification.BenchmarkJobMessage} BenchmarkJobMessage instance
                     */
                    BenchmarkJobMessage.create = function create(properties) {
                        return new BenchmarkJobMessage(properties);
                    };

                    /**
                     * Encodes the specified BenchmarkJobMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.BenchmarkJobMessage.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IBenchmarkJobMessage} message BenchmarkJobMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BenchmarkJobMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.benchmarkJobId != null && Object.hasOwnProperty.call(message, "benchmarkJobId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.benchmarkJobId);
                        return writer;
                    };

                    /**
                     * Encodes the specified BenchmarkJobMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.BenchmarkJobMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IBenchmarkJobMessage} message BenchmarkJobMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    BenchmarkJobMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a BenchmarkJobMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Notification.BenchmarkJobMessage} BenchmarkJobMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BenchmarkJobMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.benchmarkJobId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a BenchmarkJobMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Notification.BenchmarkJobMessage} BenchmarkJobMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    BenchmarkJobMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a BenchmarkJobMessage message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    BenchmarkJobMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.benchmarkJobId != null && message.hasOwnProperty("benchmarkJobId"))
                            if (!$util.isInteger(message.benchmarkJobId) && !(message.benchmarkJobId && $util.isInteger(message.benchmarkJobId.low) && $util.isInteger(message.benchmarkJobId.high)))
                                return "benchmarkJobId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a BenchmarkJobMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Notification.BenchmarkJobMessage} BenchmarkJobMessage
                     */
                    BenchmarkJobMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Notification.BenchmarkJobMessage();
                        if (object.benchmarkJobId != null)
                            if ($util.Long)
                                (message.benchmarkJobId = $util.Long.fromValue(object.benchmarkJobId)).unsigned = false;
                            else if (typeof object.benchmarkJobId === "string")
                                message.benchmarkJobId = parseInt(object.benchmarkJobId, 10);
                            else if (typeof object.benchmarkJobId === "number")
                                message.benchmarkJobId = object.benchmarkJobId;
                            else if (typeof object.benchmarkJobId === "object")
                                message.benchmarkJobId = new $util.LongBits(object.benchmarkJobId.low >>> 0, object.benchmarkJobId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a BenchmarkJobMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.BenchmarkJobMessage} message BenchmarkJobMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    BenchmarkJobMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.benchmarkJobId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.benchmarkJobId = options.longs === String ? "0" : 0;
                        if (message.benchmarkJobId != null && message.hasOwnProperty("benchmarkJobId"))
                            if (typeof message.benchmarkJobId === "number")
                                object.benchmarkJobId = options.longs === String ? String(message.benchmarkJobId) : message.benchmarkJobId;
                            else
                                object.benchmarkJobId = options.longs === String ? $util.Long.prototype.toString.call(message.benchmarkJobId) : options.longs === Number ? new $util.LongBits(message.benchmarkJobId.low >>> 0, message.benchmarkJobId.high >>> 0).toNumber() : message.benchmarkJobId;
                        return object;
                    };

                    /**
                     * Converts this BenchmarkJobMessage to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Notification.BenchmarkJobMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    BenchmarkJobMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return BenchmarkJobMessage;
                })();

                Notification.ClarificationMessage = (function() {

                    /**
                     * Properties of a ClarificationMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @interface IClarificationMessage
                     * @property {number|Long|null} [clarificationId] ClarificationMessage clarificationId
                     * @property {boolean|null} [owned] ClarificationMessage owned
                     * @property {boolean|null} [updated] ClarificationMessage updated
                     * @property {boolean|null} [admin] ClarificationMessage admin
                     */

                    /**
                     * Constructs a new ClarificationMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @classdesc Represents a ClarificationMessage.
                     * @implements IClarificationMessage
                     * @constructor
                     * @param {isuxportal.proto.resources.Notification.IClarificationMessage=} [properties] Properties to set
                     */
                    function ClarificationMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ClarificationMessage clarificationId.
                     * @member {number|Long} clarificationId
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @instance
                     */
                    ClarificationMessage.prototype.clarificationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ClarificationMessage owned.
                     * @member {boolean} owned
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @instance
                     */
                    ClarificationMessage.prototype.owned = false;

                    /**
                     * ClarificationMessage updated.
                     * @member {boolean} updated
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @instance
                     */
                    ClarificationMessage.prototype.updated = false;

                    /**
                     * ClarificationMessage admin.
                     * @member {boolean} admin
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @instance
                     */
                    ClarificationMessage.prototype.admin = false;

                    /**
                     * Creates a new ClarificationMessage instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IClarificationMessage=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Notification.ClarificationMessage} ClarificationMessage instance
                     */
                    ClarificationMessage.create = function create(properties) {
                        return new ClarificationMessage(properties);
                    };

                    /**
                     * Encodes the specified ClarificationMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.ClarificationMessage.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IClarificationMessage} message ClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClarificationMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarificationId != null && Object.hasOwnProperty.call(message, "clarificationId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.clarificationId);
                        if (message.owned != null && Object.hasOwnProperty.call(message, "owned"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.owned);
                        if (message.updated != null && Object.hasOwnProperty.call(message, "updated"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.updated);
                        if (message.admin != null && Object.hasOwnProperty.call(message, "admin"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.admin);
                        return writer;
                    };

                    /**
                     * Encodes the specified ClarificationMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.ClarificationMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.IClarificationMessage} message ClarificationMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ClarificationMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ClarificationMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Notification.ClarificationMessage} ClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClarificationMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Notification.ClarificationMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarificationId = reader.int64();
                                break;
                            case 2:
                                message.owned = reader.bool();
                                break;
                            case 3:
                                message.updated = reader.bool();
                                break;
                            case 4:
                                message.admin = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ClarificationMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Notification.ClarificationMessage} ClarificationMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ClarificationMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ClarificationMessage message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ClarificationMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarificationId != null && message.hasOwnProperty("clarificationId"))
                            if (!$util.isInteger(message.clarificationId) && !(message.clarificationId && $util.isInteger(message.clarificationId.low) && $util.isInteger(message.clarificationId.high)))
                                return "clarificationId: integer|Long expected";
                        if (message.owned != null && message.hasOwnProperty("owned"))
                            if (typeof message.owned !== "boolean")
                                return "owned: boolean expected";
                        if (message.updated != null && message.hasOwnProperty("updated"))
                            if (typeof message.updated !== "boolean")
                                return "updated: boolean expected";
                        if (message.admin != null && message.hasOwnProperty("admin"))
                            if (typeof message.admin !== "boolean")
                                return "admin: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a ClarificationMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Notification.ClarificationMessage} ClarificationMessage
                     */
                    ClarificationMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Notification.ClarificationMessage)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Notification.ClarificationMessage();
                        if (object.clarificationId != null)
                            if ($util.Long)
                                (message.clarificationId = $util.Long.fromValue(object.clarificationId)).unsigned = false;
                            else if (typeof object.clarificationId === "string")
                                message.clarificationId = parseInt(object.clarificationId, 10);
                            else if (typeof object.clarificationId === "number")
                                message.clarificationId = object.clarificationId;
                            else if (typeof object.clarificationId === "object")
                                message.clarificationId = new $util.LongBits(object.clarificationId.low >>> 0, object.clarificationId.high >>> 0).toNumber();
                        if (object.owned != null)
                            message.owned = Boolean(object.owned);
                        if (object.updated != null)
                            message.updated = Boolean(object.updated);
                        if (object.admin != null)
                            message.admin = Boolean(object.admin);
                        return message;
                    };

                    /**
                     * Creates a plain object from a ClarificationMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.ClarificationMessage} message ClarificationMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ClarificationMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.clarificationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.clarificationId = options.longs === String ? "0" : 0;
                            object.owned = false;
                            object.updated = false;
                            object.admin = false;
                        }
                        if (message.clarificationId != null && message.hasOwnProperty("clarificationId"))
                            if (typeof message.clarificationId === "number")
                                object.clarificationId = options.longs === String ? String(message.clarificationId) : message.clarificationId;
                            else
                                object.clarificationId = options.longs === String ? $util.Long.prototype.toString.call(message.clarificationId) : options.longs === Number ? new $util.LongBits(message.clarificationId.low >>> 0, message.clarificationId.high >>> 0).toNumber() : message.clarificationId;
                        if (message.owned != null && message.hasOwnProperty("owned"))
                            object.owned = message.owned;
                        if (message.updated != null && message.hasOwnProperty("updated"))
                            object.updated = message.updated;
                        if (message.admin != null && message.hasOwnProperty("admin"))
                            object.admin = message.admin;
                        return object;
                    };

                    /**
                     * Converts this ClarificationMessage to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Notification.ClarificationMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ClarificationMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ClarificationMessage;
                })();

                Notification.TestMessage = (function() {

                    /**
                     * Properties of a TestMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @interface ITestMessage
                     * @property {number|Long|null} [something] TestMessage something
                     */

                    /**
                     * Constructs a new TestMessage.
                     * @memberof isuxportal.proto.resources.Notification
                     * @classdesc Represents a TestMessage.
                     * @implements ITestMessage
                     * @constructor
                     * @param {isuxportal.proto.resources.Notification.ITestMessage=} [properties] Properties to set
                     */
                    function TestMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TestMessage something.
                     * @member {number|Long} something
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @instance
                     */
                    TestMessage.prototype.something = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new TestMessage instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.ITestMessage=} [properties] Properties to set
                     * @returns {isuxportal.proto.resources.Notification.TestMessage} TestMessage instance
                     */
                    TestMessage.create = function create(properties) {
                        return new TestMessage(properties);
                    };

                    /**
                     * Encodes the specified TestMessage message. Does not implicitly {@link isuxportal.proto.resources.Notification.TestMessage.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.ITestMessage} message TestMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TestMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.something != null && Object.hasOwnProperty.call(message, "something"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.something);
                        return writer;
                    };

                    /**
                     * Encodes the specified TestMessage message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Notification.TestMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.ITestMessage} message TestMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TestMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TestMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.resources.Notification.TestMessage} TestMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TestMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Notification.TestMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.something = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a TestMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.resources.Notification.TestMessage} TestMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TestMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TestMessage message.
                     * @function verify
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TestMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.something != null && message.hasOwnProperty("something"))
                            if (!$util.isInteger(message.something) && !(message.something && $util.isInteger(message.something.low) && $util.isInteger(message.something.high)))
                                return "something: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a TestMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.resources.Notification.TestMessage} TestMessage
                     */
                    TestMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.resources.Notification.TestMessage)
                            return object;
                        var message = new $root.isuxportal.proto.resources.Notification.TestMessage();
                        if (object.something != null)
                            if ($util.Long)
                                (message.something = $util.Long.fromValue(object.something)).unsigned = false;
                            else if (typeof object.something === "string")
                                message.something = parseInt(object.something, 10);
                            else if (typeof object.something === "number")
                                message.something = object.something;
                            else if (typeof object.something === "object")
                                message.something = new $util.LongBits(object.something.low >>> 0, object.something.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a TestMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @static
                     * @param {isuxportal.proto.resources.Notification.TestMessage} message TestMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TestMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.something = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.something = options.longs === String ? "0" : 0;
                        if (message.something != null && message.hasOwnProperty("something"))
                            if (typeof message.something === "number")
                                object.something = options.longs === String ? String(message.something) : message.something;
                            else
                                object.something = options.longs === String ? $util.Long.prototype.toString.call(message.something) : options.longs === Number ? new $util.LongBits(message.something.low >>> 0, message.something.high >>> 0).toNumber() : message.something;
                        return object;
                    };

                    /**
                     * Converts this TestMessage to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.resources.Notification.TestMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TestMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return TestMessage;
                })();

                return Notification;
            })();

            resources.Staff = (function() {

                /**
                 * Properties of a Staff.
                 * @memberof isuxportal.proto.resources
                 * @interface IStaff
                 * @property {number|Long|null} [id] Staff id
                 * @property {string|null} [githubLogin] Staff githubLogin
                 */

                /**
                 * Constructs a new Staff.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a Staff.
                 * @implements IStaff
                 * @constructor
                 * @param {isuxportal.proto.resources.IStaff=} [properties] Properties to set
                 */
                function Staff(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Staff id.
                 * @member {number|Long} id
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 */
                Staff.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * Staff githubLogin.
                 * @member {string} githubLogin
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 */
                Staff.prototype.githubLogin = "";

                /**
                 * Creates a new Staff instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.Staff} Staff instance
                 */
                Staff.create = function create(properties) {
                    return new Staff(properties);
                };

                /**
                 * Encodes the specified Staff message. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff} message Staff message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Staff.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                    if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.githubLogin);
                    return writer;
                };

                /**
                 * Encodes the specified Staff message, length delimited. Does not implicitly {@link isuxportal.proto.resources.Staff.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.IStaff} message Staff message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Staff.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Staff message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Staff.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.Staff();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.id = reader.int64();
                            break;
                        case 2:
                            message.githubLogin = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Staff message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Staff.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Staff message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Staff.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                            return "id: integer|Long expected";
                    if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                        if (!$util.isString(message.githubLogin))
                            return "githubLogin: string expected";
                    return null;
                };

                /**
                 * Creates a Staff message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.Staff} Staff
                 */
                Staff.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.Staff)
                        return object;
                    var message = new $root.isuxportal.proto.resources.Staff();
                    if (object.id != null)
                        if ($util.Long)
                            (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                        else if (typeof object.id === "string")
                            message.id = parseInt(object.id, 10);
                        else if (typeof object.id === "number")
                            message.id = object.id;
                        else if (typeof object.id === "object")
                            message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                    if (object.githubLogin != null)
                        message.githubLogin = String(object.githubLogin);
                    return message;
                };

                /**
                 * Creates a plain object from a Staff message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.Staff
                 * @static
                 * @param {isuxportal.proto.resources.Staff} message Staff
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Staff.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.id = options.longs === String ? "0" : 0;
                        object.githubLogin = "";
                    }
                    if (message.id != null && message.hasOwnProperty("id"))
                        if (typeof message.id === "number")
                            object.id = options.longs === String ? String(message.id) : message.id;
                        else
                            object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                    if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                        object.githubLogin = message.githubLogin;
                    return object;
                };

                /**
                 * Converts this Staff to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.Staff
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Staff.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Staff;
            })();

            resources.SurveyResponse = (function() {

                /**
                 * Properties of a SurveyResponse.
                 * @memberof isuxportal.proto.resources
                 * @interface ISurveyResponse
                 * @property {string|null} [language] SurveyResponse language
                 */

                /**
                 * Constructs a new SurveyResponse.
                 * @memberof isuxportal.proto.resources
                 * @classdesc Represents a SurveyResponse.
                 * @implements ISurveyResponse
                 * @constructor
                 * @param {isuxportal.proto.resources.ISurveyResponse=} [properties] Properties to set
                 */
                function SurveyResponse(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * SurveyResponse language.
                 * @member {string} language
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @instance
                 */
                SurveyResponse.prototype.language = "";

                /**
                 * Creates a new SurveyResponse instance using the specified properties.
                 * @function create
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {isuxportal.proto.resources.ISurveyResponse=} [properties] Properties to set
                 * @returns {isuxportal.proto.resources.SurveyResponse} SurveyResponse instance
                 */
                SurveyResponse.create = function create(properties) {
                    return new SurveyResponse(properties);
                };

                /**
                 * Encodes the specified SurveyResponse message. Does not implicitly {@link isuxportal.proto.resources.SurveyResponse.verify|verify} messages.
                 * @function encode
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {isuxportal.proto.resources.ISurveyResponse} message SurveyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SurveyResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.language != null && Object.hasOwnProperty.call(message, "language"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
                    return writer;
                };

                /**
                 * Encodes the specified SurveyResponse message, length delimited. Does not implicitly {@link isuxportal.proto.resources.SurveyResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {isuxportal.proto.resources.ISurveyResponse} message SurveyResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SurveyResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a SurveyResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {isuxportal.proto.resources.SurveyResponse} SurveyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SurveyResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.resources.SurveyResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.language = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a SurveyResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {isuxportal.proto.resources.SurveyResponse} SurveyResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SurveyResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a SurveyResponse message.
                 * @function verify
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SurveyResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.language != null && message.hasOwnProperty("language"))
                        if (!$util.isString(message.language))
                            return "language: string expected";
                    return null;
                };

                /**
                 * Creates a SurveyResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {isuxportal.proto.resources.SurveyResponse} SurveyResponse
                 */
                SurveyResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.isuxportal.proto.resources.SurveyResponse)
                        return object;
                    var message = new $root.isuxportal.proto.resources.SurveyResponse();
                    if (object.language != null)
                        message.language = String(object.language);
                    return message;
                };

                /**
                 * Creates a plain object from a SurveyResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @static
                 * @param {isuxportal.proto.resources.SurveyResponse} message SurveyResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SurveyResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.language = "";
                    if (message.language != null && message.hasOwnProperty("language"))
                        object.language = message.language;
                    return object;
                };

                /**
                 * Converts this SurveyResponse to JSON.
                 * @function toJSON
                 * @memberof isuxportal.proto.resources.SurveyResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SurveyResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return SurveyResponse;
            })();

            return resources;
        })();

        proto.services = (function() {

            /**
             * Namespace services.
             * @memberof isuxportal.proto
             * @namespace
             */
            var services = {};

            services.common = (function() {

                /**
                 * Namespace common.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var common = {};

                common.GetCurrentSessionRequest = (function() {

                    /**
                     * Properties of a GetCurrentSessionRequest.
                     * @memberof isuxportal.proto.services.common
                     * @interface IGetCurrentSessionRequest
                     */

                    /**
                     * Constructs a new GetCurrentSessionRequest.
                     * @memberof isuxportal.proto.services.common
                     * @classdesc Represents a GetCurrentSessionRequest.
                     * @implements IGetCurrentSessionRequest
                     * @constructor
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest=} [properties] Properties to set
                     */
                    function GetCurrentSessionRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new GetCurrentSessionRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest instance
                     */
                    GetCurrentSessionRequest.create = function create(properties) {
                        return new GetCurrentSessionRequest(properties);
                    };

                    /**
                     * Encodes the specified GetCurrentSessionRequest message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest} message GetCurrentSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetCurrentSessionRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionRequest} message GetCurrentSessionRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.common.GetCurrentSessionRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetCurrentSessionRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetCurrentSessionRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetCurrentSessionRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a GetCurrentSessionRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionRequest} GetCurrentSessionRequest
                     */
                    GetCurrentSessionRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.common.GetCurrentSessionRequest)
                            return object;
                        return new $root.isuxportal.proto.services.common.GetCurrentSessionRequest();
                    };

                    /**
                     * Creates a plain object from a GetCurrentSessionRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @static
                     * @param {isuxportal.proto.services.common.GetCurrentSessionRequest} message GetCurrentSessionRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetCurrentSessionRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this GetCurrentSessionRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetCurrentSessionRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetCurrentSessionRequest;
                })();

                common.GetCurrentSessionResponse = (function() {

                    /**
                     * Properties of a GetCurrentSessionResponse.
                     * @memberof isuxportal.proto.services.common
                     * @interface IGetCurrentSessionResponse
                     * @property {isuxportal.proto.resources.ITeam|null} [team] GetCurrentSessionResponse team
                     * @property {isuxportal.proto.resources.IContestant|null} [contestant] GetCurrentSessionResponse contestant
                     * @property {string|null} [discordServerId] GetCurrentSessionResponse discordServerId
                     * @property {isuxportal.proto.resources.IContest|null} [contest] GetCurrentSessionResponse contest
                     * @property {Array.<isuxportal.proto.resources.IContestantInstance>|null} [contestantInstances] GetCurrentSessionResponse contestantInstances
                     * @property {string|null} [pushVapidKey] GetCurrentSessionResponse pushVapidKey
                     */

                    /**
                     * Constructs a new GetCurrentSessionResponse.
                     * @memberof isuxportal.proto.services.common
                     * @classdesc Represents a GetCurrentSessionResponse.
                     * @implements IGetCurrentSessionResponse
                     * @constructor
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse=} [properties] Properties to set
                     */
                    function GetCurrentSessionResponse(properties) {
                        this.contestantInstances = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetCurrentSessionResponse team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.team = null;

                    /**
                     * GetCurrentSessionResponse contestant.
                     * @member {isuxportal.proto.resources.IContestant|null|undefined} contestant
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.contestant = null;

                    /**
                     * GetCurrentSessionResponse discordServerId.
                     * @member {string} discordServerId
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.discordServerId = "";

                    /**
                     * GetCurrentSessionResponse contest.
                     * @member {isuxportal.proto.resources.IContest|null|undefined} contest
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.contest = null;

                    /**
                     * GetCurrentSessionResponse contestantInstances.
                     * @member {Array.<isuxportal.proto.resources.IContestantInstance>} contestantInstances
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.contestantInstances = $util.emptyArray;

                    /**
                     * GetCurrentSessionResponse pushVapidKey.
                     * @member {string} pushVapidKey
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     */
                    GetCurrentSessionResponse.prototype.pushVapidKey = "";

                    /**
                     * Creates a new GetCurrentSessionResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse instance
                     */
                    GetCurrentSessionResponse.create = function create(properties) {
                        return new GetCurrentSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified GetCurrentSessionResponse message. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse} message GetCurrentSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.contestant != null && Object.hasOwnProperty.call(message, "contestant"))
                            $root.isuxportal.proto.resources.Contestant.encode(message.contestant, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.discordServerId != null && Object.hasOwnProperty.call(message, "discordServerId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.discordServerId);
                        if (message.contest != null && Object.hasOwnProperty.call(message, "contest"))
                            $root.isuxportal.proto.resources.Contest.encode(message.contest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.contestantInstances != null && message.contestantInstances.length)
                            for (var i = 0; i < message.contestantInstances.length; ++i)
                                $root.isuxportal.proto.resources.ContestantInstance.encode(message.contestantInstances[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.pushVapidKey != null && Object.hasOwnProperty.call(message, "pushVapidKey"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.pushVapidKey);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetCurrentSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.common.GetCurrentSessionResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.IGetCurrentSessionResponse} message GetCurrentSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetCurrentSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.common.GetCurrentSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.contestant = $root.isuxportal.proto.resources.Contestant.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.discordServerId = reader.string();
                                break;
                            case 4:
                                message.contest = $root.isuxportal.proto.resources.Contest.decode(reader, reader.uint32());
                                break;
                            case 5:
                                if (!(message.contestantInstances && message.contestantInstances.length))
                                    message.contestantInstances = [];
                                message.contestantInstances.push($root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32()));
                                break;
                            case 6:
                                message.pushVapidKey = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetCurrentSessionResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetCurrentSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetCurrentSessionResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetCurrentSessionResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        if (message.contestant != null && message.hasOwnProperty("contestant")) {
                            var error = $root.isuxportal.proto.resources.Contestant.verify(message.contestant);
                            if (error)
                                return "contestant." + error;
                        }
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            if (!$util.isString(message.discordServerId))
                                return "discordServerId: string expected";
                        if (message.contest != null && message.hasOwnProperty("contest")) {
                            var error = $root.isuxportal.proto.resources.Contest.verify(message.contest);
                            if (error)
                                return "contest." + error;
                        }
                        if (message.contestantInstances != null && message.hasOwnProperty("contestantInstances")) {
                            if (!Array.isArray(message.contestantInstances))
                                return "contestantInstances: array expected";
                            for (var i = 0; i < message.contestantInstances.length; ++i) {
                                var error = $root.isuxportal.proto.resources.ContestantInstance.verify(message.contestantInstances[i]);
                                if (error)
                                    return "contestantInstances." + error;
                            }
                        }
                        if (message.pushVapidKey != null && message.hasOwnProperty("pushVapidKey"))
                            if (!$util.isString(message.pushVapidKey))
                                return "pushVapidKey: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetCurrentSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.common.GetCurrentSessionResponse} GetCurrentSessionResponse
                     */
                    GetCurrentSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.common.GetCurrentSessionResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.common.GetCurrentSessionResponse();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        if (object.contestant != null) {
                            if (typeof object.contestant !== "object")
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.contestant: object expected");
                            message.contestant = $root.isuxportal.proto.resources.Contestant.fromObject(object.contestant);
                        }
                        if (object.discordServerId != null)
                            message.discordServerId = String(object.discordServerId);
                        if (object.contest != null) {
                            if (typeof object.contest !== "object")
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.contest: object expected");
                            message.contest = $root.isuxportal.proto.resources.Contest.fromObject(object.contest);
                        }
                        if (object.contestantInstances) {
                            if (!Array.isArray(object.contestantInstances))
                                throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.contestantInstances: array expected");
                            message.contestantInstances = [];
                            for (var i = 0; i < object.contestantInstances.length; ++i) {
                                if (typeof object.contestantInstances[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.common.GetCurrentSessionResponse.contestantInstances: object expected");
                                message.contestantInstances[i] = $root.isuxportal.proto.resources.ContestantInstance.fromObject(object.contestantInstances[i]);
                            }
                        }
                        if (object.pushVapidKey != null)
                            message.pushVapidKey = String(object.pushVapidKey);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetCurrentSessionResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.common.GetCurrentSessionResponse} message GetCurrentSessionResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetCurrentSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.contestantInstances = [];
                        if (options.defaults) {
                            object.team = null;
                            object.contestant = null;
                            object.discordServerId = "";
                            object.contest = null;
                            object.pushVapidKey = "";
                        }
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        if (message.contestant != null && message.hasOwnProperty("contestant"))
                            object.contestant = $root.isuxportal.proto.resources.Contestant.toObject(message.contestant, options);
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            object.discordServerId = message.discordServerId;
                        if (message.contest != null && message.hasOwnProperty("contest"))
                            object.contest = $root.isuxportal.proto.resources.Contest.toObject(message.contest, options);
                        if (message.contestantInstances && message.contestantInstances.length) {
                            object.contestantInstances = [];
                            for (var j = 0; j < message.contestantInstances.length; ++j)
                                object.contestantInstances[j] = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.contestantInstances[j], options);
                        }
                        if (message.pushVapidKey != null && message.hasOwnProperty("pushVapidKey"))
                            object.pushVapidKey = message.pushVapidKey;
                        return object;
                    };

                    /**
                     * Converts this GetCurrentSessionResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.common.GetCurrentSessionResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetCurrentSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetCurrentSessionResponse;
                })();

                return common;
            })();

            services.audience = (function() {

                /**
                 * Namespace audience.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var audience = {};

                audience.DashboardQuery = (function() {

                    /**
                     * Properties of a DashboardQuery.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IDashboardQuery
                     */

                    /**
                     * Constructs a new DashboardQuery.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a DashboardQuery.
                     * @implements IDashboardQuery
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IDashboardQuery=} [properties] Properties to set
                     */
                    function DashboardQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DashboardQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.DashboardQuery} DashboardQuery instance
                     */
                    DashboardQuery.create = function create(properties) {
                        return new DashboardQuery(properties);
                    };

                    /**
                     * Encodes the specified DashboardQuery message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardQuery} message DashboardQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardQuery} message DashboardQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.DashboardQuery} DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.DashboardQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.DashboardQuery} DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DashboardQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DashboardQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.DashboardQuery} DashboardQuery
                     */
                    DashboardQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.DashboardQuery)
                            return object;
                        return new $root.isuxportal.proto.services.audience.DashboardQuery();
                    };

                    /**
                     * Creates a plain object from a DashboardQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.audience.DashboardQuery} message DashboardQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardQuery.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DashboardQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.DashboardQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardQuery;
                })();

                audience.DashboardResponse = (function() {

                    /**
                     * Properties of a DashboardResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IDashboardResponse
                     * @property {isuxportal.proto.resources.ILeaderboard|null} [leaderboard] DashboardResponse leaderboard
                     */

                    /**
                     * Constructs a new DashboardResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a DashboardResponse.
                     * @implements IDashboardResponse
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IDashboardResponse=} [properties] Properties to set
                     */
                    function DashboardResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DashboardResponse leaderboard.
                     * @member {isuxportal.proto.resources.ILeaderboard|null|undefined} leaderboard
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @instance
                     */
                    DashboardResponse.prototype.leaderboard = null;

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse instance
                     */
                    DashboardResponse.create = function create(properties) {
                        return new DashboardResponse(properties);
                    };

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.leaderboard != null && Object.hasOwnProperty.call(message, "leaderboard"))
                            $root.isuxportal.proto.resources.Leaderboard.encode(message.leaderboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.DashboardResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.DashboardResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DashboardResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.verify(message.leaderboard);
                            if (error)
                                return "leaderboard." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.DashboardResponse} DashboardResponse
                     */
                    DashboardResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.DashboardResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.audience.DashboardResponse();
                        if (object.leaderboard != null) {
                            if (typeof object.leaderboard !== "object")
                                throw TypeError(".isuxportal.proto.services.audience.DashboardResponse.leaderboard: object expected");
                            message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.fromObject(object.leaderboard);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.DashboardResponse} message DashboardResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.leaderboard = null;
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard"))
                            object.leaderboard = $root.isuxportal.proto.resources.Leaderboard.toObject(message.leaderboard, options);
                        return object;
                    };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.DashboardResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardResponse;
                })();

                audience.ListTeamsRequest = (function() {

                    /**
                     * Properties of a ListTeamsRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IListTeamsRequest
                     */

                    /**
                     * Constructs a new ListTeamsRequest.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a ListTeamsRequest.
                     * @implements IListTeamsRequest
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest=} [properties] Properties to set
                     */
                    function ListTeamsRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ListTeamsRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest instance
                     */
                    ListTeamsRequest.create = function create(properties) {
                        return new ListTeamsRequest(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsRequest message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest} message ListTeamsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsRequest} message ListTeamsRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListTeamsRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListTeamsRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListTeamsRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ListTeamsRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.ListTeamsRequest} ListTeamsRequest
                     */
                    ListTeamsRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsRequest)
                            return object;
                        return new $root.isuxportal.proto.services.audience.ListTeamsRequest();
                    };

                    /**
                     * Creates a plain object from a ListTeamsRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @static
                     * @param {isuxportal.proto.services.audience.ListTeamsRequest} message ListTeamsRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListTeamsRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ListTeamsRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.ListTeamsRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListTeamsRequest;
                })();

                audience.ListTeamsResponse = (function() {

                    /**
                     * Properties of a ListTeamsResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @interface IListTeamsResponse
                     * @property {Array.<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem>|null} [teams] ListTeamsResponse teams
                     */

                    /**
                     * Constructs a new ListTeamsResponse.
                     * @memberof isuxportal.proto.services.audience
                     * @classdesc Represents a ListTeamsResponse.
                     * @implements IListTeamsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse=} [properties] Properties to set
                     */
                    function ListTeamsResponse(properties) {
                        this.teams = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListTeamsResponse teams.
                     * @member {Array.<isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem>} teams
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @instance
                     */
                    ListTeamsResponse.prototype.teams = $util.emptyArray;

                    /**
                     * Creates a new ListTeamsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse instance
                     */
                    ListTeamsResponse.create = function create(properties) {
                        return new ListTeamsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teams != null && message.teams.length)
                            for (var i = 0; i < message.teams.length; ++i)
                                $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.encode(message.teams[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListTeamsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.IListTeamsResponse} message ListTeamsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListTeamsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.teams && message.teams.length))
                                    message.teams = [];
                                message.teams.push($root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListTeamsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListTeamsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListTeamsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListTeamsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teams != null && message.hasOwnProperty("teams")) {
                            if (!Array.isArray(message.teams))
                                return "teams: array expected";
                            for (var i = 0; i < message.teams.length; ++i) {
                                var error = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify(message.teams[i]);
                                if (error)
                                    return "teams." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListTeamsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.audience.ListTeamsResponse} ListTeamsResponse
                     */
                    ListTeamsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.audience.ListTeamsResponse();
                        if (object.teams) {
                            if (!Array.isArray(object.teams))
                                throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.teams: array expected");
                            message.teams = [];
                            for (var i = 0; i < object.teams.length; ++i) {
                                if (typeof object.teams[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.teams: object expected");
                                message.teams[i] = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.fromObject(object.teams[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListTeamsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @static
                     * @param {isuxportal.proto.services.audience.ListTeamsResponse} message ListTeamsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListTeamsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.teams = [];
                        if (message.teams && message.teams.length) {
                            object.teams = [];
                            for (var j = 0; j < message.teams.length; ++j)
                                object.teams[j] = $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.toObject(message.teams[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListTeamsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListTeamsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    ListTeamsResponse.TeamListItem = (function() {

                        /**
                         * Properties of a TeamListItem.
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                         * @interface ITeamListItem
                         * @property {number|Long|null} [teamId] TeamListItem teamId
                         * @property {string|null} [name] TeamListItem name
                         * @property {Array.<string>|null} [memberNames] TeamListItem memberNames
                         * @property {boolean|null} [finalParticipation] TeamListItem finalParticipation
                         * @property {boolean|null} [isStudent] TeamListItem isStudent
                         */

                        /**
                         * Constructs a new TeamListItem.
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse
                         * @classdesc Represents a TeamListItem.
                         * @implements ITeamListItem
                         * @constructor
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
                         */
                        function TeamListItem(properties) {
                            this.memberNames = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * TeamListItem teamId.
                         * @member {number|Long} teamId
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * TeamListItem name.
                         * @member {string} name
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.name = "";

                        /**
                         * TeamListItem memberNames.
                         * @member {Array.<string>} memberNames
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.memberNames = $util.emptyArray;

                        /**
                         * TeamListItem finalParticipation.
                         * @member {boolean} finalParticipation
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.finalParticipation = false;

                        /**
                         * TeamListItem isStudent.
                         * @member {boolean} isStudent
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         */
                        TeamListItem.prototype.isStudent = false;

                        /**
                         * Creates a new TeamListItem instance using the specified properties.
                         * @function create
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem=} [properties] Properties to set
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem instance
                         */
                        TeamListItem.create = function create(properties) {
                            return new TeamListItem(properties);
                        };

                        /**
                         * Encodes the specified TeamListItem message. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encode
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TeamListItem.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                            if (message.memberNames != null && message.memberNames.length)
                                for (var i = 0; i < message.memberNames.length; ++i)
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.memberNames[i]);
                            if (message.finalParticipation != null && Object.hasOwnProperty.call(message, "finalParticipation"))
                                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.finalParticipation);
                            if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isStudent);
                            return writer;
                        };

                        /**
                         * Encodes the specified TeamListItem message, length delimited. Does not implicitly {@link isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.ITeamListItem} message TeamListItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        TeamListItem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TeamListItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.teamId = reader.int64();
                                    break;
                                case 2:
                                    message.name = reader.string();
                                    break;
                                case 3:
                                    if (!(message.memberNames && message.memberNames.length))
                                        message.memberNames = [];
                                    message.memberNames.push(reader.string());
                                    break;
                                case 4:
                                    message.finalParticipation = reader.bool();
                                    break;
                                case 5:
                                    message.isStudent = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a TeamListItem message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        TeamListItem.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a TeamListItem message.
                         * @function verify
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        TeamListItem.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                    return "teamId: integer|Long expected";
                            if (message.name != null && message.hasOwnProperty("name"))
                                if (!$util.isString(message.name))
                                    return "name: string expected";
                            if (message.memberNames != null && message.hasOwnProperty("memberNames")) {
                                if (!Array.isArray(message.memberNames))
                                    return "memberNames: array expected";
                                for (var i = 0; i < message.memberNames.length; ++i)
                                    if (!$util.isString(message.memberNames[i]))
                                        return "memberNames: string[] expected";
                            }
                            if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                                if (typeof message.finalParticipation !== "boolean")
                                    return "finalParticipation: boolean expected";
                            if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                                if (typeof message.isStudent !== "boolean")
                                    return "isStudent: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a TeamListItem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} TeamListItem
                         */
                        TeamListItem.fromObject = function fromObject(object) {
                            if (object instanceof $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem)
                                return object;
                            var message = new $root.isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem();
                            if (object.teamId != null)
                                if ($util.Long)
                                    (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                                else if (typeof object.teamId === "string")
                                    message.teamId = parseInt(object.teamId, 10);
                                else if (typeof object.teamId === "number")
                                    message.teamId = object.teamId;
                                else if (typeof object.teamId === "object")
                                    message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                            if (object.name != null)
                                message.name = String(object.name);
                            if (object.memberNames) {
                                if (!Array.isArray(object.memberNames))
                                    throw TypeError(".isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem.memberNames: array expected");
                                message.memberNames = [];
                                for (var i = 0; i < object.memberNames.length; ++i)
                                    message.memberNames[i] = String(object.memberNames[i]);
                            }
                            if (object.finalParticipation != null)
                                message.finalParticipation = Boolean(object.finalParticipation);
                            if (object.isStudent != null)
                                message.isStudent = Boolean(object.isStudent);
                            return message;
                        };

                        /**
                         * Creates a plain object from a TeamListItem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @static
                         * @param {isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem} message TeamListItem
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        TeamListItem.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.memberNames = [];
                            if (options.defaults) {
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.teamId = options.longs === String ? "0" : 0;
                                object.name = "";
                                object.finalParticipation = false;
                                object.isStudent = false;
                            }
                            if (message.teamId != null && message.hasOwnProperty("teamId"))
                                if (typeof message.teamId === "number")
                                    object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                                else
                                    object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                            if (message.name != null && message.hasOwnProperty("name"))
                                object.name = message.name;
                            if (message.memberNames && message.memberNames.length) {
                                object.memberNames = [];
                                for (var j = 0; j < message.memberNames.length; ++j)
                                    object.memberNames[j] = message.memberNames[j];
                            }
                            if (message.finalParticipation != null && message.hasOwnProperty("finalParticipation"))
                                object.finalParticipation = message.finalParticipation;
                            if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                                object.isStudent = message.isStudent;
                            return object;
                        };

                        /**
                         * Converts this TeamListItem to JSON.
                         * @function toJSON
                         * @memberof isuxportal.proto.services.audience.ListTeamsResponse.TeamListItem
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        TeamListItem.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return TeamListItem;
                    })();

                    return ListTeamsResponse;
                })();

                return audience;
            })();

            services.contestant = (function() {

                /**
                 * Namespace contestant.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var contestant = {};

                contestant.ListBenchmarkJobsQuery = (function() {

                    /**
                     * Properties of a ListBenchmarkJobsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListBenchmarkJobsQuery
                     * @property {number|Long|null} [limit] ListBenchmarkJobsQuery limit
                     */

                    /**
                     * Constructs a new ListBenchmarkJobsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListBenchmarkJobsQuery.
                     * @implements IListBenchmarkJobsQuery
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsQuery=} [properties] Properties to set
                     */
                    function ListBenchmarkJobsQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListBenchmarkJobsQuery limit.
                     * @member {number|Long} limit
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @instance
                     */
                    ListBenchmarkJobsQuery.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ListBenchmarkJobsQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsQuery} ListBenchmarkJobsQuery instance
                     */
                    ListBenchmarkJobsQuery.create = function create(properties) {
                        return new ListBenchmarkJobsQuery(properties);
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsQuery} message ListBenchmarkJobsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.limit);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsQuery} message ListBenchmarkJobsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsQuery} ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListBenchmarkJobsQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.limit = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListBenchmarkJobsQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsQuery} ListBenchmarkJobsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListBenchmarkJobsQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListBenchmarkJobsQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.limit != null && message.hasOwnProperty("limit"))
                            if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                                return "limit: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ListBenchmarkJobsQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsQuery} ListBenchmarkJobsQuery
                     */
                    ListBenchmarkJobsQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListBenchmarkJobsQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListBenchmarkJobsQuery();
                        if (object.limit != null)
                            if ($util.Long)
                                (message.limit = $util.Long.fromValue(object.limit)).unsigned = false;
                            else if (typeof object.limit === "string")
                                message.limit = parseInt(object.limit, 10);
                            else if (typeof object.limit === "number")
                                message.limit = object.limit;
                            else if (typeof object.limit === "object")
                                message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListBenchmarkJobsQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListBenchmarkJobsQuery} message ListBenchmarkJobsQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListBenchmarkJobsQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.limit = options.longs === String ? "0" : 0;
                        if (message.limit != null && message.hasOwnProperty("limit"))
                            if (typeof message.limit === "number")
                                object.limit = options.longs === String ? String(message.limit) : message.limit;
                            else
                                object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber() : message.limit;
                        return object;
                    };

                    /**
                     * Converts this ListBenchmarkJobsQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListBenchmarkJobsQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListBenchmarkJobsQuery;
                })();

                contestant.ListBenchmarkJobsResponse = (function() {

                    /**
                     * Properties of a ListBenchmarkJobsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListBenchmarkJobsResponse
                     * @property {Array.<isuxportal.proto.resources.IBenchmarkJob>|null} [jobs] ListBenchmarkJobsResponse jobs
                     */

                    /**
                     * Constructs a new ListBenchmarkJobsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListBenchmarkJobsResponse.
                     * @implements IListBenchmarkJobsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsResponse=} [properties] Properties to set
                     */
                    function ListBenchmarkJobsResponse(properties) {
                        this.jobs = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListBenchmarkJobsResponse jobs.
                     * @member {Array.<isuxportal.proto.resources.IBenchmarkJob>} jobs
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @instance
                     */
                    ListBenchmarkJobsResponse.prototype.jobs = $util.emptyArray;

                    /**
                     * Creates a new ListBenchmarkJobsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse instance
                     */
                    ListBenchmarkJobsResponse.create = function create(properties) {
                        return new ListBenchmarkJobsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsResponse} message ListBenchmarkJobsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.jobs != null && message.jobs.length)
                            for (var i = 0; i < message.jobs.length; ++i)
                                $root.isuxportal.proto.resources.BenchmarkJob.encode(message.jobs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListBenchmarkJobsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListBenchmarkJobsResponse} message ListBenchmarkJobsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListBenchmarkJobsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListBenchmarkJobsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.jobs && message.jobs.length))
                                    message.jobs = [];
                                message.jobs.push($root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListBenchmarkJobsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListBenchmarkJobsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListBenchmarkJobsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListBenchmarkJobsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.jobs != null && message.hasOwnProperty("jobs")) {
                            if (!Array.isArray(message.jobs))
                                return "jobs: array expected";
                            for (var i = 0; i < message.jobs.length; ++i) {
                                var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.jobs[i]);
                                if (error)
                                    return "jobs." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListBenchmarkJobsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListBenchmarkJobsResponse} ListBenchmarkJobsResponse
                     */
                    ListBenchmarkJobsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListBenchmarkJobsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListBenchmarkJobsResponse();
                        if (object.jobs) {
                            if (!Array.isArray(object.jobs))
                                throw TypeError(".isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.jobs: array expected");
                            message.jobs = [];
                            for (var i = 0; i < object.jobs.length; ++i) {
                                if (typeof object.jobs[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.jobs: object expected");
                                message.jobs[i] = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.jobs[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListBenchmarkJobsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListBenchmarkJobsResponse} message ListBenchmarkJobsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListBenchmarkJobsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.jobs = [];
                        if (message.jobs && message.jobs.length) {
                            object.jobs = [];
                            for (var j = 0; j < message.jobs.length; ++j)
                                object.jobs[j] = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.jobs[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListBenchmarkJobsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListBenchmarkJobsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListBenchmarkJobsResponse;
                })();

                contestant.EnqueueBenchmarkJobRequest = (function() {

                    /**
                     * Properties of an EnqueueBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IEnqueueBenchmarkJobRequest
                     * @property {number|Long|null} [targetId] EnqueueBenchmarkJobRequest targetId
                     */

                    /**
                     * Constructs a new EnqueueBenchmarkJobRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents an EnqueueBenchmarkJobRequest.
                     * @implements IEnqueueBenchmarkJobRequest
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest=} [properties] Properties to set
                     */
                    function EnqueueBenchmarkJobRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnqueueBenchmarkJobRequest targetId.
                     * @member {number|Long} targetId
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @instance
                     */
                    EnqueueBenchmarkJobRequest.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new EnqueueBenchmarkJobRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest instance
                     */
                    EnqueueBenchmarkJobRequest.create = function create(properties) {
                        return new EnqueueBenchmarkJobRequest(properties);
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.targetId);
                        return writer;
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.targetId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EnqueueBenchmarkJobRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnqueueBenchmarkJobRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.targetId != null && message.hasOwnProperty("targetId"))
                            if (!$util.isInteger(message.targetId) && !(message.targetId && $util.isInteger(message.targetId.low) && $util.isInteger(message.targetId.high)))
                                return "targetId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates an EnqueueBenchmarkJobRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest} EnqueueBenchmarkJobRequest
                     */
                    EnqueueBenchmarkJobRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest();
                        if (object.targetId != null)
                            if ($util.Long)
                                (message.targetId = $util.Long.fromValue(object.targetId)).unsigned = false;
                            else if (typeof object.targetId === "string")
                                message.targetId = parseInt(object.targetId, 10);
                            else if (typeof object.targetId === "number")
                                message.targetId = object.targetId;
                            else if (typeof object.targetId === "object")
                                message.targetId = new $util.LongBits(object.targetId.low >>> 0, object.targetId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest} message EnqueueBenchmarkJobRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnqueueBenchmarkJobRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.targetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.targetId = options.longs === String ? "0" : 0;
                        if (message.targetId != null && message.hasOwnProperty("targetId"))
                            if (typeof message.targetId === "number")
                                object.targetId = options.longs === String ? String(message.targetId) : message.targetId;
                            else
                                object.targetId = options.longs === String ? $util.Long.prototype.toString.call(message.targetId) : options.longs === Number ? new $util.LongBits(message.targetId.low >>> 0, message.targetId.high >>> 0).toNumber() : message.targetId;
                        return object;
                    };

                    /**
                     * Converts this EnqueueBenchmarkJobRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnqueueBenchmarkJobRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EnqueueBenchmarkJobRequest;
                })();

                contestant.EnqueueBenchmarkJobResponse = (function() {

                    /**
                     * Properties of an EnqueueBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IEnqueueBenchmarkJobResponse
                     * @property {isuxportal.proto.resources.IBenchmarkJob|null} [job] EnqueueBenchmarkJobResponse job
                     */

                    /**
                     * Constructs a new EnqueueBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents an EnqueueBenchmarkJobResponse.
                     * @implements IEnqueueBenchmarkJobResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse=} [properties] Properties to set
                     */
                    function EnqueueBenchmarkJobResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EnqueueBenchmarkJobResponse job.
                     * @member {isuxportal.proto.resources.IBenchmarkJob|null|undefined} job
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @instance
                     */
                    EnqueueBenchmarkJobResponse.prototype.job = null;

                    /**
                     * Creates a new EnqueueBenchmarkJobResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse instance
                     */
                    EnqueueBenchmarkJobResponse.create = function create(properties) {
                        return new EnqueueBenchmarkJobResponse(properties);
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                            $root.isuxportal.proto.resources.BenchmarkJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified EnqueueBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IEnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EnqueueBenchmarkJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.job = $root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EnqueueBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EnqueueBenchmarkJobResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EnqueueBenchmarkJobResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EnqueueBenchmarkJobResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.job != null && message.hasOwnProperty("job")) {
                            var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.job);
                            if (error)
                                return "job." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates an EnqueueBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse} EnqueueBenchmarkJobResponse
                     */
                    EnqueueBenchmarkJobResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse();
                        if (object.job != null) {
                            if (typeof object.job !== "object")
                                throw TypeError(".isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.job: object expected");
                            message.job = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.job);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an EnqueueBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse} message EnqueueBenchmarkJobResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EnqueueBenchmarkJobResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.job = null;
                        if (message.job != null && message.hasOwnProperty("job"))
                            object.job = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.job, options);
                        return object;
                    };

                    /**
                     * Converts this EnqueueBenchmarkJobResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EnqueueBenchmarkJobResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EnqueueBenchmarkJobResponse;
                })();

                contestant.GetBenchmarkJobQuery = (function() {

                    /**
                     * Properties of a GetBenchmarkJobQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IGetBenchmarkJobQuery
                     * @property {number|Long|null} [id] GetBenchmarkJobQuery id
                     */

                    /**
                     * Constructs a new GetBenchmarkJobQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a GetBenchmarkJobQuery.
                     * @implements IGetBenchmarkJobQuery
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobQuery=} [properties] Properties to set
                     */
                    function GetBenchmarkJobQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetBenchmarkJobQuery id.
                     * @member {number|Long} id
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @instance
                     */
                    GetBenchmarkJobQuery.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new GetBenchmarkJobQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobQuery} GetBenchmarkJobQuery instance
                     */
                    GetBenchmarkJobQuery.create = function create(properties) {
                        return new GetBenchmarkJobQuery(properties);
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobQuery} message GetBenchmarkJobQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobQuery} message GetBenchmarkJobQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.GetBenchmarkJobQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetBenchmarkJobQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetBenchmarkJobQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetBenchmarkJobQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                                return "id: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a GetBenchmarkJobQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobQuery} GetBenchmarkJobQuery
                     */
                    GetBenchmarkJobQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.GetBenchmarkJobQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.GetBenchmarkJobQuery();
                        if (object.id != null)
                            if ($util.Long)
                                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                            else if (typeof object.id === "string")
                                message.id = parseInt(object.id, 10);
                            else if (typeof object.id === "number")
                                message.id = object.id;
                            else if (typeof object.id === "object")
                                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetBenchmarkJobQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.GetBenchmarkJobQuery} message GetBenchmarkJobQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetBenchmarkJobQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.id = options.longs === String ? "0" : 0;
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (typeof message.id === "number")
                                object.id = options.longs === String ? String(message.id) : message.id;
                            else
                                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                        return object;
                    };

                    /**
                     * Converts this GetBenchmarkJobQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetBenchmarkJobQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetBenchmarkJobQuery;
                })();

                contestant.GetBenchmarkJobResponse = (function() {

                    /**
                     * Properties of a GetBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IGetBenchmarkJobResponse
                     * @property {isuxportal.proto.resources.IBenchmarkJob|null} [job] GetBenchmarkJobResponse job
                     */

                    /**
                     * Constructs a new GetBenchmarkJobResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a GetBenchmarkJobResponse.
                     * @implements IGetBenchmarkJobResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobResponse=} [properties] Properties to set
                     */
                    function GetBenchmarkJobResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetBenchmarkJobResponse job.
                     * @member {isuxportal.proto.resources.IBenchmarkJob|null|undefined} job
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @instance
                     */
                    GetBenchmarkJobResponse.prototype.job = null;

                    /**
                     * Creates a new GetBenchmarkJobResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobResponse} GetBenchmarkJobResponse instance
                     */
                    GetBenchmarkJobResponse.create = function create(properties) {
                        return new GetBenchmarkJobResponse(properties);
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobResponse} message GetBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.job != null && Object.hasOwnProperty.call(message, "job"))
                            $root.isuxportal.proto.resources.BenchmarkJob.encode(message.job, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified GetBenchmarkJobResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.GetBenchmarkJobResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IGetBenchmarkJobResponse} message GetBenchmarkJobResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetBenchmarkJobResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.GetBenchmarkJobResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.job = $root.isuxportal.proto.resources.BenchmarkJob.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetBenchmarkJobResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetBenchmarkJobResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetBenchmarkJobResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetBenchmarkJobResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.job != null && message.hasOwnProperty("job")) {
                            var error = $root.isuxportal.proto.resources.BenchmarkJob.verify(message.job);
                            if (error)
                                return "job." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a GetBenchmarkJobResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.GetBenchmarkJobResponse} GetBenchmarkJobResponse
                     */
                    GetBenchmarkJobResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.GetBenchmarkJobResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.GetBenchmarkJobResponse();
                        if (object.job != null) {
                            if (typeof object.job !== "object")
                                throw TypeError(".isuxportal.proto.services.contestant.GetBenchmarkJobResponse.job: object expected");
                            message.job = $root.isuxportal.proto.resources.BenchmarkJob.fromObject(object.job);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetBenchmarkJobResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.GetBenchmarkJobResponse} message GetBenchmarkJobResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetBenchmarkJobResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.job = null;
                        if (message.job != null && message.hasOwnProperty("job"))
                            object.job = $root.isuxportal.proto.resources.BenchmarkJob.toObject(message.job, options);
                        return object;
                    };

                    /**
                     * Converts this GetBenchmarkJobResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.GetBenchmarkJobResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetBenchmarkJobResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetBenchmarkJobResponse;
                })();

                contestant.ListClarificationsQuery = (function() {

                    /**
                     * Properties of a ListClarificationsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListClarificationsQuery
                     */

                    /**
                     * Constructs a new ListClarificationsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListClarificationsQuery.
                     * @implements IListClarificationsQuery
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListClarificationsQuery=} [properties] Properties to set
                     */
                    function ListClarificationsQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ListClarificationsQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsQuery} ListClarificationsQuery instance
                     */
                    ListClarificationsQuery.create = function create(properties) {
                        return new ListClarificationsQuery(properties);
                    };

                    /**
                     * Encodes the specified ListClarificationsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsQuery} message ListClarificationsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListClarificationsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsQuery} message ListClarificationsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsQuery} ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListClarificationsQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListClarificationsQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsQuery} ListClarificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListClarificationsQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListClarificationsQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ListClarificationsQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsQuery} ListClarificationsQuery
                     */
                    ListClarificationsQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListClarificationsQuery)
                            return object;
                        return new $root.isuxportal.proto.services.contestant.ListClarificationsQuery();
                    };

                    /**
                     * Creates a plain object from a ListClarificationsQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListClarificationsQuery} message ListClarificationsQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListClarificationsQuery.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ListClarificationsQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListClarificationsQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListClarificationsQuery;
                })();

                contestant.ListClarificationsResponse = (function() {

                    /**
                     * Properties of a ListClarificationsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListClarificationsResponse
                     * @property {Array.<isuxportal.proto.resources.IClarification>|null} [clarifications] ListClarificationsResponse clarifications
                     */

                    /**
                     * Constructs a new ListClarificationsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListClarificationsResponse.
                     * @implements IListClarificationsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListClarificationsResponse=} [properties] Properties to set
                     */
                    function ListClarificationsResponse(properties) {
                        this.clarifications = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListClarificationsResponse clarifications.
                     * @member {Array.<isuxportal.proto.resources.IClarification>} clarifications
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @instance
                     */
                    ListClarificationsResponse.prototype.clarifications = $util.emptyArray;

                    /**
                     * Creates a new ListClarificationsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsResponse} ListClarificationsResponse instance
                     */
                    ListClarificationsResponse.create = function create(properties) {
                        return new ListClarificationsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListClarificationsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsResponse} message ListClarificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarifications != null && message.clarifications.length)
                            for (var i = 0; i < message.clarifications.length; ++i)
                                $root.isuxportal.proto.resources.Clarification.encode(message.clarifications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListClarificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListClarificationsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListClarificationsResponse} message ListClarificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListClarificationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsResponse} ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListClarificationsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.clarifications && message.clarifications.length))
                                    message.clarifications = [];
                                message.clarifications.push($root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListClarificationsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsResponse} ListClarificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListClarificationsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListClarificationsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListClarificationsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarifications != null && message.hasOwnProperty("clarifications")) {
                            if (!Array.isArray(message.clarifications))
                                return "clarifications: array expected";
                            for (var i = 0; i < message.clarifications.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarifications[i]);
                                if (error)
                                    return "clarifications." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListClarificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListClarificationsResponse} ListClarificationsResponse
                     */
                    ListClarificationsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListClarificationsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListClarificationsResponse();
                        if (object.clarifications) {
                            if (!Array.isArray(object.clarifications))
                                throw TypeError(".isuxportal.proto.services.contestant.ListClarificationsResponse.clarifications: array expected");
                            message.clarifications = [];
                            for (var i = 0; i < object.clarifications.length; ++i) {
                                if (typeof object.clarifications[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.contestant.ListClarificationsResponse.clarifications: object expected");
                                message.clarifications[i] = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarifications[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListClarificationsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListClarificationsResponse} message ListClarificationsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListClarificationsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.clarifications = [];
                        if (message.clarifications && message.clarifications.length) {
                            object.clarifications = [];
                            for (var j = 0; j < message.clarifications.length; ++j)
                                object.clarifications[j] = $root.isuxportal.proto.resources.Clarification.toObject(message.clarifications[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListClarificationsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListClarificationsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListClarificationsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListClarificationsResponse;
                })();

                contestant.RequestClarificationRequest = (function() {

                    /**
                     * Properties of a RequestClarificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IRequestClarificationRequest
                     * @property {string|null} [question] RequestClarificationRequest question
                     */

                    /**
                     * Constructs a new RequestClarificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a RequestClarificationRequest.
                     * @implements IRequestClarificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationRequest=} [properties] Properties to set
                     */
                    function RequestClarificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RequestClarificationRequest question.
                     * @member {string} question
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @instance
                     */
                    RequestClarificationRequest.prototype.question = "";

                    /**
                     * Creates a new RequestClarificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationRequest} RequestClarificationRequest instance
                     */
                    RequestClarificationRequest.create = function create(properties) {
                        return new RequestClarificationRequest(properties);
                    };

                    /**
                     * Encodes the specified RequestClarificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationRequest} message RequestClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RequestClarificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.question != null && Object.hasOwnProperty.call(message, "question"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.question);
                        return writer;
                    };

                    /**
                     * Encodes the specified RequestClarificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationRequest} message RequestClarificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RequestClarificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RequestClarificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationRequest} RequestClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RequestClarificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.RequestClarificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.question = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RequestClarificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationRequest} RequestClarificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RequestClarificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RequestClarificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RequestClarificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.question != null && message.hasOwnProperty("question"))
                            if (!$util.isString(message.question))
                                return "question: string expected";
                        return null;
                    };

                    /**
                     * Creates a RequestClarificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationRequest} RequestClarificationRequest
                     */
                    RequestClarificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.RequestClarificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.RequestClarificationRequest();
                        if (object.question != null)
                            message.question = String(object.question);
                        return message;
                    };

                    /**
                     * Creates a plain object from a RequestClarificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.RequestClarificationRequest} message RequestClarificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RequestClarificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.question = "";
                        if (message.question != null && message.hasOwnProperty("question"))
                            object.question = message.question;
                        return object;
                    };

                    /**
                     * Converts this RequestClarificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RequestClarificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RequestClarificationRequest;
                })();

                contestant.RequestClarificationResponse = (function() {

                    /**
                     * Properties of a RequestClarificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IRequestClarificationResponse
                     * @property {isuxportal.proto.resources.IClarification|null} [clarification] RequestClarificationResponse clarification
                     */

                    /**
                     * Constructs a new RequestClarificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a RequestClarificationResponse.
                     * @implements IRequestClarificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationResponse=} [properties] Properties to set
                     */
                    function RequestClarificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * RequestClarificationResponse clarification.
                     * @member {isuxportal.proto.resources.IClarification|null|undefined} clarification
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @instance
                     */
                    RequestClarificationResponse.prototype.clarification = null;

                    /**
                     * Creates a new RequestClarificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationResponse} RequestClarificationResponse instance
                     */
                    RequestClarificationResponse.create = function create(properties) {
                        return new RequestClarificationResponse(properties);
                    };

                    /**
                     * Encodes the specified RequestClarificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationResponse} message RequestClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RequestClarificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clarification != null && Object.hasOwnProperty.call(message, "clarification"))
                            $root.isuxportal.proto.resources.Clarification.encode(message.clarification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified RequestClarificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.RequestClarificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IRequestClarificationResponse} message RequestClarificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RequestClarificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a RequestClarificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationResponse} RequestClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RequestClarificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.RequestClarificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clarification = $root.isuxportal.proto.resources.Clarification.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a RequestClarificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationResponse} RequestClarificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RequestClarificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a RequestClarificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RequestClarificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clarification != null && message.hasOwnProperty("clarification")) {
                            var error = $root.isuxportal.proto.resources.Clarification.verify(message.clarification);
                            if (error)
                                return "clarification." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a RequestClarificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.RequestClarificationResponse} RequestClarificationResponse
                     */
                    RequestClarificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.RequestClarificationResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.RequestClarificationResponse();
                        if (object.clarification != null) {
                            if (typeof object.clarification !== "object")
                                throw TypeError(".isuxportal.proto.services.contestant.RequestClarificationResponse.clarification: object expected");
                            message.clarification = $root.isuxportal.proto.resources.Clarification.fromObject(object.clarification);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a RequestClarificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.RequestClarificationResponse} message RequestClarificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RequestClarificationResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.clarification = null;
                        if (message.clarification != null && message.hasOwnProperty("clarification"))
                            object.clarification = $root.isuxportal.proto.resources.Clarification.toObject(message.clarification, options);
                        return object;
                    };

                    /**
                     * Converts this RequestClarificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.RequestClarificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RequestClarificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return RequestClarificationResponse;
                })();

                contestant.DashboardQuery = (function() {

                    /**
                     * Properties of a DashboardQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IDashboardQuery
                     */

                    /**
                     * Constructs a new DashboardQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a DashboardQuery.
                     * @implements IDashboardQuery
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IDashboardQuery=} [properties] Properties to set
                     */
                    function DashboardQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DashboardQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.DashboardQuery} DashboardQuery instance
                     */
                    DashboardQuery.create = function create(properties) {
                        return new DashboardQuery(properties);
                    };

                    /**
                     * Encodes the specified DashboardQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardQuery} message DashboardQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardQuery} message DashboardQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.DashboardQuery} DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.DashboardQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DashboardQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.DashboardQuery} DashboardQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DashboardQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DashboardQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.DashboardQuery} DashboardQuery
                     */
                    DashboardQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.DashboardQuery)
                            return object;
                        return new $root.isuxportal.proto.services.contestant.DashboardQuery();
                    };

                    /**
                     * Creates a plain object from a DashboardQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.DashboardQuery} message DashboardQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardQuery.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DashboardQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.DashboardQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardQuery;
                })();

                contestant.DashboardResponse = (function() {

                    /**
                     * Properties of a DashboardResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IDashboardResponse
                     * @property {isuxportal.proto.resources.ILeaderboard|null} [leaderboard] DashboardResponse leaderboard
                     */

                    /**
                     * Constructs a new DashboardResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a DashboardResponse.
                     * @implements IDashboardResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IDashboardResponse=} [properties] Properties to set
                     */
                    function DashboardResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * DashboardResponse leaderboard.
                     * @member {isuxportal.proto.resources.ILeaderboard|null|undefined} leaderboard
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @instance
                     */
                    DashboardResponse.prototype.leaderboard = null;

                    /**
                     * Creates a new DashboardResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.DashboardResponse} DashboardResponse instance
                     */
                    DashboardResponse.create = function create(properties) {
                        return new DashboardResponse(properties);
                    };

                    /**
                     * Encodes the specified DashboardResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.leaderboard != null && Object.hasOwnProperty.call(message, "leaderboard"))
                            $root.isuxportal.proto.resources.Leaderboard.encode(message.leaderboard, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified DashboardResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.DashboardResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IDashboardResponse} message DashboardResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DashboardResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.DashboardResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DashboardResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.DashboardResponse} DashboardResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DashboardResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DashboardResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DashboardResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard")) {
                            var error = $root.isuxportal.proto.resources.Leaderboard.verify(message.leaderboard);
                            if (error)
                                return "leaderboard." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a DashboardResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.DashboardResponse} DashboardResponse
                     */
                    DashboardResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.DashboardResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.DashboardResponse();
                        if (object.leaderboard != null) {
                            if (typeof object.leaderboard !== "object")
                                throw TypeError(".isuxportal.proto.services.contestant.DashboardResponse.leaderboard: object expected");
                            message.leaderboard = $root.isuxportal.proto.resources.Leaderboard.fromObject(object.leaderboard);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a DashboardResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.DashboardResponse} message DashboardResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DashboardResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.leaderboard = null;
                        if (message.leaderboard != null && message.hasOwnProperty("leaderboard"))
                            object.leaderboard = $root.isuxportal.proto.resources.Leaderboard.toObject(message.leaderboard, options);
                        return object;
                    };

                    /**
                     * Converts this DashboardResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.DashboardResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DashboardResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DashboardResponse;
                })();

                contestant.ListContestantInstancesRequest = (function() {

                    /**
                     * Properties of a ListContestantInstancesRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListContestantInstancesRequest
                     */

                    /**
                     * Constructs a new ListContestantInstancesRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListContestantInstancesRequest.
                     * @implements IListContestantInstancesRequest
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesRequest=} [properties] Properties to set
                     */
                    function ListContestantInstancesRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new ListContestantInstancesRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesRequest} ListContestantInstancesRequest instance
                     */
                    ListContestantInstancesRequest.create = function create(properties) {
                        return new ListContestantInstancesRequest(properties);
                    };

                    /**
                     * Encodes the specified ListContestantInstancesRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesRequest} message ListContestantInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListContestantInstancesRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesRequest} message ListContestantInstancesRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesRequest} ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListContestantInstancesRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListContestantInstancesRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesRequest} ListContestantInstancesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListContestantInstancesRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListContestantInstancesRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a ListContestantInstancesRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesRequest} ListContestantInstancesRequest
                     */
                    ListContestantInstancesRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListContestantInstancesRequest)
                            return object;
                        return new $root.isuxportal.proto.services.contestant.ListContestantInstancesRequest();
                    };

                    /**
                     * Creates a plain object from a ListContestantInstancesRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListContestantInstancesRequest} message ListContestantInstancesRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListContestantInstancesRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this ListContestantInstancesRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListContestantInstancesRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListContestantInstancesRequest;
                })();

                contestant.ListContestantInstancesResponse = (function() {

                    /**
                     * Properties of a ListContestantInstancesResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListContestantInstancesResponse
                     * @property {Array.<isuxportal.proto.resources.IContestantInstance>|null} [contestantInstances] ListContestantInstancesResponse contestantInstances
                     */

                    /**
                     * Constructs a new ListContestantInstancesResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListContestantInstancesResponse.
                     * @implements IListContestantInstancesResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesResponse=} [properties] Properties to set
                     */
                    function ListContestantInstancesResponse(properties) {
                        this.contestantInstances = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListContestantInstancesResponse contestantInstances.
                     * @member {Array.<isuxportal.proto.resources.IContestantInstance>} contestantInstances
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @instance
                     */
                    ListContestantInstancesResponse.prototype.contestantInstances = $util.emptyArray;

                    /**
                     * Creates a new ListContestantInstancesResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesResponse} ListContestantInstancesResponse instance
                     */
                    ListContestantInstancesResponse.create = function create(properties) {
                        return new ListContestantInstancesResponse(properties);
                    };

                    /**
                     * Encodes the specified ListContestantInstancesResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesResponse} message ListContestantInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.contestantInstances != null && message.contestantInstances.length)
                            for (var i = 0; i < message.contestantInstances.length; ++i)
                                $root.isuxportal.proto.resources.ContestantInstance.encode(message.contestantInstances[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListContestantInstancesResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListContestantInstancesResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListContestantInstancesResponse} message ListContestantInstancesResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListContestantInstancesResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesResponse} ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListContestantInstancesResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.contestantInstances && message.contestantInstances.length))
                                    message.contestantInstances = [];
                                message.contestantInstances.push($root.isuxportal.proto.resources.ContestantInstance.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListContestantInstancesResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesResponse} ListContestantInstancesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListContestantInstancesResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListContestantInstancesResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListContestantInstancesResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.contestantInstances != null && message.hasOwnProperty("contestantInstances")) {
                            if (!Array.isArray(message.contestantInstances))
                                return "contestantInstances: array expected";
                            for (var i = 0; i < message.contestantInstances.length; ++i) {
                                var error = $root.isuxportal.proto.resources.ContestantInstance.verify(message.contestantInstances[i]);
                                if (error)
                                    return "contestantInstances." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListContestantInstancesResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListContestantInstancesResponse} ListContestantInstancesResponse
                     */
                    ListContestantInstancesResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListContestantInstancesResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListContestantInstancesResponse();
                        if (object.contestantInstances) {
                            if (!Array.isArray(object.contestantInstances))
                                throw TypeError(".isuxportal.proto.services.contestant.ListContestantInstancesResponse.contestantInstances: array expected");
                            message.contestantInstances = [];
                            for (var i = 0; i < object.contestantInstances.length; ++i) {
                                if (typeof object.contestantInstances[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.contestant.ListContestantInstancesResponse.contestantInstances: object expected");
                                message.contestantInstances[i] = $root.isuxportal.proto.resources.ContestantInstance.fromObject(object.contestantInstances[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListContestantInstancesResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListContestantInstancesResponse} message ListContestantInstancesResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListContestantInstancesResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.contestantInstances = [];
                        if (message.contestantInstances && message.contestantInstances.length) {
                            object.contestantInstances = [];
                            for (var j = 0; j < message.contestantInstances.length; ++j)
                                object.contestantInstances[j] = $root.isuxportal.proto.resources.ContestantInstance.toObject(message.contestantInstances[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListContestantInstancesResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListContestantInstancesResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListContestantInstancesResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListContestantInstancesResponse;
                })();

                contestant.ListNotificationsQuery = (function() {

                    /**
                     * Properties of a ListNotificationsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListNotificationsQuery
                     * @property {number|Long|null} [after] ListNotificationsQuery after
                     */

                    /**
                     * Constructs a new ListNotificationsQuery.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListNotificationsQuery.
                     * @implements IListNotificationsQuery
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListNotificationsQuery=} [properties] Properties to set
                     */
                    function ListNotificationsQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListNotificationsQuery after.
                     * @member {number|Long} after
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @instance
                     */
                    ListNotificationsQuery.prototype.after = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new ListNotificationsQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsQuery} ListNotificationsQuery instance
                     */
                    ListNotificationsQuery.create = function create(properties) {
                        return new ListNotificationsQuery(properties);
                    };

                    /**
                     * Encodes the specified ListNotificationsQuery message. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsQuery} message ListNotificationsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListNotificationsQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.after != null && Object.hasOwnProperty.call(message, "after"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.after);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListNotificationsQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsQuery} message ListNotificationsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListNotificationsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListNotificationsQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsQuery} ListNotificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListNotificationsQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListNotificationsQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.after = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListNotificationsQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsQuery} ListNotificationsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListNotificationsQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListNotificationsQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListNotificationsQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.after != null && message.hasOwnProperty("after"))
                            if (!$util.isInteger(message.after) && !(message.after && $util.isInteger(message.after.low) && $util.isInteger(message.after.high)))
                                return "after: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a ListNotificationsQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsQuery} ListNotificationsQuery
                     */
                    ListNotificationsQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListNotificationsQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListNotificationsQuery();
                        if (object.after != null)
                            if ($util.Long)
                                (message.after = $util.Long.fromValue(object.after)).unsigned = false;
                            else if (typeof object.after === "string")
                                message.after = parseInt(object.after, 10);
                            else if (typeof object.after === "number")
                                message.after = object.after;
                            else if (typeof object.after === "object")
                                message.after = new $util.LongBits(object.after.low >>> 0, object.after.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListNotificationsQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListNotificationsQuery} message ListNotificationsQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListNotificationsQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.after = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.after = options.longs === String ? "0" : 0;
                        if (message.after != null && message.hasOwnProperty("after"))
                            if (typeof message.after === "number")
                                object.after = options.longs === String ? String(message.after) : message.after;
                            else
                                object.after = options.longs === String ? $util.Long.prototype.toString.call(message.after) : options.longs === Number ? new $util.LongBits(message.after.low >>> 0, message.after.high >>> 0).toNumber() : message.after;
                        return object;
                    };

                    /**
                     * Converts this ListNotificationsQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListNotificationsQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListNotificationsQuery;
                })();

                contestant.ListNotificationsResponse = (function() {

                    /**
                     * Properties of a ListNotificationsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IListNotificationsResponse
                     * @property {number|Long|null} [lastAnsweredClarificationId] ListNotificationsResponse lastAnsweredClarificationId
                     * @property {Array.<isuxportal.proto.resources.INotification>|null} [notifications] ListNotificationsResponse notifications
                     */

                    /**
                     * Constructs a new ListNotificationsResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a ListNotificationsResponse.
                     * @implements IListNotificationsResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IListNotificationsResponse=} [properties] Properties to set
                     */
                    function ListNotificationsResponse(properties) {
                        this.notifications = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListNotificationsResponse lastAnsweredClarificationId.
                     * @member {number|Long} lastAnsweredClarificationId
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @instance
                     */
                    ListNotificationsResponse.prototype.lastAnsweredClarificationId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * ListNotificationsResponse notifications.
                     * @member {Array.<isuxportal.proto.resources.INotification>} notifications
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @instance
                     */
                    ListNotificationsResponse.prototype.notifications = $util.emptyArray;

                    /**
                     * Creates a new ListNotificationsResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsResponse} ListNotificationsResponse instance
                     */
                    ListNotificationsResponse.create = function create(properties) {
                        return new ListNotificationsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListNotificationsResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsResponse} message ListNotificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListNotificationsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.lastAnsweredClarificationId != null && Object.hasOwnProperty.call(message, "lastAnsweredClarificationId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.lastAnsweredClarificationId);
                        if (message.notifications != null && message.notifications.length)
                            for (var i = 0; i < message.notifications.length; ++i)
                                $root.isuxportal.proto.resources.Notification.encode(message.notifications[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListNotificationsResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.ListNotificationsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IListNotificationsResponse} message ListNotificationsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListNotificationsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListNotificationsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsResponse} ListNotificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListNotificationsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.ListNotificationsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.lastAnsweredClarificationId = reader.int64();
                                break;
                            case 2:
                                if (!(message.notifications && message.notifications.length))
                                    message.notifications = [];
                                message.notifications.push($root.isuxportal.proto.resources.Notification.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListNotificationsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsResponse} ListNotificationsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListNotificationsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListNotificationsResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListNotificationsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.lastAnsweredClarificationId != null && message.hasOwnProperty("lastAnsweredClarificationId"))
                            if (!$util.isInteger(message.lastAnsweredClarificationId) && !(message.lastAnsweredClarificationId && $util.isInteger(message.lastAnsweredClarificationId.low) && $util.isInteger(message.lastAnsweredClarificationId.high)))
                                return "lastAnsweredClarificationId: integer|Long expected";
                        if (message.notifications != null && message.hasOwnProperty("notifications")) {
                            if (!Array.isArray(message.notifications))
                                return "notifications: array expected";
                            for (var i = 0; i < message.notifications.length; ++i) {
                                var error = $root.isuxportal.proto.resources.Notification.verify(message.notifications[i]);
                                if (error)
                                    return "notifications." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListNotificationsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.ListNotificationsResponse} ListNotificationsResponse
                     */
                    ListNotificationsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.ListNotificationsResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.ListNotificationsResponse();
                        if (object.lastAnsweredClarificationId != null)
                            if ($util.Long)
                                (message.lastAnsweredClarificationId = $util.Long.fromValue(object.lastAnsweredClarificationId)).unsigned = false;
                            else if (typeof object.lastAnsweredClarificationId === "string")
                                message.lastAnsweredClarificationId = parseInt(object.lastAnsweredClarificationId, 10);
                            else if (typeof object.lastAnsweredClarificationId === "number")
                                message.lastAnsweredClarificationId = object.lastAnsweredClarificationId;
                            else if (typeof object.lastAnsweredClarificationId === "object")
                                message.lastAnsweredClarificationId = new $util.LongBits(object.lastAnsweredClarificationId.low >>> 0, object.lastAnsweredClarificationId.high >>> 0).toNumber();
                        if (object.notifications) {
                            if (!Array.isArray(object.notifications))
                                throw TypeError(".isuxportal.proto.services.contestant.ListNotificationsResponse.notifications: array expected");
                            message.notifications = [];
                            for (var i = 0; i < object.notifications.length; ++i) {
                                if (typeof object.notifications[i] !== "object")
                                    throw TypeError(".isuxportal.proto.services.contestant.ListNotificationsResponse.notifications: object expected");
                                message.notifications[i] = $root.isuxportal.proto.resources.Notification.fromObject(object.notifications[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListNotificationsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ListNotificationsResponse} message ListNotificationsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListNotificationsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.notifications = [];
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.lastAnsweredClarificationId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.lastAnsweredClarificationId = options.longs === String ? "0" : 0;
                        if (message.lastAnsweredClarificationId != null && message.hasOwnProperty("lastAnsweredClarificationId"))
                            if (typeof message.lastAnsweredClarificationId === "number")
                                object.lastAnsweredClarificationId = options.longs === String ? String(message.lastAnsweredClarificationId) : message.lastAnsweredClarificationId;
                            else
                                object.lastAnsweredClarificationId = options.longs === String ? $util.Long.prototype.toString.call(message.lastAnsweredClarificationId) : options.longs === Number ? new $util.LongBits(message.lastAnsweredClarificationId.low >>> 0, message.lastAnsweredClarificationId.high >>> 0).toNumber() : message.lastAnsweredClarificationId;
                        if (message.notifications && message.notifications.length) {
                            object.notifications = [];
                            for (var j = 0; j < message.notifications.length; ++j)
                                object.notifications[j] = $root.isuxportal.proto.resources.Notification.toObject(message.notifications[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListNotificationsResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.ListNotificationsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListNotificationsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return ListNotificationsResponse;
                })();

                contestant.SubscribeNotificationRequest = (function() {

                    /**
                     * Properties of a SubscribeNotificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface ISubscribeNotificationRequest
                     * @property {string|null} [endpoint] SubscribeNotificationRequest endpoint
                     * @property {string|null} [p256dh] SubscribeNotificationRequest p256dh
                     * @property {string|null} [auth] SubscribeNotificationRequest auth
                     */

                    /**
                     * Constructs a new SubscribeNotificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a SubscribeNotificationRequest.
                     * @implements ISubscribeNotificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationRequest=} [properties] Properties to set
                     */
                    function SubscribeNotificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * SubscribeNotificationRequest endpoint.
                     * @member {string} endpoint
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @instance
                     */
                    SubscribeNotificationRequest.prototype.endpoint = "";

                    /**
                     * SubscribeNotificationRequest p256dh.
                     * @member {string} p256dh
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @instance
                     */
                    SubscribeNotificationRequest.prototype.p256dh = "";

                    /**
                     * SubscribeNotificationRequest auth.
                     * @member {string} auth
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @instance
                     */
                    SubscribeNotificationRequest.prototype.auth = "";

                    /**
                     * Creates a new SubscribeNotificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationRequest} SubscribeNotificationRequest instance
                     */
                    SubscribeNotificationRequest.create = function create(properties) {
                        return new SubscribeNotificationRequest(properties);
                    };

                    /**
                     * Encodes the specified SubscribeNotificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationRequest} message SubscribeNotificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeNotificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                        if (message.p256dh != null && Object.hasOwnProperty.call(message, "p256dh"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.p256dh);
                        if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.auth);
                        return writer;
                    };

                    /**
                     * Encodes the specified SubscribeNotificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationRequest} message SubscribeNotificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeNotificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SubscribeNotificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationRequest} SubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeNotificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.SubscribeNotificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.endpoint = reader.string();
                                break;
                            case 2:
                                message.p256dh = reader.string();
                                break;
                            case 3:
                                message.auth = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SubscribeNotificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationRequest} SubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeNotificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SubscribeNotificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscribeNotificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                            if (!$util.isString(message.endpoint))
                                return "endpoint: string expected";
                        if (message.p256dh != null && message.hasOwnProperty("p256dh"))
                            if (!$util.isString(message.p256dh))
                                return "p256dh: string expected";
                        if (message.auth != null && message.hasOwnProperty("auth"))
                            if (!$util.isString(message.auth))
                                return "auth: string expected";
                        return null;
                    };

                    /**
                     * Creates a SubscribeNotificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationRequest} SubscribeNotificationRequest
                     */
                    SubscribeNotificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.SubscribeNotificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.SubscribeNotificationRequest();
                        if (object.endpoint != null)
                            message.endpoint = String(object.endpoint);
                        if (object.p256dh != null)
                            message.p256dh = String(object.p256dh);
                        if (object.auth != null)
                            message.auth = String(object.auth);
                        return message;
                    };

                    /**
                     * Creates a plain object from a SubscribeNotificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.SubscribeNotificationRequest} message SubscribeNotificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscribeNotificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.endpoint = "";
                            object.p256dh = "";
                            object.auth = "";
                        }
                        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                            object.endpoint = message.endpoint;
                        if (message.p256dh != null && message.hasOwnProperty("p256dh"))
                            object.p256dh = message.p256dh;
                        if (message.auth != null && message.hasOwnProperty("auth"))
                            object.auth = message.auth;
                        return object;
                    };

                    /**
                     * Converts this SubscribeNotificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscribeNotificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscribeNotificationRequest;
                })();

                contestant.SubscribeNotificationResponse = (function() {

                    /**
                     * Properties of a SubscribeNotificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface ISubscribeNotificationResponse
                     */

                    /**
                     * Constructs a new SubscribeNotificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents a SubscribeNotificationResponse.
                     * @implements ISubscribeNotificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationResponse=} [properties] Properties to set
                     */
                    function SubscribeNotificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new SubscribeNotificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationResponse} SubscribeNotificationResponse instance
                     */
                    SubscribeNotificationResponse.create = function create(properties) {
                        return new SubscribeNotificationResponse(properties);
                    };

                    /**
                     * Encodes the specified SubscribeNotificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationResponse} message SubscribeNotificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeNotificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified SubscribeNotificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.SubscribeNotificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.ISubscribeNotificationResponse} message SubscribeNotificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubscribeNotificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a SubscribeNotificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationResponse} SubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeNotificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.SubscribeNotificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a SubscribeNotificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationResponse} SubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubscribeNotificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a SubscribeNotificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubscribeNotificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a SubscribeNotificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.SubscribeNotificationResponse} SubscribeNotificationResponse
                     */
                    SubscribeNotificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.SubscribeNotificationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.contestant.SubscribeNotificationResponse();
                    };

                    /**
                     * Creates a plain object from a SubscribeNotificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.SubscribeNotificationResponse} message SubscribeNotificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubscribeNotificationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this SubscribeNotificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.SubscribeNotificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubscribeNotificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return SubscribeNotificationResponse;
                })();

                contestant.UnsubscribeNotificationRequest = (function() {

                    /**
                     * Properties of an UnsubscribeNotificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IUnsubscribeNotificationRequest
                     * @property {string|null} [endpoint] UnsubscribeNotificationRequest endpoint
                     */

                    /**
                     * Constructs a new UnsubscribeNotificationRequest.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents an UnsubscribeNotificationRequest.
                     * @implements IUnsubscribeNotificationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest=} [properties] Properties to set
                     */
                    function UnsubscribeNotificationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UnsubscribeNotificationRequest endpoint.
                     * @member {string} endpoint
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @instance
                     */
                    UnsubscribeNotificationRequest.prototype.endpoint = "";

                    /**
                     * Creates a new UnsubscribeNotificationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationRequest} UnsubscribeNotificationRequest instance
                     */
                    UnsubscribeNotificationRequest.create = function create(properties) {
                        return new UnsubscribeNotificationRequest(properties);
                    };

                    /**
                     * Encodes the specified UnsubscribeNotificationRequest message. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest} message UnsubscribeNotificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeNotificationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoint);
                        return writer;
                    };

                    /**
                     * Encodes the specified UnsubscribeNotificationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationRequest} message UnsubscribeNotificationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeNotificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UnsubscribeNotificationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationRequest} UnsubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeNotificationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.UnsubscribeNotificationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.endpoint = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UnsubscribeNotificationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationRequest} UnsubscribeNotificationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeNotificationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UnsubscribeNotificationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UnsubscribeNotificationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                            if (!$util.isString(message.endpoint))
                                return "endpoint: string expected";
                        return null;
                    };

                    /**
                     * Creates an UnsubscribeNotificationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationRequest} UnsubscribeNotificationRequest
                     */
                    UnsubscribeNotificationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.UnsubscribeNotificationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.contestant.UnsubscribeNotificationRequest();
                        if (object.endpoint != null)
                            message.endpoint = String(object.endpoint);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UnsubscribeNotificationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @static
                     * @param {isuxportal.proto.services.contestant.UnsubscribeNotificationRequest} message UnsubscribeNotificationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UnsubscribeNotificationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.endpoint = "";
                        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                            object.endpoint = message.endpoint;
                        return object;
                    };

                    /**
                     * Converts this UnsubscribeNotificationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UnsubscribeNotificationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UnsubscribeNotificationRequest;
                })();

                contestant.UnsubscribeNotificationResponse = (function() {

                    /**
                     * Properties of an UnsubscribeNotificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @interface IUnsubscribeNotificationResponse
                     */

                    /**
                     * Constructs a new UnsubscribeNotificationResponse.
                     * @memberof isuxportal.proto.services.contestant
                     * @classdesc Represents an UnsubscribeNotificationResponse.
                     * @implements IUnsubscribeNotificationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse=} [properties] Properties to set
                     */
                    function UnsubscribeNotificationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new UnsubscribeNotificationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationResponse} UnsubscribeNotificationResponse instance
                     */
                    UnsubscribeNotificationResponse.create = function create(properties) {
                        return new UnsubscribeNotificationResponse(properties);
                    };

                    /**
                     * Encodes the specified UnsubscribeNotificationResponse message. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse} message UnsubscribeNotificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeNotificationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified UnsubscribeNotificationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.contestant.UnsubscribeNotificationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.IUnsubscribeNotificationResponse} message UnsubscribeNotificationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UnsubscribeNotificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UnsubscribeNotificationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationResponse} UnsubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeNotificationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.contestant.UnsubscribeNotificationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UnsubscribeNotificationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationResponse} UnsubscribeNotificationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UnsubscribeNotificationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UnsubscribeNotificationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UnsubscribeNotificationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an UnsubscribeNotificationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.contestant.UnsubscribeNotificationResponse} UnsubscribeNotificationResponse
                     */
                    UnsubscribeNotificationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.contestant.UnsubscribeNotificationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.contestant.UnsubscribeNotificationResponse();
                    };

                    /**
                     * Creates a plain object from an UnsubscribeNotificationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @static
                     * @param {isuxportal.proto.services.contestant.UnsubscribeNotificationResponse} message UnsubscribeNotificationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UnsubscribeNotificationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this UnsubscribeNotificationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.contestant.UnsubscribeNotificationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UnsubscribeNotificationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UnsubscribeNotificationResponse;
                })();

                return contestant;
            })();

            services.registration = (function() {

                /**
                 * Namespace registration.
                 * @memberof isuxportal.proto.services
                 * @namespace
                 */
                var registration = {};

                registration.CreateTeamRequest = (function() {

                    /**
                     * Properties of a CreateTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface ICreateTeamRequest
                     * @property {string|null} [teamName] CreateTeamRequest teamName
                     * @property {string|null} [name] CreateTeamRequest name
                     * @property {string|null} [emailAddress] CreateTeamRequest emailAddress
                     * @property {boolean|null} [isStudent] CreateTeamRequest isStudent
                     * @property {boolean|null} [hidden] CreateTeamRequest hidden
                     */

                    /**
                     * Constructs a new CreateTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a CreateTeamRequest.
                     * @implements ICreateTeamRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest=} [properties] Properties to set
                     */
                    function CreateTeamRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateTeamRequest teamName.
                     * @member {string} teamName
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.teamName = "";

                    /**
                     * CreateTeamRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.name = "";

                    /**
                     * CreateTeamRequest emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.emailAddress = "";

                    /**
                     * CreateTeamRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.isStudent = false;

                    /**
                     * CreateTeamRequest hidden.
                     * @member {boolean} hidden
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     */
                    CreateTeamRequest.prototype.hidden = false;

                    /**
                     * Creates a new CreateTeamRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest instance
                     */
                    CreateTeamRequest.create = function create(properties) {
                        return new CreateTeamRequest(properties);
                    };

                    /**
                     * Encodes the specified CreateTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest} message CreateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.teamName);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emailAddress);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.hidden);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamRequest} message CreateTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.CreateTeamRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamName = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.emailAddress = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            case 16:
                                message.hidden = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTeamRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTeamRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTeamRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            if (!$util.isString(message.teamName))
                                return "teamName: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        if (message.hidden != null && message.hasOwnProperty("hidden"))
                            if (typeof message.hidden !== "boolean")
                                return "hidden: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a CreateTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.CreateTeamRequest} CreateTeamRequest
                     */
                    CreateTeamRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.CreateTeamRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.CreateTeamRequest();
                        if (object.teamName != null)
                            message.teamName = String(object.teamName);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        if (object.hidden != null)
                            message.hidden = Boolean(object.hidden);
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTeamRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.CreateTeamRequest} message CreateTeamRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTeamRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamName = "";
                            object.name = "";
                            object.emailAddress = "";
                            object.isStudent = false;
                            object.hidden = false;
                        }
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            object.teamName = message.teamName;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        if (message.hidden != null && message.hasOwnProperty("hidden"))
                            object.hidden = message.hidden;
                        return object;
                    };

                    /**
                     * Converts this CreateTeamRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.CreateTeamRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTeamRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTeamRequest;
                })();

                registration.CreateTeamResponse = (function() {

                    /**
                     * Properties of a CreateTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface ICreateTeamResponse
                     * @property {number|Long|null} [teamId] CreateTeamResponse teamId
                     */

                    /**
                     * Constructs a new CreateTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a CreateTeamResponse.
                     * @implements ICreateTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse=} [properties] Properties to set
                     */
                    function CreateTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CreateTeamResponse teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @instance
                     */
                    CreateTeamResponse.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Creates a new CreateTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse instance
                     */
                    CreateTeamResponse.create = function create(properties) {
                        return new CreateTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified CreateTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse} message CreateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        return writer;
                    };

                    /**
                     * Encodes the specified CreateTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.CreateTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.ICreateTeamResponse} message CreateTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CreateTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.CreateTeamResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CreateTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CreateTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CreateTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CreateTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        return null;
                    };

                    /**
                     * Creates a CreateTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.CreateTeamResponse} CreateTeamResponse
                     */
                    CreateTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.CreateTeamResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.CreateTeamResponse();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        return message;
                    };

                    /**
                     * Creates a plain object from a CreateTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.CreateTeamResponse} message CreateTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CreateTeamResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        return object;
                    };

                    /**
                     * Converts this CreateTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.CreateTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CreateTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return CreateTeamResponse;
                })();

                registration.JoinTeamRequest = (function() {

                    /**
                     * Properties of a JoinTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IJoinTeamRequest
                     * @property {number|Long|null} [teamId] JoinTeamRequest teamId
                     * @property {string|null} [inviteToken] JoinTeamRequest inviteToken
                     * @property {string|null} [name] JoinTeamRequest name
                     * @property {boolean|null} [isStudent] JoinTeamRequest isStudent
                     */

                    /**
                     * Constructs a new JoinTeamRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a JoinTeamRequest.
                     * @implements IJoinTeamRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest=} [properties] Properties to set
                     */
                    function JoinTeamRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * JoinTeamRequest teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * JoinTeamRequest inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.inviteToken = "";

                    /**
                     * JoinTeamRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.name = "";

                    /**
                     * JoinTeamRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     */
                    JoinTeamRequest.prototype.isStudent = false;

                    /**
                     * Creates a new JoinTeamRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest instance
                     */
                    JoinTeamRequest.create = function create(properties) {
                        return new JoinTeamRequest(properties);
                    };

                    /**
                     * Encodes the specified JoinTeamRequest message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest} message JoinTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteToken);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinTeamRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamRequest} message JoinTeamRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.JoinTeamRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.inviteToken = reader.string();
                                break;
                            case 3:
                                message.name = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinTeamRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinTeamRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JoinTeamRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        return null;
                    };

                    /**
                     * Creates a JoinTeamRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.JoinTeamRequest} JoinTeamRequest
                     */
                    JoinTeamRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.JoinTeamRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.JoinTeamRequest();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        return message;
                    };

                    /**
                     * Creates a plain object from a JoinTeamRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.JoinTeamRequest} message JoinTeamRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinTeamRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                            object.inviteToken = "";
                            object.name = "";
                            object.isStudent = false;
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        return object;
                    };

                    /**
                     * Converts this JoinTeamRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.JoinTeamRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinTeamRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinTeamRequest;
                })();

                registration.JoinTeamResponse = (function() {

                    /**
                     * Properties of a JoinTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IJoinTeamResponse
                     */

                    /**
                     * Constructs a new JoinTeamResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a JoinTeamResponse.
                     * @implements IJoinTeamResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse=} [properties] Properties to set
                     */
                    function JoinTeamResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new JoinTeamResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse instance
                     */
                    JoinTeamResponse.create = function create(properties) {
                        return new JoinTeamResponse(properties);
                    };

                    /**
                     * Encodes the specified JoinTeamResponse message. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse} message JoinTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified JoinTeamResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.JoinTeamResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IJoinTeamResponse} message JoinTeamResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    JoinTeamResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.JoinTeamResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a JoinTeamResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    JoinTeamResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a JoinTeamResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    JoinTeamResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a JoinTeamResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.JoinTeamResponse} JoinTeamResponse
                     */
                    JoinTeamResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.JoinTeamResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.JoinTeamResponse();
                    };

                    /**
                     * Creates a plain object from a JoinTeamResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.JoinTeamResponse} message JoinTeamResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    JoinTeamResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this JoinTeamResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.JoinTeamResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    JoinTeamResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return JoinTeamResponse;
                })();

                registration.GetRegistrationSessionQuery = (function() {

                    /**
                     * Properties of a GetRegistrationSessionQuery.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IGetRegistrationSessionQuery
                     * @property {number|Long|null} [teamId] GetRegistrationSessionQuery teamId
                     * @property {string|null} [inviteToken] GetRegistrationSessionQuery inviteToken
                     * @property {string|null} [bypassToken] GetRegistrationSessionQuery bypassToken
                     */

                    /**
                     * Constructs a new GetRegistrationSessionQuery.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a GetRegistrationSessionQuery.
                     * @implements IGetRegistrationSessionQuery
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery=} [properties] Properties to set
                     */
                    function GetRegistrationSessionQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetRegistrationSessionQuery teamId.
                     * @member {number|Long} teamId
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     */
                    GetRegistrationSessionQuery.prototype.teamId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * GetRegistrationSessionQuery inviteToken.
                     * @member {string} inviteToken
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     */
                    GetRegistrationSessionQuery.prototype.inviteToken = "";

                    /**
                     * GetRegistrationSessionQuery bypassToken.
                     * @member {string} bypassToken
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     */
                    GetRegistrationSessionQuery.prototype.bypassToken = "";

                    /**
                     * Creates a new GetRegistrationSessionQuery instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery instance
                     */
                    GetRegistrationSessionQuery.create = function create(properties) {
                        return new GetRegistrationSessionQuery(properties);
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery} message GetRegistrationSessionQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.teamId);
                        if (message.inviteToken != null && Object.hasOwnProperty.call(message, "inviteToken"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.inviteToken);
                        if (message.bypassToken != null && Object.hasOwnProperty.call(message, "bypassToken"))
                            writer.uint32(/* id 16, wireType 2 =*/130).string(message.bypassToken);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionQuery message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionQuery} message GetRegistrationSessionQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamId = reader.int64();
                                break;
                            case 2:
                                message.inviteToken = reader.string();
                                break;
                            case 16:
                                message.bypassToken = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetRegistrationSessionQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetRegistrationSessionQuery message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetRegistrationSessionQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId) && !(message.teamId && $util.isInteger(message.teamId.low) && $util.isInteger(message.teamId.high)))
                                return "teamId: integer|Long expected";
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            if (!$util.isString(message.inviteToken))
                                return "inviteToken: string expected";
                        if (message.bypassToken != null && message.hasOwnProperty("bypassToken"))
                            if (!$util.isString(message.bypassToken))
                                return "bypassToken: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetRegistrationSessionQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionQuery} GetRegistrationSessionQuery
                     */
                    GetRegistrationSessionQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionQuery();
                        if (object.teamId != null)
                            if ($util.Long)
                                (message.teamId = $util.Long.fromValue(object.teamId)).unsigned = false;
                            else if (typeof object.teamId === "string")
                                message.teamId = parseInt(object.teamId, 10);
                            else if (typeof object.teamId === "number")
                                message.teamId = object.teamId;
                            else if (typeof object.teamId === "object")
                                message.teamId = new $util.LongBits(object.teamId.low >>> 0, object.teamId.high >>> 0).toNumber();
                        if (object.inviteToken != null)
                            message.inviteToken = String(object.inviteToken);
                        if (object.bypassToken != null)
                            message.bypassToken = String(object.bypassToken);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetRegistrationSessionQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @static
                     * @param {isuxportal.proto.services.registration.GetRegistrationSessionQuery} message GetRegistrationSessionQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetRegistrationSessionQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.teamId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.teamId = options.longs === String ? "0" : 0;
                            object.inviteToken = "";
                            object.bypassToken = "";
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (typeof message.teamId === "number")
                                object.teamId = options.longs === String ? String(message.teamId) : message.teamId;
                            else
                                object.teamId = options.longs === String ? $util.Long.prototype.toString.call(message.teamId) : options.longs === Number ? new $util.LongBits(message.teamId.low >>> 0, message.teamId.high >>> 0).toNumber() : message.teamId;
                        if (message.inviteToken != null && message.hasOwnProperty("inviteToken"))
                            object.inviteToken = message.inviteToken;
                        if (message.bypassToken != null && message.hasOwnProperty("bypassToken"))
                            object.bypassToken = message.bypassToken;
                        return object;
                    };

                    /**
                     * Converts this GetRegistrationSessionQuery to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetRegistrationSessionQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return GetRegistrationSessionQuery;
                })();

                registration.GetRegistrationSessionResponse = (function() {

                    /**
                     * Properties of a GetRegistrationSessionResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IGetRegistrationSessionResponse
                     * @property {isuxportal.proto.resources.ITeam|null} [team] GetRegistrationSessionResponse team
                     * @property {isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status|null} [status] GetRegistrationSessionResponse status
                     * @property {string|null} [githubLogin] GetRegistrationSessionResponse githubLogin
                     * @property {string|null} [githubAvatarUrl] GetRegistrationSessionResponse githubAvatarUrl
                     * @property {string|null} [discordTag] GetRegistrationSessionResponse discordTag
                     * @property {string|null} [discordAvatarUrl] GetRegistrationSessionResponse discordAvatarUrl
                     * @property {string|null} [memberInviteUrl] GetRegistrationSessionResponse memberInviteUrl
                     * @property {string|null} [discordServerId] GetRegistrationSessionResponse discordServerId
                     */

                    /**
                     * Constructs a new GetRegistrationSessionResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a GetRegistrationSessionResponse.
                     * @implements IGetRegistrationSessionResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse=} [properties] Properties to set
                     */
                    function GetRegistrationSessionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * GetRegistrationSessionResponse team.
                     * @member {isuxportal.proto.resources.ITeam|null|undefined} team
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.team = null;

                    /**
                     * GetRegistrationSessionResponse status.
                     * @member {isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status} status
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.status = 0;

                    /**
                     * GetRegistrationSessionResponse githubLogin.
                     * @member {string} githubLogin
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.githubLogin = "";

                    /**
                     * GetRegistrationSessionResponse githubAvatarUrl.
                     * @member {string} githubAvatarUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.githubAvatarUrl = "";

                    /**
                     * GetRegistrationSessionResponse discordTag.
                     * @member {string} discordTag
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordTag = "";

                    /**
                     * GetRegistrationSessionResponse discordAvatarUrl.
                     * @member {string} discordAvatarUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordAvatarUrl = "";

                    /**
                     * GetRegistrationSessionResponse memberInviteUrl.
                     * @member {string} memberInviteUrl
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.memberInviteUrl = "";

                    /**
                     * GetRegistrationSessionResponse discordServerId.
                     * @member {string} discordServerId
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     */
                    GetRegistrationSessionResponse.prototype.discordServerId = "";

                    /**
                     * Creates a new GetRegistrationSessionResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse instance
                     */
                    GetRegistrationSessionResponse.create = function create(properties) {
                        return new GetRegistrationSessionResponse(properties);
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse} message GetRegistrationSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.team != null && Object.hasOwnProperty.call(message, "team"))
                            $root.isuxportal.proto.resources.Team.encode(message.team, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
                        if (message.githubLogin != null && Object.hasOwnProperty.call(message, "githubLogin"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.githubLogin);
                        if (message.githubAvatarUrl != null && Object.hasOwnProperty.call(message, "githubAvatarUrl"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.githubAvatarUrl);
                        if (message.discordTag != null && Object.hasOwnProperty.call(message, "discordTag"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.discordTag);
                        if (message.discordAvatarUrl != null && Object.hasOwnProperty.call(message, "discordAvatarUrl"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.discordAvatarUrl);
                        if (message.memberInviteUrl != null && Object.hasOwnProperty.call(message, "memberInviteUrl"))
                            writer.uint32(/* id 7, wireType 2 =*/58).string(message.memberInviteUrl);
                        if (message.discordServerId != null && Object.hasOwnProperty.call(message, "discordServerId"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.discordServerId);
                        return writer;
                    };

                    /**
                     * Encodes the specified GetRegistrationSessionResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.GetRegistrationSessionResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IGetRegistrationSessionResponse} message GetRegistrationSessionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GetRegistrationSessionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.team = $root.isuxportal.proto.resources.Team.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.status = reader.int32();
                                break;
                            case 3:
                                message.githubLogin = reader.string();
                                break;
                            case 4:
                                message.githubAvatarUrl = reader.string();
                                break;
                            case 5:
                                message.discordTag = reader.string();
                                break;
                            case 6:
                                message.discordAvatarUrl = reader.string();
                                break;
                            case 7:
                                message.memberInviteUrl = reader.string();
                                break;
                            case 8:
                                message.discordServerId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a GetRegistrationSessionResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GetRegistrationSessionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a GetRegistrationSessionResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GetRegistrationSessionResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.team != null && message.hasOwnProperty("team")) {
                            var error = $root.isuxportal.proto.resources.Team.verify(message.team);
                            if (error)
                                return "team." + error;
                        }
                        if (message.status != null && message.hasOwnProperty("status"))
                            switch (message.status) {
                            default:
                                return "status: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            }
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            if (!$util.isString(message.githubLogin))
                                return "githubLogin: string expected";
                        if (message.githubAvatarUrl != null && message.hasOwnProperty("githubAvatarUrl"))
                            if (!$util.isString(message.githubAvatarUrl))
                                return "githubAvatarUrl: string expected";
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            if (!$util.isString(message.discordTag))
                                return "discordTag: string expected";
                        if (message.discordAvatarUrl != null && message.hasOwnProperty("discordAvatarUrl"))
                            if (!$util.isString(message.discordAvatarUrl))
                                return "discordAvatarUrl: string expected";
                        if (message.memberInviteUrl != null && message.hasOwnProperty("memberInviteUrl"))
                            if (!$util.isString(message.memberInviteUrl))
                                return "memberInviteUrl: string expected";
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            if (!$util.isString(message.discordServerId))
                                return "discordServerId: string expected";
                        return null;
                    };

                    /**
                     * Creates a GetRegistrationSessionResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.GetRegistrationSessionResponse} GetRegistrationSessionResponse
                     */
                    GetRegistrationSessionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse();
                        if (object.team != null) {
                            if (typeof object.team !== "object")
                                throw TypeError(".isuxportal.proto.services.registration.GetRegistrationSessionResponse.team: object expected");
                            message.team = $root.isuxportal.proto.resources.Team.fromObject(object.team);
                        }
                        switch (object.status) {
                        case "CLOSED":
                        case 0:
                            message.status = 0;
                            break;
                        case "NOT_JOINABLE":
                        case 1:
                            message.status = 1;
                            break;
                        case "NOT_LOGGED_IN":
                        case 2:
                            message.status = 2;
                            break;
                        case "CREATABLE":
                        case 3:
                            message.status = 3;
                            break;
                        case "JOINABLE":
                        case 4:
                            message.status = 4;
                            break;
                        case "JOINED":
                        case 5:
                            message.status = 5;
                            break;
                        }
                        if (object.githubLogin != null)
                            message.githubLogin = String(object.githubLogin);
                        if (object.githubAvatarUrl != null)
                            message.githubAvatarUrl = String(object.githubAvatarUrl);
                        if (object.discordTag != null)
                            message.discordTag = String(object.discordTag);
                        if (object.discordAvatarUrl != null)
                            message.discordAvatarUrl = String(object.discordAvatarUrl);
                        if (object.memberInviteUrl != null)
                            message.memberInviteUrl = String(object.memberInviteUrl);
                        if (object.discordServerId != null)
                            message.discordServerId = String(object.discordServerId);
                        return message;
                    };

                    /**
                     * Creates a plain object from a GetRegistrationSessionResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.GetRegistrationSessionResponse} message GetRegistrationSessionResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GetRegistrationSessionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.team = null;
                            object.status = options.enums === String ? "CLOSED" : 0;
                            object.githubLogin = "";
                            object.githubAvatarUrl = "";
                            object.discordTag = "";
                            object.discordAvatarUrl = "";
                            object.memberInviteUrl = "";
                            object.discordServerId = "";
                        }
                        if (message.team != null && message.hasOwnProperty("team"))
                            object.team = $root.isuxportal.proto.resources.Team.toObject(message.team, options);
                        if (message.status != null && message.hasOwnProperty("status"))
                            object.status = options.enums === String ? $root.isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status[message.status] : message.status;
                        if (message.githubLogin != null && message.hasOwnProperty("githubLogin"))
                            object.githubLogin = message.githubLogin;
                        if (message.githubAvatarUrl != null && message.hasOwnProperty("githubAvatarUrl"))
                            object.githubAvatarUrl = message.githubAvatarUrl;
                        if (message.discordTag != null && message.hasOwnProperty("discordTag"))
                            object.discordTag = message.discordTag;
                        if (message.discordAvatarUrl != null && message.hasOwnProperty("discordAvatarUrl"))
                            object.discordAvatarUrl = message.discordAvatarUrl;
                        if (message.memberInviteUrl != null && message.hasOwnProperty("memberInviteUrl"))
                            object.memberInviteUrl = message.memberInviteUrl;
                        if (message.discordServerId != null && message.hasOwnProperty("discordServerId"))
                            object.discordServerId = message.discordServerId;
                        return object;
                    };

                    /**
                     * Converts this GetRegistrationSessionResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.GetRegistrationSessionResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GetRegistrationSessionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Status enum.
                     * @name isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status
                     * @enum {number}
                     * @property {number} CLOSED=0 CLOSED value
                     * @property {number} NOT_JOINABLE=1 NOT_JOINABLE value
                     * @property {number} NOT_LOGGED_IN=2 NOT_LOGGED_IN value
                     * @property {number} CREATABLE=3 CREATABLE value
                     * @property {number} JOINABLE=4 JOINABLE value
                     * @property {number} JOINED=5 JOINED value
                     */
                    GetRegistrationSessionResponse.Status = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "CLOSED"] = 0;
                        values[valuesById[1] = "NOT_JOINABLE"] = 1;
                        values[valuesById[2] = "NOT_LOGGED_IN"] = 2;
                        values[valuesById[3] = "CREATABLE"] = 3;
                        values[valuesById[4] = "JOINABLE"] = 4;
                        values[valuesById[5] = "JOINED"] = 5;
                        return values;
                    })();

                    return GetRegistrationSessionResponse;
                })();

                registration.UpdateRegistrationRequest = (function() {

                    /**
                     * Properties of an UpdateRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IUpdateRegistrationRequest
                     * @property {string|null} [teamName] UpdateRegistrationRequest teamName
                     * @property {string|null} [name] UpdateRegistrationRequest name
                     * @property {string|null} [emailAddress] UpdateRegistrationRequest emailAddress
                     * @property {boolean|null} [isStudent] UpdateRegistrationRequest isStudent
                     */

                    /**
                     * Constructs a new UpdateRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents an UpdateRegistrationRequest.
                     * @implements IUpdateRegistrationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest=} [properties] Properties to set
                     */
                    function UpdateRegistrationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * UpdateRegistrationRequest teamName.
                     * @member {string} teamName
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.teamName = "";

                    /**
                     * UpdateRegistrationRequest name.
                     * @member {string} name
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.name = "";

                    /**
                     * UpdateRegistrationRequest emailAddress.
                     * @member {string} emailAddress
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.emailAddress = "";

                    /**
                     * UpdateRegistrationRequest isStudent.
                     * @member {boolean} isStudent
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     */
                    UpdateRegistrationRequest.prototype.isStudent = false;

                    /**
                     * Creates a new UpdateRegistrationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest instance
                     */
                    UpdateRegistrationRequest.create = function create(properties) {
                        return new UpdateRegistrationRequest(properties);
                    };

                    /**
                     * Encodes the specified UpdateRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest} message UpdateRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.teamName);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.emailAddress);
                        if (message.isStudent != null && Object.hasOwnProperty.call(message, "isStudent"))
                            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isStudent);
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationRequest} message UpdateRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.UpdateRegistrationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.teamName = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            case 3:
                                message.emailAddress = reader.string();
                                break;
                            case 4:
                                message.isStudent = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateRegistrationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateRegistrationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            if (!$util.isString(message.teamName))
                                return "teamName: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            if (!$util.isString(message.emailAddress))
                                return "emailAddress: string expected";
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            if (typeof message.isStudent !== "boolean")
                                return "isStudent: boolean expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationRequest} UpdateRegistrationRequest
                     */
                    UpdateRegistrationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.UpdateRegistrationRequest)
                            return object;
                        var message = new $root.isuxportal.proto.services.registration.UpdateRegistrationRequest();
                        if (object.teamName != null)
                            message.teamName = String(object.teamName);
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.emailAddress != null)
                            message.emailAddress = String(object.emailAddress);
                        if (object.isStudent != null)
                            message.isStudent = Boolean(object.isStudent);
                        return message;
                    };

                    /**
                     * Creates a plain object from an UpdateRegistrationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.UpdateRegistrationRequest} message UpdateRegistrationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateRegistrationRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.teamName = "";
                            object.name = "";
                            object.emailAddress = "";
                            object.isStudent = false;
                        }
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            object.teamName = message.teamName;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
                            object.emailAddress = message.emailAddress;
                        if (message.isStudent != null && message.hasOwnProperty("isStudent"))
                            object.isStudent = message.isStudent;
                        return object;
                    };

                    /**
                     * Converts this UpdateRegistrationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateRegistrationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateRegistrationRequest;
                })();

                registration.UpdateRegistrationResponse = (function() {

                    /**
                     * Properties of an UpdateRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IUpdateRegistrationResponse
                     */

                    /**
                     * Constructs a new UpdateRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents an UpdateRegistrationResponse.
                     * @implements IUpdateRegistrationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse=} [properties] Properties to set
                     */
                    function UpdateRegistrationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new UpdateRegistrationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse instance
                     */
                    UpdateRegistrationResponse.create = function create(properties) {
                        return new UpdateRegistrationResponse(properties);
                    };

                    /**
                     * Encodes the specified UpdateRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse} message UpdateRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified UpdateRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.UpdateRegistrationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IUpdateRegistrationResponse} message UpdateRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    UpdateRegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.UpdateRegistrationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an UpdateRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    UpdateRegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an UpdateRegistrationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    UpdateRegistrationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates an UpdateRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.UpdateRegistrationResponse} UpdateRegistrationResponse
                     */
                    UpdateRegistrationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.UpdateRegistrationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.UpdateRegistrationResponse();
                    };

                    /**
                     * Creates a plain object from an UpdateRegistrationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.UpdateRegistrationResponse} message UpdateRegistrationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    UpdateRegistrationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this UpdateRegistrationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.UpdateRegistrationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    UpdateRegistrationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return UpdateRegistrationResponse;
                })();

                registration.DeleteRegistrationRequest = (function() {

                    /**
                     * Properties of a DeleteRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IDeleteRegistrationRequest
                     */

                    /**
                     * Constructs a new DeleteRegistrationRequest.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a DeleteRegistrationRequest.
                     * @implements IDeleteRegistrationRequest
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest=} [properties] Properties to set
                     */
                    function DeleteRegistrationRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DeleteRegistrationRequest instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest instance
                     */
                    DeleteRegistrationRequest.create = function create(properties) {
                        return new DeleteRegistrationRequest(properties);
                    };

                    /**
                     * Encodes the specified DeleteRegistrationRequest message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest} message DeleteRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteRegistrationRequest message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationRequest} message DeleteRegistrationRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.DeleteRegistrationRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteRegistrationRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteRegistrationRequest message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteRegistrationRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteRegistrationRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationRequest} DeleteRegistrationRequest
                     */
                    DeleteRegistrationRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.DeleteRegistrationRequest)
                            return object;
                        return new $root.isuxportal.proto.services.registration.DeleteRegistrationRequest();
                    };

                    /**
                     * Creates a plain object from a DeleteRegistrationRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @static
                     * @param {isuxportal.proto.services.registration.DeleteRegistrationRequest} message DeleteRegistrationRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteRegistrationRequest.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DeleteRegistrationRequest to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteRegistrationRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteRegistrationRequest;
                })();

                registration.DeleteRegistrationResponse = (function() {

                    /**
                     * Properties of a DeleteRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @interface IDeleteRegistrationResponse
                     */

                    /**
                     * Constructs a new DeleteRegistrationResponse.
                     * @memberof isuxportal.proto.services.registration
                     * @classdesc Represents a DeleteRegistrationResponse.
                     * @implements IDeleteRegistrationResponse
                     * @constructor
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse=} [properties] Properties to set
                     */
                    function DeleteRegistrationResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Creates a new DeleteRegistrationResponse instance using the specified properties.
                     * @function create
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse=} [properties] Properties to set
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse instance
                     */
                    DeleteRegistrationResponse.create = function create(properties) {
                        return new DeleteRegistrationResponse(properties);
                    };

                    /**
                     * Encodes the specified DeleteRegistrationResponse message. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @function encode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse} message DeleteRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };

                    /**
                     * Encodes the specified DeleteRegistrationResponse message, length delimited. Does not implicitly {@link isuxportal.proto.services.registration.DeleteRegistrationResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.IDeleteRegistrationResponse} message DeleteRegistrationResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    DeleteRegistrationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.isuxportal.proto.services.registration.DeleteRegistrationResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a DeleteRegistrationResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    DeleteRegistrationResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a DeleteRegistrationResponse message.
                     * @function verify
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    DeleteRegistrationResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };

                    /**
                     * Creates a DeleteRegistrationResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {isuxportal.proto.services.registration.DeleteRegistrationResponse} DeleteRegistrationResponse
                     */
                    DeleteRegistrationResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.isuxportal.proto.services.registration.DeleteRegistrationResponse)
                            return object;
                        return new $root.isuxportal.proto.services.registration.DeleteRegistrationResponse();
                    };

                    /**
                     * Creates a plain object from a DeleteRegistrationResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @static
                     * @param {isuxportal.proto.services.registration.DeleteRegistrationResponse} message DeleteRegistrationResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    DeleteRegistrationResponse.toObject = function toObject() {
                        return {};
                    };

                    /**
                     * Converts this DeleteRegistrationResponse to JSON.
                     * @function toJSON
                     * @memberof isuxportal.proto.services.registration.DeleteRegistrationResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    DeleteRegistrationResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return DeleteRegistrationResponse;
                })();

                return registration;
            })();

            return services;
        })();

        return proto;
    })();

    return isuxportal;
})();

module.exports = $root;
