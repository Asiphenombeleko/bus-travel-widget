//reference DOM elements
const pointsElement = document.querySelector(".points");
const LocationsElement = document.querySelector(".Locations");
const peakElement = document.querySelector(".peak"); 
const off_peakElement = document.querySelector(".off-peak");
const returnElement = document.getElementById('return');
const calculateBtnElement = document.querySelector(".calculateBtn");
const numberSingleElement = document.querySelector(".numberSingle");
const priceSingleElement = document.querySelector(".priceSingle");
const numberReturnElement = document.querySelector(".numberReturn");
const priceReturnElement = document.querySelector(".priceReturn");

//add event listeners
calculateBtnElement.addEventListener("", function(){
 var peakElement = document.querySelector(

    'input[name="peak"]:checked'

  );
//function instance
  var bustravel = BusTravel()
  bustravel.places()
    pointsElement.innerHTML = bustravel.places()
})