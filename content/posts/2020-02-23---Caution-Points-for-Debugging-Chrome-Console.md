---
title: 크롬 콘솔창에서 로그 디버깅시 주의점
date: "2020-02-24"
template: "post"
draft: false
slug: "Caution-Points-for-Debugging-Chrome-Console" # url path
category: "chrome" # displayed on list
tags: # displayed in post
  - "chrome"
  - "js"
description: "최근에 크롬의 콘솔창에서 로그를 찍어가며 디버깅하다가 꽤 고생했습니다."
---

최근에 크롬의 콘솔창에서 로그를 찍어가며 디버깅하다가 꽤 고생했습니다. 데이터가 이상하게 변하는 것을 발견하고 어디서부터가 문제인지 추적을 하는데, 결국 끝까지 가보니 서버에서 데이터가 이상하게 온다고 판단했습니다. 그런데 이상한게 packet을 까보니 데이터는 정상적으로 받아오고 있었습니다. packet에는 데이터가 정상적인데 fetch만 하면 데이터가 이상해지는 거였죠. 결국 이상한 곳만 한참 삽질하다가 fetch의 문제가 아니라 로깅방식의 문제임을 알게 되었습니다.

뭐가 문제였을까요? 결론만 이야기하지면, 크롬의 콘솔창에서 object를 로깅하는 경우 미리보기가 가능하며 펼치기 클릭 시 해당 데이터를 자세히 조회하게 되는데 그 순간 데이터의 값을 가져온다는 것입니다.

예시로 설명드려보겠습니다.


```
const data = {
  name: "soonbee",
  count: 0,
}

function countIncrease(){
  data.count += 1
}

console.log(data)
countIncrease()
```

위와 같이 `data`와 `data.count`를 1만큼 증가시키는 함수 `countIncrease`를 선언합니다. `data`를 먼저 로깅하고 이후에 `countIncrease()` 를 호출합니다. 로그에 찍힌 `data.count`의 값은 몇일까요? 저도 그리고 여러분도 0이라고 생각할겁니다. 함수를 호출하기 전에 로깅을 했으니까요. 실제로도 0으로 표시됩니다.

문제는 이제부터입니다. 크롬 콘솔창에서 object를 로깅하는 경우 폴딩되어 보여집니다. 아래 사진처럼 데이터가 적은 경우 미리보기만으로도 다 보이지만 데이터가 많고 중첩이 많은 경우 숨겨져보이지요. 좌측에 삼각형을 누르면 데이터를 자세히 볼 수 있습니다. 그런데 여기서 미리보기를 펼치는 순간 count의 값은 1이 되어있습니다. 이게 도대체 어떻게 된걸까요?

![](/content/images/chrome-console-1.png)

![](/content/images/chrome-console-2.png)

아마 미리보기를 펼치는 순간 해당 데이터를 다시 조회하는 것 같습니다. 자세히 보려는 순간 이미 해당 데이터는 로그가 찍힐 당시의 데이터가 아닐수도 있다는 것이지요.

아래 사진처럼 데이터의 중첩이 깊어지면 미리보기로는 데이터확인이 안됩니다. 그래서 미리보기를 펼쳐서 봐야하는데, 해당 데이터는 이미 변질된 데이터일 수 있습니다.

![](/content/images/chrome-console-3.png)

애초에 이미 선언된 데이터를 변경시키는 패턴은 좋지 않다고 생각합니다. 그러나 그렇지 못한 상황에서 그리고 크롬 개발자도구를 이용해 로그를 확인할 때는 데이터를 string으로 변환 후 다시 object로 변환해서 로그를 찍을 필요가 있어보입니다.

```
console.log(JSON.parse(JSON.stringfy(data)))
```

아래처럼 얕은 복사를 통한 로그도 펼치는 순간 데이터가 변하므로 주의가 필요합니다.

```
console.log({...data})
console.log(Object.assign({}, data))
```

또한 미리보기를 펼치는 순간 데이터값은 고정됩니다. 다시 접었다 피더라도 실시간 데이터를 반영하여 변하지는 않습니다.