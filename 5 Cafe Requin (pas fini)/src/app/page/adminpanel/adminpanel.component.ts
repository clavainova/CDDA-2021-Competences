import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/modele/etudiant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  
  recherche: string;

  constructor(public dataServe: DataService) {
  }

  ngOnInit(): void {
    console.log(this.dataServe.etudiants);
  }


}
