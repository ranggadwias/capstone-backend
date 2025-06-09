import express from 'express';
const app = express();
const port = process.env.PORT || 4000;

console.log("🔥 Minimal server starting...");

app.get('/', (req, res) => {
  console.log("✅ GET / hit");
  res.send('FinMate Backend is running (minimal test)');
});

app.listen(port, () => {
  console.log(`✅ Server running at port ${port}`);
});