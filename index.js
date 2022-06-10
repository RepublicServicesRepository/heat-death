import { testConstant } from './constant.js'
import { testLinear } from './linear.js'
import { testQuadratic } from './quadratic.js'
import { testExponential } from './exponential.js'
import { testFactorial } from './factorial.js'


import  { performance, PerformanceObserver } from 'perf_hooks';


function testComplexity(funct, iterations) {
    funct(iterations);
    
}
const obs = new PerformanceObserver((list, observer) => {
        console.log(list.getEntriesByType('measure'));
        observer.disconnect();
    
    });
    
obs.observe({ entryTypes: ['measure'], buffered: true });
    
testComplexity(testConstant);
testComplexity(testLinear);
testComplexity(testQuadratic); // 20 seconds
testComplexity(testExponential); // 45 takes 13
testComplexity(testFactorial); // 12 takes 7