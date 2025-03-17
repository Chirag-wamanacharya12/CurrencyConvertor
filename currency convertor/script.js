const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const fromAmount = document.getElementById("from-amount");
const toAmount = document.getElementById("to-amount");
const swapButton = document.getElementById("swap");
const numpadButtons = document.querySelectorAll(".num");
const backspaceButton = document.getElementById("backspace");
const currentDate = document.getElementById("current-date");

// Set current date
currentDate.textContent = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
});

// Available currencies
const currencies = ["USD", "EUR", "GBP", "INR", "JPY", "AUD", "CAD", "CHF", "CNY", "SGD"];

// Populate dropdowns
currencies.forEach(currency => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = option2.value = currency;
    option1.textContent = option2.textContent = currency;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
});
fromCurrency.value = "USD";
toCurrency.value = "EUR";

// Fetch exchange rate and update amount
async function updateExchangeRate() {
    const base = fromCurrency.value;
    const target = toCurrency.value;
    const amount = parseFloat(fromAmount.value) || 0;
    
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
    const data = await response.json();
    const rate = data.rates[target];
    toAmount.value = (amount * rate).toFixed(2);
}

fromCurrency.addEventListener("change", updateExchangeRate);
toCurrency.addEventListener("change", updateExchangeRate);
swapButton.addEventListener("click", () => {
    [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
    updateExchangeRate();
});

// Handle numpad input
numpadButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (fromAmount.value === "0") fromAmount.value = "";
        fromAmount.value += button.textContent;
        updateExchangeRate();
    });
});

backspaceButton.addEventListener("click", () => {
    fromAmount.value = fromAmount.value.slice(0, -1) || "0";
    updateExchangeRate();
});

updateExchangeRate();