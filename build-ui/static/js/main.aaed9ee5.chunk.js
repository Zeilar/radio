(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{57:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t.n(r),a=t(35),o=t.n(a),i=t(3),s=t(14),b=t(10),l=t(2),d=t(9),u=t.n(d),j=t(13),p=t(6);function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(r.useState)(!0),c=Object(p.a)(t,2),a=c[0],o=c[1],i=Object(r.useState)(null),s=Object(p.a)(i,2),b=s[0],l=s[1],d=Object(r.useState)(!1),O=Object(p.a)(d,2),h=O[0],g=O[1];function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).length<=0?"":(n=Object.entries(n).map((function(n){var e=Object(p.a)(n,2),t=e[0],r=e[1];return"".concat(t,"=").concat(r)})).join("&"),"?".concat(n))}return Object(r.useEffect)((function(){Object(j.a)(u.a.mark((function t(){var r,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n){t.next=3;break}throw new Error("Invalid URL argument, got `".concat(n,"`"));case 3:return t.next=5,fetch("".concat(n).concat(f(e.params)),e.request);case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,l(c),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.error(t.t0.message),g(t.t0.message);case 16:return t.prev=16,o(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,12,16,19]])})))()}),[n]),{loading:a,data:b,error:h,success:!Boolean(h)}}var h,g,f,x,m,v,y,w,k,S,P,L,C,E,z,R,M,F,N,U,D,Y,q,H,I,T,A,J,B,V=t(8),G=t(12),K=t.n(G),Q=Object(l.c)((function(n){var e=n.justify,t=n.align,r=n.block;return Object(l.c)(h||(h=Object(i.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: ",";\n    width: ",";\n"])),e,t,r?"100%":null)})),W=l.d.div(g||(g=Object(i.a)(["\n    ","\n    flex-direction: row;\n"])),Q),X=l.d.div(f||(f=Object(i.a)(["\n    ","\n    flex-direction: column;\n"])),Q),Z=Object(l.c)((function(n){var e=n.theme;return Object(l.c)(x||(x=Object(i.a)(["\n    color: rgb(",");\n    font-weight: bold;\n"])),e.color.textPrimary)})),$=l.d.div(m||(m=Object(i.a)(["\n    ","\n    padding: 30px;\n    width: 1200px;\n    margin: 0 auto;\n    ","\n"])),Q,(function(n){var e=n.row,t=n.col;return Object(l.c)(v||(v=Object(i.a)(["\n        flex-direction: ",";\n        flex-direction: ",";\n    "])),t&&"column",e&&"row")})),_=Object(l.c)(y||(y=Object(i.a)(["\n    @keyframes fade {\n        from {\n            opacity: 0;\n        }\n        to {\n            opacity: 1;\n        }\n    }\n    animation: fade 0.25s forwards;\n"]))),nn=l.d.button.attrs({justify:"center",align:"center"})(w||(w=Object(i.a)(["\n    ","\n    border: 0;\n    padding: 12px 40px;\n    font: bold 1.15rem Poppins;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\n    transition: 0.15s;\n    min-width: 3rem;\n    height: 3rem;\n    ","\n    &:not([disabled]):hover {\n        background-color: rgb(25, 25, 25);\n    }\n    &[disabled] {\n        cursor: wait;\n        background-color: rgb(85, 85, 85);\n    }\n"])),Q,(function(n){var e=n.theme;return Object(l.c)(k||(k=Object(i.a)(["\n        color: rgb(",");\n        background-color: rgb(",");\n    "])),e.color.textSecondary,e.color.brand)})),en=(l.d.h1(S||(S=Object(i.a)(["\n    ","\n    font-size: 3rem;\n"])),Z),l.d.h2(P||(P=Object(i.a)(["\n    ","\n    font-size: 2.5rem;\n"])),Z)),tn=l.d.h3(L||(L=Object(i.a)(["\n    ","\n    font-size: 2rem;\n"])),Z),rn=l.d.h4(C||(C=Object(i.a)(["\n    ","\n    font-size: 1.5rem;\n"])),Z),cn=l.d.h5(E||(E=Object(i.a)(["\n    ","\n    font-size: 1.25rem;\n"])),Z),an=(l.d.h6(z||(z=Object(i.a)(["\n    ","\n    font-size: 1rem;\n"])),Z),Object(l.c)(R||(R=Object(i.a)(["\n    background-color: rgb(",");\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);\n    border-radius: ","px;\n"])),(function(n){return n.theme.color.bodyDark}),(function(n){return n.theme.borderRadius}))),on=Object(l.c)(M||(M=Object(i.a)(["\n    ","\n    border: 0;\n    padding: 10px;\n    outline: 0;\n    transition: color 0.05s, box-shadow 0.05s;\n    font-size: 1rem;\n    font-family: Libre Franklin;\n    width: 15rem;\n    &::-webkit-inner-spin-button {\n        display: none;\n    }\n    ","\n"])),an,(function(n){var e=n.theme;return Object(l.c)(F||(F=Object(i.a)(["\n        color: rgb(",");\n        border-radius: ","px;\n        &:focus {\n            box-shadow: 0 0 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(",");\n        }\n    "])),e.color.textPrimary,e.borderRadius,e.color.bodyLight)})),sn=(Object(l.d)(X)(N||(N=Object(i.a)(["\n    display: inline-flex;\n    font-size: 1.5rem;\n"]))),l.d.label(U||(U=Object(i.a)(["\n    margin-bottom: 5px;\n    font-family: Josefin Sans;\n    cursor: text;\n"]))),l.d.input.attrs({type:"text"})(D||(D=Object(i.a)(["\n    ","\n"])),on),l.d.input.attrs({type:"number",min:1})(Y||(Y=Object(i.a)(["\n    ","\n    min-width: calc(100%);\n    width: 8rem;\n"])),on),l.d.textarea.attrs({rows:6,cols:50})(q||(q=Object(i.a)(["\n    ","\n    width: unset;\n    resize: none;\n"])),on),l.d.div(H||(H=Object(i.a)(["\n    display: grid;\n    grid-gap: 15px;\n    margin-top: 15px;\n"]))),t(0));function bn(n){var e=n.loading,t=n.message,r=void 0===t?null:t;return!1===e?null:Object(sn.jsxs)(ln,{justify:"center",align:"center",children:[Object(sn.jsx)(dn,{}),Object(sn.jsxs)(jn,{children:[Object(sn.jsx)(pn,{}),Object(sn.jsx)(pn,{}),Object(sn.jsx)(pn,{})]}),r&&Object(sn.jsx)(un,{children:r})]})}var ln=Object(l.d)(X)(I||(I=Object(i.a)(["\n    color: rgb(",");\n    padding: 5px;\n    margin: 30px;\n"])),(function(n){return n.theme.color.textPrimary})),dn=Object(l.d)(K.a).attrs({path:V.g})(T||(T=Object(i.a)(["\n    width: 5rem;\n    height: 5rem;\n"]))),un=Object(l.d)(tn)(A||(A=Object(i.a)(["\n    font-weight: normal;\n"]))),jn=l.d.div(J||(J=Object(i.a)(["\n    margin: 5px 0;\n    display: grid;\n    grid-gap: 5px;\n    grid-template-columns: repeat(3, 1fr);\n"]))),pn=l.d.span(B||(B=Object(i.a)(["\n    @keyframes jump {\n        50% {\n            transform: scale(0.95) translateY(-2px);\n            background-color: rgb(0, 0, 0);\n        }\n    }\n    width: 0.5rem;\n    height: 0.5rem;\n    border-radius: 50%;\n    background-color: rgb(125, 125, 125);\n    animation: jump 1s infinite ease-in-out;\n    &:nth-child(2) {\n        animation-delay: 0.25s;\n    }\n    &:nth-child(3) {\n        animation-delay: 0.5s;\n    }\n"]))),On=t(20),hn=Object(r.createContext)();function gn(n){var e=n.children,t=Object(r.useState)(),c=Object(p.a)(t,2),a=c[0],o=c[1],i=Object(r.useState)(!0),s=Object(p.a)(i,2),b=s[0],l=s[1];function d(n,e){return O.apply(this,arguments)}function O(){return(O=Object(j.a)(u.a.mark((function n(e,t){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("http://localhost:3000/api/auth/".concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:if(r=n.sent,200===r.status){n.next=7;break}throw new Error;case 7:return delete t.password,o(t),n.abrupt("return",!0);case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",!1);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}function h(){return(h=Object(j.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("register",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(u.a.mark((function n(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d("login",e);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=Object(j.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,fetch("http://localhost:3000/api/auth/logout");case 4:e=n.sent,200===e.status&&o(null);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(r.useEffect)((function(){Object(j.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("http://localhost:3000/api/auth");case 3:if(200!==(e=n.sent).status){n.next=9;break}return n.next=7,e.json();case 7:t=n.sent,o(t);case 9:n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0.message),o(null);case 15:return n.prev=15,l(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,11,15,18]])})))()}),[]);var x={isLoggedIn:Boolean(a),user:a,loading:b,updateUser:function(n){n&&o((function(e){return Object(On.a)(Object(On.a)({},e),{},{user:n})}))},logout:function(){return f.apply(this,arguments)},login:function(n){return g.apply(this,arguments)},register:function(n){return h.apply(this,arguments)}};return Object(sn.jsx)(hn.Provider,{value:x,children:e})}function fn(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"mousedown",c=Object(r.useRef)();return Object(r.useEffect)((function(){function r(t){c.current&&e&&!c.current.contains(t.target)&&n()}return document.addEventListener(t,r),function(){document.removeEventListener(t,r)}}),[n,t,e]),c}var xn=t(59);function mn(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).length<=0?"":(n=Object.entries(n).map((function(n){var e=Object(p.a)(n,2),t=e[0],r=e[1];return"".concat(t,"=").concat(r)})).join("&"),"&".concat(n))}var a=Object(xn.a)(n,function(){var n=Object(j.a)(u.a.mark((function n(r){var a,o,i,s,b;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b=function(){return!(!o||!s.pagination)&&(s.pagination.totalpages>o&&s.pagination.page+1)},a=r.pageParam,o=void 0===a?1:a,n.next=4,fetch("".concat(e,"?format=json").concat(c(t),"&page=").concat(o));case 4:return i=n.sent,n.next=7,i.json();case 7:return s=n.sent,n.abrupt("return",{data:s,nextPage:b()});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),{getNextPageParam:function(n){return n.nextPage}});return Object(r.useEffect)((function(){function n(){a.hasNextPage&&!a.isFetchingNextPage&&(window.innerHeight+window.scrollY>=.8*document.body.offsetHeight&&a.fetchNextPage())}return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),[a]),a}var vn,yn=t(27);function wn(n){var e=n.loading,t=void 0!==e&&e,r=n.children,c=Object(yn.a)(n,["loading","children"]);return Object(sn.jsx)(nn,Object(On.a)(Object(On.a)({disabled:t},c),{},{children:t?Object(sn.jsx)(Un,{}):r}))}var kn,Sn,Pn,Ln,Cn,En,zn,Rn,Mn,Fn,Nn,Un=Object(l.d)(K.a).attrs({path:V.d,spin:1})(vn||(vn=Object(i.a)(["\n    width: 1.5rem;\n    height: 1.5rem;\n"])));function Dn(n){var e=n.visible,t=n.close,c=n.openModal,a=Object(r.useContext)(hn),o=a.login,i=a.isLoggedIn,s=Object(r.useState)(!1),b=Object(p.a)(s,2),l=b[0],d=b[1],O=Object(r.useState)(""),h=Object(p.a)(O,2),g=h[0],f=h[1],x=Object(r.useState)(""),m=Object(p.a)(x,2),v=m[0],y=m[1],w=fn(t,e);if(Object(r.useEffect)((function(){return function(){document.querySelector("body").style.overflow=null}}),[]),Object(r.useEffect)((function(){document.querySelector("body").overflow=e?"hidden":null}),[e]),i)return null;function k(){return(k=Object(j.a)(u.a.mark((function n(e){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),d(!0),n.next=4,o({username:g,password:v});case 4:r=n.sent,d(!1),r&&t();case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(sn.jsx)(Wn,{as:"form",onSubmit:function(n){return k.apply(this,arguments)},visible:e,children:Object(sn.jsxs)(Qn,{ref:w,children:[Object(sn.jsx)(te,{onClick:t}),Object(sn.jsx)(Xn,{children:"Logga in"}),Object(sn.jsxs)(Zn,{children:["Ej medlem?\xa0",Object(sn.jsx)($n,{onClick:function(){return c("register")},children:"Skapa ett konto"})]}),Object(sn.jsxs)(_n,{children:[Object(sn.jsx)(ne,{children:"Anv\xe4ndarnamn"}),Object(sn.jsx)(ee,{value:g,onChange:function(n){return f(n.target.value)}})]}),Object(sn.jsxs)(_n,{children:[Object(sn.jsx)(ne,{children:"L\xf6senord"}),Object(sn.jsx)(ee,{value:v,onChange:function(n){return y(n.target.value)}})]}),Object(sn.jsx)(wn,{loading:l,children:"Logga in"})]})})}var Yn,qn,Hn,In,Tn,An,Jn,Bn,Vn,Gn,Kn,Qn=Object(l.d)(X)(kn||(kn=Object(i.a)(["\n    position: fixed;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 30%;\n    padding: 30px;\n    transition: top 0.35s, opacity 0.05s;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);\n    min-width: 500px;\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(Sn||(Sn=Object(i.a)(["\n        background-color: rgb(",");\n    "])),e.color.bodyLight)})),Wn=Object(l.d)(X)(Pn||(Pn=Object(i.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: none;\n    transition: 0.25s;\n    opacity: 0;\n    pointer-events: none;\n    "," {\n        pointer-events: none;\n    }\n    ","\n"])),Qn,(function(n){return n.visible&&Object(l.c)(Ln||(Ln=Object(i.a)(["\n        display: block;\n        pointer-events: all;\n        opacity: 1;\n        "," {\n            pointer-events: all;\n            opacity: 1;\n            top: 35%;\n        }\n    "])),Qn)})),Xn=Object(l.d)(en)(Cn||(Cn=Object(i.a)(["\n    margin-bottom: 10px;\n"]))),Zn=l.d.p(En||(En=Object(i.a)(["\n    margin-bottom: 50px;\n"]))),$n=l.d.span(zn||(zn=Object(i.a)(["\n    text-decoration: underline;\n    cursor: pointer;\n"]))),_n=Object(l.d)(X)(Rn||(Rn=Object(i.a)(["\n    margin-bottom: 30px;\n"]))),ne=l.d.label(Mn||(Mn=Object(i.a)(["\n    font-weight: bold;\n    letter-spacing: 1px;\n    cursor: text;\n"]))),ee=l.d.input.attrs({type:"text"})(Fn||(Fn=Object(i.a)(["\n    border: 0;\n    border-bottom: 1px solid rgb(",");\n    outline: 0;\n    padding: 4px 0;\n    &:focus {\n        border-color: black;\n    }\n"])),(function(n){return n.theme.color.brand})),te=Object(l.d)(K.a).attrs({path:V.b})(Nn||(Nn=Object(i.a)(["\n    position: absolute;\n    right: 30px;\n    top: 30px;\n    width: 2rem;\n    height: 2rem;\n    cursor: pointer;\n"])));function re(n){var e=n.visible,t=n.close,c=n.openModal,a=Object(r.useContext)(hn),o=a.register,i=a.isLoggedIn,s=Object(r.useState)(!1),b=Object(p.a)(s,2),l=b[0],d=b[1],O=Object(r.useState)(""),h=Object(p.a)(O,2),g=h[0],f=h[1],x=Object(r.useState)(""),m=Object(p.a)(x,2),v=m[0],y=m[1],w=fn(t,e);if(Object(r.useEffect)((function(){return function(){document.querySelector("body").style.overflow=null}}),[]),Object(r.useEffect)((function(){document.querySelector("body").overflow=e?"hidden":null}),[e]),i)return null;function k(){return(k=Object(j.a)(u.a.mark((function n(e){var r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),d(!0),n.next=4,o({username:g,password:v});case 4:r=n.sent,d(!1),r&&t();case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(sn.jsx)(ve,{as:"form",onSubmit:function(n){return k.apply(this,arguments)},visible:e,children:Object(sn.jsxs)(me,{ref:w,children:[Object(sn.jsx)(Ce,{onClick:t}),Object(sn.jsx)(ye,{children:"Skapa konto"}),Object(sn.jsxs)(we,{children:["Redan medlem?\xa0",Object(sn.jsx)(ke,{onClick:function(){return c("login")},children:"Logga in"})]}),Object(sn.jsxs)(Se,{children:[Object(sn.jsx)(Pe,{children:"Anv\xe4ndarnamn"}),Object(sn.jsx)(Le,{value:g,onChange:function(n){return f(n.target.value)}})]}),Object(sn.jsxs)(Se,{children:[Object(sn.jsx)(Pe,{children:"L\xf6senord"}),Object(sn.jsx)(Le,{value:v,onChange:function(n){return y(n.target.value)}})]}),Object(sn.jsx)(wn,{loading:l,children:"Skapa konto"})]})})}var ce,ae,oe,ie,se,be,le,de,ue,je,pe,Oe,he,ge,fe,xe,me=Object(l.d)(X)(Yn||(Yn=Object(i.a)(["\n    position: fixed;\n    transform: translate(-50%, -50%);\n    left: 50%;\n    top: 30%;\n    padding: 30px;\n    transition: top 0.35s, opacity 0.05s;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);\n    min-width: 500px;\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(qn||(qn=Object(i.a)(["\n        background-color: rgb(",");\n    "])),e.color.bodyLight)})),ve=Object(l.d)(X)(Hn||(Hn=Object(i.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background: none;\n    transition: 0.25s;\n    opacity: 0;\n    pointer-events: none;\n    "," {\n        pointer-events: none;\n    }\n    ","\n"])),me,(function(n){return n.visible&&Object(l.c)(In||(In=Object(i.a)(["\n        display: block;\n        pointer-events: all;\n        opacity: 1;\n        "," {\n            pointer-events: all;\n            opacity: 1;\n            top: 35%;\n        }\n    "])),me)})),ye=Object(l.d)(en)(Tn||(Tn=Object(i.a)(["\n    margin-bottom: 10px;\n"]))),we=l.d.p(An||(An=Object(i.a)(["\n    margin-bottom: 50px;\n"]))),ke=l.d.span(Jn||(Jn=Object(i.a)(["\n    text-decoration: underline;\n    cursor: pointer;\n"]))),Se=Object(l.d)(X)(Bn||(Bn=Object(i.a)(["\n    margin-bottom: 30px;\n"]))),Pe=l.d.label(Vn||(Vn=Object(i.a)(["\n    font-weight: bold;\n    letter-spacing: 1px;\n    cursor: text;\n"]))),Le=l.d.input.attrs({type:"text"})(Gn||(Gn=Object(i.a)(["\n    border: 0;\n    border-bottom: 1px solid rgb(",");\n    outline: 0;\n    padding: 4px 0;\n    &:focus {\n        border-color: black;\n    }\n"])),(function(n){return n.theme.color.brand})),Ce=Object(l.d)(K.a).attrs({path:V.b})(Kn||(Kn=Object(i.a)(["\n    position: absolute;\n    right: 30px;\n    top: 30px;\n    width: 2rem;\n    height: 2rem;\n    cursor: pointer;\n"])));function Ee(){var n=Object(r.useContext)(hn),e=n.isLoggedIn,t=n.logout,c=n.loading,a=Object(r.useState)(),o=Object(p.a)(a,2),i=o[0],s=o[1];function b(){s(null)}function l(n){s(n)}return Object(sn.jsxs)(Fe,{as:"header",children:[Object(sn.jsxs)(Ye,{visible:null!=i,children:[Object(sn.jsx)(Dn,{visible:"login"===i,close:b,openModal:l}),Object(sn.jsx)(re,{visible:"register"===i,close:b,openModal:l})]}),Object(sn.jsxs)(Ne,{as:"nav",children:[Object(sn.jsx)(He,{children:Object(sn.jsxs)(Je,{children:["Angelin ",Object(sn.jsx)(Be,{})," Radio"]})}),Object(sn.jsxs)(W,{as:Ue,children:[!c&&!e&&Object(sn.jsxs)(sn.Fragment,{children:[Object(sn.jsx)(qe,{children:Object(sn.jsx)(Ae,{onClick:function(){return l("login")},children:"Logga in"})}),Object(sn.jsx)(qe,{children:Object(sn.jsx)(Ae,{onClick:function(){return l("register")},children:"Registrera"})})]}),!c&&e&&Object(sn.jsx)(De,{children:Object(sn.jsx)(Ae,{onClick:t,children:"Logga out"})}),Object(sn.jsx)(De,{children:Object(sn.jsx)(Te,{to:"/programs",children:"Program"})})]})]})]})}var ze,Re,Me,Fe=Object(l.d)(W).attrs({justify:"center"})(ce||(ce=Object(i.a)(["\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\n    position: sticky;\n    z-index: 100;\n    top: 0;\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(ae||(ae=Object(i.a)(["\n        background-color: rgb(",");\n        height: ","px;\n    "])),e.color.bodyLight,e.navbarHeight)})),Ne=Object(l.d)($)(oe||(oe=Object(i.a)(["\n    padding-top: 0;\n    padding-bottom: 0;\n    height: 100%;\n"]))),Ue=l.d.ul.attrs({align:"center"})(ie||(ie=Object(i.a)(["\n    display: grid;\n    grid-auto-flow: column;\n    grid-gap: 30px;\n"]))),De=l.d.li(se||(se=Object(i.a)(["\n    display: flex;\n    align-items: center;\n"]))),Ye=l.d.div(be||(be=Object(i.a)(["\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    transition: 0.25s;\n    pointer-events: none;\n    ","\n"])),(function(n){return n.visible&&Object(l.c)(le||(le=Object(i.a)(["\n        background-color: rgba(0, 0, 0, 0.65);\n    "])))})),qe=Object(l.d)(De)(de||(de=Object(i.a)(["\n    \n"]))),He=l.d.span.attrs({align:"center"})(ue||(ue=Object(i.a)(["\n    ","\n    margin-right: auto;\n"])),Q),Ie=Object(l.c)(je||(je=Object(i.a)(["\n    border-top: 2px solid transparent;\n    border-bottom: 2px solid transparent;\n    text-decoration: none;\n    padding: 16px 0;\n    user-select: none;\n    font: inherit;\n    font-weight: bold;\n    height: 100%;\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(pe||(pe=Object(i.a)(["\n        color: rgb(",");\n        &.active {\n            border-bottom-color: rgb(",");\n        }\n        &:hover:not(.active) {\n            color: rgb(",");\n        }\n    "])),e.color.textPrimary,e.color.brand,e.color.link)})),Te=Object(l.d)(s.c).attrs({exact:!0})(Oe||(Oe=Object(i.a)(["\n    ","\n"])),Ie),Ae=l.d.button(he||(he=Object(i.a)(["\n    ","\n    background: none;\n    border: 0;\n"])),Ie),Je=Object(l.d)(s.c).attrs({align:"center",to:"/",exact:!0})(ge||(ge=Object(i.a)(["\n    ","\n    font-weight: bold;\n    font-size: 1.25rem;\n    text-decoration: none;\n    user-select: none;\n    ","\n"])),Q,(function(n){var e=n.theme;return Object(l.c)(fe||(fe=Object(i.a)(["\n        color: rgb(",");\n        &.active {\n            border-bottom-color: rgb(",");\n        }\n    "])),e.color.textPrimary,e.color.brand)})),Be=Object(l.d)(K.a).attrs({path:V.g})(xe||(xe=Object(i.a)(["\n    width: 1.25rem;\n    height: 1.25rem;\n    margin: auto 5px;\n"])));function Ve(){var n=Object(r.useState)(!1),e=Object(p.a)(n,2),t=e[0],c=e[1];return Object(r.useEffect)((function(){function n(){c(window.scrollY>=1e3)}return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),[]),Object(sn.jsx)(Qe,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"}),c(!1)},visible:t,children:Object(sn.jsx)(We,{})})}var Ge,Ke,Qe=Object(l.d)(nn)(ze||(ze=Object(i.a)(["\n    display: flex;\n    position: fixed;\n    right: 30px;\n    bottom: 150px;\n    padding: 5px;\n    z-index: 100;\n    transition: opacity 0.1s ease-in, transform 0.2s ease-in;\n    ","\n"])),(function(n){return!n.visible&&Object(l.c)(Re||(Re=Object(i.a)(["\n        opacity: 0;\n        transform: scale(0.5);\n        pointer-events: none;\n    "])))})),We=Object(l.d)(K.a).attrs({path:V.a})(Me||(Me=Object(i.a)(["\n    width: 2rem;\n    height: 2rem;\n    transform: rotate(180deg);\n    color: rgb(",");\n"])),(function(n){return n.theme.color.textSecondary})),Xe=Object(r.createContext)();function Ze(n){var e=n.children,t=O("http://api.sr.se/api/v2/channels/132",{params:{format:"json"}}).data,c=Object(r.useState)(!1),a=Object(p.a)(c,2),o=a[0],i=a[1],s=Object(r.useState)(""),b=Object(p.a)(s,2),l=b[0],d=b[1],h=Object(r.useState)(""),g=Object(p.a)(h,2),f=g[0],x=g[1],m=Object(r.useState)(!1),v=Object(p.a)(m,2),y=v[0],w=v[1],k=Object(r.useState)(35),S=Object(p.a)(k,2),P=S[0],L=S[1],C=Object(r.useState)(!1),E=Object(p.a)(C,2),z=E[0],R=E[1],M=Object(r.useRef)(new Audio);function F(n){return n/100}function N(){i(!0)}function U(){i(!1)}Object(r.useEffect)((function(){return function(){U(),M.current=null}}),[]),Object(r.useEffect)((function(){if(null===t||void 0===t?void 0:t.channel){var n=t.channel;d(n.name),x(n.tagline),M.current.src=n.liveaudio.url}}),[t]),Object(r.useEffect)((function(){P&&M.current&&(M.current.volume=F(P),R(P<=0))}),[P]),Object(r.useEffect)((function(){M.current&&(M.current.volume=z?0:F(P))}),[z]),Object(r.useEffect)((function(){M.current.src&&(o?Object(j.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.next=3,M.current.play();case 3:w(!1);case 4:case"end":return n.stop()}}),n)})))():M.current.pause())}),[o,M.current.src]);var D={player:M.current,changeTrack:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";n&&(d(e),x(t),M.current.src=n,N())},play:N,pause:U,loading:y,playing:o,title:l,description:f,volume:P,setVolume:L,toggleMute:function(){R((function(n){return!n}))},muted:z,isChannelPlaying:function(n){return!(!M||!n)&&(o&&M.current.src===n)},togglePlaying:function(){i((function(n){return!n}))}};return Object(sn.jsx)(Xe.Provider,{value:D,children:e})}function $e(n){var e=n.args,t=void 0===e?{}:e,c=Object(yn.a)(n,["args"]),a=Object(r.useContext)(Xe),o=a.isChannelPlaying,i=a.changeTrack,s=a.pause;return o(t.src)?Object(sn.jsx)(bt,Object(On.a)({path:V.e,onClick:s,title:"Pausa"},c)):Object(sn.jsx)(bt,Object(On.a)({onClick:function(){return i(t.src,t.name,t.description)},path:V.f,title:"Spela"},c))}var _e,nt,et,tt,rt,ct,at,ot,it,st,bt=Object(l.d)(K.a)(Ge||(Ge=Object(i.a)(["\n    width: 2.5rem;\n    height: 2.5rem;\n    margin-left: auto;\n    cursor: pointer;\n    ","\n"])),(function(n){var e=n.color;return Object(l.c)(Ke||(Ke=Object(i.a)(["\n        fill: #",";\n    "])),e)}));function lt(n){var e=n.channel,t=void 0===e?{}:e,r=n.channelUrl;return Object(sn.jsxs)(vt,{children:[Object(sn.jsx)(kt,{src:t.image}),Object(sn.jsxs)(yt,{color:t.color,children:[Object(sn.jsxs)(wt,{children:[Object(sn.jsx)(tn,{children:t.name}),Object(sn.jsx)(St,{children:t.channeltype})]}),Object(sn.jsxs)(Pt,{children:[Object(sn.jsx)($e,{color:t.color,args:{src:t.liveaudio.url,name:t.name,description:t.tagline}}),Object(sn.jsxs)(Lt,{children:[Object(sn.jsx)(Ct,{as:s.c,to:"".concat(r,"/tabla"),color:t.color,exact:!0,children:"Tabl\xe5"}),Object(sn.jsx)(Ct,{as:s.c,to:r,color:t.color,exact:!0,children:"Program"})]})]})]})]})}var dt,ut,jt,pt,Ot,ht,gt,ft,xt,mt,vt=Object(l.d)(W)(_e||(_e=Object(i.a)(["\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(nt||(nt=Object(i.a)(["\n        background-color: rgb(",");\n    "])),e.color.body)})),yt=Object(l.d)(W).attrs({align:"flex-end"})(et||(et=Object(i.a)(["\n    height: 100px;\n    flex: 1;\n"]))),wt=Object(l.d)(X)(tt||(tt=Object(i.a)(["\n    font-family: Roboto;\n    margin-left: 10px;\n"]))),kt=l.d.img(rt||(rt=Object(i.a)(["\n    width: 100px;\n"]))),St=Object(l.d)(cn)(ct||(ct=Object(i.a)(["\n    font-weight: normal;\n    margin-top: 5px;\n"]))),Pt=Object(l.d)(X).attrs({justify:"space-between"})(at||(at=Object(i.a)(["\n    margin-left: auto;\n    height: 100%;\n"]))),Lt=l.d.nav(ot||(ot=Object(i.a)(["\n    display: grid;\n    grid-gap: 15px;\n    margin-left: auto;\n    grid-template-columns: auto auto;\n"]))),Ct=Object(l.d)(rn)(it||(it=Object(i.a)(["\n    text-decoration: none;\n    text-align: right;\n    font-family: Poppins;\n    ","\n"])),(function(n){var e=n.color;return Object(l.c)(st||(st=Object(i.a)(["\n        &.active {\n            color: #",";\n            border-bottom: 3px solid #",";\n        }\n    "])),e,e)}));function Et(){var n=Object(r.useContext)(Xe),e=n.play,t=n.pause,c=n.loading,a=n.playing,o=n.title,i=n.description,s=n.volume,b=n.toggleMute,l=n.setVolume,d=n.muted;return Object(sn.jsxs)(Ht,{children:[Object(sn.jsxs)(It,{children:[Object(sn.jsx)(At,{path:d||s<=0?V.j:s<50?V.i:V.h,onClick:b}),Object(sn.jsx)(Tt,{value:s,onChange:function(n){return l(n.target.value)}})]}),Object(sn.jsx)(Jt,{children:c?Object(sn.jsx)(Kt,{style:{cursor:"default"},path:V.d,spin:1}):a?Object(sn.jsx)(Kt,{path:V.e,onClick:t,title:"Pausa"}):Object(sn.jsx)(Kt,{path:V.f,onClick:e,title:"Spela"})}),Object(sn.jsxs)(Bt,{children:[Object(sn.jsx)(Vt,{children:o}),Object(sn.jsx)(Gt,{title:i,children:i})]})]})}var zt,Rt,Mt,Ft,Nt,Ut,Dt,Yt,qt,Ht=Object(l.d)(W).attrs({justify:"center",align:"center"})(dt||(dt=Object(i.a)(["\n    position: sticky;\n    margin-top: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 15px;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(ut||(ut=Object(i.a)(["\n        background-color: rgb(",");\n        border-top: 2px solid rgb(",");\n    "])),e.color.bodyLight,e.color.brand)})),It=Object(l.d)(W).attrs({justify:"flex-end"})(jt||(jt=Object(i.a)(["\n    width: 20rem;  \n"]))),Tt=l.d.input.attrs({type:"range",min:0,max:100})(pt||(pt=Object(i.a)(["\n    cursor: pointer;\n"]))),At=Object(l.d)(K.a)(Ot||(Ot=Object(i.a)(["\n    width: 1.5rem;\n    height: 1.5rem;\n    margin-right: 10px;\n    cursor: pointer;\n"]))),Jt=Object(l.d)(W).attrs({justify:"center"})(ht||(ht=Object(i.a)(["\n    margin: auto 30px;\n"]))),Bt=Object(l.d)(X)(gt||(gt=Object(i.a)(["\n    width: 20rem;\n    white-space: nowrap;\n"]))),Vt=Object(l.d)(cn)(ft||(ft=Object(i.a)(["\n    \n"]))),Gt=l.d.p(xt||(xt=Object(i.a)(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n"]))),Kt=Object(l.d)(K.a)(mt||(mt=Object(i.a)(["\n    cursor: pointer;\n    border: 0;\n    background: none;\n    outline: 0;\n    width: 2.5rem;\n    height: 2.5rem;\n    user-select: none;\n"])));function Qt(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=Math.floor(n.length/e);return Array(e).fill().map((function(e,r){return n.slice(t*r,t*(r+1))}))}var Wt=l.d.div(zt||(zt=Object(i.a)(["\n    display: grid;\n    grid-template-columns: repeat(",", 1fr);\n    grid-gap: 15px;\n    margin-top: 15px;\n"])),(function(n){return n.columns})),Xt=Object(l.d)(X)(Rt||(Rt=Object(i.a)(["\n    position: relative;\n    ","\n"])),(function(n){var e=n.theme,t=n.color;return Object(l.c)(Mt||(Mt=Object(i.a)(["\n        border: 1px solid rgb(",");\n        border-bottom: 4px solid #",";\n        background-color: rgb(",");\n        border-bottom-left-radius: ","px;\n        border-bottom-right-radius: ","px;\n    "])),e.color.border,t,e.color.bodyLight,e.borderRadius,e.borderRadius)})),Zt=Object(l.d)(X).attrs({align:"flex-start"})(Ft||(Ft=Object(i.a)(["\n    padding: 20px;\n"]))),$t=l.d.p(Nt||(Nt=Object(i.a)(["\n    margin-top: 15px;\n    font-family: Roboto;\n"]))),_t=Object(l.d)(cn).attrs({exact:!0})(Ut||(Ut=Object(i.a)(["\n    color: rgb(",");\n    text-decoration: none;\n    &:hover {\n        text-decoration: underline;\n    }\n"])),(function(n){return n.theme.color.textPrimary})),nr=l.d.p(Dt||(Dt=Object(i.a)(["\n    display: inline;\n    font: italic 0.9rem Poppins;\n    margin-top: 5px;\n"]))),er=l.d.img(Yt||(Yt=Object(i.a)(["\n    object-fit: cover;\n"]))),tr=l.d.div(qt||(qt=Object(i.a)(["\n    display: grid;\n    grid-gap: 15px;\n"])));function rr(n){var e=n.channel,t=n.programs,r=n.formatForUrl;return Object(sn.jsx)(Wt,{columns:3,children:t.map((function(n){return Qt(n.data.programs,3).map((function(n,t){return Object(sn.jsx)(tr,{children:n.map((function(n){return Object(sn.jsxs)(Xt,{color:e.color,as:"article",children:[Object(sn.jsx)(K.a,{path:V.c,size:1,style:{position:"absolute",right:10,top:10,color:"red"}}),Object(sn.jsx)(er,{src:n.programimagetemplatewide}),Object(sn.jsxs)(Zt,{children:[Object(sn.jsx)(_t,{as:s.c,to:"/program/".concat(n.id,"/").concat(r(null===n||void 0===n?void 0:n.name)),children:n.name}),Object(sn.jsx)(nr,{children:n.broadcastinfo}),Object(sn.jsx)($t,{children:n.description})]})]},n.id)}))},t)}))}))})}var cr,ar=t(33),or=t.n(ar);function ir(n){var e,t,r=n.channel,c=n.formatForUrl,a=mn("channel/".concat(r.id,"/tabla"),"http://api.sr.se/api/v2/scheduledepisodes",{channelid:r.id,date:or()().format("YYYY-MM-DD")}),o=a.data,i=a.isSuccess,b=a.isLoading;function l(n){return or()(new Date(Number(n.match(/([0-9]+)/g)[0]))).format("HH:mm")}return console.log(null===o||void 0===o||null===(e=o.pages[0])||void 0===e||null===(t=e.data)||void 0===t?void 0:t.schedule),Object(sn.jsxs)(sn.Fragment,{children:[b&&Object(sn.jsx)(bn,{}),Object(sn.jsx)(Wt,{columns:3,children:i&&o.pages.map((function(n){return Qt(n.data.schedule,3).map((function(n,e){return Object(sn.jsx)(tr,{children:n.map((function(n,e){return Object(sn.jsxs)(Xt,{color:r.color,as:"article",children:[Object(sn.jsx)(K.a,{path:V.c,size:1,style:{position:"absolute",right:10,top:10,color:"red"}}),Object(sn.jsx)(er,{src:n.imageurltemplate}),Object(sn.jsxs)(Zt,{children:[Object(sn.jsx)(_t,{as:s.c,to:"/program/".concat(n.program.id,"/").concat(c(n.title)),children:n.title}),Object(sn.jsxs)(nr,{children:[l(n.starttimeutc)," - ",l(n.endtimeutc)]}),Object(sn.jsx)($t,{children:n.description})]})]},"".concat(n.program.id,"-").concat(e))}))},e)}))}))})]})}function sr(n){var e=n.match,t=e.params.id,r=mn("channel/".concat(t,"/programs"),"http://api.sr.se/api/v2/programs/index",{channelid:t,size:30}),c=O("http://api.sr.se/api/v2/channels/".concat(t),{params:{format:"json"}});function a(n){return n?n.replace(" ","-"):""}return Object(sn.jsx)(pr,{children:function(){if(r.isLoading||c.loading)return Object(sn.jsx)(bn,{});if(c.error||r.isError)return null;var n=c.data.channel;return c.success&&r.isSuccess&&Object(sn.jsxs)(sn.Fragment,{children:[Object(sn.jsx)(lt,{channelUrl:e.url,channel:n}),Object(sn.jsxs)(b.c,{children:[Object(sn.jsx)(b.a,{path:"".concat(e.url,"/tabla"),exact:!0,children:Object(sn.jsx)(ir,{formatForUrl:a,channel:n})}),Object(sn.jsx)(b.a,{children:Object(sn.jsx)(rr,{formatForUrl:a,channel:n,programs:r.data.pages})})]})]})}()})}var br,lr,dr,ur,jr,pr=Object(l.d)($).attrs({justify:"center",col:!0})(cr||(cr=Object(i.a)(["\n    ","\n"])),_);function Or(n){var e,t=n.channel,r=void 0===t?{}:t;return Object(sn.jsxs)(xr,{children:[Object(sn.jsx)(yr,{src:null!==(e=r.image)&&void 0!==e?e:"https://static-cdn.sr.se/images/2388/787c76ef-8d6b-4e34-b26c-2b4036781b0c.jpg?preset=api-default-square"}),Object(sn.jsxs)(vr,{color:r.color,children:[Object(sn.jsx)(mr,{as:s.b,to:"/kanal/".concat(r.id,"/").concat(r.name.replace(" ","-")),children:r.name}),Object(sn.jsx)($e,{color:r.color,args:{src:r.liveaudio.url,name:r.name,description:r.tagline}})]})]})}var hr,gr,fr,xr=l.d.div(br||(br=Object(i.a)(["\n    width: 100%;\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    height: 60px;\n    transition: 0.35s;\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(lr||(lr=Object(i.a)(["\n        color: rgb(",");\n        border-radius: ","px;\n    "])),e.color.textPrimary,e.borderRadius)})),mr=Object(l.d)(cn)(dr||(dr=Object(i.a)(["\n    font-weight: normal;\n    text-decoration: none;\n    &:hover {\n        text-decoration: underline;\n    }\n"]))),vr=Object(l.d)(W).attrs({align:"center"})(ur||(ur=Object(i.a)(["\n    background-color: rgb(",");\n    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);\n    border-bottom: 4px solid #",";\n    height: 100%;\n    padding: 15px;\n    flex: 1;\n"])),(function(n){return n.theme.color.bodyLight}),(function(n){return n.color})),yr=l.d.img.attrs({loading:"lazy"})(jr||(jr=Object(i.a)(["\n    width: 60px;\n    margin-left: 5px;\n"])));function wr(){var n=mn("channels","http://api.sr.se/api/v2/channels",{size:30}),e=n.data,t=n.isSuccess,r=n.isFetchingNextPage,c=n.isLoading,a=n.hasNextPage,o=n.fetchNextPage;return Object(sn.jsxs)(Pr,{children:[c&&Object(sn.jsx)(bn,{}),Object(sn.jsx)(Lr,{children:t&&e.pages.map((function(n){return n.data.channels.map((function(n){return Object(sn.jsx)(Or,{channel:n},n.id)}))}))}),r&&Object(sn.jsx)(bn,{}),!c&&!r&&a&&Object(sn.jsx)(Cr,{onClick:function(){return o()},children:"Load more"})]})}var kr,Sr,Pr=Object(l.d)(X).attrs({align:"center"})(hr||(hr=Object(i.a)(["\n    ","\n"])),_),Lr=Object(l.d)($)(gr||(gr=Object(i.a)(["\n    margin: 0 auto;\n    display: grid;\n    grid-gap: 30px;\n    grid-template-columns: repeat(2, 1fr);\n"]))),Cr=Object(l.d)(nn)(fr||(fr=Object(i.a)(["\n    margin-bottom: 30px;\n"])));function Er(){return Object(sn.jsx)("div",{})}function zr(){return Object(sn.jsx)(s.a,{children:Object(sn.jsxs)(Rr,{as:"main",children:[Object(sn.jsx)(Ee,{}),Object(sn.jsxs)(b.c,{children:[Object(sn.jsx)(b.a,{path:"/",exact:!0,component:wr}),Object(sn.jsx)(b.a,{path:"/kanal/:id/:name?",component:sr}),Object(sn.jsx)(b.a,{path:"/program",exact:!0,component:Er}),Object(sn.jsx)(b.a,{children:"404"})]}),Object(sn.jsx)(Et,{}),Object(sn.jsx)(Ve,{})]})})}var Rr=Object(l.d)(X)(kr||(kr=Object(i.a)(["\n    ","\n"])),(function(n){var e=n.theme;return Object(l.c)(Sr||(Sr=Object(i.a)(["\n        min-height: 100vh;\n        background-color: rgb(",");\n        color: rgb(",");\n    "])),e.color.body,e.color.textPrimary)})),Mr={color:{body:"245, 245, 245",bodyLight:"255, 255, 255",bodyDark:"215, 215, 215",primary:"235, 235, 235",secondary:"200, 200, 200",brand:"15, 15, 15",textPrimary:"15, 15, 15",textSecondary:"235, 235, 235",textMuted:"200, 200, 200",border:"225, 225, 225",link:"0, 127, 255"},borderRadius:3,navbarHeight:60},Fr=Object(r.createContext)();function Nr(n){var e=n.children,t=Object(r.useState)(!1),c=Object(p.a)(t,2),a=c[0],o=c[1];return Object(sn.jsx)(Fr.Provider,{value:{visible:a,show:function(){o(!0)},hide:function(){o(!1)}},children:e})}var Ur=t(60),Dr=t(39),Yr=new Ur.a;function qr(n){var e=n.children;return Object(sn.jsx)(Dr.a,{client:Yr,children:Object(sn.jsx)(gn,{children:Object(sn.jsx)(l.a,{theme:Mr,children:Object(sn.jsx)(Nr,{children:Object(sn.jsx)(Ze,{children:e})})})})})}t(57);var Hr,Ir=Object(l.b)(Hr||(Hr=Object(i.a)(["\n    *,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n\n    img,\n    svg {\n        user-select: none;\n        max-width: 100%;\n    }\n\n    ::selection {\n        background-color: rgb(15, 15, 15);\n        color: rgb(235, 235, 235);\n    }\n\n    input,\n    textarea {\n        font: inherit;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    body {\n        font-family: Poppins;\n        min-height: 100vh;\n    }\n"])));function Tr(){return Object(sn.jsxs)(qr,{children:[Object(sn.jsx)(Ir,{}),Object(sn.jsx)(zr,{})]})}o.a.render(Object(sn.jsx)(c.a.StrictMode,{children:Object(sn.jsx)(Tr,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.aaed9ee5.chunk.js.map