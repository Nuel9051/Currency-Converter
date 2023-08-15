document.getElementById('convert-btn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    
    const exchangeRates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.72,
        
    };

    if (isNaN(amount)) {
        document.getElementById('result').textContent = 'Please enter a valid amount.';
    } else if (!exchangeRates.hasOwnProperty(fromCurrency) || !exchangeRates.hasOwnProperty(toCurrency)) {
        document.getElementById('result').textContent = 'Invalid currency selection.';
    } else {
        const convertedAmount = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
        document.getElementById('result').textContent = `${amount.toFixed(2)} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
});

