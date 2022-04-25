require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./db/db');
const dbRouter = require('./routes/dbRouter');

const PORT = process.env.PORT || 8080;

app.use('/db', dbRouter);

app.listen(PORT, async () => {
  await db();
  console.log(`Server running on port ${PORT}...`);
});
