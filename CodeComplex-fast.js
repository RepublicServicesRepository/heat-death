const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const startingS = 'Starting'
const constantS = 'Constant'
const linearS = "Linear"
const quadraticS = 'Quadratic'



const array = [1,2,3,4,5,6,7,8,9,10]

function constant(array){
	// some kind of computation
  // Constant Time O(1)
}


function linear(array){
	for(var x=0; x<array.length; x++){
  	// some kind of value identification
    // Linear Time O(n)
  }
}

function quadratic(array){
	for(var x=0; x<array.length; x++){
    for(var y=array.length; y>=0; y--){
    	// some kind of  value comparision
      // Quadratic Time O(n^2)
  	}
  }
}

performance.mark(startingS)
constant(array);
performance.mark(constantS)
linear(array);
performance.mark(linearS)
quadratic(array);
performance.mark(quadraticS)

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntriesByType('measure'));
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'], buffered: true });

 performance.measure("Constant Time", startingS, constantS);
 performance.measure("Linear Time", constantS, linearS);
 performance.measure("Quadratic Time", linearS, quadraticS);