import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { PersonnePresentesComponent } from './personne-presentes/personne-presentes.component';

const routes: Routes = [
  { path:"inscription" , component: InscriptionComponent},
  { path:"liste" , component: PersonnePresentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
