import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMission } from '../../context/MissionContext';

export default function ConfigScreen() {
  const { limiteTemp, setLimiteTemp } = useMission();
  const [inputValue, setInputValue] = useState(limiteTemp.toString());
  const [erro, setErro] = useState('');

  const salvarConfiguracao = async () => {
    const novoLimite = Number(inputValue);
    
    // Validação do formulário
    if (!inputValue || isNaN(novoLimite) || novoLimite <= 0) {
      setErro('Por favor, insira um limite válido (número positivo).');
      return;
    }
    
    try {
      await AsyncStorage.setItem('@temp_limite', novoLimite.toString());
      setLimiteTemp(novoLimite);
      setErro('');
      Alert.alert('Sucesso', 'Parâmetros atualizados no sistema!');
    } catch (e) {
      Alert.alert('Erro', 'Falha ao salvar configuração no armazenamento.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parâmetros da Missão</Text>
      
      <Text style={styles.label}>Limite Crítico de Temperatura (°C):</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="numeric"
        placeholder="Ex: 35"
        placeholderTextColor="#666"
      />
      
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}
      
      <View style={styles.buttonContainer}>
        <Button title="Salvar Configurações" onPress={salvarConfiguracao} color="#00ffcc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  label: { fontSize: 16, color: '#ccc', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#333', backgroundColor: '#111', color: '#fff', padding: 15, borderRadius: 8, fontSize: 16, marginBottom: 10 },
  errorText: { color: '#ff4444', marginBottom: 15 },
  buttonContainer: { marginTop: 10 }
});