import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the home page....";
  myString = "I like chicken";
  myBoolean = true;
  constructor() { }

  ngOnInit() {
  }

}
