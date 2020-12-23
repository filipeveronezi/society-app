const Address = require('../models/Address');
const Court = require('../models/Court');

module.exports = {
  async show(req, res) {
    const courts = await Court.findAll({
      where: {},
      include: [{
        model: Address,
        as: 'address',
        where: {}
      }]
    });

    return res.json(courts);
  }
}