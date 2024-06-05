// ListaPlanetas.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PlanetasRepository from '../../models/planet/PlanetRepository'; // Importe o PlanetasRepository
import planetsData from '../../data/Planetas';

const planetasRepository = new PlanetasRepository();
planetasRepository.initializeMockData(planetsData);
const ListaPlanetas = ({ navigation }) => {
  const planets = planetasRepository.getAll(); // Obtenha todos os planetas do repositório

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lista de Planetas</Text>
      <View style={styles.planetsContainer}>
        {planets.map(planet => (
          <TouchableOpacity
            key={planet.id}
            onPress={() => navigation.navigate('EditPlanet', { planet })}
            style={styles.planetCard}
          >
            <Text style={styles.planetName}>{planet.name}</Text>
            <Text>Data: {planet.data}</Text>
            <Text>Cor 1: {planet.cor1}</Text>
            <Text>Cor 2: {planet.cor2}</Text>
            <Text>População: {planet.populacao}</Text>
            <Text>Natural: {planet.natural ? 'Sim' : 'Não'}</Text>
            <Text>Humanos: {planet.humans ? 'Sim' : 'Não'}</Text>
            <Text>Localização: {planet.localizacao}</Text>
            <Text>Comunicação: {planet.comunicacao}</Text>
            <Text>Governante: {planet.governante}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  planetCard: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  planetName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ListaPlanetas;
