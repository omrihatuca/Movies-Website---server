const filmsmodel = require('./filmsmodels');
const membersmodel = require('./membersmodels');
const subsmodel = require('./subsmodels');


let movies ;
const getallmovies= async () =>
{
     movies=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})

    resp1.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.snumber=data.snumber;
        obj.premierd=data.premierd;
        obj.ganers=data.ganers;
        obj.imageurl=data.imageurl;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].moviekey==obj.snumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.memberkey=resp3[i].memberkey
             for (let i = 0; i < resp2.length; i++)
              {
               if (resp2[i].keynumber==obj2.memberkey)
                {
                obj2.memberid = resp2[i]._id
                obj2.membername = resp2[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            movies.push(obj);
        

      

    });

return movies;

}

const getallmoviesbyid= async (id) =>
{
     movies=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})
    let resp4 = resp1.filter(x=>x._id==id)


    resp4.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.snumber=data.snumber;
        obj.premierd=data.premierd;
        obj.ganers=data.ganers;
        obj.imageurl=data.imageurl;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].moviekey==obj.snumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.memberkey=resp3[i].memberkey
             for (let i = 0; i < resp2.length; i++)
              {
               if (resp2[i].keynumber==obj2.memberkey)
                {
                obj2.memberid = resp2[i]._id
                obj2.membername = resp2[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            movies.push(obj);
        

      

    });

return movies;

}

const getallmoviesbyname= async (name) =>
{
     movies=[];

    let resp1 = await filmsmodel.find({})
    let resp2 = await membersmodel.find({})
    let resp3 = await subsmodel.find({})
    let resp4 = resp1.filter(x=>x.name==name)


    resp4.forEach(data => 
    {
        let obj={};
        obj.id = data._id;
        obj.name=data.name;
        obj.snumber=data.snumber;
        obj.premierd=data.premierd;
        obj.ganers=data.ganers;
        obj.imageurl=data.imageurl;
        obj.subscription=[];

       for (let i = 0; i < resp3.length; i++) 
       {
       if (resp3[i].moviekey==obj.snumber)
        {
            let obj2 = {}
            obj2.id=resp3[i]._id
             obj2.date=resp3[i].date;
             obj2.memberkey=resp3[i].memberkey
             for (let i = 0; i < resp2.length; i++)
              {
               if (resp2[i].keynumber==obj2.memberkey)
                {
                obj2.memberid = resp2[i]._id
                obj2.membername = resp2[i].name
               }
                
             }
             obj.subscription.push(obj2);
       }
        
       }

     
            movies.push(obj);
        

      

    });

return movies;

}

const addmovie = async (obj) => {
    const mov = new filmsmodel(obj);
    await mov.save();
    return 'Created!';
  };
  
  const updatemovie = async (id, obj) => {
    
    await filmsmodel.findByIdAndUpdate(id, obj);
    return 'Updated!';
  };
  
  const deletemovie = async (id) => {
    let resp1 = await filmsmodel.find({})
  let num = resp1.filter(x=>x.snumber==id)

  
  
    await filmsmodel.findByIdAndDelete(num);
    await subsmodel.deleteMany({"moviekey" : id});
    return 'Deleted!';
  };



module.exports = {getallmovies,getallmoviesbyid,getallmoviesbyname,addmovie,updatemovie,deletemovie}