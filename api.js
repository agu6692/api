const express= require('express')

const user= require('./user.controller')

const app= express()

const port= 3000

app.get("/",user.list)

app.post("/",user.create)

app.get("/:id",user.get)

app.put("/",user.update)

app.patch("/:id",user.update)

app.delete("/:id",user.destroy)

app.listen(port,()=>{
    console.log('arrancando la publicacion')
})