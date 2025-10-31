import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import background from "./assets/background.png";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <ImageBackground
      source={background}
      style={styles.image_background}
      imageStyle={styles.image_style}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
