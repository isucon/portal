// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.3
// source: isuxportal/error.proto

package isuxportal

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code              int32            `protobuf:"varint,1,opt,name=code,proto3" json:"code,omitempty"`
	Name              string           `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	HumanMessage      string           `protobuf:"bytes,3,opt,name=human_message,json=humanMessage,proto3" json:"human_message,omitempty"`
	HumanDescriptions []string         `protobuf:"bytes,4,rep,name=human_descriptions,json=humanDescriptions,proto3" json:"human_descriptions,omitempty"`
	DebugInfo         *Error_DebugInfo `protobuf:"bytes,16,opt,name=debug_info,json=debugInfo,proto3" json:"debug_info,omitempty"`
}

func (x *Error) Reset() {
	*x = Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_error_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_error_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error.ProtoReflect.Descriptor instead.
func (*Error) Descriptor() ([]byte, []int) {
	return file_isuxportal_error_proto_rawDescGZIP(), []int{0}
}

func (x *Error) GetCode() int32 {
	if x != nil {
		return x.Code
	}
	return 0
}

func (x *Error) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Error) GetHumanMessage() string {
	if x != nil {
		return x.HumanMessage
	}
	return ""
}

func (x *Error) GetHumanDescriptions() []string {
	if x != nil {
		return x.HumanDescriptions
	}
	return nil
}

func (x *Error) GetDebugInfo() *Error_DebugInfo {
	if x != nil {
		return x.DebugInfo
	}
	return nil
}

type Error_DebugInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Exception        string   `protobuf:"bytes,1,opt,name=exception,proto3" json:"exception,omitempty"`
	Trace            []string `protobuf:"bytes,2,rep,name=trace,proto3" json:"trace,omitempty"`
	ApplicationTrace []string `protobuf:"bytes,3,rep,name=application_trace,json=applicationTrace,proto3" json:"application_trace,omitempty"`
	FrameworkTrace   []string `protobuf:"bytes,4,rep,name=framework_trace,json=frameworkTrace,proto3" json:"framework_trace,omitempty"`
}

func (x *Error_DebugInfo) Reset() {
	*x = Error_DebugInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_error_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error_DebugInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error_DebugInfo) ProtoMessage() {}

func (x *Error_DebugInfo) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_error_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error_DebugInfo.ProtoReflect.Descriptor instead.
func (*Error_DebugInfo) Descriptor() ([]byte, []int) {
	return file_isuxportal_error_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Error_DebugInfo) GetException() string {
	if x != nil {
		return x.Exception
	}
	return ""
}

func (x *Error_DebugInfo) GetTrace() []string {
	if x != nil {
		return x.Trace
	}
	return nil
}

func (x *Error_DebugInfo) GetApplicationTrace() []string {
	if x != nil {
		return x.ApplicationTrace
	}
	return nil
}

func (x *Error_DebugInfo) GetFrameworkTrace() []string {
	if x != nil {
		return x.FrameworkTrace
	}
	return nil
}

var File_isuxportal_error_proto protoreflect.FileDescriptor

var file_isuxportal_error_proto_rawDesc = []byte{
	0x0a, 0x16, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x65, 0x72, 0x72,
	0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x10, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f,
	0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xdd, 0x02, 0x0a, 0x05, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d,
	0x68, 0x75, 0x6d, 0x61, 0x6e, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x2d, 0x0a, 0x12, 0x68, 0x75, 0x6d, 0x61, 0x6e, 0x5f, 0x64, 0x65, 0x73, 0x63, 0x72,
	0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x11, 0x68,
	0x75, 0x6d, 0x61, 0x6e, 0x44, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x12, 0x40, 0x0a, 0x0a, 0x64, 0x65, 0x62, 0x75, 0x67, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x10,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61,
	0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x2e, 0x44, 0x65,
	0x62, 0x75, 0x67, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x09, 0x64, 0x65, 0x62, 0x75, 0x67, 0x49, 0x6e,
	0x66, 0x6f, 0x1a, 0x95, 0x01, 0x0a, 0x09, 0x44, 0x65, 0x62, 0x75, 0x67, 0x49, 0x6e, 0x66, 0x6f,
	0x12, 0x1c, 0x0a, 0x09, 0x65, 0x78, 0x63, 0x65, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x65, 0x78, 0x63, 0x65, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14,
	0x0a, 0x05, 0x74, 0x72, 0x61, 0x63, 0x65, 0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74,
	0x72, 0x61, 0x63, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x5f, 0x74, 0x72, 0x61, 0x63, 0x65, 0x18, 0x03, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x10, 0x61, 0x70, 0x70, 0x6c, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x54, 0x72, 0x61, 0x63,
	0x65, 0x12, 0x27, 0x0a, 0x0f, 0x66, 0x72, 0x61, 0x6d, 0x65, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x74,
	0x72, 0x61, 0x63, 0x65, 0x18, 0x04, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0e, 0x66, 0x72, 0x61, 0x6d,
	0x65, 0x77, 0x6f, 0x72, 0x6b, 0x54, 0x72, 0x61, 0x63, 0x65, 0x42, 0x37, 0x5a, 0x35, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f,
	0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x31, 0x30, 0x2d, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x67, 0x6f, 0x2f, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72,
	0x74, 0x61, 0x6c, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_isuxportal_error_proto_rawDescOnce sync.Once
	file_isuxportal_error_proto_rawDescData = file_isuxportal_error_proto_rawDesc
)

func file_isuxportal_error_proto_rawDescGZIP() []byte {
	file_isuxportal_error_proto_rawDescOnce.Do(func() {
		file_isuxportal_error_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_error_proto_rawDescData)
	})
	return file_isuxportal_error_proto_rawDescData
}

var file_isuxportal_error_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_isuxportal_error_proto_goTypes = []interface{}{
	(*Error)(nil),           // 0: isuxportal.proto.Error
	(*Error_DebugInfo)(nil), // 1: isuxportal.proto.Error.DebugInfo
}
var file_isuxportal_error_proto_depIdxs = []int32{
	1, // 0: isuxportal.proto.Error.debug_info:type_name -> isuxportal.proto.Error.DebugInfo
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_isuxportal_error_proto_init() }
func file_isuxportal_error_proto_init() {
	if File_isuxportal_error_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_error_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_error_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error_DebugInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_isuxportal_error_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_error_proto_goTypes,
		DependencyIndexes: file_isuxportal_error_proto_depIdxs,
		MessageInfos:      file_isuxportal_error_proto_msgTypes,
	}.Build()
	File_isuxportal_error_proto = out.File
	file_isuxportal_error_proto_rawDesc = nil
	file_isuxportal_error_proto_goTypes = nil
	file_isuxportal_error_proto_depIdxs = nil
}
