//reference DOM elements
const pointsElement = document.querySelector(".points");
const LocalsElement = document.querySelector(".Loca");
const returnElement = document.getElementById('return');
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
  bustravel.costOfTravel()
  if (CheckedPeakRadioElement) {
    numberReturnElement.innerHTML = bustravel.costOfTravel(CheckedPeakRadioElement.value);
    numberSingleElement.innerHTML = bustravel.costOfTravel(CheckedPeakRadioElement.value)

  }
});
