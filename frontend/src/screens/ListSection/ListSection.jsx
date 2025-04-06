import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchFilters from "./sections/SearchFilterSection/SearchFilters";
import PropertyGrid from "./components/PropertyGrid";
import Footer from "./sections/FooterSection/Footer";

export const ListSection = () => {
  const [searchParams, setSearchParams] = useState({});
  const [activeFilters, setActiveFilters] = useState(0);

  const handleSearchChange = (filters) => {
    const activeFilterCount = Object.values(filters).filter(value => 
      value !== undefined && value !== null && value !== ""
    ).length;
    
    setActiveFilters(activeFilterCount);
    setSearchParams({ ...filters, page: 1 }); 
  };

  const handlePageChange = (page) => {
    setSearchParams(prev => ({ ...prev, page }));
  };

  useEffect(() => {
   
  }, [searchParams]);

  return (
    <div className="bg-neutral-50 flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative flex flex-col">
        <Header />
        
        {activeFilters > 0 && (
          <div className="bg-blue-50 px-4 md:px-[140px] py-2 text-sm">
            <span className="font-medium">{activeFilters} active filter{activeFilters !== 1 ? 's' : ''}</span>
          </div>
        )}
        
        <SearchFilters onSearchChange={handleSearchChange} />
        
        <PropertyGrid 
          searchParams={{ ...searchParams, onPageChange: handlePageChange }} 
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default ListSection;