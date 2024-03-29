import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from "../components/House";

export default function Home() {
  const navigate = useNavigation();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF', }}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.InputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput 
            placeholder="O que está procudando!"
            style={styles.input}
          />
        </View>
      </View>

      {/* Menu */}
      <View style={styles.contentMenu}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      {/* Area Novidades  */}
      <ScrollView horizontal showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
        <New
          cover={require('../assets/house1.jpg')}
          name="Casa de Praia"
          description="Casa nova uma quadra do mar,lugar seguro e monitorado 24horas. "
          onPress={() => navigate.navigate('Detail')}
        />
        <New
          cover={require('../assets/house2.jpg')}
          name="Casa de BH"
          description="Casa nova uma quadra do mar,lugar seguro e monitorado 24horas. "
          onPress={() => {}}
        />
        <New
          cover={require('../assets/house3.jpg')}
          name="Casa de Pompéu"
          description="Casa nova uma quadra do mar,lugar seguro e monitorado 24horas. "
          onPress={() => {}}
        />
      </ScrollView>

      {/* Proximo de você */}
      <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: "center" }}>
        <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
        <House
          cover={require('../assets/house4.jpg')}   
        />
        <House
          cover={require('../assets/house5.jpg')}   
        />
        <House
          cover={require('../assets/house6.jpg')}   
        />
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,    
  },
  InputArea: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor: '#FFF',
    elevation: 2,
    height: 37,
    borderRadius: 10,
  },
  input: {
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    width: '90%'
  },
  contentMenu: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title: {
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    color: '#4f4a4a'
  }
});