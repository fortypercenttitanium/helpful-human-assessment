const mongoose = require('mongoose');
require('dotenv').config();
const { Color, Family } = require('./model');
const baseColors = require('./baseColors');
const ColorConverter = require('../helpers/ColorConverter');

const converter = new ColorConverter();

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/test';

async function seed() {
  try {
    console.log(`Attempting to connect to db at ${DB_URL}`);
    await mongoose.connect(DB_URL);
    console.log('Db connected!');
    console.log('Clearing db...');
    mongoose.connection.dropDatabase();

    const familyCollection = [];
    const colorCollection = [];

    console.log('Generating colors and families...');
    baseColors.forEach((color) => {
      const family = new Family({
        name: color.hex,
        shades: [],
      });

      const baseColor = new Color({
        hex: color.hex.toLowerCase(),
        baseColor: color.base,
        family: family._id,
        name: color.name,
      });

      family.shades.push(baseColor._id);
      colorCollection.push(baseColor);

      for (let i = 1; i < 5; i++) {
        const newColor = new Color({
          hex: converter.shadeDown(color.hex, 0.2 * i),
          baseColor: color.base,
          family: family._id,
          name: `${color.name}_darker_${i}`,
        });

        colorCollection.push(newColor);
        family.shades.push(newColor._id);
      }

      for (let i = 1; i < 5; i++) {
        const newColor = new Color({
          hex: converter.shadeUp(color.hex, 0.2 * i),
          baseColor: color.base,
          family: family._id,
          name: `${color.name}_lighter_${i}`,
        });

        colorCollection.push(newColor);
        family.shades.push(newColor._id);
      }

      familyCollection.push(family);
    });

    console.log('Saving colors and families to db...');
    await Promise.all([
      await Color.insertMany(colorCollection),
      await Family.insertMany(familyCollection),
    ]);

    console.log('Done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
}

seed();
