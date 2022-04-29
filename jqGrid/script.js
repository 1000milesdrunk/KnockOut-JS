"use strict";

//jQuery("#tableId").jqGrid({/*options*/});
$(function () {
  $("#grid")
    .jqGrid({
      colModel: [
        {
          name: "id",
          hidden: true,
        },
        {
          name: "firstName",
          label: "First Name",
          width: "100px",
          align: "left",
          sorttype: "text",
        },
        {
          name: "lastName",
          label: "Last Name",
          width: "100px",
          align: "left",
        },
        {
          name: "email",
          label: "Email",
          width: "200px",
          align: "left",
        },
        {
          name: "dob",
          label: "Date Of Birth",
          width: "150px",
          align: "right",
          formatter: "date",
          // formatoptions:{ newformat: "d-M-Y" },
          formatoptions: { srcformat: "m/d/Y", newformat: "d/m/Y" },
        },
        {
          name: "salary",
          label: "Salary",
          width: "100px",
          align: "right",
          template: "number",
        },
      ],
      data: [
        {
          id: 10,
          firstName: "Angela",
          lastName: "Merkel",
          email: "alo@negasgol.sn",
          dob: "6/1/2090",
          salary: "24534",
        },
        {
          id: 20,
          firstName: "Vladimir",
          lastName: "Putin",
          email: "saur@kajhaz.cw",
          dob: "4/20/2094",
          salary: "26428",
        },
        {
          id: 30,
          firstName: "David",
          lastName: "Cameron",
          email: "acukosece@larid.km",
          dob: "6/17/2102",
          salary: "20859",
        },
        {
          id: 40,
          firstName: "Barack",
          lastName: "Obama",
          email: "misibik@tute.rw",
          dob: "4/23/2063",
          salary: "30066",
        },
        {
          id: 50,
          firstName: "François",
          lastName: "Harrison",
          email: "bep@imimuk.af",
          dob: "8/13/2086",
          salary: "16868",
        },
        {
          id: 60,
          firstName: "Austin",
          lastName: "Flowers",
          email: "lavveaja@fokrajaj.so",
          dob: "5/10/2073",
          salary: "16526",
        },
        {
          id: 70,
          firstName: "Mabel",
          lastName: "Elliott",
          email: "ovrutuh@sap.ax",
          dob: "10/30/2087",
          salary: "29020",
        },
        {
          id: 80,
          firstName: "Myra",
          lastName: "Sims",
          email: "mocfial@fihilu.hr",
          dob: "10/27/2082",
          salary: "22048",
        },
        {
          id: 90,
          firstName: "Noah",
          lastName: "Glover",
          email: "niinanel@ji.ro",
          dob: "5/8/2108",
          salary: "40639",
        },
        {
          id: 100,
          firstName: "Hannah",
          lastName: "Ingram",
          email: "eba@jaukin.kz",
          dob: "4/6/2076",
          salary: "41809",
        },
        {
          id: 110,
          firstName: "Curtis",
          lastName: "Craig",
          email: "faij@rizal.uy",
          dob: "8/6/2052",
          salary: "47399",
        },
      ],

      rownumbers: true,
      // guiStyle: "bootstrap",
      caption: "User Details",
      searching: { defaultSearch: "bw" },
    })
    .jqGrid("filterToolbar");
});
