import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface CarouselSlide {
  title: string;
  subtitle: string;
  imageUrl: string;
  tag: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./home.component.scss'],
  template: `
    <!-- ═══════════════════════════════════════════════════════
         HERO SECTION
    ════════════════════════════════════════════════════════ -->
    <section class="hero" aria-label="Presentación principal">

      <!-- Background layers -->
      <div class="hero-bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=1920&q=80"
          alt=""
          class="hero-bg-img"
          loading="eager"
          fetchpriority="high">
        <div class="hero-overlay"></div>
        <!-- Subtle radial accents -->
        <div class="hero-radial-1"></div>
        <div class="hero-radial-2"></div>
      </div>

      <!-- Content -->
      <div class="hero-content container-xl">
        <div class="hero-text">
          <!-- Pre-heading badge -->
          <div class="hero-badge" role="text">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H9v-4H5v-3h4V6h3v4h4v3h-4v4z"/>
            </svg>
            Alta Especialidad Médica
          </div>

          <h1 class="hero-title">
            Precisión médica.<br>
            <span class="hero-title-accent">Trato humano.</span>
          </h1>

          <p class="hero-body">
            Somos un equipo de médicos especializados con enfoque humano que ofrecemos atención integral
            desde el diagnóstico hasta el tratamiento. Combinamos la experiencia en cirugía general,
            oncológica y radiología intervencionista para abordar una terapia completa que reduce riesgos
            y favorece una recuperación más favorable.
          </p>

          <div class="hero-actions">
            <a routerLink="/servicios" class="btn-primary">
              Conocer Servicios
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a routerLink="/contacto" class="btn-outline-white">
              Agenda tu Cita
            </a>
          </div>
        </div>

        <!-- Stats row -->
        <div class="hero-stats" role="list" aria-label="Estadísticas del equipo">
          <div class="hero-stat" role="listitem">
            <span class="hero-stat-num">5+</span>
            <span class="hero-stat-label">Especialistas</span>
          </div>
          <div class="hero-stat-divider" aria-hidden="true"></div>
          <div class="hero-stat" role="listitem">
            <span class="hero-stat-num">3</span>
            <span class="hero-stat-label">Especialidades</span>
          </div>
          <div class="hero-stat-divider" aria-hidden="true"></div>
          <div class="hero-stat" role="listitem">
            <span class="hero-stat-num">100%</span>
            <span class="hero-stat-label">Atención Integral</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="hero-scroll-hint" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         CAROUSEL SECTION
    ════════════════════════════════════════════════════════ -->
    <section class="carousel-section" aria-label="Destacados del equipo">
      <div class="container-xl">
        <div scrollReveal class="section-header">
          <span class="section-label">Nuestro Enfoque</span>
          <h2 class="section-title">Lo que nos define</h2>
          <p class="section-subtitle">
            Cinco pilares que guían nuestra práctica médica y garantizan la calidad de atención que mereces.
          </p>
        </div>

        <!-- Swiper carousel -->
        <swiper-container
          class="onco-swiper"
          [attr.slides-per-view]="'auto'"
          [attr.space-between]="24"
          [attr.centered-slides]="false"
          [attr.loop]="true"
          [attr.autoplay-delay]="4000"
          [attr.autoplay-disable-on-interaction]="false"
          [attr.grab-cursor]="true"
          [attr.pagination]="true"
          [attr.pagination-clickable]="true"
          aria-label="Carrusel de destacados">

          @for (slide of slides; track slide.title) {
            <swiper-slide class="carousel-slide-wrapper">
              <div class="carousel-card" [style.background-image]="'url(&quot;' + slide.imageUrl + '&quot;)'">
                <div class="carousel-card-overlay" aria-hidden="true"></div>
                <div class="carousel-card-content">
                  <span class="carousel-tag">{{ slide.tag }}</span>
                  <h3 class="carousel-title">{{ slide.title }}</h3>
                  <p class="carousel-subtitle">{{ slide.subtitle }}</p>
                </div>
              </div>
            </swiper-slide>
          }
        </swiper-container>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         MISIÓN / VISIÓN
    ════════════════════════════════════════════════════════ -->
    <section class="mission-section" aria-label="Misión y visión">
      <div class="container-xl">
        <div scrollReveal class="section-header">
          <span class="section-label">Nuestros Valores</span>
          <h2 class="section-title">Misión &amp; Visión</h2>
        </div>

        <div class="mission-grid">
          <!-- Misión -->
          <div scrollReveal [revealDelay]="100" class="mission-card">
            <div class="mission-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="mission-card-title">Misión</h3>
            <p class="mission-card-body">
              Ofrecer atención médica especializada en cirugía gastrointestinal, oncológica y radiología
              intervencionista, con diagnósticos precisos, tratamientos seguros y un trato humano que
              favorezca la recuperación del paciente.
            </p>
          </div>

          <!-- Visión -->
          <div scrollReveal [revealDelay]="200" class="mission-card mission-card--teal">
            <div class="mission-icon mission-icon--teal" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="mission-card-title">Visión</h3>
            <p class="mission-card-body">
              Ser un equipo médico de referencia en el manejo multidisciplinario de enfermedades
              gastrointestinales y oncológicas, reconocido por la excelencia clínica, la innovación
              y la calidad humana.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         ¿CÓMO PODEMOS AYUDARTE?
    ════════════════════════════════════════════════════════ -->
    <section class="help-section" aria-label="Cómo podemos ayudarte">
      <div class="container-xl">
        <div class="help-inner">
          <div scrollReveal class="help-text-col">
            <span class="section-label">Nuestra Promesa</span>
            <h2 class="section-title" style="color: #fff; max-width: 480px;">
              ¿Cómo podemos<br>ayudarte?
            </h2>
            <p style="color: rgba(255,255,255,0.75); font-size: 1.0625rem; line-height: 1.8; max-width: 520px; margin-top: 1rem;">
              Te acompañamos en cada paso de tu proceso de salud, desde el diagnóstico hasta la
              recuperación. Nuestro equipo multidisciplinario combina tecnología avanzada y atención
              personalizada para brindarte soluciones seguras, efectivas y con un enfoque humano,
              cuidando no solo tu tratamiento, sino también tu tranquilidad y bienestar.
            </p>
            <a routerLink="/contacto" class="btn-outline-white" style="margin-top: 2rem;">
              Agenda una consulta
            </a>
          </div>

          <div scrollReveal [revealDelay]="150" class="help-cards-col">
            @for (item of helpItems; track item.title) {
              <div class="help-item">
                <div class="help-item-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="item.icon"/>
                  </svg>
                </div>
                <div>
                  <p class="help-item-title">{{ item.title }}</p>
                  <p class="help-item-body">{{ item.body }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════
         SERVICIOS PREVIEW
    ════════════════════════════════════════════════════════ -->
    <section class="services-preview-section" aria-label="Nuestros servicios">
      <div class="container-xl">
        <div scrollReveal class="section-header">
          <span class="section-label">Especialidades</span>
          <h2 class="section-title">Servicios Médicos</h2>
          <p class="section-subtitle">
            Tres áreas de alta especialidad integradas para ofrecerte un manejo completo y multidisciplinario.
          </p>
        </div>

        <div class="services-grid">
          @for (service of services; track service.route; let i = $index) {
            <a [routerLink]="service.route"
               scrollReveal [revealDelay]="i * 100"
               class="service-card"
               [attr.aria-label]="'Ir a ' + service.title">
              <div class="service-card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="service.icon"/>
                </svg>
              </div>
              <h3 class="service-card-title">{{ service.title }}</h3>
              <p class="service-card-desc">{{ service.desc }}</p>
              <span class="service-card-link">
                Ver más
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </a>
          }
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  readonly slides: CarouselSlide[] = [
    {
      title: 'Nuestro Enfoque',
      subtitle: 'Atención integral centrada en el paciente y su bienestar',
      imageUrl: 'images/Sala de Hemodinamia.jpg',
      tag: '01'
    },
    {
      title: 'Tecnología Especializada',
      subtitle: 'Equipamiento de vanguardia para diagnósticos precisos y tratamientos seguros',
      imageUrl: 'images/Sala de hemodinamia 2.jpg',
      tag: '02'
    },
    {
      title: 'Equipo Multidisciplinario',
      subtitle: 'Cirujanos, oncólogos y radiólogos trabajando coordinados por tu salud',
      imageUrl: 'images/Juntos 1.jpg',
      tag: '03'
    },
    {
      title: 'Precisión y Confianza',
      subtitle: 'Cada procedimiento ejecutado con rigor clínico y evidencia científica',
      imageUrl: 'images/Juntos 2.jpg',
      tag: '04'
    },
    {
      title: 'Innovación Médica',
      subtitle: 'Procedimientos mínimamente invasivos que aceleran tu recuperación',
      imageUrl: 'images/Sala de Hemodinamia.jpg',
      tag: '05'
    }
  ];

  readonly helpItems = [
    {
      title: 'Diagnóstico Oportuno',
      body: 'Evaluación clínica completa y estudios dirigidos para identificar tu condición a tiempo.',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      title: 'Plan de Tratamiento Personalizado',
      body: 'Soluciones adaptadas a tu caso con participación de todo el equipo especializado.',
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16'
    },
    {
      title: 'Acompañamiento Continuo',
      body: 'Seguimiento postoperatorio y atención permanente durante todo tu proceso de recuperación.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0'
    }
  ];

  readonly services = [
    {
      title: 'Consulta',
      desc: 'Valoración especializada, diagnóstico oportuno y plan de atención personalizado.',
      route: '/servicios/consulta',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
    },
    {
      title: 'Cirugía Gastrointestinal',
      desc: 'Procedimientos laparoscópicos avanzados para enfermedades digestivas con mínima invasión.',
      route: '/servicios/cirugia-gastrointestinal',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Cirugía Oncológica',
      desc: 'Tratamiento integral de tumores benignos y malignos con enfoque multidisciplinario.',
      route: '/servicios/cirugia-oncologica',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Radiología Intervencionista',
      desc: 'Diagnóstico y tratamiento guiado por imagen: biopsias, embolizaciones y más.',
      route: '/servicios/radiologia-intervencionista',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    }
  ];

  ngOnInit(): void {
    // No-op: Swiper is registered via main.ts
  }
}
