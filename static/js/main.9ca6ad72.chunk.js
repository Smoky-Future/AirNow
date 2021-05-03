(this.webpackJsonpairnow=this.webpackJsonpairnow||[]).push([[0],{29:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),i=a.n(c),r=a(5),l=a(2),s=a(27),u=a.n(s),d=a(14),p=(a(42),a(7)),E=a(8),h=a(4),m=a(10),g=a(9),v=function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",{className:"particle green"}),o.a.createElement("div",{className:"particle orange"}),o.a.createElement("div",{className:"particle red"}),o.a.createElement("div",{className:"particle purple"}))},b=a(28),f=a.n(b),y=function(e){var t=e.latitude,a=e.longitude;return{type:"NEW_AIR_DATA",payload:f.a.get("https://api.waqi.info/feed/geo:".concat(t,";").concat(a,"/?token=").concat("f042aac189855a41eaea34a368f3891c87a073fb"))}},k=function(e){switch(e){case 1:return{type:"SET_INDEX_LEVEL",payload:{condition:"Healthy",background:"bg-healthy",color:"#70F1CE"}};case 51:return{type:"SET_INDEX_LEVEL",payload:{condition:"Moderate",background:"bg-moderate",color:"#EDC77A"}};case 101:return{type:"SET_INDEX_LEVEL",payload:{condition:"Unhealthy for Sensitive Groups",background:"bg-sensitive",color:"#EFA556"}};case 151:return{type:"SET_INDEX_LEVEL",payload:{condition:"Unhealthy",background:"bg-unhealthy",color:"#FE7148"}};case 201:return{type:"SET_INDEX_LEVEL",payload:{condition:"Very Unhealthy",background:"bg-danger",color:"#B093EF"}};case 301:return{type:"SET_INDEX_LEVEL",payload:{condition:"Hazardous",background:"bg-hazardous",color:"#000000"}};default:return{type:"KEEP_INDEX_LEVEL"}}},N=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this)).state={pm25Data:null},n.updatePM25=n.updatePM25.bind(Object(h.a)(n)),n}return Object(E.a)(a,[{key:"componentDidUpdate",value:function(e){if(e.airData[0]!==this.props.airData[0]){var t=this.props.airData[0].data.iaqi.pm25.v;this.updatePM25(t)}}},{key:"updatePM25",value:function(e){var t,a=this;t=e<100?60:e<200?40:e<300?38:35;for(var n=0;n<=e;n++)setTimeout(function(t){return function(){a.setState({pm25Data:t}),t===e&&a.props.getCountingFinished(!0),a.props.setIndexLevel(t)}}(n),function(e){return e*t}(n))}},{key:"render",value:function(){return this.props.airData[0]?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",{className:"airnow"},"AirNow")),o.a.createElement("div",{className:"center-block"},o.a.createElement("h1",{className:"city"},this.props.airData[0].data.city.name),o.a.createElement("div",{className:"main-meter animated bounceIn",style:{color:"".concat(this.props.color)}},o.a.createElement("h3",{className:"title"},"PM2.5"),o.a.createElement("div",{className:"pm25"}," ",this.state.pm25Data," "),o.a.createElement("h3",{className:"condition"},this.props.condition)))):o.a.createElement("div",{className:"vertical-center"},o.a.createElement("div",{className:"loader-container"},o.a.createElement(v,null)))}}]),a}(n.Component),w=Object(r.b)((function(e){return{airData:e.airData,color:e.indexLevel.color,condition:e.indexLevel.condition}}),(function(e){return Object(l.b)({setIndexLevel:k},e)}))(N),L=(a(60),function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={location:null,counting:!0},n.checkNowOnClick=n.checkNowOnClick.bind(Object(h.a)(n)),n.getCountingFinished=n.getCountingFinished.bind(Object(h.a)(n)),n}return Object(E.a)(a,[{key:"componentWillMount",value:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){e.setState({location:t}),e.props.ge(e.state.location.coords)}))}},{key:"checkNowOnClick",value:function(e){var t=this;navigator.geolocation&&(this.setState({location:null,counting:!0}),navigator.geolocation.getCurrentPosition((function(e){t.setState({location:e}),t.props.ge(t.state.location.coords)})))}},{key:"getCountingFinished",value:function(e){e&&this.setState({counting:!1})}},{key:"render",value:function(){return this.state.location?o.a.createElement("div",null,o.a.createElement(w,{getCountingFinished:this.getCountingFinished}),this.state.counting?o.a.createElement("button",{onClick:this.checkNowOnClick,className:"check-button diable",disabled:!0},"Checking"):o.a.createElement("button",{onClick:this.checkNowOnClick,className:"check-button"},"Update"),o.a.createElement("div",{className:"global-bg ".concat(this.props.background)})):o.a.createElement("div",{className:"vertical-center"},o.a.createElement("div",{className:"loader-container"},o.a.createElement(v,null),o.a.createElement("p",{className:"text-center"},"The app will fetch the air quality index based on your location."),o.a.createElement("p",{className:"text-center"},o.a.createElement("strong",null,"Make sure your Location Service is turned on."))))}}]),a}(n.Component)),D=Object(r.b)((function(e){return{background:e.indexLevel.background}}),(function(e){return Object(l.b)({ge:y},e)}))(L),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_AIR_DATA":return[t.payload.data];default:return e}},_=a(15),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{condition:"",color:"#70F1CE",background:"bg-white"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INDEX_LEVEL":return Object(_.a)(Object(_.a)({},e),{},{condition:t.payload.condition,background:t.payload.background,color:t.payload.color});case"KEEP_INDEX_LEVEL":default:return e}},j=Object(l.c)({airData:O,indexLevel:C});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(l.a)(u.a)(l.d),S=document.getElementById("root");d.a.initialize("UA-128591856-2"),d.a.pageview(window.location.pathname+window.location.search),i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:I(j)},o.a.createElement(D,null))),S),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.9ca6ad72.chunk.js.map