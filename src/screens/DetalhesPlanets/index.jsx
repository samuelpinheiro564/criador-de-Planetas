// DetalhesDoPlaneta.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const DetalhesDoPlaneta = ({ route, navigation }) => {
  const { planet } = route.params;

  const handleEdit = () => {
    navigation.navigate('EditPlanet', { planet });
  };

  const handleBackToList = () => {
    navigation.navigate('ListaPlanetas',{planet});
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.text}>{planet.name}</Text>

      <Text style={styles.label}>Data:</Text>
      <Text style={styles.text}>{planet.data}</Text>

      <Text style={styles.label}>Cor 1:</Text>
      <Text style={styles.text}>{planet.cor1}</Text>

      <Text style={styles.label}>Cor 2:</Text>
      <Text style={styles.text}>{planet.cor2}</Text>

      <Text style={styles.label}>População:</Text>
      <Text style={styles.text}>{planet.populacao}</Text>

      <Text style={styles.label}>Natural:</Text>
      <Text style={styles.text}>{planet.natural ? 'Sim' : 'Não'}</Text>

      <Text style={styles.label}>Humanos:</Text>
      <Text style={styles.text}>{planet.humans ? 'Sim' : 'Não'}</Text>

      <Text style={styles.label}>Localização:</Text>
      <Text style={styles.text}>{planet.localizacao}</Text>

      <Text style={styles.label}>Comunicação:</Text>
      <Text style={styles.text}>{planet.comunicacao}</Text>

      <Button title="Editar" onPress={handleEdit} />
      <Button title="Voltar para a lista" onPress={handleBackToList} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default DetalhesDoPlaneta;
