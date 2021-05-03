import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor() { }
  meals : any;
  async ngOnInit() {
    const rep = await fetch("http://127.0.0.1:8000/meals"); //baathna el requete bel fetch aal endpoint "/salade" bel method GET
    if (rep.ok){
      rep.json().then(data =>{//raj3etlna objet json data
        this.meals = data;//hatina e data fel variable mteena
        console.log(this.meals)
      })
    }
  }
  onDivClick(event : any){
    var div = <HTMLElement>(document.getElementById(event.target.getAttribute('id')));
    console.log(div);
    
  }
  async Modify(event:any)
  { 
    let meal = (event.target.name).toString();
    console.log(meal)
    let nom= (<HTMLInputElement>document.getElementsByName(meal)[0]).value;
    let description= (<HTMLInputElement>document.getElementsByName(meal)[1]).value;
    let prix= (<HTMLInputElement>document.getElementsByName(meal)[2]).value;

    console.log(nom,prix,description)

    
    var body=`{ "id" : "${meal}", "nom":"${nom}" ,"prix" : "${prix}" ,"description":"${description}"}`;
    console.log(body);
    const rep = await fetch ("http://127.0.0.1:8000/modify", {
      method : "POST",
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        alert("Plate Modified")
        location.reload();

      })
    }
    

  }
  
  async Delete(event:any)
  {
    let meal = (event.target.name).toString();
    console.log(meal)
    var body=`{ "id" : "${meal}"}`;
    const rep = await fetch ("http://127.0.0.1:8000/delete", {
      method : "POST",
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        alert("Plate Deleted")
        location.reload();
      })
    }

  }
}