import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto-home.component.html',
  styleUrls: ['./contacto-home.component.scss']
})
export class ContactoHomeComponent {
  form: FormGroup;
  private enviadoSignal = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
    if (this.form.valid) {
      this.enviadoSignal.set(true);
      this.form.reset();
    }
  }

  enviado() {
    return this.enviadoSignal();
  }
}

