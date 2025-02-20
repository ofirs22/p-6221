import React from 'react';

interface ProductImageProps {
  imageUrl: string;
}

export const HeroImage: React.FC<ProductImageProps> = ({ imageUrl }) => {
  return (
    <img
      loading="lazy"
      src={imageUrl}
      alt="Product illustration"
      className="object-contain self-stretch my-auto aspect-[1.12] min-w-[240px] w-[521px] max-md:max-w-full"
    />
  );
};