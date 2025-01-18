const Shimmer = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col h-full animate-shimmer">
            {/* Restaurant Image */}
            <div className="w-full h-48 bg-gray-200 animate-shimmer"></div>
            
            {/* Restaurant Details */}
            <div className="p-4 flex flex-col flex-grow space-y-4">
              <div className="h-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  