
import React from "react";
import { Slider } from "../../ui/slider";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  onChange?: (values: [number, number]) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, onChange }) => {
  const [values, setValues] = React.useState<[number, number]>([min, max]);

  const handleValueChange = (newValues: number[]) => {
    const typedValues: [number, number] = [newValues[0], newValues[1]];
    setValues(typedValues);
    onChange?.(typedValues);
  };

  return (
    <div className="flex flex-col w-full px-4">
      <div className="w-full pt-4">
        <Slider
          defaultValue={values}
          min={min}
          max={max}
          step={1}
          value={values}
          onValueChange={handleValueChange}
          className="w-full"
        />
      </div>
      
      <div className="text-base text-right w-full mt-4 text-gray-700">
        מחיר: ₪{values[0]} - ₪{values[1]}
      </div>
    </div>
  );
};
