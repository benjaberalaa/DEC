import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TableParametrageComponent } from './table-parametrage/table-parametrage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { GenericOperationsComponent } from './operations/generic-operations/generic-operations.component';
import { OperationsComponent } from './operations/operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './service/auth.interceptor';
import { AuditComponent } from './audit/audit.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SettingsComponent } from './settings/settings.component';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPeriodComponent,
    SidebarComponent,
    TableParametrageComponent,
    DynamicTableComponent,
    GenericOperationsComponent,
    OperationsComponent,
    DashboardComponent,
    TranslatePipe,
    LoginComponent,
    AuditComponent,
    UserManagementComponent,
    SettingsComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
