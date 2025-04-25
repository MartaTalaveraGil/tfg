import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  teamId: string = '';
  formattedTeamName: string = '';
  password: string = '';

  showPassword: boolean = false; // 👁️ NUEVO

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('teamId') || '';
    this.formattedTeamName = this.formatTeamName(this.teamId);
  }

  formatTeamName(teamId: string): string {
    if (teamId.startsWith('equipo')) {
      const number = teamId.replace('equipo', '');
      return `Equipo ${number}`;
    } else if (teamId === 'admin') {
      return 'Administrador';
    } else {
      return teamId;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    const isAdmin = this.teamId === 'admin';
    const adminPassword = 'admin1234';

    if ((isAdmin && this.password === adminPassword) || (!isAdmin && this.password === '1234')) {
      const route = isAdmin ? '/admin' : `/tasks/${this.teamId}`;
      this.router.navigate([route]);
    } else {
      alert('Contraseña incorrecta');
    }
  }
}
