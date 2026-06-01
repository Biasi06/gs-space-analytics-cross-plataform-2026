import { View, Text, StyleSheet } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { Ionicons } from '@expo/vector-icons';

export default function SensoresScreen() {
  const { data, limiteTemp } = useMission();
  
  const statusTemperatura = data.temperatura > limiteTemp ? 'CRÍTICO' : 'NORMAL';
  const corStatus = data.temperatura > limiteTemp ? '#ff4444' : '#00ffcc';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Sensores</Text>
      
      <View style={styles.card}>
        <View style={styles.header}>
          <Ionicons name="thermometer" size={24} color={corStatus} />
          <Text style={[styles.status, { color: corStatus }]}>{statusTemperatura}</Text>
        </View>
        <Text style={styles.label}>Temperatura Atual:</Text>
        <Text style={styles.value}>{data.temperatura.toFixed(2)} °C</Text>
        <Text style={styles.subtext}>Limite de Segurança: {limiteTemp} °C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  card: { backgroundColor: '#1a1a2e', padding: 20, borderRadius: 10, borderWidth: 1, borderColor: '#333' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  status: { fontSize: 16, fontWeight: 'bold' },
  label: { fontSize: 16, color: '#aaa' },
  value: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginVertical: 10 },
  subtext: { fontSize: 14, color: '#666' }
});