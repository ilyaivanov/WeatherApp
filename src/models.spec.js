import { mapCityDetails } from "./models";

it("should map response with weather details into local format", function() {
  const expectedCity = {
    name: "London",
    id: "44418",
    degree: "20",
    type: "Heavy Cloud",
    dayOfWeek:'Thursday',
    date: "October 4th",
    iconName: "hc",
    isLoading: false,
    parent: "England",
    history: expect.any(Array)
  };
  expect(mapCityDetails(sampleCityResponse)).toEqual(expectedCity);
});

it("should map history of the city", function() {
  const history = mapCityDetails(sampleCityResponse).history;
  expect(history[0].type).toBe("Heavy Cloud");
  expect(history[0].degree).toBe("20");
  expect(history[0].dayOfWeek).toBe("Thursday");
  expect(history[0].date).toBe("October 4th");

  expect(history[5].type).toBe("Light Cloud");
  expect(history[5].degree).toBe("19");
  expect(history[5].date).toBe("October 9th");
});

it("should map search response without weather details into local format", function() {
  const response = {
    title: "London",
    location_type: "City",
    woeid: 44418,
    latt_long: "30.67,104.071022"
  };
  const expectedCity = {
    name: "London",
    id: "44418",
    isLoading: true
  };
  expect(mapCityDetails(response)).toEqual(expectedCity);
});

export const sampleCityResponse = {
  consolidated_weather: [
    {
      weather_state_name: "Heavy Cloud",
      weather_state_abbr: "hc",
      applicable_date: "2018-10-04",
      min_temp: 10.6775,
      max_temp: 20.715,
      the_temp: 19.665,
    },
    {
      weather_state_name: "Light Cloud",
      weather_state_abbr: "lc",
      applicable_date: "2018-10-05",
      min_temp: 11.415,
      max_temp: 21.31,
      the_temp: 20.215,
    },
    {
      weather_state_name: "Light Rain",
      weather_state_abbr: "lr",
      applicable_date: "2018-10-06",
      min_temp: 8.19,
      max_temp: 14.4375,
      the_temp: 14.235,
    },
    {
      weather_state_name: "Heavy Cloud",
      weather_state_abbr: "hc",
      applicable_date: "2018-10-07",
      min_temp: 6.35,
      max_temp: 15.3125,
      the_temp: 13.879999999999999,
    },
    {
      weather_state_name: "Heavy Cloud",
      weather_state_abbr: "hc",
      applicable_date: "2018-10-08",
      min_temp: 6.135,
      max_temp: 17.45,
      the_temp: 16.29,
    },
    {
      weather_state_name: "Light Cloud",
      weather_state_abbr: "lc",
      applicable_date: "2018-10-09",
      min_temp: 9.1875,
      max_temp: 18.52,
      the_temp: 18.77,
    }
  ],
  time: "2018-10-04T11:43:06.938999+01:00",
  sun_rise: "2018-10-04T07:05:50.221039+01:00",
  sun_set: "2018-10-04T18:31:42.451871+01:00",
  timezone_name: "LMT",
  parent: {
    title: "England",
    location_type: "Region / State / Province",
    woeid: 24554868,
    latt_long: "52.883560,-1.974060"
  },
  title: "London",
  location_type: "City",
  woeid: 44418,
  latt_long: "51.506321,-0.12714",
  timezone: "Europe/London"
};
