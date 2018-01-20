import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [HomeComponent]
})

//whatever the property in this class they are available
//to us in the view for that component

export class AppComponent {
  title = 'app works!';
  name = 'Dinusha';
}
