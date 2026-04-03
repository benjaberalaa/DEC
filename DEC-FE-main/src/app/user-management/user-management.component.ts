import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  userForm: FormGroup;
  loading = false;
  submitted = false;
  message = '';

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: ['ROLE_USER', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.http.get<any[]>(`${environment.apiUrl}/admin/users`).subscribe({
      next: (data) => this.users = data,
      error: (err) => console.error('Failed to load users', err)
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.userForm.invalid) return;

    this.loading = true;
    this.http.post(`${environment.apiUrl}/admin/users`, this.userForm.value).subscribe({
      next: (res: any) => {
        this.message = res.message;
        this.userForm.reset({role: 'ROLE_USER'});
        this.submitted = false;
        this.loading = false;
        this.loadUsers();
        setTimeout(() => this.message = '', 3000);
      },
      error: (err) => {
        this.message = 'Erreur lors de la création';
        this.loading = false;
      }
    });
  }
}
