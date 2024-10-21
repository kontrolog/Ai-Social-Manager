import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Share2, Target, MessageCircle, BarChart2, Calendar } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home, path: '/' },
  { name: 'Shop Setup', icon: ShoppingBag, path: '/setup' },
  { name: 'Social Media', icon: Share2, path: '/social-media' },
  { name: 'Advertising', icon: Target, path: '/advertising' },
  { name: 'Customer Relations', icon: MessageCircle, path: '/customer-relations' },
  { name: 'Analytics', icon: BarChart2, path: '/analytics' },
  { name: 'Schedule', icon: Calendar, path: '/schedule' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-white w-64 h-full shadow-lg">
      <div className="p-5">
        <h1 className="text-2xl font-bold text-indigo-600">AI Social Manager</h1>
      </div>
      <nav className="mt-5">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === item.path ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;