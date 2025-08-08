// server.js
const app = require('./src/app');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`FlashLearn backend listening on http://localhost:${PORT}`);
});
