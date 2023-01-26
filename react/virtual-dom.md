
## 工作原理

virtual-dom的工作原理是通过JS对象模拟DOM节点。

虚拟dom在实现上通常是plain object，以React为例，在render函数中写的JSX会在babel插件的作用下，便以为React.createElement执行JSX中的属性参数


React.createElement执行后会返回plain object， 会描述自己的tag类型、props属性以及children情况。这些plain object通过树形结构组成一颗虚拟dom树。当状态发生变更时，将变更前后的虚拟dom树进行差异比较，这个过程被称为diff，生成的结果称为patch。计算之后，会渲染patch完成对真实dom的操作


虚拟dom的优点

- 改善大规模dom操作的性能：大量的直接dom操作会引起网页性能下降，通过基于虚拟dom的diff处理与批处理操作，降低dom的操作范围与频次，提升页面性能
- 规避XSS风险： 虚拟dom内部会确保字符转义，但是react保留了dangerousSetInnerHtml绕过转义
- 能以较低的成本实现跨平台开发： 比如NativeScript 没有虚拟dom层，提供兼容原生的API的JS API来实现跨平台开发


虚拟dom的缺点

- 内存占用较高，因为需要模拟整个页面的真实dom
- 高性能的应用场景会存在难以优化的情况