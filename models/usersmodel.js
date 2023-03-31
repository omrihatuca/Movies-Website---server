
const mongoose=require('mongoose');

const usersschema= new mongoose.Schema(
    {
       
       name : String,
       username : String,
       password : String,
       role : String
       
    },
    {versionKey:false}
);

const us= mongoose.model('webuser',usersschema);
module.exports=us;