# emoji-picker-vue
## demo
![demo](./misc/emoji-picker-vue.gif)

[demo source](./dist/browser/index.html)
## In node

    npm install emoji-picker-vue | yarn add emoji-picker-vue
```js
import Vue from 'vue';
import emojiPicker from './dist/emoji-picker-vue.min.js';
import 'emoji-picker-vue.min.css';
```
## In browser
```html
<head>
    <link rel="stylesheet" href="emoji-picker-vue.min.css"/>
</head>
<body>
    <script src="vue.min.js"></script>
    <script src="emoji-picker-vue.js"></script>
</body>
```

## config

Prop | Type | Default | Description
-|-|-|-
target | HTMLInputElement | @required | element to be put emoji
show | Boolean | @required | control the display of emoji
config | Object | @optional | config the style of emoji
config.width | String | 288px | width of emoji
config.height | String | 180px | height of emoji



