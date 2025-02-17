import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface CategoryItemProps {
  label: string;
  onClick?: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ label, onClick }) => {
  return (
    <div className='flex items-center justify-between w-full'>
      <button 
        onClick={onClick}
        className="flex items-center flex-row-reverse justify-between w-full p-4 hover:bg-[#F4F5F5] rounded-lg"
      >
        <span 
          className="text-[24px] leading-[27px] font-semibold text-[#05172C]"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {label}
        </span>
        <button className='bg-[#58baff] rounded-full h-[52px] w-[52px]'>
          <FontAwesomeIcon icon={faArrowLeft} className="text-white text-lg" />
        </button>
      </button>
    </div>
  );
};

interface CategoryListProps {
  categories: string[]; // Accept an array of category labels
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-4">
        {categories.map((category, index) => (
          <React.Fragment key={index}>
            <CategoryItem label={category} />
            {index < categories.length - 1 && <hr className="my-2" />} {/* Add hr only between items */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
