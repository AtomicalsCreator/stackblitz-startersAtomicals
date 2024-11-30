Atomicals Realm and Subrealm Tool

This project is a comprehensive toolkit for managing Atomicals Realms, Subrealms, and PayNames, with additional support for live Bitcoin statistics and various utility features. Built with a user-friendly interface, it allows users to perform key tasks like querying Realms, minting Subrealms, validating PayNames, and more.

Features

	1.	Realm Query
	•	Check if a Realm is already minted or available for minting.
	•	Provides detailed Realm information via Atomicals API.
	2.	Subrealm Minting
	•	Mint new Subrealms under an existing Realm using Atomicals API.
	•	Ensures compliance with custom rules (e.g., Bitwork, payment requirements).
	3.	PayName Validation
	•	Validate PayNames to ensure correct formatting (+inbox@realm).
	•	Support for multiple cryptocurrency address types within a PayName.
	4.	Live Bitcoin Statistics
	•	Fetch current Bitcoin price, market cap, and sat/vb rate using Coindesk API.
	•	View updated network stats for Bitcoin.
	5.	Integration with Atomicals Protocol
	•	Full support for Atomicals operations like commit and reveal for Realms and Subrealms.
	•	CBOR decoding and parsing for Atomicals payloads.
	6.	API Utility
	•	Centralized API calls using ElectrumX.
	•	Modular design for easy extension.
	7.	Utility Functions
	•	Helper functions for decoding, formatting, and handling various tasks across the application.

Technologies Used

Frontend:

	•	HTML5, CSS3, JavaScript

Backend:

	•	Node.js
	•	Axios for API calls
	•	CBOR for decoding Atomicals payloads

Installation

	1.	Clone the repository:

git clone https://github.com/AtomicalsCreator/AtomicalsRealm.git


	2.	Navigate to the project directory:

cd AtomicalsRealm


	3.	Install dependencies:

npm install

Usage

Start the Application

To start the application, run the following command:

npm start

The application will be available at http://localhost:3000.

Features Overview

Realm Query:

	•	Input a Realm name and check if it’s available or already minted.
	•	Displays detailed Realm metadata if available.

Subrealm Minting:

	•	Input a Subrealm name and mint it under an existing Realm.
	•	Adheres to custom rules defined by the parent Realm owner.

PayName Validation:

	•	Validate PayName format (+inbox@realm).
	•	Highlights errors if the format is incorrect.

Bitcoin Statistics:

	•	View live Bitcoin stats including price, market cap, and sat/vb.

Project Structure

AtomicalsRealm/
├── assets/               # Static assets (images, icons, etc.)
├── constants.js          # Centralized constants and API endpoints
├── helperFunctions.js    # Shared helper functions
├── getBitcoinStats.js    # Fetches Bitcoin live stats
├── realmQuery.js         # Handles Realm availability checks
├── subRealmRules.js      # Handles Subrealm minting logic
├── payName.js            # Validates PayName formatting
├── atomicalsIntegration.js # CBOR decoding and Atomicals API integration
├── index.html            # Main HTML file
├── styles.css            # Custom CSS for UI styling
├── script.js             # Core JavaScript for frontend interactions
├── package.json          # Project dependencies and metadata
└── README.md             # Documentation (you're here!)

APIs Used

	1.	Atomicals API
	•	blockchain.atomicals.get_realm_info: Fetch Realm metadata.
	•	blockchain.atomicals.mint_subrealm: Mint Subrealms under a Realm.
	2.	Coindesk API
	•	Fetch Bitcoin price and related stats.
	3.	ElectrumX API
	•	Centralized calls for handling Atomicals operations.

Future Features

	•	Add dynamic rules for Realms and Subrealms based on user input.
	•	Expand Bitcoin statistics to include block height and validator activity.
	•	Add real-time transaction monitoring for minted Atomicals.

Contribution

Contributions are welcome! Please follow these steps:
	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature-name


	3.	Commit your changes and push:

git commit -m "Description of changes"
git push origin feature-name


	4.	Open a pull request.

License

This project is licensed under the MIT License.

Contact

For questions or suggestions, reach out at:
	•	GitHub Issues: Open an Issue
	•	Email: support@atomicalsrealm.com

Let me know if you’d like me to push this updated README.md to your repository!