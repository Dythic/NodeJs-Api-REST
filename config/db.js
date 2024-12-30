import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME || 'example', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD || 'mysecurepassword', {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
});

const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion réussie à la base de données PostgreSQL');
    } catch (err) {
        console.error('Erreur de connexion à PostgreSQL:', err.message);
        process.exit(1); // Arrête l'application en cas d'erreur
    }
};

export { connectDb };
export default sequelize;
