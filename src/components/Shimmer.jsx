const Shimmer = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-black">
      <div className="w-4/5 h-1/4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer mb-6 rounded-lg"></div>

      <div className="grid grid-cols-3 gap-4 w-4/5">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="w-full h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-shimmer rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
