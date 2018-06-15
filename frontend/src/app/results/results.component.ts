import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ResultsService} from './results.service';

export interface Element {
  position: number;
  option: string;
  votes: number;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultsColumns = ['position', 'option', 'votes'];

  results;

  constructor(public resultsService: ResultsService) { }

  ngOnInit() {
    this.results = new MatTableDataSource<Element>([]);

    this.resultsService.getResults()
      .subscribe(
        data => {
          let index = 0;

          data.forEach( elem => {
            index = index + 1;
            elem.position = index;
          });

          this.results = data;
        }
      );



  }

}
