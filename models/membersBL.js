const filmsmodel = require('./filmsmodels');
const mem = require('./membersmodels');
const membersmodel = require('./membersmodels');
const subsmodel = require('./subsmodels');


let members ;
const getallmembers= async () =>
{
     members=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})

    resp2.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.keynumber=data.keynumber;
        obj.city=data.city;
        obj.email=data.email;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].memberkey==obj.keynumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.moviekey=resp3[i].moviekey
             for (let i = 0; i < resp1.length; i++)
              {
               if (resp1[i].snumber==obj2.moviekey)
                {
                obj2.movieid = resp1[i]._id
                obj2.moviename = resp1[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            members.push(obj);
        

      

    });

return members;

}


const getallmembersbyid= async (id) =>
{
     members=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})
    let resp4 = resp2.filter(x=>x._id==id)

    resp4.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.keynumber=data.keynumber;
        obj.city=data.city;
        obj.email=data.email;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].memberkey==obj.keynumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.moviekey=resp3[i].moviekey
             for (let i = 0; i < resp1.length; i++)
              {
               if (resp1[i].snumber==obj2.moviekey)
                {
                obj2.movieid = resp1[i]._id
                obj2.moviename = resp1[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            members.push(obj);
        

      

    });

return members;

}


const getallmembersbyname= async (name) =>
{
     members=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})
    let resp4 = resp2.filter(x=>x.name==name)

    resp4.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.keynumber=data.keynumber;
        obj.city=data.city;
        obj.email=data.email;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].memberkey==obj.keynumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.moviekey=resp3[i].moviekey
             for (let i = 0; i < resp1.length; i++)
              {
               if (resp1[i].snumber==obj2.moviekey)
                {
                obj2.movieid = resp1[i]._id
                obj2.moviename = resp1[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            members.push(obj);
        

      

    });

return members;

}


const addmemeber = async (obj) => {
    const mem = new membersmodel(obj);
    await mem.save();
    return 'Created!';
  };
  
  const updatemember = async (id, obj) => {
    
    await membersmodel.findByIdAndUpdate(id, obj);
    return 'Updated!';
  };
  
  const deletemember = async (id) => {
    let resp1 = await membersmodel.find({})
  let num = resp1.filter(x=>x.keynumber==id)

  

    await membersmodel.findByIdAndDelete(num);
    await subsmodel.deleteMany({"memberkey" : id});
    return 'Deleted!';
  };


module.exports = {getallmembers,getallmembersbyid,getallmembersbyname,addmemeber,updatemember,deletemember}