const  Model  = require("mongoose");
const ventas = require("../models/ventas");


function saveventa(req,res){
    var myventa = new ventas(req.body);

    myventa.save((err,result)=>{
        res.status(200).send({message:result});
});
}
function buscarData(req,res){
    var idventas=req.params.id;
    ventas.findById(idventas).exec((err,result)=>{
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
    var idventas=req.params.idb;
    if(!idventas){
        var result=ventas.find({}).sort('descripcion')
    }else{
        var result=ventas.find({ventas : idventas}).sort('descripcion')
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
async function updateventas(req,res){
    try{
        const id = req.params.id;
        const data = req.body;
        const opcion = {new:true};
        const resultado= await ventas.findByIdAndUpdate(id,data,opcion);
        res.send(resultado);

    }catch(error){
        res.status(400).json({message:error.message})

    }
}


async function deleteventas(req,res){ 
    try{
        const id=req.params.id;
        const data=await ventas.findByIdAndDelete(id);
        res.send('Eliminado');

    }catch(error){
        res.status(400).json({
            message:error.message
        })
    }

}

module.exports={
    saveventa,
    buscarData,
    listarAllData,
    deleteventas,
    updateventas
    
}