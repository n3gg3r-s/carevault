import React, { useState } from "react";
import UploadDocument from './components/UploadDocument';
import GetDocument from './components/GetDocument';

function App() {
    const [userAddress, setUserAddress] = useState("");

    const connectWallet = async () => {
        if (!window.ethereum) return alert("MetaMask is required!");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setUserAddress(accounts[0]);
    };

    return (
        <div>
            <h1>Healthcare Blockchain DApp</h1>
            <button onClick={connectWallet}>
                {userAddress ? `Connected: ${userAddress}` : "Connect Wallet"}
            </button>
            {userAddress && (
                <>
                    <UploadDocument userAddress={userAddress} />
                    <GetDocument userAddress={userAddress} />
                </>
            )}
        </div>
    );
}

export default App;
