const OverallStatDabase = require("../models/OverallStat");
const getSales = async (req, res) => {
  try {
    const overallStats = await OverallStatDabase.find();

    res.status(200).json(overallStats[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getSales,
};
