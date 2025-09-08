const express = require("express");
const homeRouter = require("./routes/home.routes");

const app = express();
const PORT = 8081;

app.use("/", homeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
