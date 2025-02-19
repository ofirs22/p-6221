
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserDetails, logout } from '../../../store/userSlice';
import { LogoutButton } from './LogoutButton';
import { UserGreeting } from './UserGreeting';
import { useNavigate } from 'react-router-dom';

interface UserHeaderProps {
  className?: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ className = '' }) => {
  const user = useSelector(selectUserDetails);
  console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={`flex flex-row-reverse gap-5 justify-between items-center w-full max-md:gap-4 max-sm:flex-col max-sm:items-end max-sm:gap-3 ${className}`}>
      <UserGreeting username={user.userInfo.firstName} />
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};
