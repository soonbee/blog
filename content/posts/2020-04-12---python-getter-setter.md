---
title: python에서 객체의 변수 접근하기(getter, setter)
date: "2020-04-12"
template: "post"
draft: false
slug: "python-getter-setter" # url path
category: "python" # displayed on list
tags: # displayed in post
  - "python"
---

## nomal

```python
class Person():
  def __init__(self, name):
    self.name = name


person = Person('soonbee')
print(person.name) # soonbee
person.name = 'new name'
print(person.name) # new name
```

## property, setter

```python
class Person():
  def __init__(self, name):
    self.__name = name
  
  @property
  def name(self):
    return self.__name
  
  @name.setter
  def name(self, value):
    self.__name = value
    
    
person = Person('soonbee')
print(person.name) # soonbee
print(person.__name) # AttributeError: 'Person' object has no attribute '__name'
```

## why?

Java의 privte 키워드처럼 캡슐화의 목적이 있다. 해당 변수는 제공되는 getter/setter 를 통해서만 접근해야 한다. getter/setter 가 제공되지 않는다면 해당 변수에는 접근할 수 없다. 물론 엄밀히 말해서 접근이 불가능한 것은 아니다.

```python
class Person():
  def __init__(self, name):
    self.__name = name
  
  @property
  def name(self):
    return self.__name
  
  @name.setter
  def name(self, value):
    self.__name = value
    
    
person = Person('soonbee')
print(person.__dict__) # {'_Person__name': 'soonbee'}
print(person._Person__name) # soonbee
```

언더스코어 2개가 prefix로 붙은 키워드는 위에서 보이는 것처럼 단지 네이밍이 변경되어 저장될 뿐이다. getter/setter 를 통해서가 아니더라도 값을 가져오고 변경할 수 있다. 접근할 수 없지는 않지만, "private variable 이므로 접근하지 않았으면 좋겠네요" 라는 의미를 내포하고 있다는 것이 정확하겠다.

두번째로 getter/setter 함수를 직접 선언하는 것보다 코드가 깔끔해진다.

```python
class Person():
  def __init__(self, name):
    self.__name = name
  
  def grt_name(self):
    return self.__name
  
  def set_name(self, value):
    self.__name = value
    
    
person = Person('soonbee')
print(person.get_name()) # soonbee
person.set_name('new name')
print(person.get_name()) # new name
```