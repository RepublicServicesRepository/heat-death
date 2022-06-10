importScripts('./bundle.js')

let data = []
function quadratic(array) {
    let combined = [];
    for (let x = 0; x < array.length; x++) {
        for (let y = array.length - 1; y >= 0; y--) {
            combined.push(array[x]*array[y])
        }
    }
}

function quadratic1(array) {
    let combined = [];
    array.map(i => { 
        array.map(j => {
                combined.push(i*j);
        })
    })
    return combined;
}


function testQuadratic(arrays) {
    arrays.forEach(array => {
        const start = `start - ${quadratic.name} - ${array.length}`
        const finish = `finish - ${quadratic.name } - ${array.length}`

        performance.mark(start);
        quadratic(array);
        performance.mark(finish);

        performance.measure(`${array.length}`, start, finish);  

    })
    
}
self.addEventListener("message", (e) => {
    testQuadratic(e.data);
}, false)

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntriesByType('measure'));
    let entries = JSON.parse(JSON.stringify(list.getEntriesByType('measure')));
    entries.forEach(entry => {
        data.push( {
            iterations: entry.name,
            duration: entry.duration,
            startTime: entry.startTime
        })

    })
    postMessage(data);
    observer.disconnect();
    });
    
obs.observe({ entryTypes: ['measure'], buffered: true });
