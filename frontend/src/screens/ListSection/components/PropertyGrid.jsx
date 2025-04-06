import React, { useState, useEffect } from "react";
import { PropertyCardSection } from "../sections/PropertyCardSection/PropertyCardSection";
import propertyService from "../../../services/propertyService";
import PaginationControls from "./PaginationControls";

const PropertyGrid = ({ searchParams }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);

  const limit = 9; 

  useEffect(() => {
    const page = searchParams.page || currentPage;
    
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { onPageChange, ...filterParams } = searchParams;

        const params = { 
          ...filterParams,
          page,
          limit
        };

        const data = await propertyService.getProperties(params);
        setProperties(data.properties);
        setTotalPages(data.totalPages);
        setTotal(data.total);
        setCurrentPage(data.currentPage);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
        setError("Failed to load properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    
    window.scrollTo(0, 0); 
    
    if (searchParams.onPageChange) {
      searchParams.onPageChange(page);
    }
  };

  const getFilterSummary = () => {
    const { location, transactionType, type, priceRange, sizeRange, rooms } = searchParams;
    const filters = [];
    
    if (location) filters.push(`Location: ${location}`);
    if (transactionType) filters.push(transactionType);
    if (type) filters.push(type);
    if (priceRange) filters.push(`Price: ${priceRange}`);
    if (sizeRange) filters.push(`Size: ${sizeRange}m²`);
    if (rooms) filters.push(`${rooms} room${rooms !== '1' ? 's' : ''}`);
    
    return filters?.length > 0 ? filters.join(', ') : 'All properties';
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading properties...</div>
        </div>
      ) : properties?.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">No properties found matching your criteria.</div>
        </div>
      ) : (
        <>
          <div className="px-4 md:px-[140px] mb-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="text-sm text-gray-500">
                {total} {total === 1 ? 'property' : 'properties'} found
              </div>
              <div className="text-sm text-gray-500">
                Filters: {getFilterSummary()}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[140px] mb-12">
            {properties?.map((property) => (
              <PropertyCardSection key={property.id} property={property} />
            ))}
          </div>
          {totalPages > 1 && (
            <PaginationControls 
              currentPage={currentPage} 
              totalPages={totalPages}
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </>
  );
};

export default PropertyGrid;