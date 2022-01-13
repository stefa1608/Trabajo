const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    proveedor:{
        type: String,
        required: true,
        trim: true
    },
    precio:{
        type: Number,
        required: true,
        trim:true,
    },
    codigo:{
        type: String,
        required:true,
        unique: true,
        trim: true
    }
},{
    timestamps:true
})
const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type : String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
})
module.exports= userSchema;
module.exports=productSchema;