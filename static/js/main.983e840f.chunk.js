(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),l=n(4),s=n(1),u=n.n(s),h=(n(12),n(0)),m=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).clockTimer=void 0,t.state={date:(new Date).toLocaleTimeString()},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockTimer=window.setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.name;this.props.name!==e&&console.log("The Clock was renamed from ".concat(e," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockTimer)}},{key:"render",value:function(){var t=this.state.date;return Object(h.jsx)(h.Fragment,{children:t})}}]),n}(u.a.Component),d=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isClockVisible,c=e.clockName;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock ".concat(c)}),Object(h.jsxs)("p",{children:["Current time:"," ",n&&Object(h.jsx)(m,{name:c})]}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({isClockVisible:!n})},children:n?"Hide Clock":"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({clockName:Math.round(100*Math.random())})},children:"Set random name"})]})}}]),n}(u.a.Component),b=d;a.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.983e840f.chunk.js.map