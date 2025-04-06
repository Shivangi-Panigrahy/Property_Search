
const Property = require('../models/Property');

const getProperties = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skipIndex = (page - 1) * limit;

    const query = {};

    if (req.query.location) {
      query.$or = [
        { location: { $regex: req.query.location, $options: 'i' } },
        { zipCode: { $regex: req.query.location, $options: 'i' } },
        { city: { $regex: req.query.location, $options: 'i' } },
        { state: { $regex: req.query.location, $options: 'i' } }
      ];
    }

    if (req.query.transactionType) {
      query.transactionType = req.query.transactionType;
    }
 
    if (req.query.type) {
      query.type = req.query.type;
    }

    if (req.query.priceRange) {
      const [min, max] = req.query.priceRange.split('-');
      if (min && max) {
        query.priceNumeric = { $gte: parseInt(min), $lte: parseInt(max) };
      } else if (min) {
        query.priceNumeric = { $gte: parseInt(min) };
      } else if (max) {
        query.priceNumeric = { $lte: parseInt(max) };
      }
    }

    if (req.query.sizeRange) {
      const [min, max] = req.query.sizeRange.split('-');
      if (min && max) {
        query.sizeNumeric = { $gte: parseInt(min), $lte: parseInt(max) };
      } else if (min) {
        query.sizeNumeric = { $gte: parseInt(min) };
      } else if (max) {
        query.sizeNumeric = { $lte: parseInt(max) };
      }
    }

    if (req.query.rooms) {
      if (req.query.rooms === '4+') {
        query.roomsNumeric = { $gte: 4 };
      } else {
        query.roomsNumeric = parseInt(req.query.rooms);
      }
    }

    const total = await Property.countDocuments(query);

    const properties = await Property.find(query)
      .limit(limit)
      .skip(skipIndex)
      .sort({ createdAt: -1 });
    
    res.json({
      properties,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findOne({ id: req.params.id });
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    property.views += 1;
    await property.save();
    
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProperties,
  getPropertyById
};