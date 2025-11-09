import { useNavigation } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { MeteoAPI } from "../../api/meteo";
import { Container } from "../../components/Container/Container";
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { Searchbar } from "../../components/Searchbar/Searchbar";
import { getWeatherInterpretation } from "../../services/meteo-service";
import { styles } from "./Home.style";

export function Home() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);

  const currentWeather = weather?.current_weather;
  const navigation = useNavigation();

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (location) {
      fetchMeteoData(location);
      fetchCity(location);
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

  async function fetchCity(location) {
    const cityResponse = await MeteoAPI.fetchCityFromLocation(location);
    setCity(cityResponse);
  }

  function goToForecastPage() {
    navigation.navigate("Forecast", { city, ...weather.daily });
  }
  return currentWeather ? (
    <Container>
      <View style={styles.meteo_basic}>
        <MeteoBasic
          temperature={Math.round(currentWeather?.temperature)}
          city={city}
          interpretation={getWeatherInterpretation(currentWeather.weathercode)}
          onTemperaturePress={goToForecastPage}
        />
      </View>
      <View style={styles.searchbar_container}>
        <Searchbar></Searchbar>
      </View>

      <View style={styles.meteo_advanced}>
        <MeteoAdvanced
          dusk={weather.daily.sunrise[0].split("T")[1]}
          dawn={weather.daily.sunset[0].split("T")[1]}
          wind={currentWeather.windspeed}
        />
      </View>
    </Container>
  ) : null;
}
