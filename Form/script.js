let self, current;
function ViewModal() {
  self = this;
  // console.log(this);
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
    // document.getElementById("pAddress").toggleAttribute("required");

    // document.getElementById("pAddress").toggleAttribute("readonly");
  } else {
    document.querySelector(".pAddress").value = model1.currentAddress();
    document.getElementById("pAddress").toggleAttribute("disabled");
    // document.getElementById("pAddress").toggleAttribute("readonly");
  }
});

document.getElementById("btn").addEventListener("click", function (e) {
  e.preventDefault();
  // if (!checkBox.checked) {
  //   document.getElementById("pAddress").toggleAttribute("required");
  // }
  //serialize array get the name and value from the given id
  let arr = $("#formId").serializeArray();
  //works in form,fieldset,input not on div and label
  // let arr = $(":input").serializeArray();
  // let arr = $("#userSet").serializeArray();
  // console.log(arr);
  //both $ and jQuery
  // console.log($);
  // console.log(jQuery);
  //i is the index and userDetails is the variable name to store the iterated value
  let values = {};
  jQuery.each(arr, function (i, userDetails) {
    // console.log(userDetails);
    values[userDetails.name] = userDetails.value;
  });
  console.log(values);
});
