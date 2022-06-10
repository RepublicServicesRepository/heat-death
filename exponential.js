import { measureFunction } from './util.js';

const deafultIterations = [16, 32, 40, 45];





// let n = positive interger value
export function exponential(n) {
  if(n === 0) return 0
  else if (n === 1) return 1
  return exponential(n - 1) + exponential(n - 2)
} 




export function testExponential(iterations = deafultIterations) {
    iterations.map(iteration => {
        measureFunction(exponential, iteration, iteration)
    })
}


