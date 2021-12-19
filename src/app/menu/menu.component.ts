import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }
  toggle : any
  menu : any
  ngOnInit(): void {
    this.toggle = document.querySelector('.toggle')
    this.menu = document.querySelector('.menu')
  }
  activeToggle(){
    this.toggle.classList.toggle('active')
    this.menu.classList.toggle('open')

  }
}
