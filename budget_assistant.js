// Step 1: Create and Initialize Variables
// Declare a variable for the startup name (string).
// Declare variables for:
// Initial capital (number)
// Monthly revenue (number)
// Monthly expenses (number)
let startupName = "Tech Innovators";
let initialCapital = 50000; // in dollars   
let monthlyRevenue = 15000; // in dollars
let monthlyExpenses = 8000; // in dollars



// Step 2: Calculate Business Metrics
// Create a variable for net cash flow: revenue minus expenses
// Create a variable for current balance: initial capital plus net cash flow
// Create a boolean variable for profitability (true if net cash flow > 0)  
let netCashFlow = monthlyRevenue - monthlyExpenses; // in dollars
let currentBalance = initialCapital + netCashFlow; // in dollars        
let isProfitable = netCashFlow > 0; // boolean value


// Step 3: Print to Console
// Use console.log() to display:
// Startup name
// Net Monthly Cash Flow
// Current Balance
// Profitability Status (true or false)

console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);      
console.log("Current Balance: $" + currentBalance);     
console.log("Is Profitable: " + isProfitable); // true or false


