
import React from 'react';

interface UserGreetingProps {
  username: string;
}

export const UserGreeting: React.FC<UserGreetingProps> = ({ username }) => {
  return (
    <div className="flex flex-col items-end w-auto text-2xl leading-none text-right text-slate-900 max-sm:w-full max-sm:text-xl">
      <div className="mb-2 max-sm:mb-1.5">, היי {username} </div>
      <div className="mt-3 bg-sky-500 rounded-sm h-[3px] w-[154px] max-sm:w-full max-sm:mt-2" />
    </div>
  );
};
