import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import Planet from "../../models/planet/Planet";
import PlanetRepository from "../../models/planet/PlanetRepository"; // Importar o repositório do planeta
import { useNavigation } from "@react-navigation/native";

const planetsList = new PlanetRepository();

let planetId = 1;

export default function Planets( route) {
  const { data } = route.params;
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [date, setdate] = useState("");
  const [cor1, setCor1] = useState("");
  const [cor2, setCor2] = useState("");
  const [populacao, setPopulacao] = useState("");
  const [natural, setNatural] = useState("");
  const [humans, setHumans] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [comunicacao, setComunicacao] = useState("");
  const [governante, setGovernante] = useState("");
  const [allPlanets, setAllPlanets] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);

  if (data) {
    setName(data.name);
    setdate(data.date);
    setCor1(data.cor1);
    setCor2(data.cor2);
    setPopulacao(data.populacao);
    setNatural(data.natural);
    setHumans(data.humans);
    setLocalizacao(data.localizacao);
    setComunicacao(data.comunicacao);
    setGovernante(data.governante);
    setUpdateActive(true);
  }


  const createPlanet = () => {
    const newPlanet = new Planet(
      planetId++,
      name,
      date,
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

  const Delete = (id) => {
    planetsList.delete(id);
    setAllPlanets(planetsList.getAll());
  };

  const Update = (id) => {
    planetsList.update(id);
    setAllPlanets(planetsList.getAll());
  };

  const clearInputs = () => {
    setName("");
    setdate("");
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
    <ScrollView>
      <View style={styles.container}>
        <Title title="Planets" />
        <Image
          source={require("../../../assets/criação.jpg")}
          style={styles.backgroundImage}
        />

        <View>
          <TextInput
            placeholder="Digite o nome do seu planeta"
            style={styles.userInput}
            onChangeText={setName}
            value={name}
          />
          <TextInput
            placeholder="Digite a date do seu planeta"
            style={styles.userInput}
            onChangeText={setdate}
            value={date}
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

          {updateActive ? (
            <TouchableOpacity style={styles.button} onPress={() => Update()}>
              <Text>Atualizar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => createPlanet()}
            >
              <Text>Adicionar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View>
          {allPlanets.length > 0 ? (
            allPlanets.map((planet) => (
              <TouchableOpacity
                key={planet.id}
                onPress={() => navigation.navigate("Users", { date: planet })}
              >
                <Text style={styles.planetName}>{planet.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noPlanets}>Não há planetas cadastrados</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
