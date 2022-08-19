require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./database/database");

const port = process.env.Port || 3001;
const app = express();

connectDatabase();
app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) =>{
//   res.send({message: "Twitter Clone"});
// });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
