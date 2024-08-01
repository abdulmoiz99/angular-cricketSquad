import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../team-data.service';
import { Team } from '../teams/teams.component';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  team!: Team;

  constructor(private _activatedRoute: ActivatedRoute, private _teamDataService: TeamDataService) { }

  ngOnInit(): void {
    const teamId: String = this._activatedRoute.snapshot.params["teamId"]
    this._teamDataService.getTeam(teamId).subscribe(team => {
      console.log(team);
      this.team = team
    })
  }

}
