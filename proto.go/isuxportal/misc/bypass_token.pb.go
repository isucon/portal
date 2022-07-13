// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.20.1
// source: isuxportal/misc/bypass_token.proto

package misc

import (
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

type BypassTokenPayload_Usage int32

const (
	BypassTokenPayload_CREATE_TEAM BypassTokenPayload_Usage = 0
	BypassTokenPayload_JOIN_TEAM   BypassTokenPayload_Usage = 1
	BypassTokenPayload_HIDDEN_TEAM BypassTokenPayload_Usage = 2
	BypassTokenPayload_LEAVE_TEAM  BypassTokenPayload_Usage = 3
)

// Enum value maps for BypassTokenPayload_Usage.
var (
	BypassTokenPayload_Usage_name = map[int32]string{
		0: "CREATE_TEAM",
		1: "JOIN_TEAM",
		2: "HIDDEN_TEAM",
		3: "LEAVE_TEAM",
	}
	BypassTokenPayload_Usage_value = map[string]int32{
		"CREATE_TEAM": 0,
		"JOIN_TEAM":   1,
		"HIDDEN_TEAM": 2,
		"LEAVE_TEAM":  3,
	}
)

func (x BypassTokenPayload_Usage) Enum() *BypassTokenPayload_Usage {
	p := new(BypassTokenPayload_Usage)
	*p = x
	return p
}

func (x BypassTokenPayload_Usage) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (BypassTokenPayload_Usage) Descriptor() protoreflect.EnumDescriptor {
	return file_isuxportal_misc_bypass_token_proto_enumTypes[0].Descriptor()
}

func (BypassTokenPayload_Usage) Type() protoreflect.EnumType {
	return &file_isuxportal_misc_bypass_token_proto_enumTypes[0]
}

func (x BypassTokenPayload_Usage) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use BypassTokenPayload_Usage.Descriptor instead.
func (BypassTokenPayload_Usage) EnumDescriptor() ([]byte, []int) {
	return file_isuxportal_misc_bypass_token_proto_rawDescGZIP(), []int{0, 0}
}

type BypassTokenPayload struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Filler string                     `protobuf:"bytes,1,opt,name=filler,proto3" json:"filler,omitempty"`
	Expiry int64                      `protobuf:"varint,2,opt,name=expiry,proto3" json:"expiry,omitempty"`
	Usages []BypassTokenPayload_Usage `protobuf:"varint,3,rep,packed,name=usages,proto3,enum=isuxportal.proto.misc.BypassTokenPayload_Usage" json:"usages,omitempty"`
}

func (x *BypassTokenPayload) Reset() {
	*x = BypassTokenPayload{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_misc_bypass_token_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BypassTokenPayload) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BypassTokenPayload) ProtoMessage() {}

func (x *BypassTokenPayload) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_misc_bypass_token_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BypassTokenPayload.ProtoReflect.Descriptor instead.
func (*BypassTokenPayload) Descriptor() ([]byte, []int) {
	return file_isuxportal_misc_bypass_token_proto_rawDescGZIP(), []int{0}
}

func (x *BypassTokenPayload) GetFiller() string {
	if x != nil {
		return x.Filler
	}
	return ""
}

func (x *BypassTokenPayload) GetExpiry() int64 {
	if x != nil {
		return x.Expiry
	}
	return 0
}

func (x *BypassTokenPayload) GetUsages() []BypassTokenPayload_Usage {
	if x != nil {
		return x.Usages
	}
	return nil
}

var File_isuxportal_misc_bypass_token_proto protoreflect.FileDescriptor

