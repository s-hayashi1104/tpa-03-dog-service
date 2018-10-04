const dog = require('./dog');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (typeof dog.getDogById(id) === 'undefined' || dog.getDogById(id) === null) {
    res.status(400).json({});
  }
  res.json(dog.getDogById(id));
};

module.exports = {
  fetchDogById,
};
