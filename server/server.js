const express = require('express')
const app = express();

app.use(express.json()); 


const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
    res.json({ msg: "The Server is working"});
  });

  app.listen(PORT, () => {
    console.log(`Server is UP on PORT: ${PORT}`);
  });
  