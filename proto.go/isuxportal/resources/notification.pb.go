// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.20.1
// source: isuxportal/resources/notification.proto

package resources

import (
	timestamp "github.com/golang/protobuf/ptypes/timestamp"
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

type Notification struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int64                `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	CreatedAt *timestamp.Timestamp `protobuf:"bytes,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	// Types that are assignable to Content:
	//	*Notification_ContentBenchmarkJob
	//	*Notification_ContentClarification
	//	*Notification_ContentTest
	Content isNotification_Content `protobuf_oneof:"content"`
}

func (x *Notification) Reset() {
	*x = Notification{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_resources_notification_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notification) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notification) ProtoMessage() {}

func (x *Notification) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_resources_notification_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notification.ProtoReflect.Descriptor instead.
func (*Notification) Descriptor() ([]byte, []int) {
	return file_isuxportal_resources_notification_proto_rawDescGZIP(), []int{0}
}

func (x *Notification) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Notification) GetCreatedAt() *timestamp.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (m *Notification) GetContent() isNotification_Content {
	if m != nil {
		return m.Content
	}
	return nil
}

func (x *Notification) GetContentBenchmarkJob() *Notification_BenchmarkJobMessage {
	if x, ok := x.GetContent().(*Notification_ContentBenchmarkJob); ok {
		return x.ContentBenchmarkJob
	}
	return nil
}

func (x *Notification) GetContentClarification() *Notification_ClarificationMessage {
	if x, ok := x.GetContent().(*Notification_ContentClarification); ok {
		return x.ContentClarification
	}
	return nil
}

func (x *Notification) GetContentTest() *Notification_TestMessage {
	if x, ok := x.GetContent().(*Notification_ContentTest); ok {
		return x.ContentTest
	}
	return nil
}

type isNotification_Content interface {
	isNotification_Content()
}

type Notification_ContentBenchmarkJob struct {
	ContentBenchmarkJob *Notification_BenchmarkJobMessage `protobuf:"bytes,3,opt,name=content_benchmark_job,json=contentBenchmarkJob,proto3,oneof"`
}

type Notification_ContentClarification struct {
	ContentClarification *Notification_ClarificationMessage `protobuf:"bytes,4,opt,name=content_clarification,json=contentClarification,proto3,oneof"`
}

type Notification_ContentTest struct {
	ContentTest *Notification_TestMessage `protobuf:"bytes,5,opt,name=content_test,json=contentTest,proto3,oneof"`
}

func (*Notification_ContentBenchmarkJob) isNotification_Content() {}

func (*Notification_ContentClarification) isNotification_Content() {}

func (*Notification_ContentTest) isNotification_Content() {}

type Notification_BenchmarkJobMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BenchmarkJobId int64 `protobuf:"varint,1,opt,name=benchmark_job_id,json=benchmarkJobId,proto3" json:"benchmark_job_id,omitempty"`
}

func (x *Notification_BenchmarkJobMessage) Reset() {
	*x = Notification_BenchmarkJobMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_resources_notification_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notification_BenchmarkJobMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notification_BenchmarkJobMessage) ProtoMessage() {}

func (x *Notification_BenchmarkJobMessage) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_resources_notification_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notification_BenchmarkJobMessage.ProtoReflect.Descriptor instead.
func (*Notification_BenchmarkJobMessage) Descriptor() ([]byte, []int) {
	return file_isuxportal_resources_notification_proto_rawDescGZIP(), []int{0, 0}
}

func (x *Notification_BenchmarkJobMessage) GetBenchmarkJobId() int64 {
	if x != nil {
		return x.BenchmarkJobId
	}
	return 0
}

type Notification_ClarificationMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClarificationId int64 `protobuf:"varint,1,opt,name=clarification_id,json=clarificationId,proto3" json:"clarification_id,omitempty"`
	Owned           bool  `protobuf:"varint,2,opt,name=owned,proto3" json:"owned,omitempty"`     // True when a clarification is sent from a team of notification recipient
	Updated         bool  `protobuf:"varint,3,opt,name=updated,proto3" json:"updated,omitempty"` // True when a clarification was answered and have updated
	Admin           bool  `protobuf:"varint,4,opt,name=admin,proto3" json:"admin,omitempty"`     // True when a clarification was opened by admin
}

