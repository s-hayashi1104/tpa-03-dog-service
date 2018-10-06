const dog = require('./dog');
const dogs = require('./data/dogs.json');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (typeof id === 'number') {
    if (dogs[id]) {
      return res.json(dog.getDogById(id));
    }
    return res.status(400).json({});
  }
  return res.status(400).json({});
};

module.exports = {
  fetchDogById,
};
