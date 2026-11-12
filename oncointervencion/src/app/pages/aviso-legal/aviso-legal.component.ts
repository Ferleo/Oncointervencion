import { Component } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  template: `
    <header class="page-hero" aria-label="Aviso legal">
      <div class="container-xl" style="padding-top:7rem; padding-bottom:3rem; position:relative; z-index:1;">
        <h1 style="font-size:clamp(1.75rem,3.5vw,2.5rem); font-weight:900; color:#fff; margin:0;">Aviso Legal</h1>
      </div>
    </header>
    <main class="container-xl" style="padding-top:3rem; padding-bottom:5rem;" aria-label="Contenido del aviso legal">
      <div style="max-width:800px; color:#475569; line-height:1.8; font-size:0.9375rem;">
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">1. Titular del Sitio Web</h2>
        <p>El presente sitio web es propiedad y operado por <strong>OncoIntervención Especializada</strong>. Para consultas, puede contactarnos a través de atencion.oncointervencion&#64;gmail.com.</p>
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">2. Finalidad del Sitio</h2>
        <p>Este sitio tiene carácter informativo. La información publicada no sustituye en ningún caso a la consulta, diagnóstico o tratamiento médico profesional. Ante cualquier duda o síntoma, consulte a su médico o acuda a urgencias.</p>
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">3. Propiedad Intelectual</h2>
        <p>Todos los contenidos de este sitio — textos, imágenes, logotipos y diseño — son propiedad de OncoIntervención Especializada o cuentan con la licencia correspondiente. Queda prohibida su reproducción sin autorización expresa.</p>
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">4. Privacidad y Datos Personales</h2>
        <p>El tratamiento de datos personales se rige conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento. Consulte nuestro Aviso de Privacidad para más información.</p>
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">5. Regulación Sanitaria</h2>
        <p>Los servicios médicos ofrecidos se prestan conforme a la legislación sanitaria vigente en los Estados Unidos Mexicanos. Nuestros profesionales cuentan con cédula profesional y especialidad reconocida por la Secretaría de Educación Pública (SEP) y están sujetos a la regulación de la COFEPRIS.</p>
        <h2 style="color:#0f172a; font-size:1.125rem; font-weight:700; margin:2rem 0 0.75rem;">6. Modificaciones</h2>
        <p>OncoIntervención Especializada se reserva el derecho de actualizar este Aviso Legal en cualquier momento. Se recomienda revisarlo periódicamente.</p>
        <p style="margin-top:2.5rem; color:#94a3b8; font-size:0.8125rem;">Última actualización: 2025</p>
      </div>
    </main>
  `
})
export class AvisoLegalComponent {}
