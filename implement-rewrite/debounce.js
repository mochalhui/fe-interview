// 在一段时间内，不管触发多少次 都以最后一次为准


/**
 * 
 * @param {function} fn 
 * @param {number} t 
 */
const debounce = (fn, t) => {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => fn(...args), t)
  }
}


const test = (n) =>  console.log(n)
const run = debounce((n) => test(n), 2000)


run(1)
run(2)
setTimeout(() => run(3), 1500)

setTimeout(() => run(4), 4000)
setTimeout(() => run(5), 5000)



