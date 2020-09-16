import { isuxportal } from "../pb_admin";
import { ApiClient } from "../ApiClient";

export class AdminApiClient {
  public apiClient: ApiClient;
  public baseUrl: string;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
    this.baseUrl = this.apiClient.baseUrl;
  }

  public async listTeams() {
    const klass = isuxportal.proto.services.admin.ListTeamsResponse;
    const resp = await this.request(`${this.baseUrl}/api/admin/teams`, "GET", null, null);
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async getTeam(id: number) {
    const klass = isuxportal.proto.services.admin.GetTeamResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/teams/${encodeURIComponent(id.toString())}`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async updateTeam(payload: isuxportal.proto.services.admin.IUpdateTeamRequest) {
    const responseClass = isuxportal.proto.services.admin.UpdateTeamResponse;
    const payloadClass = isuxportal.proto.services.admin.UpdateTeamRequest;
    const payloadMessage = payload ? payloadClass.encode(payloadClass.fromObject(payload)).finish() : null;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/teams/${encodeURIComponent(payload.team!.id!.toString())}`,
      "PUT",
      null,
      payloadMessage
    );
    return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async listBenchmarkJobs(teamId?: number | null, incompleteOnly?: boolean, page?: number) {
    const klass = isuxportal.proto.services.admin.ListBenchmarkJobsResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/benchmark_jobs?team_id=${teamId ? teamId.toString() : ""}&incomplete_only=${
        incompleteOnly ? "1" : "0"
      }&page=${page}`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async enqueueBenchmarkJob(payload: isuxportal.proto.services.admin.IEnqueueBenchmarkJobRequest) {
    const responseClass = isuxportal.proto.services.admin.EnqueueBenchmarkJobResponse;
    const payloadClass = isuxportal.proto.services.admin.EnqueueBenchmarkJobRequest;
    const payloadMessage = payload ? payloadClass.encode(payloadClass.fromObject(payload)).finish() : null;
    const resp = await this.request(`${this.baseUrl}/api/admin/benchmark_jobs`, "POST", null, payloadMessage);
    return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async getBenchmarkJob(id: number) {
    const klass = isuxportal.proto.services.admin.GetBenchmarkJobResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/benchmark_jobs/${encodeURIComponent(id.toString())}`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async cancelBenchmarkJob(id: number) {
    const klass = isuxportal.proto.services.admin.CancelBenchmarkJobResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/benchmark_jobs/${encodeURIComponent(id.toString())}`,
      "DELETE",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async listClarifications(teamId?: number, unansweredOnly?: boolean) {
    const klass = isuxportal.proto.services.admin.ListClarificationsResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/clarifications?team_id=${encodeURIComponent(teamId || "")}&unanswered_only=${
        unansweredOnly ? "1" : "0"
      }`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async getClarification(id: number) {
    const klass = isuxportal.proto.services.admin.GetClarificationResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/clarifications/${encodeURIComponent(id.toString())}`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async respondClarification(payload: isuxportal.proto.services.admin.IRespondClarificationRequest) {
    const responseClass = isuxportal.proto.services.admin.RespondClarificationResponse;
    const payloadClass = isuxportal.proto.services.admin.RespondClarificationRequest;
    const payloadMessage = payload ? payloadClass.encode(payloadClass.fromObject(payload)).finish() : null;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/clarifications/${encodeURIComponent(payload.id!.toString())}`,
      "PUT",
      null,
      payloadMessage
    );
    return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async createClarification(payload: isuxportal.proto.services.admin.ICreateClarificationRequest) {
    const responseClass = isuxportal.proto.services.admin.CreateClarificationResponse;
    const payloadClass = isuxportal.proto.services.admin.CreateClarificationRequest;
    const payloadMessage = payload ? payloadClass.encode(payloadClass.fromObject(payload)).finish() : null;
    const resp = await this.request(`${this.baseUrl}/api/admin/clarifications`, "POST", null, payloadMessage);
    return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async getDashboard() {
    const klass = isuxportal.proto.services.admin.DashboardResponse;
    const resp = await this.request(`${this.baseUrl}/api/admin/dashboard`, "GET", null, null);
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async listContestantInstances(teamId?: number | null) {
    const klass = isuxportal.proto.services.admin.ListContestantInstancesResponse;
    const resp = await this.request(
      `${this.baseUrl}/api/admin/contestant_instances?team_id=${teamId ? teamId.toString() : ""}`,
      "GET",
      null,
      null
    );
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public request(path: string, method: string, query: object | null, payload: Uint8Array | null) {
    return this.apiClient.request(path, method, query, payload);
  }
}
