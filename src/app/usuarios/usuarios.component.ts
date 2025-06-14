import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuLayoutComponent],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosPage {
  usuarios = [
    {
      nombre: 'Ana López',
      correo: 'ana@ejemplo.com',
      rol: 'Asistente',
      usuario: 'ana123',
      contrasena: '1234'
    },
    {
      nombre: 'Luis Martínez',
      correo: 'luis@ejemplo.com',
      rol: 'Finanzas',
      usuario: 'luism',
      contrasena: 'abcd'
    },
    {
      nombre: 'Enrique Felix',
      correo: 'enrique@ejemplo.com',
      rol: 'Comisión de Capacitación',
      usuario: 'enriquef',
      contrasena: 'abcd'
    },
    {
      nombre: 'Azul Felix',
      correo: 'azul@ejemplo.com',
      rol: 'Director General',
      usuario: 'azulf',
      contrasena: 'abcd'
    }
  ];

  searchTerm = '';

  nuevoUsuario = {
    nombre: '',
    correo: '',
    rol: '',
    usuario: '',
    contrasena: ''
  };

  usuarioEditandoIndex: number | null = null;

  rolesDisponibles = [
    'Director general',
    'Finanzas',
    'Asistente',
    'Trabajo Social',
    'Reclutamiento',
    'Comisión de capacitación'
  ];

  agregarUsuario() {
    if (
      this.nuevoUsuario.nombre &&
      this.nuevoUsuario.correo &&
      this.nuevoUsuario.rol &&
      this.nuevoUsuario.usuario &&
      this.nuevoUsuario.contrasena
    ) {
      if (this.usuarioEditandoIndex !== null) {
        // Modo edición
        this.usuarios[this.usuarioEditandoIndex] = { ...this.nuevoUsuario };
        this.usuarioEditandoIndex = null;
      } else {
        // Nuevo usuario
        this.usuarios.push({ ...this.nuevoUsuario });
      }

      this.resetFormulario();
    } else {
      alert('Completa todos los campos');
    }
  }

  eliminarUsuario(index: number) {
    this.usuarios.splice(index, 1);
    if (this.usuarioEditandoIndex === index) {
      this.resetFormulario();
    }
  }

  editarUsuario(index: number) {
    const u = this.usuarios[index];
    this.nuevoUsuario = { ...u };
    this.usuarioEditandoIndex = index;
  }

  cancelarEdicion() {
    this.resetFormulario();
  }

  resetFormulario() {
    this.nuevoUsuario = {
      nombre: '',
      correo: '',
      rol: '',
      usuario: '',
      contrasena: ''
    };
    this.usuarioEditandoIndex = null;
  }

  get usuariosFiltrados() {
    return this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}