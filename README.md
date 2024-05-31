# 🐉 Pokémon Battle Simulator - Backend

Bienvenue dans la partie backend de notre simulateur de combat Pokémon ! Ce projet utilise React pour le frontend et une base de données pour stocker toutes les informations des Pokémon, capacités, types et mouvements.

## 🛠️ Fonctionnalités

- **🔄 Communication Backend-Base de Données** : Vérifiez si le backend communique correctement avec la base de données.
- **🔍 Requêtes Simples** : Utilisez des commandes simples pour récupérer les informations :
  - `/pokemon`
  - `/abilities`
  - `/types`
  - `/moves`

## 📦 Structure du Projet

/backend
├── src
│ ├── controllers
│ ├── models
│ ├── routes
│ └── services
├── config
├── tests
└── README.md


## 🚀 Lancer le Projet

Pour démarrer le backend localement, suivez ces étapes :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/pokemon-battle-simulator-backend.git
    ```
2. Installez les dépendances :
    ```bash
    cd pokemon-battle-simulator-backend
    npm install
    ```
3. Configurez votre base de données dans le fichier `.env`.
4. Démarrez le serveur :
    ```bash
    npm start
    ```

## 📝 Utilisation

Pour vérifier la communication avec la base de données, utilisez les commandes suivantes dans votre navigateur ou outil de requêtes API préféré :

- `http://localhost:3000/api/pokemon` - Pour obtenir les informations sur les Pokémon.
- `http://localhost:3000/api/abilities` - Pour obtenir les informations sur les capacités.
- `http://localhost:3000/api/types` - Pour obtenir les informations sur les types.
- `http://localhost:3000/api/moves` - Pour obtenir les informations sur les mouvements.

## 🧩 Exemple de Requête

```http
GET /api/pokemon

## Réponse :
[
  {
    "id": 1,
    "name": "Bulbasaur",
    "type": ["Grass", "Poison"],
    "abilities": ["Overgrow", "Chlorophyll"]
  },
  ...
]

👾 À Propos du Projet
