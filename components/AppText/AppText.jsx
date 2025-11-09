import { Text, useWindowDimensions } from "react-native";
import { styles } from "./AppText.style";

export function AppText({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || styles.text.fontSize;
  return (
    <Text
      style={[styles.text, style, { fontSize: fontSize * 0.00118 * height }]}>
      {children}
    </Text>
  );
}
