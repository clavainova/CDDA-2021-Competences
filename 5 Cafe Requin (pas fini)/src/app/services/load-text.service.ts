import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Text } from '../modele/text';

@Injectable({
  providedIn: 'root'
})
export class LoadTextService {
  public pagetext: Array<Text>;

  constructor(private http: HttpClient) {
    this.pagetext = [];
    this.getPageText();
  }

  getPageText() {
    this.http.get<Array<Text>>('assets/data/text.json').subscribe(
      data => {
        //console.log("json text data: " + JSON.stringify(data));
        this.pagetext = data;
        //console.log("storing this array in load-text: " + this.pagetext + " its contents are: " + JSON.stringify(this.pagetext));
        //console.log("but is it an array? [0] = " + this.pagetext[0]);
      });
    erreur => console.log(erreur);
  }

  getContentByTitle(title: string): String {
    //console.log("trying to find content in " + JSON.stringify(this.pagetext));
    console.log("checking if this is an array yet: " + console.log(this.pagetext));
    var content: string = "Loading";
    this.pagetext.forEach((e) => {
      if (e.title == title) {
        console.log("examining " + e);
        console.log("content found: " + title);
        console.log("returning the relevant content: " + e.data);
        content = e.data;
      }
    });
    
    return content;
  }
}