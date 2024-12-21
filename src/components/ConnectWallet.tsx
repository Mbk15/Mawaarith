import { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Wallet } from 'lucide-react';

export const ConnectWallet: FC = () => {
  const { connected } = useWallet();

  return (
    <div className="flex items-center space-x-2">
      <Wallet className="h-5 w-5 text-indigo-600" />
      <WalletMultiButton className="!bg-indigo-600 hover:!bg-indigo-700 transition-colors" />
      {connected && (
        <span className="text-sm text-green-600 font-medium">
          ✓ Connected
        </span>
      )}
    </div>
  );
};