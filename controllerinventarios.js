const  Model  = require("mongoose");
const inventarios = require("../models/inventarios");


function saveInventario(req,res){
    var myInventario = new inventarios(req.body);

    myInventario.save((err,result)=>{
        res.status(200).send({message:result});
});
}
function buscarData(req,res){
    var idinventario=req.params.id;
    inventarios.findById(idinventario).exec((err,result)=>{
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
    var idinventarios=req.params.idb;
    if(!idinventarios){
        var result=inventarios.find({}).sort('descripcion')
    }else{
        var result=inventarios.find({inventarios : idinventarios}).sort('descripcion')
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
async function updateinventario(req,res){
    try{
        const id = req.params.id;
        const data = req.body;
        const opcion = {new:true};
        const resultado= await inventarios.findByIdAndUpdate(id,data,opcion);
        res.send(resultado);

    }catch(error){
        res.status(400).json({message:error.message})

    }
}


async function deleteinventario(req,res){ 
    try{
        const id=req.params.id;
        const data=await inventarios.findByIdAndDelete(id);
        res.send('Eliminado');

    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }

}


module.exports={
    saveInventario,
    buscarData,
    listarAllData,
    updateinventario,
    deleteinventario
}