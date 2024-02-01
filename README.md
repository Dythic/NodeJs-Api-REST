## Utilisation

- Le serveur démarrera sur `http://localhost:3000`.
- Utilisez des outils comme Postman ou cURL pour interagir avec l'API.
- Connecter une base de donnée Mongo

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

