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

document.getElementById("btn").addEventListener("click", function (e) {
  let arr = $("#formId").serializeArray();
  console.log(arr);
  console.log($);
  console.log(jQuery);
  let values = {};
  // jQuery.each(arr, function (i, userDetails) {
  //   console.log(userDetails);
  //   values[userDetails.name] = userDetails.value;
  // });
  console.log($.each);
  console.log(values);
});
