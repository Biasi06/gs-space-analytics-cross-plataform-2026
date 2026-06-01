import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useMission } from '../../context/MissionContext';

export default function HomeScreen() {
  const { data, alertas } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Controle Espacial</Text>
      
      <View style={styles.card}>
        <Text style={styles.metric}>Temperatura: {data.temperatura.toFixed(1)} °C</Text>
        <Text style={styles.metric}>Energia: {data.energia.toFixed(1)} %</Text>
        <Text style={styles.metric}>Sinal: {data.sinal.toFixed(1)} %</Text>
      </View>

      <Text style={styles.subtitle}>Alertas Recentes</Text>
      <FlatList
        data={alertas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.alertCard}>
            <Text style={styles.alertText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Sistemas operando normalmente.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#000' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  subtitle: { fontSize: 18, color: '#00ffcc', marginTop: 20, marginBottom: 10 },
  card: { backgroundColor: '#1a1a2e', padding: 20, borderRadius: 10 },
  metric: { fontSize: 18, color: '#fff', marginVertical: 5 },
  alertCard: { backgroundColor: '#ff4444', padding: 15, borderRadius: 8, marginBottom: 10 },
  alertText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { color: '#888', fontStyle: 'italic' }
});