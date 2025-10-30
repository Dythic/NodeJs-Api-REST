# Démarrage local: App Node.js + DB Postgres (Docker seulement pour la DB)

Ce projet se lance en local avec Node.js pour l’application, et Docker Desktop/WSL uniquement pour la base PostgreSQL.

## 1) Lancer PostgreSQL avec Docker (Docker ne gère que la DB)

1. Définir le mot de passe dans l'environnement (PowerShell/Bash):
   - Bash/WSL: `export POSTGRES_PASSWORD="votre_mot_de_passe"`
   - PowerShell: `$env:POSTGRES_PASSWORD="votre_mot_de_passe"`

2. Démarrer la DB:
   - `docker compose up -d`

3. Paramètres de connexion:
   - Host: `localhost`
   - Port: `5432`
   - User: `postgres`
   - DB: `example`
   - Password: valeur de `POSTGRES_PASSWORD`

4. Arrêter la DB:
   - `docker compose down`

Les données sont persistées dans le volume `db-data`.

## 2) Lancer l’application Node.js en local

1. Installer les dépendances:
   - `npm ci`

2. Configurer les variables d’environnement (exemple `.env`):
   - `JWT_SECRET="change-me"`
   - `DB_DIALECT=postgres`
   - `DB_HOST=localhost`
   - `DB_PORT=5432`
   - `DB_USER=postgres`
   - `DB_NAME=example`
   - `DB_PASSWORD=<le_mot_de_passe_utilisé_pour_POSTGRES_PASSWORD>`
   - Optionnel: `CORS_ORIGINS=http://localhost:3000`
   - Optionnel: `AUTH_USE_COOKIES=true`

3. Démarrer l’app:
   - Dev: `npm run dev`
   - Prod local: `npm start`

4. Endpoints utiles:
   - Health: `GET /healthz`, `GET /readyz`
   - API: `http://localhost:3000/api/...`


## Utilisation

- Le serveur démarrera sur `http://localhost:3000`.
- Utilisez des outils comme Postman ou cURL pour interagir avec l'API.

## API Endpoints

### Authentification
- POST `/api/users` : Inscription d'un nouvel utilisateur.
- POST `/api/users/login` : Connexion d'un utilisateur.

### Utilisateurs
- GET `/api/users/me` : Récupérer les informations de l'utilisateur connecté.
- PUT `/api/users/me` : Mettre à jour l'utilisateur connecté.
- DELETE `/api/users/me` : Supprimer l'utilisateur connecté.
