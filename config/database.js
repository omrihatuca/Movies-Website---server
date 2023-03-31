const mogoose=require('mongoose');

const connectDB= () => 
{mogoose.connect('mongodb://127.0.0.1:27017/finalprojectDB')};

module.exports=connectDB; 