import { measureFunction, arrayBuilder } from './util.js';

const deafultIterations = [10, 100, 10000, 100000, 100000000];


// let array = [1,...,n]
export function constant(array) {
    return array.length * 2;
}




export function testConstant(iterations = deafultIterations) {
    iterations.map(iteration => {
        const array = arrayBuilder(iteration);
        measureFunction(constant, array, iteration)
    })
    
}



