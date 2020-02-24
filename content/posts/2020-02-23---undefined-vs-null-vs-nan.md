---
title: undefined vs null vs NaN
date: "2020-02-23"
template: "post"
draft: false
slug: "undefined-vs-null-vs-nan" # url path
category: "js" # displayed on list
tags: # displayed in post
  - "js"
description: "undefined, null 그리고 NaN의 차이점을 알아보자" # description on list
---

undefined, null 그리고 NaN의 차이점을 알아보자

### undefined

말 그대로 정의된(할당된) 값이 없음을 나타낸다. boolean으로 형변환이 일어나는 경우 `false` 가 된다.

```
const foo;
console.log(foo); // undefined
console.log(typeof foo); // "undefined"
console.log(!foo); // true
```

### null

**비어있음을 의미하는 값**이다. boolean으로 형변환이 일어나는 경우 `false` 가 된다.

```
const bar = null;
console.log(bar); // null
console.log(typeof bar); // "object"
console.log(!bar); // true
```

> `null`의 type이 `"object"` 가 뜨는 것은 javascript의 설계상 오류이다.
> `null`은 `object`와 같은 수준의 원시타입이기 때문에 typeof의 결과값은 undefined처럼 `"null"`이 좀 더 바람직해보인다.
> 그러나 이를 변경했을 때 기존 코드에 미치는 영향이 너무 커서 수정하지 않기도 했다고 한다.

### NaN
Not a Number로 숫자이긴 하나 잘못된 수식으로 인하여 발생한 값을 나타낸다. 숫자로 형변환이 되지 않는 문자열과 나누기등의 연산을 하는 것이 그 예시이다. `null`과 `undefined`와 마찬가지로 boolean 형변환 결과는 `false` 이다

```
const baz = 1 / "a";
console.log(baz); // NaN
console.log(typeof baz); // "number"
console.log(!baz); // true
```

덧셈의 경우는 숫자가 문자열로 형변환이 일어나 결과가 `NaN`이 아님을 주의하자.

```
const able = 1 + "a";
console.log(able) // "1a"
```

또한 `NaN`의 경우 자기 자신과의 비교가 불가하다. `undefined`와 `null`은 가능하다.

```
console.log(NaN === NaN) // false
console.log(undefined === undefined) /true
console.log(null === null) // true
```

`NaN` 인지 아닌지를 구분하려면 `isNaN` 함수를 이용하는 것이 좋겠다.

```
console.log(isNaN(NaN)) // true
console.log(isNaN(0)) // false
console.log(isNaN('0')) // true
```
