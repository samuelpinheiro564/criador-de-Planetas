import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Formulario from "../screens/Formulario";
import TabRoutes from "./tab.routes";
import ListaPlanetas from "../screens/ListaPlanetas";
import DetalhesPlanets from "../screens/DetalhesPlanets";

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator>
         <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="ListaPlanetas" component={ListaPlanetas} /> 
      <Stack.Screen name="Comandante" component={TabRoutes} />
      <Stack.Screen name="Formulario" component={Formulario} />
      <Stack.Screen name="DetalhesPlanets" component={DetalhesPlanets} initialParams={{ planet: null,edit:false }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
