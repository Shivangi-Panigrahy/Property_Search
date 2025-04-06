import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const propertyService = {

  getProperties: async (filters = {}) => {
    try {
      const params = {};
      
      if (filters.location && filters.location.trim() !== '') {
        params.location = filters.location.trim();
      }

      if (filters.transactionType && filters.transactionType !== '') {
        params.transactionType = filters.transactionType;
      }

      if (filters.type && filters.type !== '') {
        params.type = filters.type;
      }

      if (filters.priceRange && filters.priceRange !== '') {
        params.priceRange = filters.priceRange;
      }

      if (filters.sizeRange && filters.sizeRange !== '') {
        params.sizeRange = filters.sizeRange;
      }

      if (filters.rooms && filters.rooms !== '') {
        params.rooms = filters.rooms;
      }

      if (filters.page) {
        params.page = filters.page;
      }
      
      if (filters.limit) {
        params.limit = filters.limit;
      }
      
      const response = await axios.get(`${API_URL}/properties`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  },

  getPropertyById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/properties/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching property with ID ${id}:`, error);
      throw error;
    }
  }
};

export default propertyService;