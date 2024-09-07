function calculateTransferSavings() {
    // Get input values
    let outstandingBalance = parseFloat(document.getElementById('outstandingBalance').value);
    let currentRate = parseFloat(document.getElementById('currentRate').value);
    let newRate = parseFloat(document.getElementById('newRate').value);
    let remainingTenureYears = parseFloat(document.getElementById('remainingTenure').value);

    // Check if all inputs are filled
    if (!outstandingBalance || !currentRate || !newRate || !remainingTenureYears) {
        document.getElementById('transferResult').innerText = "Please fill out all fields correctly.";
        return;
    }

    // Convert remaining tenure from years to months
    let remainingTenureMonths = remainingTenureYears * 12;

    // Calculate the monthly interest rates
    let currentMonthlyRate = (currentRate / 12) / 100;
    let newMonthlyRate = (newRate / 12) / 100;

    // Calculate current EMI
    let currentEMI = (outstandingBalance * currentMonthlyRate * Math.pow(1 + currentMonthlyRate, remainingTenureMonths)) / 
                     (Math.pow(1 + currentMonthlyRate, remainingTenureMonths) - 1);

    // Calculate new EMI if the loan is transferred
    let newEMI = (outstandingBalance * newMonthlyRate * Math.pow(1 + newMonthlyRate, remainingTenureMonths)) / 
                 (Math.pow(1 + newMonthlyRate, remainingTenureMonths) - 1);

    // Calculate the savings in EMI
    let emiSavings = currentEMI - newEMI;

    // Calculate total savings over the remaining tenure
    let totalSavings = emiSavings * remainingTenureMonths;

    // Display the results
    document.getElementById('transferResult').innerHTML = `
        <strong>Current EMI: ₹${currentEMI.toFixed(2)}</strong><br>
        <strong>New EMI (After Transfer): ₹${newEMI.toFixed(2)}</strong><br>
        <strong>Monthly Savings: ₹${emiSavings.toFixed(2)}</strong><br>
        <strong>Total Savings Over Remaining Tenure: ₹${totalSavings.toFixed(2)}</strong>
    `;
}
