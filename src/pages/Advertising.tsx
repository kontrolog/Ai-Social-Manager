import React, { useState } from 'react';
import { DollarSign, Target, Calendar } from 'lucide-react';

const Advertising = () => {
  const [platform, setPlatform] = useState('');
  const [budget, setBudget] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [targetAudience, setTargetAudience] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with AI to create and manage the ad campaign
    console.log('Ad campaign created:', { platform, budget, startDate, endDate, targetAudience });
    // Reset form
    setPlatform('');
    setBudget('');
    setStartDate('');
    setEndDate('');
    setTargetAudience('');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Advertising Campaigns</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Create New Campaign</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
              Advertising Platform
            </label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select a platform</option>
              <option value="facebook">Facebook Ads</option>
              <option value="google">Google Ads</option>
              <option value="etsy">Etsy Ads</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget
            </label>
            <div className="relative">
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter budget amount"
                required
              />
              <DollarSign className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <Calendar className="absolute right-3 top-2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience
            </label>
            <div className="relative">
              <textarea
                id="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe your target audience"
                rows={3}
                required
              ></textarea>
              <Target className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advertising;