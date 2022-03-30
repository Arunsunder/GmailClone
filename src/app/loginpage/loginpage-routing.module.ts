import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaypageComponent } from './components/displaypage/displaypage.component';
import { FormpageComponent } from './components/formpage/formpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:MainpageComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
