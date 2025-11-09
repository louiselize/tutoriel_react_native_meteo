import axios from "axios";

export class MeteoAPI {
  static async fetchWeatherFromLocation(location) {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }

  static async fetchCityFromLocation(location) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`
      )
    ).data;

    return city || village || town;
  }

  static async fetchLocationFromCity(city) {
    try {
      return (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&language=fr&count=1`
        )
      ).data.results[0];
    } catch (e) {
      throw "Pas de coordonnées trouvées pour la recherche : " + city;
    }
  }
}
