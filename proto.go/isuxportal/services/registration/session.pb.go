// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.27.1
// 	protoc        v3.15.8
// source: isuxportal/services/registration/session.proto

package registration

import (
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

type GetRegistrationSessionResponse_Status int32

const (
	GetRegistrationSessionResponse_CLOSED        GetRegistrationSessionResponse_Status = 0
	GetRegistrationSessionResponse_NOT_JOINABLE  GetRegistrationSessionResponse_Status = 1
	GetRegistrationSessionResponse_NOT_LOGGED_IN GetRegistrationSessionResponse_Status = 2
	GetRegistrationSessionResponse_CREATABLE     GetRegistrationSessionResponse_Status = 3
	GetRegistrationSessionResponse_JOINABLE      GetRegistrationSessionResponse_Status = 4
	GetRegistrationSessionResponse_JOINED        GetRegistrationSessionResponse_Status = 5
	GetRegistrationSessionResponse_DISQUALIFIED  GetRegistrationSessionResponse_Status = 6
)

// Enum value maps for GetRegistrationSessionResponse_Status.
var (
	GetRegistrationSessionResponse_Status_name = map[int32]string{
		0: "CLOSED",
		1: "NOT_JOINABLE",
		2: "NOT_LOGGED_IN",
		3: "CREATABLE",
		4: "JOINABLE",
		5: "JOINED",
		6: "DISQUALIFIED",
	}
	GetRegistrationSessionResponse_Status_value = map[string]int32{
		"CLOSED":        0,
		"NOT_JOINABLE":  1,
		"NOT_LOGGED_IN": 2,
		"CREATABLE":     3,
		"JOINABLE":      4,
		"JOINED":        5,
		"DISQUALIFIED":  6,
	}
)

func (x GetRegistrationSessionResponse_Status) Enum() *GetRegistrationSessionResponse_Status {
	p := new(GetRegistrationSessionResponse_Status)
	*p = x
	return p
}

func (x GetRegistrationSessionResponse_Status) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (GetRegistrationSessionResponse_Status) Descriptor() protoreflect.EnumDescriptor {
	return file_isuxportal_services_registration_session_proto_enumTypes[0].Descriptor()
}

func (GetRegistrationSessionResponse_Status) Type() protoreflect.EnumType {
	return &file_isuxportal_services_registration_session_proto_enumTypes[0]
}

func (x GetRegistrationSessionResponse_Status) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use GetRegistrationSessionResponse_Status.Descriptor instead.
func (GetRegistrationSessionResponse_Status) EnumDescriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{1, 0}
}

// query parameter
type GetRegistrationSessionQuery struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TeamId      int64  `protobuf:"varint,1,opt,name=team_id,json=teamId,proto3" json:"team_id,omitempty"`
	InviteToken string `protobuf:"bytes,2,opt,name=invite_token,json=inviteToken,proto3" json:"invite_token,omitempty"`
	BypassToken string `protobuf:"bytes,16,opt,name=bypass_token,json=bypassToken,proto3" json:"bypass_token,omitempty"`
}

func (x *GetRegistrationSessionQuery) Reset() {
	*x = GetRegistrationSessionQuery{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRegistrationSessionQuery) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRegistrationSessionQuery) ProtoMessage() {}

func (x *GetRegistrationSessionQuery) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRegistrationSessionQuery.ProtoReflect.Descriptor instead.
func (*GetRegistrationSessionQuery) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{0}
}

func (x *GetRegistrationSessionQuery) GetTeamId() int64 {
	if x != nil {
		return x.TeamId
	}
	return 0
}

func (x *GetRegistrationSessionQuery) GetInviteToken() string {
	if x != nil {
		return x.InviteToken
	}
	return ""
}

func (x *GetRegistrationSessionQuery) GetBypassToken() string {
	if x != nil {
		return x.BypassToken
	}
	return ""
}

type GetRegistrationSessionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Team             *resources.Team                       `protobuf:"bytes,1,opt,name=team,proto3" json:"team,omitempty"`
	Status           GetRegistrationSessionResponse_Status `protobuf:"varint,2,opt,name=status,proto3,enum=isuxportal.proto.services.registration.GetRegistrationSessionResponse_Status" json:"status,omitempty"`
	GithubLogin      string                                `protobuf:"bytes,3,opt,name=github_login,json=githubLogin,proto3" json:"github_login,omitempty"`
	GithubAvatarUrl  string                                `protobuf:"bytes,4,opt,name=github_avatar_url,json=githubAvatarUrl,proto3" json:"github_avatar_url,omitempty"`
	DiscordTag       string                                `protobuf:"bytes,5,opt,name=discord_tag,json=discordTag,proto3" json:"discord_tag,omitempty"`
	DiscordAvatarUrl string                                `protobuf:"bytes,6,opt,name=discord_avatar_url,json=discordAvatarUrl,proto3" json:"discord_avatar_url,omitempty"`
	MemberInviteUrl  string                                `protobuf:"bytes,7,opt,name=member_invite_url,json=memberInviteUrl,proto3" json:"member_invite_url,omitempty"`
	DiscordServerId  string                                `protobuf:"bytes,8,opt,name=discord_server_id,json=discordServerId,proto3" json:"discord_server_id,omitempty"`
	EnvCheckDone     bool                                  `protobuf:"varint,9,opt,name=env_check_done,json=envCheckDone,proto3" json:"env_check_done,omitempty"`
}

func (x *GetRegistrationSessionResponse) Reset() {
	*x = GetRegistrationSessionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetRegistrationSessionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetRegistrationSessionResponse) ProtoMessage() {}

