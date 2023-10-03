import { call, put, takeLatest } from "redux-saga/effects";
import { weatherGetError, weatherGetSuccess, weatherGetAction } from './weatherSlice'
import { weatherAPI } from "../../../services/api/weatherAPI";

function* getWeather(action) {
  try {
    //put() function creates an effect, which instructs middleware to dispatch an action to the store.
    yield put(weatherGetAction());
    //invoke an asynchronous function weatherAPI.fetchWeather
    const res = yield call(weatherAPI.fetchWeather, action.payload);
    // console.log(">>res", res)
    yield put(weatherGetSuccess(res))
  } catch (error) {
    // console.log(">>res", error)
    yield put(weatherGetError(error.response))
  }
}


//watcher
//When the "GET_WEATHER" action is dispatched, this watcher will intercept it and call the getWeather generator function.
export function* watchGetWeather() {
  //only latest dispatched gets called
  //prevent race conditions and ensures that application responds to user interactions based on the latest actions,
  yield takeLatest("GET_WEATHER", getWeather);
}