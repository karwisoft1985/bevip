var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;
function rechercher() {
var partRech=document.getElementById("partenaire").value;	
if(partRech !=''){
	var device=sessionStorage.getItem("device");
	
    var datastring='partRech='+partRech+'&device='+device;
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/recherche_partenaires.php",datastring,
      function (donnees) {
	var contenuHtml = '';
			  if (donnees.users[0].id_user != '') {
			  
			  
			  	contenuHtml += '<div style="width:100%;display:block; padding-top:50px">';
				
                   for (var i = 0; i < donnees.users.length; i++) {
              
                       contenuHtml += '<a href="recherche_part.html?id_user='+donnees.users[i].id_user+'">';
					
					   if (donnees.users[i].photo != '')
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src="http://karwisoft.tn/php_bevip/upload/'+donnees.users[i].photo+'" style="border-radius:100%;width:50px;margin-right:10px;" />';
					   }
					   else
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src= "http://karwisoft.tn/php_bevip/upload/avatar.png" style="border-radius:100%;width:50px;margin-right:10px;"/>';
					   }
					   
					   contenuHtml += donnees.users[i].nom+'';
					   
					   contenuHtml += '</div>';
					
                       contenuHtml += '</a>';
					
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
            document.getElementById("list_partners").innerHTML = contenuHtml;
        });
		}
}

$(document).ready( function () {
setInterval(function(){

    var partRech=document.getElementById("rech_partner").value;
	
	var device=sessionStorage.getItem("device");
	
    var datastring='partRech='+partRech+'&device='+device;
	
	$.getJSON("http://karwisoft.tn/php_bevip/gestion_invitation/affichage_partenaire.php",datastring,
	
	
      function (donnees) {
            var contenuHtml = '';
			  if (donnees.users[0].id_user != 0) {
			  
			  
			  	contenuHtml += '<div style="width:100%;display:block;">';
				
                   for (var i = 0; i < donnees.users.length; i++) {
              
                       contenuHtml += '<a href="recherche_part.html?id_user='+donnees.users[i].id_user+'">';
					
					   if (donnees.users[i].photo != '')
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src="http://karwisoft.tn/php_bevip/upload/'+donnees.users[i].photo+'" style="border-radius:100%;width:50px;margin-right:10px;" />';
					   }
					   else
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;border-bottom:1px solid #ddd;width:100%;display:block;"> <img src= "http://karwisoft.tn/php_bevip/upload/avatar.png" style="border-radius:100%;width:50px;margin-right:10px;"/>';
					   }
					   
					   contenuHtml += donnees.users[i].nom+'';
					   
					   contenuHtml += '<i class="fa fa-chevron-right" style="float:right;margin-top:15px;" aria-hidden="true"></i>';
					   
					   contenuHtml += '</div>';
					
                       contenuHtml += '</a>';
					
					   contenuHtml += '</div>';
					}    

					
					contenuHtml +='</div>';
                }
                else {
				
				
                    contenuHtml += '<div style="text-align:center;">';
					
					contenuHtml += '<br><br><br><img src="assets/img/smartphone.png"  style="width:150px;" /><br><br>';
                    contenuHtml += '<span style="text-transform:uppercase;font-size:20px;color:#000;" >No partners found</span>';
					
                    contenuHtml += '</div>';
					
					
                }
			
            document.getElementById("listpart").innerHTML = contenuHtml;
        });
	},1000);
});
