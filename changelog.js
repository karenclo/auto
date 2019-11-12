(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=n(a(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};o.get||o.set?Object.defineProperty(t,a,o):t[a]=e[a]}return t.default=e,t}(a(0));n(a(2)),n(a(98));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===n)t.children=r;else if(n>1){for(var l=new Array(n),d=0;d<n;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c=e=>{let{to:t}=e,a=h(e,["to"]);return t.includes("http")?i.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/extras/changelog.html")+t),i.default.createElement("a",d({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const u=e=>{var t,a;return a=t=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};u(()=>a.e(23).then(a.bind(null,99))),u(()=>a.e(23).then(a.bind(null,100)));var g=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ This should be run before ",s("code",{},void 0,"npm version")," so the ",s("code",{},void 0,"CHANGELOG.md")," changes are committed before the release gets tagged."))),v=s("p",{},void 0,"Sometimes a PR title is just not enough to capture what a user should know about that PR. That's why we've included the ability to put extra release notes right in your PRs. All you have to do is add a ",s("code",{},void 0,"Release Notes")," section in your PR."),p=s("p",{},void 0,"Take the following PR body:"),f=s("pre",{},void 0,s("code",{className:"language-md"},void 0,s("span",{className:"hljs-section"},void 0,"# What Changed"),s("br",{}),s("br",{}),"Change ",s("span",{className:"hljs-strong"},void 0,"`"),"shipit",s("span",{className:"hljs-strong"},void 0,"`")," behavior.",s("br",{}),s("br",{}),s("span",{className:"hljs-section"},void 0,"## Release Notes"),s("br",{}),s("br",{}),s("span",{className:"hljs-strong"},void 0,"`"),"auto shipit",s("span",{className:"hljs-strong"},void 0,"`")," will only ship to ",s("span",{className:"hljs-strong"},void 0,"`"),"latest",s("span",{className:"hljs-strong"},void 0,"`")," on the base branch ([",s("span",{className:"hljs-string"},void 0,"which is configurable"),"](",s("span",{className:"hljs-link"}),")). If ran locally or from a PR it will create a ",s("span",{className:"hljs-strong"},void 0,"`"),"canary",s("span",{className:"hljs-strong"},void 0,"`")," release that doesn't interfere with your ",s("span",{className:"hljs-strong"},void 0,"`"),"latest",s("span",{className:"hljs-strong"},void 0,"`")," release.",s("br",{}))),m=s("p",{},void 0,"This will create a special section at the top of the changelog that collects all the additional release notes from merged PRs. Below is a sample of what it might look like."),b=s("hr",{}),y=s("h1",{},void 0,"v5.0.0 (Sat May 04 2019)"),P=s("p",{},void 0,s("em",{},void 0,"From #371")),w=s("code",{},void 0,"auto shipit"),N=s("code",{},void 0,"latest"),j=s("code",{},void 0,"canary"),k=s("code",{},void 0,"latest"),O=s("hr",{});var C=e=>s("div",{className:e.className},void 0,s("section",{},void 0,g,s("h2",{id:"changelog-titles"},void 0,"Changelog Titles ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),s("p",{},void 0,"You can customize the changelog titles and even add custom ones. To see configuration ",s(c,{currentPage:e.currentPage,to:"/auto/pages/extras/autorc.html#changelog-titles"},void 0,"go here"),"."),s("h2",{id:"additional-release-notes"},void 0,"Additional Release notes ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#additional-release-notes","aria-hidden":"true"})),v,p,f,m,b,y,s("h3",{id:"release-notes"},void 0,"Release Notes ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-notes","aria-hidden":"true"})),P,s("p",{},void 0,w," will only ship to ",N," on the base branch (",s(c,{currentPage:e.currentPage,to:""},void 0,"which is configurable"),"). If ran locally or from a PR it will create a ",j," release that doesn't interfere with your ",k," release."),O,s("h4",{id:"%F0%9F%92%A5-breaking-change"},void 0,"💥 Breaking Change ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%F0%9F%92%A5-breaking-change","aria-hidden":"true"})),s("ul",{},void 0,s("li",{},void 0,"shipit will publish a canary locally when not on master ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/371",className:"external-link"},void 0,"#371")," (",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")")),s("h4",{id:"authors%3A-1"},void 0,"Authors: 1 ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#authors%3A-1","aria-hidden":"true"})),s("ul",{},void 0,s("li",{},void 0,"Andrew Lisowski (",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")"))));t.default=C,e.exports=t.default},72:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=n(a(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};o.get||o.set?Object.defineProperty(t,a,o):t[a]=e[a]}return t.default=e,t}(a(0));n(a(2)),n(a(98));function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t,a,r){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===n)t.children=r;else if(n>1){for(var l=new Array(n),d=0;d<n;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const c=e=>{let{to:t}=e,a=h(e,["to"]);return t.includes("http")?i.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto/","pages/generated/changelog.html")+t),i.default.createElement("a",d({},a,{href:t,onClick:a=>{if(a.preventDefault(),"#"===e.to)return!1;const o=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const i=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const u=e=>{var t,a;return a=t=class extends i.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),a};u(()=>a.e(23).then(a.bind(null,99))),u(()=>a.e(23).then(a.bind(null,100)));var g=s("h1",{},void 0,s("code",{},void 0,"changelog")),v=s("p",{},void 0,"Prepend release notes to ",s("code",{},void 0,"CHANGELOG.md"),", create one if it doesn't exist, and commit the changes."),p=s("table",{},void 0,s("thead",{},void 0,s("tr",{},void 0,s("th",{},void 0,"Flag"),s("th",{},void 0,"Type"),s("th",{},void 0,"Description"))),s("tbody",{},void 0,s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--dry-run"),", ",s("code",{},void 0,"-d")),s("td",{},void 0,"Boolean"),s("td",{},void 0,"Report what command will do but do not actually do anything")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--no-version-prefix")),s("td",{},void 0,"Boolean"),s("td",{},void 0,"Use the version as the tag without the 'v' prefix")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--name")),s("td",{},void 0,"String"),s("td",{},void 0,"Git name to commit and release with. Defaults to package definition for the platform")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--email")),s("td",{},void 0,"String"),s("td",{},void 0,"Git email to commit with. Defaults to package definition for the platform")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--from")),s("td",{},void 0,"String"),s("td",{},void 0,"Tag to start changelog generation on. Defaults to latest tag.")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--to")),s("td",{},void 0,"String"),s("td",{},void 0,"Tag to end changelog generation on. Defaults to HEAD.")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--message"),", ",s("code",{},void 0,"-m")),s("td",{},void 0,"String"),s("td",{},void 0,"Message to commit the changelog with. Defaults to 'Update CHANGELOG.md [skip ci]'")),s("tr",{},void 0,s("td",{},void 0,s("code",{},void 0,"--base-branch")),s("td",{},void 0,"String"),s("td",{},void 0,'Branch to treat as the "master" branch')))),f=s("p",{},void 0,"Generate a changelog from the last release to head"),m=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto changelog",s("br",{}))),b=s("p",{},void 0,"Generate a changelog across specific versions"),y=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"auto changelog --from v0.20.1 --to v0.21.0",s("br",{}))),P=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ This should be run before ",s("code",{},void 0,"npm version")," so the ",s("code",{},void 0,"CHANGELOG.md")," changes are committed before the release gets tagged."))),w=s("p",{},void 0,"Sometimes a PR title is just not enough to capture what a user should know about that PR. That's why we've included the ability to put extra release notes right in your PRs. All you have to do is add a ",s("code",{},void 0,"Release Notes")," section in your PR."),N=s("p",{},void 0,"Take the following PR body:"),j=s("pre",{},void 0,s("code",{className:"language-md"},void 0,s("span",{className:"hljs-section"},void 0,"# What Changed"),s("br",{}),s("br",{}),"Change ",s("span",{className:"hljs-strong"},void 0,"`"),"shipit",s("span",{className:"hljs-strong"},void 0,"`")," behavior.",s("br",{}),s("br",{}),s("span",{className:"hljs-section"},void 0,"## Release Notes"),s("br",{}),s("br",{}),s("span",{className:"hljs-strong"},void 0,"`"),"auto shipit",s("span",{className:"hljs-strong"},void 0,"`")," will only ship to ",s("span",{className:"hljs-strong"},void 0,"`"),"latest",s("span",{className:"hljs-strong"},void 0,"`")," on the base branch ([",s("span",{className:"hljs-string"},void 0,"which is configurable"),"](",s("span",{className:"hljs-link"}),")). If ran locally or from a PR it will create a ",s("span",{className:"hljs-strong"},void 0,"`"),"canary",s("span",{className:"hljs-strong"},void 0,"`")," release that doesn't interfere with your ",s("span",{className:"hljs-strong"},void 0,"`"),"latest",s("span",{className:"hljs-strong"},void 0,"`")," release.",s("br",{}))),k=s("p",{},void 0,"This will create a special section at the top of the changelog that collects all the additional release notes from merged PRs. Below is a sample of what it might look like."),O=s("hr",{}),C=s("h1",{},void 0,"v5.0.0 (Sat May 04 2019)"),R=s("p",{},void 0,s("em",{},void 0,"From #371")),L=s("code",{},void 0,"auto shipit"),x=s("code",{},void 0,"latest"),S=s("code",{},void 0,"canary"),A=s("code",{},void 0,"latest"),_=s("hr",{});var E=e=>s("div",{className:e.className},void 0,s("section",{},void 0,g,v,s("h2",{id:"options"},void 0,"Options ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),p,s("h2",{id:"examples"},void 0,"Examples ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#examples","aria-hidden":"true"})),f,m,b,y,P,s("h2",{id:"changelog-titles"},void 0,"Changelog Titles ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#changelog-titles","aria-hidden":"true"})),s("p",{},void 0,"You can customize the changelog titles and even add custom ones. To see configuration ",s(c,{currentPage:e.currentPage,to:"/auto/pages/generated/autorc.html#changelog-titles"},void 0,"go here"),"."),s("h2",{id:"additional-release-notes"},void 0,"Additional Release notes ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#additional-release-notes","aria-hidden":"true"})),w,N,j,k,O,C,s("h3",{id:"release-notes"},void 0,"Release Notes ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#release-notes","aria-hidden":"true"})),R,s("p",{},void 0,L," will only ship to ",x," on the base branch (",s(c,{currentPage:e.currentPage,to:""},void 0,"which is configurable"),"). If ran locally or from a PR it will create a ",S," release that doesn't interfere with your ",A," release."),_,s("h4",{id:"%F0%9F%92%A5-breaking-change"},void 0,"💥 Breaking Change ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#%F0%9F%92%A5-breaking-change","aria-hidden":"true"})),s("ul",{},void 0,s("li",{},void 0,"shipit will publish a canary locally when not on master ",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/intuit/auto/pull/371",className:"external-link"},void 0,"#371")," (",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")")),s("h4",{id:"authors%3A-1"},void 0,"Authors: 1 ",s(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#authors%3A-1","aria-hidden":"true"})),s("ul",{},void 0,s("li",{},void 0,"Andrew Lisowski (",s(c,{currentPage:e.currentPage,target:"_blank",to:"https://github.com/hipstersmoothie",className:"external-link"},void 0,"@hipstersmoothie"),")"))));t.default=E,e.exports=t.default}}]);
//# sourceMappingURL=changelog.js.map