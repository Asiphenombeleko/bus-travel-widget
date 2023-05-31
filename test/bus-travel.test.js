describe("The Bus Travel Function", function () {
  it("should return  40 if a person travel from Khayelitsha", function () {
    var buses = BusTravel();

    buses.places(khayelitsha);
    buses.costOfTravel(40)

    assert.equal("40", buses.costOfTravel());
  });

  it("should return 25 if a person is from Dunoon", function () {
    var buses = BusTravel();

    buses.places(Dunoon);
    buses.costOfTravel(25);

    assert.equal("25", buses.costOfTravel());
  });
  it ("should return 30 if a person is from Mitchells Plain", function(){
    var buses = BusTravel();

    buses.places(Mitchellsplain);
    buses.costOfTravel(30);

    assert.equal("30", buses.costOfTravel())
  })
  it("should return khayelitsha if a person uses R40", function(){

  })
});
