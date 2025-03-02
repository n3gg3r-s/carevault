import { Web3Storage } from "web3.storage";
import { useState } from "react";
import { ethers } from "ethers";
import HealthcareRegistryABI from "./HealthcareRegistryABI.json"; // Add your contract ABI

const CONTRACT_ADDRESS = "YOUR_SMART_CONTRACT_ADDRESS";
const WEB3_STORAGE_API_KEY = "YOUR_WEB3_STORAGE_API_KEY";

function UploadDocument({ userAddress }) {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const uploadToIPFS = async () => {
        if (!file) return alert("Please select a file");

        setStatus("Uploading to IPFS...");
        const client = new Web3Storage({ token: WEB3_STORAGE_API_KEY });
        const cid = await client.put([file]);
        const fileUrl = `https://ipfs.io/ipfs/${cid}/${file.name}`;

        setStatus("File uploaded. Storing hash on blockchain...");
        storeOnBlockchain(cid);
    };

    const storeOnBlockchain = async (ipfsHash) => {
        if (!window.ethereum) return alert("MetaMask is required!");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, HealthcareRegistryABI, signer);

        try {
            const tx = await contract.uploadDocument(ipfsHash);
            await tx.wait();
            setStatus("Document hash stored on blockchain!");
        } catch (error) {
            console.error(error);
            setStatus("Error storing hash on blockchain");
        }
    };

    return (
        <div>
            <h2>Upload Medical Document</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadToIPFS}>Upload</button>
            <p>{status}</p>
        </div>
    );
}

export default UploadDocument;
