import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/terra.png")}
        style={styles.backgroundImage}
      />
      <Title title="Bem-vindo ao Universo dos Planetas" style={styles.title} />
      <Text style={styles.text}>
        Explore o vasto cosmos e descubra mundos desconhecidos. Crie e gerencie
        seus próprios planetas ou apenas navegue pelas maravilhas do espaço!
      </Text>

      <TouchButton route="Planets" title="Go to Planet" />
    </View>
  );
}
