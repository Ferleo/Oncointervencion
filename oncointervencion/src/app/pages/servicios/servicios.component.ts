import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface ServiceTab {
  label: string;
  route: string;
  shortLabel: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  styleUrls: ['./servicios.component.scss'],
  template: `
    <!-- Page header -->
    <header class="page-hero" aria-label="Servicios médicos">
      <div class="page-hero-content container-xl">
        <span class="section-label" style="background: rgba(255,255,255,0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.2);">
          Especialidades
        </span>
        <h1 class="page-hero-title">Nuestros Servicios</h1>
        <p class="page-hero-subtitle">
          Tres especialidades médicas integradas para ofrecerte un manejo completo,
          preciso y humano de tu salud.
        </p>
      </div>
    </header>

    <!-- Service sub-navigation tabs -->
    <nav class="service-nav" aria-label="Navegación de servicios" role="tablist">
      <div class="service-nav-inner container-xl">
        @for (tab of tabs; track tab.route) {
          <a [routerLink]="tab.route"
             routerLinkActive="tab-active"
             class="service-tab"
             role="tab"
             [attr.aria-label]="tab.label">
            <span class="tab-long">{{ tab.label }}</span>
            <span class="tab-short">{{ tab.shortLabel }}</span>
          </a>
        }
      </div>
    </nav>

    <!-- Child route outlet -->
    <div class="service-outlet">
      <router-outlet></router-outlet>
    </div>
  `
})
export class ServiciosComponent {
  readonly tabs: ServiceTab[] = [
    { label: 'Consulta',                    shortLabel: 'Consulta',   route: 'consulta' },
    { label: 'Cirugía Gastrointestinal',    shortLabel: 'C. Gastro',  route: 'cirugia-gastrointestinal' },
    { label: 'Cirugía Oncológica',          shortLabel: 'C. Oncol.',  route: 'cirugia-oncologica' },
    { label: 'Radiología Intervencionista', shortLabel: 'Radiología', route: 'radiologia-intervencionista' }
  ];
}
