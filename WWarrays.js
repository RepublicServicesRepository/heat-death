function buildArrays(iterations) {
    let arrays = []
    iterations.forEach(iteration => {
        arrays.push(Array.from({ length: iteration }, (v, i) => i + 1))
    })
    postMessage(arrays);
}



self.addEventListener("message", (e) => {
    let data = e.data;
    buildArrays(data);
}, false)

