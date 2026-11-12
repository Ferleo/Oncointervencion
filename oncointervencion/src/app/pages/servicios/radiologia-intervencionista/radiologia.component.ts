import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

interface ProcedureCategory {
  title: string;
  icon: string;
  procedures: string[];
}

@Component({
  selector: 'app-radiologia',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  styleUrls: ['../service-page.scss'],
  template: `
    <div class="service-page">

      <!-- Intro -->
      <div scrollReveal class="service-intro-grid">
        <div class="service-intro-text">
          <span class="section-label">Mínima Invasión</span>
          <h2 class="service-page-title">Radiología Intervencionista</h2>
          <p class="service-page-lead">
            La radiología intervencionista permite diagnosticar y tratar enfermedades mediante
            procedimientos mínimamente invasivos guiados por imagen. Esto ofrece tratamientos más
            seguros, con menos dolor y tiempos de recuperación más cortos. Nuestro equipo realiza
            desde biopsias y drenajes hasta embolizaciones y colocación de catéteres, brindando
            soluciones innovadoras y efectivas para cada paciente.
          </p>
          <a routerLink="/contacto" class="btn-primary" style="margin-top: 1.5rem;">
            Agendar Consulta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <div class="service-intro-img" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80"
            alt="Radiología intervencionista guiada por imagen"
            class="service-img"
            loading="lazy"
            width="600" height="400">
        </div>
      </div>

      <!-- Procedures header -->
      <div scrollReveal [revealDelay]="100">
        <h3 class="procedures-heading" style="margin-bottom: 0.5rem;">Nuestros Procedimientos</h3>
        <p class="procedures-subhead">
          Conoce los procedimientos que ofrecemos en radiología intervencionista, diseñados para
          diagnosticar y tratar enfermedades de forma precisa, segura y mínimamente invasiva.
        </p>
      </div>

      <!-- Category cards grid -->
      <div class="rad-grid">
        @for (cat of categories; track cat.title; let i = $index) {
          <div scrollReveal [revealDelay]="i * 100" class="category-card">
            <div class="category-header">
              <div class="category-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="cat.icon"/>
                </svg>
              </div>
              <h4 class="category-title">{{ cat.title }}</h4>
            </div>
            <div class="category-body">
              <ul class="procedure-list" role="list">
                @for (proc of cat.procedures; track proc) {
                  <li class="procedure-list-item" role="listitem">
                    <span class="procedure-dot" aria-hidden="true"></span>
                    {{ proc }}
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      </div>

    </div>
  `
})
export class RadiologiaComponent {
  readonly categories: ProcedureCategory[] = [
    {
      title: 'Intervencionismo Oncológico',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      procedures: [
        'Ablación: crioablación, microondas y radiofrecuencia',
        'Quimioembolización Hepática (TACE)',
        'Embolización Prequirúrgica'
      ]
    },
    {
      title: 'Biopsias Percutáneas',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      procedures: [
        'Ganglios linfáticos y nódulos tiroideos',
        'Glándulas parótidas y mama',
        'Hígado, riñón, pulmón y pleura',
        'Partes blandas: músculo, grasa',
        'Hueso (transyugular hepática)',
        'Tumores torácicos, abdominales y pélvicos'
      ]
    },
    {
      title: 'Procedimientos Percutáneos',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      procedures: [
        'Nefrostomía percutánea',
        'Intervencionismo de la vía biliar',
        'Tratamiento de quistes hepáticos',
        'Tratamiento de nódulos en tiroides',
        'Drenes percutáneos: abscesos abdominales/pélvicos, hepáticos, derrames pleurales, ascitis, abscesos renales, hematomas y empiemas'
      ]
    },
    {
      title: 'Colocación de Catéteres Vasculares',
      icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      procedures: [
        'Catéter venoso central',
        'Catéter para hemodiálisis (insuficiencia renal aguda o crónica)',
        'Catéter tipo puerto o Port-a-Cath (tratamiento oncológico)'
      ]
    },
    {
      title: 'Procedimientos Vasculares',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      procedures: [
        'Angiografía diagnóstica y terapéutica',
        'Embolización vascular',
        'Angioplastia y stent',
        'Flebografía',
        'Trombectomía y Trombólisis',
        'Filtros de Vena Cava',
        'Extracción intravascular de cuerpo extraño'
      ]
    }
  ];
}
