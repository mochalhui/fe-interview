const PENDING = 'pending',
  FULLFILLED = 'fullfilled',
  REJECTED = 'rejected'


/**
 * 
 * @param {(resolve: (value: any) => void, reject: (reason?: any) => void) => void} executor 
 */
function MyPromise(executor){
  this.state = PENDING
  this.resolveCallback = []
  this.rejectCallback = []
}
MyPromise.resolve = function (...args) {
  const promise = new MyPromise((res, rej) => {

  })
  return promise
}


// const testMy = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// });


// const my = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('foo');
//   }, 300);
// })

console.log(Promise.resolve(1))

console.log(MyPromise.resolve(1))

// const test2  = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('foo');
//   }, 300);
// });