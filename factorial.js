import { measureFunction } from './util.js';

const deafultIterations = [12];



// let n = positive interger value
export function factorial(n) {
    let num = n
    if(n === 0) return 1
    for(let x = 0; x < n; x++){
        num = n * factorial(n-1)
    }
 return num
} 



export function testFactorial(iterations = deafultIterations) {
    iterations.map(iteration => {
        measureFunction(factorial, iteration, iteration)
    })
}


