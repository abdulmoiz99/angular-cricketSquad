import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../team-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export class Team {
  #_id!: string;
  #country!: string;
  #yearEstablished!: string;
  #totalWorldCupWon!: number;
  get _id() { return this.#_id; }
  get country() { return this.#country; }
  get yearEstablished() { return this.#yearEstablished; }
  get totalWorldCupWon() { return this.#totalWorldCupWon; }
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {

  teams: Team[] = []
  
  constructor(private _teamDataService: TeamDataService) { }

  ngOnInit(): void {
    this._teamDataService.getTeams().subscribe(teams => {
      this.teams = teams;
    })
  }
}
