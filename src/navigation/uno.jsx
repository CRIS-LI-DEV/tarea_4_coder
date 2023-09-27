import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import { AntDesign } from "@expo/vector-icons"; 
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";
import StackNavigator from "./StackNavigator";

import { colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="meh" size={24} color="green" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <AntDesign name="frowno" size={24} color="green" />
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <AntDesign name="smileo" size={24} color="green" />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "black", // Fondo negro


    paddingTop: 5,
  },
  iconContainer: {
    backgroundColor: "black", // Fondo negro para el contenedor del icono
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});