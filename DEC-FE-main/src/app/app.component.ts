import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './service/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DEC-FRONT';
  isLoginPage: boolean = false;
  enteteDoc: string[] = [];
  modelAttributes: any = null;

  constructor(private router: Router, public authService: AuthService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isLoginPage = event.url === '/login' || event.urlAfterRedirects === '/login';
    });
  }

  onModelSelected(data: any): void {
    this.enteteDoc = data.enteteDoc;
    this.modelAttributes = data.modelAttributes;

    this.router.navigate(['/add-period'], {
      state: { enteteDoc: this.enteteDoc, modelAttributes: this.modelAttributes },
    });
  }

  onDetailClicked(): void {
    this.router.navigate(['/operations']);
  }
}
