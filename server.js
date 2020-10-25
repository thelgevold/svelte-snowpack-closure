const express = require("express");
const compression = require("compression");

const app = express();

app.use(compression());

app.use("/build", express.static("./build"));

app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: "." });
});

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Example app listening on port ${port}`));