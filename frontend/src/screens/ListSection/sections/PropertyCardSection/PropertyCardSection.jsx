import React from "react";
import Card from "../../../../components/ui//card";

export const PropertyCardSection = ({ property }) => {
  const heartIcon = "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg";
  const eyeIcon = "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg";
  
  const formatPrice = (price) => {
    if (!price) return "";
    const numericPrice = parseFloat(price);
    return new Intl.NumberFormat('de-DE', { 
      style: 'currency', 
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(numericPrice);
  };

  return (
    <Card className="w-full overflow-hidden h-full flex flex-col max-w-[360px] min-h-[428px]">
      <div className="relative h-60 w-full">
        <img
          src={property.image || "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_1_oyagm3.png"}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-6 right-6 w-6 h-6">
          <img
            src={heartIcon}
            alt="Favorite"
            className="w-full h-full"
          />
        </button>
      </div>
      <div className="p-6 bg-light-gray space-y-5 flex-grow">
        <h3 className="font-bold text-[#31393D] leading-[150%] text-sm truncate min-w-[312px]">
          {property.title}
        </h3>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <p className="text-[#31393D] text-xs leading-[150%]">
              ID: {property.id} | {property.type} |{" "}
              {property.location}
            </p>
            <p className="font-body-small text-charcoal text-xs leading-[150%]">
              {property.rooms} | {property.bathrooms || "1 Bad"} |{" "}
              {property.size} | {property.transactionType}
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-[#31393D] text-2xl leading-[140%] font-medium">
              {property.price}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#748790] font-normal text-sm">
                {property.views}
              </span>
              <img src={eyeIcon} alt="Views" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};