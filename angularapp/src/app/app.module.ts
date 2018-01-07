import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatechannelComponent } from './dashboard/createchannel/createchannel.component';
import { ConversationComponent } from './dashboard/conversation/conversation.component';
import { MessageComponent } from './dashboard/conversation/message/message.component';
import { ConversationPartnerComponent } from './conversation-partner/conversation-partner.component';

// import { JoinchannelComponent } from './joinchannel/joinchannel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatechannelComponent,
    ConversationComponent,
    MessageComponent,
    ConversationPartnerComponent,
    // JoinchannelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    // HttpClientModule
  ],
  // put all services in providers below
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
