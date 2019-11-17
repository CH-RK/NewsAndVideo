import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';

  callingFunction () {
    debugger; 
    var a = {}; 
    for(var key in a) {
      if(a.hasOwnProperty(key))
          {
            alert("Empty")
      }
    }
  }
   
}

