
# ATM Machine

This is a simple ATM Machine web application built with React. It allows users to make deposits and cash back transactions, updating the account balance accordingly.

## Getting Started

To run the ATM Machine web application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/OneCleverFox/Refactor_the_ATM_Project.git
   ```

2. Start an HTTP server to serve the files. There are several ways to do this:

   - **Using Node.js**:
     - Install Node.js if you haven't already. You can download it from the official website: [https://nodejs.org](https://nodejs.org)
     - Open a terminal or command prompt and navigate to the project directory.
     - Install the `http-server` package globally by running the following command:
       ```shell
       npm install -g http-server
       ```
     - Start the server by running the following command:
       ```shell
       http-server
       ```
     - Open your web browser and visit [http://localhost:8080](http://localhost:8080) to access the application.

   - **Using Python**:
     - If you have Python installed, open a terminal or command prompt and navigate to the project directory.
     - Start the server by running the following command:
       ```shell
       python -m http.server
       ```
     - Open your web browser and visit [http://localhost:8000](http://localhost:8000) to access the application.

   - **Using VS Code Live Server Extension**:
     - If you use Visual Studio Code, you can install the Live Server extension from the VS Code Marketplace.
     - Open the project directory in VS Code.
     - Right-click on the `index.html` file and select "Open with Live Server" from the context menu.
     - The application will open in your default web browser.

## Usage

1. On the ATM Machine webpage, you will see two buttons: "Deposit" and "Cash Back".
2. Click on the "Deposit" button to make a deposit transaction, or click on the "Cash Back" button to make a cash back transaction.
3. Once you click on either button, an input field will appear where you can enter the transaction amount.
4. Enter the transaction amount in the input field.
5. Click the "Submit" button to process the transaction.
6. If the transaction is valid (not exceeding the account balance for cash back or negative amount for deposit), the account balance will be updated accordingly.
7. The updated account balance will be displayed below the buttons.

## Dependencies

The ATM Machine web application relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: A routing library for React applications.
- Bootstrap: A popular CSS framework for styling web pages.

These dependencies are loaded via CDN (Content Delivery Network) links in the HTML file.

## File Structure

The repository has the following file structure:

```
├── index.html
├── styles.css
├── Refact_ATM.jsx
└── README.md
```

- `index.html`: The main HTML file that includes the React components and necessary scripts and styles.
- `styles.css`: The CSS file that contains styles for the ATM Machine components.
- `Refact_ATM.jsx`: The JavaScript file that defines the React components and their functionality.
- `README.md`: This file, providing information about the ATM Machine web application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue