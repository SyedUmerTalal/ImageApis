const db = require("../db/conn");

const getImagePaths = async (req, res) => {
  try {
    let sql = "SELECT imagePATH FROM VapeImages";
    console.log("Here");

    const rows = await new Promise((resolve, reject) => {
      db.query(sql, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

    res.status(200).send(rows);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
};

module.exports = { getImagePaths };
