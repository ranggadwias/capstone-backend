import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  console.log("✅ GET / hit");
  res.send('🚀 Server works! Hello from Railway');
});

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});