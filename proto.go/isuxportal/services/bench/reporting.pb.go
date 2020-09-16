// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.3
// source: isuxportal/services/bench/reporting.proto

package bench

import (
	proto "github.com/golang/protobuf/proto"
	resources "github.com/isucon/isucon10-portal/proto.go/isuxportal/resources"
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

type ReportBenchmarkResultRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	JobId  int64                      `protobuf:"varint,1,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	Handle string                     `protobuf:"bytes,2,opt,name=handle,proto3" json:"handle,omitempty"`
	Nonce  int64                      `protobuf:"varint,3,opt,name=nonce,proto3" json:"nonce,omitempty"`
	Result *resources.BenchmarkResult `protobuf:"bytes,4,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *ReportBenchmarkResultRequest) Reset() {
	*x = ReportBenchmarkResultRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReportBenchmarkResultRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReportBenchmarkResultRequest) ProtoMessage() {}

func (x *ReportBenchmarkResultRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReportBenchmarkResultRequest.ProtoReflect.Descriptor instead.
func (*ReportBenchmarkResultRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_bench_reporting_proto_rawDescGZIP(), []int{0}
}

func (x *ReportBenchmarkResultRequest) GetJobId() int64 {
	if x != nil {
		return x.JobId
	}
	return 0
}

func (x *ReportBenchmarkResultRequest) GetHandle() string {
	if x != nil {
		return x.Handle
	}
	return ""
}

func (x *ReportBenchmarkResultRequest) GetNonce() int64 {
	if x != nil {
		return x.Nonce
	}
	return 0
}

func (x *ReportBenchmarkResultRequest) GetResult() *resources.BenchmarkResult {
	if x != nil {
		return x.Result
	}
	return nil
}

type ReportBenchmarkResultResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	AckedNonce int64 `protobuf:"varint,1,opt,name=acked_nonce,json=ackedNonce,proto3" json:"acked_nonce,omitempty"`
}

func (x *ReportBenchmarkResultResponse) Reset() {
	*x = ReportBenchmarkResultResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReportBenchmarkResultResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReportBenchmarkResultResponse) ProtoMessage() {}

func (x *ReportBenchmarkResultResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReportBenchmarkResultResponse.ProtoReflect.Descriptor instead.
func (*ReportBenchmarkResultResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_bench_reporting_proto_rawDescGZIP(), []int{1}
}

func (x *ReportBenchmarkResultResponse) GetAckedNonce() int64 {
	if x != nil {
		return x.AckedNonce
	}
	return 0
}

type CompleteBenchmarkJobRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	JobId  int64                      `protobuf:"varint,1,opt,name=job_id,json=jobId,proto3" json:"job_id,omitempty"`
	Handle string                     `protobuf:"bytes,2,opt,name=handle,proto3" json:"handle,omitempty"`
	Result *resources.BenchmarkResult `protobuf:"bytes,4,opt,name=result,proto3" json:"result,omitempty"`
}

func (x *CompleteBenchmarkJobRequest) Reset() {
	*x = CompleteBenchmarkJobRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CompleteBenchmarkJobRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CompleteBenchmarkJobRequest) ProtoMessage() {}

func (x *CompleteBenchmarkJobRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CompleteBenchmarkJobRequest.ProtoReflect.Descriptor instead.
func (*CompleteBenchmarkJobRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_bench_reporting_proto_rawDescGZIP(), []int{2}
}

func (x *CompleteBenchmarkJobRequest) GetJobId() int64 {
	if x != nil {
		return x.JobId
	}
	return 0
}

func (x *CompleteBenchmarkJobRequest) GetHandle() string {
	if x != nil {
		return x.Handle
	}
	return ""
}

func (x *CompleteBenchmarkJobRequest) GetResult() *resources.BenchmarkResult {
	if x != nil {
		return x.Result
	}
	return nil
}

type CompleteBenchmarkJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *CompleteBenchmarkJobResponse) Reset() {
	*x = CompleteBenchmarkJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CompleteBenchmarkJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CompleteBenchmarkJobResponse) ProtoMessage() {}