var file_isuxportal_misc_bypass_token_proto_rawDesc = []byte{
	0x0a, 0x22, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x6d, 0x69, 0x73,
	0x63, 0x2f, 0x62, 0x79, 0x70, 0x61, 0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x6d, 0x69, 0x73, 0x63, 0x22, 0xd7, 0x01, 0x0a, 0x12,
	0x42, 0x79, 0x70, 0x61, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x50, 0x61, 0x79, 0x6c, 0x6f,
	0x61, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x6c, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x6c, 0x65, 0x72, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x78,
	0x70, 0x69, 0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x65, 0x78, 0x70, 0x69,
	0x72, 0x79, 0x12, 0x47, 0x0a, 0x06, 0x75, 0x73, 0x61, 0x67, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03,
	0x28, 0x0e, 0x32, 0x2f, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x6d, 0x69, 0x73, 0x63, 0x2e, 0x42, 0x79, 0x70, 0x61, 0x73,
	0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x50, 0x61, 0x79, 0x6c, 0x6f, 0x61, 0x64, 0x2e, 0x55, 0x73,
	0x61, 0x67, 0x65, 0x52, 0x06, 0x75, 0x73, 0x61, 0x67, 0x65, 0x73, 0x22, 0x48, 0x0a, 0x05, 0x55,
	0x73, 0x61, 0x67, 0x65, 0x12, 0x0f, 0x0a, 0x0b, 0x43, 0x52, 0x45, 0x41, 0x54, 0x45, 0x5f, 0x54,
	0x45, 0x41, 0x4d, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x4a, 0x4f, 0x49, 0x4e, 0x5f, 0x54, 0x45,
	0x41, 0x4d, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x48, 0x49, 0x44, 0x44, 0x45, 0x4e, 0x5f, 0x54,
	0x45, 0x41, 0x4d, 0x10, 0x02, 0x12, 0x0e, 0x0a, 0x0a, 0x4c, 0x45, 0x41, 0x56, 0x45, 0x5f, 0x54,
	0x45, 0x41, 0x4d, 0x10, 0x03, 0x42, 0x33, 0x5a, 0x31, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f, 0x70, 0x6f, 0x72, 0x74, 0x61,
	0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x67, 0x6f, 0x2f, 0x69, 0x73, 0x75, 0x78, 0x70,
	0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x6d, 0x69, 0x73, 0x63, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_isuxportal_misc_bypass_token_proto_rawDescOnce sync.Once
	file_isuxportal_misc_bypass_token_proto_rawDescData = file_isuxportal_misc_bypass_token_proto_rawDesc
)

func file_isuxportal_misc_bypass_token_proto_rawDescGZIP() []byte {
	file_isuxportal_misc_bypass_token_proto_rawDescOnce.Do(func() {
		file_isuxportal_misc_bypass_token_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_misc_bypass_token_proto_rawDescData)
	})
	return file_isuxportal_misc_bypass_token_proto_rawDescData
}

var file_isuxportal_misc_bypass_token_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_isuxportal_misc_bypass_token_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_isuxportal_misc_bypass_token_proto_goTypes = []interface{}{
	(BypassTokenPayload_Usage)(0), // 0: isuxportal.proto.misc.BypassTokenPayload.Usage
	(*BypassTokenPayload)(nil),    // 1: isuxportal.proto.misc.BypassTokenPayload
}
var file_isuxportal_misc_bypass_token_proto_depIdxs = []int32{
	0, // 0: isuxportal.proto.misc.BypassTokenPayload.usages:type_name -> isuxportal.proto.misc.BypassTokenPayload.Usage
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_isuxportal_misc_bypass_token_proto_init() }
func file_isuxportal_misc_bypass_token_proto_init() {
	if File_isuxportal_misc_bypass_token_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_misc_bypass_token_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BypassTokenPayload); i {
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
			RawDescriptor: file_isuxportal_misc_bypass_token_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_misc_bypass_token_proto_goTypes,
		DependencyIndexes: file_isuxportal_misc_bypass_token_proto_depIdxs,
		EnumInfos:         file_isuxportal_misc_bypass_token_proto_enumTypes,
		MessageInfos:      file_isuxportal_misc_bypass_token_proto_msgTypes,
	}.Build()
	File_isuxportal_misc_bypass_token_proto = out.File
	file_isuxportal_misc_bypass_token_proto_rawDesc = nil
	file_isuxportal_misc_bypass_token_proto_goTypes = nil
	file_isuxportal_misc_bypass_token_proto_depIdxs = nil
}
