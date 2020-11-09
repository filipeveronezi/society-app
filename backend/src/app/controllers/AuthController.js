const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth.json");

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;
  
    const user = await User.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
  
    if(!user) {
      return res.status(400).send({ error: 'User not found.' });
    }
  
    if(!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Password mismatch.' });
    }
  
    user.password = undefined;

    const token = jwt.sign({ id: user.id }, authConfig.secret, { 
      expiresIn: 86400,
    });

    res.status(200).send({ user, token });
  },
}
