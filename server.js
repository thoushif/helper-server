const express = require("express");
const cors = require("cors");

const app = express();
const morgan = require("morgan");
const dbObject = require("./db");
var blogPostAPI = require("./routes/index.js");
var helphelperAPI = require("./routes/help.js");
dbObject.connectDb();
app.use(morgan("dev"));
morgan("tiny");
app.use(express.json());
app.use("/blogpost", blogPostAPI);
app.use("/help", helphelperAPI);

app.get("/api/customers", cors(), (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Brad", lastName: "Traversy" },
    { id: 3, firstName: "Mary", lastName: "kirlosker" }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
