const dog = require('./dog');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (!dog.getDogById(id)) {
    res.status(400).json({});
  }
  res.json(dog.getDogById(id));
};

module.exports = {
  fetchDogById,
};
