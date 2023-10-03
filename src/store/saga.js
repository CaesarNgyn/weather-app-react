import { all } from "redux-saga/effects";
import { watchGetWeather } from "../modules/weather/redux/weatherSaga";

export default function* rootSaga() {
  //run multiple sagas concurrently
  yield all([watchGetWeather()]);
  //add watchGetCities() if needed
}