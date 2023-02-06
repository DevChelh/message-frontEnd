import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonnePresentesComponent } from './personne-presentes/personne-presentes.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DetailProfilComponent } from './detail-profil/detail-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonnePresentesComponent,
    InscriptionComponent,
    NavbarComponent,
    DetailProfilComponent,
    UsersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    CommonModule,
    PdfViewerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    InscriptionComponent
  ]
})
export class AppModule { }
