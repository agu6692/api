const User={
    list: (req,res)=>{
        res.status(200).send('todas las colecciones')
    },
    get: (req,res)=>{
        res.status(200).send('un objeto de la coleccion')
    },
    create: (req,res)=>{
        res.status(201).send('creando coleccion')
    },
    update: (req,res)=>{
        res.status(204).send('aztualizando')
    },
    destroy: (req,res)=>{
        res.status(204).send('destruyendo coleccion')
    }
}

module.exports= User