const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.json());

app.post("/saveFormData", (req, res) => {
  const jsonData = req.body;

  // Convert JSON data to a string
  const jsonString = JSON.stringify(jsonData, null, 2);

  // File path
  const filePath = path.join(__dirname, "form_data.json");

  // Write JSON data to the file
  fs.writeFileSync(filePath, jsonString);

  console.log("Form data saved to", filePath);

  res.sendStatus(200);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
