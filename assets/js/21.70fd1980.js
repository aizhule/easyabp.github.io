(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{737:function(t,s,a){"use strict";a.r(s);var n=a(103),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"微信小程序模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序模块"}},[t._v("#")]),t._v(" 微信小程序模块")]),t._v(" "),a("blockquote",[a("p",[t._v("推荐你使用 EasyAbp 封装的"),a("a",{attrs:{href:"https://github.com/EasyAbp/WeChatManagement",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信管理模块"),a("OutboundLink")],1),t._v("，它依赖本模块做了二次封装，提供应用级的各项功能。")])]),t._v(" "),a("h2",{attrs:{id:"一、基本模块配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、基本模块配置"}},[t._v("#")]),t._v(" 一、基本模块配置")]),t._v(" "),a("h3",{attrs:{id:"_1-1-模块的引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块的引用"}},[t._v("#")]),t._v(" 1.1 模块的引用")]),t._v(" "),a("p",[t._v("添加 "),a("strong",[t._v("EasyAbp.Abp.WeChat.MiniProgram")]),t._v(" 模块的 NuGet 包或者项目引用到 "),a("strong",[t._v("Domain")]),t._v(" 层，并在对应的模块上面添加 "),a("code",[t._v("[DependsOn]")]),t._v(" 特性标签。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatMiniProgramModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXDomainModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("添加 "),a("strong",[t._v("EasyAbp.Abp.WeChat.MiniProgram.HttpApi")]),t._v(" 模块的 NuGet 包或者项目引用到 "),a("strong",[t._v("Http.Api")]),t._v(" 层，并在对应的模块上面添加 "),a("code",[t._v("[DependsOn]")]),t._v(" 特性标签。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatMiniProgramHttpApiModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXHttpApiModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_1-2-模块的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-模块的配置"}},[t._v("#")]),t._v(" 1.2 模块的配置")]),t._v(" "),a("p",[t._v("微信模块的配置参数都存放在 "),a("code",[t._v("AbpWeChatMiniProgramOptions")]),t._v(" 内部，开发人员只需要在启动模块的 "),a("code",[t._v("ConfigureService()")]),t._v(" 方法中进行配置即可，下面是最小启动配置。")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DependsOn")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("AbpWeChatMiniProgramHttpApiModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XXXHttpApiModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbpModule")])]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token generic-method"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),a("span",{pre:!0,attrs:{class:"token generic class-name"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpWeChatMiniProgramOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信小程序所配置的 Token 值。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信小程序分配的 AppId。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 微信小程序的唯一密钥。")]),t._v("\n            op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppSecret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0000000000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("进行上述配置以后，你的项目就集成了微信小程序功能。现在，你可以在任意地方注入服务类，通过服务类快捷地调用微信公众平台所提供的 API 接口服务。")]),t._v(" "),a("h2",{attrs:{id:"二、默认启用的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、默认启用的接口"}},[t._v("#")]),t._v(" 二、默认启用的接口")]),t._v(" "),a("p",[t._v("// TODO。")]),t._v(" "),a("h2",{attrs:{id:"三、服务的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、服务的使用"}},[t._v("#")]),t._v(" 三、服务的使用")]),t._v(" "),a("h3",{attrs:{id:"_3-1-微信登录服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-微信登录服务"}},[t._v("#")]),t._v(" 3.1 微信登录服务")]),t._v(" "),a("p",[t._v("开发人员如果需要使用微信登录服务，只需要注入 "),a("code",[t._v("LoginService")]),t._v(" 类型即可，该类型的生命周期为 "),a("strong",[t._v("瞬时对象")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-小程序码服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-小程序码服务"}},[t._v("#")]),t._v(" 3.2 小程序码服务")]),t._v(" "),a("p",[t._v("开发人员如果需要使用小程序码服务，只需要注入 "),a("code",[t._v("ACodeService")]),t._v(" 类型即可，该类型的生命周期为 "),a("strong",[t._v("瞬时对象")]),t._v(" 。")])])}),[],!1,null,null,null);s.default=e.exports}}]);