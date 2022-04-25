require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db/db');
const dbRouter = require('./routes/dbRouter');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use('/db', dbRouter);

app.listen(PORT, async () => {
  await db();
  console.log(`Server running on port ${PORT}...`);
});
