const dog = require('./dog');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (id < 0 || id > 9 || typeof id === 'undefined' || id === null) {
    res.status(400).json({});
    return;
  }
  res.json(dog.getDogById(id));
};

module.exports = {
  fetchDogById,
};
