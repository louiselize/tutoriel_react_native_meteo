import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import background from "../../assets/background.png";
import { styles } from "./Container.style";

export function Container({ children }) {
  return (
    <ImageBackground
      source={background}
      style={styles.image_background}
      imageStyle={styles.image_style}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
