import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healthy',
  templateUrl: './healthy.component.html',
  styleUrls: ['./healthy.component.css']
})
export class HealthyComponent implements OnInit {

  constructor() { }
  Healthy:any;

  async ngOnInit() {
     const rep= await fetch("http://127.0.0.1:8000/Healthy")
     if(rep.ok){
       rep.json().then(data =>{
         this.Healthy=data
         console.log(this.Healthy)
       })
      
    }
  }
}



