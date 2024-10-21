import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

interface ShopSetupProps {
  setShopUrl: (url: string) => void;
}

const ShopSetup: React.FC<ShopSetupProps> = ({ setShopUrl }) => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && url.includes('etsy.com/shop/')) {
      setShopUrl(url);
      toast.success('Shop connected successfully!');
      navigate('/');
    } else {
      toast.error('Please enter a valid Etsy shop URL');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Shop Setup</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="shopUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Etsy Shop URL
          </label>
          <input
            type="text"
            id="shopUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://www.etsy.com/shop/YourShopName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Connect Shop
        </button>
      </form>
    </div>
  );
};

export default ShopSetup;