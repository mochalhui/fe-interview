## 概念
根据React官方文档给出的定义，react是一个用于构建用户界面的JavaScript库

## 用途
由于React 引入了virtual-dom的设计，让开发者不会真实操作dom
- 可以用于pc端网页 + 移动端网页
- 可以利用react native开发iOS、Android页面

## 特性

### 声明式
``` JavaScript
//命令式

<div id='test'>123</div>

···

docuemnt.getElementById('test').style.color = 'red'

```


```JavaScript

<div id='test' style={{color: 'red'}}>123</div>

```


- 代码简洁、清晰，便于理解


### 组件化
- 组件化可以降低系统间功能的耦合性，提高功能内部的聚合行，对于前端工程化及代码复用有极大的好处
- react 组件化最大的区别在于没有使用模版进行编写，而是采用了声明式的jsx

### 通用型 / 一次学习
react引入了virtual-dom，使得开发者不会真正操作dom，可以用react跨平台开发


## 优点/ 缺点
- 这些特性使得react 的使用范围变得足够广
- 同时作为视图层的框架，react没有提供完整的一揽子解决方案，在开发大型前端应用，需要向社区寻找并整合解决方案，虽然促进了社区的繁荣，但也在技术选型 / 学习适用上有一定的成本