const path = require('path');
const hljs = require('highlight.js');

const json = function () {
    const code = this.lines.slice(1, this.size - 1).join('\n');
    const renderedLang = hljs.highlightAuto(code, [this.language]);
    const rendered = renderedLang.language ? renderedLang : hljs.highlightAuto(code);
    return { tag: 'pre', html: `<span class="hljs ${rendered.language}">${rendered.value}</span>`, class: `Code Code-${this.language}` };
};

const head = '.Markplus{overflow:hidden;} .Markplus .Code{padding:0;}.hljs{display:block;overflow-x:auto;padding:16px;}';

const themes = {
    night: () => '.Markplus .Code{background:#1E1E1E;}/* https://highlightjs.org/static/demo/styles/vs2015.css */.hljs{background:#1E1E1E;color:#DCDCDC}.hljs-keyword,.hljs-literal,.hljs-symbol,.hljs-name{color:#569CD6}.hljs-link{color:#569CD6;text-decoration:underline}.hljs-built_in,.hljs-type{color:#4EC9B0}.hljs-number,.hljs-class{color:#B8D7A3}.hljs-string,.hljs-meta-string{color:#D69D85}.hljs-regexp,.hljs-template-tag{color:#9A5334}.hljs-subst,.hljs-function,.hljs-title,.hljs-params,.hljs-formula{color:#DCDCDC}.hljs-comment,.hljs-quote{color:#57A64A;font-style:italic}.hljs-doctag{color:#608B4E}.hljs-meta,.hljs-meta-keyword,.hljs-tag{color:#9B9B9B}.hljs-variable,.hljs-template-variable{color:#BD63C5}.hljs-attr,.hljs-attribute,.hljs-builtin-name{color:#9CDCFE}.hljs-section{color:gold}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}.hljs-bullet,.hljs-selector-tag,.hljs-selector-id,.hljs-selector-class,.hljs-selector-attr,.hljs-selector-pseudo{color:#D7BA7D}.hljs-addition{background-color:#144212;display:inline-block;width:100%}.hljs-deletion{background-color:#600;display:inline-block;width:100%}',
    light: () => '.Markplus .Code{background:#f8f8f8;}/* https://highlightjs.org/static/demo/styles/github.css */.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:bold}.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#008080}.hljs-string,.hljs-doctag{color:#d14}.hljs-title,.hljs-section,.hljs-selector-id{color:#900;font-weight:bold}.hljs-subst{font-weight:normal}.hljs-type,.hljs-class .hljs-title{color:#458;font-weight:bold}.hljs-tag,.hljs-name,.hljs-attribute{color:#000080;font-weight:normal}.hljs-regexp,.hljs-link{color:#009926}.hljs-symbol,.hljs-bullet{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}',
};

const RenderHighlight = (self, theme = 'night') => {
    const { Code } = require(path.join(self.__dirname, 'Parser'));
    Code.prototype.__defineGetter__('json', json);
    return {
        head: () => `<style>${head}${themes[theme] ? themes[theme]() : themes[theme]}</style>`,
    };
};
exports.default = RenderHighlight;
