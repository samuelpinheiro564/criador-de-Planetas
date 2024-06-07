import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Comandante() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/lua.png")}
        style={styles.backgroundImage}
      />
      <Text styles={styles.title}>Nickolas Lira</Text>
      <Image
        style={styles.avatar}
        source={require("../../../assets/avatar.png")}
      />
      <Text style={styles.text}>
        Sou o maior conquistador de planetas que esse universo já viu, então
        crie esse site para vocês... os meros conquistadores
      </Text>
    </View>
  );
}
