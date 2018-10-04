import moment from 'moment';

const cityInfo = responseCityDetails => ({
  name: responseCityDetails.title,
  id: responseCityDetails.woeid + ""
});

const mapCityWithWeather = responseCityDetails => ({
  ...cityInfo(responseCityDetails),
  ...mapHistoryDate(responseCityDetails.consolidated_weather[0]),

  history: responseCityDetails.consolidated_weather.map(mapHistoryDate),

  parent: responseCityDetails.parent.title,
  isLoading: false
});

const mapHistoryDate = history => ({
  type: history.weather_state_name,
  iconName: history.weather_state_abbr,
  degree: history.the_temp.toFixed(0),
  date: moment(history.applicable_date, "YYYY-MM-DD").format("MMMM Do"),
  dayOfWeek: moment(history.applicable_date, "YYYY-MM-DD").format("dddd"),
});

const mapCityWithoutWeather = responseCityDetails => ({
  ...cityInfo(responseCityDetails),
  isLoading: true
});

export const mapCityDetails = responseCityDetails =>
  responseCityDetails.consolidated_weather
    ? mapCityWithWeather(responseCityDetails)
    : mapCityWithoutWeather(responseCityDetails);