func (x *CompleteBenchmarkJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_bench_reporting_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CompleteBenchmarkJobResponse.ProtoReflect.Descriptor instead.
func (*CompleteBenchmarkJobResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_bench_reporting_proto_rawDescGZIP(), []int{3}
}

var File_isuxportal_services_bench_reporting_proto protoreflect.FileDescriptor

var file_isuxportal_services_bench_reporting_proto_rawDesc = []byte{
	0x0a, 0x29, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x2f, 0x72, 0x65, 0x70, 0x6f,
	0x72, 0x74, 0x69, 0x6e, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x1f, 0x69, 0x73, 0x75,
	0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x1a, 0x2b, 0x69, 0x73,
	0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x73, 0x2f, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x5f, 0x72, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa8, 0x01, 0x0a, 0x1c, 0x52, 0x65,
	0x70, 0x6f, 0x72, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73,
	0x75, 0x6c, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x6a, 0x6f,
	0x62, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x6a, 0x6f, 0x62, 0x49,
	0x64, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x6e, 0x6f, 0x6e,
	0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x6e, 0x6f, 0x6e, 0x63, 0x65, 0x12,
	0x43, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x2b, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e, 0x42, 0x65, 0x6e,
	0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x06, 0x72, 0x65,
	0x73, 0x75, 0x6c, 0x74, 0x22, 0x40, 0x0a, 0x1d, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x42, 0x65,
	0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x63, 0x6b, 0x65, 0x64, 0x5f, 0x6e,
	0x6f, 0x6e, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x61, 0x63, 0x6b, 0x65,
	0x64, 0x4e, 0x6f, 0x6e, 0x63, 0x65, 0x22, 0x91, 0x01, 0x0a, 0x1b, 0x43, 0x6f, 0x6d, 0x70, 0x6c,
	0x65, 0x74, 0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x15, 0x0a, 0x06, 0x6a, 0x6f, 0x62, 0x5f, 0x69, 0x64,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x6a, 0x6f, 0x62, 0x49, 0x64, 0x12, 0x16, 0x0a,
	0x06, 0x68, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x68,
	0x61, 0x6e, 0x64, 0x6c, 0x65, 0x12, 0x43, 0x0a, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x2b, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63,
	0x65, 0x73, 0x2e, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x75,
	0x6c, 0x74, 0x52, 0x06, 0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x22, 0x1e, 0x0a, 0x1c, 0x43, 0x6f,
	0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a,
	0x6f, 0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xc4, 0x02, 0x0a, 0x0f, 0x42,
	0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x12, 0x9a,
	0x01, 0x0a, 0x15, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61,
	0x72, 0x6b, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x3d, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70,
	0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x2e, 0x52, 0x65, 0x70, 0x6f, 0x72,
	0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x3e, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f,
	0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x2e, 0x52, 0x65, 0x70, 0x6f, 0x72, 0x74,
	0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x52, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x28, 0x01, 0x30, 0x01, 0x12, 0x93, 0x01, 0x0a, 0x14,
	0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72,
	0x6b, 0x4a, 0x6f, 0x62, 0x12, 0x3c, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61,
	0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x42,
	0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x3d, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x62,
	0x65, 0x6e, 0x63, 0x68, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x65, 0x6e,
	0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x42, 0x46, 0x5a, 0x44, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f,
	0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x31, 0x30, 0x2d,
	0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x67, 0x6f, 0x2f,
	0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2f, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_isuxportal_services_bench_reporting_proto_rawDescOnce sync.Once
	file_isuxportal_services_bench_reporting_proto_rawDescData = file_isuxportal_services_bench_reporting_proto_rawDesc
)

func file_isuxportal_services_bench_reporting_proto_rawDescGZIP() []byte {
	file_isuxportal_services_bench_reporting_proto_rawDescOnce.Do(func() {
		file_isuxportal_services_bench_reporting_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_services_bench_reporting_proto_rawDescData)
	})
	return file_isuxportal_services_bench_reporting_proto_rawDescData
}

var file_isuxportal_services_bench_reporting_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_isuxportal_services_bench_reporting_proto_goTypes = []interface{}{
	(*ReportBenchmarkResultRequest)(nil),  // 0: isuxportal.proto.services.bench.ReportBenchmarkResultRequest
	(*ReportBenchmarkResultResponse)(nil), // 1: isuxportal.proto.services.bench.ReportBenchmarkResultResponse
	(*CompleteBenchmarkJobRequest)(nil),   // 2: isuxportal.proto.services.bench.CompleteBenchmarkJobRequest
	(*CompleteBenchmarkJobResponse)(nil),  // 3: isuxportal.proto.services.bench.CompleteBenchmarkJobResponse
	(*resources.BenchmarkResult)(nil),     // 4: isuxportal.proto.resources.BenchmarkResult
}
var file_isuxportal_services_bench_reporting_proto_depIdxs = []int32{
	4, // 0: isuxportal.proto.services.bench.ReportBenchmarkResultRequest.result:type_name -> isuxportal.proto.resources.BenchmarkResult
	4, // 1: isuxportal.proto.services.bench.CompleteBenchmarkJobRequest.result:type_name -> isuxportal.proto.resources.BenchmarkResult
	0, // 2: isuxportal.proto.services.bench.BenchmarkReport.ReportBenchmarkResult:input_type -> isuxportal.proto.services.bench.ReportBenchmarkResultRequest
	2, // 3: isuxportal.proto.services.bench.BenchmarkReport.CompleteBenchmarkJob:input_type -> isuxportal.proto.services.bench.CompleteBenchmarkJobRequest
	1, // 4: isuxportal.proto.services.bench.BenchmarkReport.ReportBenchmarkResult:output_type -> isuxportal.proto.services.bench.ReportBenchmarkResultResponse
	3, // 5: isuxportal.proto.services.bench.BenchmarkReport.CompleteBenchmarkJob:output_type -> isuxportal.proto.services.bench.CompleteBenchmarkJobResponse
	4, // [4:6] is the sub-list for method output_type
	2, // [2:4] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_isuxportal_services_bench_reporting_proto_init() }
func file_isuxportal_services_bench_reporting_proto_init() {
	if File_isuxportal_services_bench_reporting_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_services_bench_reporting_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReportBenchmarkResultRequest); i {
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
		file_isuxportal_services_bench_reporting_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReportBenchmarkResultResponse); i {
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
		file_isuxportal_services_bench_reporting_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CompleteBenchmarkJobRequest); i {
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
		file_isuxportal_services_bench_reporting_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CompleteBenchmarkJobResponse); i {
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
			RawDescriptor: file_isuxportal_services_bench_reporting_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_isuxportal_services_bench_reporting_proto_goTypes,
		DependencyIndexes: file_isuxportal_services_bench_reporting_proto_depIdxs,
		MessageInfos:      file_isuxportal_services_bench_reporting_proto_msgTypes,
	}.Build()
	File_isuxportal_services_bench_reporting_proto = out.File
	file_isuxportal_services_bench_reporting_proto_rawDesc = nil
	file_isuxportal_services_bench_reporting_proto_goTypes = nil
	file_isuxportal_services_bench_reporting_proto_depIdxs = nil
}
