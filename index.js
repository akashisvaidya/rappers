const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
app.use(cors());
const rappers = {
  "21 savage": {
    birthName: "Sheyaa",
    birthLocation: "London, England",
    age: 29,
  },
  "chance the rapper": {
    birthName: "Chancelor",
    birthLocation: "Chicago, Illinois",
    age: 29,
  },
  unknown: {
    birthName: "Unknown",
    birthLocation: "Unknown",
    age: 0,
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const rapperName = request.params.name.toLowerCase();
  if (rappers[rapperName]) {
    response.json(rappers[rapperName]);
  } else {
    response.json(rappers.unknown);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
