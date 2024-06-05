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

     <TouchableOpacity onPress={navigation.navigate('Planets', { data: item })}>
      <Text>Lista Planetas</Text>
     </TouchableOpacity>
      <TouchButton route="Profile" title="Conheca o Conquistador" />
      <TouchButton route="ListaPlanetas" title="Lista de Planetas" />
      <TouchButton route="category" title="Go to Planet" />
      <TouchButton route="Cadastrar" title="Cadastre Novo Planeta" />
    </View>
  );
}
