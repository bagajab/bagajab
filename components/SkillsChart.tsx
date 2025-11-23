import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'React/JS', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'Rails', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'DevOps', level: 75 },
  { name: 'SQL/DB', level: 85 },
];

const SkillsChart: React.FC = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis 
            dataKey="name" 
            type="category" 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            width={70}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            cursor={{ fill: '#1e293b' }}
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
            itemStyle={{ color: '#2dd4bf' }}
          />
          <Bar dataKey="level" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#14b8a6" fillOpacity={0.8 + (index * 0.05)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;