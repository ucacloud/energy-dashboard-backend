const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/api/settlements', (req, res) => {
  res.json([
    { id: 1, name: 'Market A', amount: 1234.56 },
    { id: 2, name: 'Market B', amount: 7890.12 },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});