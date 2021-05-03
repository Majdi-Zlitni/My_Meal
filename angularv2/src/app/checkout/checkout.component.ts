import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    async register(){
      var address=(<HTMLInputElement>document.getElementById("address")).value
      var body=`{"address":"${address}"}`
      const rep= await fetch("http://127.0.0.1:8000/register" ,{
        method:"POST",
        body :body
      })
      console.log(body)
      if(rep.ok){
        rep.json().then((data)=>{
          console.log(data)
        }
        )
      }
    }
}
