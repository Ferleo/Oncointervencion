import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  styleUrls: ['../service-page.scss'],
  template: `
    <div class="service-page">

      <!-- Intro -->
      <div scrollReveal class="service-intro-grid">
        <div class="service-intro-text">
          <span class="section-label">Primer Paso</span>
          <h2 class="service-page-title">Consulta Médica</h2>
          <p class="service-page-lead">
            La consulta médica es el primer paso para cuidar la salud de cada paciente. A través de una
            valoración detallada, nuestros especialistas realizan un diagnóstico oportuno y diseñan un
            plan de atención personalizado. Nuestro objetivo es brindar acompañamiento profesional,
            resolver dudas y ofrecer el tratamiento más adecuado para cada necesidad.
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
            src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80"
            alt="Consulta médica especializada"
            class="service-img"
            loading="lazy"
            width="600" height="400">
        </div>
      </div>

      <!-- Procedures -->
      <div scrollReveal [revealDelay]="100" class="procedures-section">
        <h3 class="procedures-heading">Nuestros Procedimientos</h3>
        <p class="procedures-subhead">
          Conoce los procedimientos que ofrecemos en consulta médica, diseñados para brindarte
          un diagnóstico preciso y un plan de tratamiento personalizado.
        </p>

        <div class="procedures-grid">
          @for (item of procedures; track item.title) {
            <div class="procedure-card">
              <div class="procedure-card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon"/>
                </svg>
              </div>
              <div>
                <h4 class="procedure-card-title">{{ item.title }}</h4>
                <p class="procedure-card-body">{{ item.body }}</p>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class ConsultaComponent {
  readonly procedures = [
    {
      title: 'Consulta General',
      body: 'Evaluación clínica integral, historial médico y plan de seguimiento personalizado.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
    },
    {
      title: 'Consulta Cirugía General',
      body: 'Valoración quirúrgica especializada con indicación de procedimiento adecuado y preparación prequirúrgica.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Consulta Oncológica',
      body: 'Evaluación multidisciplinaria para pacientes oncológicos: estadificación, opciones terapéuticas y seguimiento.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    }
  ];
}
