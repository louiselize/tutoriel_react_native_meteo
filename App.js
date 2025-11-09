import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./App.style";
import background from "./assets/background.png";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import { Forecast } from "./pages/Forecast/Forecast";
import { Home } from "./pages/Home/Home";

const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: "transparent",
  },
};
export default function App() {
  const [fontsLoaded] = useFonts({
    AlataRegular: AlataRegular,
  });

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={background}
        style={styles.image_background}
        imageStyle={styles.image_style}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {fontsLoaded ? (
              <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Forecast" component={Forecast} />
              </Stack.Navigator>
            ) : null}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
