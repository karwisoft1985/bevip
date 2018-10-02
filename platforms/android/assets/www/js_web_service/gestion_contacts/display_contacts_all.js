var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

$(document).ready(function () {
var userLang = navigator.language || navigator.userLanguage;
db.transaction(function(tx) {tx.executeSql("select * from contact order by name ASC", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									
							
									mobileDiv = document.querySelector("#thelist");
									
									
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										
										var name = item['name'];
										var phone = item['phone'];
										var photo = item['photo'];
										var partner = item['partner'];
										
										//alert(name+' : '+partner);
										
										
										
										if(partner == 'oui')
										{
										mobileDiv.innerHTML += "<li><div><img src='"+photo+"' style='width:50px; height:50px; border-radius:100%;float:left;margin-right:20px;'/> "+name+"<br/><div style='padding-left:20px;'>"+phone+"</div></div></li>";
                                        }
										else
										{
										if(userLang=="fr-FR"){
										mobileDiv.innerHTML += '<li><div><img src="'+photo+'" style="width:50px;height:50px;border-radius:100%;margin-right:20px;"/> '+name+'<br/><div style="margin-left:72px">'+phone+'</div>	<div style="background:#ff5722;color:#fff;float:right;margin-right:8px;border:none;padding:10px;margin-top:-50px;" onclick="javascript:send('+phone+');">Inviter</div></div></li>';
                                        }
										else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
										mobileDiv.innerHTML += '<li><div><img src="'+photo+'" style="width:50px;height:50px;border-radius:100%;margin-right:20px;"/> '+name+'<br/><div style="margin-left:72px">'+phone+'</div>	<div style="background:#ff5722;color:#fff;float:right;margin-right:8px;border:none;padding:10px;margin-top:-50px;" onclick="javascript:send('+phone+');">دعوة</div></div></li>';
                                        }
										else {
										mobileDiv.innerHTML += '<li><div><img src="'+photo+'" style="width:50px;height:50px;border-radius:100%;margin-right:20px;"/> '+name+'<br/><div style="margin-left:72px">'+phone+'</div>	<div style="background:#ff5722;color:#fff;float:right;margin-right:8px;border:none;padding:10px;margin-top:-50px;" onclick="javascript:send('+phone+');">Invite</div></div></li>';
                                        }
										}
										
										
										
                                        
                                        
										

									}
									
									
									
								
								});

			});


});

 
 
 	  

function send(phone_no)
{
 
 window.plugins.socialsharing.shareViaSMS('Join Bevip,it will help you to succeed all your projects! Download it from...', phone_no, function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)});

}


function refreshContactsAll(){


db.transaction(deleteContact());


setTimeout(function(){ 
navigator.contacts.find([navigator.contacts.fieldType.displayName],gotContacts,errorHandler);
navigator.contacts.find([navigator.contacts.fieldType.photos],gotContacts,errorHandler);
},3000);

 
setTimeout(function(){ 
location.href="contactsALL.html";
}, 6000);


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


function gotContacts(c){
    
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

}

function send(phone_no){


 window.plugins.socialsharing.shareViaSMS('Join Bevip,it will help you to succeed all your projects! Download it from...', phone_no, function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)});

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
 
 
 function deleteContact() {
 
        return function(tx) {
            tx.executeSql("delete from contact",[]);
        };
		
		
}