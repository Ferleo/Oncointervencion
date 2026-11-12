import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-cirugia-onco',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  styleUrls: ['../service-page.scss'],
  template: `
    <div class="service-page">

      <!-- Intro -->
      <div scrollReveal class="service-intro-grid">
        <div class="service-intro-text">
          <span class="section-label">Oncología Quirúrgica</span>
          <h2 class="service-page-title">Cirugía Oncológica</h2>
          <p class="service-page-lead">
            La cirugía oncológica está dedicada al diagnóstico y tratamiento de tumores benignos y
            malignos. Nuestro enfoque es integral, combinando la precisión quirúrgica con un
            acompañamiento humano para cada paciente. Buscamos controlar la enfermedad, prevenir
            complicaciones y contribuir a una mejor calidad de vida, siempre trabajando de manera
            multidisciplinaria.
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
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80"
            alt="Cirugía oncológica especializada"
            class="service-img"
            loading="lazy"
            width="600" height="400">
        </div>
      </div>

      <!-- Scope cards -->
      <div scrollReveal [revealDelay]="100" class="procedures-section">
        <h3 class="procedures-heading">Nuestros Procedimientos</h3>
        <p class="procedures-subhead">
          Conoce los procedimientos que ofrecemos en cirugía oncológica, diseñados para atender
          con profesionalismo y sensibilidad cada etapa del proceso oncológico.
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
export class CirugiaOncoComponent {
  readonly procedures = [
    {
      title: 'Tumores de Cabeza y Cuello',
      body: 'Resección quirúrgica de neoplasias en región cervicofacial con preservación funcional.',
      icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Tumores Gastrointestinales',
      body: 'Cirugía de tumores en estómago, colon, recto, páncreas e intestino delgado.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Tumores Hepatobiliares',
      body: 'Hepatectomías, resección de vía biliar y pancreatectomías para neoplasias del área hepatopancreática.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Tumores Ginecológicos y Urológicos',
      body: 'Cirugía oncológica en órganos pélvicos con enfoque en preservación de función y calidad de vida.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0'
    },
    {
      title: 'Tumores de Tejidos Blandos',
      body: 'Resección de sarcomas, lipomas malignos y otras neoplasias de músculo, grasa y fascias.',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      title: 'Cirugía Oncológica Especializada',
      body: 'Segunda opinión, cirugías de revisión y manejo multidisciplinario de casos complejos.',
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    }
  ];
}
