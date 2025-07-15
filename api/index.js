require('dotenv').config();
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tollRoutes = require('./routes/toll');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ghana Toll API Running');
});

app.use('/api/auth', authRoutes);
app.use('/api/toll', tollRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));