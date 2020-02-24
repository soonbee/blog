---
title: eslint disable inline configuration
date: "2020-02-23"
template: "post"
draft: false
slug: "eslint-disable-inline-configuration" # url path
category: "code-style" # displayed on list
tags: # displayed in post
  - "code-style"
  - "eslint"
description: "eslint disable inline으로 설정하는 방법입니다." # description on list
---

eslint disable inline 으로 설정하는 방법입니다.

### 특정 구간 disable 하기

```
/* eslint-disable */
...
/* eslint-enable */
```

이를 응용해서 파일의 맨 위에 `/* eslint-disable */` 을 적어주면 해당 파일 전체에 eslint가 disable 됩니다.

### 특정 라인 disable 하기

아래와 같이 eslint를 disable 하려는 코드 바로 위에 해당 주석을 작성합니다.
```
// eslint-disable-next-line
...
```

아래와 같이 동일한 라인에 주석을 적어서도 적용시킬 수 있습니다.

```
... // eslint-disable-line
```

### 특정 규칙만 disable 하기

disable 하고자 하는 규칙 키워드를 적어주면 됩니다.

여러 규칙을 동시에 설정하려면 구분자로 쉼표(,)를 사용한다.

```
// eslint-disable-next-line no-console
```

```
/* eslint-disable no-console, import/prefer-default-export */
```

### 아래와 같이 사용하는 실수를 하지 않도록 하자

특정 구간 disable 설정할 때 `//` 를 이용하면 적용이 안된다.

```
// eslint-disable
// eslint-enable
```

### 이건 된다

```
... /* eslint-disable-line */
```

```
/* eslint-disable-next-line */
...
```