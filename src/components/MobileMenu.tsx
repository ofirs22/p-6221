import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart, User } from 'lucide-react';
import './styles/Menu.css';
import { RootState } from '../app/store';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const userEmail = useSelector((state: RootState) => state.user.userInfo.email);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <button
            className="absolute top-4 right-4 p-2"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6 text-[#05172C]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* User Section */}
          <div className="mt-12 mb-6 flex flex-col items-center">
            <User className="h-12 w-12 mb-2" />
            {isAuthenticated ? (
              <span className="text-sm text-gray-600">{userEmail}</span>
            ) : (
              <div className="space-y-2 w-full">
                <Link 
                  to="/login" 
                  className="block w-full py-2 text-center text-[#05172C] hover:text-[#00BAFF]"
                  onClick={onClose}
                >
                  התחברות
                </Link>
                <Link 
                  to="/signup"
                  className="block w-full py-2 text-center bg-[#00BAFF] text-white rounded-lg hover:bg-[#0096CC]"
                  onClick={onClose}
                >
                  הרשמה
                </Link>
              </div>
            )}
          </div>

          {/* Cart Button */}
          <button 
            className="w-full py-2 flex items-center justify-center space-x-2 text-[#05172C] hover:text-[#00BAFF]"
            onClick={() => {
              console.log('Open cart popup');
              onClose();
            }}
          >
            <ShoppingCart className="h-6 w-6" />
            <span>עגלת קניות</span>
          </button>

          <nav className="mt-6 space-y-4">
            <Link 
              to="/" 
              className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
              onClick={onClose}
            >
              בית
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
              onClick={onClose}
            >
              אודות
            </Link>
            <Link 
              to="/products" 
              className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
              onClick={onClose}
            >
              מוצרים
            </Link>
            <Link 
              to="/packages" 
              className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
              onClick={onClose}
            >
              חבילות
            </Link>
            <Link 
              to="/partners" 
              className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
              onClick={onClose}
            >
              ספקים
            </Link>
          </nav>

          {isAuthenticated && (
            <div className="mt-6 space-y-4">
              <Link 
                to="/profile" 
                className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
                onClick={onClose}
              >
                הפרופיל שלי
              </Link>
              <Link 
                to="/orders" 
                className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
                onClick={onClose}
              >
                ההזמנות שלי
              </Link>
              <Link 
                to="/orders" 
                className="block py-2 text-[#05172C] hover:text-[#00BAFF]"
                onClick={onClose}
              >
                הרשימות שלי
              </Link>
              <button 
                className="w-full py-2 text-red-600 hover:text-red-700"
                onClick={onClose}
              >
                התנתק
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;