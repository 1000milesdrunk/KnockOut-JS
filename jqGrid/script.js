"use strict";

//jQuery("#tableId").jqGrid({/*options*/});
$(function () {
  $("#grid").jqGrid({
    colModel: [
      {
        name: "firstName",
        label: "First Name",
      },
      {
        name: "lastName",
        label: "Last Name",
      },
    ],
    // rowModel: [
    //   {
    //     name: "Id",
    //     label: "Id Name",
    //   },
    // ],
    data: [
      { id: 10, firstName: "Angela", lastName: "Merkel" },
      { id: 20, firstName: "Vladimir", lastName: "Putin" },
      { id: 30, firstName: "David", lastName: "Cameron" },
      { id: 40, firstName: "Barack", lastName: "Obama" },
      { id: 50, firstName: "François", lastName: "Hollande" },
    ],

    rownumbers: true,
    // guiStyle: "bootstrap",
    caption: "User Details",
  });
});
