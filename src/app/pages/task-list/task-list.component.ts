import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  formattedTeamName = '';
  selectedDate = '';
  teamId = '';

  tasks: Task[] = [
    { id: 1, name: 'Revisar inventario', completed: false },
    { id: 2, name: 'Instalar sistema eléctrico', completed: true },
    { id: 3, name: 'Llamar al proveedor', completed: false },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('teamId') || '';
    this.selectedDate = this.route.snapshot.queryParamMap.get('date') || '';
    this.formattedTeamName = this.formatTeamName(this.teamId);
  }

  formatTeamName(teamId: string): string {
    const number = teamId.replace('equipo', '');
    return `Equipo ${number}`;
  }

  get completedTasks(): Task[] {
    return this.tasks.filter(t => t.completed);
  }

  get pendingTasks(): Task[] {
    return this.tasks.filter(t => !t.completed);
  }

  toggleCompletion(task: Task) {
    task.completed = !task.completed;
  }

  editTask(task: Task) {
    // Aquí redirigiríamos a la vista de edición de tareas
    alert('Editar tarea: ' + task.name);
  }

  deleteTask(task: Task) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    }
  }

  addNewTask() {
    // Aquí podrías redirigir a la pantalla para crear nueva tarea
    alert('Crear nueva tarea');
  }
}

