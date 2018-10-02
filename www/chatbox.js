$(document).ready(function(){
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/receive.php","lastreceived=0&device="+sessionStorage.getItem("device"),showMsgs);
})

function showMsgs(res){
msgTmArr=res.split("<SRVTM>");
lastReceived=msgTmArr[1];
messages=document.createElement("ol");
messages.className="chat";
messages.innerHTML=msgTmArr[0];
chatBox.appendChild(messages);
chatBox.scrollTop =  chatBox.scrollHeight;
}

function Ajax_Send(GP,URL,PARAMETERS,RESPONSEFUNCTION){
var xmlhttp
try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP")}
catch(e){
try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}
catch(e){
try{xmlhttp=new XMLHttpRequest()}
catch(e){
alert("Your Browser Does Not Support AJAX")}}}
err=""
if (GP==undefined) err="GP "
if (URL==undefined) err +="URL "
if (PARAMETERS==undefined) err+="PARAMETERS"
if (err!=""){alert("Missing Identifier(s)\n\n"+err);return false;}

xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState == 4){
if (RESPONSEFUNCTION=="") return false;
eval(RESPONSEFUNCTION(xmlhttp.responseText))
}
}

if (GP=="GET"){
URL+="?"+PARAMETERS
xmlhttp.open("GET",URL,true)
xmlhttp.send(null)
}

if (GP="POST"){
PARAMETERS=encodeURI(PARAMETERS)
xmlhttp.open("POST",URL,true)
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xmlhttp.send(PARAMETERS)
}
}

lastReceived=0;
// Hide the message form
function hideShow(hs){
if(hs=="hide"){
signInForm.signInButt.value="Sign in"
signInForm.signInButt.name="signIn"
messageForm.style.display="block"
//signInForm.userName.style.display="block"
signInName.innerHTML=""
}
if(hs=="show"){
signInForm.signInButt.value="Sign out"
signInForm.signInButt.name="signOut"
messageForm.style.display="block"
signInForm.userName.style.display="none"
signInName.innerHTML=signInForm.userName.value

}
}

// Sign in and Out
function signInOut(){
/*if (signInForm.userName.value==""){
alert("Not valid user name\nPlease make sure your user name didn't contains a space\nOr it's not empty.");
signInForm.userName.focus();
return false;
}*/
// Sign in
if (signInForm.userName.value==''){
	data="device="+sessionStorage.getItem("device")
Ajax_Send("GET","http://www.karwisoft.tn/php_bevip/support/user.php",data,archiname);
return false
}
else{
if (signInForm.signInButt.name=="signIn"){
data="user=" + signInForm.userName.value +"&oper=signin"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php",data,checkSignIn);
return false
}

// Sign out
if (signInForm.signInButt.name=="signOut"){
data="user=" + signInForm.userName.value +"&oper=signout"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php",data,checkSignOut);
return false
}
}
}

// Sign in response
function archiname(nom){
nom = nom.replace(/[\s]{2,}/g," "); // Enlève les espaces doubles, triples, etc.
nom = nom.replace(/^[\s]/, ""); // Enlève les espaces au début
nom = nom.replace(/[\s]$/,"");
signInForm.userName.value=nom;
if (signInForm.signInButt.name=="signIn"){
data="user=" + signInForm.userName.value +"&oper=signin"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php",data,checkSignIn);
return false
}

// Sign out
if (signInForm.signInButt.name=="signOut"){
data="user=" + signInForm.userName.value +"&oper=signout"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php",data,checkSignOut);
return false
}
}
function checkSignIn(res){
hideShow("show")
messageForm.message.focus()
updateInterval=setInterval("updateInfo()",1000);
//serverRes.innerHTML="Sign in"
}

// Sign out response
function checkSignOut(res){
if(res=="usernotfound"){
serverRes.innerHTML="Sign out error";
res="signout"
}
if(res=="signout"){
hideShow("hide")
signInForm.userName.focus()
clearInterval(updateInterval)
serverRes.innerHTML="Sign out"
return false
}
}

// Update info
function updateInfo(){
//serverRes.innerHTML="Updating"
var device=sessionStorage.getItem("device")
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php","",showUsers)
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/receive.php","lastreceived="+lastReceived+"&device="+device,showMessages)
}

// update online users
function showUsers(res){
//usersOnLine.innerHTML=res
}

// Update messages view
function showMessages(res){
//serverRes.innerHTML=""
var a=chatBox.scrollHeight;
var b=chatBox.clientHeight;
var c = a - b;
var d=chatBox.scrollTop;
var k = d / c;
msgTmArr=res.split("<SRVTM>")
lastReceived=msgTmArr[1]
messages=document.createElement("ol")
messages.className="chat"
messages.innerHTML=msgTmArr[0]
if(msgTmArr[0].replace(/\s/g, '').length){
chatBox.appendChild(messages)
}
if(k==1){
chatBox.scrollTop = chatBox.scrollHeight;
}
}

// Send message
function sendMessage(){
data="message="+messageForm.message.value+"&user="+signInForm.userName.value+"&device="+sessionStorage.getItem("device")
Keyboard.hide();
//serverRes.innerHTML="Sending"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/send.php",data,sentOk)
}

// Sent Ok
function sentOk(res){
if(res.indexOf("sentok") !== -1){
messageForm.message.value=""
messageForm.message.focus()
chatBox.scrollTop = chatBox.scrollHeight;
//serverRes.innerHTML="Sent"
}
}