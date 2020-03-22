import { Component, OnInit, Input } from '@angular/core';
import { Result } from 'src/app/corona.service';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent implements OnInit {
  @Input() gridData: Result;

  public columnsToDisplay = [
    'country',
    'cases',
    'active',
    'recovered',
    'deaths'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('gridData: ', this.gridData);
  }
}
