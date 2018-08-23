import { Component } from '@angular/core';
//import {GridOptions} from "ag-grid"
import { ReportService } from '../../../@core/data/report.service';
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
  /*
  public gridOptions:GridOptions;
  public rowData:any[];
  public columnDefs:any[];*/

  constructor(private reportService: ReportService, private http: HttpClient) {
    //npm install --save ag-grid ag-grid-angular
    //andif npm install ag-grid-enterprise


      /*
     this.gridOptions = <GridOptions>{
      onGridReady: () => {
          this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.columnDefs = [{headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];
    this.rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];*/
    /*
    this.columnDefs = [
      {
        headerName: "Group1",
        children: [
          {
            headerName: "Athlete",
            field: "athlete",
            width: 150
          },
          {
            headerName: "Age",
            field: "age",
            width: 90,
            cellClassRules: {
              greenBackground: function(params) {
                return params.value < 23;
              },
              blueBackground: function(params) {
                return params.value < 20;
              }
            }
          },
          {
            headerName: "Country",
            field: "country",
            width: 120
          },
          {
            headerName: "Group",
            valueGetter: "data.country.charAt(0)",
            width: 75
          },
          {
            headerName: "Year",
            field: "year",
            width: 75
          }
        ]
      },
      {
        headerName: "Group2",
        children: [
          {
            headerName: "Date",
            field: "date",
            width: 110
          },
          {
            headerName: "Sport",
            field: "sport",
            width: 110
          },
          {
            headerName: "Gold",
            field: "gold",
            width: 100
          },
          {
            headerName: "Silver",
            field: "silver",
            width: 100
          },
          {
            headerName: "Bronze",
            field: "bronze",
            width: 100
          },
          {
            headerName: "Total",
            field: "total",
            width: 100
          }
        ]
      }
    ];*/

    this.data = 
    [  
      {  
         "Property Id":338010,
         "Home School":"Adelphi University",
         "Company":"",
         "Address":"219 Aspen Street",
         "City":"Floral Park",
         "State":"NY",
         "Zip":11001,
         "Building Type":"House",
         "Rent":"$4,300 per unit",
         "Description Text":"Live the dream 35 minutes from Midtown Manhattan .Sunny and Elegant 4 bedroom Furnished or unfurnished House Rental. Charming 1925 center hall colonial revival boasts 4 plus Bedrooms, 2 Full Bathrooms , Finished windowed Attic &amp; Basement, a separate Den. Living room has Wood Burning Fireplace for cozy winter nights with your friends and family (and pup if you like ) . Gleaming hardwood floors and vintage period details throughout enhance the home .Enjoy meals In your Dining room , or quaint eat in kitchen with modern appliances and arched doorway . Imagine .....Your own 3 Car Driveway and Garage ! finished basement has Washer\/Dryer ! Enjoy BBQ ing this summer In your own Fenced Backyard. Pets allowed , so enjoy the great outdoors ( gardening in your yard or using lovely city park across street ) Other features are Closet\/Storage space Galore, Enclosed front Porch, 35 to 40 Minute Train Ride to Midtown Manhattan, NYC .... Station is just a few blocks away . You will love the easy access to Major Roads, Highways, &amp; Transportation. Shopping Close By - Grocery Stores, organic foods , Dry Cleaning, Bakeries, Cafes . Available For Immediate Occupancy. Dogs Allowed. Utilities Not Included, but ....Landlord will take on Responsibility For Grounds Care and Garden ! Plus pay a Housekeeper Once Every Two Weeks! What are you waiting for ? Call Theresa today and upgrade your lifestyle !",
         "Last turn on or approval":"Tue, 28 Mar 2017 09:00:37 -0400",
         "Sublet":"Y",
         "User Type":"Property Lister",
         "Contact":"Theresa Dinardo",
         "Email":"theresa.dinardo@elliman.com",
         "Phone":"(718) 309-6974",
         "User's Zip":11361
      },
      {  
         "Property Id":357547,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"12 Hamilton Place",
         "City":"Garden City",
         "State":"NY",
         "Zip":11530,
         "Building Type":"Apartment",
         "Rent":"$1,500 per unit",
         "Description Text":"This is a Perfect one bedroom apartment. APARTMENT FEATURES: Washer\/Dryer, Dishwasher, Kitchen, Stainless Kitchen, Central A\/C, Wood Floors; Pets Allowed, Garage.",
         "Last turn on or approval":"Sat, 10 Jun 2017 19:15:02 -0400",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"Kent Kasten",
         "Email":"listingwithus6@gmail.com",
         "Phone":"(206) 208-5767",
         "User's Zip":60083
      },
      {  
         "Property Id":358629,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"1 Large Bedroom \/ 1 Bath (shared) In Malverne Area. Only 3.6 Miles From Campus",
         "City":"Malverne",
         "State":"NY",
         "Zip":11565,
         "Building Type":"House",
         "Rent":"$850 per unit",
         "Description Text":"Nice size room for rental in beautiful Malverne. Very convenient to all, and walking distance to stores, restaurant, gym and LIRR. Room is furnished. Female Graduate Student only. Bathroom is to be shared with female owner. References letter required.",
         "Last turn on or approval":"Fri, 16 Jun 2017 12:59:27 -0400",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"Tatiana Penninipede",
         "Email":"t.gorriti@mitsui.com",
         "Phone":"(516) 434-9557",
         "User's Zip":11565
      },
      {  
         "Property Id":402119,
         "Home School":"Adelphi University",
         "Company":"",
         "Address":"11 Nassau Boulevard",
         "City":"Garden City",
         "State":"NY",
         "Zip":11530,
         "Building Type":"Apartment",
         "Rent":"$750 per unit",
         "Description Text":"One bedroom in shared apartment available now. Tenants share kitchen, bathroom and utilities (not included in rent). Apartment is 10 minute walk from Adelphi and LIRR. Restaurants, grocery stores and laundromat also within walking distance. Please email or text for more information.",
         "Last turn on or approval":"Thu, 04 Jan 2018 18:10:20 -0500",
         "Sublet":"",
         "User Type":"Community Member",
         "Contact":"Sharla-Renee Hart",
         "Email":"shart@adelphi.edu",
         "Phone":"",
         "User's Zip":null
      },
      {  
         "Property Id":344028,
         "Home School":"Adelphi University",
         "Company":"",
         "Address":"74 Jackson Avenue",
         "City":"Mineola",
         "State":"NY",
         "Zip":11501,
         "Building Type":"Apartment",
         "Rent":"$3,450 per unit",
         "Description Text":"Beautiful 3 bedroom two bathroom apartment available for rent in Mineola! The monthly rent is starting at $3450.The utilities are not included because it is a separate unit. Tenant must pay their own utilities. The address for the apartment is 74 Jackson Ave, Mineola NY 11501. The Mineola LIRR train station is a good 5 min from there (where AU shuttle is available). There are three bedrooms, 2 bathrooms, a very spacious full kitchen, a large living room and attached dining room as well. There are high ceilings and there is ample street parking. No pets allowed and no smoking inside the apartment. Five students can easily share this apartment.Close to bus stops, almost 5 min drive to Roosevelt Field Mall, Westbury Gallery, and nearby to many restaurants.From the apartment to the Adelphi is exactly 7 mins.",
         "Last turn on or approval":"Sun, 07 Jan 2018 15:11:30 -0500",
         "Sublet":"",
         "User Type":"Community Member",
         "Contact":"Pratibha Anand",
         "Email":"pratibhaanand@mail.adelphi.edu",
         "Phone":"",
         "User's Zip":null
      },
      {  
         "Property Id":398589,
         "Home School":"Adelphi University",
         "Company":"family",
         "Address":"520 Sixth Avenue",
         "City":"New Hyde Park",
         "State":"NY",
         "Zip":11040,
         "Building Type":"House",
         "Rent":"$900 per unit",
         "Description Text":"ONE FURNISHED ROOM AVAILABLE FOR A FEMALE STUDENT\nIN NEW HYDE PARK HOME\n(Includes Free Continental Breakfast)\nOne large, furnished, sunny room available on 2nd floor of a one-family home in New Hyde Park. We have two friendly cats.\nThe rooms have two dressers, a closet and a desk, a full-size bed (linen included), a television and DVD player, . Guest bathroom located on same floor.\nThe rental fee includes a free breakfast (toast, with jam and butter, cereal, tea or coffee).\nOur home is a 15-minute walk from the Stewart Manor LIRR station. It is a one-stop, $3.25 train ride to Nassau Blvd, where you can transfer to Adelphi's free shuttle bus.\nTo go to Hofstra University you can also take the LIRR train to Mineola Blvd Station (two stops for $3.25) where you can get a free shuttle bus to Hofstra University. We can drive you to the train station during inclement weather.",
         "Last turn on or approval":"Sun, 07 Jan 2018 17:56:01 -0500",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"Louise Fernandez",
         "Email":"nhpperson@yahoo.com",
         "Phone":"(516) 474-0981",
         "User's Zip":11040
      },
      {  
         "Property Id":300197,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"535 Maple Street",
         "City":"West Hempstead",
         "State":"NY",
         "Zip":11552,
         "Building Type":"House",
         "Rent":"$950 to $1,050 per unit",
         "Description Text":"House located in a quite area in West Hempstead. Close to transportation and few minutes away from Lakeview Park. Good for an student who is looking for a family environment.Room witha walking closet and full bathroom.Specious yard with a pool.",
         "Last turn on or approval":"Sun, 07 Jan 2018 23:37:24 -0500",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"fernanda santana",
         "Email":"fernandalopez29@hotmail.com",
         "Phone":"(516) 765-6824",
         "User's Zip":11552
      },
      {  
         "Property Id":385767,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"2612 Marin Lane",
         "City":"East Meadow",
         "State":"NY",
         "Zip":11554,
         "Building Type":"House",
         "Rent":"$3,850 per unit",
         "Description Text":"Recently renovated inside and out. Quiet block. Accessible to all. Large backyard. Basement for storage. Central air conditioning. New appliances.",
         "Last turn on or approval":"Mon, 08 Jan 2018 13:37:30 -0500",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"Tom Pavone",
         "Email":"windsorre333@gmail.com",
         "Phone":"(516) 538-6505",
         "User's Zip":11552
      },
      {  
         "Property Id":63232,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"53 Stratford Avenue",
         "City":"Garden City",
         "State":"NY",
         "Zip":11530,
         "Building Type":"House",
         "Rent":"$950 per unit",
         "Description Text":"Rent is for basement studio apartment with furnished den, pool table and bar\/kitchenette and walk-in closet.\nStudio is located in finished basement of a ranch house. Included in the rent is the bedroom, use of a bar\/kitchenette with eating space, a sink and mini fridge. The room is furnished. There is a bed, couch and pool table area with small windows all around for natural lighting. Updated a few months ago with new ceiling tiles and lighting. Shared entrance upstairs. Private bathroom located upstairs.\nHouse is walking\/biking distance from Adelphi and a short drive to Hofstra. Walking distance to LIRR train station.\nPrice includes Utilities, Mini Refrigerator, Wi-Fi, Central Air Conditioning, Heat, Washer\/Dryer use &amp; driveway parking space. Cable box is available (Optimum cable channels) for $10 per month.\nAvailable for Use: There is a fully furnished kitchen and private bathroom upstairs, washer and dryer in basement down the hall from studio, driveway for private parking, and a large backyard patio (all included).\nGarden City is beautiful, quiet, and SAFE! We have our own police and fire department.\nHouse is occupied by one female owner, one upstairs tenant and one medium dog.\nQuiet graduate students preferred. International students welcome.",
         "Last turn on or approval":"Fri, 26 Jan 2018 17:33:23 -0500",
         "Sublet":"",
         "User Type":"Property Lister",
         "Contact":"Nicole  Jacoberger",
         "Email":"nicole4588@hotmail.com",
         "Phone":"(516) 637-4483",
         "User's Zip":11530
      },
      {  
         "Property Id":419611,
         "Home School":"Adelphi University",
         "Company":"",
         "Address":"20 Nassau Boulevard",
         "City":"Garden City",
         "State":"NY",
         "Zip":11530,
         "Building Type":"Apartment",
         "Rent":"$700 per unit",
         "Description Text":"700 for a room , including all utilities . \n516 662 2123",
         "Last turn on or approval":"Sun, 28 Jan 2018 14:29:46 -0500",
         "Sublet":"",
         "User Type":"Community Member",
         "Contact":"Eric Wong",
         "Email":"ericwong3@mail.adelphi.edu",
         "Phone":"(917) 361-2520",
         "User's Zip":null
      },
      {  
         "Property Id":419793,
         "Home School":"Adelphi University",
         "Company":"Individual",
         "Address":"543 North 11th Street",
         "City":"New Hyde Park",
         "State":"NY",
         "Zip":11040,
         "Building Type":"Apartment",
         "Rent":"$1,000 per unit",
         "Description Text":"DUPLEX APARTMENT (New HydePark)",
         "Last turn on or approval":"",
         "Sublet":"",
         "User Type":"",
         "Contact":"",
         "Email":"",
         "Phone":"",
         "User's Zip":null
      }
   ]

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
    //params.api.setRowData(this.data);
    /*
    this.http
      //.get("https://admin.staging.offcampuspartners.com/rest/active-listing-report?key=4760dbb1c7c64595cfb0ca913bc624b02676cf889c3d91aadf43bc7dd4a663f8")
      .get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json")
      .subscribe(data => {
        params.api.setRowData(data);
    }); */
    this.reportService.getActivityReport().subscribe((res)=>{ 
      params.api.setRowData(res);   
      console.log(res);
    },
    () => { 
          
    });   



  }
  

}
