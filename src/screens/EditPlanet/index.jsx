import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import PlanetasRepository from '../../models/planet/PlanetRepository'; 

const planetasRepository = new PlanetasRepository();

const DetalhesEEdicaoDoPlaneta = ({ route, navigation }) => {
  const { planet } = route.params;
  const [editedPlanet, setEditedPlanet] = useState({ ...planet });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    planetasRepository.update(editedPlanet.id, editedPlanet);
    navigation.navigate('ListaPlanetas');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleBackToList = () => {
    navigation.navigate('ListaPlanetas');
  };

  const handleChange = (name, value) => {
    setEditedPlanet({ ...editedPlanet, [name]: value });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={editedPlanet.name}
              onChangeText={(text) => handleChange('name', text)}
            />
            <TextInput
              style={styles.input}
              value={editedPlanet.data}
              onChangeText={(text) => handleChange('data', text)}
            />
            {/* Adicione outros campos de edição aqui */}

            <Button title="Salvar" onPress={handleSave} />
          </>
        ) : (
          <>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.text}>{planet.name}</Text>
            <Text style={styles.label}>Data:</Text>
            <Text style={styles.text}>{planet.data}</Text>
            {/* Adicione outros detalhes do planeta aqui */}

            <Button title="Editar" onPress={handleEdit} />
            <Button title="Voltar para a lista" onPress={handleBackToList} />
          </>
        )}
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default DetalhesEEdicaoDoPlaneta;
