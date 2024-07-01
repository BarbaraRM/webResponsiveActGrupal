document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '6844ef2390msh7e333101398ad58p1a29a0jsn19bb6d312a99';
    const symbols = ['AG:NYSE', 'NEM:NYSE', 'RGLD:NASDAQ'];
    const period = 'QUARTERLY';
    const language = 'en';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
        }
    };

    async function fetchData(symbol, tableId) {
        const endpoint = `https://real-time-finance-data.p.rapidapi.com/company-balance-sheet?symbol=${symbol}&period=${period}&language=${language}`;

        try {
            const response = await fetch(endpoint, options);
            const result = await response.json();
            displayData(result.data.balance_sheet, tableId);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayData(balanceSheet, tableId) {
        const tableBody = document.getElementById(tableId);
        tableBody.innerHTML = '';

        balanceSheet.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${item.year}</th>
                <td>$${item.cash_and_short_term_investments}</td>
                <td>${item.return_on_assets_percent}%</td>
                <td>${item.return_on_capital_percent}%</td>
            `;
            tableBody.appendChild(row);
        });
    }

    fetchData(symbols[0], 'table-body-1');
    fetchData(symbols[1], 'table-body-2');
    fetchData(symbols[2], 'table-body-3');
});

