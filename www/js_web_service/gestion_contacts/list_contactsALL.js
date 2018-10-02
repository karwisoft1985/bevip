//document.addEventListener("deviceready", init, false);

var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

document.addEventListener("deviceready",onDeviceReady,false);
 function onDeviceReady(){

    /*db.transaction(deleteContact());*/
   
    navigator.contacts.find([navigator.contacts.fieldType.displayName],gotContacts,errorHandler);
    navigator.contacts.find([navigator.contacts.fieldType.photos],gotContacts,errorHandler);
	
}


function errorHandler(e){
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
    
	
	/*
	db.transaction(function(tx) {
    tx.executeSql("delete from contact",[]);
	});
	*/

    $.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/list_contact.php",
        function (donnees) {

            var contenuHtml = '';
        
           console.log("gotContacts, number of results "+c.length);

          //mobileDiv = document.querySelector("#mobile");
          //emailDiv = document.querySelector("#email");

 /* Retriving phoneNumbers */
 for(var i=0, len=c.length; i<len; i++) {
  c = c.sort(cSort);
  var j = 0;
 if(c[i].phoneNumbers && c[i].phoneNumbers.length > 0) {

 while((j < donnees.users.length) && (c[i].phoneNumbers[0].value != donnees.users[j].tel)) {
 j++;
 }
 if(j < donnees.users.length){
 
 if(donnees.users[j].photo !=''){
 
 	 var photo=donnees.users[j].photo;
     var name=c[i].displayName;
     var phone=c[i].phoneNumbers[0].value;
	 phone = phone.replace(/ /g, "");
     var partner='oui';
	 
	 /*
	 document.write(photo+'<br>');
	 document.write(name+'<br>');
	 document.write(phone+'<br>');
	 document.write(partner+'<br><br><br>');
     */

	 
	 db.transaction(ajouterContact(photo,name,phone,partner)); 
	 
  }
  else {
 
    

   	var photo='assets/img/user.png';
    var name=c[i].displayName;
    var phone=c[i].phoneNumbers[0].value;
	phone = phone.replace(/ /g, "");
    var partner='oui'; 
	 
    db.transaction(ajouterContact(photo,name,phone,partner)); 
 
 
  }

}
 else{
 if(c[i].photos && c[i].photos.length > 0) {
 
 
 
 var photo=c[i].photos[0].value;
 var name=c[i].displayName;
 var phone=c[i].phoneNumbers[0].value;
 phone = phone.replace(/ /g, "");
 var partner='non';
 
 db.transaction(ajouterContact(photo,name,phone,partner)); 
 
 
 }
 else{
 
 
 var photo='assets/img/user.png';
 var name=c[i].displayName;
 var phone=c[i].phoneNumbers[0].value;
 phone = phone.replace(/ /g, "");
 var partner='non';
 
 db.transaction(ajouterContact(photo,name,phone,partner)); 

 
 
 }
 
 
 }
 
 
 }
 }   



});



 /* 
 Retriving Email 
 for(var i=0, len=c.length; i<len; i++) {
 if(c[i].emails && c[i].emails.length > 0) {
 emailDiv.innerHTML += "<p>"+c[i].emails[0].value+"</p>";
 }
 }
 */
 
 
}


function send(phone_no){


 window.plugins.socialsharing.shareViaSMS('Discover Bevip on your smartphone! Download it from...', phone_no, function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)});

 }
 

 
 function ajouterContact(photo,name,phone,partner) {
 
      return function(tx) {
		    
			phone = phone.replace(/ /g, "");
           
			var req = "insert or replace into contact (name,phone,photo,partner) values ('"
									+ name
									+ "','"
									+ phone
									+ "','"
									+ photo
									+ "','"
									+ partner
									+ "')";
            tx.executeSql(req,[]);
        };
		
		
}
 
 
 function deleteContact(){
 
        return function(tx) {
		
            tx.executeSql("delete from contact",[]);
			
        };
}