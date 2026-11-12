import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { DoctorCardComponent, Doctor } from '../../shared/components/doctor-card/doctor-card.component';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [ScrollRevealDirective, DoctorCardComponent],
  styleUrls: ['./quienes-somos.component.scss'],
  template: `
    <!-- Page hero -->
    <header class="page-hero" aria-label="Quiénes somos">
      <div class="qs-hero-content container-xl">
        <span class="section-label" style="background: rgba(255,255,255,0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.2);">
          El Equipo
        </span>
        <h1 class="qs-hero-title">¿Quiénes Somos?</h1>
        <p class="qs-hero-subtitle">
          Médicos especializados, apasionados por la medicina de alta calidad y comprometidos
          con el bienestar de cada paciente.
        </p>
      </div>
    </header>

    <main class="qs-content container-xl">

      <!-- Intro text -->
      <section scrollReveal class="qs-intro" aria-label="Sobre nosotros">
        <div class="qs-intro-inner">
          <span class="section-label">Nuestra Esencia</span>
          <h2 class="section-title">OncoIntervención Especializada</h2>
          <p class="qs-intro-text">
            En Oncointervención Especializada reunimos un equipo de médicos altamente capacitados en
            cirugía gastrointestinal, cirugía oncológica y radiología intervencionista. Nuestro enfoque
            multidisciplinario nos permite ofrecer diagnósticos precisos y tratamientos personalizados,
            siempre con un trato humano. Creemos que cada paciente merece confianza, claridad y
            acompañamiento durante todo su proceso de atención, por lo que combinamos la medicina de
            alta especialidad con calidez y compromiso.
          </p>
        </div>
        <div class="qs-intro-values" role="list" aria-label="Valores del equipo">
          @for (val of values; track val.label) {
            <div class="qs-value" role="listitem">
              <div class="qs-value-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="val.icon"/>
                </svg>
              </div>
              <span class="qs-value-label">{{ val.label }}</span>
            </div>
          }
        </div>
      </section>

      <!-- Doctors grid -->
      <section class="qs-doctors" aria-label="Nuestro equipo médico">
        <div scrollReveal class="section-header-center">
          <span class="section-label">Especialistas</span>
          <h2 class="section-title">Nuestro Equipo Médico</h2>
          <p class="section-subtitle" style="margin: 0.75rem auto 0;">
            Conoce a los médicos que forman parte de OncoIntervención Especializada.
          </p>
        </div>

        <div class="doctors-grid">
          @for (doc of doctors; track doc.name; let i = $index) {
            <div scrollReveal [revealDelay]="(i % 3) * 120">
              <app-doctor-card [doctor]="doc"></app-doctor-card>
            </div>
          }
        </div>
      </section>

      <!-- Partners -->
      <section scrollReveal class="qs-partners" aria-label="Aliados estratégicos">
        <div class="partners-header">
          <span class="section-label">Colaboradores</span>
          <h2 class="section-title">Aliados Estratégicos</h2>
          <p class="section-subtitle" style="margin-top: 0.75rem;">
            Trabajamos en colaboración con hospitales e instituciones de primer nivel para garantizar
            la más alta calidad en la atención de cada paciente.
          </p>
        </div>

        <div class="partners-grid" role="list" aria-label="Logos de aliados próximamente">
          @for (p of partnerSlots; track p) {
            <div class="partner-slot" role="listitem">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span>Próximamente</span>
            </div>
          }
        </div>
      </section>

    </main>
  `
})
export class QuienesSomosComponent {
  readonly values = [
    { label: 'Excelencia Clínica',    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { label: 'Trato Humano',          icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { label: 'Innovación',            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
    { label: 'Multidisciplinario',    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0' }
  ];

  readonly doctors: Doctor[] = [
    {
      name: 'Dra. Ana Karen Barreto Rodríguez',
      specialty: 'Radiología Intervencionista',
      description: 'Especialista en procedimientos mínimamente invasivos guiados por imagen. Apasionada por la innovación terapéutica y el cuidado integral del paciente oncológico.',
      formation: 'Especialidad en Radiología e Imagen · Subespecialidad en Radiología Intervencionista',
      imageUrl: '/images/Karen 1.jpg'
    },
    {
      name: 'Dra. Ana María Guadalupe Ibarra Morales',
      specialty: 'Cirugía Oncológica',
      description: 'Cirujana oncóloga dedicada al tratamiento integral de tumores benignos y malignos con enfoque multidisciplinario y humanístico en cada caso.',
      formation: 'Especialidad en Cirugía General · Subespecialidad en Oncología Quirúrgica',
      imageUrl: '/images/Karen 4.jpg'
    },
    {
      name: 'Dr. Luis Enrique Santillán Bautista',
      specialty: 'Cirugía Gastrointestinal',
      description: 'Cirujano especialista en patología del aparato digestivo. Experto en técnicas laparoscópicas avanzadas que favorecen una recuperación rápida y segura.',
      formation: 'Especialidad en Cirugía General · Subespecialidad en Cirugía Gastrointestinal',
      imageUrl: '/images/Amaury 3.jpg'
    },
    {
      name: 'Dr. Amaury Joazeem Vicente',
      specialty: 'Cirugía General y Oncológica',
      description: 'Médico cirujano con amplia formación en cirugía general y oncológica. Comprometido con ofrecer diagnósticos precisos y soluciones quirúrgicas personalizadas.',
      formation: 'Especialidad en Cirugía General · Formación en Cirugía Oncológica',
      imageUrl: '/images/Amaury 2.jpg'
    },
    {
      name: 'Dra. Lourdes E. Rodríguez Barreto',
      specialty: 'Atención dental del paciente con cáncer',
      description: 'Especialista en odontología oncológica, enfocada en prevenir y tratar las complicaciones bucales derivadas de la quimioterapia y radioterapia, así como en la rehabilitación protésica maxilofacial para preservar la calidad de vida del paciente oncológico.',
      formation: 'Prótesis Maxilofacial y Odontología Oncológica',
      imageUrl: '/images/Lula.jpeg'
    }
  ];

  readonly partnerSlots = [1, 2, 3, 4, 5, 6];
}

