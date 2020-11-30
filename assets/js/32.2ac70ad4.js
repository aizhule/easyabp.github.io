(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{755:function(e,t,n){"use strict";n.r(t);var o=n(104),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"abp-tencentcloud"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abp-tencentcloud"}},[e._v("#")]),e._v(" Abp.TencentCloud")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.TencentCloud.Common",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/nuget/v/EasyAbp.Abp.TencentCloud.Common.svg?style=flat-square",alt:"NuGet"}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.nuget.org/packages/EasyAbp.Abp.TencentCloud.Common",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/nuget/dt/EasyAbp.Abp.TencentCloud.Common.svg?style=flat-square",alt:"NuGet Download"}}),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.github.com/EasyAbp/Abp.TencentCloud",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://img.shields.io/github/stars/EasyAbp/Abp.TencentCloud?style=social",alt:"GitHub stars"}}),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("专门为 ABP vNext 封装的腾讯云 SDK 模块。")]),e._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Install the following NuGet packages. ("),n("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-nuget-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("ul",[n("li",[e._v("EasyAbp.Abp.TencentCloud.XXX")])])]),e._v(" "),n("li",[n("p",[e._v("Add "),n("code",[e._v("DependsOn(typeof(AbpTencentCloudXxxModule))")]),e._v(" attribute to configure the module dependencies. ("),n("a",{attrs:{href:"https://github.com/EasyAbp/EasyAbpGuide/blob/master/How-To.md#add-module-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("see how"),n("OutboundLink")],1),e._v(")")])])]),e._v(" "),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),n("ol",[n("li",[e._v("添加想要使用的模块 NuGet 包。")]),e._v(" "),n("li",[e._v("在启动模块或其他模块上，使用 "),n("code",[e._v("[DependsOn]")]),e._v(" 标签来依赖显式模块。")]),e._v(" "),n("li",[e._v("通过 "),n("code",[e._v("Configure<AbpTencentCloudCommonOptions>()")]),e._v(" 方法配置你的腾讯云相关参数。")]),e._v(" "),n("li",[e._v("通过 "),n("code",[e._v("Configure<AbpTencentCloudXXXOptions>()")]),e._v(" 方法配置对应模块的特殊参数。")]),e._v(" "),n("li",[e._v("注入 "),n("code",[e._v("ITencentCloudApiRequester")]),e._v(" 用于发送请求，其中 Request 和 Response 取决于对应模块提供的类型。")])]),e._v(" "),n("blockquote",[n("p",[e._v("注意:")]),e._v(" "),n("p",[e._v("如果目前仓库没有实现的 Requset 或 Response，你也可以直接继承 "),n("code",[e._v("CommonRequest")]),e._v(" 类型与 "),n("code",[e._v("CommonResponse")]),e._v(" 类型。我们也希望大家参与完善本模块的其他功能。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);