"use client"

import { mainnet, polygon, optimism, arbitrum, sepolia } from "wagmi/chains";

import { WagmiConfig, createConfig /*, chain*/ } from "wagmi";
import { ConnectKitProvider, getDefaultConfig, ConnectKitButton } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;
const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID!;

// Choose which chains you'd like to show
const chains = [mainnet, polygon, optimism, arbitrum, sepolia];

const config = createConfig(
  getDefaultConfig({
    appName: "Your App Name",
    alchemyId,
    walletConnectProjectId,
    chains,
  }),
);

const CustomChainsApp = () => {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        Your Custom Chains App
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default CustomChainsApp;