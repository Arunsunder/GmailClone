import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GmailRoutingModule } from './gmail-routing.module';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SentComponent } from './components/sent/sent.component';
import { TrashComponent } from './components/trash/trash.component';
import { DraftComponent } from './components/draft/draft.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    MainpageComponent,
    InboxComponent,
    SentComponent,
    TrashComponent,
    DraftComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    GmailRoutingModule
  ]
})
export class GmailModule { }
