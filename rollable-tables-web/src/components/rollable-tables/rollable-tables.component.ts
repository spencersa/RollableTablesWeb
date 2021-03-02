import { Component, Input, OnInit } from '@angular/core';
import { RollableTable } from 'src/models/rollabe-table.model';
import { RollableTablesService } from 'src/services/rollable-tables-service';

@Component({
  selector: 'rollable-tables',
  templateUrl: './rollable-tables.component.html',
  styleUrls: ['./rollable-tables.component.css']
})

export class RollableTablesComponent implements OnInit {
  @Input() userId: string | undefined;
  isLoading: boolean = false;
  tables: Array<RollableTable>;
  constructor(private rollableTablesService: RollableTablesService) {
    this.tables = [];
  }

  ngOnInit(): void {
    this.getAllTables();
  }

  getAllTables() {
    this.isLoading = true;
    let userId = this.userId === undefined ? '' : this.userId;
    this.rollableTablesService.getAllTables(userId).subscribe(
      data => {
        this.tables = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
