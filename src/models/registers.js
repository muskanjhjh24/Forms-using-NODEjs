const Mongoose = require("mongoose");
const studentSchema = new Mongoose.Schema({

    account :{
        type:String,
        required:true,

    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    name :{
        type:String,
        required:true

    },
    password :{
        type:String,
        required:true

    },
    gender :{
        type:String,
        required:true

    }
})
    
const Register = new Mongoose.model("Register" , studentSchema);

module.exports = Register;
    






