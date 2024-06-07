import { Text, View,TouchableOpacity,TextInput,ScrollView,ImageBackground } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";
import { useState, useEffect } from "react";
import planetasRepository from "../../models/planet/PlanetRepository";
import Planet from "../../models/planet/Planet";


export default function FormularioPlaneta({ route }) {
  let {planet,edit} = route.params;

  const[name,setName]=useState("");
  const[data,setData]=useState("");
  const[cor1,setCor1]=useState("");
  const[cor2,setCor2]=useState("");
  const[populacao,setPopulacao]=useState("");
  const[localizacao,setLocalizacao]=useState("");
    const[comunicacao,setComunicacao]=useState("");
    const[governante,setGovernante]=useState("");

  const[atualizar,setAtualizar]=useState(edit);

  const navigation = useNavigation();

  useEffect(()=>{
if(edit){
  setName(planet.name);
  setData(planet.data);
  setCor1(planet.cor1);
  setCor2(planet.cor2);
  setPopulacao(planet.populacao);
    setLocalizacao(planet.localizacao);
    setComunicacao(planet.comunicacao);
    setGovernante(planet.governante);
setAtualizar(true);
}else{
  ClearInputs();
}
  },[planet,edit]);

  const UserAction = () =>{
  
    if(edit){
        planetasRepository.update(planet.id,name,data,cor1,cor2,populacao,localizacao,comunicacao,governante);
      ClearInputs();
         navigation.navigate('ListaPlanetas');
    }
    else{
       if(edit= false && nome != "" || data != "" || cor1 != "" || cor2 != "" || populacao != "" || localizacao != "" || comunicacao != "" || governante != ""){
       const newPlanet = new Planet(nome,data,cor1,cor2,populacao,localizacao,comunicacao,governante);
       planetasRepository.add(newPlanet);
       ClearInputs();
       navigation.navigate('ListaPlanetas');
       
     }else{
       alert("Preencha todos os campos");
       ClearInputs();
     }

        navigation.navigate('ListaPlanetas');
   }

  };
  const ClearInputs = () => {
    setAtualizar(false);
    edit = false;
    setName("");
    setData("");
    setCor1("");
    setCor2("");
    setPopulacao("");
    setLocalizacao("");
    setComunicacao("");
    setGovernante("");
  };

  return (
    <ScrollView>
    <ImageBackground source={require("../../../assets/estrelas.png")} style={styles.image}>
    <View style={styles.container}>
      <Text style={styles.tit} >{atualizar ?"Editar Planeta" : "Criar Planeta"}</Text>


      <TextInput
        placeholder="Digite o nome do Planeta"
        style={styles.userInput}
        onChangeText={setName}
        value={name}
      />
        <TextInput
            placeholder="Digite a data do Planeta"
            style={styles.userInput}
            onChangeText={setData}
            value={data}
        />
        <TextInput
            placeholder="Digite a cor 1 do Planeta"
            style={styles.userInput}
            onChangeText={setCor1}
            value={cor1}
        />
        <TextInput
            placeholder="Digite a cor 2 do Planeta"
            style={styles.userInput}
            onChangeText={setCor2}
            value={cor2}
        />
        <TextInput
            placeholder="Digite a população do Planeta"
            style={styles.userInput}
            onChangeText={setPopulacao}
            value={populacao}
        />
        <TextInput
            placeholder="Digite a localização do Planeta"
            style={styles.userInput}
            onChangeText={setLocalizacao}
            value={localizacao}
        />
        <TextInput
            placeholder="Digite a comunicação do Planeta"
            style={styles.userInput}
            onChangeText={setComunicacao}
            value={comunicacao}
        />
        <TextInput
            placeholder="Digite o governante do Planeta"
            style={styles.userInput}
            onChangeText={setGovernante}
            value={governante}
        />

<TouchableOpacity style={styles.botton} onPress={UserAction}>
        <Text style={styles.textbotton} >{atualizar ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>
      

      {atualizar && (
        <TouchableOpacity style={styles.botton}  onPress={ClearInputs}>
          <Text style={styles.textbotton} >Cancelar Edição</Text>
        </TouchableOpacity>
      )}
   
    </View>
    </ImageBackground>
  
    </ScrollView>
  );
}