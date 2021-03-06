import { Component, OnInit } from '@angular/core';
import {VotingService} from './voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {

  options: any;

  constructor(public votingService: VotingService) { }

  ngOnInit() {
    this.getVoteOptions();
  }

  getVoteOptions() {
    this.votingService.getOptions()
      .subscribe(
        data => {
          this.options = data;
        }
      );
  }

  vote(option: string) {
    this.votingService.postVote(option).subscribe(
      data => {
        console.log(data);
        this.getVoteOptions();
      }
    );

  }

}
