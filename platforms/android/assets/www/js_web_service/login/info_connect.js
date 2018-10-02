var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

function change(){

document.getElementById('comment').style.display='none';
document.getElementById('nbajout').style.display='none';
document.getElementById('recherche').style.display='none';
document.getElementById('contenu').style.display='none';
document.getElementById('logo').style.display='none';
document.getElementById('menu-part').style.display='none';
document.getElementById('return').style.display='block';
document.getElementById('return').style.display='inline';
document.getElementById('search_partner').style.display='block';


}
 /***********Récupérer image utilisateur**************/
 

 $(document).ready(function () {
var device=sessionStorage.getItem("device");
var dataString='device='+device;

db.transaction(function(tx) {tx.executeSql("select * from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;

                                var contenuHtml = '';								

									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var image = item['image'];
										
										
									/* debut */	
										
							         contenuHtml += ' <img src="'+image+'" style="width:40px;height:40px;margin-right:5px;border-radius:100%;" />';

                                    /* fin */
                                   	
									}
									
									
									document.getElementById("image").innerHTML = contenuHtml;
									
									
});
});

/*


$.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/authentification.php",dataString,
        function (donnees) {

            var contenuHtml = '';
			
			
            if ( donnees.user[0].photo != '' ){
			
           contenuHtml += ' <img src="assets/img/user.png" style="width:40px;margin-right:5px;border-radius:100%;" />';
			  
           }
		   else {
			
           contenuHtml += ' <img src="assets/img/user.png" style="width:40px;margin-right:5px;border-radius:100%;" />';
				  
		  }
			
			
			document.getElementById("image").innerHTML = contenuHtml;
			
        });
		
*/


});



/********************afficher mes partenaires*****************/


$(document).ready(function () {

    var contenuHtml = '';
	
	contenuHtml += '<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;text-align:center;font-weight:bold;font-size:20px;">';
   

	
	contenuHtml += 'TALK WITH YOUR BOT';
	  
    contenuHtml += '</div>';
	
	
	document.getElementById("partners").innerHTML = contenuHtml;
 
	
});


/********************Notification ajout partenaire******************/
$(document).ready( function () {
setInterval(function() {
var device=sessionStorage.getItem("device");
var dataString ='device='+device;
   var contenuHtml = '';
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/nb_notif.php", dataString,
      function (donnees) {
         
			  if (donnees.notification[0].msg != 0) {
				
				contenuHtml += '<span class="top-label label label-danger">'+donnees.notification[0].msg+'</span>';
                  
}
else{
contenuHtml += '';
}
 document.getElementById("notif_inscri").innerHTML = contenuHtml;
        });
		},1000);
});
$(document).ready( function () {
setInterval(function() {
var device=sessionStorage.getItem("device");
var dataString ='device='+device;
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
								
$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/nb_notif.php", dataString,
      function (donnees) {
            var contenuHtml = '';
			  if (donnees.notification[0].msg != 0) {
			  contenuHtml += '<ul style="list-style: none">';
			 for (var i = 0; i < donnees.notification.length; i++) {
contenuHtml += '<li style="list-style: none;display: inline-block;margin-left:0px;padding-left:0px " ><a href=recherche_part.html?id_user='+donnees.notification[i].id_inviteur+'>';
if ( donnees.notification[i].photo_inviteur != '')
				{				
				contenuHtml +=  '<img src="http://karwisoft.tn/php_bevip/upload/'+donnees.notification[i].photo_inviteur+'" width="50px" style="border-radius:100%;margin-left:-40px; />';
				}
				else
				{
				contenuHtml +=  '<img src="http://karwisoft.tn/php_bevip/upload/avatar.png" width="50px" style="border-radius:100%;margin-left:-40px;"  />';
				}
contenuHtml += '<span style="color:#292c2f; font-size:12px;margin-right:2px" >'+donnees.notification[i].nom_inviteur+'</a>';
contenuHtml += '<button type="button"  style="margin-left:5px;margin-right:5px;padding-left:5px;padding-right:5px;padding-top:5px;font-size:12px;padding-bottom:5px;background:#ff5722;color:#fff;border:none;text-decoration:none;text-transform:uppercase;"onclick="javascript:confirm('+ donnees.notification[i].id_inviteur +','+ donnees.notification[i].id_invited +')">';
	if(lang=="fr"){
				contenuHtml +=  'Confirmer';	}
				else if (lang == 'ar')
				{contenuHtml +=  'موافقة';}
				else {contenuHtml +=  'Confirm';}
contenuHtml +=  '</button>';
contenuHtml += '<button type="button"  style="margin-left:5px;margin-right:5px;padding-left:5px;padding-right:5px;padding-top:5px;font-size:12px;padding-bottom:5px;background:#ff5722;color:#fff;border:none;text-decoration:none;text-transform:uppercase;" onclick="javascript:cancel('+ donnees.notification[i].id_inviteur +','+ donnees.notification[i].id_invited +')">';

	if(lang=="fr"){
				contenuHtml +=  'Annuler';	}
				else if (lang == 'ar')
				{contenuHtml +=  'رفض';}
					 else {contenuHtml +=  'Cancel';}
			contenuHtml += '</button></li>';
		
			}
				}
                else {
                    contenuHtml += '<li style="list-style: none;display:"><span style="color:#292c2f; font-size:14px;font-weight:bold;"><center>';
					if(lang=="fr"){
				contenuHtml +=  'Aucune nouvelle demande';	}
				else if (lang == 'ar')
				{contenuHtml +=  'لا يوجد طلب إظافة جديد';}
					 else {contenuHtml +=  'No new add request';}
					contenuHtml +=  '</center></span></li>';
				
                }
/*contenuHtml += '<ul>';
contenuHtml += '<li>';
				
				contenuHtml +=  '<img src="assets/img/fam.png" width="12%" />';
		
contenuHtml += '<a href=recherche_part.html?id_user=2><span style="color:#292c2f; font-size:12px;margin-right:2px" >sb</span></a>';
contenuHtml += '<span style="float:right">';
contenuHtml += '<button type="button" style="margin-right:2px;" class="btn btn-primary" onclick="javascript:confirm(6,4)">Confirm</button>';
contenuHtml += '<button type="button" style="margin-right:2px;" class="btn btn-primary" onclick="javascript:cancel(6,4)">Cancel</button>';
contenuHtml += '</span>';			
contenuHtml += '</li>';		*/	
contenuHtml += '</ul>';			
	
				
            document.getElementById("notifnonlu").innerHTML = contenuHtml;
			
       });
       });
       });
		},1000);
});

