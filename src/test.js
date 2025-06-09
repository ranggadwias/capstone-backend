import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send("Test route works!");
});

app.listen(port, () => {
  console.log(`Test server running at port ${port}`);
});