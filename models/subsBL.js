const subsmodel = require('./subsmodels');

const getallsubss = () => {
    return subsmodel.find({});
  };

const addsub = async (obj) => {
    const sub = new subsmodel(obj);
    await sub.save();
    return 'Created!';
  };

  const deletesubs = async (id) => {
    await subsmodel.findByIdAndDelete(id)
    return 'deleted!';
  };

module.exports = {getallsubss,addsub,deletesubs}; 