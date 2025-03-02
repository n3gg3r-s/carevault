import { useState } from "react";
import { ethers } from "ethers";
import HealthcareRegistryABI from "./HealthcareRegistryABI.json";

const CONTRACT_ADDRESS = "YOUR_SMART_CONTRACT_ADDRESS";

function GetDocument({ userAddress }) {
    const [ipfsHash, setIpfsHash] = useState("");

    const fetchDocument = async () => {
        if (!window.ethereum) return alert("MetaMask is required!");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, HealthcareRegistryABI, provider);

        try {
            const hash = await contract.getPatientIPFS(userAddress);
            setIpfsHash(hash);
        } catch (error) {
            console.error(error);
            alert("Error fetching document hash");
        }
    };

    return (
        <div>
            <h2>Retrieve Medical Document</h2>
            <button onClick={fetchDocument}>Get Document</button>
            {ipfsHash && (
                <p>
                    Document Link:{" "}
                    <a href={`https://ipfs.io/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">
                        View Document
                    </a>
                </p>
            )}
        </div>
    );
}

export default GetDocument;
