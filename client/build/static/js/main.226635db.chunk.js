(this.webpackJsonpcalender=this.webpackJsonpcalender||[]).push([[0],{35:function(t,e,n){t.exports=n(69)},40:function(t,e,n){},41:function(t,e,n){},66:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),s=n.n(o),i=(n(40),n(41),n(7)),l=n(8),c=n(10),u=n(9),h=(n(42),n(30)),p=n(17),v=n.n(p),d=n(31),m=n(13),f=n.n(m),y=n(18),g=n(12),w=n.n(g),b=(n(66),n(67),function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={events:[{start:w()().toDate(),end:w()().add(0,"days").toDate(),title:"Some "}]},t}return Object(l.a)(n,[{key:"convertString",value:function(t){return t.includes("PM")?t.replace(/PM/g," PM"):t.replace(/AM/g," AM")}},{key:"showEventHandler",value:function(){for(var t=[],e=0;e<this.props.data.length;e++){var n=this.props.data[e].end_time,a=this.props.data[e].start_time,r=this.convertString(a),o=this.convertString(n),s={start:new Date(r),end:new Date(o),title:"activity period"};t.push(s)}return t}},{key:"render",value:function(){console.log(this.props.tz),w.a.locale(this.props.tz);var t=Object(y.b)(w.a),e=this.showEventHandler();return console.log(e),r.a.createElement("div",{className:"Calender"},r.a.createElement(y.a,{localizer:t,defaultDate:new Date,defaultView:"month",events:e,style:{height:"100vh"}}))}}]),n}(a.Component)),E=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={view:!1,results:[],activity_period:"You were not active",tz:""},t.toggleHandler=function(){t.setState({view:!0})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(v.a.mark((function t(){var e=this;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("http://localhost:8000/members/"+this.props.id).then((function(t){return e.setState({results:t.data.activity_periods,tz:t.data.tz})}));case 2:this.showDate();case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"showDate",value:function(){var t=new Date;t.setHours(0,0,0,0);for(var e=0;e<this.state.results.length;e++){var n=this.state.results[e].start_time.split(" "),a=n[0]+" "+n[1]+" "+n[2],r=new Date(a);console.log(r),console.log(t),r.toString()===t.toString()&&(console.log(this.state.results[e].start_time),this.setState({activity_period:this.state.results[e].start_time.toString()+" to "+this.state.results[e].end_time.toString()}))}}},{key:"render",value:function(){return console.log(this.state.tz),this.state.view?r.a.createElement("div",null,r.a.createElement(b,{data:this.state.results,tz:this.state.tz})):r.a.createElement("div",null,r.a.createElement("p",{style:{fontFamily:"Rufina",fontSize:"20px"}},"Your Activity for today:"),r.a.createElement("p",null,this.state.activity_period),r.a.createElement("button",{onClick:this.toggleHandler},"Show All my activities"))}}]),n}(a.Component),O=(n(68),function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={open:!1},t.onOpenModal=function(){t.setState({open:!0})},t.onCloseModal=function(){t.setState({open:!1})},t}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:"center",style:{font:"15px"},onClick:this.onOpenModal},this.props.name),r.a.createElement(h.Modal,{open:this.state.open,onClose:this.onCloseModal},r.a.createElement(E,{id:this.props.id})))}}]),n}(a.Component)),j=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={results:[]},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.a.get("http://localhost:8000/members").then((function(e){return t.setState({results:e.data})}))}},{key:"render",value:function(){var t=this.state.results.map((function(t){return r.a.createElement("div",null,r.a.createElement(O,{key:t.id,name:t.real_name,id:t.id}),r.a.createElement("br",null))}));return r.a.createElement("div",null,t)}}]),n}(a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("p",{className:"p",style:{fontSize:"40px"}},"Users"),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.226635db.chunk.js.map