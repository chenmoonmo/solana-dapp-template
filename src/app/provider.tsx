"use client";
import { FC, ReactNode, useMemo } from "react";
import { Theme } from "@radix-ui/themes";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import "@radix-ui/themes/styles.css";
import "@solana/wallet-adapter-react-ui/styles.css";

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () =>
      [
        new SolongWalletAdapter(),
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
      ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <Theme appearance="dark" accentColor="blue">
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </Theme>
  );
};
