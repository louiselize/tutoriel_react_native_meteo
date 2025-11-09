import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  go_back_button: {
    padding: 10,
    backgroundColor: "#4e8d96ff",
    borderRadius: 8,
    alignSelf: "flex-start",
    margin: 10,
    width: 30,
  },
  header: {
    flexDirection: "row",
  },
  header_text: {
    flex: 1,
    alignItems: "center",
    marginRight: 30, // same size as go back button to be perfectly centered
  },
  subtitle: { fontSize: 20 },
});
