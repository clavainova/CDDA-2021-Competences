import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  utilisateur: any = {name:'', mdp:''};
  connexion:any;

  constructor(private dataServe:DataService) { }

  ngOnInit(): void {
    this.connexion = {
      id: "",
      mdp: ""
    }
  }

  montre(){
    console.log(this.utilisateur);
  }

  seConnecter(){
    this.dataServe.identifie = !this.dataServe.identifie;
    this.utilisateur = this.dataServe.getEtudiant(this.utilisateur.name);
  }

}
