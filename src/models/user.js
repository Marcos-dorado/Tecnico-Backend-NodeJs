const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    nombre :{
        type:String,
        require:true
    },
    rol: { 
        type: String, 
        enum: ['Funcionario', 'Lider TIC', 'Tecnico'], 
        required: true 
    },
    correo:{
        type:String,
        require:true
    }
}
)

module.exports = mongoose.model('User', userSchema);
