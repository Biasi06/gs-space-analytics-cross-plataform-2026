import { View, Text, StyleSheet } from 'react-native';
import { useMission } from '../../context/MissionContext';
import { Ionicons } from '@expo/vector-icons';

export default function EnergiaScreen() {
  const { data } = useMission();

  // Lógica de status visual
  const statusEnergia = data.energia < 20 ? 'CRÍTICO' : 'ESTÁVEL';
  const corStatus = data.energia < 20 ? '#ff4444' : '#00ffcc';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Energia</Text>

      <View style={styles.card}>
        <View style={styles.header}>
          <Ionicons name="battery-charging" size={24} color={corStatus} />
          <Text style={[styles.status, { color: corStatus }]}>{statusEnergia}</Text>
        </View>
        
        <Text style={styles.label}>Carga do Sistema:</Text>
        <Text style={styles.value}>{data.energia.toFixed(1)} %</Text>
        
        {/* Barra de progresso visual */}
        <View style={styles.barraFundo}>
          <View style={[styles.barraPreenchimento, { width: `${data.energia}%`, backgroundColor: corStatus }]} />
        </View>
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
  barraFundo: { height: 10, backgroundColor: '#333', borderRadius: 5, marginTop: 10, overflow: 'hidden' },
  barraPreenchimento: { height: '100%', borderRadius: 5 }
});