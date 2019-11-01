(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{204:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"webpack跨域问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack跨域问题","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack跨域问题")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"_1-问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-问题描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.问题描述")]),t._v(" "),a("p",[t._v("域名和域名对应相同IP是常见跨域场景中的一种，这种场景是不允许相互通信的。")]),t._v(" "),a("p",[t._v("在vue工程化项目中，我们使用"),a("strong",[t._v("webpack在开发环境中")]),t._v("就会存在上述跨域问题。大多数情况下后台会帮我们做请求代理，但是如果没有后台的帮助，\n这个问题就只能靠我们前端自己来解决了。")]),t._v(" "),a("h3",{attrs:{id:"_2-解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.解决方法")]),t._v(" "),a("p",[t._v("找到config目录下index.js文件中的dev:{proxyTable: { }}写入要跨域代理的链接地址：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("proxyTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务地址:端口")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secure: false,   // 如果是https接口，需要配置这个参数")]),t._v("\n                changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果接口跨域，需要进行这个参数配置")]),t._v("\n\t\t\t\tpathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代理请求效果：localhost:8080/api     =>   http://...")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("proxyTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\ttarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//服务地址:端口")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// secure: false,   // 如果是https接口，需要配置这个参数")]),t._v("\n                changeOrigin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果接口跨域，需要进行这个参数配置")]),t._v("\n\t\t\t\tpathRewrite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代理请求效果：localhost:8080/api     =>   http://.../api")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("2019/04/02 18:50")])])])}],!1,null,null,null);s.default=e.exports}}]);