import {initStore, storeGetters, storeSetters} from "./store";

describe('Suite', function () {
  beforeEach(() => {
    storeSetters.reset();
  });

  it('there should be one default city', function () {
    expect(storeGetters.getCities().length).toBe(1);
  });

  it('after updaating city details new information should be present on that city', function () {
    storeSetters.addCity({id: "42"});
    storeSetters.updateCityDetails({id: "42", somenewdata: "hey ho"});
    expect(storeGetters.getCities()[1].somenewdata).toBe("hey ho");
  });


  it('after adding a city there should be ttwo cities', function () {
    storeSetters.addCity({});
    expect(storeGetters.getCities().length).toBe(2);
  });
});



