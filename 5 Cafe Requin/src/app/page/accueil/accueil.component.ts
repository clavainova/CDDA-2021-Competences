import { Component, OnInit } from '@angular/core';
import { LoadTextService } from 'src/app/services/load-text.service';
import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from 'src/app/modele/text';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public loadText: LoadTextService) {
  }

  ngOnInit(): void {
    //console.log("pagetext loaded in .ts " + JSON.stringify(this.loadText.pagetext));
  }
  }
