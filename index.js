const express = require("express");
const path = require("path");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allow credentials (cookies, authentication headers, etc.)
  })
);

require("./db/conn");

app.use(
  "/product-images",
  express.static(path.join(__dirname, "product-images"))
);
app.use(require("./routes/routes"));

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
