import React, { useState } from "react";
import Input from "../../../../components/ui/input";
import Select from "../../../../components/ui/select";
import Button from "../../../../components/ui/button";

const SearchFilters = ({ onSearchChange }) => {

  const [filters, setFilters] = useState({
    location: "",
    transactionType: "",
    type: "",
    priceRange: "",
    sizeRange: "",
    rooms: ""
  });
  const [isOpen, setIsOpen] = useState(false);

  const priceRangeOptions = [
    { label: "Alle Preise", value: "" },
    { label: "Bis 250.000€", value: "0-250000" },
    { label: "250.000€ - 500.000€", value: "250000-500000" },
    { label: "500.000€ - 1.000.000€", value: "500000-1000000" },
    { label: "1.000.000€+", value: "1000000-" }
  ];

  const sizeRangeOptions = [
    { label: "Alle Größen", value: "" },
    { label: "Bis 50m²", value: "0-50" },
    { label: "50m² - 100m²", value: "50-100" },
    { label: "100m² - 200m²", value: "100-200" },
    { label: "200m²+", value: "200-" }
  ];

  const typeOptions = [
    { label: "Alle Typen", value: "" },
    { label: "Wohnung", value: "Wohnung" },
    { label: "Haus", value: "Haus" },
    { label: "Doppelhaushälfte", value: "Doppelhaus" },
    { label: "Grundstück", value: "Grundstück" }
  ];

  const roomOptions = [
    { label: "Alle Zimmer", value: "" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4+", value: "4+" }
  ];

  const transactionTypeOptions = [
    { label: "Alle", value: "" },
    { label: "Kaufen", value: "Kaufen" },
    { label: "Mieten", value: "Mieten" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearchChange(filters);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleReset = () => {
    setFilters({
      location: "",
      transactionType: "",
      type: "",
      priceRange: "",
      sizeRange: "",
      rooms: ""
    });
    onSearchChange({});
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 px-4 md:px-[140px] mb-8">
      <div className="flex items-center gap-2 px-3 rounded border border-blue-gray w-full md:w-[380px] h-12 bg-white">
        <img
          className="w-6 h-6"
          alt="Location icon"
          src="https://c.animaapp.com/m92rahviqX0WO8/img/location---iconly-pro.svg"
        />
        <Input
          name="location"
          className="border-0 p-0 text-blue-gray placeholder-blue-gray h-full w-full"
          placeholder="Bundesland, Ort oder Postleitzahl"
          value={filters.location}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>

      <Select
        name="transactionType"
        options={transactionTypeOptions}
        placeholder="Kaufen/Mieten"
        className="w-full md:w-[132px] h-12  border-blue-gray text-charcoal"
        value={filters.transactionType}
        onChange={handleSelectChange}
      >
        <option value="">Kaufen/Mieten</option>
        {transactionTypeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Select
        name="type"
        options={typeOptions}
        placeholder="Typ"
        className="w-full md:w-[132px] h-12 bg-white border-blue-gray text-charcoal"
        value={filters.type}
        onChange={handleSelectChange}
      >
        <option value="">Typ</option>
        {typeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Select
        name="priceRange"
        options={priceRangeOptions}
        placeholder="Preis"
        className="w-full md:w-[132px] h-12 bg-white border-blue-gray text-charcoal"
        value={filters.priceRange}
        onChange={handleSelectChange}
      >
        <option value="">Preis</option>
        {priceRangeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Select
        name="sizeRange"
        options={sizeRangeOptions}
        placeholder="Fläche"
        className="w-full md:w-[132px] h-12 bg-white border-blue-gray text-charcoal"
        value={filters.sizeRange}
        onChange={handleSelectChange}
      >
        <option value="">Fläche</option>
        {sizeRangeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Select
        name="rooms"
        options={roomOptions}
        placeholder="Zimmer"
        className="w-full md:w-[132px] h-12 bg-white border-blue-gray text-charcoal"
        value={filters.rooms}
        onChange={handleSelectChange}
      >
        <option value="">Zimmer</option>
        {roomOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>

      <Button
        onClick={handleSearch}
        className="w-full md:w-auto h-12 bg-primary text-white"
      >
        Suchen
      </Button>

      <Button
        variant="ghost"
        onClick={handleReset}
        className="w-full md:w-auto h-12"
      >
        Reset
      </Button>

      <Button
        variant="outline"
        className="w-12 h-12 p-0 border border-blue-gray bg-white flex items-center justify-center"
      >
        <img
          className="w-6 h-6"
          alt="Map icon"
          src="https://c.animaapp.com/m92rahviqX0WO8/img/map---iconly-pro.svg"
        />
      </Button>
    </div>
  );
};

export default SearchFilters;