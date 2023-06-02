const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (email !== "" && password !== "") {
      const user = await User.findOrCreate({
        where: {
          email,
          password,
        },
      });
      if (user) {
        res.status(200).json(user);
      }
    } else {
      res.status(400).json("Faltan datos");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
