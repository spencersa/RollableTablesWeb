import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RollableTableComponent } from 'src/components/rollable-table/rollable-table.component';
import { RollableTablesComponent } from 'src/components/rollable-tables/rollable-tables.component';
import { TableValueComponent } from 'src/components/table-value/table-value.component';
import { RollableTablesService } from 'src/services/rollable-tables-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RollableTableComponent,
    RollableTablesComponent,
    TableValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RollableTablesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
