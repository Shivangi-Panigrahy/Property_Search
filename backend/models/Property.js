const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['Haus', 'Wohnung', 'Grundstück', 'Doppelhaus']
  },
  location: {
    type: String,
    required: true
  },
  rooms: {
    type: String,
    required: true
  },
  bathrooms: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  transactionType: {
    type: String,
    required: true,
    enum: ['Kaufen', 'Mieten']
  },
  price: {
    type: String,
    required: true
  },
  priceNumeric: {
    type: Number,
    required: true
  },
  sizeNumeric: {
    type: Number,
    required: true
  },
  roomsNumeric: {
    type: Number,
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  zipCode: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  }
}, { timestamps: true });

PropertySchema.index({ 
  title: 'text', 
  location: 'text',
  zipCode: 'text',
  city: 'text',
  state: 'text'
});

module.exports = mongoose.model('Property', PropertySchema);