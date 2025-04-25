import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent {
  teams = Array.from({ length: 9 }, (_, i) => ({
    id: `equipo${i + 1}`,
    name: `EQUIPO ${i + 1}`
  }));

  constructor(private router: Router) {}

  goToLogin(teamId: string) {
    this.router.navigate(['/login', teamId]);
  }
}
