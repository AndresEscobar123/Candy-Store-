const  Model  = require("mongoose");
const clientes = require("../models/clientes");



function saveclientes(req,res){
    var mycliente = new clientes(req.body);

    mycliente.save((err,result)=>{
        res.status(200).send({message:result});
});
}
function buscarData(req,res){
    var idcliente=req.params.id;
    clientes.findById(idcliente).exec((err,result)=>{
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
    var idcliente=req.params.idb;
    if(!idcliente){
        var result=clientes.find({}).sort('descripcion')
    }else{
        var result=clientes.find({clientes : idcliente}).sort('descripcion')
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
async function updatecliente(req,res){
    try{
        const id = req.params.id;
        const data = req.body;
        const opcion = {new:true};
        const resultado= await clientes.findByIdAndUpdate(id,data,opcion);
        res.send(resultado);

    }catch(error){
        res.status(400).json({message:error.message})

    }
}
async function deletecliente(req,res){ 
    try{
        const id=req.params.id;
        const data=await clientes.findByIdAndDelete(id);
        res.send('Eliminado');
        

    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }

}
module.exports={
    saveclientes,
    buscarData,
    listarAllData,
    updatecliente,
    deletecliente
    
}