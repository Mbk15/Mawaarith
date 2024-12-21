# Islamic Inheritance Calculator

The **Islamic Inheritance Calculator** is a web-based application designed to simplify the process of calculating inheritance shares according to Islamic principles. It is built using **React**, integrated with the **Solana blockchain**, and provides a modern user interface to manage heirs and visualize inheritance distribution.

---

## Features

- **Add and Manage Heirs:**
  Easily input details about heirs, including their relationship and gender.

- **Real-Time Calculations:**
  Instantly calculate inheritance shares based on Islamic laws.

- **Interactive Visualizations:**
  Visualize the distribution of inheritance using charts and progress bars.

- **Blockchain Integration:**
  Powered by Solana, providing secure and decentralized functionality.

- **Wallet Integration:**
  Supports wallets like Phantom for interacting with blockchain features.

---

## Tech Stack

- **Frontend:** React, TypeScript
- **Blockchain:** Solana, `@solana/web3.js`
- **Wallet Support:** `@solana/wallet-adapter-react`
- **UI Framework:** Tailwind CSS

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/islamic-inheritance-calculator.git
   cd islamic-inheritance-calculator
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Usage

1. **Add Heirs:**
   Use the provided form to add details about heirs.

2. **Calculate Shares:**
   The app automatically calculates the shares for each heir based on Islamic inheritance laws.

3. **View Results:**
   Visualize the distribution of shares using an interactive chart.

4. **Blockchain Interaction:**
   Connect your Solana wallet for additional blockchain functionality.

---

## Project Structure

```plaintext
src
├── components      # Reusable React components
├── context         # Context providers for state management
├── types           # TypeScript type definitions
├── utils           # Utility functions for calculations
├── styles          # Global styles and Tailwind CSS configuration
└── App.tsx         # Main application file
```

---

## Dependencies

Key dependencies used in the project:

- **React:** Frontend library
- **@solana/web3.js:** Solana blockchain utilities
- **@solana/wallet-adapter-react:** Wallet integration
- **lucide-react:** Icon library
- **Tailwind CSS:** Styling framework

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- **Solana Blockchain** for their developer-friendly tools
- **Tailwind CSS** for elegant and responsive UI design
- **Islamic Scholars** for providing guidelines on inheritance principles