func (x *Notification_ClarificationMessage) Reset() {
	*x = Notification_ClarificationMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_resources_notification_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notification_ClarificationMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notification_ClarificationMessage) ProtoMessage() {}

func (x *Notification_ClarificationMessage) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_resources_notification_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notification_ClarificationMessage.ProtoReflect.Descriptor instead.
func (*Notification_ClarificationMessage) Descriptor() ([]byte, []int) {
	return file_isuxportal_resources_notification_proto_rawDescGZIP(), []int{0, 1}
}

func (x *Notification_ClarificationMessage) GetClarificationId() int64 {
	if x != nil {
		return x.ClarificationId
	}
	return 0
}

func (x *Notification_ClarificationMessage) GetOwned() bool {
	if x != nil {
		return x.Owned
	}
	return false
}

func (x *Notification_ClarificationMessage) GetUpdated() bool {
	if x != nil {
		return x.Updated
	}
	return false
}

func (x *Notification_ClarificationMessage) GetAdmin() bool {
	if x != nil {
		return x.Admin
	}
	return false
}

type Notification_TestMessage struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Something int64 `protobuf:"varint,1,opt,name=something,proto3" json:"something,omitempty"`
}

func (x *Notification_TestMessage) Reset() {
	*x = Notification_TestMessage{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_resources_notification_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Notification_TestMessage) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Notification_TestMessage) ProtoMessage() {}

func (x *Notification_TestMessage) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_resources_notification_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Notification_TestMessage.ProtoReflect.Descriptor instead.
func (*Notification_TestMessage) Descriptor() ([]byte, []int) {
	return file_isuxportal_resources_notification_proto_rawDescGZIP(), []int{0, 2}
}

func (x *Notification_TestMessage) GetSomething() int64 {
	if x != nil {
		return x.Something
	}
	return 0
}

var File_isuxportal_resources_notification_proto protoreflect.FileDescriptor

var file_isuxportal_resources_notification_proto_rawDesc = []byte{
	0x0a, 0x27, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x72, 0x65, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1a, 0x69, 0x73, 0x75, 0x78, 0x70,
	0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x73, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa1, 0x05, 0x0a, 0x0c, 0x4e, 0x6f, 0x74, 0x69, 0x66,
	0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69,
	0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64,
	0x41, 0x74, 0x12, 0x72, 0x0a, 0x15, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x62, 0x65,
	0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x5f, 0x6a, 0x6f, 0x62, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x3c, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e, 0x4e,
	0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x42, 0x65, 0x6e, 0x63,
	0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x48,
	0x00, 0x52, 0x13, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d,
	0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x12, 0x74, 0x0a, 0x15, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e,
	0x74, 0x5f, 0x63, 0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x3d, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x73, 0x2e, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x43, 0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x48, 0x00, 0x52, 0x14, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x43,
	0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x59, 0x0a, 0x0c,
	0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x5f, 0x74, 0x65, 0x73, 0x74, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x34, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e,
	0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x54, 0x65, 0x73,
	0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x48, 0x00, 0x52, 0x0b, 0x63, 0x6f, 0x6e, 0x74,
	0x65, 0x6e, 0x74, 0x54, 0x65, 0x73, 0x74, 0x1a, 0x3f, 0x0a, 0x13, 0x42, 0x65, 0x6e, 0x63, 0x68,
	0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x28,
	0x0a, 0x10, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x5f, 0x6a, 0x6f, 0x62, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x6d,
	0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x49, 0x64, 0x1a, 0x87, 0x01, 0x0a, 0x14, 0x43, 0x6c, 0x61,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x29, 0x0a, 0x10, 0x63, 0x6c, 0x61, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0f, 0x63, 0x6c, 0x61,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x12, 0x14, 0x0a, 0x05,
	0x6f, 0x77, 0x6e, 0x65, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x6f, 0x77, 0x6e,
	0x65, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x07, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x12, 0x14, 0x0a, 0x05,
	0x61, 0x64, 0x6d, 0x69, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x61, 0x64, 0x6d,
	0x69, 0x6e, 0x1a, 0x2b, 0x0a, 0x0b, 0x54, 0x65, 0x73, 0x74, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x12, 0x1c, 0x0a, 0x09, 0x73, 0x6f, 0x6d, 0x65, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x73, 0x6f, 0x6d, 0x65, 0x74, 0x68, 0x69, 0x6e, 0x67, 0x42,
	0x09, 0x0a, 0x07, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x74, 0x42, 0x41, 0x5a, 0x3f, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f,
	0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x31, 0x30, 0x2d, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x67, 0x6f, 0x2f, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72,
	0x74, 0x61, 0x6c, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_isuxportal_resources_notification_proto_rawDescOnce sync.Once
	file_isuxportal_resources_notification_proto_rawDescData = file_isuxportal_resources_notification_proto_rawDesc
)

