//reference DOM elements
const pointsElement = document.querySelector(".points");
const LocationsElement = document.querySelector(".Location");
const peakElement = document.querySelector(".peak");
const off_peakElement = document.querySelector(".off-peak");
const returnElement = document.getElementById("return");
const calculateBtnElement = document.querySelector(".calculateBtn");
const numberSingleElement = document.querySelector(".numberSingle");
const priceSingleElement = document.querySelector(".priceSingle");
const numberReturnElement = document.querySelector(".numberReturn");
const priceReturnElement = document.querySelector(".priceReturn");
const peakRadioElement = document.querySelector(".peakRadio");

//add event listeners
calculateBtnElement.addEventListener("click", function () {
  //check radiobutton
  var CheckedPeakRadioElement = document.querySelector(
    'input[name="peak"]:checked'
  );
  //function instance
  var bustravel = BusTravel();
  bustravel.places();
  if (CheckedPeakRadioElement.value) {
    pointsElement.innerHTML = bustravel.costOfTravel();
    numberSingleElement.innerHTML = bustravel.places();
    
  }
});
