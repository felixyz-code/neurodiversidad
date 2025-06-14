import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuLayoutComponent],
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasPage {
  selectedDate = new Date().toISOString().slice(0, 10);
  searchTerm = '';
  mostrandoFormulario = false;
  editandoCita: any = null;

  citas = [
    {
      paciente: 'Juan Pérez',
      fecha: '2025-06-10',
      hora: '10:30',
      especialista: 'Psicóloga Ana Torres',
      estado: 'Confirmada',
    },
    {
      paciente: 'Laura García',
      fecha: '2025-06-10',
      hora: '13:00',
      especialista: 'Terapeuta Jorge León',
      estado: 'Pendiente',
    },
    {
      paciente: 'Carlos Méndez',
      fecha: '2025-06-10',
      hora: '15:15',
      especialista: 'Neuropediatra Marta Ruiz',
      estado: 'Cancelada',
    },
  ];

  nuevaCita = this.nuevaCitaVacia();

  nuevaCitaVacia() {
    return {
      paciente: '',
      fecha: this.selectedDate,
      hora: '',
      especialista: '',
      estado: 'Pendiente',
    };
  }

  abrirFormulario() {
    this.nuevaCita = this.nuevaCitaVacia();
    this.editandoCita = null;
    this.mostrandoFormulario = true;
  }

  crearCita() {
    if (this.editandoCita) {
      const index = this.citas.indexOf(this.editandoCita);
      if (index !== -1) {
        this.citas[index] = { ...this.nuevaCita };
      }
    } else {
      this.citas.push({ ...this.nuevaCita });
    }
    this.resetFormulario();
  }

  editar(cita: any) {
    this.editandoCita = cita;
    this.nuevaCita = { ...cita };
    this.mostrandoFormulario = true;
  }

  eliminar(cita: any) {
    const confirmacion = confirm(`¿Eliminar cita de ${cita.paciente}?`);
    if (confirmacion) {
      this.citas = this.citas.filter(c => c !== cita);
    }
  }

  resetFormulario() {
    this.nuevaCita = this.nuevaCitaVacia();
    this.editandoCita = null;
    this.mostrandoFormulario = false;
  }
}