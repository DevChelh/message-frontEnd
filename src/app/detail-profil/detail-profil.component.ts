import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { observable} from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'mess-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.scss']
})
export class DetailProfilComponent implements OnInit {

userData= 'http://86.48.1.128:3000/facture/image/5';
  

    constructor (
      private http: HttpClient, 
      private sanitizer: DomSanitizer
    ) {}
downloadPdf() {
        this.http.get(this.userData, { responseType: 'blob' }).subscribe(pdf => {
          const fileURL = URL.createObjectURL(pdf);
          window.open(fileURL);
        });}
    ngOnInit() {

      

  /*this.http.get('http://86.48.1.128:3000/facture/image/2', { responseType: 'blob' }).subscribe(
  (data: any)=> {console.log(data), this.userData = URL.createObjectURL(data)}
  ,(error: any) => {console.log(error)}
);*/
      
    }} 