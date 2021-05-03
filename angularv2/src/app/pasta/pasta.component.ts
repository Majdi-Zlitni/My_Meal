import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {
 
  constructor() { }
  Pasta:any;

  async ngOnInit() {
     const rep= await fetch("http://127.0.0.1:8000/pasta")
     if(rep.ok){
       rep.json().then(data =>{
         this.Pasta=data
         console.log(this.Pasta)
       })
      
    }
  }
}
