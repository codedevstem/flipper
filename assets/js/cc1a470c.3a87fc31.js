(self.webpackChunk=self.webpackChunk||[]).push([[8788],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,g=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2482:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>l,toc:()=>u,default:()=>p});var r=t(4034),a=t(9973),o=(t(7294),t(3905)),i={id:"create-table-plugin",title:"Create Table Plugin"},l={unversionedId:"extending/create-table-plugin",id:"extending/create-table-plugin",isDocsHomePage:!1,title:"Create Table Plugin",description:"The following mechanism isn't supported yet by the Sandy plugin architecture.",source:"@site/../docs/extending/create-table-plugin.mdx",sourceDirName:"extending",slug:"/extending/create-table-plugin",permalink:"/docs/extending/create-table-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/create-table-plugin.mdx",version:"current",frontMatter:{id:"create-table-plugin",title:"Create Table Plugin"},sidebar:"extending",previous:{title:"Desktop Plugin API",permalink:"/docs/extending/js-plugin-api"},next:{title:"Client Plugin API",permalink:"/docs/extending/create-plugin"}},u=[],c={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"warning"},(0,o.kt)("p",null,"The following mechanism isn't supported yet by the Sandy plugin architecture.\nPlease remove ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper-plugin")," from the plugin dependencies if you want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"createTablePlugin"),".")),(0,o.kt)("p",null,"A very common kind of Flipper plugin is a plugin which fetches some structured data from the device and presents it in a table."),(0,o.kt)("p",null,"To make building these kinds of plugins as easy as possible we have created an abstraction we call ",(0,o.kt)("inlineCode",{parentName:"p"},"createTablePlugin"),". This is a function which manages the complexities of building a table plugin but still allows you to customize many things to suite your needs."),(0,o.kt)("p",null,"Below is a sample implementation of a desktop plugin based on ",(0,o.kt)("inlineCode",{parentName:"p"},"createTablePlugin"),". It subscribes to updates from a client send using the ",(0,o.kt)("inlineCode",{parentName:"p"},"newRow")," method. A row can have any structure you want as long as it has a unique field ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("p",null,'See "',(0,o.kt)("a",{parentName:"p",href:"create-plugin"},"Create Plugin"),'" for how to create the native counterpart for your plugin.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {ManagedDataInspector, Panel, Text, createTablePlugin} from 'flipper';\n\ntype Id = string;\n\ntype Row = {\n  id: Id,\n  column1: string,\n  column2: string,\n  column3: string,\n  extras: Object,\n};\n\nfunction buildRow(row: Row) {\n  return {\n    columns: {\n      column1: {\n        value: <Text>{row.column1}</Text>,\n        filterValue: row.column1,\n      },\n      column2: {\n        value: <Text>{row.column2}</Text>,\n        filterValue: row.column2,\n      },\n      column3: {\n        value: <Text>{row.column3}</Text>,\n        filterValue: row.column3,\n      },\n    },\n    key: row.id,\n    copyText: JSON.stringify(row),\n    filterValue: `${row.column1} ${row.column2} ${row.column3}`,\n  };\n}\n\nfunction renderSidebar(row: Row) {\n  return (\n    <Panel floating={false} heading={'Extras'}>\n      <ManagedDataInspector data={JSON.parse(row.extras)} expandRoot={true} />\n    </Panel>\n  );\n}\n\nconst columns = {\n  time: {\n    value: 'Column1',\n  },\n  module: {\n    value: 'Column2',\n  },\n  name: {\n    value: 'Column3',\n  },\n};\n\nconst columnSizes = {\n  time: '15%',\n  module: '20%',\n  name: 'flex',\n};\n\nexport default createTablePlugin({\n  method: 'newRow', // Method which should be subscribed to to get new rows with share Row (from above),\n  columns,\n  columnSizes,\n  renderSidebar,\n  buildRow,\n});\n")))}p.isMDXComponent=!0}}]);