(this["webpackJsonpmern-exercise-tracker"]=this["webpackJsonpmern-exercise-tracker"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),s=a.n(c),l=a(19),o=a(23),u=(a(85),a(10)),i=a(11),m=a(13),d=a(12),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"ExerTracker"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/users",className:"nav-link"},"Users")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),a}(r.a.Component),p=a(7),E=a.n(p),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(l.b,{className:"btn btn-primary",to:"/edit/".concat(e.exercise._id)},"Edit")," ",r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteExercise(e.exercise._id)}},"Delete")))},f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={exercises:[]},e.deleteExercise=function(t){E.a.delete("".concat("http://localhost:5000","/exercises/").concat(t)).then((function(e){return console.log(e)})),e.setState({exercises:e.state.exercises.filter((function(e){return e._id!==t}))})},e.exerciseList=function(){var t=e.state.exercises;if(t.length>0)return t.map((function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("http://localhost:5000"),E.a.get("".concat("http://localhost:5000","/exercises")).then((function(t){var a=t.data;a.length>0&&e.setState({exercises:a})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),a}(r.a.Component),b=a(36),g=a.n(b),x=(a(69),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"Anon",description:"",duration:0,date:new Date,users:[]},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangeDescription=function(t){e.setState({description:t.target.value})},e.onChangeDuration=function(t){e.setState({duration:t.target.value})},e.onChangeDate=function(t){e.setState({date:t})},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,description:e.state.description,duration:e.state.duration,date:e.state.date};console.log(a),E.a.post("".concat("http://localhost:5000","/exercises/update/").concat(e.props.match.params.id),a).then((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("http://localhost:5000","/exercises/").concat(this.props.match.params.id)).then((function(t){return e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,data:new Date(t.data.date)})})),E.a.get("".concat("http://localhost:5000","/users/")).then((function(t){var a=t.data;a.length>0&&e.setState({users:a.map((function(e){return e.username}))})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.description,required:!0,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (In Minutes) "),r.a.createElement("input",{type:"text",required:!0,onChange:this.onChangeDuration,value:this.state.duration,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(g.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),a}(r.a.Component)),N=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"Anon",description:"",duration:0,date:new Date,users:[]},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangeDescription=function(t){e.setState({description:t.target.value})},e.onChangeDuration=function(t){e.setState({duration:t.target.value})},e.onChangeDate=function(t){e.setState({date:t})},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username,description:e.state.description,duration:e.state.duration,date:e.state.date};console.log(a),E.a.post("".concat("http://localhost:5000","/exercises/add"),a).then((function(e){return console.log(e)})),window.location="/"},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("".concat("http://localhost:5000","/users/")).then((function(t){var a=t.data;a.length>0&&e.setState({users:a.map((function(e){return e.username})),username:a[0].username})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.description,required:!0,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (In Minutes) "),r.a.createElement("input",{type:"text",required:!0,onChange:this.onChangeDuration,value:this.state.duration,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement(g.a,{selected:this.state.date,onChange:this.onChangeDate})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={username:"",description:"",duration:0,date:new Date,users:[]},e.onSubmit=function(t){t.preventDefault();var a={username:e.state.username};console.log(a),E.a.post("".concat("http://localhost:5000","/users/add"),a).then((function(e){console.log(e)})),e.setState({username:""})},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({username:"Shaquille"})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",required:!0,value:this.state.username,onChange:this.onChangeUsername,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create New User",className:"btn btn-primary"}))))}}]),a}(r.a.Component),C=a(33),D=a.n(C),k=a(58),S=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.user),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.deleteUser(e.id)}},"Delete")))},j=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e.deleteUser=function(){var t=Object(k.a)(D.a.mark((function t(a){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.delete("".concat("http://localhost:5000","/users/").concat(a));case 3:(n=t.sent)&&(console.log(n.data),e.setState((function(e){return{users:e.users.filter((function(e){return!(e._id===a)}))}}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(k.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat("http://localhost:5000","/users/"));case 3:(t=e.sent).data&&this.setState({users:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Users"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Users"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,this.state.users.map((function(t){return r.a.createElement(S,{key:t._id,id:t._id,user:t.username,deleteUser:e.deleteUser})})))))}}]),a}(r.a.Component);var O=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement("br",null),r.a.createElement(o.a,{path:"/",exact:!0,component:f}),r.a.createElement(o.a,{path:"/edit/:id",component:x}),r.a.createElement(o.a,{path:"/create",component:N}),r.a.createElement(o.a,{path:"/user",component:y}),r.a.createElement(o.a,{path:"/users",component:j})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},80:function(e,t,a){e.exports=a(165)}},[[80,1,2]]]);
//# sourceMappingURL=main.c6350a5e.chunk.js.map