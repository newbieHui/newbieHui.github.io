(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{189:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"前后端通信双向加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前后端通信双向加密","aria-hidden":"true"}},[e._v("#")]),e._v(" 前后端通信双向加密")]),e._v(" "),a("hr"),e._v(" "),a("h3",{attrs:{id:"_1-aes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-aes","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.AES")]),e._v(" "),a("p",[e._v("AES高级加密标准，是一中最常见的加密算法。加密和解密使用相同的密钥。")]),e._v(" "),a("h3",{attrs:{id:"_2-rsa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rsa","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.RSA")]),e._v(" "),a("p",[e._v("RSA是一种非对称加密，非对称加密算法需要两个密钥，即公开密钥和私有密钥。公钥加密的用私钥解密，私钥加密的用公钥解密。")]),e._v(" "),a("h3",{attrs:{id:"_3-加解密过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-加解密过程","aria-hidden":"true"}},[e._v("#")]),e._v(" 3.加解密过程")]),e._v(" "),a("ul",[a("li",[e._v("服务端生成并保持AES对称加密密钥sAesKey。")]),e._v(" "),a("li",[e._v("服务端使用RSA生成一对随机的密钥对。服务端保存私钥sPrivateRsaKey,公钥sPublicRsaKey传给客户端。")]),e._v(" "),a("li",[e._v("客户端使用RSA生成一对随机的密钥对。客户端保存私钥cPrivateRsaKey,使用sPublicRsaKey加密生成的公钥cPublicRsaKey。")]),e._v(" "),a("li",[e._v("服务端使用保存的sPrivateRsaKey解密，得到客户端生成的公钥cPublicRsaKey。")]),e._v(" "),a("li",[e._v("服务端使用cPublicRsaKey加密之前生成的AES密钥sAesKey传给客户端。")]),e._v(" "),a("li",[e._v("客户端使用之前自己生成并保存的客户端私钥cPrivateRsaKey解密使用cPublicRsaKey加密的sAesKey，这时客户端和服务端具有相同的sAesKey。")]),e._v(" "),a("li",[e._v("客户端和服务端使用sAesKey加密需要传输的数据，使用sAesKey解密接收到的密文。")])])])}],!1,null,null,null);s.default=r.exports}}]);