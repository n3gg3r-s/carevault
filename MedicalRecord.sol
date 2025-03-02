// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HealthcareRegistry {
    struct Patient {
        string name;
        string dob;
        string gender;
        string bloodGroup;
        string homeAddress;
        string email;
        bytes32 passwordHash;
        string ipfsHash;
    }

    struct Doctor {
        string name;
        string hospitalName;
        string hospitalLocation;
        string dob;
        string gender;
        string email;
        string specialization;
        string department;
        string designation;
        uint256 experience;
        bytes32 passwordHash;
    }

    mapping(address => Patient) public patients;
    mapping(address => Doctor) public doctors;
    mapping(address => bool) public isRegistered;
    mapping(address => bool) public isPatient;

    event PatientRegistered(address indexed patientAddress, string name);
    event DoctorRegistered(address indexed doctorAddress, string name);
    event DocumentUploaded(address indexed patientAddress, string ipfsHash);

    modifier onlyNewUser() {
        require(!isRegistered[msg.sender], "Already registered");
        _;
    }

    modifier onlyPatient() {
        require(isPatient[msg.sender], "Only patients can upload documents");
        _;
    }

    function registerPatient(
        string memory _name,
        string memory _dob,
        string memory _gender,
        string memory _bloodGroup,
        string memory _homeAddress,
        string memory _email,
        string memory _password
    ) public onlyNewUser {
        patients[msg.sender] = Patient(
            _name,
            _dob,
            _gender,
            _bloodGroup,
            _homeAddress,
            _email,
            sha256(abi.encodePacked(_password)),
            ""
        );
        isRegistered[msg.sender] = true;
        isPatient[msg.sender] = true;
        emit PatientRegistered(msg.sender, _name);
    }

    function registerDoctor(
        string memory _name,
        string memory _hospitalName,
        string memory _hospitalLocation,
        string memory _dob,
        string memory _gender,
        string memory _email,
        string memory _specialization,
        string memory _department,
        string memory _designation,
        uint256 _experience,
        string memory _password
    ) public onlyNewUser {
        doctors[msg.sender] = Doctor(
            _name,
            _hospitalName,
            _hospitalLocation,
            _dob,
            _gender,
            _email,
            _specialization,
            _department,
            _designation,
            _experience,
            sha256(abi.encodePacked(_password))
        );
        isRegistered[msg.sender] = true;
        emit DoctorRegistered(msg.sender, _name);
    }

    function uploadDocument(string memory _ipfsHash) public onlyPatient {
        patients[msg.sender].ipfsHash = _ipfsHash;
        emit DocumentUploaded(msg.sender, _ipfsHash);
    }

    function getPatientIPFS(address _patientAddress) public view returns (string memory) {
        return patients[_patientAddress].ipfsHash;
    }

    function getPatient(address _patientAddress) public view returns (Patient memory) {
        return patients[_patientAddress];
    }

    function getDoctor(address _doctorAddress) public view returns (Doctor memory) {
        return doctors[_doctorAddress];
    }
}
