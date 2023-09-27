import BottomTabNavigator from "./src/navigation/uno";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

import fonts from "./src/global/fonts";
import { store } from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer style={{}}>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
