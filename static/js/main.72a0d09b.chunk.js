(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),s=(n(29),n(14)),u=n(4),i=n(5),l=n(7),h=n(6),d=(n(30),n(31),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleInputChange=function(t){e.setState({query:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault(),e.resetForm(),e.props.getQuery(e.state.query)},e.resetForm=function(){e.setState({query:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleFormSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",value:this.state.query,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInputChange})]})})}}]),n}(a.Component);n(33);function m(e){var t=e.img;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)("img",{src:t.webformatURL,alt:t.tags,width:"300",className:"ImageGalleryItem-image"})},t.id)}n(34);function b(e){var t=e.searchResults;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(m,{img:e},e.id)}))})}n(35);function f(e){var t=e.handleButtonLoadMore;return Object(d.jsx)("button",{type:"button",className:"button",onClick:t,children:"Load more"})}var p=n(12),g=n.n(p),y=n(23),O=n(13),v=n.n(O),x="23192849-392e98e42aea5a2ff7de83472";function S(e,t){return w.apply(this,arguments)}function w(){return(w=Object(y.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("&q=".concat(t,"&page=").concat(n,"&per_page=12&key=").concat(x));case 2:return a=e.sent,r=a.data.hits,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.a.defaults.baseURL="https://pixabay.com/api/?image_type=photo&orientation=horizontal";var N=n(24),q=n.n(N);n(75),n(76);function F(){return Object(d.jsx)("div",{className:"myLoader",children:Object(d.jsx)(q.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})}n(77);var I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:"",alt:""})})}),document.getElementById("modalRoot"))}}]),n}(a.Component),R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,searchResults:[],loader:!1},e.fetchImages=function(){return e.setState({loader:!0}),S(e.state.query,e.state.page).then((function(t){e.setState((function(e){return{page:e.page+1,searchResults:[].concat(Object(s.a)(e.searchResults),Object(s.a)(t))}}))})).catch((function(e){return console.log(e)}))},e.getQuery=function(t){return e.setState({query:t,page:1,searchResults:[]})},e.handleButtonLoadMore=function(){e.fetchImages().then((function(){return e.scrollDown()})).finally((function(){return e.setState({loader:!1})}))},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;t.query!==this.state.query&&this.fetchImages().finally((function(){return n.setState({loader:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.loader,n=e.searchResults,a=e.query;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{getQuery:this.getQuery}),n.length>0?Object(d.jsx)(b,{searchResults:n}):""!==a&&!t&&Object(d.jsx)("p",{className:"noResult",children:"No results\ud83d\ude1f"}),n.length>0&&!t&&Object(d.jsx)(f,{handleButtonLoadMore:this.handleButtonLoadMore}),t&&Object(d.jsx)(F,{}),Object(d.jsx)(I,{})]})}}]),n}(a.Component),k=R;o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.72a0d09b.chunk.js.map