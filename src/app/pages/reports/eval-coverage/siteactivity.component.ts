import { Component } from '@angular/core';
//import {GridOptions} from "ag-grid"
import { ReportService } from '../../../@core/model/report.service';
import { HttpClient } from "@angular/common/http";
import "ag-grid-enterprise";

@Component({
  selector: 'ngx-siteactivity',
  styleUrls: ['./siteactivity.component.scss'],
  templateUrl: './siteactivity.component.html',
})
export class SiteActivityComponent {
  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private rowSelection;
  private pinnedTopRowData;
  private pinnedBottomRowData;
  private defaultColDef;
  private data;

  constructor(private reportService: ReportService, private http: HttpClient) {

    this.columnDefs = [
      {
        headerName: "ID",
        field: "Property Id",
        width: 90,
      },
      {
        headerName: "School",
        field: "Home School",
        width: 90,
      },
      {
        headerName: "Company",
        field: "Company",
        width: 90,
      },
      {
        headerName: "Address",
        field: "Adress",
        width: 90,
      },
      {
        headerName: "City",
        field: "City",
        width: 90,
      },
      {
        headerName: "State",
        field: "State",
        width: 90,
      },
      {
        headerName: "Zip",
        field: "Zip",
        width: 90,
      },
      {
        headerName: "Type",
        field: "Building Type",
        width: 90,
      },
      {
        headerName: "Rent",
        field: "Rent",
        width: 90,
      },
      {
        headerName: "Approval Date",
        field: "Last turn on or approval",
        width: 90,
      },
      {
        headerName: "Sublet",
        field: "Sublet",
        width: 90,
      },
      {
        headerName: "User Type",
        field: "User Type",
        width: 90,
      },
      {
        headerName: "Contact",
        field: "Contact",
        width: 90,
      },
      {
        headerName: "Email",
        field: "Email",
        width: 90,
      },
      {
        headerName: "Phone",
        field: "Phone",
        width: 90,
      },
      {
        headerName: "User's Zip",
        field: "User's Zip",
        width: 90,
      },
    ];
    this.rowSelection = "multiple";
    this.defaultColDef = {};
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData( this.reportService.getSampleData());
    /*
    this.reportService.getActivityReport().subscribe((res)=>{
      params.api.setRowData(res);
      console.log(res);
    },
    () => {

    });
    */
  }
}
