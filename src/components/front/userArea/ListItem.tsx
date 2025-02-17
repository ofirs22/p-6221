import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleList, deleteList } from '../../../store/listSlice';

interface ListItemProps {
  id: string;
  title: string;
  notes: string;
  isActive: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({ id, title, notes, isActive }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center px-5 py-6 mt-8 w-full bg-white rounded-xl shadow-[0px_2px_12px_rgba(183,189,196,0.504)] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[984px] max-md:max-w-full">
        <button
          onClick={() => dispatch(toggleList(id))}
          className="flex flex-col self-stretch my-auto text-xl font-semibold text-center text-black w-[168px]"
        >
          <div className="px-4 py-3 bg-sky-500 rounded-3xl max-md:px-5">
            שלח לעגלה
          </div>
        </button>
        <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
          <div className="flex gap-5 items-center self-stretch my-auto min-w-[240px]">
            <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-black">
              <div className="text-2xl font-semibold leading-none">{title}</div>
              <div className="mt-2.5 text-sm leading-loose">{notes}</div>
            </div>
            <div className="flex shrink-0 self-stretch my-auto w-px h-10 bg-neutral-300" />
            <div className="flex flex-col justify-center self-stretch p-1 my-auto w-[46px]">
              <div className="flex shrink-0 bg-black h-[39px] w-[39px]" />
            </div>
          </div>
          <button
            onClick={() => dispatch(deleteList(id))}
            className={`flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto ${
              isActive ? 'bg-sky-500' : 'bg-white'
            } shadow-sm h-[52px] min-h-[52px] rounded-[103px] w-[52px]`}
          >
            <img
              loading="lazy"
              src={isActive ? "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/cad1d0370bd947dce0857432bed77afd176c417a35a881176bab3e1111f4ab1a?apiKey=3bd4fc55ef394bd184dc9786c01c1445&" : "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/434dfc7e1301af3ef8a4a7280d089250763e6f3cfac87c94ded3cfb91278869f?apiKey=3bd4fc55ef394bd184dc9786c01c1445&"}
              className="object-contain self-stretch my-auto aspect-square w-[13px]"
              alt={isActive ? "Deactivate list" : "Activate list"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

