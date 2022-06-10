import { measureFunction, arrayBuilder } from './util.js';

const deafultIterations = [1234,5678, 123456, 1123456, 2123456]
// let array = [1,...,n]
export function linear(array) {
    let reversed = []
    for (let x = array.length-1; x>=0; x--){
        reversed.push(array[x])
    }
} 



export function testLinear(iterations = deafultIterations) {
    iterations.map(iteration => {
        const array = arrayBuilder(iteration);
        measureFunction(linear, array, iteration)
    })
}


