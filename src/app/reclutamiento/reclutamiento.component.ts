import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';

interface Reclutado {
  nombre: string;
  tipoServicio: 'Practicante' | 'Servicio social' | 'Voluntarios';
  fechaInicio: Date | null;
  fechaSalida: Date | null;
  estatus: string;
}

@Component({
  selector: 'app-reclutamiento',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuLayoutComponent],
  templateUrl: './reclutamiento.component.html',
  styleUrls: ['./reclutamiento.component.css']
})
export class ReclutamientoPage {
  reclutados: Reclutado[] = [
    {
      nombre: 'Juan Pérez',
      tipoServicio: 'Practicante',
      fechaInicio: new Date('2025-06-01'),
      fechaSalida: new Date('2025-12-01'),
      estatus: 'Activo'
    },
    {
      nombre: 'María Gómez',
      tipoServicio: 'Voluntarios',
      fechaInicio: null,
      fechaSalida: null,
      estatus: 'Inactivo'
    },
    {
      nombre: 'Carlos Ruiz',
      tipoServicio: 'Servicio social',
      fechaInicio: new Date('2025-05-15'),
      fechaSalida: new Date('2025-11-15'),
      estatus: 'Activo'
    }
  ];

  nuevoReclutado: Reclutado = {
    nombre: '',
    tipoServicio: 'Practicante',
    fechaInicio: null,
    fechaSalida: null,
    estatus: ''
  };

  reclutadoEditandoIndex: number | null = null;

  tiposServicio = ['Practicante', 'Servicio social', 'Voluntarios'];
  estatusDisponibles = ['Activo', 'Inactivo', 'Pendiente'];

  agregarReclutado() {
    // Validaciones simples:
    if (!this.nuevoReclutado.nombre || !this.nuevoReclutado.tipoServicio || !this.nuevoReclutado.estatus) {
      alert('Completa todos los campos obligatorios');
      return;
    }

    // Validar fechas si no es voluntario
    if (this.nuevoReclutado.tipoServicio !== 'Voluntarios') {
      if (!this.nuevoReclutado.fechaInicio || !this.nuevoReclutado.fechaSalida) {
        alert('Para Practicantes y Servicio social, las fechas de inicio y salida son obligatorias');
        return;
      }
      // Opcional: validar que fechaSalida sea posterior a fechaInicio
      if (this.nuevoReclutado.fechaInicio > this.nuevoReclutado.fechaSalida) {
        alert('La fecha de salida debe ser posterior a la fecha de inicio');
        return;
      }
    } else {
      // Para voluntarios, obligamos fechas en null
      this.nuevoReclutado.fechaInicio = null;
      this.nuevoReclutado.fechaSalida = null;
    }

    if (this.reclutadoEditandoIndex !== null) {
      this.reclutados[this.reclutadoEditandoIndex] = { ...this.nuevoReclutado };
      this.reclutadoEditandoIndex = null;
    } else {
      this.reclutados.push({ ...this.nuevoReclutado });
    }

    this.resetFormulario();
  }

  eliminarReclutado(index: number) {
    this.reclutados.splice(index, 1);
    if (this.reclutadoEditandoIndex === index) {
      this.resetFormulario();
    }
  }

  editarReclutado(index: number) {
    this.nuevoReclutado = { ...this.reclutados[index] };
    this.reclutadoEditandoIndex = index;
  }

  cancelarEdicion() {
    this.resetFormulario();
  }

  resetFormulario() {
    this.nuevoReclutado = {
      nombre: '',
      tipoServicio: 'Practicante',
      fechaInicio: null,
      fechaSalida: null,
      estatus: ''
    };
    this.reclutadoEditandoIndex = null;
  }
}
