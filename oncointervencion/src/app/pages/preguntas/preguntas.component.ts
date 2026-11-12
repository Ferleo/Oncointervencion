import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface FAQ {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [RouterLink, MatExpansionModule, ScrollRevealDirective],
  styleUrls: ['./preguntas.component.scss'],
  template: `
    <!-- Page hero -->
    <header class="page-hero" aria-label="Preguntas frecuentes">
      <div class="pq-hero-content container-xl">
        <span class="section-label" style="background: rgba(255,255,255,0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.2);">
          Centro de Ayuda
        </span>
        <h1 class="pq-hero-title">Preguntas Frecuentes</h1>
        <p class="pq-hero-subtitle">
          Resolvemos tus dudas sobre nuestros servicios, procedimientos y cómo agendar tu consulta.
        </p>
      </div>
    </header>

    <main class="pq-content container-xl">

      <!-- FAQ section -->
      <section scrollReveal class="pq-faq-section" aria-label="Preguntas y respuestas">
        <div class="pq-faq-header">
          <span class="section-label">Respuestas</span>
          <h2 class="section-title">Lo Que Necesitas Saber</h2>
          <p class="section-subtitle" style="margin-top: 0.75rem;">
            Si tienes alguna duda que no esté aquí, no dudes en contactarnos.
          </p>
        </div>

        <mat-accordion class="pq-accordion" multi="false" aria-label="Preguntas frecuentes">
          @for (faq of faqs; track faq.question; let i = $index) {
            <mat-expansion-panel
              [attr.scrollReveal]="null"
              class="pq-panel"
              hideToggle="false"
              [attr.aria-label]="faq.question">
              <mat-expansion-panel-header>
                <mat-panel-title class="pq-question">{{ faq.question }}</mat-panel-title>
              </mat-expansion-panel-header>
              <p class="pq-answer">{{ faq.answer }}</p>
            </mat-expansion-panel>
          }
        </mat-accordion>
      </section>

      <!-- CTA card -->
      <section scrollReveal class="pq-cta-section" aria-label="¿No encontraste tu respuesta?">
        <div class="pq-cta-card">
          <div class="pq-cta-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h3 class="pq-cta-title">¿Tienes más preguntas?</h3>
          <p class="pq-cta-text">
            Nuestro equipo está listo para orientarte personalmente. Comunícate con nosotros por
            teléfono o correo electrónico, o agenda directamente tu consulta en línea.
          </p>
          <div class="pq-cta-actions">
            <a routerLink="/contacto" class="btn-primary">Contáctanos</a>
            <a href="tel:+525519722944" class="btn-outline-phone" aria-label="Llamar al consultorio">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              55 1972 2944
            </a>
          </div>
        </div>
      </section>

    </main>
  `
})
export class PreguntasComponent {
  readonly faqs: FAQ[] = [
    {
      question: '¿Qué tipos de enfermedades tratan en OncoIntervención Especializada?',
      answer: 'Atendemos enfermedades oncológicas (tumores benignos y malignos), patologías del aparato gastrointestinal (vesícula, hígado, colon, apéndice, hernias) y condiciones que requieren procedimientos mínimamente invasivos guiados por imagen, como biopsias, drenajes y ablaciones.'
    },
    {
      question: '¿Cómo puedo agendar una primera consulta?',
      answer: 'Puedes contactarnos por teléfono al 55 1972 2944 o 55 8557 7212, o escribirnos al correo atencion.oncointervencion@gmail.com. Nuestro equipo te orientará sobre la disponibilidad y el especialista más adecuado para tu caso.'
    },
    {
      question: '¿En qué consiste una consulta de oncología quirúrgica?',
      answer: 'En la consulta oncológica evaluamos el estado clínico del paciente, revisamos estudios de imagen y laboratorio previos, y diseñamos un plan de tratamiento personalizado. Se explican las opciones terapéuticas disponibles — cirugía, radiología intervencionista u otras — con la mayor claridad posible.'
    },
    {
      question: '¿La radiología intervencionista es un procedimiento seguro?',
      answer: 'Sí. Los procedimientos de radiología intervencionista se realizan guiados por imagen (ultrasonido, tomografía o fluoroscopía), lo que permite actuar con alta precisión usando accesos mínimos en la piel. Esto reduce el riesgo de complicaciones y acorta los tiempos de recuperación en comparación con la cirugía abierta.'
    },
    {
      question: '¿Qué es una ablación y para qué se utiliza?',
      answer: 'La ablación es un procedimiento mínimamente invasivo que destruye tejido tumoral mediante calor (microondas o radiofrecuencia) o frío (crioablación), aplicado directamente sobre el tumor a través de una aguja guiada por imagen. Se usa principalmente en tumores hepáticos, renales y pulmonares cuando la cirugía no es la mejor opción.'
    },
    {
      question: '¿Cuánto tiempo dura la recuperación tras una cirugía laparoscópica?',
      answer: 'En general, la cirugía laparoscópica permite un alta hospitalaria al día siguiente o en dos días, con retorno a actividades ligeras en 1-2 semanas. Los tiempos específicos dependen del tipo de procedimiento y del estado general del paciente; el especialista te dará indicaciones personalizadas.'
    },
    {
      question: '¿Qué debo llevar a mi primera consulta?',
      answer: 'Te recomendamos llevar: identificación oficial, estudios de imagen recientes (tomografías, resonancias, ultrasonidos en CD o impresiones), resultados de laboratorio vigentes, biopsia o informe patológico si existe, y cualquier tratamiento previo documentado. Esto permite que el especialista tenga una visión completa de tu caso desde el primer momento.'
    },
    {
      question: '¿Atienden pacientes con seguro médico privado o IMSS/ISSSTE?',
      answer: 'Atendemos principalmente de manera privada. Si cuentas con seguro médico de gastos mayores, te recomendamos verificar con tu aseguradora si los procedimientos están cubiertos. Puedes solicitarnos la documentación necesaria para tramitar el reembolso o autorización anticipada.'
    },
    {
      question: '¿Cuál es la diferencia entre cirugía oncológica y cirugía general?',
      answer: 'La cirugía general cubre una amplia gama de procedimientos del abdomen y estructuras externas. La cirugía oncológica es una subespecialidad enfocada en la extirpación de tumores malignos con márgenes oncológicos adecuados, vaciamientos ganglionares y cirugías de debulking, siempre en el contexto de un plan de tratamiento multidisciplinario.'
    },
    {
      question: '¿Tienen convenio con hospitales específicos?',
      answer: 'Trabajamos en colaboración con distintas instituciones hospitalarias de la Ciudad de México. Al momento de tu consulta, el especialista te informará en qué hospitales se realizan los procedimientos quirúrgicos o intervencionistas y cuál es el más conveniente según tu ubicación y necesidades.'
    }
  ];
}
