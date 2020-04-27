import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllModules,
      rowData: [
        {
          orgHierarchy: ["Erica Rogers"],
          jobTitle: "CEO",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: ["Erica Rogers", "Malcolm Barrett"],
          jobTitle: "Exec. Vice President",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: ["Erica Rogers", "Malcolm Barrett", "Esther Baker"],
          jobTitle: "Director of Operations",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson"
          ],
          jobTitle: "Fleet Coordinator",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson",
            "Leah Flowers"
          ],
          jobTitle: "Parts Technician",
          employmentType: "Contract"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Brittany Hanson",
            "Tammy Sutton"
          ],
          jobTitle: "Service Technician",
          employmentType: "Contract"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Esther Baker",
            "Derek Paul"
          ],
          jobTitle: "Inventory Control",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland"
          ],
          jobTitle: "VP Sales",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Morris Hanson"
          ],
          jobTitle: "Sales Manager",
          employmentType: "Permanent"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Todd Tyler"
          ],
          jobTitle: "Sales Executive",
          employmentType: "Contract"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Bennie Wise"
          ],
          jobTitle: "Sales Executive",
          employmentType: "Contract"
        },
        {
          orgHierarchy: [
            "Erica Rogers",
            "Malcolm Barrett",
            "Francis Strickland",
            "Joel Cooper"
          ],
          jobTitle: "Sales Executive"
        }
      ],
      columnDefs: [
        { field: "jobTitle" },
        {
          field: "employmentType",
          valueGetter: function(params) {
            console.log("====params", params);
            return params.data.employmentType
              ? params.data.employmentType
              : "Contract";
          }
        }
      ],
      defaultColDef: { flex: 1 },
      autoGroupColumnDef: {
        headerName: "Company Hierarchy",
        minWidth: 300,
        cellRendererParams: { suppressCount: true }
        // suppressCount - to display/Hide number (count) in the headerName Column
      },
      groupDefaultExpanded: -1, // expand all on initial state
      getDataPath: function(data) {
        console.log("rowData", data); // return each row data
        return data.orgHierarchy;
      }
    };
  }

  onGridReady = params => {
    console.log("....onGridReady", params);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "calc(100% - 25px)" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-alpine"
          >
            <AgGridReact
              modules={this.state.modules}
              rowData={this.state.rowData}
              columnDefs={this.state.columnDefs}
              defaultColDef={this.state.defaultColDef}
              autoGroupColumnDef={this.state.autoGroupColumnDef}
              treeData={true}
              animateRows={true}
              groupDefaultExpanded={this.state.groupDefaultExpanded}
              getDataPath={this.state.getDataPath}
              onGridReady={this.onGridReady}
            />
          </div>
        </div>
      </div>
    );
  }
}
