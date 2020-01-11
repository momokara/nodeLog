# 在命令行输出颜色

```
使用形式如

let { color } = require('./bin/fontStyle')
console.log(color().add(['lightGreenBG', 'red']).echo('h'));
```

可以使用预设颜色 add 可以使用的参数
参数 值        | 效果
------------ | -----
'bright'             | 亮色
'grey'               | 灰色
'italic'             | 斜体
字体样式             |
'underline'          | 下划线
'blink'              | 闪烁
'reverse'            | 反向
'hidden'             | 隐藏
字体颜色             |
'black'              | 黑色
'red'                | 红色
'green'              | 绿色
'yellow'             | 黄色
'blue'               | 蓝色
'magenta'            | 品红
'cyan'               | 青色
'lightGray'          | '[37m'
'darkGray'           | '[90m'
'lightRed'           | '[91m'
'lightGreen'         | '[92m'
'lightYello'         | '[93m'
'lightBlue'          | '[94m'
'lightMagenta'       | '[95m'
'lightCyan'          | '[96m'
背景色               |
'blackBG'            | 背景色为黑色
'redBG'              | 背景色为红色
'greenBG'            | 背景色为绿色
'yellowBG'           | 背景色为黄色
'blueBG'             | 背景色为蓝色
'magentaBG'          | 背景色为品红
'cyanBG'             | 背景色为青色
'lightGrayBG'        | '[47m'
'darkGrayBG'         | '[100m'
'lightRedBG'         | '[101m'
'lightGreenBG'       | '[102m'
'lightYelloBG'       | '[103m'
'lightBlueBG'        | '[104m'
'lightMagentaBG'     | '[105m'
'lightCyanBG'        | '[106m'


使用数字 也可以使用  88/256 Colors 编码颜色
参考地址 [颜色编码](https://misc.flogisoft.com/bash/tip_colors_and_formatting)
[github](https://github.com/momokara/nodeLog)

