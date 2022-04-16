const express= require('express')

const mongoose= require('mongoose')

const user= require('./user.controller')

const app= express()

const port= 3000

app.use(express.json())

mongoose.connect('mongodb+srv://agu6692:UhA9XaWIimIrDHex@cluster0.6ujto.mongodb.net/PedidosDatabase?retryWrites=true&w=majority')


app.get("/",user.list)
app.post("/",user.create)
app.get("/:id",user.get)
app.put("/:id",user.update)
app.patch("/:id",user.update)
app.delete("/:id",user.destroy)

app.get('*',(req,res)=>{
    res.status(404).send("esta pagina no existe")
})
app.post('*',(req,res)=>{
    res.status(404).send("esta pagina no existe")
})

app.listen(port,()=>{
    console.log('arrancando la publicacion')
})