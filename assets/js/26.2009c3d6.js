(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{749:function(t,a,s){"use strict";s.r(a);var n=s(104),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"abp-datadictionary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abp-datadictionary"}},[t._v("#")]),t._v(" Abp.DataDictionary")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.DataDictionary.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.Abp.DataDictionary.Domain.Shared.svg?style=flat-square",alt:"NuGet"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.DataDictionary.Domain.Shared",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.Abp.DataDictionary.Domain.Shared.svg?style=flat-square",alt:"NuGet Download"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.github.com/EasyAbp/Abp.DataDictionary",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/Abp.DataDictionary?style=social",alt:"GitHub stars"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ABP 数据字典模块")]),t._v(" "),s("h3",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),s("p",[s("strong",[t._v("Easy.Abp.Dictionary")]),t._v(" 库集成了标准的数据字典管理接口(增/删/改/查)，同时提供了配套的字典值渲染组件。该组件支持自动("),s("code",[t._v("Attribute")]),t._v(")识别对应 DTO 的字典规则，并动态填充 DTO 值("),s("strong",[t._v("反射")]),t._v(")。")]),t._v(" "),s("h3",{attrs:{id:"_2-如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何使用"}},[t._v("#")]),t._v(" 2. 如何使用?")]),t._v(" "),s("h4",{attrs:{id:"_2-1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装"}},[t._v("#")]),t._v(" 2.1 安装")]),t._v(" "),s("p",[t._v("开发人员可以通过 NuGet 搜索 "),s("code",[t._v("EasyAbp.Abp.DataDictionary.*")]),t._v(" 安装相应的组件，整个模块由以下几个包组成:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("包名")]),t._v(" "),s("th",[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.Application.Contracts.Shared")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.Application.Contracts")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.Application")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.Domain.Shared")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.Domain")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.EntityframeworkCore")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.HttpApi")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("EasyAbp.Abp.DataDictionary.HttpApi.Client")]),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("对应的 NuGet 包分别安装到 ABP vNext 项目的不同分层，并依赖对应的模块。")]),t._v(" "),s("h4",{attrs:{id:"_2-2-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置"}},[t._v("#")]),t._v(" 2.2 配置")]),t._v(" "),s("p",[t._v("当前版本的所有配置都存放在 "),s("code",[t._v("AbpDataDictionaryOptions")]),t._v(" 类中，开发人员可以在模块的 "),s("code",[t._v("ConfigureServie()")]),t._v(" 或 "),s("code",[t._v("PreConfigureService()")]),t._v(" 生命周期，使用 "),s("code",[t._v("Configure<TOptions>(TOptions option)")]),t._v(" 方法配置对应的参数。")]),t._v(" "),s("p",[t._v("例子:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoModule")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServiceConfigurationContext")]),t._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbpDataDictionaryOptions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            op"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("DataDictionaryRule")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                DictionaryCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"字典类型编码"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                DictionaryCodeProperty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字典类型编码的字段。")]),t._v("\n                DtoType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出 DTO 的类型。")]),t._v("\n                RenderFieldProperty "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要填充字典值(文本)的字段。")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("除了上面这种手动配置的方式以外，开发人员也可以在 DTO 标注特性来提供转换规则。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WaitCacheRenderDto")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DictionaryCodeField")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" Level "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DictionaryRenderField")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" LevelValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("上述代码表明 "),s("code",[t._v("Level")]),t._v(" 字段存放的是字典值编码，它归属于 "),s("code",[t._v("XL")]),t._v(" 字典，渲染具体字典值的时候，将 "),s("code",[t._v("Level")]),t._v(" 编码对应的文字性描述赋值给 "),s("code",[t._v("LevelValue")]),t._v(" 字段。当然你可以将两个特性都标注到 "),s("code",[t._v("Level")]),t._v(" 上，这样新的值会直接复制给 "),s("code",[t._v("Level")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"_3-概念-术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-概念-术语"}},[t._v("#")]),t._v(" 3. 概念/术语")]),t._v(" "),s("p",[t._v("Todo")]),t._v(" "),s("h3",{attrs:{id:"_4-路线图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-路线图"}},[t._v("#")]),t._v(" 4. 路线图")]),t._v(" "),s("ul",[s("li",[t._v("[ ] 编写 ASP.NET Core MVC Filter 和 Middleware 统一处理响应 DTO。")]),t._v(" "),s("li",[t._v("[ ] 缓存 Property Info 提升性能。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);