import { Component, OnInit } from '@angular/core';
import { RollableTable } from 'src/models/rollabe-table.model';
import { RollableTablesService } from 'src/services/rollable-tables-service';

@Component({
  selector: 'rollable-tables',
  templateUrl: './rollable-tables.component.html',
  styleUrls: ['./rollable-tables.component.css']
})

export class RollableTablesComponent implements OnInit {

  userId = '73598f17-b26d-49d6-b34d-99cecfa4f592';
  tables: Array<RollableTable> = [];
  constructor(private rollableTablesService: RollableTablesService) {
      
   }

  ngOnInit(): void {
    this.getAllTables();
  }

  getAllTables() {
    this.rollableTablesService.getAllTables(this.userId).subscribe(
      data => {
        this.tables = data;
      });
  }
}
