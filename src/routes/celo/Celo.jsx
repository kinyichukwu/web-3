import { useCelo } from "@celo/react-celo";
import React, { useState } from "react";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";



// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);







function Celo() {
  const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "<YOUR_PROJECT_ID>",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});


  const [accountsDetails, setAccountsDetails] = useState()
  const {getConnectedKit, connect, address ,performActions} = useCelo();

  async function transfer() {
    await performActions(async (kit) => {
      const cUSD = await kit.contracts.getStableToken();
      console.log(cUSD ,'celo shit')
      await cUSD.transfer('0x4b371df8d05abd2954564b54faf10b8c8f1bc3a2', 10000).sendAndWaitForReceipt();
    });
  }

  return (
    <>
      {address ? (
        <div>Connected to {address}</div>
      ) : (
        <button onClick={transfer}>Connect wallet</button>
        
      )}
      
    </>
  );
}

export default Celo;
