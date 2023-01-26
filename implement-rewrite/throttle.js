// 每一段时间只执行一次

/**
 * 
 * @param {function} fn 
 * @param {number} t 
 */
export const throttle = (fn, t) => {

  let currentDate, lastDate = 0

  
  return function(...args) {
    currentDate = +new Date()
    if (currentDate - lastDate >= t) {
     
      setTimeout(() => fn(...args), t) 
      lastDate = +new Date()
    }
 
  }
}


const testFunc = (n) => console.log(n)
const runFunc = throttle((n) => testFunc(n), 2000)

runFunc(0)

setTimeout(() => runFunc(1), 1000)
setTimeout(() =>runFunc(2), 9500)
setTimeout(() =>runFunc(3), 10000)
