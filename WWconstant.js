importScripts('./bundle.js')

let data = []
function constant(array) {
    console.log(array.length);
    console.log(array.length * 2);
    console.log(array.length * array.length);
    console.log(array.length * array.length * array.length);
    return array;
}


function testConstant(arrays) {
    arrays.forEach(array => {
        const start = `start - ${constant.name} - ${array.length}`
        const finish = `finish - ${constant.name } - ${array.length}`

        performance.mark(start);
        constant(array);
        performance.mark(finish);

        performance.measure(`${array.length}`, start, finish);  

    })
    
}
self.addEventListener("message", (e) => {
    testConstant(e.data);
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
