import { Component, Input, OnInit } from '@angular/core';
import { RollableTable } from 'src/models/rollabe-table.model';
import { RollableTablesService } from 'src/services/rollable-tables-service';

@Component({
  selector: 'rollable-table',
  templateUrl: './rollable-table.component.html',
  styleUrls: ['./rollable-table.component.css']
})

export class RollableTableComponent implements OnInit {
  @Input() table: RollableTable;

  constructor(private rollableTablesService: RollableTablesService) {
    this.table = {} as RollableTable;
  }

  ngOnInit(): void {
  }
}
