const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Vous pouvez ajouter d'autres champs selon vos besoins
});

const User = mongoose.model('User', userSchema);

module.exports = User;
