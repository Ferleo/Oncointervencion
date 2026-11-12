import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0px', opacity: 0, overflow: 'hidden' }),
        animate('220ms cubic-bezier(0.16,1,0.3,1)', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('160ms ease-in', style({ height: '0px', opacity: 0 }))
      ])
    ]),
    trigger('fadeDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('180ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('120ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class NavbarComponent {
  readonly isScrolled    = signal(false);
  readonly mobileOpen    = signal(false);
  readonly serviciosOpen = signal(false);

  readonly serviciosLinks = [
    { label: 'Consulta',                    route: '/servicios/consulta' },
    { label: 'Cirugía Gastrointestinal',    route: '/servicios/cirugia-gastrointestinal' },
    { label: 'Cirugía Oncológica',          route: '/servicios/cirugia-oncologica' },
    { label: 'Radiología Intervencionista', route: '/servicios/radiologia-intervencionista' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobile(): void {
    this.mobileOpen.update(v => !v);
    if (!this.mobileOpen()) this.serviciosOpen.set(false);
  }

  toggleServicios(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.serviciosOpen.update(v => !v);
  }

  closeAll(): void {
    this.mobileOpen.set(false);
    this.serviciosOpen.set(false);
  }

  @HostListener('document:click')
  onDocClick(): void {
    if (this.serviciosOpen()) this.serviciosOpen.set(false);
  }
}
