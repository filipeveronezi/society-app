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
  },

  async showOne(req, res) {

    const { court_id, user_id } = req.params;
    try {
      const courts = await Court.findOne({
        where: {
          id: court_id,
          user_id
        },
        include: [{
          model: Address,
          as: 'address',
          where: {}
        }]
      });
      if(courts) {
        return res.json(courts);
      } else {
        return res.status(400).json({ error: "Court not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error: 'Selection failed' });
    }
  }
}