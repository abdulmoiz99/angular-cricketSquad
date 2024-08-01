import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from './teams/teams.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  constructor(private _httpClient: HttpClient) { }

  public getTeams(): Observable<Team[]> {
    return this._httpClient.get<Team[]>("http://localhost:3000/teams")
  }
  public getTeam(teamId: String): Observable<Team> {
    return this._httpClient.get<Team>("http://localhost:3000/teams/" + teamId)
  }
}
