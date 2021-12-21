import {Component, InjectionToken, OnInit} from '@angular/core';
import VanillaTilt from "vanilla-tilt";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() {
  }

  colorGroup = new FormGroup({});

  ngOnInit(): void {

    this.colorGroup = new FormGroup({
      white: new FormControl(true),
      black: new FormControl(null),
      red: new FormControl(null)
    });

    console.log(this.colorGroup.getRawValue())

    // // @ts-ignore
    // VanillaTilt.init(document.querySelector(".tilt"), { max: 5, speed: 5000});
    // // @ts-ignore
    // VanillaTilt.init(document.querySelectorAll(".tilt"));
  }


  white(){
    this.colorGroup = new FormGroup({
      white: new FormControl(true),
      black: new FormControl(null),
      red: new FormControl(null)
    });
  }
  black(){
    this.colorGroup = new FormGroup({
      white: new FormControl(null),
      black: new FormControl(true),
      red: new FormControl(null)
    });
  }
  red(){
    this.colorGroup = new FormGroup({
      white: new FormControl(null),
      black: new FormControl(null),
      red: new FormControl(true)
    });
  }


  button(){
    console.log(this.colorGroup.getRawValue())
    }
}
