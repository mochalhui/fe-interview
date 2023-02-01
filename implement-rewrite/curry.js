
// 柯里化 ：关键利用好bind 返回新的函数 储存当前args， 利用apply 执行 当前所有args


// call(), apply(), bind() 用法参考 https://betterprogramming.pub/when-to-use-bind-call-and-apply-in-javascript-1ae9d7fa66d5

function curry(fn) {
  return function res(...args) {
    if (args.length < fn.length) {
      return res.bind(this, ...args)
    } else {
     return fn.apply(this, args)
    }
  }
}

