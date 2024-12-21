import React from 'react';
import { PieChart } from 'lucide-react';
import type { InheritanceShares } from '../types/heir';

interface Props {
  shares: InheritanceShares;
}

export const SharesDisplay: React.FC<Props> = ({ shares }) => {
  const totalShares = Object.values(shares).reduce((sum, share) => sum + share, 0);

  const formatShare = (share: number) => {
    if (share === 0) return '0%';
    return `${((share / totalShares) * 100).toFixed(2)}%`;
  };

  const shareItems = [
    { label: 'Spouse', value: shares.spouse },
    { label: 'Father', value: shares.father },
    { label: 'Mother', value: shares.mother },
    { label: 'Sons', value: shares.sons },
    { label: 'Daughters', value: shares.daughters },
    { label: 'Brothers', value: shares.brothers },
    { label: 'Sisters', value: shares.sisters },
  ].filter(item => item.value > 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center space-x-2 mb-4">
        <PieChart className="h-6 w-6 text-indigo-600" />
        <h2 className="text-lg font-semibold text-gray-900">Inheritance Shares</h2>
      </div>

      {shareItems.length > 0 ? (
        <div className="space-y-3">
          {shareItems.map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center">
              <span className="text-gray-600">{label}</span>
              <div className="flex items-center">
                <div className="w-48 h-2 bg-gray-200 rounded-full mr-3">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: formatShare(value) }}
                  ></div>
                </div>
                <span className="text-gray-700">{formatShare(value)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No shares to display.</p>
      )}
    </div>
  );
};