func file_isuxportal_resources_notification_proto_rawDescGZIP() []byte {
	file_isuxportal_resources_notification_proto_rawDescOnce.Do(func() {
		file_isuxportal_resources_notification_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_resources_notification_proto_rawDescData)
	})
	return file_isuxportal_resources_notification_proto_rawDescData
}

var file_isuxportal_resources_notification_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_isuxportal_resources_notification_proto_goTypes = []interface{}{
	(*Notification)(nil),                      // 0: isuxportal.proto.resources.Notification
	(*Notification_BenchmarkJobMessage)(nil),  // 1: isuxportal.proto.resources.Notification.BenchmarkJobMessage
	(*Notification_ClarificationMessage)(nil), // 2: isuxportal.proto.resources.Notification.ClarificationMessage
	(*Notification_TestMessage)(nil),          // 3: isuxportal.proto.resources.Notification.TestMessage
	(*timestamp.Timestamp)(nil),               // 4: google.protobuf.Timestamp
}
var file_isuxportal_resources_notification_proto_depIdxs = []int32{
	4, // 0: isuxportal.proto.resources.Notification.created_at:type_name -> google.protobuf.Timestamp
	1, // 1: isuxportal.proto.resources.Notification.content_benchmark_job:type_name -> isuxportal.proto.resources.Notification.BenchmarkJobMessage
	2, // 2: isuxportal.proto.resources.Notification.content_clarification:type_name -> isuxportal.proto.resources.Notification.ClarificationMessage
	3, // 3: isuxportal.proto.resources.Notification.content_test:type_name -> isuxportal.proto.resources.Notification.TestMessage
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_isuxportal_resources_notification_proto_init() }
func file_isuxportal_resources_notification_proto_init() {
	if File_isuxportal_resources_notification_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_resources_notification_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notification); i {
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
		file_isuxportal_resources_notification_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notification_BenchmarkJobMessage); i {
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
		file_isuxportal_resources_notification_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notification_ClarificationMessage); i {
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
		file_isuxportal_resources_notification_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Notification_TestMessage); i {
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
	file_isuxportal_resources_notification_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*Notification_ContentBenchmarkJob)(nil),
		(*Notification_ContentClarification)(nil),
		(*Notification_ContentTest)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_isuxportal_resources_notification_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_resources_notification_proto_goTypes,
		DependencyIndexes: file_isuxportal_resources_notification_proto_depIdxs,
		MessageInfos:      file_isuxportal_resources_notification_proto_msgTypes,
	}.Build()
	File_isuxportal_resources_notification_proto = out.File
	file_isuxportal_resources_notification_proto_rawDesc = nil
	file_isuxportal_resources_notification_proto_goTypes = nil
	file_isuxportal_resources_notification_proto_depIdxs = nil
}
