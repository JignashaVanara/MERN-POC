import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    age: { type: Number },
    contact: { 
        type: Number,
        minlength: 10,
        maxlength: 10,
    },
    country: { type: String }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;