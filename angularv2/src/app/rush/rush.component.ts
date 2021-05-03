import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rush',
  templateUrl: './rush.component.html',
  styleUrls: ['./rush.component.css']
})
export class RushComponent implements OnInit {

  constructor() { }
  Inarush:any;

  async ngOnInit() {
     const rep= await fetch("http://127.0.0.1:8000/Inarush")
     if(rep.ok){
       rep.json().then(data =>{
         this.Inarush=data
         console.log(this.Inarush)
       })
      
    }
  }
}
