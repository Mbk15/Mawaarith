import React, { useState } from 'react';
import { WalletContextProvider } from './components/WalletContextProvider';
import { ConnectWallet } from './components/ConnectWallet';
import { HeirForm } from './components/HeirForm';
import { HeirsList } from './components/HeirsList';
import { SharesDisplay } from './components/SharesDisplay';
import { calculateShares } from './utils/inheritanceCalculator';
import type { Heir } from './types/heir';

function App() {
  const [heirs, setHeirs] = useState<Heir[]>([]);

  const handleAddHeir = (newHeir: Heir) => {
    setHeirs(currentHeirs => {
      const updatedHeirs = [...currentHeirs, newHeir];
      const shares = calculateShares(updatedHeirs);
      
      return updatedHeirs.map(heir => ({
        ...heir,
        share: shares[
          heir.relationship === 'child' 
            ? (heir.gender === 'male' ? 'sons' : 'daughters')
            : heir.relationship === 'parent'
            ? (heir.gender === 'male' ? 'father' : 'mother')
            : heir.relationship === 'sibling'
            ? (heir.gender === 'male' ? 'brothers' : 'sisters')
            : 'spouse'
        ],
      }));
    });
  };

  const handleRemoveHeir = (id: string) => {
    setHeirs(currentHeirs => {
      const remainingHeirs = currentHeirs.filter(heir => heir.id !== id);
      const shares = calculateShares(remainingHeirs);
      
      return remainingHeirs.map(heir => ({
        ...heir,
        share: shares[
          heir.relationship === 'child' 
            ? (heir.gender === 'male' ? 'sons' : 'daughters')
            : heir.relationship === 'parent'
            ? (heir.gender === 'male' ? 'father' : 'mother')
            : heir.relationship === 'sibling'
            ? (heir.gender === 'male' ? 'brothers' : 'sisters')
            : 'spouse'
        ],
      }));
    });
  };

  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Shattry's Islamic Inheritance Calculator
              </h1>
              <ConnectWallet />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Add New Heir
                </h2>
                <HeirForm onAddHeir={handleAddHeir} />
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Heirs List
                </h2>
                <HeirsList 
                  heirs={heirs} 
                  onRemoveHeir={handleRemoveHeir} 
                />
              </section>
            </div>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Distribution Preview
              </h2>
              <SharesDisplay shares={calculateShares(heirs)} />
            </section>
          </div>
        </main>
      </div>
    </WalletContextProvider>
  );
}

export default App;