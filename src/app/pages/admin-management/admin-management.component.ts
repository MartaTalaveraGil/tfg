import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {
  teamId: string = '';
  formattedTeamName: string = '';
  selectedDate: string = '';

  // 👇 NUEVO: estado del formulario y valor de la nueva contraseña
  showPasswordForm: boolean = false;
  newPassword: string = '';

  // 👇 Simulación de contraseñas (puedes moverlo a localStorage o backend después)
  passwords: { [teamId: string]: string } = {};

  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.teamId = this.route.snapshot.paramMap.get('teamId') || '';
    this.formattedTeamName = this.formatTeamName(this.teamId);
  }

  formatTeamName(teamId: string): string {
    const number = teamId.replace('equipo', '');
    return `Equipo ${number}`;
  }

  togglePasswordForm(): void {
    this.showPasswordForm = !this.showPasswordForm;
    this.newPassword = '';
  }

  savePassword(): void {
    if (this.newPassword.trim()) {
      this.passwords[this.teamId] = this.newPassword;
      alert(`Contraseña asignada correctamente a ${this.formattedTeamName}`);
      this.togglePasswordForm();
    }
  }

  goToTasks() {
    if (this.selectedDate && this.teamId) {
      this.router.navigate(['/task-list'], {
        queryParams: {
          teamId: this.teamId,
          date: this.selectedDate
        }
      });
    }
  }
}
