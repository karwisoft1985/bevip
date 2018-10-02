$(document).ready(function (){
var CheminComplet = window.location.search;
var id_user =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id_user=" )+8 ,CheminComplet.length ));
    var dataString ='id_user='+id_user;
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/profil_partenaire.php", dataString,
        function (donnees) {
            var contenuHtml = '';
            var contenuHtml1 = '';
			if ( donnees.profil[0].photo != '')
				{
				contenuHtml +=  '<img src="http://karwisoft.tn/php_bevip/upload/'+donnees.profil[0].photo+'" width="150px;" style="border-radius:100%;"   />';
				}
				else
				{
				contenuHtml +=  ' <img src="http://karwisoft.tn/php_bevip/upload/avatar.png" width="150px" style="border-radius:100%;" />';
				}
				 contenuHtml1 += '<span style="font-size:20px;text-transform:uppercase;color:#000;">'+donnees.profil[0].nom+'</span><br>';
			if ( donnees.profil[0].poste != '')
				{
			    contenuHtml1 += '<span style="font-size:15px;text-transform:uppercase;color:#000;">'+donnees.profil[0].poste+'</span><br>';
				}
				else
				{
				contenuHtml1 +=  '<br><br>';
				}
				 document.getElementById("img_part").innerHTML = contenuHtml;
				 document.getElementById("profil").innerHTML = contenuHtml1;
			  });
			  });
			  
$(document).ready(function (){
var CheminComplet = window.location.search;
var id_user =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id_user=" )+8 ,CheminComplet.length ));
var device=sessionStorage.getItem("device");
    var dataString ='id_user='+id_user+'&device='+device;
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/verif_invit.php", dataString,
        function (donnees) {

            var contenuHtml = '';
			
			    if ( donnees.invit[0].nb == 0 )
				{
				
				contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:inviter('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">+ Add</button>';
				
				}
				else 
				{
				
				if ( donnees.invit[0].etat== 1  ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#4aab09;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')" >Partner</button>';
				
				}
				
				else if ( donnees.invit[0].etat== 0 &&  donnees.invit[0].invite == id_user ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">Request sent</button>';
				
				}
				
				else if ( donnees.invit[0].etat== 0 &&  donnees.invit[0].inviteur == id_user ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:confirmer('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">Confirm</button>';
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">Cancel</button>';
				
				}
				
				
				}
				
				 document.getElementById("verif_invit").innerHTML = contenuHtml;
			  });
			  });
			  
			  
			  
function inviter(inviteur, invite) {
   var inviteur = inviteur;
   var invite = invite;
   var dataString = 'inviteur=' + inviteur+'&invite=' + invite;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/inviter.php", dataString,
		function (donnees) {
            location.reload();
        });
}
function annuler(inviteur, invite) {
   var inviteur = inviteur;
   var invite = invite;
   var dataString = 'id_inviter=' + inviteur+'&id_invited=' + invite;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/annuler_invit.php", dataString,
        function (donnees) {
            location.reload();
        });
}	
function confirmer(inviteur, invite) {
   var inviteur = inviteur;
   var invite = invite;
   var dataString = 'id_inviter=' + inviteur+'&id_invited=' + invite;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/confirmer_invit.php", dataString,
        function (donnees) {
            location.reload();
        });
}			  