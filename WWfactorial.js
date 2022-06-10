importScripts('./bundle.js')

let data = []
function factorial(n) {
      let num = n
    if(n === 0) return 1
    for(let x = 0; x < n; x++){
        num = n * factorial(n-1)
    }
 return num
}


function testFactorial(array) {
    array.forEach(value => {
        const start = `start - ${factorial.name} - ${value}`
        const finish = `finish - ${factorial.name } - ${value}`

        performance.mark(start);
        factorial(value);
        performance.mark(finish);

        performance.measure(`${value}`, start, finish);  

    })
    
}
self.addEventListener("message", (e) => {
    //i think array builder is adding an array 
    testFactorial(e.data[0]);
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
