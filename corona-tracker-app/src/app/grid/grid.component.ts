import { Component, OnInit } from '@angular/core';
import { Result, CoronaService } from '../corona.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  public isLoading = false;
  public isError = false;

  public gridData: Result[] = [];

  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const intervalTimeout = 10000; // 10 seconds

    setInterval(() => {
      this.coronaService.getData().then(
        (result: Result[]) => this.handleResult(result),
        (error: Error) => this.handleError(error),
      );
    }, intervalTimeout);
  }

  private handleResult(result: Result[]) {
    this.isLoading = false;
    this.gridData = result;
  }

  private handleError(error: Error) {
    console.error(error);
    this.isLoading = false;
    this.isError = true;
  }
}
