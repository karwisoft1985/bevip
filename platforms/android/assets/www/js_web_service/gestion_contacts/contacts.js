$(document).ready(function () {
alert('ok');
});
/*
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;



$(document).ready(function () {
var device=sessionStorage.getItem("device");
alert(device);
db.transaction(function(tx) {
   tx.executeSql("SELECT COUNT(*) FROM contact", [],
      function(tx, result) {
         //console.log(result.rows);
		 alert(result.rows.item(0)["count(*)"]);
        if(result.rows.item(0)["count(*)"])!=0){
alert('ok');
         // do the html stuff to push this value to div

		/*db.transaction(function(tx) {tx.executeSql("select * from contact order by etat desc", [] ,
		
								function(tx, result) {

									dataset = result.rows;
							
									var erreur = document.getElementById('mobile');

									if (dataset.length > 0) {
										erreur.innerHTML = "";
									} else {
										erreur.innerHTML = "<p align='center'>VIDE</p>";
									}
									
                                    var div='';
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_contact = item['id_contact'];
										var name = item['name'];
										var num = item['num'];
										var photo = item['photo'];
										var etat = item['etat'];								
									/* debut *
 if(etat == "1"){
 if(photo !=''){
 
div += "<img src='http://karwisoft.tn/php_bevip/upload/"+photo+"' style='width:40px; height:40px; border-radius:50%'/> "+name+"<br/><span style='margin-left:42px'>"+num+"</span><hr>";}
 else {
div += "<img src='assets/img/user.png' style='border-radius:50%'/> "+name+"<br/><span style='margin-left:42px'>"+num+"</span><hr>";}

}
 else{
 if(photo !='') {
div += '<img src='+photo+' style="width:40px; height:40px; border-radius:50%"/> '+name+'<br/><span style="margin-left:42px">'+num+'</span>	<button style="background:#ff5722;color:#fff;float:right;margin-right:8px" onclick="javascript:send('+num+');">Inviter</button><hr>';}
 else {
 div+= '<img src="assets/img/user.png" style=" border-radius:50%"/> '+name+'<br/><span style="margin-left:42px">'+num+'</span>	<button style="background:#ff5722;color:#fff;float:right;margin-right:8px" onclick="javascript:send('+num+');">Inviter</button><hr>';}
}
}
$("#mobileDiv").html(div);								
});
});
}
else{
/*
document.addEventListener("deviceready", init, false);
function init() {
  navigator.contacts.find([navigator.contacts.fieldType.displayName],gotContacts,errorHandler);
  navigator.contacts.find([navigator.contacts.fieldType.photos],gotContacts,errorHandler);
}
*
}
});
});
});

/*
function errorHandler(e) {
 console.log("errorHandler: "+e);
}
function cSort(a, b) {
if (a.displayName< b.displayName)
     return -1;
  if (a.displayName> b.displayName)
    return 1;
  //return 0;
}
function gotContacts(c) {

    $.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/list_contact.php",
        function (donnees) {

            var contenuHtml = '';
        
 console.log("gotContacts, number of results "+c.length);

 mobileDiv = document.querySelector("#mobile");
 //emailDiv = document.querySelector("#email");

 /* Retriving phoneNumbers 
 for(var i=0, len=c.length; i<len; i++) {
  c = c.sort(cSort);
  var j = 0;
 if(c[i].phoneNumbers && c[i].phoneNumbers.length > 0) {

 while((j < donnees.users.length) && (c[i].phoneNumbers[0].value != donnees.users[j].tel)) {
 j++;
 }
 if(j < donnees.users.length){			
									
 
 if(donnees.users[j].photo !=''){
 
 mobileDiv.innerHTML += "<img src='http://karwisoft.tn/php_bevip/upload/"+donnees.users[j].photo+"' style='width:40px; height:40px; border-radius:50%'/> "+c[i].displayName+"<br/><span style='margin-left:42px'>"+c[i].phoneNumbers[0].value+"</span><hr>";
  var req = "insert or replace into contact (name,num,photo,etat) values ('"
									+ c[i].displayName
									+ "','"
									+ c[i].phoneNumbers[0].value
									+ "','"
									+ donnees.users[j].photo
									+ "','"
									+ "1"
									"')";
 }
 else {
 mobileDiv.innerHTML += "<img src='assets/img/user.png' style='border-radius:50%'/> "+c[i].displayName+"<br/><span style='margin-left:42px'>"+c[i].phoneNumbers[0].value+"</span><hr>";}
 var req = "insert or replace into contact (name,num,etat) values ('"
									+ c[i].displayName
									+ "','"
									+ c[i].phoneNumbers[0].value
									+ "','"
									+ "1"
									"')";

}
 else{
 if(c[i].photos && c[i].photos.length > 0) {
 mobileDiv.innerHTML += '<img src='+c[i].photos[0].value+' style="width:40px; height:40px; border-radius:50%"/> '+c[i].displayName+'<br/><span style="margin-left:42px">'+c[i].phoneNumbers[0].value+'</span>	<button style="background:#ff5722;color:#fff;float:right;margin-right:8px" onclick="javascript:send('+c[i].phoneNumbers[0].value+');">Inviter</button><hr>';
  var req = "insert or replace into contact (name,num,photo,etat) values ('"
									+ c[i].displayName
									+ "','"
									+ c[i].phoneNumbers[0].value
									+ "','"
									+ c[i].photos[0].value
									+ "','"
									+ "0"
									"')";
 }
 else {mobileDiv.innerHTML += '<img src="assets/img/user.png" style=" border-radius:50%"/> '+c[i].displayName+'<br/><span style="margin-left:42px">'+c[i].phoneNumbers[0].value+'</span>	<button style="background:#ff5722;color:#fff;float:right;margin-right:8px" onclick="javascript:send('+c[i].phoneNumbers[0].value+');">Inviter</button><hr>';
  var req = "insert or replace into contact (name,num,etat) values ('"
									+ c[i].displayName
									+ "','"
									+ c[i].phoneNumbers[0].value
									+ "','"
									+ "0"
									"')";
 }
}
db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   //location.reload(); 
									   
							        });
 }
 }   


});
      }
function send(phone_no)
 {
 
 window.plugins.socialsharing.shareViaSMS('Discover Bevip on your smartphone! Download it from...', phone_no, function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)});

 }
