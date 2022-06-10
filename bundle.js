(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bundle = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
/* eslint-env browser */

var performance = global.performance
var PerformanceObserver = global.PerformanceObserver

var nodeTiming = {}

// Does not do anything right now.
// This could be implemented by wrapping the `PerformanceObserver` callback
// and using `performance.measure()` with a special name (like "timerified [fn]")
// Then when `entryTypes: ['function']` is passed we observe "measure" instead and filter the entries.
function timerify (fn) {
  return fn
}

function measure (name, startMark, endMark) {
  // Allowed in the browser but not in Node.js
  if (endMark === undefined) {
    throw new Error('The mark \'undefined\' does not exist')
  }

  try {
    return performance.measure(name, startMark, endMark)
  } catch (error) {
    // Handle case where browsers will throw when `startMark` does not exist, while Node.js defaults to 0
    if (error.message.indexOf('The mark \'' + startMark + '\' does not exist') !== -1) {
      return performance.measure(name, undefined, endMark)
    }
    throw error
  }
}

exports.performance = {
  clearMarks: performance.clearMarks.bind(performance),
  mark: performance.mark.bind(performance),
  measure: measure,
  now: performance.now.bind(performance),
  nodeTiming: nodeTiming,
  timeOrigin: performance.timeOrigin,
  timerify: timerify
}
exports.PerformanceObserver = PerformanceObserver

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
const perfHooksBrowserify = require('perf-hooks-browserify');
//import { perfHooksBrowserify } from 'perf-hooks-browserify';
var utils;
function arrayBuilder(x) {
    return Array.from({ length: x }, (v, i) => i+1) 
}

function measureFunction(funct,input, iteration) {
    const start = `start - ${funct.name } - ${iteration}`
    const finish = `finish - ${funct.name } - ${iteration}`

    perfHooksBrowserify.performance.mark(start);
    funct(input);
    perfHooksBrowserify.performance.mark(finish);

    perfHooksBrowserify.performance.measure(`${funct.name} - ${iteration}`, start, finish);  
}

exports.utils = {
    arrayBuilder: arrayBuilder,
    measureFunction: measureFunction

}

},{"perf-hooks-browserify":1}]},{},[2])(2)
});
