const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const authConfig = require("../../config/auth.json");

module.exports = {
  // login
  async authenticate(req, res) {
    const { email, password } = req.body;
  
    const user = await User.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });
    
    // if user is undefined
    if(!user) {
      return res.status(400).send({ error: 'User not found.' });
    }
    
    // check password with bcrypt
    if(!await bcrypt.compare(password, user.password)) {
      return res.status(400).send({ error: 'Password mismatch.' });
    }

    // clear password for response
    user.password = undefined;

    // generate JWT
    const token = jwt.sign({ id: user.id }, authConfig.secret, { 
      expiresIn: 300,
    });

    // send user + token
    res.status(200).send({ user, token });
  },
}
