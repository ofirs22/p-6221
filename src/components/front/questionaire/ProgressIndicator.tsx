import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-between w-[336px] h-10 relative">
      {/* Progress Line */}
      <div className="absolute top-1/2 left-0 w-[302px] h-[10px] bg-[#F4F5F5] -translate-y-1/2" />
      
      {/* Step Circles */}
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index + 1 === currentStep;
        const isPast = index + 1 < currentStep;
        
        return (
          <div
            key={index}
            className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[22px] font-bold ${
              isActive ? 'bg-[#0A6F94] text-[#F4F5F5]' :
              isPast ? 'bg-[#EDEEEE] text-[#EDEEEE]' :
              'bg-[#F4F5F5] text-[#F4F5F5]'
            }`}
            style={{ fontFamily: index === 0 ? 'Ploni DL 1.1 AAA' : 'Open Sans Hebrew' }}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
