import {Component, InjectionToken, OnInit} from '@angular/core';
import VanillaTilt from "vanilla-tilt";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  tshitColor : string = 'white'

  constructor() {
  }

  myGroup = new FormGroup({});

  ngOnInit(): void {

    this.myGroup = new FormGroup({
      white: new FormControl(true),
      black: new FormControl(null),
      red: new FormControl(null)

    });


    console.log(this.myGroup.getRawValue())

    // // @ts-ignore
    // VanillaTilt.init(document.querySelector(".tilt"), { max: 5, speed: 5000});
    // // @ts-ignore
    // VanillaTilt.init(document.querySelectorAll(".tilt"));
  }


  changeColor(color:string){
    this.tshitColor = color
  }
  button(){
    console.log(this.myGroup.getRawValue())
    }
}
