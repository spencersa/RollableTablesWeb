import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RollableTable } from 'src/models/rollabe-table.model';
import { RollableTableGroupTable } from 'src/models/rollable-table-group-table.model';
import { RollableTableGroup } from 'src/models/rollable-table-group.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RollableTablesService {

    apiUrl: string = "https://kxt5g25bjc.execute-api.us-east-2.amazonaws.com/";

    constructor(private http: HttpClient) { }

    getAllTables(userId: string): Observable<Array<RollableTable>> {
        return this.http.get<any[]>(`${this.apiUrl}dev/tables/${userId}`, { responseType: 'json' });
    }

    upsertTable(table: RollableTable): Observable<any> {
        return this.http.post(`${this.apiUrl}dev/tables`, table, { responseType: 'json' });
    }

    getGroups(userId: string): Observable<Array<RollableTableGroup>> {
        return this.http.get<any[]>(`${this.apiUrl}dev/groups/${userId}`, { responseType: 'json' });
    }

    upsertGroup(tableGroup: RollableTableGroup): Observable<any> {
        return this.http.post(`${this.apiUrl}dev/groups`, tableGroup, { responseType: 'json' });
    }

    getTablesInGroup(groupId: string): Observable<Array<RollableTableGroupTable>> {
        return this.http.get<RollableTableGroupTable[]>(`${this.apiUrl}dev/groups/tables/${groupId}`, { responseType: 'json' });
    }

    addTableToGroup(tableAssciation: RollableTableGroupTable): Observable<any> {
        return this.http.post(`${this.apiUrl}dev/groups/tables`, tableAssciation, { responseType: 'json' });
    }

    seed(userId: string) {
        return this.http.post(`${this.apiUrl}dev/groups/tables/${userId}`, {}, { responseType: 'json' });
    }
}