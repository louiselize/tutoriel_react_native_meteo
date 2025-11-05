import { useFonts } from "expo-font";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import background from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { Home } from "./pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <ImageBackground
      source={background}
      style={styles.image_background}
      imageStyle={styles.image_style}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {fontsLoaded ? <Home /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
