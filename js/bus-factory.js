function BusTravel() {
  var amountToPlace = 0;
  var khayelitsha = 0;
  var dunoon = 0;
  var plain = 0;
  var returnCost = 0;

  function toKhayelitsha(amount) {
    if (amount == 40) {
      khayelitsha += 40;
      return khayelitsha;
    }
  }
  function toDunoon(amount) {
    if (amount == 25) {
      dunoon += 25;
      return dunoon;
    }
  }
  function toMitchellsPlain(amount) {
    if (amount == 30) {
      plain += 30;
      return plain;
    }
  }

  function places(local) {
   // console.log(places(location));
    if (local === "khayelitsha") {
      amountToPlace += 40;
    }
    if (local === "Danoon") {
      amountToPlace += 25;
    }
    if (local === "MitchellsPlain") {
      amountToPlace += 30;
    }
  }
  function costOfTravel() {
    return amountToPlace;
  }
  function returnAmount(amount) {
    if (amount * 2 == 80) {
      returnCost = amount;
    }
    if (amount *2 == 50){
      returnCost = amount
    }
    if(amount *2 == 60){
      returnCost = amount
    }
  }
  function totalReturn(){
    return returnCost
  }
  return {
    places,
    costOfTravel,
    toKhayelitsha,
    toDunoon,
    toMitchellsPlain,
    returnAmount,
    totalReturn
  };
}
