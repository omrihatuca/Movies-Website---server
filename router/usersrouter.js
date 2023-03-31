const express=require('express');
const usersbl=require('../models/usersBL');

const router= express.Router();

router.get('/', async (req,resp)=>
{
    let us= await usersbl.getallusers();
    return resp.json(us);

})

router.post('/', async (req, resp) => {
    const obj = req.body;
    const result = await usersbl.adduser(obj);
    resp.json(result);
  });

module.exports = router;