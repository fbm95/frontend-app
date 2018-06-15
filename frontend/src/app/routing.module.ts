import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VotingComponent} from './voting/voting.component';
import {ResultsComponent} from './results/results.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: VotingComponent
  },
  {
    path: 'vote',
    component: VotingComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
