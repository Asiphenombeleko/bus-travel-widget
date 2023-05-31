function BusTravel() {
  var amountToPlace = 0;
  var khayelitsha = 0;
  var dunoon = 0;
  var plain = 0;

  function toKhayelitsha(amount) {
    if (amount == 40) {
      khayelitsha += 40
      return khayelitsha;
    }
  }
  function toDunoon(amount) {
    if (amount == 25) {
      dunoon += 25
      return dunoon;
    }
  }
  function toMitchellsPlain(amount) {
    if (amount == 30) {
      plain += 30
      return plain 
    }
  }

  function places(location) {
    console.log(places(location));
    if (location === "khayelitsha") {
      amountToPlace += 40;
    }
    if (location === "Danoon") {
      amountToPlace += 25;
    }
    if (location === "MitchellsPlain") {
      amountToPlace += 30;
    }
  }
  function costOfTravel() {
    return amountToPlace;
  }
  return {
    places,
    costOfTravel,
    toKhayelitsha,
    toDunoon,
    toMitchellsPlain,
  };
}
