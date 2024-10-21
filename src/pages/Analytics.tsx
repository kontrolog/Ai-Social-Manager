import React from 'react';
import { BarChart2, TrendingUp, Users, ShoppingCart } from 'lucide-react';

const Analytics = () => {
  // Mock data for demonstration
  const kpis = [
    { name: 'Total Sales', value: '$12,345', icon: ShoppingCart, change: '+15%' },
    { name: 'Conversion Rate', value: '3.2%', icon: TrendingUp, change: '+0.5%' },
    { name: 'Unique Visitors', value: '5,678', icon: Users, change: '+8%' },
    { name: 'Avg. Order Value', value: '$87', icon: BarChart2, change: '+3%' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi) => (
          <KPICard key={kpi.name} {...kpi} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Sales Over Time" />
        <ChartCard title="Traffic Sources" />
      </div>
    </div>
  );
};

const KPICard: React.FC<{
  name: string;
  value: string;
  icon: React.ElementType;
  change: string;
}> = ({ name, value, icon: Icon, change }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold text-gray-700">{name}</h2>
      <Icon className="h-6 w-6 text-indigo-500" />
    </div>
    <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
    <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
      {change} from last month
    </p>
  </div>
);

const ChartCard: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
      <p className="text-gray-500">Chart placeholder</p>
    </div>
  </div>
);

export default Analytics;