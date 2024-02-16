const dotenv =require('dotenv')
const express = require('express')
const app = express();
const connectDB = require("./Database/db");

dotenv.config()
connectDB();

const PORT = process.env.PORT || 7000;

app.use(express.json()); 
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));

app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

  app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });


