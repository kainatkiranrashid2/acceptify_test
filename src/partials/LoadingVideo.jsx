import { useState } from "react";

const LoadingVideo = ({ src, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/10 backdrop-blur-sm">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <video
        src={src}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onLoadedData={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};

export default LoadingVideo;
