import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { MeteoAPI } from "../api/meteo";
import { MeteoBasic } from "../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../services/meteo-service";
import { styles } from "./Home.style";

export function Home() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchMeteoData(location);
    }
  }, [location]);

  async function getUserLocation() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLocation({
        latitude: 48.8566,
        longitude: 2.3522,
      });
      return;
    }

    const location = await getCurrentPositionAsync();

    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  async function fetchMeteoData(location) {
    const weatherResponse = await MeteoAPI.fetchWeatherFromLocation(location);
    setWeather(weatherResponse);
  }

  return currentWeather ? (
    <>
      <View style={styles.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city="Todo"
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
        />
      </View>
      <View style={styles.searchbar_container}></View>
      <View style={styles.meteo_advanced}></View>
    </>
  ) : null;
}
