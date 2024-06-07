// PlanetListScreen.js
import React, { useState, useEffect } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { View, Text,ScrollView,TouchableOpacity } from 'react-native';
import planetasRepository from '../../models/planet/PlanetRepository';
import styles from './styles';

export default function ListaPlanetas() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [todosUsuarios, setTodosUsuarios] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetasRepository.getAll();
      setTodosUsuarios(planets);
    }
  }, [isFocused]);
console.log("todosUsuarios",todosUsuarios)
  return (
    <ScrollView>
    
    <View style={styles.container}>
      <Text  style={styles.tit}>Lista de Planetas:</Text>

      {todosUsuarios.length > 0 ? (
        <View style={styles.help} >
          {todosUsuarios.map((planet) => (
            <View style={styles.help1} key={planet.id} >
              <View >
              <TouchableOpacity
                style={styles.botton}
                  onPress={() => navigation.navigate("DetalhesPlanets", { data: planet })}
                >
                <Text style={styles.text}>{planet.name}</Text>
                </TouchableOpacity>
              </View>
             
            </View>
          ))}
        </View>
        
      
      ) : (
        
        <Text style={styles.tit}>Nenhum planeta cadastrado</Text>
      
      )}
    </View>
   
    </ScrollView>
  );
}