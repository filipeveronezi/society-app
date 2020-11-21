const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

module.exports = {
  // select all users
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  // insert user
  async store(req, res) {
    const { name, email, password } = req.body;

    try {
      // check if user exists
      if (
        await User.findOne({
          where: {
            email: {
              [Op.eq]: email,
            },
          },
        })
      ) {
        return res.status(400).send({ error: "User already exists." });
      }

      // hash password before insert
      const hash = await bcrypt.hash(password, 10);
      // actual insert
      const user = await User.create({ name, email, password: hash });

      // clear password for response
      user.password = undefined;

      // send user as response
      return res.json(user);
    } catch (error) {
      return res.status(400).send({ error: "Registration failed" });
    }
  },
};
