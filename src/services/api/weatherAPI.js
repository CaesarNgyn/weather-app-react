import axios from "axios";
import { API_KEY, API_PREFIX } from '../../common/index'

export const weatherAPI = {
  async fetchWeather(params) {
    const url = `${API_PREFIX}/data/2.5/forecast`;

    const res = await axios.get(url, {
      params: {
        units: "metric",
        lang: "vi",
        appid: API_KEY,
        ...params,
      }
    });
    return res.data;
  }
}