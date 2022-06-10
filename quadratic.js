import { measureFunction, arrayBuilder } from './util.js';

const deafultIterations = [10, 100, 10000, 100000, 200000];



// let array = [1,...,n]
export function quadratic(array) {
    for (let x = 0; x < array.length; x++) {
        for (let y = array.length - 1; y >= 0; y--) {
            let product = array[x] * array[y];
        }
    }
} 

export function testQuadratic(iterations = deafultIterations) {
    iterations.map(iteration => {
        const array = arrayBuilder(iteration);
        measureFunction(quadratic, array, iteration)
    })
}


