---
title: js 외부 라이브러리 자동완성 기능
date: "2020-02-25"
template: "post"
draft: false
slug: "javascript-external-library-autocomplete" # url path
category: "chrome" # displayed on list
tags: # displayed in post
  - "chrome"
  - "js"
description: "기가 막힌걸 찾아냈다. 너무 신난다. 이제서야 이런걸 알다니 억울하기까지 하다."
---

기가 막힌걸 찾아냈다. 너무 신난다. 이제서야 이런걸 알다니 억울하기까지 하다.

요즘 testing library를 공부하고 있는데, 해당 라이브러리의 내장함수 키워드가 자동완성이 안되서 불편했다.

```
npm install --save-dev @types/testing-library__react
npm install --save-dev @types/testing-library__jest-dom
npm install --save-dev @types/testing-library__user-event
```

프로젝트 폴더에서 이렇게 몇 줄만 타이핑하면 알아서 된다. 에디터는 vscode를 사용하고 있다.
typescript가 설치되어 있어야 작동하는 것 같기도 하다. 확실하지 않다.
아, 그렇다고 typescript로 개발한 프로젝트에만 적용된다는 건 아니다. 설치만 되어있으면 된다.

testing library 말고도 다양한 자동완성이 제공된다. [TypeSearch](https://microsoft.github.io/TypeSearch/)에서 검색해보길 바란다. jquery, lodash 등 정말 많다.