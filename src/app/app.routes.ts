import { Routes } from '@angular/router';
import { TeamSelectorComponent } from './pages/team-selector/team-selector.component';
import { LoginComponent } from './pages/login/login.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminManagementComponent } from './pages/admin-management/admin-management.component';


export const routes: Routes = [
  { path: '', component: TeamSelectorComponent },
  { path: 'login/:teamId', component: LoginComponent },
  { path: 'admin-tasks/:teamId', component: TaskListComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-management/:teamId', component: AdminManagementComponent},
  { path: 'task-list', component: TaskListComponent}
];
