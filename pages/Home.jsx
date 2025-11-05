import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./Home.style";

export function Home() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getUserLocation();
  }, []);

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

  return (
    <>
      <View style={styles.meteo_basic}>
        <Text style={styles.title}> {location.latitude}</Text>
        <Text style={styles.title}> {location.longitude}</Text>
      </View>
      <View style={styles.searchbar_container}></View>
      <View style={styles.meteo_advanced}></View>
    </>
  );
}
