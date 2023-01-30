const UserDatabase = require("../models/User");

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserDatabase.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = { getUser };
