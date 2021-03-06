// 不确定参数个数
function add(...params) {
  const proxy = function(...args) {
    params = params.concat(args);
    return proxy;
  }
  proxy.toString = () => {
    // 基于函数运算或者输出的时候，会依次调取函数的 Symbol.toPrimitive/valueOf/toString
    return eval(params.join('+'));
  }
  return proxy;
}

console.log(add(1)(2)(3).toString()); //->6

console.log(add(1, 2, 3)(4).toString()); //->10

console.log(add(1)(2)(3)(4)(5).toString()); //->15

