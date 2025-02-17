import React from 'react';
import { EditButton } from './EditButton';

interface AddressCardProps {
    city: string | null;
    street: string | null;
    houseNumber: string | null;
    apartment: string | null;
    postalCode: string | null;
    isEditing: boolean;
}

export const AddressCard: React.FC<AddressCardProps> = ({ ...address }) => {
  return (

    <div className="flex flex-col px-5 py-6 mt-8 w-full bg-white rounded-xl shadow-[0px_2px_12px_rgba(183,189,196,0.504)] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[984px] max-md:max-w-full">
        <EditButton />
        <div className="flex gap-5 items-center self-stretch my-auto text-2xl leading-none text-slate-700">
          <div className="flex gap-5 items-center self-stretch my-auto">
            {/* <div className="overflow-hidden self-stretch my-auto">
              {type}
            </div> */}
            <div className="flex shrink-0 self-stretch my-auto w-px h-10 bg-neutral-300" />
          </div>
        </div>
      </div>
      <div className="flex mt-5 w-full bg-sky-500 min-h-[3px] max-md:max-w-full" />
    </div>
  );
};

