var app = require('./app');
var mongoose =require ('mongoose');

var port = 4000;
app.listen(port, () => {
    console.log("base de datos conectada");
});

const baseDatos='mongodb://localhost:27017/topcandystore';
mongoose.connect(baseDatos);
const database = mongoose.connection;

database.on('error',(error) =>{
    console.log(error);
});

database.once('connected',()=>{
    console.log('BBDD conectada');
})
