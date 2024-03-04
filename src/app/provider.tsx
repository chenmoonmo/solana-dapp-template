import { FC, ReactNode } from "react";
import { Theme } from "@radix-ui/themes";
import { SolanaProvider } from "@/components/solana-provider";
import { ClusterProvider } from "@/components/cluster-data-access";

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Theme appearance="dark" accentColor="blue">
      <ClusterProvider>
        <SolanaProvider>
          {children}
          </SolanaProvider>
      </ClusterProvider>
    </Theme>
  );
};
