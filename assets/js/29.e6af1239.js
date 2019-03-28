(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{194:function(e,v,t){"use strict";t.r(v);var _=t(0),a=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),t("hr"),e._v(" "),t("h3",{attrs:{id:"_1-渐进式框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-渐进式框架","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.渐进式框架")]),e._v(" "),t("blockquote",[t("p",[e._v("vue是一套构建用户界面的"),t("strong",[e._v("渐进式")]),e._v("框架，与其它大型框架不同，vue被设计为自底向上逐层应用，vue核心库只关注视图层。")])]),e._v(" "),t("p",[e._v("我们在学习vue渐进式框架中，没必要一上来就搞懂Vue的每一个部件和功能，先从核心功能开始学习，逐渐扩展。 同时，在使用中，\n我们也没有必要把全部件能都拿出来，需要什么用什么就是了，而且也可以把Vue很方便的与其它已有项目或框架相结合。")]),e._v(" "),t("h3",{attrs:{id:"_2-库和框架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-库和框架","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.库和框架")]),e._v(" "),t("ul",[t("li",[e._v("库，是一些函数的集合。每次调用函数是为了实现一个特定的功能。")]),e._v(" "),t("li",[e._v("框架，一套完整的解决方案，由框架控制，我们需要按照框架规则编写代码。")])]),e._v(" "),t("h3",{attrs:{id:"_3-mvvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-mvvm","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.MVVM")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("MVC\nMVC的全称是Model-View-Controller(模型-视图-控制器)。model数据模型专门用来操作数据；view视图，对前端来说就是页面；\ncontroller控制器，是视图和数据模型之间的桥梁，用来处理业务逻辑。")])]),e._v(" "),t("li",[t("p",[e._v("MVVM的全称是Model-View-ViewModel。model数据模型；view视图；viewModel视图模型。MVVM通过数据双向绑定让数据自动地双向同步。")])])]),e._v(" "),t("h3",{attrs:{id:"_4-vue生命周期钩子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue生命周期钩子","aria-hidden":"true"}},[e._v("#")]),e._v(" 4.vue生命周期钩子")]),e._v(" "),t("p",[t("img",{attrs:{src:"/img/vuelifecycle.png",alt:"vuelifecycle"}})]),e._v(" "),t("ul",[t("li",[e._v("beforeCreate")])]),e._v(" "),t("p",[e._v("类型：Function，在实例初始化之后，数据观测(data observer)和event/watcher事件配置之前被调用(el和data并未初始化)")]),e._v(" "),t("ul",[t("li",[e._v("created")])]),e._v(" "),t("p",[e._v("类型：Function，在实例创建完成后被立即调用，此时实例已完成数据观测(data observer)，属性和方法的运算，watch/event事件回调。不过，\n此时挂载阶段还没有开始，$el属性不可见(完成了对data的初始化，el没有)")]),e._v(" "),t("ul",[t("li",[e._v("beforeMount")])]),e._v(" "),t("p",[e._v("类型：Function，在挂载开始之前被调用，相关render函数首次被调用(完成了el和data初始化)")]),e._v(" "),t("ul",[t("li",[e._v("mounted")])]),e._v(" "),t("p",[e._v("类型：Function，完成创建vm.$el和双向绑定，完成挂载DOM和渲染(完成挂载)")]),e._v(" "),t("ul",[t("li",[e._v("beforeUpdate")])]),e._v(" "),t("p",[e._v("类型：Function，数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。")]),e._v(" "),t("ul",[t("li",[e._v("updated")])]),e._v(" "),t("p",[e._v("类型：Function，由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，\n所以现在可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。\n"),t("strong",[e._v("注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated。")])]),e._v(" "),t("ul",[t("li",[e._v("activated")])]),e._v(" "),t("p",[e._v("类型：Function，keep-alive 组件激活时调用。")]),e._v(" "),t("ul",[t("li",[e._v("deactivated")])]),e._v(" "),t("p",[e._v("类型：Function，keep-alive 组件停用时调用。")]),e._v(" "),t("ul",[t("li",[e._v("beforeDestroy")])]),e._v(" "),t("p",[e._v("类型：Function，实例销毁之前调用。在这一步，实例仍然完全可用。")]),e._v(" "),t("ul",[t("li",[e._v("destroyed")])]),e._v(" "),t("p",[e._v("类型：Function，Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。")]),e._v(" "),t("ul",[t("li",[e._v("errorCaptured")])]),e._v(" "),t("p",[e._v("类型：(err: Error, vm: Component, info: string) => ?boolean")]),e._v(" "),t("p",[e._v("当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。\n此钩子可以返回 false 以阻止该错误继续向上传播。")]),e._v(" "),t("ul",[t("li",[e._v("子父组件的生命周期")])]),e._v(" "),t("p",[e._v("仅当子组件完成挂载后，父组件才会挂载。父子组件在data变化中是分别监控的，但是在更新props中的数据是关联的。销毁父组件时，先将子组件销毁后才会销毁父组件。")]),e._v(" "),t("blockquote",[t("p",[e._v("20190328")])])])}],!1,null,null,null);v.default=a.exports}}]);