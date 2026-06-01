# Home do Projeto
### Global Solution 2026.1 - Cross-Platform Application Development | FIAP

![Banner do Projeto](./assets/banner.png)

## Descrição
Este aplicativo é uma plataforma inteligente de análise preditiva para monitoramento de sistemas espaciais e operações orbitais simuladas. Ele resolve problemas de gestão de recursos críticos fornecendo dashboards interativos, interpretação inteligente de dados e um sistema de alertas automatizado, garantindo a tomada de decisão rápida e a segurança aeroespacial da missão.

## Equipe

| Nome | RM |
| :--- | :--- |
| Gabriel De Biasi Couto | 563247 |
| João Pedro da Silva Costa | 565031 |

## Telas do Aplicativo

### Home
Dashboard Principal
![Home](./assets/screenshots/home.png)
Visão geral dos indicadores da missão: energia, temperatura, sinal e estabilidade orbital.

### Dashboard de Sensores
![Sensores](./assets/screenshots/sensores.png)
Gráfico de linha com leituras dos sensores em tempo real simulado.

### Dashboard de Energia
![Energia](./assets/screenshots/energia.png)
Indicadores de carga dos painéis solares e consumo dos sistemas.

### Configurações / Formulário
![Config](./assets/screenshots/configuracoes.png)
Formulário de configuração dos limiares de alerta com validação.

## Funcionalidades

- [x] Dashboard com indicadores em tempo real (simulado)
- [x] Sistema de alertas automáticos por limiar critico
- [x] Persistência de configurações com AsyncStorage
- [x] Navegação com Expo Router (Tabs Stack)
- [x] Context API para estado global da missão
- [x] Formulário de configuração com validação

## Tecnologias

- React Native + Expo
- Expo Router
- AsyncStorage
- Context API
- TypeScript

## Como Executar

### Pré-requisitos
- Node.js instalado
- Expo CLI: `npm install -g expo-cli`
- Expo Go instalado no celular (iOS ou Android)

### Instalação
Clone o repositório
```bash
git clone [https://github.com/Biasi06/gs-space-analytics-cross-plataform-2026.git](https://github.com/Biasi06/gs-space-analytics-cross-plataform-2026.git)
