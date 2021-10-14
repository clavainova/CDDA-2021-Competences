import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Etudiant } from 'src/app/modele/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  //etudiant: Etudiant;           //this.etudiant = this.dataServe.getEtudiantById(r._id);
  id: number;
  isAuthentified: boolean = true;

  constructor(private ar: ActivatedRoute, public dataServe: DataService) {
    this.ar.params.subscribe(
      r => {
        //console.log("fetching student of id (r._id = " + r._id + ") which is: " + this.dataServe.getEtudiantById(r._id));
        //this.setUpEtudiant(r._id);
        this.id = r._id;
      }
    );
  }

  ngOnInit(): void {
  }

  //not yet functional -- need to pass in student successfully
  //setUpEtudiant(i: number) {
    //console.log("student event triggered");
    //this.etudiant = this.dataServe.getEtudiantById(i);
  //}
}