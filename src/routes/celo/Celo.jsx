import { useCelo } from "@celo/react-celo";
import React, { useState } from "react";

function Celo() {
  const [accountsDetails, setAccountsDetails] = useState()
  const {getConnectedKit, connect, address ,performActions} = useCelo();

  async function transfer() {
    await performActions(async (kit) => {
      const cUSD = await kit.contracts.getStableToken();
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
