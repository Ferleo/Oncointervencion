import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Inicio | OncoIntervención Especializada'
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios.component').then(m => m.ServiciosComponent),
    title: 'Servicios | OncoIntervención',
    children: [
      {
        path: '',
        redirectTo: 'consulta',
        pathMatch: 'full'
      },
      {
        path: 'consulta',
        loadComponent: () => import('./pages/servicios/consulta/consulta.component').then(m => m.ConsultaComponent),
        title: 'Consulta | OncoIntervención'
      },
      {
        path: 'cirugia-gastrointestinal',
        loadComponent: () => import('./pages/servicios/cirugia-gastrointestinal/cirugia-gi.component').then(m => m.CirugiaGIComponent),
        title: 'Cirugía Gastrointestinal | OncoIntervención'
      },
      {
        path: 'cirugia-oncologica',
        loadComponent: () => import('./pages/servicios/cirugia-oncologica/cirugia-onco.component').then(m => m.CirugiaOncoComponent),
        title: 'Cirugía Oncológica | OncoIntervención'
      },
      {
        path: 'radiologia-intervencionista',
        loadComponent: () => import('./pages/servicios/radiologia-intervencionista/radiologia.component').then(m => m.RadiologiaComponent),
        title: 'Radiología Intervencionista | OncoIntervención'
      }
    ]
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('./pages/quienes-somos/quienes-somos.component').then(m => m.QuienesSomosComponent),
    title: '¿Quiénes somos? | OncoIntervención'
  },
  {
    path: 'preguntas',
    loadComponent: () => import('./pages/preguntas/preguntas.component').then(m => m.PreguntasComponent),
    title: 'Preguntas | OncoIntervención'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.component').then(m => m.ContactoComponent),
    title: 'Contáctanos | OncoIntervención'
  },
  {
    path: 'aviso-legal',
    loadComponent: () => import('./pages/aviso-legal/aviso-legal.component').then(m => m.AvisoLegalComponent),
    title: 'Aviso Legal | OncoIntervención'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

