import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'mess-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  public user : User = new User ();


  ngOnInit(): void {

  }
  public saveData(){
    console.log('ça marche');
  }
}
