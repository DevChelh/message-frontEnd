import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProfilComponent } from './detail-profil/detail-profil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { User } from './inscription/user';
import { PersonnePresentesComponent } from './personne-presentes/personne-presentes.component';
import { LoginComponent } from './users/login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:"inscription" , component: InscriptionComponent},
  { path:"liste" , component: PersonnePresentesComponent},
  { path:"test" , component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
