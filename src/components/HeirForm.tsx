import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import type { Heir } from '../types/heir';

interface Props {
  onAddHeir: (heir: Heir) => void;
}

interface RelationshipOption {
  value: Heir['relationship'];
  label: string;
}

const RELATIONSHIP_OPTIONS: RelationshipOption[] = [
  { value: 'spouse', label: 'Spouse' },
  { value: 'child', label: 'Child' },
  { value: 'parent', label: 'Parent' },
  { value: 'sibling', label: 'Sibling' },
];

export const HeirForm: React.FC<Props> = ({ onAddHeir }) => {
  const [formData, setFormData] = useState({
    relationship: 'spouse' as Heir['relationship'],
    gender: 'male' as Heir['gender'],
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const newHeir: Heir = {
        id: crypto.randomUUID(),
        relationship: formData.relationship,
        gender: formData.gender,
        share: 0, // Initial share, will be calculated later
      };
      
      onAddHeir(newHeir);
      
      // Reset form
      setFormData({
        relationship: 'spouse',
        gender: 'male',
      });
      setError(null);
    } catch (err) {
      setError('Failed to add heir. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
            Relationship
          </label>
          <select
            id="relationship"
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm 
                     focus:border-indigo-500 focus:ring-indigo-500 
                     bg-white text-gray-900"
          >
            {RELATIONSHIP_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm 
                     focus:border-indigo-500 focus:ring-indigo-500 
                     bg-white text-gray-900"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center px-4 py-2 
                 border border-transparent rounded-md shadow-sm text-sm 
                 font-medium text-white bg-indigo-600 hover:bg-indigo-700 
                 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-indigo-500 transition-colors"
      >
        <UserPlus className="h-5 w-5 mr-2" />
        Add Heir
      </button>
    </form>
  );
};