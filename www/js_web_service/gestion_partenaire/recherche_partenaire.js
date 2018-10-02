var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;
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
				 document.getElementById("profil_part").innerHTML = contenuHtml1;
			  });
			  });
			  
$(document).ready(function (){
var CheminComplet = window.location.search;
var id_user =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id_user=" )+8 ,CheminComplet.length ));
var device=sessionStorage.getItem("device");
    var dataString ='id_user='+id_user+'&device='+device;
	var lang = navigator.language || navigator.language; 
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/verif_invit.php", dataString,
        function (donnees) {

            var contenuHtml = '';
			
			    if ( donnees.invit[0].nb == 0 )
				{
				
				contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:inviter('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">';			
				if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  '+ Ajouter';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  'أضف +';}
					 else {contenuHtml +=  '+ Add';}
				contenuHtml +=  '</button>';
				
				}
				else 
				{
				
				if ( donnees.invit[0].etat== 1  ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#4aab09;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')" >';
					if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  'Partenaire';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  'شريك';}
					 else {contenuHtml +=  'Partner';}
				contenuHtml +=  '</button>';
				
				}
				
				else if ( donnees.invit[0].etat== 0 &&  donnees.invit[0].invite == id_user ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">';
					if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  'Demande envoyée';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  'تم ارسال الطلب';}
					 else {contenuHtml +=  'Request sent';}
				contenuHtml +=  '</button>';
				
				}
				
				else if ( donnees.invit[0].etat== 0 &&  donnees.invit[0].inviteur == id_user ){
				
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;margin-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:confirmer('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">';
				if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  'Confirmer';	}
				else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
				{contenuHtml +=  'موافقة';}
				else {contenuHtml +=  'Confirm';}
				contenuHtml +=  '</button>';
                contenuHtml +=  '<button type="button" style="margin-left:20px;margin-right:20px;padding-left:30px;padding-right:30px;padding-top:15px;padding-bottom:15px;background:#ff5722;color:#fff;font-weight:bold;border:none;text-decoration:none;text-transform:uppercase;width:85%;" onclick="javascript:annuler('+ donnees.invit[0].inviteur +','+ donnees.invit[0].invite +')">';
				if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  'Annuler';	}
				else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
				{contenuHtml +=  'رفض';}
					 else {contenuHtml +=  'Cancel';}
				contenuHtml +=  '</button>';
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

function part_group() {
var partRech=document.getElementById("partenaire").value;	
if(partRech !=''){
	var device=sessionStorage.getItem("device");
    var datastring='partRech='+partRech+'&device='+device;
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/partenaire_groupe.php",datastring,
      function (donnees) {
	var contenuHtml = '';
			  if (donnees.partners[0].id_partner != 0) {
			  
			  
			  	contenuHtml += '<div style="width:100%;display:block; padding-top:50px">';
				
                   for (var i = 0; i < donnees.partners.length; i++) {
              
                      if (donnees.partners[i].photo != '')
					   {
					      contenuHtml +='<div  onclick="aj_part_grp('+donnees.partners[i].id_partner+')" style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src="http://karwisoft.tn/php_bevip/upload/'+donnees.partners[i].photo+'" style="border-radius:100%;width:50px;margin-right:10px;" />';
					   }
					   else
					   {
					      contenuHtml +='<div onclick="aj_part_grp('+donnees.partners[i].id_partner+')" style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src= "http://karwisoft.tn/php_bevip/upload/avatar.png" style="border-radius:100%;width:50px;margin-right:10px;"/>';
					   }
					   
					   contenuHtml += donnees.partners[i].partner+'';
					   
					   contenuHtml += '</div>';
					
					   contenuHtml += '</div>';
					}    

					
					contenuHtml +='</div>';
                }
                else {
				
				
                    contenuHtml += '<div style="text-align:center; padding-top:50px">';
					
					contenuHtml += '<br><br><br><img src="assets/img/smartphone.png"  style="width:150px;" /><br><br>';
                    contenuHtml += '<span style="text-transform:uppercase;font-size:20px;color:#000;" >';
					var langue = navigator.language || navigator.language; 
if(langue=="fr-FR" || langue=="fr-CA"|| langue=="fr-BE"|| langue=="fr-CH"|| langue=="fr-LU"){
					 contenuHtml += 'Aucun partenaire trouvé';
}
   else if (langue == 'ar-EG' || langue == 'ar-TN'|| langue == 'ar-SA'|| langue == 'ar-DZ'|| langue == 'ar-YE'|| langue == 'ar-JO'|| langue == 'ar-KW'|| langue == 'ar-BH'|| langue == 'ar-QA'|| langue == 'ar-AE'|| langue == 'ar-LB'|| langue == 'ar-SY'|| langue == 'ar-MA'|| langue == 'ar-OM'|| langue == 'ar-IQ'|| langue == 'ar-LY'){
 contenuHtml += 'لا يوجد شريك';
}
					 else {
					 contenuHtml += 'No partner found';
        }
					
					contenuHtml += '</span>';
					
                    contenuHtml += '</div>';
					
					
                }
            document.getElementById("partners_group").innerHTML = contenuHtml;
        });
		}
}

function aj_part_grp(id_user) {
var CheminComplet = window.location.search;
var id =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id=" )+3 ,CheminComplet.length ));
db.transaction(function(tx) {tx.executeSql("select name,categorie from groupe where id_groupe = '" + id + "'", [] ,

		
								function(tx, result) {

									dataset = result.rows;
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var name = item['name'];
										var categorie = item['categorie'];
										}
var device=sessionStorage.getItem("device");
   var dataString = 'id_user=' + id_user+'&device=' + device+'&name=' + name+'&categorie=' + categorie;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajouter_partner.php", dataString,
		function (donnees) {
		document.getElementById("aj_part_grp").style.display="block";
		setTimeout(function(){ location.reload(); }, 3000);
            
        });
        });
});
}