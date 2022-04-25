const express = require('express');
const router = express.Router();
const { Color, Family } = require('../db/model');

router.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);

  next();
});

router.get('/colors', async (req, res) => {
  try {
    const colors = await Color.find({});

    res.json(colors);
  } catch (err) {
    console.error(err);
  }
});

router.get('/families', async (req, res) => {
  try {
    const families = await Family.find({});

    res.json(families);
  } catch (err) {
    console.error(err);
  }
});

router.get('/family/:id', async (req, res) => {
  try {
    const family = await Family.findOne({ _id: req.params.id }).populate(
      'shades',
    );

    res.json(family);
  } catch (err) {
    console.error(err);
  }
});

router.get('/color/:id', async (req, res) => {
  try {
    const color = await Color.findOne({ _id: req.params.id });

    res.json(color);
  } catch (err) {
    console.error(err);
  }
});

router.use('*', (req, res) => res.status(404).send('Resource not found'));

module.exports = router;
