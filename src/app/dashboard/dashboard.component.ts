import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule, NgbCollapseModule, MenuLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardPage {

  isCollapsed = true;
  userMenuCollapsed = true;
  usuario = { nombre: 'Juan Pérez' };

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleUserMenu() {
    this.userMenuCollapsed = !this.userMenuCollapsed;
  }

  cerrarSesion() {
    alert('Cerrando sesión...');
  }

}