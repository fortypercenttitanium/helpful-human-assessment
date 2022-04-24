const mongoose = require('mongoose');
const { Color, Family } = require('./model');
const baseColors = require('./baseColors');
const ColorConverter = require('../helpers/ColorConverter');

const converter = new ColorConverter();

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/test';

async function seed() {
  await mongoose.connect(DB_URL);

  await Promise.all(
    baseColors.map(async (color) => {
      const family = new Family({
        name: color.hex,
        shades: [],
      });

      const baseColor = new Color({
        _id: color.hex,
        baseColor: color.base,
        family: family,
        name: color.name,
      });

      for (let i = 1; i < 5; i++) {
        colors.unshift(converter.shadeDown(color, 0.2 * i));
      }

      for (let i = 1; i < 5; i++) {
        colors.push(converter.shadeUp(color, 0.2 * i));
      }
    }),
  );
}

seed();
