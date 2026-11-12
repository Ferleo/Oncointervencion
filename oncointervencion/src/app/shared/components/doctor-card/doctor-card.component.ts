import { Component, input } from '@angular/core';

export interface Doctor {
  name: string;
  specialty: string;
  description: string;
  formation: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  styleUrls: ['./doctor-card.component.scss'],
  template: `
    <article class="doctor-card" [attr.aria-label]="doctor().name">

      <!-- Photo -->
      <div class="doctor-photo">
        @if (doctor().imageUrl) {
          <img
            [src]="doctor().imageUrl"
            [alt]="'Foto de ' + doctor().name"
            class="doctor-img"
            loading="lazy"
            width="400"
            height="256">
        } @else {
          <div class="doctor-photo-placeholder" aria-hidden="true">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="white" opacity="0.4">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        }
        <!-- Specialty badge overlaid on photo -->
        <div class="doctor-badge" aria-hidden="true">{{ doctor().specialty }}</div>
      </div>

      <!-- Content -->
      <div class="doctor-content">
        <h3 class="doctor-name">{{ doctor().name }}</h3>
        <p class="doctor-desc">{{ doctor().description }}</p>
        <div class="doctor-formation">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          </svg>
          <span>{{ doctor().formation }}</span>
        </div>
      </div>
    </article>
  `
})
export class DoctorCardComponent {
  readonly doctor = input.required<Doctor>();
}
