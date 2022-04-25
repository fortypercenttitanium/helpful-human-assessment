const mongoose = require('mongoose');

module.exports = {
  colorSchema: new mongoose.Schema({
    name: String,
    baseColor: String,
    family: String,
    hex: String,
  }),
  familySchema: new mongoose.Schema({
    name: String,
    shades: [{ type: mongoose.Schema.Types.ObjectId, ref: 'shades' }],
  }),
};
