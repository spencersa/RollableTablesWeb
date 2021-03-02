import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from 'src/components/modal/modal.component';
import { RollableTableComponent } from 'src/components/rollable-table/rollable-table.component';
import { RollableTablesComponent } from 'src/components/rollable-tables/rollable-tables.component';
import { TableValueComponent } from 'src/components/table-value/table-value.component';
import { RollableTablesService } from 'src/services/rollable-tables-service';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmplifyService } from 'aws-amplify-angular';

@NgModule({
  declarations: [
    AppComponent,
    RollableTableComponent,
    RollableTablesComponent,
    TableValueComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyUIAngularModule
  ],
  providers: [RollableTablesService, AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
