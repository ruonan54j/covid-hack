(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{154:function(e,t,a){e.exports=a(362)},159:function(e,t,a){},160:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},161:function(e,t,a){},362:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(62),r=a.n(c),s=(a(159),a(1)),o=(a(160),a(161),a(12)),i=Object(n.createContext)(!1),u=Object(n.createContext)(null),m=Object(n.createContext)(null),p=Object(n.createContext)(null),d=function(e){var t=Object(n.useState)(2),a=Object(s.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(!1),p=Object(s.a)(m,2),d=p[0],g=p[1],E=Object(n.useContext)(u),v=(E.selectedPost,E.setSelectedPost),f=Object(n.useContext)(i),h=f.currentUser,b=f.setCurrentUser,N=Object(n.useState)(1),y=Object(s.a)(N,2),O=y[0],j=y[1],C=Object(n.useState)([]),S=Object(s.a)(C,2),w=S[0],k=S[1],P=Object(n.useState)([]),x=Object(s.a)(P,2),I=x[0],D=x[1];Object(n.useEffect)((function(){var e="";null!==h&&(e=h.handle),fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts?handle="+e).then((function(e){return e.json().then((function(t){if(200==e.status){k(t);for(var a=[],n=function(e){a.push(l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"delete-post",onClick:function(){return T(w[e].id)}},"delete"),l.a.createElement("div",{className:"user-posts",onClick:function(){return U(w[e])}},w[e].title)))},c=0;c<w.length;c++)n(c);D(a)}})).catch((function(e){console.log(e)}))}))}),[d]);var L=function(){d?(document.getElementById("clicked-profile").style.display="none",g(!1)):(document.getElementById("clicked-profile").style.display="block",g(!0))},U=function(e){v(e),document.getElementById("overlay-post").style.display="block"},T=function(e){window.confirm("confirm delete post")&&fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts/"+e,{method:"DELETE"}).then((function(e){alert("delete successful"),L()})).catch((function(e){return alert(e)}))};return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-custom row"},l.a.createElement("button",{class:"navbar-toggle",type:"button",onClick:function(){1===O?(document.getElementById("nav-expand-reg").style.display="block",j(2)):(document.getElementById("nav-expand-reg").style.display="none",j(1))}},l.a.createElement("div",{class:"icon-toggle"})),l.a.createElement("div",{className:"left-nav"},l.a.createElement(o.b,{to:"/"},l.a.createElement("h1",{className:"nav-logo",onClick:function(){return r(2)}},l.a.createElement("img",{className:"logo-img",src:"./supplyway-logo.png"})))),l.a.createElement("div",{id:"nav-expand-reg"},l.a.createElement(o.b,{to:"/all-listings",onClick:function(){return r(1)},className:1==c?"nav-page nav-page-active":"nav-page",href:"#"},l.a.createElement("p",null,"All Listings")),l.a.createElement(o.b,{to:"/",onClick:function(){return r(2)},className:2==c?"nav-page nav-page-active":"nav-page",href:"#"},l.a.createElement("p",null,"Maker's Database")),l.a.createElement(o.b,{onClick:function(){return L()},className:d?"nav-page nav-page-active":"nav-page"},l.a.createElement("p",null,"Profile")))),l.a.createElement("div",{className:"profile-popup",id:"clicked-profile"},l.a.createElement("div",{className:"col profile-content"},l.a.createElement("p",{onClick:function(){return L()},className:"close-profile-a"},"X close"),l.a.createElement("p",null," ",l.a.createElement("strong",null,"username:")," ",null===h?"":h.handle),l.a.createElement("div",null,l.a.createElement("strong",null,"My Posts")),I),l.a.createElement("div",{className:"logout-div"},l.a.createElement("button",{className:"logout-btn",onClick:function(){b(null)}},"Log out"))))},g=function(){var e=Object(n.useContext)(m),t=e.selectedPart,a=(e.setSelectedPart,[]);if(t.hasOwnProperty("printFile"))for(var c=0;c<t.printFile.length;c++)a.push(l.a.createElement("li",{key:c},l.a.createElement("a",{href:t.printFile[c].file,className:"printfile",download:!0},t.printFile[c].name),l.a.createElement("br",null)));return l.a.createElement("div",{id:"overlay-part"},l.a.createElement("div",{className:"part-popup"},l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"close-btn-part",onClick:function(){document.getElementById("overlay-part").style.display="none"}},"X close")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"popup-col popup-desc"},l.a.createElement("div",{className:"popup-title"},t.title),l.a.createElement("p",{className:"popup-grey-text"},"DESCRIPTION"),l.a.createElement("p",null,t.description),l.a.createElement("p",{className:"popup-grey-text"},"PRINT FILES: click to download"),l.a.createElement("ul",null,a)),l.a.createElement("div",{className:"popup-col"},l.a.createElement("div",{className:"popup-img-div"},l.a.createElement("img",{className:"popup-img",src:t.img})))),l.a.createElement("div",{className:"row"})))},E=function(e){var t=Object(n.useContext)(m),a=(t.selectedPart,t.setSelectedPart);return l.a.createElement("div",{className:"part-post"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"part-content"},l.a.createElement("h1",{className:"part-title"},e.part.title),l.a.createElement("p",{className:"part-description"},e.part.description),l.a.createElement("button",{className:"part-supply-btn part-btn-custom",onClick:function(){document.getElementById("overlay-part").style.display="block",a(e.part)}},"I can make this part")),l.a.createElement("div",{className:"right-div"},l.a.createElement("img",{src:e.part.img,alt:"valves",className:"part-img"}))))},v=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1];Object(n.useEffect)((function(){u("Fetching data..."),fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/parts").then((function(e){return e.json().then((function(t){200==e.status&&(c(t),u(""))}))}))}),[]);for(var m=[],p=0;p<a.length;p++)m.push(l.a.createElement("div",{key:p,className:"part-col"},l.a.createElement(E,{part:a[p]})));return l.a.createElement("div",null,l.a.createElement("h1",{className:"h1-part-listings"},"Maker's Database"),l.a.createElement("div",{className:"row part-listing"},l.a.createElement("p",{className:"part-loading-msg"},i),m))},f=function(){var e=l.a.useState([]),t=Object(s.a)(e,2),a=t[0],n=t[1];return l.a.createElement("div",{className:"makers-db"},l.a.createElement(m.Provider,{value:{selectedPart:a,setSelectedPart:n}},l.a.createElement(g,null),l.a.createElement(v,null)))},h=function(e){var t=Object(n.useState)(1),a=Object(s.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(1),u=Object(s.a)(i,2),m=u[0],p=u[1];return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-custom row navbar-expand-lg"},l.a.createElement("button",{class:"navbar-toggle",type:"button",onClick:function(){1===m?(document.getElementById("nav-expand").style.display="block",p(2)):(document.getElementById("nav-expand").style.display="none",p(1))}},l.a.createElement("div",{class:"icon-toggle"})),l.a.createElement("div",{className:"left-nav-login"},l.a.createElement(o.b,{to:"/"},l.a.createElement("div",{className:"nav-logo",onClick:function(){return r(1)}},l.a.createElement("img",{className:"logo-img",src:"./supplyway-logo.png"})))),l.a.createElement("div",{id:"nav-expand"},l.a.createElement(o.b,{to:"/",onClick:function(){return r(1)},className:1==c?"nav-page nav-page-active":"nav-page",href:"#"},l.a.createElement("p",null,"Home")),l.a.createElement(o.b,{to:"/Login",onClick:function(){return r(2)},className:2==c?"nav-page nav-page-active":"nav-page",href:"#"},l.a.createElement("p",null,"Login")))))},b=a(37),N=Object(n.createContext)(null),y=Object(b.withScriptjs)(Object(b.withGoogleMap)((function(e){var t=Object(n.useContext)(p),a=t.mapCoord,c=(t.setMapCoord,Object(n.useContext)(N)),r=c.listings,o=(c.setListings,Object(n.useState)(0!==r.length?r[0]:"")),i=Object(s.a)(o,2),u=i[0],m=i[1],d=0;return l.a.createElement(b.GoogleMap,{defaultZoom:4,center:{lat:null===a?56:a.lat,lng:null===a?-106:a.long}},r.map((function(e){return l.a.createElement(b.Marker,{key:d++,position:{lat:parseFloat(e.lat),lng:parseFloat(e.long)},onClick:function(){m(e)}})})),u&&l.a.createElement(b.InfoWindow,{position:{lat:NaN!==u.lat?parseFloat(u.lat):0,lng:NaN!==u.long?parseFloat(u.long):0},onCloseClick:function(){m(null)}},l.a.createElement("div",null,"Listing Details",l.a.createElement("p",null,u.title),l.a.createElement("p",null,u.description))))}))),O=function(e){var t=Object(n.useContext)(u),a=(t.selectedPost,t.setSelectedPost);return l.a.createElement("div",{className:"post",onClick:function(){return document.getElementById("overlay-post").style.display="block",void a(e.post)}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left-post-div"},l.a.createElement("p",{className:"post-author"},"Listed by ",e.post.userHandle),l.a.createElement("h1",{className:"post-title"},e.post.title),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"post-grey-text"},"PRODUCTION CAPACITY"),l.a.createElement("p",null,e.post.capacity," / week")),l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"post-grey-text"},"COST PER PIECE"),l.a.createElement("p",null," $",e.post.price," ")))),l.a.createElement("div",{className:"right-post-div"},l.a.createElement("img",{src:e.post.img,alt:"valves",className:"post-img"}))))},j=function(){for(var e=Object(n.useContext)(N),t=e.listings,a=e.setListings,c=Object(n.useContext)(p),r=(c.mapCoord,c.setMapCoord),o=l.a.useState(""),i=Object(s.a)(o,2),u=i[0],m=i[1],d=l.a.useState(""),g=Object(s.a)(d,2),E=g[0],v=g[1],f=[],h=0;h<t.length;h++)f.push(l.a.createElement(O,{key:h,post:t[h]}));return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center"},l.a.createElement("input",{className:"search-input",type:"text",placeholder:"Enter your location (city, country)",value:u,onChange:function(e){m(e.target.value)}}),l.a.createElement("button",{className:"search-btn",onClick:function(){return function(){var e=u.split(",");a([]),v("Searching nearby posts.."),fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts?city="+e[0]).then((function(e){return 200!=e.status?(alert("sorry, no listings for this city yet"),void v("No posts yet")):e.json().then((function(t){200==e.status?(a(t),v("")):v("No posts yet")})).catch((function(e){console.log(e)}))})),fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/azdc-city/"+u).then((function(e){return e.json().then((function(t){200==e.status?r({lat:t.lat,long:t.long}):alert("invalid location input")}))})).catch((function(e){alert("invalid location input"),console.log(e)}))}()}},"Enter")),l.a.createElement("div",{className:"new-post-btn-custom-div"},l.a.createElement("button",{className:"new-post-btn-custom",onClick:function(){document.getElementById("overlay-add-listing").style.display="block"}},"Add Listing")),l.a.createElement("p",{className:"post-loading-msg"},E),f)},C=function(){var e=Object(n.useContext)(u),t=e.selectedPost;e.setSelectedPost;return l.a.createElement("div",{id:"overlay-post"},l.a.createElement("div",{className:"post-popup"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"popup-col popup-desc-post"},l.a.createElement("div",{className:"close-btn",onClick:function(){document.getElementById("overlay-post").style.display="none"}},"X close"),l.a.createElement("p",{className:"popup-post-grey-text"},"listed by ",t.handle),l.a.createElement("h1",{className:"popup-post-h1"},t.title),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"popup-post-grey-text"},"PRODUCTION CAPACITY"),l.a.createElement("p",null,t.capacity," / week")),l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"popup-post-grey-text"},"COST PER PART"),l.a.createElement("p",null,t.price))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"popup-post-grey-text"},"EMAIL ADDRESS"),l.a.createElement("p",null,t.email)),l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"popup-post-grey-text"},"PHONE-NUMBER"),l.a.createElement("p",null,t.phone))),l.a.createElement("p",{className:"popup-post-grey-text"},"PICKUP METHOD"),l.a.createElement("p",null,t.delivery)),l.a.createElement("div",{className:"popup-col"},l.a.createElement("div",{className:"popup-img-div"},l.a.createElement("img",{className:"popup-img",src:t.img}))))))},S=a(92),w=a.n(S),k=function(){var e=Object(n.useContext)(i),t=e.currentUser,a=(e.setCurrentUser,Object(n.useState)("")),c=Object(s.a)(a,2),r=c[0],o=c[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],d=m[1],g=Object(n.useState)(""),E=Object(s.a)(g,2),v=E[0],f=E[1],h=Object(n.useState)(""),b=Object(s.a)(h,2),N=b[0],y=b[1],O=Object(n.useState)(""),j=Object(s.a)(O,2),C=j[0],S=j[1],k=Object(n.useState)(""),P=Object(s.a)(k,2),x=P[0],I=P[1],D=Object(n.useState)(""),L=Object(s.a)(D,2),U=L[0],T=L[1],A=Object(n.useState)(""),B=Object(s.a)(A,2),M=B[0],R=B[1],F=Object(n.useState)(""),H=Object(s.a)(F,2),J=H[0],W=H[1],q=Object(n.useState)(""),z=Object(s.a)(q,2),G=z[0],V=z[1],Y=Object(n.useState)("pickup"),K=Object(s.a)(Y,2),X=K[0],Z=K[1],$=function(e,t){e.preventDefault(),Z(t)};return l.a.createElement("div",{id:"overlay-add-listing"},l.a.createElement("div",{className:"add-listings-popup"},l.a.createElement("h1",{className:"new-post-h1"},"Add Listing"),l.a.createElement("p",{className:"popup-grey-text"},"INFORMATION"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6-md"},l.a.createElement("input",{placeholder:"Title",onChange:function(e){return d(e.target.value)},className:"add-listings-input"}),l.a.createElement("textarea",{rows:"4",onChange:function(e){return f(e.target.value)},className:"add-listings-description",placeholder:"description"}),l.a.createElement("input",{placeholder:"Address (optional)",onChange:function(e){return y(e.target.value)},className:"add-listings-input"}),l.a.createElement("input",{placeholder:"city",onChange:function(e){return S(e.target.value)},className:"add-listings-input"}),l.a.createElement("input",{placeholder:"Country",onChange:function(e){return I(e.target.value)},className:"add-listings-input"}),l.a.createElement("input",{placeholder:"Phone Number",onChange:function(e){return T(e.target.value)},className:"add-listings-input"}),l.a.createElement("input",{placeholder:"Email",onChange:function(e){return R(e.target.value)},className:"add-listings-input"})),l.a.createElement("div",{className:"col-6-md right-col-add-listing"},l.a.createElement("input",{placeholder:"Price per unit",onChange:function(e){return W(e.target.value)},className:"add-listings-input"}),l.a.createElement("input",{onChange:function(e){return V(e.target.value)},placeholder:"Weekly production capacity",className:"add-listings-input"}),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"pickup"===X?"listing-type-chosen":"listing-type",onClick:function(e){$(e,"pickup")}},"Pick Up"),l.a.createElement("button",{className:"delivery"===X?"listing-type-chosen":"listing-type",onClick:function(e){$(e,"delivery")}},"Delivery")),"Upload image",l.a.createElement("label",{className:"upload-file-btn"},l.a.createElement("input",{type:"file",className:"img-upload",accept:"image/jpeg, image/png",onChange:function(e){!function(e){if(e.size>3e5)alert("file must be under 300kb!");else{var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){o(e.target.result)}}}(e.target.files[0])}})),l.a.createElement("button",{className:"submit-post-btn",onClick:function(e){return function(e){if(e.preventDefault(),""!==C&&""!==p&&""!==x&&""!==M&&""!==U){var a=0,n=0;w.a.setRegion("ca"),w.a.fromAddress(N).then((function(e){var t=e.results[0].geometry.location,l=t.lat,c=t.long;n=l,a=c}),(function(e){console.error(e)}));var l={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userID:t.userID,userHandle:t.handle,title:p.toString(),description:v.toString(),address:N.toString(),country:x.toString(),price:J.toString(),capacity:G.toString(),delivery:X.toString(),phone:U.toString(),email:M.toString(),img:r,lat:n,long:a,city:C.toString().toLowerCase()})};fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts",l).then((function(e){return e.json().then((function(t){201===e.status?(alert("post created"),document.getElementById("overlay-add-listing").style.display="none",window.location.reload(!1)):alert("error creating post")}))}))}else alert("Title, City, Country, Email, and Phone number must be present")}(e)}},"Submit"),l.a.createElement("button",{className:"submit-post-btn",onClick:function(e){return function(e){e.preventDefault(),document.getElementById("overlay-add-listing").style.display="none"}(e)}},"Cancel"))))))},P=function(e){var t=l.a.useState([]),a=Object(s.a)(t,2),c=a[0],r=a[1],o=l.a.useState(null),i=Object(s.a)(o,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/posts").then((function(e){return e.json().then((function(t){200==e.status&&r(t)})).catch((function(e){console.log(e)}))}))}),[]),l.a.createElement(N.Provider,{value:{listings:c,setListings:r}},l.a.createElement(p.Provider,{value:{mapCoord:u,setMapCoord:m}},l.a.createElement("div",{className:"row"},l.a.createElement(k,null),l.a.createElement("div",{className:"post-Listing-container"},l.a.createElement(j,null)),l.a.createElement("div",{className:"google-map"},l.a.createElement(y,{googleMaps:!0,googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+e.apiKey,loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})})))))},x=function(){var e=Object(n.useContext)(i),t=(e.currentUser,e.setCurrentUser),a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],u=c[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),d=p[0],g=p[1];return l.a.createElement("div",{className:"login-pg"},l.a.createElement("h1",{className:"login-title"},"Login"),l.a.createElement("form",null,l.a.createElement("div",{className:"login-form-content"},l.a.createElement("input",{placeholder:"email",onChange:function(e){return u(e.target.value)},className:"login-input"}),l.a.createElement("input",{placeholder:"password",className:"login-input",onChange:function(e){return g(e.target.value)},group:!0,type:"password"}),l.a.createElement("button",{className:"login-btn",onClick:function(e){return function(e){e.preventDefault();var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r.toString(),password:d.toString()})};fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/login",a).then((function(e){return e.json().then((function(a){200==e.status?t(a):alert("Invalid email / password")}))}))}(e)}},"Log In"),l.a.createElement("p",{className:"signup-link"},"Don't have an account? ",l.a.createElement(o.b,{to:"/signup"},"Sign up here")))))};var I=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{min:8,max:15},t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){u(""),l&&(l.length<e.min?u("Password must be at least ".concat(e.min," characters.")):l.length>e.max&&u("Password must be less than ".concat(e.max," characters.")))}),[l]),[l,c,i]},L=function(){var e=Object(n.useContext)(i),t=(e.currentUser,e.setCurrentUser),a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],u=c[1],m=Object(n.useState)(!0),p=Object(s.a)(m,2),d=p[0],g=p[1],E=Object(n.useState)(""),v=Object(s.a)(E,2),f=v[0],h=v[1],b=Object(n.useState)(""),N=Object(s.a)(b,2),y=N[0],O=N[1],j=Object(n.useState)(""),C=Object(s.a)(j,2),S=C[0],w=C[1],k=Object(n.useState)(""),P=Object(s.a)(k,2),x=P[0],L=P[1],U=Object(n.useState)(!1),T=Object(s.a)(U,2),A=T[0],B=T[1],M=Object(n.useState)(!1),R=Object(s.a)(M,2),F=R[0],H=R[1],J=D({min:8,max:15}),W=Object(s.a)(J,3),q=W[0],z=W[1],G=W[2],V=function(e,t){e.preventDefault(),g(t)};Object(n.useEffect)((function(){f?I(f)?O(""):O("Please enter a valid email."):O("")}),[f]),Object(n.useEffect)((function(){L(S&&q&&q!==S?"The passwords must match.":"")}),[q,S]);return l.a.createElement("div",{className:"signup-pg"},l.a.createElement("h1",{className:"login-title"},"Sign-up"),l.a.createElement("form",null,l.a.createElement("div",{className:"login-form-content"},l.a.createElement("button",{className:d?"signup-type":"signup-type-chosen",onClick:function(e){V(e,!1)}},"I am a buyer"),l.a.createElement("button",{className:d?"signup-type-chosen":"signup-type",onClick:function(e){V(e,!0)}},"I am a supplier"),l.a.createElement("input",{placeholder:"email",onChange:function(e){return h(e.target.value)},className:"login-input"}),l.a.createElement("div",{className:"error"},y),l.a.createElement("input",{placeholder:"username",onChange:function(e){return u(e.target.value)},className:"login-input"}),l.a.createElement("input",{placeholder:"password",onChange:function(e){return z(e.target.value)},className:"login-input",group:!0,type:"password"}),l.a.createElement("div",{className:"error"},G),l.a.createElement("input",{placeholder:"confirm password",onChange:function(e){return w(e.target.value)},className:"login-input",group:!0,type:"password"}),l.a.createElement("div",{className:"error"},x),l.a.createElement("input",{type:"checkbox",id:"tc",onChange:function(){B(!A)}}),l.a.createElement("label",{for:"tc"}," I have read and understood the agreement ",l.a.createElement("a",{href:"https://www.termsfeed.com/privacy-policy/7c2ed99ca48554a7d7814f0d6c2d484e"},"view agreement")),l.a.createElement("br",null),l.a.createElement("input",{type:"checkbox",id:"tc2",onChange:function(){H(!F)}})," ",l.a.createElement("br",null),l.a.createElement("label",{for:"tc2"}," I verify I'm over 18 "),l.a.createElement("br",null),l.a.createElement("button",{className:"login-btn",onClick:function(e){return function(e){if(e.preventDefault(),""===y&&""===x&&""===G)if(""!==f&&""!==q&&""!==S&&""!==r)if(A&&F){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:r.toString(),email:f.toString(),password:q.toString(),isSupplier:d,signUpMethod:"Email"})};fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/signup",a).then((function(e){return e.json().then((function(a){if(201==e.status)t(a);else{var n=JSON.stringify(a).replace("{","");n=(n=n.replace("}","")).replace(/['"]+/g,""),alert(n)}}))}))}else alert("Must agree to terms and conditions");else alert("Fields can not be empty!");else alert("Invalid fields! Please view errors")}(e)}},"Sign Up"),l.a.createElement("p",{className:"signup-link"},"Have an account? ",l.a.createElement(o.b,{to:"/login"},"Log in here")))))},U=function(e){return l.a.createElement("div",{className:"wrapper-login row"},l.a.createElement("div",{className:"col"},e.children),l.a.createElement("div",{className:"col login-image"}))},T=a(24),A=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"landing-main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"left-landing-col heading-landing-main"},l.a.createElement("h1",{className:"h1-heading-landing-main"},"Connecting Suppliers and Buyers for 3D printed products in the fight against Covid-19.")),l.a.createElement("div",{className:"right-landing-col"}))),l.a.createElement("div",{className:"landing-about"},l.a.createElement("div",{className:"about-content"},l.a.createElement("h1",{className:"h1-landing-about"},"About"),l.a.createElement("p",null,"We are a two sided market place connecting health care workers with local suppliers to source equipment to combat COVID-19. We provide all the essential information needed to get suppliers manufacturing. If you are either willing to help with manufacturing (3d-printing / sewing) or in need of COVID-19 equipment, please register with your email and we will be in touch soon!")),l.a.createElement("h1",{className:"h1-landing-about"},"How it works"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md mobile-col"},l.a.createElement("h2",null,"Suppliers"),l.a.createElement("ol",{className:"list-landing"},l.a.createElement("li",null,"Sign up as a supplier"),l.a.createElement("li",null,"Get access to our database of verified parts and start printing"),l.a.createElement("li",null,"Post about what you're able to manufacture and buyers will contact you for supplies"))),l.a.createElement("div",{className:"col-md mobile-col"},l.a.createElement("h2",null,"Buyer"),l.a.createElement("ol",{className:"list-landing"},l.a.createElement("li",null,"Sign up as a buyer"),l.a.createElement("li",null,"View postings posted by local suppliers"),l.a.createElement("li",null,"Get in touch to pickup supplies / get them delivered"))))))};var B=function(){var e=Object(n.useState)(i),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),m=Object(s.a)(r,2),p=m[0],g=m[1],E=l.a.useState([]),v=Object(s.a)(E,2),b=v[0],N=v[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("currentUser");null!==e||void 0!==e?fetch("https://us-central1-covid-hack-c6549.cloudfunctions.net/api/v1/users/"+e).then((function(e){e.json().then((function(e){c(e),g(!0)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)})):g(!1)}),[]),Object(n.useEffect)((function(){null===a?(localStorage.clear(),g(!1)):0!=a._currentValue&&(localStorage.setItem("currentUser",a.userID),g(!0))}),[a]),l.a.createElement(o.a,null,l.a.createElement("div",{className:"pages"},l.a.createElement(i.Provider,{value:{currentUser:a,setCurrentUser:c}},l.a.createElement(u.Provider,{value:{selectedPost:b,setSelectedPost:N}},l.a.createElement(C,null),p?l.a.createElement(d,null):l.a.createElement(h,null),l.a.createElement("div",{className:"App"},l.a.createElement(T.d,null,l.a.createElement(T.b,{path:"/all-listings",render:function(e){return p?l.a.createElement(P,Object.assign({},e,{apiKey:"AIzaSyCPr5aDlJDqYLhbGvYpmCDqDqcPOODxgLw"})):l.a.createElement(T.a,{to:"/login"})}}),l.a.createElement(T.b,{path:"/login",render:function(e){return p?l.a.createElement(T.a,{to:"/"}):l.a.createElement(U,e,l.a.createElement(x,null))}}),l.a.createElement(T.b,{path:"/signup",render:function(e){return p?l.a.createElement(T.a,{to:"/"}):l.a.createElement(U,e,l.a.createElement(L,null))}}),l.a.createElement(T.b,{path:"/",render:function(e){return p?l.a.createElement(f,null):l.a.createElement(A,null)}})))))),l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"All rights reserved to SupplyWay.co"),l.a.createElement("p",null,"Please email info@supplyway.co for any questions/support")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[154,1,2]]]);
//# sourceMappingURL=main.f2d8e4b4.chunk.js.map