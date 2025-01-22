let totalAmount = 0;

function addExpense() {
    const expenseName = document.getElementById('expense-name').value.trim();
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-amount');

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }



}