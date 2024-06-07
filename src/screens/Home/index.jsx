import React from "react";
import { View, Text, ImageBackground,ScrollView } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <ScrollView>
    <ImageBackground
    source={require("../../../assets/terra.png")}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
     
      <Title title="Bem-vindo ao Universo dos Planetas" style={styles.title} />
      <Text style={styles.text}>
        Explore o vasto cosmos e descubra mundos desconhecidos. Crie e gerencie
        seus próprios planetas ou apenas navegue pelas maravilhas do espaço!
      </Text>
      <TouchButton route="Comandante" title="O Conquistador" />
      <TouchButton route="ListaPlanetas" title="Lista de Planetas" />
      <TouchButton route="Formulario" title="Cadastre Novo Planeta" />
     
    </View>
    </ImageBackground>
    </ScrollView>
  );
}
