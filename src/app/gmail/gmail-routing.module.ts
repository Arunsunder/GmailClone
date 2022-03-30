import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './components/draft/draft.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SentComponent } from './components/sent/sent.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:MainpageComponent,children:[
      {path:'inbox',component:InboxComponent},
      {path:'draft',component:DraftComponent},
      {path:'sent',component:SentComponent},
      {path:'trash',component:TrashComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GmailRoutingModule { }
