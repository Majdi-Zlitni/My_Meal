import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourfood',
  templateUrl: './ourfood.component.html',
  styleUrls: ['./ourfood.component.css']
})
export class OurfoodComponent implements OnInit {

  constructor() { }
  fastfood:any;
  trafood: any;
  hfood:any;

  async ngOnInit() {
     const rep= await fetch("http://127.0.0.1:8000/fastfood")
     if(rep.ok){
       rep.json().then(data =>{
         this.fastfood=data
         console.log(this.fastfood)
       })
      
    }
    const rep2= await fetch("http://127.0.0.1:8000/trafood")
    if(rep2.ok){
      rep2.json().then(data =>{
        this.trafood=data
        console.log(this.trafood)
      })
     
   }

   const rep3= await fetch("http://127.0.0.1:8000/hfood")
   if(rep3.ok){
     rep3.json().then(data =>{
       this.hfood=data
       console.log(this.hfood)
     })
    
  }
  }
}

