import { performance } from 'perf_hooks'


export function arrayBuilder(x) {
    return Array.from({ length: x }, (v, i) => i+1) 
}

export function measureFunction(funct,input, iteration) {
    const start = `start - ${funct.name } - ${iteration}`
    const finish = `finish - ${funct.name } - ${iteration}`

    performance.mark(start);
    funct(input);
    performance.mark(finish);

    performance.measure(`${funct.name} - ${iteration}`, start, finish);  
}


