import { Text, TouchableOpacity, View,ImageBackground,ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import planetasRepository from "../../models/planet/PlanetRepository";

export default function Descricao({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Formulario", { planet: data, edit: true });

  };

  const deletePlanet = () => {
    planetasRepository.remove(data.id);
    navigation.navigate("ListaPlanetas");
  };

  return (
    <ScrollView>
   <ImageBackground source={require("../../../assets/lua.png")} style={styles.image}>
    <View style={styles.container}>

      {data ? (
        <Text style={styles.tit}>Detalhes do Planeta</Text>
      ) : (
        <Text  style={styles.tit}>Selecione um Planeta para exibir seus detalhes</Text>
      )}

          <Text  style={styles.tit}>{data.name}</Text>          
          <Text  style={styles.text}>{data.data}</Text>         
          <Text  style={styles.text}>{data.cor1}</Text>    
          <Text  style={styles.text}>{data.cor2}</Text>
          <Text style={styles.text}>{data.populacao}</Text>
          <Text style={styles.text}>{data.localizacao}</Text>
          <Text style={styles.text}>{data.comunicacao}</Text>
          <Text style={styles.text}>{data.governante}</Text>

        </View>

        <View style={styles.help}>
          <TouchableOpacity style={styles.botton} onPress={editPlanet}>
            <Text   style={styles.textbotton}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Excluirbotton} onPress={deletePlanet}>
            <Text    style={styles.textbotton}>Excluir</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    </ScrollView>
  );
}