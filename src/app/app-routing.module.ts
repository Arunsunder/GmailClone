import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InboxComponent } from './gmail/components/inbox/inbox.component';




const routes: Routes = [
  {path:'home',component:AppComponent,pathMatch:'full'},
  {path:'displaypage' ,loadChildren:()=> import('../app/loginpage/loginpage.module').then(m=>m.LoginpageModule) },
  {path:'Gmail',loadChildren:()=>import('../app/gmail/gmail.module').then(x=>x.GmailModule)},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
