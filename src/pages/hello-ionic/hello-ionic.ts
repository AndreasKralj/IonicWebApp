import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {

  }
  
  authenticate_func() {
    if(this.Username == "Admin" && this.Password == "pass1234") {
        alert("User authenticated!");
    }
    else {
        alert("User not authenticated. Please try again.");
    }
    //alert(this.Username + " " + this.Password);
  }
}

