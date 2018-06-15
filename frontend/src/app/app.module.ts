import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { VotingComponent } from './voting/voting.component';
import {AppRoutingModule} from './routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from './material.module';
import {ResultsService} from './results/results.service';
import {HttpClientModule} from '@angular/common/http';
import {VotingService} from './voting/voting.service';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    VotingComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ResultsService, VotingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
