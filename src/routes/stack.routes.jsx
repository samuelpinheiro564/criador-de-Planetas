import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CriarPlanet from "../screens/CriarPlanet"
import EditPlanet from "../screens/EditPlanet"
import Cadastro from "../screens/Cadastro"
import TabRoutes from "./tab.routes";
import ListaPlanetas from "../screens/ListaPlanetas";
import DetalhesPlanets from "../screens/DetalhesPlanets"

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="ListaPlanetas" component={ListaPlanetas} />
       <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Comandante" component={TabRoutes} />
      <Stack.Screen name="CriarPlanet" component={CriarPlanet} />
      <Stack.Screen name="EditPlanet" component={EditPlanet} />
      <Stack.Screen name="DetalhesPlanets" component={DetalhesPlanets}/>
    </Stack.Navigator>
  );
};

export default StackRoutes;
