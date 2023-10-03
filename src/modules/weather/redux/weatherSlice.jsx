import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  error: "",
  forecast: null,
  currentWeather: null
}

export const weatherSlice = createSlice({
  name: 'weathers',
  initialState,
  reducers: {
    weatherGetAction: (state, action) => {
      state.isLoading = true;
    },
    weatherGetSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.forecast = action.payload;
      state.currentWeather = action.payload.list[0];
    },
    weatherGetError: (state, action) => {
      if (action.payload?.data?.message) {
        state.error = action.payload?.data?.message;
      } else {
        state.error = "Co loi xay ra!";
      }
      state.isLoading = false;
    },
    changeWeatherCurrent: (state, action) => {
      state.currentWeather = action.payload;
    },
    changeError: (state, action) => {
      state.error = "";
    }
  },
})

export const { weatherGetSuccess, weatherGetError, changeWeatherCurrent, weatherGetAction, changeError } = weatherSlice.actions

export default weatherSlice.reducer