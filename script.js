document.addEventListener('DOMContentLoaded', () => {
    const currencySelect = document.getElementById('currency');
    const pricesMonthly = document.querySelectorAll('.price.monthly');
    const pricesSemiAnnual = document.querySelectorAll('.price.semi-annual');
    const pricesAnnual = document.querySelectorAll('.price.annual');

    currencySelect.addEventListener('change', updatePrices);

    function updatePrices() {
        const currency = currencySelect.value;
        updatePrice(pricesMonthly, currency, 'month');
        updatePrice(pricesSemiAnnual, currency, 'semi-annual');
        updatePrice(pricesAnnual, currency, 'annual');
    }

    function updatePrice(priceElements, currency, period) {
        priceElements.forEach(price => {
            const amount = price.getAttribute(`data-${currency.toLowerCase()}`);
            price.textContent = `${getCurrencySymbol(currency)}${amount}/${period}`;
        });
    }

    function getCurrencySymbol(currency) {
        switch (currency) {
            case 'USD':
                return '$';
            case 'INR':
                return '₹';
            case 'CAD':
                return 'C$';
            case 'GBP':
                return '£';
            default:
                return '$';
        }
    }
});
