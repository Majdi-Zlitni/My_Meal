import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  meals : any;
  //ll id commande
  async onclick() {
    var idcommande = (<HTMLInputElement>document.getElementById("id")).value;
    console.log(idcommande)
    const rep = await fetch(`http://127.0.0.1:8000/command?idcommande=${idcommande}`); //baathna el requete bel fetch aal endpoint "/salade" bel method GET
    if (rep.ok){
      rep.json().then(data =>{//raj3etlna objet json data
        this.meals = data;//hatina e data fel variable mteena
        console.log(this.meals)
      })
    }
  }
  /*onDivClick(event : any){
    var div = <HTMLElement>(document.getElementById(event.target.getAttribute('id')));
    console.log(div);
    
  }*/
  async Modify(event:any)
  { 
    let meal = (event.target.name).toString();
    let idcommande = (<HTMLInputElement>document.getElementById("id")).value;
    let quantite= (<HTMLInputElement>document.getElementsByName(meal)[1]).value;
    let prix= (<HTMLInputElement>document.getElementsByName(meal)[0]).value;
    let price= Number(prix) * Number(quantite)
    console.log(prix,quantite,idcommande,meal, price)

    
    
    var body=`{ "id" : "${meal}", "idcommande":"${idcommande}" ,"price" : "${price}","quantite" : "${quantite}" }`;
    console.log(body);
    const rep = await fetch ("http://127.0.0.1:8000/modifycommand", {
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
    let idcommande = (<HTMLInputElement>document.getElementById("id")).value;
    let meal = (event.target.name).toString();
    console.log(meal)
    var body=`{ "id" : "${meal}","idcommand" : "${idcommande}"}`;
    const rep = await fetch ("http://127.0.0.1:8000/deletecommand", {
      method : "POST",
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        alert("Plate Deleted")
        location.reload();

        //location.reload();
      })
    }

  }
  async Deleteall(event:any)
  {
    let idcommande = (<HTMLInputElement>document.getElementById("id")).value;
   
    var body=`{ "idcommand" : "${idcommande}"}`;
    const rep = await fetch ("http://127.0.0.1:8000/deletecommand/all", {
      method : "POST",
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        alert("Command Deleted")
        location.reload();

        //location.reload();
      })
    }

  }
}

