import React from 'react';
import { convertTime } from '../../../utils/convertTime';
import { useDispatch, useSelector } from 'react-redux';
import { changeWeatherCurrent } from '../redux/weatherSlice';
import { convertDay } from '../../../utils/convertDay';

const WeatherForecastItem = ({ data }) => {
  const currentWeather = useSelector((state) => state.weather.currentWeather);
  const dispatch = useDispatch();
  // console.log(">>current weather", currentWeather)

  const time = convertTime(data?.dt_txt);
  const day = convertDay(data?.dt_txt);

  const handleClickItem = () => {
    dispatch(changeWeatherCurrent(data));
  }

  return (
    <div onClick={handleClickItem} className={`wrapper__forecast-item ${data?.dt === currentWeather?.dt ? "active" : ""}`}>
      <div className='day'>{day}</div>
      <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} alt={data?.weather[0]?.description} />
      <span>{time}</span>
    </div>
  );
};


export default WeatherForecastItem;