importScripts('./bundle.js')

let data = []
function exponential(n) {
    if(n === 0) return 0
  else if (n === 1) return 1

    return exponential(n - 1) + exponential(n - 2)
}


function testexponential(array) {
    array.forEach(value => {
        const start = `start - ${exponential.name} - ${value}`
        const finish = `finish - ${exponential.name } - ${value}`

        performance.mark(start);
        exponential(value);
        performance.mark(finish);

        performance.measure(`${value}`, start, finish);  

    })
    
}
self.addEventListener("message", (e) => {
    //i think array builder is adding an array 
    testexponential(e.data[0]);
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
