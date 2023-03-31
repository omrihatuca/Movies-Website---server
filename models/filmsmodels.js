const mongoose=require('mongoose');

const filmsschema= new mongoose.Schema(
    {
       
       snumber : String,
       name : String,
       premierd : String,
       ganers : String,
       imageurl : String,
       subscription : Array,
     


    },
    {versionKey:false}
);

const film= mongoose.model('film',filmsschema);
module.exports=film;