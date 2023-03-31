const express=require('express');
const subsbl=require('../models/subsBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let sub= await subsbl.getallsubss();
    return resp.json(sub);

})

router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await subsbl.addsub(obj);
    resp.json(result);
  });

  router.delete('/:id', async (req, resp) => {
    const id = req.params.id;
    const result = await subsbl.deletesubs(id);
    resp.json(result);
  });

module.exports = router;