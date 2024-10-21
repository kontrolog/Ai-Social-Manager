import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DashboardProps {
  shopUrl: string;
}

const Dashboard: React.FC<DashboardProps> = ({ shopUrl }) => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {shopUrl ? (
        <div>
          <p className="mb-4">Connected Etsy Shop: {shopUrl}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard
              title="Social Media"
              description="Manage your social media posts and engagement"
              link="/social-media"
            />
            <DashboardCard
              title="Advertising"
              description="Set up and monitor your ad campaigns"
              link="/advertising"
            />
            <DashboardCard
              title="Customer Relations"
              description="Handle customer inquiries and reviews"
              link="/customer-relations"
            />
            <DashboardCard
              title="Analytics"
              description="Track your shop's performance"
              link="/analytics"
            />
            <DashboardCard
              title="Schedule"
              description="Plan your marketing activities"
              link="/schedule"
            />
          </div>
        </div>
      ) : (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
          <p className="font-bold">Welcome to AI Social Manager!</p>
          <p>Please set up your Etsy shop to get started.</p>
          <a href="/setup" className="text-indigo-600 hover:text-indigo-800 font-medium mt-2 inline-block">
            Go to Shop Setup <ArrowRight className="inline h-4 w-4 ml-1" />
          </a>
        </div>
      )}
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; description: string; link: string }> = ({
  title,
  description,
  link,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} className="text-indigo-600 hover:text-indigo-800 font-medium">
      Manage <ArrowRight className="inline h-4 w-4 ml-1" />
    </a>
  </div>
);

export default Dashboard;