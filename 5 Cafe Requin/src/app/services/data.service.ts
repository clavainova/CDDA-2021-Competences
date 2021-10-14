import { Injectable } from '@angular/core';

import { Etudiant } from '../modele/etudiant';
import { Promo } from '../modele/promo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  etudiants: Array<Etudiant>;
  promos: Array<Promo>;
  identifie: boolean;

  constructor(private http: HttpClient) {

    this.identifie = false; //can load?

    //promo json list
    this.promos = [];
    this.getPromos();
    //console.log(this.http);

    //student json list
    this.etudiants = [];
    this.getEtudiants();
  }

  getEtudiants() {
    //https://localhost/progression/4.8_Angular/src/assets/data/etudiants.json

    //"/var/www/html/Cafe-Requin/src/assets/data/etudiants.json"

    this.http.get<Array<Etudiant>>('assets/data/etudiants.json').subscribe(
      data => {
        console.log("data fetched from json: " + data);
        this.etudiants = data;
        this.getPromos();
      });

    erreur => console.log(erreur);
  }

  getPromos() {
    this.http.get<Array<Promo>>('assets/data/promos.json').subscribe(
      data => {
        this.promos = data;
      });
    erreur => console.log(erreur);
  }

  getEtudiant(nom: string): Etudiant {
    var student: Etudiant;
    this.etudiants.forEach(e => {
      if (e.nom == nom) {
        student = e;
      }
    });
    return student;
  }

  getEtudiantById(id: number): Etudiant {
    var etud: Etudiant = null;
    //console.log("getting student of id " + id + " from ");
    //console.log(this.etudiants);
    this.etudiants.forEach(e => {
      //console.log("testing student: " + e + " with id: " + e._id + " against " + id);
      if (e._id == id) {
        //console.log("student found: " + e);
        etud = e;
      }
    });
    return etud;
  }
}
