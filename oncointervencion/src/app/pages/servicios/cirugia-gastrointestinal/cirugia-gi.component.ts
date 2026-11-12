import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-cirugia-gi',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  styleUrls: ['../service-page.scss'],
  template: `
    <div class="service-page">

      <!-- Intro -->
      <div scrollReveal class="service-intro-grid">
        <div class="service-intro-text">
          <span class="section-label">Aparato Digestivo</span>
          <h2 class="service-page-title">Cirugía Gastrointestinal</h2>
          <p class="service-page-lead">
            La cirugía gastrointestinal se enfoca en el diagnóstico y tratamiento de enfermedades que
            afectan al aparato digestivo, incluyendo estómago, colon, hígado y vesícula. Realizamos
            procedimientos seguros y de alta precisión que permiten resolver problemas como hernias,
            reflujo o tumores digestivos. Nuestro compromiso es mejorar la salud y favorecer una
            recuperación rápida y efectiva.
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
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80"
            alt="Cirugía gastrointestinal laparoscópica"
            class="service-img"
            loading="lazy"
            width="600" height="400">
        </div>
      </div>

      <!-- Procedures -->
      <div scrollReveal [revealDelay]="100" class="procedures-section">
        <h3 class="procedures-heading">Procedimientos</h3>
        <p class="procedures-subhead">
          Realizamos cirugías con técnicas mínimamente invasivas que reducen el tiempo de recuperación
          y los riesgos postoperatorios.
        </p>

        <ul class="procedure-list" role="list">
          @for (item of procedures; track item) {
            <li class="procedure-list-item" role="listitem">
              <span class="procedure-dot" aria-hidden="true"></span>
              {{ item }}
            </li>
          }
        </ul>
      </div>

    </div>
  `
})
export class CirugiaGIComponent {
  readonly procedures = [
    'Cirugía laparoscópica avanzada',
    'Cirugía de vesícula biliar (colecistectomía)',
    'Cirugía de apéndice (apendicectomía)',
    'Cirugía de hernia abdominal, inguinal y umbilical',
    'Cirugía para reflujo gastroesofágico (funduplicatura)',
    'Cirugía por oclusión intestinal',
    'Cirugía general del aparato digestivo'
  ];
}
