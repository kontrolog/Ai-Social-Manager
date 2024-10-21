import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ShopSetup from './pages/ShopSetup';
import SocialMedia from './pages/SocialMedia';
import Advertising from './pages/Advertising';
import CustomerRelations from './pages/CustomerRelations';
import Analytics from './pages/Analytics';
import Schedule from './pages/Schedule';

function App() {
  const [shopUrl, setShopUrl] = useState('');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Dashboard shopUrl={shopUrl} />} />
          <Route path="/setup" element={<ShopSetup setShopUrl={setShopUrl} />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/customer-relations" element={<CustomerRelations />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;