# SportSee

SportSee est une application de tableau de bord sportif permettant de suivre l’activité d’un utilisateur.
Ce projet, dans le cadre de la formation OpenClassrooms "Développeur d'application JavaScript React", a pour but d’apprendre à construire une application front-end moderne en React, d'intégrer une API externe et de représenter les données via des graphiques interactifs (**Recharts**).

## 📦 Installation

### 1. Backend (API)

Le backend est fourni par OpenClassrooms et doit être installé séparément.  
Suivre les instructions sur le repo officiel : [SportSee API](https://github.com/OpenClassrooms-Student-Center/SportSee).

Par défaut, l’API tourne sur **http://localhost:3000**.

---

### 2. Frontend (ce projet)

#### Cloner ce repository :

```bash
git clone https://github.com/aalexandree-g/P12SportSee.git
cd P12SportSee
```

#### Installer les dépendances :

```bash
npm install
```

#### Lancer le projet en mode développement :

```bash
npm run dev
```

Le site est disponible sur **http://localhost:5173**.

## 📖 Utilisation

### 1. Choisir un utilisateur

Accéder directement via l’URL, par exemple :

- http://localhost:5173/user/12
- http://localhost:5173/user/18

---

### 2. Fonctionnalités principales

Explorer les graphiques pour visualiser son activité et ses performances.

- 📊 BarChart : activité quotidienne

- 📈 LineChart : durée moyenne des sessions

- 🕸️ RadarChart : performance par catégorie

- 🌀 RadialBarChart : avancée de l'objectif
