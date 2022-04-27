let self, current;
function ViewModal(checkValue) {
  self = this;
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);

  this.currentAddress = ko.observable("");
  // current = this.currentAddress();
  // this.permAddress = ko.observable("");
  // let checkBox = document.querySelector("#checkIt");
  // checkBox.addEventListener("change", function () {
  // if (checkValue) {
  // this.currentAddress = self.currentAddress;
  this.permAddress = ko.computed(function () {
    return self.currentAddress();
  }, self);
  // console.log("Its checked");
  // } else {
  //   console.log("It not checked");
  //   this.permAddress = ko.observable("");
  // }
}
// this.checkBox = ko.observable(false);
// this.myAction = ko.computed(function () {
//   return true;
// }, this);
// let check_Box = this.checkBox;
// if (this.checkBox) {
//   console.log("Its checked");
// } else {
//   console.log("its not checked");
// }

var model1 = new ViewModal();
//activate knockout js
ko.applyBindings(model1);

//add event listener outside

// let checkBox = document.querySelector("#checkIt");
// checkBox.addEventListener("change", function () {
//   if (this.checked) {
//     // console.log(self);
//     ViewModal(this.checked);
//     // model1.currentAddress = self.currentAddress();
//     // model1.permAddress = ko.computed(function () {
//     //   return self.currentAddress();
//     // }, self);
//     // console.log(model1.currentAddress());
//     // console.log(model1.permAddress());
//     // console.log("Its checked");
//   } else {
//     // model1.permAddress = ko.observable("");
//     console.log("It not checked");
//   }
// });

let checkBox = document.querySelector("#checkIt");
checkBox.addEventListener("change", function (event) {
  if (!checkBox.checked) {
    document.querySelector(".pAddress").value = "";
    // document.getElementById("pAddress").setAttribute("disabled", false);
    document.getElementById("pAddress").toggleAttribute("disabled");
  } else {
    document.querySelector(".pAddress").value = model1.currentAddress();
    // document.getElementById("pAddress").setAttribute("disabled", true);
    // document.getElementById("pAddress").removeAttribute("disabled");
    document.getElementById("pAddress").toggleAttribute("disabled");
  }
});
