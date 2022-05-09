import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

//if no calls are made
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`server is running in port ${PORT}`);
});
