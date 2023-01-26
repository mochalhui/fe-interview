setState并非是真的异步，只是在大多数场景下异步。

setState是否异步是由`isBatchingUpdates` 判断的，如果是true， 异步； false, 直接更新

大多数场景是指 ： react可以控制的地方比如 react生命周期事件 + 合成事件，都可以进行合并操作，走异步更新

react无法控制的事件： 原生事件， setTimeout 、 setTimeInterval只能同步更新

异步更新的原因：

- 保持内部一致性，props是异步更新的
- 启用并发更新，完成异步渲染，性能优化