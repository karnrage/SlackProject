import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { CreatechannelComponent } from './dashboard/createchannel/createchannel.component'
import { ConversationPartnerComponent } from './conversation-partner/conversation-partner.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'createChannel',
    pathMatch: 'full',
    component: CreatechannelComponent
  },
  {
    path: 'conversation-partner',
    pathMatch: 'full',
    component: ConversationPartnerComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }