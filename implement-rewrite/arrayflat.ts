
// This is a JavaScript coding problem from BFE.dev 

type Func = (arr: Array<any>, depth?:number) => Array<any>

const flat: Func = function (arr, depth = 1) {
  // your imeplementation here

  let res = []

  while(depth >= 1) {
   let array: any[] = res.length > 0 ? res : arr
   res = []
    for (let i = 0 ; i < array.length; i++) {
      typeof array[i] === 'object' ? res.push(...array[i]) : res.push(array[i])
    }
    if (JSON.stringify(array) === JSON.stringify(res)) {
      return res
    }
    depth --
  }
  return res
}


