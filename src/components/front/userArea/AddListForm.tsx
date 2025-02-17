import React, { useState } from 'react';
import { List } from '../../../types/listsType';

interface AddListFormProps {
  onAddList: (newList: Omit<List, 'id'>) => void;
}

export const AddListForm: React.FC<AddListFormProps> = ({ onAddList }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log("HandleSubmit")
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAddList({ title, description, icon: 'default-icon' });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="flex flex-col p-5 mt-8 w-full bg-white rounded-xl shadow-[0px_2px_12px_rgba(183,189,196,0.504)] max-md:max-w-full">
      <div className="self-end text-2xl font-semibold leading-none text-black">
        הוסיפו רשימה חדשה
      </div>
      <div className="flex mt-3 w-full bg-neutral-300 min-h-[1px] max-md:max-w-full" />
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-7 items-center mt-3 w-full max-md:max-w-full">
        <div className="flex gap-7 items-center self-stretch my-auto w-[52px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/3d5a186ec1660e55d0b7e1fb132bf9e962886c30ca83058c3dcdade72bfd63b1?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
            className="object-contain self-stretch my-auto aspect-[0.98] w-[52px]"
            alt="Add list icon"
          />
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-2.5 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="flex-1 shrink gap-5 self-stretch px-5 text-sm leading-loose rounded-xl border border-gray-500 border-solid min-h-[52px] min-w-[240px] max-md:max-w-full"
              placeholder="הוסיפו כאן הערות"
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="gap-5 self-stretch px-5 text-2xl font-semibold leading-none rounded-xl border border-gray-500 border-solid min-h-[52px] min-w-[240px] w-[245px]"
              placeholder="הוסיפו כאן כותרת"
            />
          </div>
          <div className="flex shrink-0 self-stretch my-auto w-px h-10 bg-neutral-300" />
          <button type="submit" className="flex items-center justify-center shrink-0 self-stretch my-auto aspect-square w-[46px] bg-sky-500 rounded-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/2277651fbb37846363b9b2544db190230f4a4032aa581ad2f5d1cffe4dab8ee2?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"
              className="object-contain aspect-square w-[24px]"
              alt="Add list"
            />
          </button>
        </div>
      </form>
    </div>
  );
};