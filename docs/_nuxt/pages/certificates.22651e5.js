(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{333:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var o=r(337),n=r(1),l=Object(n.g)("v-card__actions"),c=Object(n.g)("v-card__subtitle"),d=Object(n.g)("v-card__text"),v=Object(n.g)("v-card__title");o.a},334:function(t,e,r){"use strict";var o=r(338);e.a=o.a},335:function(t,e,r){"use strict";var o=r(336);e.a=o.a},351:function(t,e,r){var content=r(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("5db1c400",content,!0,{sourceMap:!1})},352:function(t,e,r){var o=r(21)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},355:function(t,e,r){"use strict";r(15),r(9),r(16),r(18),r(11),r(19);var o=r(2),n=(r(45),r(351),r(87)),l=r(334),c=r(335),d=r(86),v=r(40),h=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(14),m=r(8);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(n.a,d.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=w(w({},n.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},356:function(t,e,r){"use strict";r(16),r(15),r(70),r(29),r(224),r(223),r(79),r(77);var o=r(0);var n,l=r(71);e.a=(n="container",o.a.extend({name:"v-".concat(n),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,o=e.children;data.staticClass="".concat(n," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,o)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,o=e.props,data=e.data,n=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),o.id&&(data.domProps=data.domProps||{},data.domProps.id=o.id),t(o.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(r||[])}),n)}})},366:function(t,e,r){"use strict";r.r(e);var o={name:"certificates",data:function(){return{Certificates:{Featured:{title:"Featured",certs:[{title:"AZ:900 Azure Fundamentals",view:"https://www.credly.com/badges/63e7cd16-e3bf-48bf-a4d5-cbf80ccc7899/public_url"},{title:"DP:900 Azure Data Fundamentals",view:"https://www.credly.com/badges/6314ae57-9831-48fb-b392-14b813b0377b/public_url"},{title:"Google IT Automation Certificate",view:"https://www.credly.com/badges/5a90218f-518c-4be0-9bda-54438309bab8/public_url"}]},FromGoogle:{title:"From Google",certs:[{title:"Architecting with Google Compute Engine",view:"https://coursera.org/share/fac0aa6f15a3630fe707017767b060ec"},{title:"Elastic Google Cloud Infrastructure: Scaling and Automation",view:"https://coursera.org/share/9fd0ec7a63da24558c34573915e58444"},{title:"Google IT Automation with Python",view:"https://coursera.org/share/e8dffbd12dfcb738601a827b43e2af1a"},{title:"Google Cloud Big Data and Machine Learning Fundamentals",view:"https://coursera.org/share/ed7d1152623549bd3583da56aed1ba12"},{title:"Google Cloud Fundamentals: Core Infrastructure",view:"https://coursera.org/share/dcd00bffb118139f8e680e6cfad0830d"},{title:"Essential Google Cloud Infrastructure: Core Services",view:"https://coursera.org/share/c1866a4493ff9932613e892e5eb37304"},{title:"Essential Google Cloud Infrastructure: Foundation",view:"https://coursera.org/share/a8f9328e81a22af0113b78fd3b3d75db"},{title:"Reliable Google Cloud Infrastructure: Design and Process",view:"https://coursera.org/share/955dd780f4a188e6975f2025da2dbf72"}]},FromMicrosoft:{title:"From Microsoft",certs:[{title:"AZ:900 Azure Fundamentals",view:"https://www.credly.com/badges/63e7cd16-e3bf-48bf-a4d5-cbf80ccc7899/public_url"},{title:"DP:900 Azure Data Fundamentals",view:"https://www.credly.com/badges/6314ae57-9831-48fb-b392-14b813b0377b/public_url"}]},FromNvidia:{title:"From nVidia",certs:[{title:"GETTING STARTED WITH AI ON JETSON NANO",view:"https://courses.nvidia.com/certificates/22e13ad4ea8e4865aebd54831f297d74"}]},FromUOH:{title:"From University of Huston",certs:[{title:"A Brief History of Human Spaceflight",view:"https://coursera.org/share/b22e12b46cf51adc5be7265898a820f1"}]},FromQuickLabs:{title:"From QuickLabs",certs:[]},FromLinkedIn:{title:"From LinkedIn",certs:[]}}}}},n=r(78),l=r(109),c=r.n(l),d=r(355),v=r(338),h=r(333),f=r(356),m=r(336),_=r(347),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",t._l(t.Certificates,(function(e,i){return r("div",{key:i},[r("v-row",{attrs:{"no-gutters":""}},[r("h3",{staticClass:"text-h6"},[t._v(t._s(e.title))])]),t._v(" "),r("v-row",{staticClass:"mt-4",attrs:{"justify-sm":"start",justify:"center",align:"center","no-gutters":""}},t._l(e.certs,(function(e,i){return r("v-alert",{key:i,staticClass:"ma-1 pa-0",attrs:{outlined:"",color:"#ccd6f6",height:"125",width:"350"}},[r("div",{staticStyle:{height:"64px"}},[r("v-card-title",{staticClass:"pa-0 ma-2 mb-0",staticStyle:{"word-break":"initial !important"}},[t._v(t._s(e.title))])],1),t._v(" "),r("v-card-actions",[r("v-row",{attrs:{"no-gutters":"",justify:"space-between"}},[r("v-btn",{attrs:{width:"85",target:"_blank",href:e.view,outlined:""}},[r("v-icon",{attrs:{small:""}},[t._v("mdi-open-in-new")]),t._v("View\n            ")],1)],1)],1)],1)})),1)],1)})),0)}),[],!1,null,"32f2f366",null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:v.a,VCardActions:h.a,VCardTitle:h.c,VContainer:f.a,VIcon:m.a,VRow:_.a})}}]);