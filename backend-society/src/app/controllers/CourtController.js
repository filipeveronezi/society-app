const Court = require("../models/Court");
const { Op } = require("sequelize");

module.exports = {
  // select all users
  async index(req, res) {
    const courts = await Court.findAll();
    return res.json(courts);
  },

  // insert court
  async store(req, res) {
    const { name, hour_value, user_id } = req.body;
    try {
      const court = await Court.create({ name, hour_value, user_id });
      return res.json(court);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ error: "Court creation failed" });
    }
  },
};
