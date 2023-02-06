const UserDatabase = require("../models/User");
const getAdmins = async (req, res) => {
  try {
    const admins = await UserDatabase.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAdmins,
};
