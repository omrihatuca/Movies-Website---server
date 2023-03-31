
const mongoose=require('mongoose');

const subsschema= new mongoose.Schema(
    {
       
       moviekey : String,
       memberkey : Number,
       date : String,
       
     


    },
    {versionKey:false}
);

const sub= mongoose.model('sub',subsschema);
module.exports=sub;