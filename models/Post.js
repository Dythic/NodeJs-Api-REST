import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'posts',
    timestamps: false,
});

Post.belongsTo(User, { foreignKey: 'authorId' });

export default Post;
