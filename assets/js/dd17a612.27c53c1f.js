(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(156)),o=n(165),l=n(166),c={id:"network-plugin",title:"Network Setup",sidebar_label:"Network"},u={unversionedId:"setup/network-plugin",id:"setup/network-plugin",isDocsHomePage:!1,title:"Network Setup",description:"To use the network plugin, you need to add the plugin to your Flipper client instance.",source:"@site/../docs/setup/network-plugin.mdx",slug:"/setup/network-plugin",permalink:"/docs/setup/network-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/network-plugin.mdx",version:"current",sidebar_label:"Network",sidebar:"setup",previous:{title:"Navigation Plugin Setup",permalink:"/docs/setup/navigation-plugin"},next:{title:"Databases Plugin Setup",permalink:"/docs/setup/databases-plugin"}},p=[{value:"Android",id:"android",children:[{value:"OkHttp Integration",id:"okhttp-integration",children:[]}]},{value:"iOS",id:"ios",children:[]}],s={toc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use the network plugin, you need to add the plugin to your Flipper client instance."),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("p",null,"The network plugin is shipped as a separate Maven artifact:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-network-plugin:0.82.0'\n}\n")),Object(i.b)("p",null,"Once added to your dependencies, you can instantiate the plugin and add it to\nthe client:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;\n\nNetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();\nclient.addPlugin(networkFlipperPlugin);\n")),Object(i.b)("h3",{id:"okhttp-integration"},"OkHttp Integration"),Object(i.b)("p",null,"If you are using the popular OkHttp library, you can use the Interceptors system to automatically hook into your existing stack."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;\n\nnew OkHttpClient.Builder()\n    .addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin))\n    .build();\n")),Object(i.b)("p",null,"As interceptors can modify the request and response, add the Flipper interceptor after all others to get an accurate view of the network traffic."),Object(i.b)("h2",{id:"ios"},"iOS"),Object(i.b)("p",null,"To enable network inspection, add the following pod to your Podfile:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version\n")),Object(i.b)("p",null,"Initialise the plugin in the following way:"),Object(i.b)(o.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"ios",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-objective-c"},"#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n\n[[FlipperClient sharedClient] addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n\n"))),Object(i.b)(l.a,{value:"swift",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nclient?.add(FlipperKitNetworkPlugin(networkAdapter: SKIOSNetworkAdapter()))\n\n")))))}d.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},162:function(e,t,n){"use strict";var r=n(0),a=n(163);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},163:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},165:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(162),o=n(160),l=n(66),c=n.n(l);var u=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,s=e.values,d=e.groupId,b=e.className,f=Object(i.a)(),m=f.tabGroupChoices,g=f.setTabGroupChoices,v=Object(r.useState)(l),O=v[0],w=v[1],y=r.Children.toArray(e.children),k=[];if(null!=d){var h=m[d];null!=h&&h!==O&&s.some((function(e){return e.value===h}))&&w(h)}var j=function(e){var t=e.target,n=k.indexOf(t),r=y[n].props.value;w(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,a,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case p:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},s.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:j,onClick:j},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},166:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}}}]);