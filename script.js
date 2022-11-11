// ---------- Total number of months 

var totalMonths = finances.length;

// console.log(totalMonths); // Total Number of Months

// ----------- Total Profit and Losses
var netProfit = 0;
var profit = 0;

for (var mainIndex = 0; mainIndex < finances.length; mainIndex++) {
         
    profit = finances[mainIndex][1];
        //  console.log(profit);
         
        netProfit += profit;    
}
// console.log(netProfit);  // Total Net Profit





// || Average Change in Profit and Losses
var averageChange = netProfit / totalMonths;

console.log(averageChange);
   

// Greatest Increase in Profits 
// Greatest Decrease in Profits