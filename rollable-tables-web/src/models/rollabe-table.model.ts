import { RollableTableValue } from "./rollable-table-values.model";

export interface RollableTable {
  userId: string;
  tableId: string;
  tableName: string;
  tags: Array<string>;
  data: Array<RollableTableValue>;
}