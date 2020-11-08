const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      if(await User.findOne({
        where: { 
          email: {
            [Op.eq]: email
          }
        }
      })) {
        console.log('entrou')
        return res.status(400).send({ error: 'User already exists.'});
      }

      const hash = await bcrypt.hash(password, 10)
      const user = await User.create({ name, email, password: hash });
      
      user.password = undefined;

      return res.json(user);
      
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }

  }
}