$(document).ready(function(){
var CheminComplet = window.location.search;
CheminComplet = decodeURIComponent(CheminComplet);
	var nomdest=CheminComplet.substring( CheminComplet.indexOf( "nom=" )+4 , CheminComplet.indexOf( "&img" ));
	var imgdest=CheminComplet.substring( CheminComplet.indexOf( "&img=" )+5 , CheminComplet.indexOf( "&id_dest" ));
	 document.getElementById("nomdest").innerHTML = nomdest;
	 document.getElementById("imgdest").innerHTML = '<img src="http://www.karwisoft.tn/php_bevip/upload/'+imgdest+'"  style="width:40px;height:40px;border-radius:100%;color:#fff;margin-left:10px;margin-right:10px;" />';
var id_dest =CheminComplet.substring( CheminComplet.indexOf( "id_dest=" )+8 ,CheminComplet.length );
var deviceexp=sessionStorage.getItem("device");
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/receive_conversation.php","lastreceived=0&deviceexp="+deviceexp+"&id_dest="+id_dest,showMsgs);
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
var CheminComplet = window.location.search;
var id_dest =CheminComplet.substring( CheminComplet.indexOf( "id_dest=" )+8 ,CheminComplet.length );
var deviceexp=sessionStorage.getItem("device");
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/users.php","",showUsers)
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/receive_conversation.php","lastreceived="+lastReceived+"&deviceexp="+deviceexp+"&id_dest="+id_dest,showMessages)
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
chatBox.appendChild(messages)
if(k==1){
chatBox.scrollTop = chatBox.scrollHeight;
}
}

// Send message
function sendMessage(){
var CheminComplet = window.location.search;
var id_dest =CheminComplet.substring( CheminComplet.indexOf( "id_dest=" )+8 ,CheminComplet.length );
var deviceexp=sessionStorage.getItem("device");
data="message="+messageForm.message.value+"&deviceexp="+deviceexp+"&id_dest="+id_dest
Keyboard.hide();
//serverRes.innerHTML="Sending"
Ajax_Send("POST","http://www.karwisoft.tn/php_bevip/support/send_conv.php",data,sentOk)
}

// Sent Ok
function sentOk(res){
if(res.indexOf("sentok") !== -1){
messageForm.message.value=""
messageForm.message.focus()
chatBox.scrollTop = chatBox.scrollHeight;
}
}