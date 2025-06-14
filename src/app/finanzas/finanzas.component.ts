import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';

@Component({
  selector: 'app-finanzas',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuLayoutComponent],
  templateUrl: './finanzas.component.html',
  styleUrls: ['./finanzas.component.css']
})
export class FinanzasPage {
  registros = [
    { tipo: 'entrada', descripcion: 'Donación mensual', monto: 5000, fecha: new Date('2025-06-01') },
    { tipo: 'salida', descripcion: 'Compra de libros', monto: 800, fecha: new Date('2025-06-03') },
    { tipo: 'salida', descripcion: 'Pago de internet', monto: 500, fecha: new Date('2025-06-05') },
    { tipo: 'entrada', descripcion: 'Evento recaudación', monto: 3200, fecha: new Date('2025-06-10') },
    { tipo: 'entrada', descripcion: 'Apoyo gubernamental', monto: 7000, fecha: new Date('2025-05-20') },
    { tipo: 'salida', descripcion: 'Papelería', monto: 300, fecha: new Date('2025-05-25') }
  ];

  nuevoRegistro = {
    tipo: 'entrada',
    descripcion: '',
    monto: 0
  };

  mesSeleccionado = new Date().toISOString().substring(0, 7); // yyyy-MM

  get fechaInicio(): Date {
    const [año, mes] = this.mesSeleccionado.split('-').map(Number);
    return new Date(año, mes - 1, 1);
  }

  get fechaFin(): Date {
    const [año, mes] = this.mesSeleccionado.split('-').map(Number);
    return new Date(año, mes, 0); // último día del mes
  }

  get registrosFiltrados() {
    return this.registros.filter(r => {
      const fecha = new Date(r.fecha);
      return fecha >= this.fechaInicio && fecha <= this.fechaFin;
    });
  }

  get totalEntradas() {
    return this.registrosFiltrados
      .filter(r => r.tipo === 'entrada')
      .reduce((acc, curr) => acc + curr.monto, 0);
  }

  get totalSalidas() {
    return this.registrosFiltrados
      .filter(r => r.tipo === 'salida')
      .reduce((acc, curr) => acc + curr.monto, 0);
  }

  get balance() {
    return this.totalEntradas - this.totalSalidas;
  }

  agregarRegistro() {
    if (this.nuevoRegistro.descripcion && this.nuevoRegistro.monto > 0) {
      const registro = {
        ...this.nuevoRegistro,
        fecha: new Date()
      };
      this.registros.push(registro);
      this.nuevoRegistro = { tipo: 'entrada', descripcion: '', monto: 0 };
    } else {
      alert('Completa todos los campos correctamente');
    }
  }

  eliminarRegistro(index: number) {
    const realIndex = this.registros.findIndex((r, i) => r === this.registrosFiltrados[index]);
    if (realIndex !== -1) {
      this.registros.splice(realIndex, 1);
    }
  }
}
