import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import Planet from "../../models/planet/Planet";
import PlanetRepository from "../../models/planet/PlanetRepository"; // Importar o repositório do planeta
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetRepository();

let planetId = 1; // Inicia o ID do planeta

export default function Planets() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [natural, setNatural] = useState("");
  const [humans, setHumans] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [comunicacao, setComunicacao] = useState("");
  const [governante, setGovernante] = useState("");
  const [allPlanets, setAllPlanets] = useState([]); // Corrigir o nome da lista de planetas

  const createPlanet = () => {
    const newPlanet = new Planet(
      planetId++,
      name,
      data,
      cor1,
      cor2,
      populacao,
      natural,
      humans,
      localizacao,
      comunicacao,
      governante || 0
    );

    planetsList.add(newPlanet);
    setAllPlanets(planetsList.getAll());

    clearInputs();

    return newPlanet;
  };

  const clearInputs = () => {
    setName("");
    setData("");
    setCor1("");
    setCor2("");
    setPopulacao("");
    setNatural("");
    setHumans("");
    setLocalizacao("");
    setComunicacao("");
    setGovernante("");
  };

  return (
    <View style={styles.container}>
      <Title title="Planets" />

      <View>
        <TextInput
          placeholder="Digite o nome do seu planeta"
          style={styles.userInput}
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Digite a data do seu planeta"
          style={styles.userInput}
          onChangeText={setData}
          value={data}
        />
        <TextInput
          placeholder="Digite a cor primária"
          style={styles.userInput}
          onChangeText={setCor1}
          value={cor1}
        />
        <TextInput
          placeholder="Digite a cor secundária"
          style={styles.userInput}
          onChangeText={setCor2}
          value={cor2}
        />
        <TextInput
          placeholder="Digite a população"
          style={styles.userInput}
          onChangeText={setPopulacao}
          value={populacao}
        />
        <TextInput
          placeholder="Digite a composição natural"
          style={styles.userInput}
          onChangeText={setNatural}
          value={natural}
        />
        <TextInput
          placeholder="Digite o número de humanos"
          style={styles.userInput}
          onChangeText={setHumans}
          value={humans}
        />
        <TextInput
          placeholder="Digite a localização"
          style={styles.userInput}
          onChangeText={setLocalizacao}
          value={localizacao}
        />
        <TextInput
          placeholder="Digite o tipo de comunicação"
          style={styles.userInput}
          onChangeText={setComunicacao}
          value={comunicacao}
        />
        <TextInput
          placeholder="Digite o governante"
          style={styles.userInput}
          onChangeText={setGovernante}
          value={governante}
        />

        <TouchableOpacity style={styles.button} onPress={createPlanet}>
          <Text>Criar Planeta</Text>
        </TouchableOpacity>
      </View>

      <View>
        {allPlanets.length > 0 ? (
          allPlanets.map((planet) => (
            <TouchableOpacity
              key={planet.id}
              onPress={() => navigation.navigate("Profile", { data: planet })}
            >
              <Text>{planet.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Não há planetas cadastrados</Text>
        )}
      </View>

      {/* Botões de navegação não foram alterados */}
      <TouchButton route="Category" title="Go to Category" />
      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
