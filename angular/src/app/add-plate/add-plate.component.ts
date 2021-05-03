import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-plate',
  templateUrl: './add-plate.component.html',
  styleUrls: ['./add-plate.component.css']
})
export class AddPlateComponent implements OnInit {

  constructor() { }
  url!:string;

  ngOnInit(): void {
  }
  
  async Add()
  {
    
    var nom = (<HTMLInputElement>document.getElementById("nom")).value;
    var prix = (<HTMLInputElement>document.getElementById("prix")).value;
    var categorie = (<HTMLInputElement>document.getElementById("categorie")).value;
    var resto = (<HTMLInputElement>document.getElementById("resto")).value;
    var description = (<HTMLInputElement>document.getElementById("description")).value;
    var body=`{"nom":"${nom}" ,"prix" : " ${prix}" ,"categorie":" ${categorie}" ,"resto":" ${resto}" ,"description":" ${description}", "img":"${this.url}" }`;
    console.log(body);
    const rep = await fetch ("http://127.0.0.1:8000/add", {
      method : "POST",
      body : body
    })
    if (rep.ok){//traitement mtaa el reponse
      rep.json().then((data)=>{ // data bech ykouna fiha objet json fih el reponse
        console.log(data)
        
      })
    }
    alert("Plate Added")

  }
  onSelectFile(event:any){
    console.log("here");//hedhi juste bech naarfou eli ahna fi west el fonction
    if (event.target.files && event.target.files[0]){//nthabtou ken aana al akal file wala lee
      var reader = new FileReader()// sna3na instance  men FileReader()  , FileReader howa class tajem takra bihom data mtaa ay file w thawlou l format URI
      reader.readAsDataURL(event.target.files[0])// hawlna el image mteena l format URI
      reader.onload = async (data) =>{//wakteli el reader ykamel bech yraj3lna el resultat fi data
        this.url = data.target?.result as string;//hnneee juste hawlna el data l string w hatineha fi variable gloable url
      }
    }
  }
}

