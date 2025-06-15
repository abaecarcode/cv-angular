
import { Routes } from '@angular/router';

// Importamos los componentes standalone
import { Home } from './pages/home/home';
import { Formacion } from './pages/formacion/formacion';
import { Experiencia } from './pages/experiencia/experiencia';
import { Contacto } from './pages/contacto/contacto';
// Definimos las rutas de la aplicación
export const routes: Routes = [
  { path: '', component: Home},
  { path: 'experiencia', component: Experiencia },
  { path: 'formacion', component: Formacion },
  { path: 'contacto', component: Contacto },
];
