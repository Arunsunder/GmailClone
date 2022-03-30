import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showform:boolean=false;

  constructor(private router:Router){}
  
  Login(){
    this.router.navigateByUrl('/displaypage');
    this.showform=!this.showform;
  }

  Gmail(){
    this.router.navigateByUrl('/Gmail');
    this.showform=!this.showform;

  }



}
