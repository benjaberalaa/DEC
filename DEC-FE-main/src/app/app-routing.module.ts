import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenericOperationsComponent } from './operations/generic-operations/generic-operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { ChatAbtComponent } from './chat-abt/chat-abt.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuditComponent } from './audit/audit.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'add-period', 
    component: AddPeriodComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
  },
  { 
    path: 'operations', 
    component: GenericOperationsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
  },
  { 
    path: 'chat-abt', 
    component: ChatAbtComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
  },
  { 
    path: 'periods/:type', 
    component: AddPeriodComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_USER'] }
  },
  { 
    path: 'history', 
    component: AuditComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN', 'ROLE_AUDIT'] }
  },
  { 
    path: 'users', 
    component: UserManagementComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  { 
    path: 'settings', 
    component: SettingsComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
