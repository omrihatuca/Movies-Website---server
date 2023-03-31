const usersmodel = require('./usersmodel');

const getallusers = () => {
    return usersmodel.find({});
  };

const adduser = async (obj) => {
    const us = new usersmodel(obj);
    await us.save();
    return 'Created!';
  };

module.exports = {getallusers,adduser}; 