import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User.js';
import Post from './Post.js';

const Comment = sequelize.define('Comment', {
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
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        },
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'comments',
    timestamps: false,
});

Comment.belongsTo(User, { foreignKey: 'authorId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

export default Comment;
