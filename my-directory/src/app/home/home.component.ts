import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the home page....";
  myString = "I like chicken";
  myBoolean = true;
  alertMe(val){
    alert(val);
  };
  student = {
    name:'Thilini',
    subject: 'Design'
  };

  @Input() singer;
  constructor() { }

  ngOnInit() {
  }

}
