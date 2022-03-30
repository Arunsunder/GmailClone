import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-displaypage',
  templateUrl: './displaypage.component.html',
  styleUrls: ['./displaypage.component.css']
})
export class DisplaypageComponent implements OnInit {

  data:any='';

  constructor(private share:LoginserviceService) { 
    this.share.shareData$.subscribe((data)=>{
      this.data=data;
    });
  }

  ngOnInit(): void {
    
  }
  

}
