const mongoose=require('mongoose');

const membersschema= new mongoose.Schema(
    {
       
       name : String,
       city : String,
       email : String,
       keynumber : Number,
       subscription : Array,
     


    },
    {versionKey:false}
);

const mem= mongoose.model('member',membersschema);
module.exports=mem;