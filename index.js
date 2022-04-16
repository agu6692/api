const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://agu6692:UhA9XaWIimIrDHex@cluster0.6ujto.mongodb.net/PedidosDatabase?retryWrites=true&w=majority')

const User= mongoose.model('User',{
    username: String,
    edad: Number,

})

const crear= async()=>{
    const user = new User({username:"bizco",edad: 29})
    const savedUser =await user.save()
    console.log(savedUser)
}

//crear()

const buscarTodo= async()=>{
    const users=await User.find()
    console.log(users)
}

//buscarTodo()

const buscar= async()=>{
    const user= await User.find({username:"bizco"})
    console.log(user)
}

//buscar()

const buscarUno= async()=>{
    const user= await User.findOne({username:"bizco"})
    console.log(user)
}

//buscarUno()

const actualizar= async()=>{
    const user= await User.findOne({username:"bizco"})
    console.log(user)
    user.edad = 28
    await user.save()
}

//actualizar()

const eliminar= async()=>{
    const user= await User.findOne({username:"bizco"})
    console.log(user)
    if(user){
    await user.remove()
    }
}

eliminar()



