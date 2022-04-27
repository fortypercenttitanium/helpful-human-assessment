require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const dbRouter = require('./routes/dbRouter');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => res.sendStatus(200));
app.use('/db', dbRouter);
app.use('*', (req, res) => res.status(404).send('Route not found'));

app.listen(PORT, async () => {
  try {
    await db();
    console.log(`Server running on port ${PORT}...`);
  } catch (err) {
    console.error(err);
  }
});
