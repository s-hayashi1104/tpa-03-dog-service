const dog = require('./dog');
const dogs = require('./data/dogs.json');

const fetchDogById = (req, res) => {
  const { id } = req.myParams;
  if (typeof Number.parseInt(id, 10) === 'number') {
    const SelectNumber = Number.parseInt(id, 10);
    if (SelectNumber <= dogs.length + 1) {
      return res.json(dog.getDogById(SelectNumber));
    }
    return res.status(400).json({});
  }
  return res.status(400).json({});
};

module.exports = {
  fetchDogById,
};
