(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a(33),o=a.n(c),r=(a(42),a(3)),l=a(4),i=a(7),d=a(6),j=a(34),m=a(16),h=a.n(m),b=new j.a;function u(){return"localhost"===window.location.hostname?"http://localhost:8000/":"http://endi.easify.xyz:8000/"}var p=function(){function e(){Object(r.a)(this,e)}return Object(l.a)(e,null,[{key:"login",value:function(e){return h.a.post("".concat(u(),"login"),e,{headers:{"Content-Type":"application/json"}})}},{key:"postCall",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.a.post("".concat(u()).concat(e),t,{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(b.get("token"))}})}},{key:"postCallFormData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h.a.post("".concat(u()).concat(e),t,{headers:{accept:"application/json","Content-Type":"multipart/form-data",Authorization:"Token ".concat(b.get("token"))}})}},{key:"getCall",value:function(e){return h.a.get("".concat(u()).concat(e),{headers:{"Content-Type":"application/json",Authorization:"Token ".concat(b.get("token"))}})}}]),e}(),x=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={isNewMessage:!0,isChatWindow:!1},s.chatWS=new WebSocket("".concat("localhost"===window.location.hostname?"ws://localhost:8000/":"ws://endi.easify.xyz:8000/","chat")),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.chatWS.onopen=function(){e.chatWS.send(JSON.stringify({reqType:"getPrevChat"}))},this.chatWS.onmessage=function(t){var a=JSON.parse(t.data);"history"===a.do?e.setState({chatRender:a.chats.map((function(e){return Object(s.jsxs)("div",{className:"border-bottom mb-3",children:[Object(s.jsx)("h6",{children:Object(s.jsx)("b",{children:e.fromUser.first_name})}),Object(s.jsx)("h6",{children:e.message})]})}))}):(document.getElementsByClassName("new-msg-place")[0].focus(),document.getElementsByClassName("new-msg-place")[0].outerHTML="<div class='border-bottom mb-3'><h6><b>"+a.fromUser.first_name+"</b></h6><h6>"+a.message+"</h6></div><div class='new-msg-place'></div>")}}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{className:"col-12 mx-0",children:Object(s.jsx)("div",{className:"flex-column flex-md-row p-3 px-md-4 mb-3 bg-white border-bottom box-shadow",children:Object(s.jsxs)("nav",{className:"navbar navbar-expand-md",children:[Object(s.jsx)("h5",{className:"my-0 mr-auto my-auto font-weight-normal",children:Object(s.jsx)("a",{href:"/",children:"Endimension Quick Sample"})}),Object(s.jsx)("button",{className:"navbar-toggler ml-auto collapsed text-dark",type:"button","data-toggle":"collapse","data-target":"#navbarsExample04","aria-controls":"navbarsExample04","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"bx bx-down-arrow"})}),Object(s.jsx)("div",{className:"navbar-collapse collapse",id:"navbarsExample04",children:Object(s.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item my-auto",children:Object(s.jsx)("a",{className:"p-2 text-dark text-center",href:"https://github.com/guptamohitofficial/endimension-sample",children:"Download Source"})}),Object(s.jsx)("a",{className:"btn btn-outline-danger",href:"/logout",children:"Logout"})]})})]})})}),Object(s.jsx)("div",{children:this.state.isChatWindow?Object(s.jsxs)("div",{className:"shadow col-md-3 m-md-5 m-2 bg-white border",style:{position:"absolute",zIndex:"1",bottom:"0",right:"0",width:"95%",height:"600px",borderRadius:"10px"},children:[Object(s.jsxs)("div",{className:"col-12 py-3",style:{overflow:"auto",height:"450px"},children:[this.state.chatRender,Object(s.jsx)("div",{className:"new-msg-place"})]}),Object(s.jsxs)("div",{className:"col-12",style:{bottom:"0",right:"1.5px",position:"absolute"},children:[Object(s.jsx)("div",{className:"my-2",children:Object(s.jsx)("input",{type:"text",className:"mx-0 p-2 text-message-input",placeholder:"Type your Message here.",style:{width:"100%"},onKeyUp:function(e){"Enter"===e.key&&document.getElementsByClassName("send-message-btn")[0].click()}})}),Object(s.jsx)("button",{onClick:function(){var t=document.getElementsByClassName("text-message-input")[0].value;""!==t&&(document.getElementsByClassName("text-message-input")[0].value="",e.chatWS.send(JSON.stringify({reqType:"message",message:t})))},className:"btn mb-2 btn-outline-success col-12 send-message-btn",children:"Send"}),Object(s.jsx)("button",{className:"btn mb-2 btn-outline-danger col-12",onClick:function(){e.setState({isChatWindow:!1})},children:"Cancel"})]})]}):Object(s.jsxs)("div",{className:"m-md-5 m-2",style:{position:"absolute",bottom:"0",right:"0"},children:[this.state.isNewMessage?Object(s.jsx)("span",{className:"my-2",style:{float:"left"},children:Object(s.jsx)("div",{className:"bg-danger py-1",style:{borderRadius:"50%",padding:"4px",width:"12px",height:"12px"}})}):null,Object(s.jsx)("span",{className:"btn btn-warning m-0",onClick:function(){e.setState({isChatWindow:!0})},style:{fontSize:"2em",borderRadius:"50%"},children:Object(s.jsx)("span",{className:"bx bx-chat p-0"})})]})})]})}}]),a}(n.Component),O=a(2),v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).do=function(){b.remove("token"),b.get("token")&&b.remove("token"),window.location.href="/"},s.do(),s}return Object(l.a)(a,[{key:"render",value:function(){}}]),a}(n.Component),g=a(18),f=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleLogin=function(e){e.preventDefault(),p.login({username:s.state.username,password:s.state.password}).then((function(e){e.data.valid?(s.setState({btnMsg:"Sign In Success",btnColor:"success"}),b.set("token",e.data.token,{path:"/"}),setTimeout((function(){window.location.href="/"}),200)):s.setState({btnMsg:"Sign In Failed",btnColor:"danger"})})).catch((function(e){s.setState({btnMsg:"Sign In Failed",btnColor:"danger"})}))},s.handleInputs=function(e){s.setState({btnMsg:"Sign In",btnColor:"primary"}),s.setState(Object(g.a)({},e.target.name,e.target.value))},s.state={username:"",password:"",btnMsg:"Sign In",btnColor:"primary"},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{style:{height:"cover",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:" 40px",paddingBottom:"40px",backgroundColor:"#f5f5f5"},children:Object(s.jsxs)("form",{onSubmit:this.handleLogin,className:"form-signin mt-5 py-5",children:[Object(s.jsxs)("div",{className:"text-center mb-4",children:[Object(s.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Credentials"}),Object(s.jsx)("div",{children:"Doctor Username : doc1"}),Object(s.jsx)("div",{children:"Doctor Username : doc2"}),Object(s.jsx)("div",{children:"Hospital Username : hos"}),Object(s.jsx)("div",{children:"All Passwords : mohit"})]}),Object(s.jsxs)("div",{className:"form-label-group",children:[Object(s.jsx)("input",{style:{height:"50px"},type:"text",id:"inoutUsername",name:"username",className:"form-control",placeholder:"Username",onChange:this.handleInputs,required:!0,autoFocus:!0}),Object(s.jsx)("label",{htmlFor:"inoutUsername",children:"Username"})]}),Object(s.jsxs)("div",{className:"form-label-group",children:[Object(s.jsx)("input",{style:{height:"50px"},type:"password",id:"inputPassword",name:"password",className:"form-control",placeholder:"Password",onChange:this.handleInputs,required:!0}),Object(s.jsx)("label",{htmlFor:"inputPassword",children:"Password"})]}),Object(s.jsx)("button",{type:"submit",className:"btn btn-lg btn-".concat(this.state.btnColor," btn-block"),children:this.state.btnMsg}),Object(s.jsxs)("p",{className:"mt-5 mb-3 text-muted text-center",children:["Sample to ",Object(s.jsx)("b",{children:"Endimension"})," by"," ",Object(s.jsx)("a",{href:"https://mohit.worksnet.in",children:" Mohit Gupta"})]})]})})}}]),a}(n.Component),N=a(12),y=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={listOfScans:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{className:"text-center",colSpan:6,children:"No Records Found"})})},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){!1!==this.props.newAdded&&"hospital"===this.props.user.last_name&&(this.props.resetNewAdded(),this.componentDidMount())}},{key:"componentDidMount",value:function(){var e=this;p.getCall("hospital/get-records").then((function(t){t.data.valid&&t.data.records.length>=1&&e.setState({listOfScans:t.data.records.map((function(t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.id}),Object(s.jsx)("td",{children:t.name}),Object(s.jsx)("td",{children:t.age}),Object(s.jsx)("td",{children:t.gender}),Object(s.jsx)("td",{children:t.time}),Object(s.jsx)("td",{children:Object(s.jsx)("span",{onClick:function(){e.props.history.push("/record/".concat(t.id))},className:"col-12 btn btn-outline-info",type:"button",children:"Details"})})]},t.id)}))})})),this.createReport=function(e){p.postCall("").then((function(e){e.data.valid&&console.log()}))}}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{className:"mb-4 text-center",children:"Table of Scans"}),Object(s.jsx)("div",{className:"table-responsive",children:Object(s.jsxs)("table",{className:"table table-striped table-sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Scan Id"}),Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Age"}),Object(s.jsx)("th",{children:"Gender"}),Object(s.jsx)("th",{children:"Time"}),Object(s.jsx)("th",{children:"Report"})]})}),Object(s.jsx)("tbody",{children:this.state.listOfScans})]})})]})}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"row mx-0 border border-top-0 border-left-0 border-right-0",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:this.props.user.first_name}),Object(s.jsx)("h6",{children:this.props.user.email})]})}),Object(s.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(s.jsxs)("div",{className:"modal-content",style:{borderRadius:"10px"},children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Make a Scan Record"}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{className:"modal-body"}),Object(s.jsx)("div",{className:"modal-footer",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send to Doctor"})})]})})}),Object(s.jsx)("div",{className:"my-5",children:Object(s.jsx)(y,Object(N.a)({},this.props))})]})}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleNewScan=function(e){e.preventDefault();var t=new FormData;t.append("doctor",document.getElementsByClassName("to-doctor")[0].value),t.append("name",document.getElementsByClassName("pname")[0].value),t.append("age",document.getElementsByClassName("age")[0].value),t.append("image",document.getElementsByClassName("image-file")[0].files[0]),t.append("gender",document.getElementsByClassName("gender")[0].value),p.postCallFormData("hospital/save-a-record",t).then((function(e){e.data.valid?(s.setState({newAdded:!0}),document.getElementsByClassName("close")[0].click()):window.alert("Something went wrong")}))},s.state={listOfDoctors:[],newAdded:!1,resetNewAdded:function(){s.setState({newAdded:!1})}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getCall("doctor/get-doctors").then((function(t){t.data.valid&&e.setState({listOfDoctors:t.data.doctors.map((function(e){return Object(s.jsx)("option",{value:e.id,children:e.first_name},e.id)}))})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"row mx-0 border border-top-0 border-left-0 border-right-0",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:this.props.user.first_name}),Object(s.jsx)("h6",{children:this.props.user.email})]}),Object(s.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(s.jsx)("div",{className:"modal-content",style:{borderRadius:"10px"},children:Object(s.jsxs)("form",{onSubmit:this.handleNewScan,children:[Object(s.jsxs)("div",{className:"modal-header",children:[Object(s.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Make a Scan Record"}),Object(s.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{className:"modal-body",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-row m-0",children:[Object(s.jsx)("div",{className:"form-group col-6 m-0",children:Object(s.jsx)("input",{type:"text",className:"form-control pname",placeholder:"Patient Name",required:!0})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"number",className:"form-control age",placeholder:"Age",required:!0})})]}),Object(s.jsxs)("div",{className:"form-row m-0",children:[Object(s.jsx)("div",{className:"form-group col-6 m-0",children:Object(s.jsxs)("select",{className:"form-control gender",required:!0,children:[Object(s.jsx)("option",{value:"Male",children:"Male"}),Object(s.jsx)("option",{value:"Female",children:"Female"}),Object(s.jsx)("option",{value:"Other",children:"Other"})]})}),Object(s.jsx)("div",{className:"form-group col-6 m-0",children:Object(s.jsx)("input",{type:"file",className:"form-control image-file",accept:"image/*"})})]}),Object(s.jsx)("div",{className:"form-row m-0",children:Object(s.jsx)("div",{className:"form-group col-12 my-2",children:Object(s.jsxs)("select",{className:"form-control to-doctor",required:!0,children:[Object(s.jsx)("option",{disabled:!0,children:"--- Select Doctor ---"}),this.state.listOfDoctors]})})})]})}),Object(s.jsx)("div",{className:"modal-footer",children:Object(s.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send to Doctor"})})]})})})}),Object(s.jsx)("div",{className:"ml-auto",children:Object(s.jsx)("button",{className:"btn btn-outline-success",type:"button","data-toggle":"modal","data-target":"#exampleModal",children:"Create a Record"})})]}),Object(s.jsx)(y,Object(N.a)({newAdded:this.state.newAdded,resetNewAdded:this.state.resetNewAdded},this.props))]})}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={loaded:!1,record:"",report:"",sendBtnText:"Send Report",sendBtnColor:"btn-primary"},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.getCall("hospital/get-record-details/".concat(this.props.match.params.id)).then((function(t){t.data.valid&&e.setState({record:t.data.record,report:t.data.report,loaded:!0})}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{children:this.state.loaded?Object(s.jsx)("div",{className:"container-fluid mt-5",children:Object(s.jsxs)("div",{className:"row m-0",children:[Object(s.jsx)("div",{className:"col-8 p-0",children:Object(s.jsx)("div",{style:{height:"80%",overflow:"auto"},children:Object(s.jsx)("img",{className:"col-12 m-0 p-0",src:("localhost"===window.location.hostname?"http://localhost:8000/media/":"http://endi.easify.xyz:8000/media/")+this.state.record.image,alt:"Record Resource File"})})}),Object(s.jsxs)("div",{className:"col-4",children:[Object(s.jsxs)("table",{className:"mx-4",children:[Object(s.jsx)("tr",{children:Object(s.jsxs)("th",{className:"my-2 p-2",colSpan:"2",children:["Patient Name : ",this.state.record.name]})}),Object(s.jsxs)("tr",{children:[Object(s.jsxs)("td",{className:"p-2",children:["Age : ",this.state.record.age]}),Object(s.jsxs)("td",{className:"p-2",children:["Gender : ",this.state.record.gender]})]}),Object(s.jsx)("tr",{children:Object(s.jsxs)("td",{className:"p-2",colSpan:"2",children:["Time : ",this.state.record.time]})})]}),Object(s.jsxs)("div",{className:"m-2 my-5",children:[Object(s.jsx)("h5",{className:"text-center col-12",children:" Report"}),Object(s.jsx)("textarea",{className:"form-control m-0 report-text",name:"",placeholder:"We can write report here",cols:"20",rows:"14",onChange:function(){e.setState({sendBtnColor:"btn-primary",sendBtnText:"Send Report"})},children:this.state.report}),Object(s.jsx)("button",{type:"button",onClick:function(){var t=document.getElementsByClassName("report-text")[0].value;e.setState({sendBtnColor:"btn-warning",sendBtnText:"Saving Report"}),p.postCall("hospital/save-patient-report",{report:t,pid:e.state.record.id}).then((function(t){t.data.valid&&e.setState({sendBtnColor:"btn-success",sendBtnText:"Successfully Saved"})}))},className:"btn ".concat(this.state.sendBtnColor," col-12 m-0 my-3"),children:this.state.sendBtnText})]})]})]})}):Object(s.jsx)("div",{className:"linePreloader-green"})})}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={loaded:!1,user:""},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.postCall("get-user").then((function(t){t.data.valid&&(e.setState({user:t.data.user,loaded:!0}),"doctor"===t.data.user.last_name?e.props.history.push("/doctor"):"hospital"===t.data.user.last_name&&e.props.history.push("/hospital"))}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"mt-5 container",children:this.state.loaded?Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"mt-5",children:Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{exact:!0,path:"/doctor",component:function(t){return Object(s.jsx)(w,Object(N.a)(Object(N.a)({},t),{},{user:e.state.user}))}}),Object(s.jsx)(O.a,{exact:!0,path:"/hospital",component:function(t){return Object(s.jsx)(C,Object(N.a)(Object(N.a)({},t),{},{user:e.state.user}))}}),Object(s.jsx)(O.a,{exact:!0,path:"/record/:id",component:function(t){return Object(s.jsx)(S,Object(N.a)(Object(N.a)({},t),{},{user:e.state.user}))}})]})})}):Object(s.jsx)("div",{className:"linePreloader-green"})})}}]),a}(n.Component),M=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:b.get("token")?Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsxs)(O.c,{children:[Object(s.jsx)(O.a,{exact:!0,path:"/logout",component:v}),Object(s.jsx)(O.a,{path:"/",component:k})]})]}):Object(s.jsx)(f,{})})}}]),a}(n.Component);var B=function(){return Object(s.jsx)(M,{})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),c(e),o(e)}))},D=a(17),E=a(67);o.a.render(Object(s.jsx)(E.a,{children:Object(s.jsx)(D.a,{children:Object(s.jsx)(B,{})})}),document.getElementById("root")),T()}},[[66,1,2]]]);
//# sourceMappingURL=main.a2887ec9.chunk.js.map