import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenericOperationsComponent } from './operations/generic-operations/generic-operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AddPeriodComponent} from './add-period/add-period.component';
import {TableParametrageComponent} from './table-parametrage/table-parametrage.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, // Route par défaut (dashboard)
  { path: 'add-period', component: AddPeriodComponent }, // Route pour AddPeriod
  { path: 'operations', component: GenericOperationsComponent }, // Route pour Operations (Dynamique)
  { path: 'parametrage', component: TableParametrageComponent },
  { path: 'periods/:type', component: AddPeriodComponent },// Route pour Operations

  { path: '**', redirectTo: '' }, // Redirection pour les routes inconnues
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
