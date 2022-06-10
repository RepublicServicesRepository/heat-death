importScripts('./bundle.js')

let data = [];
function linear(array) {
    let something = array.map(value => {
        if (value % 2 == 1) {
            let odd = value
        }
    })
    return something
}


function testLinear(arrays) {
    arrays.map(array => {
        const start = `start - ${linear.name} - ${array.length}`
        const finish = `finish - ${linear.name} - ${array.length}`

        performance.mark(start);
        linear(array);
        performance.mark(finish);

        performance.measure(`${array.length}`, start, finish);

    })

}
self.addEventListener("message", (e) => {
    testLinear(e.data);
}, false)

const obs = new PerformanceObserver((list, observer) => {
    console.log(list.getEntriesByType('measure'));
    let entries = JSON.parse(JSON.stringify(list.getEntriesByType('measure')));
    entries.forEach(entry => {
        data.push({
            iterations: entry.name,
            duration: entry.duration,
            startTime: entry.startTime
        })

    })
    postMessage(data);
    performance.clearMarks();
    observer.disconnect();
});

obs.observe({ entryTypes: ['measure'], buffered: true });

