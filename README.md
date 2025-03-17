# Currency Converter

## Overview
The **Currency Converter** is a web-based application that allows users to convert between multiple currencies in real-time. The application features an intuitive and visually appealing user interface that supports both keyboard and on-screen numpad input for seamless user interaction.

## Features
- **Real-time Currency Conversion**: Fetches live exchange rates.
- **Dual Input Methods**: Users can enter values using both the keyboard and an on-screen numpad.
- **Multiple Currency Support**: Convert between at least 9-10 different currencies.
- **Interactive UI**: A stylish and minimalistic interface with dark-themed glassmorphism design.
- **Swap Functionality**: Easily swap between 'From' and 'To' currencies.
- **Date Display**: Displays the current date for reference.

## Technology Stack
- **HTML**: Structure of the web application.
- **CSS**: Styling and UI design.
- **JavaScript (ES6+)**: Handles currency conversion logic, API calls, and UI interactions.
- **External API**: Fetches real-time exchange rates (e.g., Open Exchange Rates, ExchangeRate-API).

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Edge, etc.)
- A code editor (VS Code, Sublime Text, etc.)

### Steps
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-repository/currency-converter.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd currency-converter
   ```
3. **Open `index.html` in your browser**:
   ```sh
   start index.html   # Windows
   open index.html    # MacOS
   ```

## Usage
1. Select the currency you want to convert from.
2. Enter the amount using the numpad or keyboard.
3. Select the currency you want to convert to.
4. The converted value will be displayed automatically.
5. Click the **Swap** button to switch between currencies.
6. Use the **Backspace** button on the numpad to delete numbers.

## File Structure
```
/currency-converter
│── index.html        # Main HTML file
│── styles.css        # Stylesheet for UI
│── script.js         # JavaScript for logic and API handling
│── README.md         # Project documentation
```

## API Integration
This project fetches real-time exchange rates using a third-party API. You may need to sign up for an API key from a provider such as:
- [ExchangeRate-API](https://www.exchangerate-api.com/)
- [Open Exchange Rates](https://openexchangerates.org/)

To configure the API, modify `script.js`:
```js
const API_KEY = 'your_api_key_here';
const API_URL = `https://api.exchangerate-api.com/v4/latest/USD?apikey=${API_KEY}`;
```

## Future Enhancements
- **Offline Mode**: Save last fetched exchange rates for offline access.
- **Historical Data**: Show exchange rate trends over time.
- **Graphical Representation**: Display conversion trends with charts.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For any inquiries, reach out to:
- **Email**: chiragwamanacharya42@gmail.com
- **GitHub**: https://github.com/Chirag-wamanacharya12
- **Visit site**: https://advancedcurrencyconvertor.netlify.app/

