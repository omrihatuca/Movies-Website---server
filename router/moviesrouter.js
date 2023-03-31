const express=require('express');
const moviesbl=require('../models/moviesBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let name = req.query.name;
    if(name)
    {
      let mov = await moviesbl.getallmoviesbyname(name);
      return  resp.json(mov);
    }
else 
{
    let movies= await moviesbl.getallmovies();
    return resp.json(movies);
}

    
})

router.get('/:id', async (req, resp) => {
    const id = req.params.id;
    const mov = await moviesbl.getallmoviesbyid(id);
    resp.json(mov);
  });


  router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await moviesbl.addmovie(obj);
    resp.json(result);
  });
  
  router.put('/:id', async (req, resp) => {
    const id = req.params.id;
    const obj = req.body;
    const result = await moviesbl.updatemovie(id, obj);
    resp.json(result);
  });
  
  router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const result = await moviesbl.deletemovie(id);
    resp.json(result);
  });

module.exports = router;