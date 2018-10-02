$(document).ready(function () {
var device=sessionStorage.getItem("device");
var CheminComplet = window.location.search;
var nom =CheminComplet.substring( CheminComplet.indexOf( "&nom=" )+5 ,CheminComplet.indexOf( "&cat" ) );
var cat=CheminComplet.substring( CheminComplet.indexOf( "&cat=" )+5 ,CheminComplet.length);
var lang = navigator.language || navigator.language; 
var contenuHtml='';
   var dataString = 'device=' + device+'&name=' + nom+'&categorie=' + cat;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/afficher_partner.php", dataString,
		function (donnees) {
		if(donnees.users[0].id_partner!='')
		{
		contenuHtml +='<select type="text" id="membr" class="form-control">';
		 for (var i = 0; i < donnees.users.length; i++) {
contenuHtml +='<option value="'+donnees.users[i].id_partner+'">'+donnees.users[i].nom+'</option>';
 contenuHtml += '<br><span style="font-size:10px"></span></div>';		
  contenuHtml +='</a>';		  
		} 
		contenuHtml +='</select>';
		}
		   else{
		    if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  '<label style="color:#000;font-size:16px;">Aucun membre</label>';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  '<label style="color:#000;font-size:16px;">لا يوجد أي عضو</label>';}
					 else {contenuHtml +=  '<label style="color:#000;font-size:16px;">No member</label>';}
		   }
		   
  document.getElementById("member").innerHTML = contenuHtml;
        });
});
function ajout_tache(){
var CheminComplet = window.location.search;
var id_group =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id_group=" )+9 ,CheminComplet.length ));
var id =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id=" )+3 ,CheminComplet.length ));
   var membre = document.getElementById("membr").value;
   var titre = document.getElementById("title").value;
	var device=sessionStorage.getItem("device");
var dataString='id='+id+'&titre='+titre+'&device='+device+'&membre='+membre;
 $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajout_task.php", dataString,
function (donnees) {location.reload();});
}
$(document).ready(function () {
var userLang = navigator.language || navigator.userLanguage;  
var device=sessionStorage.getItem("device");
var CheminComplet = window.location.search;
var id =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id=" )+3 ,CheminComplet.length ));
var contenuHtml='';
var dataString='id='+id+'&device='+device;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/afficher_tasks.php", dataString,
		function (donnees) {
		if(donnees.task[0].id!='')
		{contenuHtml +=' <br>';
		   for (var i = 0; i < donnees.task.length; i++) {
		   if(donnees.task[i].user == donnees.task[i].name_device){
		   	contenuHtml += '<div class="tasks-bvp ent-partage-bvp"  onmousedown="func(' + donnees.task[i].id + ')"  onmouseup="revert(' + donnees.task[i].id + ')">';
			}
			else{
			contenuHtml +=' <div class="tasks-bvp ent-partage-bvp">';}
contenuHtml += '<center><label class="name-user-ent-tasks-bvp">'+donnees.task[i].titre+'</label><br>';	
contenuHtml += '<label class="time-user-ent-tasks-bvp">'+donnees.task[i].membre+'</label>';		
contenuHtml += '<div class="modal fade"  id="myModalmod'+donnees.task[i].id+'" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
contenuHtml += '<div class="modal-dialog">';
contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';

contenuHtml += '<i class="fa fa-trash-o" aria-hidden="true" style="float:right; font-size:20px;margin-right:50px;color:#fff" onclick="javascript:showmodalsupp('+donnees.task[i].id+');"></i>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
contenuHtml += 'Modifier';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
contenuHtml += 'تعديل ';}
else{contenuHtml += 'Update';}
contenuHtml += '</h4>';
contenuHtml += '</div>';
	
contenuHtml += '<div class="modal-body">';
contenuHtml += '<input type="text"  class="form-control " value="'+donnees.task[i].titre+'" style="width:90%;margin:15px;" name="titre" id="titre'+donnees.task[i].id+'" />';
										
contenuHtml += '</div>';
contenuHtml += '<div class="modal-footer">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right; padding-left:0px; padding-right:0px" onclick="javascript:modification('+donnees.task[i].id+');">Enregistrer';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.task[i].id+');">حفظ';}
else{contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.task[i].id+');">Save';}
contenuHtml += '</button>';
 contenuHtml += ' </div> </div></div></div>';	

contenuHtml += ' <div class="modal fade" id="myModalSupp'+donnees.task[i].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    contenuHtml += '<div class="modal-dialog" role="document">';
  
                                    contenuHtml += '<div class="modal-content"><div class="modal-header">';
									
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
contenuHtml += 'Supprimer';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
contenuHtml += 'حذف ';}
else{contenuHtml += 'Delete';}
contenuHtml += '</h4>';
contenuHtml += '</div>';
		
contenuHtml += '<div class="modal-body">';
contenuHtml += '<center>';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													contenuHtml += 'Voulez-vous vraiment supprimer';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
													contenuHtml += 'هل تريد حقا حذف';}
													else{contenuHtml += 'Do you really want to delete';}
												  contenuHtml += '<b> '+donnees.task[i].titre+'</b> ?<br><br></center>';
												  
				contenuHtml += '<center><a class="btn"  style="background-color:#ff5722; color:#fff; margin-right:10px" href="#" onclick="javascript:Suppression('+donnees.task[i].id+')">';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													contenuHtml += 'Oui';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){

													contenuHtml += 'نعم';}
													else{contenuHtml += 'Yes';}
			 contenuHtml += '</a>';

			 contenuHtml += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" data-dismiss="modal">';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													contenuHtml += 'Non';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
													contenuHtml += 'لا';}
													else{contenuHtml += 'No';}
			 contenuHtml += '</a></center>';
			 contenuHtml += '<br>';
											     
	
        
                                                contenuHtml += '</div>';
	  
	  
                                          contenuHtml += '</div>';
										  
                                    contenuHtml += '</div>';
									
                               contenuHtml += '</div>'; 

            contenuHtml += '</div>'; 		
		} 
		}
		   else{
		   contenuHtml +='';
		   }
		   
  document.getElementById("list_tasks").innerHTML = contenuHtml;
        });
});
function modification(id){
   var name = document.getElementById("titre" + id).value;
var dataString='name='+name+'&id='+id;
   $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/modif_task.php", dataString,
function (donnees) {location.reload();});
}
function Suppression(id){
var dataString='id='+id;
   $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/supprimer_task.php", dataString,
function (donnees) {location.reload();});
}

var timer;
var istrue = false;
var delay = 300; // how much long u have to hold click in MS
function func(id_task)
{
 var id_task = id_task;
   istrue = true;
   timer = setTimeout(function(){ makeChange(id_task);},delay);
}

function makeChange(id_task)
{  var id_task = id_task;
      if(timer)
      clearTimeout(timer);
      
      if(istrue)
      {
            // rest of your code
	$("#myModalmod" +id_task).modal("show");

      }
}
function revert(id_task)
{ 
 var id_task = id_task;
   istrue =false;
}
function showmodalmodif(id_task){
$("#myModalmod" +id_task).modal("show");
} 
function showmodalsupp(id_task){
$("#myModalmod" +id_task).modal("hide");
$("#myModalSupp" +id_task).modal("show");
} 