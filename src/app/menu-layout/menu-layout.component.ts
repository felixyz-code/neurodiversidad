import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-layout',
  templateUrl: './menu-layout.component.html',
  styleUrls: ['./menu-layout.component.css'],
  standalone: true,
  imports: [CommonModule, NgbCollapseModule, RouterModule]
})
export class MenuLayoutComponent {

  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  isCollapsed = true;
  userMenuCollapsed = true;
  usuario = { nombre: 'Elda Lupian' };

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleUserMenu() {
    this.userMenuCollapsed = !this.userMenuCollapsed;
  }

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}