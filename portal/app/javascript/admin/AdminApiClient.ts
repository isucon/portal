import {isuxportal} from "../pb_admin";
import {ApiClient} from "../ApiClient";

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
    const resp = await this.request(`${this.baseUrl}/api/admin/teams/${encodeURIComponent(id.toString())}`, "GET", null, null);
    return klass.decode(new Uint8Array(await resp.arrayBuffer()));
  }

  public async updateTeam(payload: isuxportal.proto.services.admin.IUpdateTeamRequest) {
    const responseClass = isuxportal.proto.services.admin.UpdateTeamResponse;
    const payloadClass = isuxportal.proto.services.admin.UpdateTeamRequest;
    const payloadMessage = payload ? payloadClass.encode(payloadClass.fromObject(payload)).finish() : null;
    const resp = await this.request(`${this.baseUrl}/api/admin/teams/${encodeURIComponent(payload.team!.id!.toString())}`, "PUT", null, payloadMessage);
    return responseClass.decode(new Uint8Array(await resp.arrayBuffer()));
  }


  public request(path: string, method: string, query: object | null, payload: Uint8Array | null) {
    return this.apiClient.request(path, method, query, payload);
  }     
}
