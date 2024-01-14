import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";

import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig, ConnectKitButton } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, optimism, arbitrum];

const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: process.env.WALLETCONNECT_PROJECT_ID!,
    chains,
  }),
);

export const CustomChainsApp = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        Your Custom Chains App
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};