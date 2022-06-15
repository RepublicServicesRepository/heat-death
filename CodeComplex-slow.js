const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const startingS = 'Starting';
const exponentialS = 'Exponential';
const factorialS = 'Factorial'

// will identify the nth value of fibonacci
function exponential(n) {
  if(n === 0) return 0
  else if (n === 1) return 1

return exponential(n - 1) + exponential(n - 2)
}


// recursive facorial calculation
function factorial(n) {
let num = n
if(n === 0) return 1
  for(let x = 0; x < n; x++){
    num = n * factorial(n-1)
  }
 return num
}

performance.mark(startingS);
const exp = exponential(50);
performance.mark(exponentialS)
const fact = factorial(11);
performance.mark(factorialS);

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntriesByType('measure'));
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'], buffered: true });

 performance.measure("Exponential Time", startingS, exponentialS);
 performance.measure("Factorial Time", exponentialS, factorialS);