import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Especialidad {
  nombre: string;
  descripcion: string;
  icono: string;
  ruta: string;
}

@Component({
  selector: 'app-especialidades-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './especialidades-home.component.html',
  styleUrls: ['./especialidades-home.component.scss']
})
export class EspecialidadesHomeComponent {
  especialidades: Especialidad[] = [
    {
      nombre: 'Consulta',
      descripcion: 'Atención médica personalizada y diagnóstico integral.',
      icono: '👨‍⚕️',
      ruta: 'consulta'
    },
    {
      nombre: 'Cirugía Gastrointestinal',
      descripcion: 'Diagnóstico y tratamiento especializado en el sistema digestivo.',
      icono: '🩺',
      ruta: 'cirugia-gastrointestinal'
    },
    {
      nombre: 'Cirugía Oncológica',
      descripcion: 'Atención integral en cirugía para pacientes con cáncer.',
      icono: '🏥',
      ruta: 'cirugia-oncologica'
    },
    {
      nombre: 'Radiología Intervencionista',
      descripcion: 'Procedimientos mínimamente invasivos guiados por imagen.',
      icono: '🩻',
      ruta: 'radiologia-intervencionista'
    }
  ];

  // Para trackBy en *ngFor
  trackByRuta(index: number, esp: Especialidad) {
    return esp.ruta;
  }
}
