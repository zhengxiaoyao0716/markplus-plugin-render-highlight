# markplus-plugin-render-highlight
## Render codes with [highlightjs](https://github.com/isagalaev/highlight.js) for [markplus](https://github.com/zhengxiaoyao0716/markplus).

***
## Setup
``` bash
npm i --save-dev markplus markplus-plugin-render-highlight
```

***
## Usage
### Simple:
``` json
{ "plugin": [ "render-highlight" ] }
```

### Theme:
``` json
{
    "plugin": [
        ["render-highlight", "THEME_NAME"]
    ]
}
```

Preset value of `THEME_NAME`:
> light: https://highlightjs.org/static/demo/styles/github.css
> night: https://highlightjs.org/static/demo/styles/vs2015.css

Other values would be used as the content of `style` element directly.
