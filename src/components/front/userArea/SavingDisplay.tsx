import React from 'react';
import { useSelector } from 'react-redux';
import { selectSavings } from '../../../store/userSlice';
import { SavingsHeader } from './SavingHeader';
import { SavingsAmount } from './SavingAmount';

interface SavingsDisplayProps {
  className?: string;
}

export const SavingsDisplay: React.FC<SavingsDisplayProps> = ({ className = '' }) => {
  const savings = useSelector(selectSavings);
    console.log(savings)
  return (
    <div className={`flex gap-8 items-start font-semibold ${className} `}>
      <div className="flex flex-col flex-1 shrink p-10 w-full rounded-2xl shadow-sm basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <SavingsHeader />
        <SavingsAmount amount={savings} />
      </div>
    </div>
  );
};
