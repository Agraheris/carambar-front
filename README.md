# 🍬 Carambar - Frontend

Application web React pour consulter et gérer des blagues Carambar avec un design ludique et interactif.

## 📋 Description

Interface utilisateur moderne qui permet de :
- Afficher une blague aléatoire avec effet de rotation (comme un vrai papier Carambar)
- Consulter la liste complète des blagues
- Voir le détail d'une blague
- Créer de nouvelles blagues

## 🛠️ Stack technique

- **Framework** : React 18
- **Build tool** : Vite
- **Routing** : React Router DOM v6
- **Styling** : CSS custom (thème Carambar)
- **HTTP Client** : Fetch API

## 🎨 Fonctionnalités

### Page d'accueil
- Bouton pour afficher une blague aléatoire
- Carte interactive avec effet rotation 180° (rappel du papier Carambar)
- Design aux couleurs Carambar (jaune/orange/rouge)

### Liste des blagues
- Affichage en grille responsive (1 à 4 colonnes selon la taille d'écran)
- Cartes cliquables menant au détail

### Détail d'une blague
- Affichage question/réponse
- Effet rotation identique à la page d'accueil
- Bouton retour vers la liste

### Création de blague
- Formulaire avec validation
- Ajout en temps réel à la base de données

## 🚀 Installation et lancement

### Prérequis
- Node.js 20+ installé
- npm ou yarn
- API backend lancée (voir carambar-api)

### Installation
```bash
# Cloner le repo
git clone https://github.com/Agraheris/carambar-front.git
cd carambar-front

# Installer les dépendances
npm install
```

### Configuration
Créer un fichier `.env` à la racine :
```env
VITE_API_URL=http://localhost:3000
```

### Lancement
```bash
# Mode développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

Le site démarre sur **http://localhost:5173**

## 📁 Structure du projet
```
carambar-front/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── JokeCard.jsx
│   │   └── JokeCard.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── JokesList.jsx
│   │   ├── JokeDetail.jsx
│   │   └── CreateJoke.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
└── package.json
```

## 📱 Responsive Design

L'application s'adapte à toutes les tailles d'écran :
- **Mobile** (< 768px) : 1 colonne
- **Tablette** (768px - 1023px) : 2 colonnes
- **Desktop** (1024px - 1439px) : 3 colonnes
- **Grand écran** (≥ 1440px) : 4 colonnes

## 🎨 Design

Thème inspiré des emballages Carambar :
- **Couleurs** : Jaune (#FFD700), Orange (#FFA500), Rouge (#E63946)
- **Effet** : Rotation 180° des cartes (comme retourner un papier Carambar)
- **Typographie** : Police Arial pour la lisibilité

## 🌐 Déploiement

**Site déployé sur** : [GitHub Pages - À venir]

**API backend** : [Render.com - À venir]

## 👨‍💻 Auteur

**Clément** - Projet de sélection CDA Wild Code School 2025

## 📝 Licence

Projet éducatif - Wild Code School
