# heat-death
This was made to show off runtime complexites of some basic algorithms. Values can be modified in the html directly for maximum iterations and the number of arrays to test. Values too large will crash the page. You can just refresh the page to re-enable the button.

Required
Live Server - Something to host the files locally; I use the Live Server VScode extension
Browserify - This was used to package util.js => bundle.js. This helped me be able to import 'perf_hooks' to my Web Workers. 
perf-hooks-browserify - This wraps the node module so it can be exported by Browserify.

I think you could refactor a better means to access 'perf_hooks', but I had a very difficult time. I was unable to import the other helper functions in util/bundle.js; hence they are replicated in each WWAlogrithm.js file.

Algorithms
There are 2 files for each algorithm, they were written to be ran from an index.js file, but as I made the web app I needed to create individual Web Worker files. 

WWalogirthm.js - 
These files receive a postMessage from the HTML client with the data it is testing, the testAlgorithm() function will execute the algorithm with a performance mark before and after. When the performance mark is measured, the performance observer will postMessage() the relevant data back to the HTML.
These files will receive the arrays pregenerated from WWarrays.js and then the HTML page will randomize the 0 values - this helps not use simple values.

algorithm.js - 
These files were written to be handled and used independently. They rely on the util.js to build arrays and measure the performance marks, you will just need to make sure the entry call to testAlgorithm.js has its own PerformanceObserver and measure callback.