let self, current;
function ViewModal() {
  self = this;
  console.log(this);
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
  this.fullName = ko.computed(function () {
    return this.firstName() + " " + this.lastName();
  }, this);

  this.currentAddress = ko.observable("");
  this.permAddress = ko.computed(function () {
    return self.currentAddress();
  }, self);
}
//activate knockout js
var model1 = new ViewModal();
ko.applyBindings(model1);

//add event listener outside
let checkBox = document.querySelector("#checkIt");
checkBox.addEventListener("change", function () {
  if (!checkBox.checked) {
    document.querySelector(".pAddress").value = "";
    document.getElementById("pAddress").toggleAttribute("disabled");
  } else {
    document.querySelector(".pAddress").value = model1.currentAddress();
    document.getElementById("pAddress").toggleAttribute("disabled");
  }
});
// const details1 = [];
// function display() {
//   let userDetails = {};
//   userDetails.firstName = document.getElementById("fname").value;
//   userDetails.lastName = document.getElementById("lname").value;
//   userDetails.fullName = document.getElementById("fullname").value;
//   userDetails.currentAddress = document.getElementById("cAddress").value;
//   userDetails.permanentAddress = document.getElementById("pAddress").value;
//   console.log(userDetails);
//   details1.push(JSON.stringify(userDetails));
//   console.log(details1);

//   console.log(self);
// }
function getValue() {
  var values = {};
  $.each($("#formId").serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });
  console.log(values);
}
