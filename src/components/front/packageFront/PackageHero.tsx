import React from 'react';
import { HeroImage } from './HeroImage';
import { HeroDescription } from './HeroDescription';
import { useSelector } from 'react-redux';


export const PackageHero: React.FC = () => {

  return (
    <div className="flex flex-wrap justify-between items-center text-right text-black rotate-[3.141592653589793rad]">
      <HeroImage imageUrl={'https://pub-e320cbb58ef047df8774a8d4068ef39f.r2.dev/package-hero.png'} />
      <HeroDescription />
    </div>
  );
};