func (x *GetRegistrationSessionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetRegistrationSessionResponse.ProtoReflect.Descriptor instead.
func (*GetRegistrationSessionResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{1}
}

func (x *GetRegistrationSessionResponse) GetTeam() *resources.Team {
	if x != nil {
		return x.Team
	}
	return nil
}

func (x *GetRegistrationSessionResponse) GetStatus() GetRegistrationSessionResponse_Status {
	if x != nil {
		return x.Status
	}
	return GetRegistrationSessionResponse_CLOSED
}

func (x *GetRegistrationSessionResponse) GetGithubLogin() string {
	if x != nil {
		return x.GithubLogin
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetGithubAvatarUrl() string {
	if x != nil {
		return x.GithubAvatarUrl
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetDiscordTag() string {
	if x != nil {
		return x.DiscordTag
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetDiscordAvatarUrl() string {
	if x != nil {
		return x.DiscordAvatarUrl
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetMemberInviteUrl() string {
	if x != nil {
		return x.MemberInviteUrl
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetDiscordServerId() string {
	if x != nil {
		return x.DiscordServerId
	}
	return ""
}

func (x *GetRegistrationSessionResponse) GetEnvCheckDone() bool {
	if x != nil {
		return x.EnvCheckDone
	}
	return false
}

type UpdateRegistrationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TeamName     string `protobuf:"bytes,1,opt,name=team_name,json=teamName,proto3" json:"team_name,omitempty"`
	Name         string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"` // contestant name
	EmailAddress string `protobuf:"bytes,3,opt,name=email_address,json=emailAddress,proto3" json:"email_address,omitempty"`
	IsStudent    bool   `protobuf:"varint,4,opt,name=is_student,json=isStudent,proto3" json:"is_student,omitempty"`
}

func (x *UpdateRegistrationRequest) Reset() {
	*x = UpdateRegistrationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRegistrationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRegistrationRequest) ProtoMessage() {}

func (x *UpdateRegistrationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRegistrationRequest.ProtoReflect.Descriptor instead.
func (*UpdateRegistrationRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateRegistrationRequest) GetTeamName() string {
	if x != nil {
		return x.TeamName
	}
	return ""
}

func (x *UpdateRegistrationRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateRegistrationRequest) GetEmailAddress() string {
	if x != nil {
		return x.EmailAddress
	}
	return ""
}

func (x *UpdateRegistrationRequest) GetIsStudent() bool {
	if x != nil {
		return x.IsStudent
	}
	return false
}

type UpdateRegistrationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *UpdateRegistrationResponse) Reset() {
	*x = UpdateRegistrationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRegistrationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRegistrationResponse) ProtoMessage() {}

func (x *UpdateRegistrationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRegistrationResponse.ProtoReflect.Descriptor instead.
func (*UpdateRegistrationResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{3}
}

type DeleteRegistrationRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteRegistrationRequest) Reset() {
	*x = DeleteRegistrationRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRegistrationRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRegistrationRequest) ProtoMessage() {}

func (x *DeleteRegistrationRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRegistrationRequest.ProtoReflect.Descriptor instead.
func (*DeleteRegistrationRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{4}
}

type DeleteRegistrationResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteRegistrationResponse) Reset() {
	*x = DeleteRegistrationResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_registration_session_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteRegistrationResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteRegistrationResponse) ProtoMessage() {}

func (x *DeleteRegistrationResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_registration_session_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteRegistrationResponse.ProtoReflect.Descriptor instead.
func (*DeleteRegistrationResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_registration_session_proto_rawDescGZIP(), []int{5}
}

var File_isuxportal_services_registration_session_proto protoreflect.FileDescriptor

var file_isuxportal_services_registration_session_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2f, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x26, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x72, 0x65, 0x67, 0x69,
	0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x1f, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f,
	0x72, 0x74, 0x61, 0x6c, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2f, 0x74,
	0x65, 0x61, 0x6d, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x7c, 0x0a, 0x1b, 0x47, 0x65, 0x74,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x73, 0x73,
	0x69, 0x6f, 0x6e, 0x51, 0x75, 0x65, 0x72, 0x79, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x65, 0x61, 0x6d,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x74, 0x65, 0x61, 0x6d, 0x49,
	0x64, 0x12, 0x21, 0x0a, 0x0c, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x21, 0x0a, 0x0c, 0x62, 0x79, 0x70, 0x61, 0x73, 0x73, 0x5f, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x62, 0x79, 0x70, 0x61,
	0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0xcf, 0x04, 0x0a, 0x1e, 0x47, 0x65, 0x74, 0x52,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x73, 0x73, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x34, 0x0a, 0x04, 0x74, 0x65,
	0x61, 0x6d, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70,
	0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x65, 0x61, 0x6d, 0x52, 0x04, 0x74, 0x65, 0x61, 0x6d,
	0x12, 0x65, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x4d, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x72, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x47, 0x65, 0x74, 0x52, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x5f, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x12, 0x2a, 0x0a, 0x11, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x5f, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x5f, 0x75, 0x72, 0x6c, 0x18,
	0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x41, 0x76, 0x61,
	0x74, 0x61, 0x72, 0x55, 0x72, 0x6c, 0x12, 0x1f, 0x0a, 0x0b, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72,
	0x64, 0x5f, 0x74, 0x61, 0x67, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x64, 0x69, 0x73,
	0x63, 0x6f, 0x72, 0x64, 0x54, 0x61, 0x67, 0x12, 0x2c, 0x0a, 0x12, 0x64, 0x69, 0x73, 0x63, 0x6f,
	0x72, 0x64, 0x5f, 0x61, 0x76, 0x61, 0x74, 0x61, 0x72, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x10, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x41, 0x76, 0x61, 0x74,
	0x61, 0x72, 0x55, 0x72, 0x6c, 0x12, 0x2a, 0x0a, 0x11, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x5f,
	0x69, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0f, 0x6d, 0x65, 0x6d, 0x62, 0x65, 0x72, 0x49, 0x6e, 0x76, 0x69, 0x74, 0x65, 0x55, 0x72,
	0x6c, 0x12, 0x2a, 0x0a, 0x11, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x64, 0x69,
	0x73, 0x63, 0x6f, 0x72, 0x64, 0x53, 0x65, 0x72, 0x76, 0x65, 0x72, 0x49, 0x64, 0x12, 0x24, 0x0a,
	0x0e, 0x65, 0x6e, 0x76, 0x5f, 0x63, 0x68, 0x65, 0x63, 0x6b, 0x5f, 0x64, 0x6f, 0x6e, 0x65, 0x18,
	0x09, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0c, 0x65, 0x6e, 0x76, 0x43, 0x68, 0x65, 0x63, 0x6b, 0x44,
	0x6f, 0x6e, 0x65, 0x22, 0x74, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x0a, 0x0a,
	0x06, 0x43, 0x4c, 0x4f, 0x53, 0x45, 0x44, 0x10, 0x00, 0x12, 0x10, 0x0a, 0x0c, 0x4e, 0x4f, 0x54,
	0x5f, 0x4a, 0x4f, 0x49, 0x4e, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x01, 0x12, 0x11, 0x0a, 0x0d, 0x4e,
	0x4f, 0x54, 0x5f, 0x4c, 0x4f, 0x47, 0x47, 0x45, 0x44, 0x5f, 0x49, 0x4e, 0x10, 0x02, 0x12, 0x0d,
	0x0a, 0x09, 0x43, 0x52, 0x45, 0x41, 0x54, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x03, 0x12, 0x0c, 0x0a,
	0x08, 0x4a, 0x4f, 0x49, 0x4e, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x04, 0x12, 0x0a, 0x0a, 0x06, 0x4a,
	0x4f, 0x49, 0x4e, 0x45, 0x44, 0x10, 0x05, 0x12, 0x10, 0x0a, 0x0c, 0x44, 0x49, 0x53, 0x51, 0x55,
	0x41, 0x4c, 0x49, 0x46, 0x49, 0x45, 0x44, 0x10, 0x06, 0x22, 0x90, 0x01, 0x0a, 0x19, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x61, 0x6d, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x61, 0x6d,
	0x4e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x6d, 0x61, 0x69,
	0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x1d, 0x0a,
	0x0a, 0x69, 0x73, 0x5f, 0x73, 0x74, 0x75, 0x64, 0x65, 0x6e, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x09, 0x69, 0x73, 0x53, 0x74, 0x75, 0x64, 0x65, 0x6e, 0x74, 0x22, 0x1c, 0x0a, 0x1a,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x1b, 0x0a, 0x19, 0x44, 0x65,
	0x6c, 0x65, 0x74, 0x65, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x1c, 0x0a, 0x1a, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x4d, 0x5a, 0x4b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f,
	0x6e, 0x31, 0x30, 0x2d, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x67, 0x6f, 0x2f, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x72, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_isuxportal_services_registration_session_proto_rawDescOnce sync.Once
	file_isuxportal_services_registration_session_proto_rawDescData = file_isuxportal_services_registration_session_proto_rawDesc
)

func file_isuxportal_services_registration_session_proto_rawDescGZIP() []byte {
	file_isuxportal_services_registration_session_proto_rawDescOnce.Do(func() {
		file_isuxportal_services_registration_session_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_services_registration_session_proto_rawDescData)
	})
	return file_isuxportal_services_registration_session_proto_rawDescData
}

var file_isuxportal_services_registration_session_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_isuxportal_services_registration_session_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_isuxportal_services_registration_session_proto_goTypes = []interface{}{
	(GetRegistrationSessionResponse_Status)(0), // 0: isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status
	(*GetRegistrationSessionQuery)(nil),        // 1: isuxportal.proto.services.registration.GetRegistrationSessionQuery
	(*GetRegistrationSessionResponse)(nil),     // 2: isuxportal.proto.services.registration.GetRegistrationSessionResponse
	(*UpdateRegistrationRequest)(nil),          // 3: isuxportal.proto.services.registration.UpdateRegistrationRequest
	(*UpdateRegistrationResponse)(nil),         // 4: isuxportal.proto.services.registration.UpdateRegistrationResponse
	(*DeleteRegistrationRequest)(nil),          // 5: isuxportal.proto.services.registration.DeleteRegistrationRequest
	(*DeleteRegistrationResponse)(nil),         // 6: isuxportal.proto.services.registration.DeleteRegistrationResponse
	(*resources.Team)(nil),                     // 7: isuxportal.proto.resources.Team
}
var file_isuxportal_services_registration_session_proto_depIdxs = []int32{
	7, // 0: isuxportal.proto.services.registration.GetRegistrationSessionResponse.team:type_name -> isuxportal.proto.resources.Team
	0, // 1: isuxportal.proto.services.registration.GetRegistrationSessionResponse.status:type_name -> isuxportal.proto.services.registration.GetRegistrationSessionResponse.Status
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_isuxportal_services_registration_session_proto_init() }
func file_isuxportal_services_registration_session_proto_init() {
	if File_isuxportal_services_registration_session_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_services_registration_session_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRegistrationSessionQuery); i {
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
		file_isuxportal_services_registration_session_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetRegistrationSessionResponse); i {
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
		file_isuxportal_services_registration_session_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRegistrationRequest); i {
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
		file_isuxportal_services_registration_session_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRegistrationResponse); i {
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
		file_isuxportal_services_registration_session_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRegistrationRequest); i {
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
		file_isuxportal_services_registration_session_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteRegistrationResponse); i {
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
			RawDescriptor: file_isuxportal_services_registration_session_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_services_registration_session_proto_goTypes,
		DependencyIndexes: file_isuxportal_services_registration_session_proto_depIdxs,
		EnumInfos:         file_isuxportal_services_registration_session_proto_enumTypes,
		MessageInfos:      file_isuxportal_services_registration_session_proto_msgTypes,
	}.Build()
	File_isuxportal_services_registration_session_proto = out.File
	file_isuxportal_services_registration_session_proto_rawDesc = nil
	file_isuxportal_services_registration_session_proto_goTypes = nil
	file_isuxportal_services_registration_session_proto_depIdxs = nil
}
