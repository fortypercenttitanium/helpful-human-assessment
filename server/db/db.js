const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/test';

async function main() {
  try {
    await mongoose.connect(DB_URL);
  } catch (err) {
    console.error(err);
  }
}
