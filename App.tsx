import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const UserSolicitudApp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [height, setHeight] = useState(''); 
  const [weight, setWeight] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ingrese su nombre"
      />

      <Text style={styles.label}>Apellidos:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Ingrese sus apellidos"
      />

      <Text style={styles.label}>Año de nacimiento:</Text>
      <TextInput
        style={styles.input}
        value={birthYear}
        onChangeText={setBirthYear}
        placeholder="Ingrese su año de nacimiento"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Estatura (cm):</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Ingrese su estatura en cm"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Ingrese su peso en kg"
        keyboardType="numeric"
      />

      <View style={styles.DatosContainer2}>
        <Text style={styles.Datos}>Nombre: {name}</Text>
        <Text style={styles.Datos}>Apellidos: {lastName}</Text>
        <Text style={styles.Datos}>Año de nacimiento: {birthYear}</Text>
        <Text style={styles.Datos}>Estatura: {height} cm</Text>
        <Text style={styles.Datos}>Peso: {weight} kg</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#C3CFEC",
    width:"100%",
    height:"100%",
    // flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10
    // borderWidth: 20, 
    // borderColor: 'gray',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  DatosContainer2: {
    marginTop: 20,
    width:"90%",
    // backgroundColor:"red"
  },
  Datos: {
    fontSize: 18,
    marginBottom: 5,
    backgroundColor:"#9CACD4",
    borderRadius:10,
    padding: 5,
  },
});

export default UserSolicitudApp;
