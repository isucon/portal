// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.20.1
// source: isuxportal/services/bench/reporting.proto

package bench

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BenchmarkReportClient is the client API for BenchmarkReport service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BenchmarkReportClient interface {
	ReportBenchmarkResult(ctx context.Context, opts ...grpc.CallOption) (BenchmarkReport_ReportBenchmarkResultClient, error)
	CompleteBenchmarkJob(ctx context.Context, in *CompleteBenchmarkJobRequest, opts ...grpc.CallOption) (*CompleteBenchmarkJobResponse, error)
}

type benchmarkReportClient struct {
	cc grpc.ClientConnInterface
}

func NewBenchmarkReportClient(cc grpc.ClientConnInterface) BenchmarkReportClient {
	return &benchmarkReportClient{cc}
}

func (c *benchmarkReportClient) ReportBenchmarkResult(ctx context.Context, opts ...grpc.CallOption) (BenchmarkReport_ReportBenchmarkResultClient, error) {
	stream, err := c.cc.NewStream(ctx, &BenchmarkReport_ServiceDesc.Streams[0], "/isuxportal.proto.services.bench.BenchmarkReport/ReportBenchmarkResult", opts...)
	if err != nil {
		return nil, err
	}
	x := &benchmarkReportReportBenchmarkResultClient{stream}
	return x, nil
}

type BenchmarkReport_ReportBenchmarkResultClient interface {
	Send(*ReportBenchmarkResultRequest) error
	Recv() (*ReportBenchmarkResultResponse, error)
	grpc.ClientStream
}

type benchmarkReportReportBenchmarkResultClient struct {
	grpc.ClientStream
}

func (x *benchmarkReportReportBenchmarkResultClient) Send(m *ReportBenchmarkResultRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *benchmarkReportReportBenchmarkResultClient) Recv() (*ReportBenchmarkResultResponse, error) {
	m := new(ReportBenchmarkResultResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *benchmarkReportClient) CompleteBenchmarkJob(ctx context.Context, in *CompleteBenchmarkJobRequest, opts ...grpc.CallOption) (*CompleteBenchmarkJobResponse, error) {
	out := new(CompleteBenchmarkJobResponse)
	err := c.cc.Invoke(ctx, "/isuxportal.proto.services.bench.BenchmarkReport/CompleteBenchmarkJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BenchmarkReportServer is the server API for BenchmarkReport service.
// All implementations must embed UnimplementedBenchmarkReportServer
// for forward compatibility
type BenchmarkReportServer interface {
	ReportBenchmarkResult(BenchmarkReport_ReportBenchmarkResultServer) error
	CompleteBenchmarkJob(context.Context, *CompleteBenchmarkJobRequest) (*CompleteBenchmarkJobResponse, error)
	mustEmbedUnimplementedBenchmarkReportServer()
}

// UnimplementedBenchmarkReportServer must be embedded to have forward compatible implementations.
type UnimplementedBenchmarkReportServer struct {
}

func (UnimplementedBenchmarkReportServer) ReportBenchmarkResult(BenchmarkReport_ReportBenchmarkResultServer) error {
	return status.Errorf(codes.Unimplemented, "method ReportBenchmarkResult not implemented")
}
func (UnimplementedBenchmarkReportServer) CompleteBenchmarkJob(context.Context, *CompleteBenchmarkJobRequest) (*CompleteBenchmarkJobResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompleteBenchmarkJob not implemented")
}
func (UnimplementedBenchmarkReportServer) mustEmbedUnimplementedBenchmarkReportServer() {}

// UnsafeBenchmarkReportServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BenchmarkReportServer will
// result in compilation errors.
type UnsafeBenchmarkReportServer interface {
	mustEmbedUnimplementedBenchmarkReportServer()
}

func RegisterBenchmarkReportServer(s grpc.ServiceRegistrar, srv BenchmarkReportServer) {
	s.RegisterService(&BenchmarkReport_ServiceDesc, srv)
}

func _BenchmarkReport_ReportBenchmarkResult_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(BenchmarkReportServer).ReportBenchmarkResult(&benchmarkReportReportBenchmarkResultServer{stream})
}

type BenchmarkReport_ReportBenchmarkResultServer interface {
	Send(*ReportBenchmarkResultResponse) error
	Recv() (*ReportBenchmarkResultRequest, error)
	grpc.ServerStream
}

type benchmarkReportReportBenchmarkResultServer struct {
	grpc.ServerStream
}

func (x *benchmarkReportReportBenchmarkResultServer) Send(m *ReportBenchmarkResultResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *benchmarkReportReportBenchmarkResultServer) Recv() (*ReportBenchmarkResultRequest, error) {
	m := new(ReportBenchmarkResultRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func _BenchmarkReport_CompleteBenchmarkJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CompleteBenchmarkJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BenchmarkReportServer).CompleteBenchmarkJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/isuxportal.proto.services.bench.BenchmarkReport/CompleteBenchmarkJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BenchmarkReportServer).CompleteBenchmarkJob(ctx, req.(*CompleteBenchmarkJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BenchmarkReport_ServiceDesc is the grpc.ServiceDesc for BenchmarkReport service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BenchmarkReport_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "isuxportal.proto.services.bench.BenchmarkReport",
	HandlerType: (*BenchmarkReportServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CompleteBenchmarkJob",
			Handler:    _BenchmarkReport_CompleteBenchmarkJob_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ReportBenchmarkResult",
			Handler:       _BenchmarkReport_ReportBenchmarkResult_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "isuxportal/services/bench/reporting.proto",
}
