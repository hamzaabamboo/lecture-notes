(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{431:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(88);var a=n(11),r=n.n(a),i=n(0),c=n.n(i),o=n(156),l=n(17),s=(n(185),n(439)),m=n(535),u=n(58),p=n(444),d=n(24),f=n(22),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.edges,n=this.props.classes;return c.a.createElement("div",{className:n.root},c.a.createElement(s.Helmet,{title:e}),t.map(function(e){var t=e.node,n=Object(m.get)(t,"frontmatter.title")||t.fields.slug,a=Object(m.get)(t,"frontmatter.subject");return c.a.createElement(p.a,{title:a,key:t.fields.slug,onClick:function(){return Object(u.navigate)(Object(f.withPrefix)(t.fields.slug))}},c.a.createElement(d.h,{variant:"headline",component:"h3"},n),c.a.createElement(d.h,{component:"small"},t.frontmatter.date),c.a.createElement(d.h,{component:"p",dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(c.a.Component);t.default=Object(o.a)(Object(l.withStyles)(function(e){return{root:{width:"80%",margin:"0 auto",padding:"25px 0"}}})(h));var g="3181188955"},444:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(2),c=n.n(i),o=n(17),l=n(180),s=n.n(l),m=n(182),u=n.n(m),p=n(181),d=n.n(p),f=n(44),h=n.n(f),g=function(e){var t=e.classes,n=e.title,a=e.children,i=e.onClick;return r.a.createElement("div",{className:t.pos,onClick:i},r.a.createElement(s.a,{className:t.card},r.a.createElement(d.a,null,r.a.createElement(h.a,{className:t.title,color:"textSecondary"},n),a),r.a.createElement(u.a,null)))};g.propTypes={classes:c.a.object.isRequired},t.a=Object(o.withStyles)({card:{minWidth:275},title:{marginBottom:16,fontSize:14},pos:{marginBottom:12}})(g)}}]);
//# sourceMappingURL=component---src-templates-subject-list-js-c7b2d34af4029b3ffb5d.js.map