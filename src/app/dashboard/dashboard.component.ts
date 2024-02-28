import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../core/models';
import links, { NavItem } from './nav-items';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  showFiller = false;

  authUser$: Observable<Usuario | null>;

  links = links;

  destroyed$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.authUser$ = this.authService.obtenerUsuarioAutenticado();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  logout(): void {
    this.authService.logout();
  }

  verifyRole(link: NavItem): Observable<boolean> {
    return this.authUser$.pipe(
      map((usuarioAuth) =>
        link.allowedRoles.some((r) => r === usuarioAuth?.role)
      )
    );
  }
}
