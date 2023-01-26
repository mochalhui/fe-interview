## JSX
jsx 是结构类似XML的基于javascript的语法扩展

JSX主要用于声明react元素，但是React中并不强制使用JSX。
JSX会在本地构建过程中，由babel编译为React.createElement()，最终返回ReactElement。
所以从这看JSX更像是React.createElement()的语法糖

从这里可以看出， React团队并不想引入JavaScript本身以外的开发体系。而是期望通过合理的关注点分离保持组件开发的纯粹性

## 其他方案

### 模版字符串
模版字符串编写的结构会造成多次嵌套，使得整个结构变得复杂，并且优化代码也会变得十分困难

### 模版
模版自身引入了 模版语法 / 模版指令等等，react团队更期望不引入其他体系，不应该把开发的重点放在学习模版的语法上


## 结论
- react团队选择了jsx，jsx更贴合react的开发理念，同时也跟dom树结构相似，不需要引入其他过多的概念，对编辑器的代码提示也极为友好
- jsx可以有效防止XSS攻击，jsx会由babel编译为React.createElement()，返回ReactElement对象，其中`$$typeof`用来标记对象是ReactElement，校验不通过会报错。React利用这个属性来防止通过构造特殊的children来进行XSS攻击。之所以可以用`$$typeof`这个属性，是因为是一个Symbol类型，进行JSON转换后Symbol会丢失，无法在前后端进行传输，可以防止存储型XSS攻击（XSS脚本来自服务器数据库中）