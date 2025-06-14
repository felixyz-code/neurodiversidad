import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuLayoutComponent } from '../menu-layout/menu-layout.component';
import jsPDF from 'jspdf';

type TipoReporte = 'Citas' | 'Usuarios' | 'Finanzas' | 'Reclutamiento';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuLayoutComponent],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesPage {
  tipoReporte: TipoReporte = 'Citas';
  fechaInicio: string = '';
  fechaFin: string = '';

  resultadoReporte: string | null = null;

  tiposReportes: TipoReporte[] = ['Citas', 'Usuarios', 'Finanzas', 'Reclutamiento'];

  generarReporte() {
    if (!this.fechaInicio || !this.fechaFin) {
      alert('Por favor selecciona un rango de fechas válido');
      return;
    }
    if (this.fechaFin < this.fechaInicio) {
      alert('La fecha fin debe ser igual o posterior a la fecha inicio');
      return;
    }
    // Simula la generación
    this.resultadoReporte = `Reporte de ${this.tipoReporte} desde ${this.fechaInicio} hasta ${this.fechaFin}`;
  }

  descargarPDF() {
    if (!this.resultadoReporte) {
      alert('Primero genera un reporte');
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Reporte generado', 10, 20);

    doc.setFontSize(12);
    doc.text(this.resultadoReporte, 10, 40);

    // Aquí puedes agregar más contenido simulado o real de reporte

    doc.save(`reporte_${this.tipoReporte}_${this.fechaInicio}_a_${this.fechaFin}.pdf`);
  }

  limpiarReporte() {
    this.resultadoReporte = null;
    this.fechaInicio = '';
    this.fechaFin = '';
    this.tipoReporte = 'Citas';
  }
}
