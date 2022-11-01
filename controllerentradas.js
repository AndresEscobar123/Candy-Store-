const  Model  = require("mongoose");
const entradas = require("../models/entradas");


function saveentradas(req,res){
    var myentradas = new entradas(req.body);

    myentradas.save((err,result)=>{
        res.status(200).send({message:result});
});
}
function buscarData(req,res){
    var identradas=req.params.id;
    entradas.findById(identradas).exec((err,result)=>{
        if(err){
            res.status(500).send({message :'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message :'El registro a buscar no se encuentra disponible'});
            }else{
                
                res.status(200).send({result});    
            }
        }
    });
}
function listarAllData(req,res){
    var identradas=req.params.idb;
    if(!identradas){
        var result=entradas.find({}).sort('descripcion')
    }else{
        var result=entradas.find({entradas : identradas}).sort('descripcion')
    }
    result.exec(function(err,result){
        if(err){
            res.status(500).send({message:'Error al momento de ejecutar la solicitud'});
        }else{
            if(!result){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
                res.status(200).send({result});
            }
        }
        
    });

}
async function updateentradas(req,res){
    try{
        const id = req.params.id;
        const data = req.body;
        const opcion = {new:true};
        const resultado= await entradas.findByIdAndUpdate(id,data,opcion);
        res.send(resultado);

    }catch(error){
        res.status(400).json({message:error.message})

    }
}


async function deleteentradas(req,res){ 
    try{
        const id=req.params.id;
        const data=await entradas.findByIdAndDelete(id);
        res.send('Eliminado');

    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }

}


module.exports={
    saveentradas,
    buscarData,
    listarAllData,
    updateentradas,
    deleteentradas
}