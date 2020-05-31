import { Component, Input, ViewChild } from '@angular/core';
import { Result, Entry } from 'src/app/corona.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent {
  public columnsToDisplay: string[] = ['index', 'country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'active', 'recovered'];
  public dataSource: MatTableDataSource<Entry>;
  public worldStats: Entry;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  private result: Result;
  @Input() public set gridData(value: Result) {
    if (this.result !== value) {
      this.result = value;
      this.updateDataSource();
    }
  }

  private updateDataSource() {
    if (this.dataSource) {
      this.dataSource.data = this.result.data;
      this.worldStats = this.result.worldStats;
      // console.log('worldStats.totalCases: ', this.worldStats.cases);
      return;
    }

    this.dataSource = new MatTableDataSource(this.result.data);
    this.dataSource.sort = this.sort;
    this.sort.sort({ id: 'cases', start: 'desc', disableClear: false });
    this.worldStats = this.result.worldStats;
    // console.log('gridData: ', this.result);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTodayCases(entry: Entry): string {
    return entry.todayCases > 0 ? '+' + entry.todayCases : '';
  }

  getTodayDeaths(entry: Entry): string {
    return entry.todayDeaths > 0 ? '+' + entry.todayDeaths : '';
  }
}
