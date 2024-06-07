import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Comandante from "../screens/Comandante";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
    name="Home"
    component={Home}
    options={{
      tabBarIcon: ({ focused }) => (
        <Feather
          name="home"
          size={24}
          color={focused ? "#131313" : "#D6D6D6"}
        />
      ),
      tabBarLabel: "Inicial",
      tabBarActiveTintColor: "#131313",
      tabBarInactiveTintColor: "#D6D6D6",
    }}
  />
      <Tab.Screen
        name="Comandante"
        component={Comandante}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#131313" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#131313",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
  </Tab.Navigator>

  );
};

export default TabRoutes;
