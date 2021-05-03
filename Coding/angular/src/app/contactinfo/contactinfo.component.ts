import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  async reclam(){
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var reclam = (<HTMLInputElement>document.getElementById("reclam")).value
    var body = {"email":"${email}" , "reclam":"${reclam}"} 

const rep = await fetch("http://127.0.0.1:8000/reclam" , {
  method:"POST" , 
  body: "body"
})
if (rep.ok){
  rep.json().then((data)=>{ 
  })
}

}


}