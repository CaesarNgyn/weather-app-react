import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";


import weatherReducer from '../modules/weather/redux/weatherSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga);