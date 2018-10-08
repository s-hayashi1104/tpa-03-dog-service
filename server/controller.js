const dog = require('./dog');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (typeof id !== 'number') {
    return res.status(400).json({});
  }
  const dogObj = dog.getDogById(id);
  if (!dogObj) {
    return res.status(400).json({});
  }
  res.json(dogObj);
};

module.exports = {
  fetchDogById,
};
