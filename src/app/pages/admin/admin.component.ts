import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  teams = Array.from({ length: 9 }, (_, i) => ({
    id: `equipo${i + 1}`,
    name: `EQUIPO ${i + 1}`
  }));

  constructor(private router: Router) {}

  goToTeam(teamId: string) {
    this.router.navigate(['/admin-management', teamId]);
  }
}

