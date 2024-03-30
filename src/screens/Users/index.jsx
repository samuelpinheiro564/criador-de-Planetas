import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { useNavigation } from "@react-navigation/native";

export default function Users({ route }) {
  const { data } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/ço.png")}
        style={styles.backgroundImage}
      />
      <Title style={styles.title} title="Planets" />

      <View style={styles.planet}>
        <Text style={styles.planetName}>{data.name}</Text>
        <Text style={styles.planetData}>{data.data}</Text>
        <Text style={styles.planetCor1}>{data.cor1}</Text>
        <Text style={styles.planetCor2}>{data.cor2}</Text>
        <Text style={styles.planetPopulacao}>{data.populacao}</Text>
        <Text style={styles.planetNatural}>{data.natural}</Text>
        <Text style={styles.planetHumans}>{data.humans}</Text>
        <Text style={styles.planetLocalizacao}>{data.localizacao}</Text>
        <Text style={styles.planetComunicacao}>{data.comunicacao}</Text>
        <Text style={styles.planetGovernante}>{data.governante}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Planets", data)}>
        <Text style={styles.planetButton}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}
