import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, TeamMember } from '../services/data.service';
@Component({
  selector: 'app-meet-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meet-team.html',
  styleUrl: './meet-team.css',
})
export class MeetTeam {
  teamMembers: TeamMember[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.teamMembers = this.dataService.getTeamMembers();
  }
}
