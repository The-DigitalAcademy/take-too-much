const express = require('express')
const app = express();
const connectDB = require("./Database/db");
app.use(express.json()); 

connectDB();
const PORT = process.env.PORT || 8000;

app.use("/api/user", require("./routes/user"));


app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

  app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });


