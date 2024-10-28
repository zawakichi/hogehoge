import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart: React.FC = () => {
  const data = [
    { name: '月', value: 4000 },
    { name: '火', value: 3000 },
    { name: '水', value: 2000 },
    { name: '木', value: 2780 },
    { name: '金', value: 1890 },
    { name: '土', value: 2390 },
    { name: '日', value: 3490 }
  ];

  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;