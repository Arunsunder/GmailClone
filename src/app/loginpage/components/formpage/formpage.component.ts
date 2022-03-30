import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';


@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.css']
})
export class FormpageComponent implements OnInit {

  constructor(private dataShare:LoginserviceService) { }
  name:String=''
  emailId:String=''
  phonenumber:String=''
  password:String=''

  formdata:any;


  ngOnInit(): void {
    this.formdata = new FormGroup({
      name:new FormControl(""),
      emailId: new FormControl(""),
      phonenumber:new FormControl(""),
      password: new FormControl("")
   });
  }
  callView(data:any){
    this.dataShare.shareData(data);
  }

}
