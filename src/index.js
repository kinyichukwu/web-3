import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import { ImageProvider } from "./contexts/image.context";
import { CeloProvider, SupportedProviders } from "@celo/react-celo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CeloProvider
        dapp={{
          name: "My awesome dApp",
          description: "My awesome description",
          url: "",
        }}
        connectModal={{
          // This options changes the title of the modal and can be either a string or a react element
          title: <span>Connect your Wallet</span>,
          providersOptions: {
            // This option hides specific wallets from the default list

            // This option hides all default wallets
            hideFromDefaults: [
              SupportedProviders.MetaMask,
              SupportedProviders.PrivateKey,
              SupportedProviders.Ledger,
              SupportedProviders.CoinbaseWallet,
              SupportedProviders.CeloDance,
              SupportedProviders.CeloTerminal,
              SupportedProviders.CeloWallet,
              SupportedProviders.WalletConnect,
              SupportedProviders.Omni,
            ],
            // This option toggles on and off the searchbar
            searchable: true,
          },
        }}
      >
        <ImageProvider>
          <UserProvider>
            <CategoriesProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </CategoriesProvider>
          </UserProvider>
        </ImageProvider>
      </CeloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
