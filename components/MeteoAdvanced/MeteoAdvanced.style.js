import { StyleSheet, View } from "react-native";
import { AppText } from "../AppText/AppText";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000056",
    borderRadius: 15,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
});

export function StyledLabel({ children }) {
  return <AppText style={{ fontSize: 15 }}>{children}</AppText>;
}

export function StyledValue({ children }) {
  return <AppText style={{ fontSize: 20 }}>{children}</AppText>;
}

export function StyledContainer({ children }) {
  return <View style={{ alignItems: "center" }}>{children}</View>;
}
