import { Component } from '@angular/core';
import { Utilisateur } from './utilisateur'
@Component({
  selector: 'mess-personne-presentes',
  templateUrl: './personne-presentes.component.html',
  styleUrls: ['./personne-presentes.component.scss']
})
export class PersonnePresentesComponent {
 
utilisateur= Utilisateur;
}
