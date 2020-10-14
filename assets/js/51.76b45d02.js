(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{217:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"路由跳转传值问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由跳转传值问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 路由跳转传值问题")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在前端项目中我们经常会碰到路由跳转时的传值问题，这里就来总结一下常用的几种方法：")]),t._v(" "),s("h3",{attrs:{id:"_1-router-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-router-push","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.$router.push()")]),t._v(" "),s("ul",[s("li",[t._v("params传参")])]),t._v(" "),s("p",[t._v("传值：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("取值：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),s("ul",[s("li",[t._v("query传参")])]),t._v(" "),s("p",[t._v("传值：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/login/index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("取值：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id\n")])])]),s("p",[t._v("注意："),s("strong",[t._v("params传参时路径不能使用path,只能使用name")]),t._v("，不然获取不到所传的参数。使用query传参可以在浏览器地址栏中看到所传参数，\n使用params传参时在地址栏中看不到所传参数。")]),t._v(" "),s("blockquote",[s("p",[t._v("$router 和 $route的区别:\n$route为当前router跳转对象里面可以获取name、path、query、params等,$router为VueRouter实例，想要导航到不同URL，则使用$router.push方法\n返回上一个history也是使用$router.go方法。")])]),t._v(" "),s("h3",{attrs:{id:"_2-localstorage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-localstorage","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.localStorage")]),t._v(" "),s("p",[t._v("存数据")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" conveyData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DemoHui'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'25'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlocalStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conveyData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conveyData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("取数据：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("constData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conveyData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("注意：IE8以上的IE版本才支持localStorage这个属性；目前所有的浏览器中都会把localStorage的值类型限定为string类型，\n这个在对我们日常比较常见的JSON对象类型需要一些转换；localStorage在浏览器的隐私模式下面是不可读取的；\nlocalStorage本质上是对字符串的读取，如果存储内容多的话会消耗内存空间，会导致页面变卡；localStorage不能被爬虫抓取到；\nlocalStorage与sessionStorage的唯一一点区别就是localStorage属于永久性存储，而sessionStorage属于当会话结束的时候，sessionStorage中的键值对会被清空。")]),t._v(" "),s("blockquote",[s("p",[t._v("JSON.stringify()方法将JavaScript对象转换为字符串；JSON.parse()方法将数据转换为JavaScript对象；\nJSON.parse(JSON.stringify(obj))我们一般用来深拷贝，其过程说白了 就是利用JSON.stringify 将js对象序列化（JSON字符串），\n再使用JSON.parse来反序列化(还原)js对象；序列化的作用是存储(对象本身存储的只是一个地址映射)和传输。")])]),t._v(" "),s("h3",{attrs:{id:"_3-vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vuex","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.vuex")]),t._v(" "),s("p",[t._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，\n并以相应的规则保证状态以一种可预测的方式发生变化。")])])}],!1,null,null,null);a.default=e.exports}}]);