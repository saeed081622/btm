import React from 'react';

const ImageComponent = ({ imageName }) => (
  <img
    src={imageName}
    className=" w-2/5 md:w-1/5 rounded-lg  mb-5 md:mb-0"
    alt={`Image ${imageName}`}
  />
);

export default ImageComponent;
