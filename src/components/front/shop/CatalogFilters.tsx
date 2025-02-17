import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { selectCategories } from '../../../store/categorySlice';
import { selectTags } from '../../../store/tagSlice';

interface CatalogFiltersProps {
  onSubmit?: () => void;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({ onSubmit }) => {
  const [priceRange, setPriceRange] = useState([0, 30]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get categories and tags from Redux store
  const categories = useSelector(selectCategories);
  const tags = useSelector(selectTags);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleTagToggle = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((t) => t !== tagId)
        : [...prev, tagId]
    );
  };

  const handleSubmit = () => {
    console.log("Filters submitted:", { priceRange, selectedCategories, selectedTags });
    onSubmit?.();
  };

  const handleClearFilters = () => {
    setPriceRange([0, 30]);
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  return (
    <div className="w-full md:w-[345px] bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="bg-[#00BAFF] text-white p-6 rounded-t-lg">
        <h2
          className="text-[24px] leading-[27px] font-semibold"
          style={{ fontFamily: "Ploni DL 1.1 AAA" }}
        >
          סינון מוצרים
        </h2>
      </div>

      <div className="p-6 flex flex-col gap-8 h-[1200px] overflow-y-auto">
        {/* Categories */}
        <div>
          <div className=" pb-4 mb-4 sticky top-0 bg-white z-10">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C]"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :קטגוריות
            </h3>
            <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#FEC740]"></div>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryToggle(category.id)}
                className={`flex items-center justify-between w-full p-2 rounded-lg ${
                  selectedCategories.includes(category.id) ? 'bg-[#00BAFF] text-white' : 'hover:bg-gray-50'
                }`}
              >
                <div className="w-[27px] h-[25px] relative">
                  <img
                    className="w-[23px] h-[28px] left-0 top-0 absolute"
                    src={category.icon}
                    alt={category.name}
                  />
                </div>
                <span
                  className="text-[16px] leading-[23px] text-[#264653]"
                  style={{ fontFamily: "Ploni DL 1.1 AAA" }}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Price Range section remains the same */}
        <div>
          {/* ... existing price range code ... */}
        </div>

        {/* Product Tags */}
        <div>
          <div className=" pb-4 mb-4 sticky top-0 bg-white z-10">
            <h3
              className="text-[22px] leading-[30px] text-[#05172C]"
              style={{ fontFamily: "Ploni DL 1.1 AAA" }}
            >
              :תגיות מוצר
            </h3>
            <div className="absolute bottom-0 right-0 w-[100px] h-[3px] bg-[#FEC740]"></div>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[150px] overflow-y-auto pr-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => handleTagToggle(tag.id)}
                className={`px-4 py-2 text-[14px] leading-[20px] text-[#05172C] border border-[#778080] rounded-full ${
                  selectedTags.includes(tag.id) ? 'bg-[#00BAFF] text-white' : ''
                }`}
                style={{ fontFamily: "Ploni DL 1.1 AAA" }}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sticky bottom-0 bg-white pt-4">
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#00BAFF] text-white rounded-full font-semibold"
            style={{ fontFamily: "Ploni DL 1.1 AAA" }}
          >
            סנן
          </button>
          <button
            onClick={handleClearFilters}
            className="w-full py-4 border border-[#778080] text-[#778080] rounded-full font-semibold"
            style={{ fontFamily: "Ploni DL 1.1 AAA" }}
          >
            נקה הכל
          </button>
        </div>
      </div>
    </div>
  );
};