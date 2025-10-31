import { Text, View } from "react-native";
import { styles } from "./Home.style";
export function Home() {
  return (
    <>
      <View style={styles.meteo_basic}>
        <Text style={styles.title}>Meteo Basic Component</Text>
      </View>
      <View style={styles.searchbar_container}></View>
      <View style={styles.meteo_advanced}></View>
    </>
  );
}
