const mongoose = require('mongoose');
const { colorSchema, familySchema } = require('./schemas');

const Color = mongoose.model('Color', colorSchema);
const Family = mongoose.model('Family', familySchema);

module.exports = {
  Color,
  Family,
};
