react-native-newsticker
==
> The News Ticker component for React Native

[![npm](https://img.shields.io/npm/v/react-native-newsticker.svg)]()[![npm](https://img.shields.io/npm/l/react-native-newsticker.svg)]()

[![NPM](https://nodei.co/npm/react-native-newsticker.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-native-newsticker/)

![Demo](./doc/demo.gif)

Installation
==

in Cli

```
npm i react-native-newsticker
```

in JavaScirpt

```
import Newsticker from 'react-native-newsticker';
```


Usage
===

```
<Newsticker text={'This is a really awesome Newsticker !!'} />
```

Props
===

text(String) `Default: ''`
---
The text of newsticker

typeInterval(int) `Default: 100`
---
newstick interval

blinkInterval(int) `Default: 500`
---
blink interval of cursor

start(boolean) `Default: true`
---
if you pass false, newsticker does’nt start.

onFinish(function)
---
if finish newstick, this function is called

cursor(boolean) `Default: true`
---
if you pass false, cursor is not shown.

style `Default: ''`
---
Style of text


Contributing
==
Welcome :)


License
==
MIT

