import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: 'up' | 'down';
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, trend }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
          trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {change}
        </span>
      </div>
      <h3 className="mt-4 text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
};

export default StatCard;