import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './sistema/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrarPersonaComponent } from './auth/registrar-persona/registrar-persona.component';
import { AdministrarpppComponent } from './sistema/administrarppp/administrarppp.component';
import { AlumnoPracticanteComponent } from './sistema/alumno-practicante/alumno-practicante.component';

const routes: Routes = [
  { 
    path: 'login', component:LoginComponent
  },
  { 
    path: 'registrar_practicante', component:RegistrarPersonaComponent
  },
  { 
    path: 'administrar_ppp', component:AdministrarpppComponent
  },
  { 
    path: 'alumno_practicante', component:AlumnoPracticanteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
