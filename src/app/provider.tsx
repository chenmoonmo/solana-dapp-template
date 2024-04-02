"use client";
import { FC, ReactNode, useState } from "react";
import { Theme } from "@radix-ui/themes";
import { SolanaProvider } from "@/components/solana-provider";
import { ClusterProvider } from "@/components/cluster-data-access";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export const Provider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ClusterProvider>
          <SolanaProvider>
            <ThemeProvider attribute="class">
              <Theme appearance="dark" accentColor="blue">
                {children}
              </Theme>
            </ThemeProvider>
          </SolanaProvider>
        </ClusterProvider>
      </ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};
