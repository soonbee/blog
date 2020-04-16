---
title: javascript 객체(배열) 깊은 복사
date: "2020-04-16"
template: "post"
draft: false
slug: "js-object-deep-copy" # url path
category: "js" # displayed on list
tags: # displayed in post
  - "js"
---

원시타입의 데이터와 다르게 배열 등 객체에 대해서는 레퍼런스 참조가 이루어진다. 그래서 아래와 foo를 bar에 복사한 후 bar를 변경하게 되면 foo 에도 영향을 미치게 된다. 

```js
const x = 10
const y = x
y = 11
console.log(x) // 10
console.log(y) // 11

const foo = [1, 2, 3]
const bar = foo
bar[0] = 0
console.log(foo) // [0, 2, 3]
console.log(bar) // [0, 2, 3]
```



어떻게 하면 새로운 객체를 생성할 수 있을까?



### Array.from

```js
const foo = [1, 2, 3]
const bar = Array.from(foo)
bar[0] = 0

console.log(foo) // [1, 2, 3]
console.log(bar) // [0, 2, 3]
```



### Object.assign

```js
const foo = { a: 1, b: 2 }
const bar = Object.assign({}, foo)
bar[a] = 0

console.log(foo) // { a: 1, b: 2}
console.log(bar) // { a: 0, b: 2}
```



### spread syntax

```js
const foo = [1, 2, 3]
const bar = [...bar]
bar[0] = 0

console.log(foo) // [1, 2, 3]
console.log(bar) // [0, 2, 3]
```



```js
const foo = { a: 1, b: 2 }
const bar = {...foo}
bar[a] = 0

console.log(foo) // { a: 1, b: 2}
console.log(bar) // { a: 0, b: 2}
```



원하는대로 원본에 영향을 미치지 않도록 새로운 객체를 생성하였다. 하지만 이 방법들에도 문제가 있다. 내부에 레퍼런스 참조가 있는 경우이다.



```js
const foo = [[1], [2], [3]]
const bar = Array.from(foo)
bar[0][0] = 0

console.log(foo) // [ [ 0 ], [ 2 ], [ 3 ] ]
console.log(bar) // [ [ 0 ], [ 2 ], [ 3 ] ]
```



이런... 무슨 좋은 방법이 없을까? string으로 변환 후 다시 parsing 하면 간단하게 가능하다.

```js
const foo = [[1], [2], [3]]
const bar = JSON.parse(JSON.stringify(foo))
bar[0][0] = 0

console.log(foo) // [ [ 1 ], [ 2 ], [ 3 ] ]
console.log(bar) // [ [ 0 ], [ 2 ], [ 3 ] ]
```



