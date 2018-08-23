import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main";
import { ThemeModule } from '../../@theme/theme.module';
import { ReportsRoutingModule, routedComponents } from './reports-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ReportsRoutingModule,
    AgGridModule.withComponents([])
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ReportsModule { }
