import { Directive, ElementRef, OnInit, OnDestroy, PLATFORM_ID, inject, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Directive: [scrollReveal]
 * Adds a fade-in-up reveal animation when the element enters the viewport.
 * Uses IntersectionObserver (SSR-safe — no-ops on the server).
 *
 * Usage:
 *   <div scrollReveal>...</div>
 *   <div scrollReveal [revealDelay]="200">...</div>
 */
@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  readonly revealDelay = input<number>(0);

  private readonly el      = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const native = this.el.nativeElement as HTMLElement;

    // Apply delay via inline style so each item can have its own timing
    const delay = this.revealDelay();
    if (delay) {
      native.style.transitionDelay = `${delay}ms`;
    }

    native.classList.add('scroll-reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
