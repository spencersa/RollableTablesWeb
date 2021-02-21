import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RollableTable } from 'src/models/rollabe-table.model';

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
}