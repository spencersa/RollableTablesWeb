import { Component, Input, OnInit } from '@angular/core';
import { RollableTable } from 'src/models/rollabe-table.model';
import { RollableTableValue } from 'src/models/rollable-table-values.model';
import { RollableTablesService } from 'src/services/rollable-tables-service';

@Component({
  selector: 'rollable-table',
  templateUrl: './rollable-table.component.html',
  styleUrls: ['./rollable-table.component.css']
})

export class RollableTableComponent implements OnInit {
  @Input() table: RollableTable;
  rollResult?: number = undefined;
  rollValue?: string = undefined;
  isEditing: boolean = false;
  isLoading: boolean = false;
  editField: string = '';

  constructor(private rollableTablesService: RollableTablesService) {
    this.table = {} as RollableTable;
  }

  ngOnInit(): void {
  }

  setRandomValue(table: RollableTable): void {
    let topLevelTotal = table.data.length;
    let min = 0;
    let max = Math.floor(topLevelTotal) - 1;
    let topLevelResult = this.getRandomValue(min, max);
    if (table.data[topLevelResult].children) {
      max = Math.floor(table.data[topLevelResult].children?.length ?? 0) - 1;
      let secondLevelResult = this.getRandomValue(min, max);
      let children = table.data[topLevelResult]?.children;
      this.rollValue = `${table.data[topLevelResult].value}: ${children ? children[secondLevelResult].value : undefined}`;
    }
    else {
      this.rollValue = table.data[topLevelResult].value;
    }
  }

  getRandomValue(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
  }

  addValue() {
    this.table.data.push({} as RollableTableValue)
  }

  updateTable(table: RollableTable) {
    this.isLoading = true;
    this.rollableTablesService.upsertTable(table).subscribe(
      () => { },
      error => {
        console.log(error)
      },
      () => this.isLoading = false
    );
  }
}
