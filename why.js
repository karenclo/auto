(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{57:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=s(o(3)),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0)),r=s(o(2));s(o(98));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,n){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===r)t.children=n;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const c=e=>{let{to:t}=e,o=h(e,["to"]);return t.includes("http")?i.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=n.default.join("/auto/","blog/why.html")+t),i.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(n.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const i=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(i),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,o;return o=t=class extends i.default.Component{constructor(...e){super(...e),d(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?i.default.createElement(e,this.props,this.props.children||null):null}},d(t,"defaultProps",{shouldLoad:!0}),o};p(()=>o.e(23).then(o.bind(null,99))),p(()=>o.e(23).then(o.bind(null,100)));var m=l("p",{className:"title blogTitle"},void 0,"Death to Monotony"),f=l("span",{},void 0," on May 3, 2019",l("span",{})),g=l("h1",{},void 0,"How auto can “handle the rest for you”"),b=l("hr",{}),w=l("div",{className:"has-text-centered learnMore"},void 0,l(c,{to:"/auto/blog/why.html"},void 0,"Read More")),v=l("p",{className:"title blogTitle"},void 0,"Death to Monotony"),y=l("span",{},void 0," on May 3, 2019",l("span",{})),k=l("h1",{},void 0,"How auto can “handle the rest for you”"),P=l("hr",{}),x=l("p",{},void 0,"Historically, our release process involved a lot of manual labor. Before publishing an update to npm, someone on the team had to gather all of the changes merged since our last release, write up a changelog, and figure out what the next version was going to be. This often involved a lot of back and forth between GitHub and Jira. Once we had all of that, we could create a release, publish it to npm, document it in GitHub, and post an update to our team’s Slack channel. These 6–7 monotonous tasks were needed for each release, which easily took up to 30–60 minutes out of our day."),N=l("p",{},void 0,"To distribute the pain, each month we would nominate someone as the release marshal, who inherited the responsibilities of handling all of the release tasks. It was an inefficient, joyless process that we all resented. Something needed to change."),I=l("hr",{}),S=l("p",{},void 0,"Auto started as a simple Node script that made a few requests to the GitHub API. It gathered the commits merged from the last release and posted those to GitHub. We still had some manual steps in the release process, but it was the start of the end of the monotony."),O=l("p",{},void 0,"We initially crafted auto to solve for our team’s specific release process — which needed to post comments and statuses back to a pull request, generate release notes based on what was merged, and document these releases on GitHub and Slack. We eliminated the need for a dedicated release marshal, instead opting for each engineer to annotate their pull requests with a proper semantic version label. Auto would then take it from there, deploying and documenting the release without the need for manual intervention. After dogfooding auto internally for about six months, there was a lot of interest from outside teams, and we knew each of them had slightly different release pipelines, so we worked to make it reusable and customizable for anyone that wanted to use it."),j=l("p",{},void 0,"Andrew and I had been talking about using TypeScript for a while and decided that this was a perfect project to start out. By bringing static type-checking to our JavaScript code, refactoring became much less painful, as types quickly caught would-be bugs much sooner. Since writing auto, we’ve made it a point to use TypeScript as our de facto language in any new project we create, including many of the front-end components used in TurboTax today."),q=l("p",{},void 0,"Andrew was also getting more involved in the open source community at Intuit, and auto seemed like a great fit for a project to release next — any work that we’d need to do to make auto pluggable for teams inside of Intuit also meant that teams outside of Intuit could leverage it."),T=l("p",{},void 0,"While a few libraries with similar capabilities already exist, we had yet to identify one that truly met our needs. Packages such as semantic-release were a great inspiration to auto-calculate a version bump based on merged changes, but require a significant change to a developer’s workflow, something we weren’t prepared to enforce."),A=l("p",{},void 0,"Auto’s philosophy is to compose each part of the release pipeline into a series of plugins, allowing it to handle a bunch of different use-cases out of the box. Ultimately it boils down to two commands: “auto init” to get started and “auto shipit” to release. Anyone can write a plugin for any part of the release process and add their own custom handlers, without having to change the core system. If instead of publishing to npm, you want to publish an extension to the Chrome Web Store, simply enable that plugin and auto will handle the rest for you."),_=l("p",{},void 0,"We were pleasantly surprised by how quickly auto was picked up by the community. It filled a niche that the existing libraries didn’t quite cover. By using labels — instead of specially formatted commit messages required by some existing solutions — we were able to significantly lower the barriers to entry for auto. Auto doesn’t impede the developer workflow — just throw a label on a pull request and continue to focus on code."),W=l("p",{},void 0,"Working on auto from the start has been an amazing experience — not only did it help our team, but it’s awesome to see other teams integrating it into their releases. I’m really happy that we got to share it with the open source community and am excited to see where the future takes it next.");var D=class extends i.default.Component{componentDidMount(){this.props.atIndex||window.configuration.setBlogHero("https://cdn-images-1.medium.com/max/800/1*TVSbt7qsyleNiQ84la_log.jpeg")}render(){return l("div",{className:(0,r.default)("blogPost",this.props.className)},void 0,l("p",{},void 0,this.props.heroUrl),l("section",{},void 0,this.props.stub?l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,m,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.intuit.com/adierkens"},void 0,"Adam Dierkens"),f))),l("div",{className:"blogBody"},void 0,g,l("p",{},void 0,"I’ve been a front-end engineer at Intuit in San Diego for the past three years. As one of three members of Intuit’s Player team, we are responsible for delivering a JavaScript framework dedicated to rendering most of a user’s experience in ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://turbotax.intuit.com/",className:"external-link"},void 0,"TurboTax"),". We end up releasing a lot of code, usually React components, quite frequently to our internal node package manager (npm) instance. It’s not uncommon for us to hit double-digit releases in a single day. This means lots of version bumps, release notes, changelogs, Jira tickets, Slack announcements, and all the other goodies that come with communicating to dependent teams, that their bug is now fixed, or a new feature is ready for them to use. While none of these steps are intrinsically difficult, the time commitment adds up quickly, so we wrote auto: a tool to ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto",className:"external-link"},void 0,"auto-generate releases based on semantic version labels"),"."),b,w))):l("div",{className:"card"},void 0,l("div",{className:"card-content"},void 0,l("div",{className:"media blogHeader"},void 0,l("div",{className:"media-content has-text-centered"},void 0,v,l("p",{className:"subtitle is-6 blogSubtitle"},void 0,l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.intuit.com/adierkens"},void 0,"Adam Dierkens"),y))),l("div",{className:"blogBody"},void 0,l("div",{},void 0,k,l("p",{},void 0,"I’ve been a front-end engineer at Intuit in San Diego for the past three years. As one of three members of Intuit’s Player team, we are responsible for delivering a JavaScript framework dedicated to rendering most of a user’s experience in ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://turbotax.intuit.com/",className:"external-link"},void 0,"TurboTax"),". We end up releasing a lot of code, usually React components, quite frequently to our internal node package manager (npm) instance. It’s not uncommon for us to hit double-digit releases in a single day. This means lots of version bumps, release notes, changelogs, Jira tickets, Slack announcements, and all the other goodies that come with communicating to dependent teams, that their bug is now fixed, or a new feature is ready for them to use. While none of these steps are intrinsically difficult, the time commitment adds up quickly, so we wrote auto: a tool to ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto",className:"external-link"},void 0,"auto-generate releases based on semantic version labels"),"."),P,l("h2",{id:"the-problem"},void 0,"The Problem ",l(c,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#the-problem","aria-hidden":"true"})),x,N,I,l("h2",{id:"the-solution"},void 0,"The Solution ",l(c,{currentPage:(this&&this.props||props).currentPage,className:"fas fa-hashtag headerLink",to:"#the-solution","aria-hidden":"true"})),S,l("p",{},void 0,"I brought in another engineer on my team, ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://www.linkedin.com/in/andrew-lisowski-8b419977/",className:"external-link"},void 0,"Andrew Lisowski"),", and we spent the next few months building out the script into a proper npm module. We gave it a well-defined API comprised of small atomic operations that could handle all parts of the release. With auto, the new process is entirely hands-off — simply hit “merge”, and everything happens automatically."),O,j,l("p",{},void 0,"Inspired by the power and modularity of webpack’s plugin architecture, we brought in their tap-able module, the core code that powers their plugins. Andrew and I spent about a month slowly refactoring the code to leverage the plugin-based architecture you see today. It went live on ",l(c,{currentPage:(this&&this.props||props).currentPage,target:"_blank",to:"https://github.com/intuit/auto",className:"external-link"},void 0,"GitHub")," in December 2018 and has since attracted several outside contributors."),q,T,A,_,W))))))}};t.default=D,e.exports=t.default}}]);
//# sourceMappingURL=why.js.map