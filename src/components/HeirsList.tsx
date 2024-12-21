import React from 'react';
import { Trash2 } from 'lucide-react';
import type { Heir } from '../types/heir';

interface Props {
  heirs: Heir[];
  onRemoveHeir: (id: string) => void;
}

export const HeirsList: React.FC<Props> = ({ heirs, onRemoveHeir }) => {
  if (heirs.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">No heirs added yet. Use the form above to add heirs.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {heirs.map((heir) => (
        <div
          key={heir.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
        >
          <div>
            <h3 className="font-medium text-gray-900 capitalize">
              {heir.relationship}
            </h3>
            <p className="text-sm text-gray-500 capitalize">
              {heir.gender} • Share: {(heir.share * 100).toFixed(2)}%
            </p>
          </div>
          <button
            onClick={() => onRemoveHeir(heir.id)}
            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Remove heir"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};
