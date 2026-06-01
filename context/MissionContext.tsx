import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipagem dos dados da missão
type MissionData = {
  temperatura: number;
  energia: number;
  sinal: number;
};

type MissionContextType = {
  data: MissionData;
  alertas: string[];
  limiteTemp: number;
  setLimiteTemp: (limite: number) => void;
};

const MissionContext = createContext<MissionContextType | undefined>(undefined);

export const MissionProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<MissionData>({ temperatura: 22, energia: 100, sinal: 100 });
  const [alertas, setAlertas] = useState<string[]>([]);
  const [limiteTemp, setLimiteTemp] = useState<number>(35); // Limite padrão

  // Carrega o limite salvo no AsyncStorage ao iniciar
  useEffect(() => {
    const loadConfig = async () => {
      const savedLimit = await AsyncStorage.getItem('@temp_limite');
      if (savedLimit) setLimiteTemp(Number(savedLimit));
    };
    loadConfig();
  }, []);

  // Simulação de dados a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = {
          temperatura: prev.temperatura + (Math.random() * 4 - 1.5), // Tende a subir um pouco
          energia: Math.max(0, prev.energia - Math.random() * 2),
          sinal: Math.max(0, 100 - Math.random() * 5),
        };
        
        // Sistema de Alertas baseado no limite configurado
        if (newData.temperatura > limiteTemp) {
          setAlertas(prevAlerts => {
            const newAlert = `ALERTA: Temperatura em ${newData.temperatura.toFixed(1)}°C (Acima de ${limiteTemp}°C)`;
            // Mantém apenas os 5 últimos alertas
            return [newAlert, ...prevAlerts].slice(0, 5); 
          });
        }
        
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [limiteTemp]);

  return (
    <MissionContext.Provider value={{ data, alertas, limiteTemp, setLimiteTemp }}>
      {children}
    </MissionContext.Provider>
  );
};

export const useMission = () => {
  const context = useContext(MissionContext);
  if (!context) throw new Error('useMission deve ser usado dentro de um MissionProvider');
  return context;
};