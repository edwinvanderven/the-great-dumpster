import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Result, Entry } from 'src/app/corona.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent implements OnInit {
  public columnsToDisplay: string[] = ['index', 'country', 'cases', 'active', 'recovered', 'deaths'];
  public dataSource: MatTableDataSource<Entry>;
  public worldStats: Entry;

  @Input() gridData: Result;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.gridData.data);
    this.dataSource.sort = this.sort;
    this.sort.sort({ id: 'cases', start: 'desc', disableClear: false });

    this.worldStats = this.gridData.worldStats;
    console.log('gridData: ', this.gridData);
  }
}
