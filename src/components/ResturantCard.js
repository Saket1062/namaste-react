import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    areaName,
    sla
  } = resData?.info;

  return (
    <div className="relative bg-white border border-gray-200 rounded-3xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl max-w-xs mx-auto my-4 flex flex-col h-full">
      {/* Free Delivery Label */}
      {props.showFreeDelivery && (
        <div className="absolute top-2 left-2 z-10 flex items-center">
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 text-sm font-extrabold uppercase rounded-full shadow-lg ring-2 ring-green-400 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l5 5 7-7 4 4L21 3"></path>
            </svg>
            <span>Free Delivery</span>
          </div>
        </div>
      )}
      
      {/* Restaurant Image */}
      <img
        className="w-full h-48 object-cover"
        alt="Restaurant Logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />

      {/* Restaurant Details */}
      <div className="p-4 flex flex-col flex-grow min-h-[200px]">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <h4 className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</h4>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500">{avgRatingString} ⭐</span>
        </div>
        <h4 className="text-sm text-gray-600 mb-1">{areaName}</h4>
        <h4 className="text-sm text-gray-500">{sla.slaString}</h4>
      </div>
    </div>
  );
};

export const withFreeDeliveryLabel = (ResturantCard) => {
  return (props) => {
    // Apply the condition to determine if the restaurant has free delivery
    const hasFreeDelivery = props.resData?.info?.id % 2 == 0; // For odd IDs

    // Return the Restaurant Card with or without the Free Delivery label
    return (
      <ResturantCard {...props} showFreeDelivery={hasFreeDelivery} />
    );
  };
};

export default ResturantCard;
