import { Text } from "react-native";
import { styles } from "./AppText.style";

export function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}
