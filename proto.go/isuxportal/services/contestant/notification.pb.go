// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.3
// source: isuxportal/services/contestant/notification.proto

package contestant

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

type GetNotificationsRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *GetNotificationsRequest) Reset() {
	*x = GetNotificationsRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetNotificationsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetNotificationsRequest) ProtoMessage() {}

func (x *GetNotificationsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_notification_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetNotificationsRequest.ProtoReflect.Descriptor instead.
func (*GetNotificationsRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_notification_proto_rawDescGZIP(), []int{0}
}

type GetNotificationsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	LastAnsweredClarificationId int64 `protobuf:"varint,1,opt,name=last_answered_clarification_id,json=lastAnsweredClarificationId,proto3" json:"last_answered_clarification_id,omitempty"`
}

func (x *GetNotificationsResponse) Reset() {
	*x = GetNotificationsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetNotificationsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetNotificationsResponse) ProtoMessage() {}

func (x *GetNotificationsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_notification_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetNotificationsResponse.ProtoReflect.Descriptor instead.
func (*GetNotificationsResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_notification_proto_rawDescGZIP(), []int{1}
}

func (x *GetNotificationsResponse) GetLastAnsweredClarificationId() int64 {
	if x != nil {
		return x.LastAnsweredClarificationId
	}
	return 0
}

var File_isuxportal_services_contestant_notification_proto protoreflect.FileDescriptor

var file_isuxportal_services_contestant_notification_proto_rawDesc = []byte{
	0x0a, 0x31, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x73, 0x74, 0x61, 0x6e, 0x74,
	0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x24, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x63,
	0x6f, 0x6e, 0x74, 0x65, 0x73, 0x74, 0x61, 0x6e, 0x74, 0x22, 0x19, 0x0a, 0x17, 0x47, 0x65, 0x74,
	0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x22, 0x5f, 0x0a, 0x18, 0x47, 0x65, 0x74, 0x4e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x43, 0x0a, 0x1e, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x61, 0x6e, 0x73, 0x77, 0x65, 0x72, 0x65,
	0x64, 0x5f, 0x63, 0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x1b, 0x6c, 0x61, 0x73, 0x74, 0x41, 0x6e,
	0x73, 0x77, 0x65, 0x72, 0x65, 0x64, 0x43, 0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x49, 0x64, 0x42, 0x4b, 0x5a, 0x49, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f,
	0x6e, 0x31, 0x30, 0x2d, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x67, 0x6f, 0x2f, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x73, 0x74, 0x61,
	0x6e, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_isuxportal_services_contestant_notification_proto_rawDescOnce sync.Once
	file_isuxportal_services_contestant_notification_proto_rawDescData = file_isuxportal_services_contestant_notification_proto_rawDesc
)

func file_isuxportal_services_contestant_notification_proto_rawDescGZIP() []byte {
	file_isuxportal_services_contestant_notification_proto_rawDescOnce.Do(func() {
		file_isuxportal_services_contestant_notification_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_services_contestant_notification_proto_rawDescData)
	})
	return file_isuxportal_services_contestant_notification_proto_rawDescData
}

var file_isuxportal_services_contestant_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_isuxportal_services_contestant_notification_proto_goTypes = []interface{}{
	(*GetNotificationsRequest)(nil),  // 0: isuxportal.proto.services.contestant.GetNotificationsRequest
	(*GetNotificationsResponse)(nil), // 1: isuxportal.proto.services.contestant.GetNotificationsResponse
}
var file_isuxportal_services_contestant_notification_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_isuxportal_services_contestant_notification_proto_init() }
func file_isuxportal_services_contestant_notification_proto_init() {
	if File_isuxportal_services_contestant_notification_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_services_contestant_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetNotificationsRequest); i {
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
		file_isuxportal_services_contestant_notification_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetNotificationsResponse); i {
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
			RawDescriptor: file_isuxportal_services_contestant_notification_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_services_contestant_notification_proto_goTypes,
		DependencyIndexes: file_isuxportal_services_contestant_notification_proto_depIdxs,
		MessageInfos:      file_isuxportal_services_contestant_notification_proto_msgTypes,
	}.Build()
	File_isuxportal_services_contestant_notification_proto = out.File
	file_isuxportal_services_contestant_notification_proto_rawDesc = nil
	file_isuxportal_services_contestant_notification_proto_goTypes = nil
	file_isuxportal_services_contestant_notification_proto_depIdxs = nil
}