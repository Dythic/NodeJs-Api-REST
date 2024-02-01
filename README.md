# API RESTful pour Blog/Réseau Social

Ce projet est une API RESTful conçue pour un blog ou un réseau social. Elle permet de gérer des utilisateurs, des posts et des commentaires, avec une authentification JWT.

## Fonctionnalités

- CRUD pour les utilisateurs, les posts, et les commentaires.
- Authentification et autorisation avec JSON Web Tokens.
- Connexion à MongoDB pour la persistance des données.

## Technologies utilisées

- Node.js
- Express.js
- MongoDB avec Mongoose
- JSON Web Tokens pour l'authentification
- bcryptjs pour le hachage des mots de passe

## Installation

1. Clonez le dépôt : `git clone git@github.com:Dythic/basicRestApi.git`
2. Installez les dépendances : `npm install`
3. Configurez vos variables d'environnement : 
- Créez un fichier `.env` à la racine du projet.
- Ajoutez `MONGODB_URI=[votre_uri_mongodb]` et `JWT_SECRET=[votre_secret_jwt]`.

4. Démarrez le serveur : `npm start` or `yarn start`


## Utilisation

- Le serveur démarrera sur `http://localhost:3000`.
- Utilisez des outils comme Postman ou cURL pour interagir avec l'API.

## API Endpoints

### Authentification
- POST `/api/auth/register` : Inscription d'un nouvel utilisateur.
- POST `/api/auth/login` : Connexion d'un utilisateur.

### Utilisateurs
- GET `/api/users/:id` : Récupérer les informations d'un utilisateur.
- PUT `/api/users/:id` : Mettre à jour un utilisateur.
- DELETE `/api/users/:id` : Supprimer un utilisateur.

### Posts
- POST `/api/posts` : Créer un nouveau post.
- GET `/api/posts/:id` : Récupérer un post.
- PUT `/api/posts/:id` : Mettre à jour un post.
- DELETE `/api/posts/:id` : Supprimer un post.

