import { call, put, takeLatest } from "redux-saga/effects";
import { weatherGetError, weatherGetSuccess, weatherGetAction } from './weatherSlice'
import { weatherAPI } from "../../../services/api/weatherAPI";

function* getWeather(action) {
  try {
    yield put(weatherGetAction());
    const res = yield call(weatherAPI.fetchWeather, action.payload);
    yield put(weatherGetSuccess(res))
  } catch (error) {
    yield put(weatherGetError(error.response))
  }
}

export function* watchGetWeather() {
  yield takeLatest("GET_WEATHER", getWeather);
}