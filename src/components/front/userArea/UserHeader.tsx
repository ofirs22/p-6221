
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserDetails, logout } from '../../../store/userSlice';
import { LogoutButton } from './LogoutButton';
import { UserGreeting } from './UserGreeting';

interface UserHeaderProps {
  className?: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ className = '' }) => {
  const user = useSelector(selectUserDetails);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`flex flex-row-reverse gap-5 justify-between items-center w-full max-md:gap-4 max-sm:flex-col max-sm:items-end max-sm:gap-3 ${className}`}>
      <UserGreeting username={user.userInfo.firstName} />
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};
