import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel�� �� ��Ű���� �����մϴ�.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations;
import { MessagesComponent } from './messages/messages.component': [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    Brows,
    MessagesComponenterModule,
    FormsModule,    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
