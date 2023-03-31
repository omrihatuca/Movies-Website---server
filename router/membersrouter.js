const express=require('express');
const membersbl=require('../models/membersBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let name = req.query.name;
    if(name)
    {
      let mem = await membersbl.getallmembersbyname(name);
      return  resp.json(mem);
    }
else
{
    let members= await membersbl.getallmembers();
    return resp.json(members);
}
    
})

router.get('/:id', async (req, resp) => {
    const id = req.params.id;
    const mem = await membersbl.getallmembersbyid(id);
    resp.json(mem);
  });

  router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await membersbl.addmemeber(obj);
    resp.json(result);
  });
  
  router.put('/:id', async (req, resp) => {
    const id = req.params.id;
    const obj = req.body;
    const result = await membersbl.updatemember(id, obj);
    resp.json(result);
  });
  
  router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const result = await membersbl.deletemember(id);
    resp.json(result);
  });

module.exports = router;