$(document).ready(function () {

			document.addEventListener("online",chkOnline,false);
			 document.addEventListener("offline",chkOffline,false);	
	function chkOnline()
            {
var contenuHtml2 = '';		
contenuHtml2 += ' <div class="dropdown">';
contenuHtml2 += '<i class="fa fa-user-plus icone" aria-hidden="true" style="font-size:22px;" ></i>';
 contenuHtml2 += '<span style=" margin-top:-12px;margin-left:-18px;position:absolute"id="notif_inscri">';
contenuHtml2 += '</span>';
contenuHtml2 += '<div class="dropdown-content">';
	contenuHtml2 +=	'<span id="notifnonlu">';
	contenuHtml2 +=	'</span></div></div>';
document.getElementById("nbajout").innerHTML = contenuHtml2;   
            }
            function chkOffline()
            {   	
			db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
			var contenuHtml2 = '';		
contenuHtml2 += ' <div class="dropdown">';
contenuHtml2 += '<i class="fa fa-user-plus icone" aria-hidden="true" style="font-size:22px;" ></i>';
 contenuHtml2 += '<span style=" margin-top:-12px;margin-left:-18px;position:absolute">';
contenuHtml2 += '</span>';
contenuHtml2 += '<div class="dropdown-content">';
contenuHtml2 += '<li style="list-style: none;display:"><span style="color:#292c2f; font-size:14px;font-weight:bold;"><center>';
if(lang=="fr"){
	contenuHtml2 +=  'Aucune nouvelle demande';	}
	else if (lang == 'ar')
	{contenuHtml2 +=  'لا يوجد طلب إظافة جديد';}
	else {contenuHtml2 +=  'No new add request';}
	contenuHtml2 +=  '</center></span></li>';
	contenuHtml2 +=	'</div></div>';
document.getElementById("nbajout").innerHTML = contenuHtml2;   
			});        
			});        
			}	
});
function notif(){	
 var contenuHtml2 = '';		
contenuHtml2 += ' <div class="dropdown">';
contenuHtml2 += '<i class="fa fa-user-plus icone" aria-hidden="true" style="font-size:22px;" ></i>';
 contenuHtml2 += '<span style=" margin-top:-12px;margin-left:-18px;position:absolute"id="notif_inscri">';
contenuHtml2 += '</span>';
contenuHtml2 += '<div class="dropdown-content">';
	contenuHtml2 +=	'<span id="notifnonlu">';
	contenuHtml2 +=	'</span></div></div>';
document.getElementById("nbajout").innerHTML = contenuHtml2;
 }
/************annuler invitation***************/


function cancel(inviteur, invite) {
   var inviteur = inviteur;
   var invite = invite;
   var dataString = 'id_inviter=' + inviteur+'&id_invited=' + invite;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/annuler_invit.php", dataString,
        function (donnees) {
            location.reload();
        });
}	
/************confirmer invitation***************/

function confirm(inviteur, invited) {
   var inviteur = inviteur;
   var invite = invited;
   var dataString = 'id_inviter=' + inviteur+'&id_invited=' + invite;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/confirmer_invit.php", dataString,
        function (donnees) {
            location.reload();
        });
}


