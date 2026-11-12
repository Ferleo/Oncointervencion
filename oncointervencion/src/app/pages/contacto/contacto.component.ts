import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  styleUrls: ['./contacto.component.scss'],
  template: `
    <!-- Page hero -->
    <header class="page-hero" aria-label="Contacto">
      <div class="ct-hero-content container-xl">
        <span class="section-label" style="background: rgba(255,255,255,0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.2);">
          Atención al Paciente
        </span>
        <h1 class="ct-hero-title">Estamos Para Ti</h1>
        <p class="ct-hero-subtitle">
          Comunícate con nuestro equipo para resolver dudas, agendar tu consulta o recibir información
          sobre nuestros servicios.
        </p>
      </div>
    </header>

    <main class="ct-content container-xl">

      <!-- Contact cards -->
      <section scrollReveal class="ct-cards" aria-label="Información de contacto">
        @for (card of contactCards; track card.label) {
          <a [href]="card.href" class="ct-card" [attr.aria-label]="card.ariaLabel" [attr.target]="card.external ? '_blank' : null" [attr.rel]="card.external ? 'noopener noreferrer' : null">
            <div class="ct-card-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="card.icon"/>
              </svg>
            </div>
            <div class="ct-card-body">
              <span class="ct-card-label">{{ card.label }}</span>
              <span class="ct-card-value">{{ card.value }}</span>
              @if (card.value2) {
                <span class="ct-card-value">{{ card.value2 }}</span>
              }
              @if (card.note) {
                <span class="ct-card-note">{{ card.note }}</span>
              }
            </div>
            <svg class="ct-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        }
      </section>

      <!-- Form + map -->
      <section class="ct-form-section" aria-label="Enviar mensaje">
        <div scrollReveal class="ct-form-wrapper">
          <div class="ct-form-header">
            <span class="section-label">Escríbenos</span>
            <h2 class="section-title">Envíanos un Mensaje</h2>
            <p class="ct-form-subtitle">Te responderemos en el menor tiempo posible.</p>
          </div>

          @if (sent()) {
            <div class="ct-success" role="alert" aria-live="polite">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>¡Mensaje enviado! Nos pondremos en contacto contigo pronto.</span>
            </div>
          } @else {
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="ct-form" novalidate aria-label="Formulario de contacto">
              <div class="ct-field-row">
                <div class="ct-field">
                  <label for="nombre" class="ct-label">Nombre completo <span aria-hidden="true">*</span></label>
                  <input id="nombre" type="text" formControlName="nombre" class="ct-input"
                    placeholder="Tu nombre" autocomplete="name"
                    [class.ct-input-error]="f['nombre'].invalid && f['nombre'].touched"
                    aria-required="true" [attr.aria-invalid]="f['nombre'].invalid && f['nombre'].touched">
                  @if (f['nombre'].invalid && f['nombre'].touched) {
                    <span class="ct-error-msg" role="alert">Por favor ingresa tu nombre.</span>
                  }
                </div>
                <div class="ct-field">
                  <label for="telefono" class="ct-label">Teléfono</label>
                  <input id="telefono" type="tel" formControlName="telefono" class="ct-input"
                    placeholder="55 0000 0000" autocomplete="tel">
                </div>
              </div>

              <div class="ct-field">
                <label for="email" class="ct-label">Correo electrónico <span aria-hidden="true">*</span></label>
                <input id="email" type="email" formControlName="email" class="ct-input"
                  placeholder="tu@correo.com" autocomplete="email"
                  [class.ct-input-error]="f['email'].invalid && f['email'].touched"
                  aria-required="true" [attr.aria-invalid]="f['email'].invalid && f['email'].touched">
                @if (f['email'].invalid && f['email'].touched) {
                  <span class="ct-error-msg" role="alert">Ingresa un correo electrónico válido.</span>
                }
              </div>

              <div class="ct-field">
                <label for="asunto" class="ct-label">Asunto</label>
                <select id="asunto" formControlName="asunto" class="ct-input ct-select">
                  <option value="" disabled selected>Selecciona el motivo de contacto</option>
                  <option value="consulta">Agendar consulta</option>
                  <option value="informacion">Solicitar información</option>
                  <option value="emergencia">Urgencia / emergencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div class="ct-field">
                <label for="mensaje" class="ct-label">Mensaje <span aria-hidden="true">*</span></label>
                <textarea id="mensaje" formControlName="mensaje" class="ct-input ct-textarea"
                  placeholder="Describe brevemente tu situación o consulta..."
                  rows="5" aria-required="true"
                  [class.ct-input-error]="f['mensaje'].invalid && f['mensaje'].touched"
                  [attr.aria-invalid]="f['mensaje'].invalid && f['mensaje'].touched"></textarea>
                @if (f['mensaje'].invalid && f['mensaje'].touched) {
                  <span class="ct-error-msg" role="alert">Por favor escribe tu mensaje.</span>
                }
              </div>

              <button type="submit" class="btn-primary ct-submit" [disabled]="form.invalid">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Enviar Mensaje
              </button>
            </form>
          }
        </div>

        <!-- Info sidebar -->
        <div scrollReveal [revealDelay]="150" class="ct-info-sidebar">
          <div class="ct-info-card">
            <h3 class="ct-info-title">Horario de Atención</h3>
            <ul class="ct-hours-list" role="list">
              <li class="ct-hours-item" role="listitem">
                <span class="ct-hours-day">Lunes – Viernes</span>
                <span class="ct-hours-time">8:00 am – 8:00 pm</span>
              </li>
              <li class="ct-hours-item" role="listitem">
                <span class="ct-hours-day">Sábados</span>
                <span class="ct-hours-time">8:00 am – 2:00 pm</span>
              </li>
              <li class="ct-hours-item" role="listitem">
                <span class="ct-hours-day">Domingos</span>
                <span class="ct-hours-time">Con cita previa</span>
              </li>
            </ul>
          </div>

          <div class="ct-info-card">
            <h3 class="ct-info-title">Teléfonos de Contacto</h3>
            <div class="ct-phones" role="list">
              <a href="tel:+525519722944" class="ct-phone-link" role="listitem" aria-label="Llamar al 55 1972 2944">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                55 1972 2944
              </a>
              <a href="tel:+525585577212" class="ct-phone-link" role="listitem" aria-label="Llamar al 55 8557 7212">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                55 8557 7212
              </a>
            </div>
          </div>

          <div class="ct-info-card ct-info-card-note">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p>Para urgencias médicas, comunícate directamente por teléfono.</p>
          </div>
        </div>
      </section>

    </main>
  `
})
export class ContactoComponent {
  private fb = inject(FormBuilder);

  readonly sent = signal(false);

  readonly form = this.fb.nonNullable.group({
    nombre:   ['', [Validators.required, Validators.minLength(2)]],
    telefono: [''],
    email:    ['', [Validators.required, Validators.email]],
    asunto:   [''],
    mensaje:  ['', [Validators.required, Validators.minLength(10)]]
  });

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Placeholder — no real submission; shows success state
    this.sent.set(true);
  }

  readonly contactCards = [
    {
      label: 'Llámanos',
      value: '55 1972 2944',
      value2: '55 8557 7212',
      note: null,
      href: 'tel:+525519722944',
      external: false,
      ariaLabel: 'Llamar al consultorio',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      label: 'Envíanos un correo',
      value: 'atencion.oncointervencion@gmail.com',
      value2: null,
      note: 'Respondemos en menos de 24 horas',
      href: 'mailto:atencion.oncointervencion@gmail.com',
      external: false,
      ariaLabel: 'Enviar correo electrónico',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      label: 'Horario de atención',
      value: '8:00 am – 8:00 pm',
      value2: null,
      note: 'Lunes a Viernes',
      href: null,
      external: false,
      ariaLabel: 'Horario de atención',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];
}

