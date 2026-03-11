import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { OperationsComponent } from './operations/operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddPeriodComponent,
    SidebarComponent,
    TableParametrageComponent,
    DynamicTableComponent,
    OperationsComponent,
    DashboardComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatIcon,
    MatFormField,
    MatRadioGroup,
    MatRadioButton,
    MatInput,
    MatIconButton,
    MatButton,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRadioModule,



  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
