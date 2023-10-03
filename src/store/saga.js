import { all } from "redux-saga/effects";
import { watchGetWeather } from "../modules/weather/redux/weatherSaga";

export default function* rootSaga() {
  yield all([watchGetWeather()]);
}