import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnePresentesComponent } from './personne-presentes/personne-presentes.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DetailProfilComponent } from './detail-profil/detail-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnePresentesComponent,
    InscriptionComponent,
    NavbarComponent,
    DetailProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    InscriptionComponent
  ]
})
export class AppModule { }
