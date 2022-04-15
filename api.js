const express= require('express')

const app= express()

const port= 3000

app.get("/",(req,res)=>{
    res.status(200).send('nueva api')
})

app.post("/",(req,res)=>{
    res.status(201).send('creando')
})

app.put("/:id",(req,res)=>{
    res.sendStatus(204)
})

app.patch("/:id",(req,res)=>{
    res.sendStatus(204)
})

app.delete("/:id",(req,res)=>{
    res.sendStatus(204)
})

app.listen(port,()=>{
    console.log('arrancando la publicacion')
})