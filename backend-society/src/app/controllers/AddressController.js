const Address = require('../models/Address');
const Court = require('../models/Court');

module.exports = {
  async index(req, res) {
    const addresses = await Address.findAll();
    return res.json(addresses);
  },
  
  async store(req,res){
    const { court_id } = req.params;
    const { street, number, district, city, state } = req.body;

    const court = await Court.findByPk(court_id);

    if(!court) {
      return res.status(400).json({ error: 'Court not found' });
    }

    const address = await Address.create({
      street,
      number,
      district,
      city,
      state,
      court_id,
    });

    return res.json(address);
  },

  async update(req,res){
    const { court_id } = req.params;
    const { street, number, district, city, state } = req.body;
    
    const court = await Court.findByPk(court_id);

    if(!court) {
      return res.status(400).json({ error: 'Court not found' });
    }

    const address = await Address.update({
      street,
      number,
      district,
      city,
      state,
    },
    { where: { court_id }});

    return res.status(200).json({ success: "Address update successful"});
  }
}