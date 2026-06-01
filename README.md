# Home do Projeto
### Global Solution 2026.1 - Cross-Platform Application Development | FIAP

![Banner do Projeto](<img width="371" height="803" alt="image" src="https://github.com/user-attachments/assets/e9138435-01ce-4a63-9267-249bac76744e" />
)

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

<img width="378" height="744" alt="image" src="https://github.com/user-attachments/assets/4458fe6f-1bdc-479b-a8e3-0363f68fd592" />

Visão geral dos indicadores da missão: energia, temperatura, sinal e estabilidade orbital.

### Dashboard de Sensores

<img width="366" height="748" alt="image" src="https://github.com/user-attachments/assets/08238045-f229-4bab-a8a7-ea93eb496669" />

Gráfico de linha com leituras dos sensores em tempo real simulado.

### Dashboard de Energia

<img width="371" height="742" alt="image" src="https://github.com/user-attachments/assets/2b107d98-b8d3-46c9-bd28-3f8842c328cc" />

Indicadores de carga dos painéis solares e consumo dos sistemas.

### Configurações / Formulário

<img width="374" height="756" alt="image" src="https://github.com/user-attachments/assets/17d75d21-33dd-4e36-af71-99295c9d67cc" />

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
git clone [[https://github.com/Biasi06/gs-space-analytics-cross-plataform-2026.git](https://github.com/Biasi06/gs-space-analytics-cross-plataform-2026.git)](https://github.com/Biasi06/gs-space-analytics-cross-plataform-2026.git)
```
Acesse a pasta do projeto
```bash
cd gs-space-analytics-cross-plataform-2026
```
Instale as dependências
```bash
npm install
```
Inicie o projeto
```bash
npx expo start
```
Escaneie o QR Code com o Expo Go para rodar no dispositivo físico.

<img width="191" height="230" alt="image" src="https://github.com/user-attachments/assets/b3103e5c-d525-4505-b98a-060cfe984916" />

## Vídeo de Demonstração

[Clique aqui para assistir à demonstração](https://youtube.com/shorts/L966AvnJurA)

## Licença
Este projeto foi desenvolvido para fins acadêmicos — FIAP 2026.

