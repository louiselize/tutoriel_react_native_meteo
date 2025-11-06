import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  clock: {
    alignItems: "flex-end",
  },
  weather_label: {
    alignSelf: "flex-end",
    transform: [{ rotate: "-90deg" }],
    fontSize: 20,
  },
  city: {},
  image: {
    width: 90,
    height: 90,
  },
  temperature_box: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  temperature: {
    fontSize: 120,
  },
});
