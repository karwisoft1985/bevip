var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;

function ajout_groupe(){

var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
var name=document.getElementById("grp_name").value;
var sync=0;
var etat=0;
var reqaj = "insert or replace into groupe (name,categorie,sync, etat) values ('"+ name+ "','"+ cat+ "','"+ sync+ "','"+ etat+ "')";
									db.transaction(function(tx) {
							           tx.executeSql(reqaj, []);
									 });
 $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajout_groupe.php", dataString,
                                        function (donnees) {
										 location.reload(); 
										 var req2 = "update groupe set sync= 1 where id_groupe = '" + id_groupe +"' ";									
									      tx.executeSql(req2, []);
										});

}


$(document).ready(function () {
var CheminComplet = window.location.search;
var categorie =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length ); 
var userLang = navigator.language || navigator.userLanguage;  
var device=sessionStorage.getItem("device");
 var dataString='categorie='+categorie+'&device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/affichage_groupe.php", dataString,
function (donnees) {
//db.transaction(function(tx) {tx.executeSql("select * from groupe where categorie = '" + categorie + "' and etat=0", [] ,
		
								//function(tx, result) {
                                    var div='';
									//dataset = result.rows;
									//if (dataset.length > 0) {
									if (donnees.groupe[0].id_groupe != '') {
									for (var i = 0; i < donnees.groupe.length; i++) {
							            div += '<a  onmousedown="func(' + donnees.groupe[i].id_groupe + ')"  onmouseup="revert(' + donnees.groupe[i].id_groupe + ')" href="detail_group.html?cat='+donnees.groupe[i].categorie+'&nom=' + donnees.groupe[i].nom+ '">';
                                        div += '<div  style="padding:5px;background:#d9d9d9;margin:10px;display:block;color:#000;height:110px;border-radius:5px;" > ';
									  
			                             if(donnees.groupe[i].categorie=='Personnel'){
										 
				                         div += ' <img src="assets/img/cath-tasks/personel.jpg" width="100px;"  style="display:inline;float:left;"/>';
										 
										 }
										 
										 
				                         else if(donnees.groupe[i].categorie=='Sociale'){
										 
				                         div += ' <img src="assets/img/cath-tasks/social.jpg" width="100px;" style="display:inline;float:left;"/>';
										 
										 }
										 
										 
				                         else if(donnees.groupe[i].categorie=='Familiale'){
										 
				                         div += ' <img src="assets/img/cath-tasks/familial.jpg"  width="100px;" style="display:inline;float:left;"/>';
										 
										 }
										 
										 
				                         else if(donnees.groupe[i].categorie=='Professionnel'){
										 
				                         div += ' <img src="assets/img/cath-tasks/professionel.jpg" width="100px;"  style="display:inline;float:left;"/>';
										 
										 }
										 
								         div += '<div style="display:inline;margin-left:13px;font-weight:bold;font-size:16px;">'+donnees.groupe[i].nom+' <br>';
var nb= donnees.groupe[i].nombre+1;									 
										 div += '<span style="font-size:12px;margin-left:13px;font-weight:normal;">'+nb+' ';
										  if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
div +='membres';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
div +='أعضاء';}
else{div +='members';}
										  div += '</span><br>';
										 div += '<span style="font-size:12px;margin-left:13px;font-weight:normal;">'+donnees.groupe[i].nb_taches+' ';
										 									  if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
div +='tâches';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
div +='مهام';}
else{div +='tasks';}
										 div += '</span><br>';
										 div += '<span style="margin-left:13px;float:right;margin-top:-55px;margin-right:10px;"><i class="fa fa-angle-down" aria-hidden="true"></i></span>';
										 div += '</div></div></div>';
				                         div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				                         div += '</div></a>';
div += '<div class="modal fade"  id="myModalmod' + donnees.groupe[i].id_groupe + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';

div += '<i class="fa fa-trash-o" aria-hidden="true" style="float:right; font-size:20px;margin-right:50px;color:#fff" onclick="javascript:showmodalsupp('+donnees.groupe[i].id_groupe+');"></i>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
div +='Modifier';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
div +='تعديل ';}
else{div +='Update';}
div +='</h4>';
div += '</div>';
div += '<div class="modal-body">';
div += '<input type="text"  class="form-control " value="'+donnees.groupe[i].nom+'" style="width:90%;margin:15px;" name="titre" id="titre' + donnees.groupe[i].id_groupe + '" />';
div +='</div>';
div += '<div class="modal-footer">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
div +='<button type="button" class="btn" style="color:#fff;float:right; padding-left:0px; padding-right:0px" onclick="javascript:modification('+donnees.groupe[i].id_groupe+');">Enregistrer';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
div +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.groupe[i].id_groupe+');">حفظ';}
else{div +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.groupe[i].id_groupe+');">Save';}
div += '</button>';
 div += ' </div> </div></div></div>';	
div += ' <div class="modal fade" id="myModalSupp'+ donnees.groupe[i].id_groupe +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
div +='Supprimer';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
div +='حذف ';}
else{div +='Delete';}
div +='</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
div += '<center>';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													div +='Voulez-vous vraiment supprimer';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
													div +='هل تريد حقا حذف';}
													else{div +='Do you really want to delete';}
												  div += '<b> '+donnees.groupe[i].nom+'</b> ?<br><br></center>';
												  
				div += '<center><a class="btn"  style="background-color:#ff5722; color:#fff; margin-right:10px" href="#" onclick="javascript:Suppression('+ donnees.groupe[i].id_groupe +')">';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													div +='Oui';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){

													div +='نعم';}
													else{div +='Yes';}
			 div +='</a>';

			 div += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" data-dismiss="modal">';
												if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
													div +='Non';}
													else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
													div +='لا';}
													else{div +='No';}
			 div +='</a></center>';
			 div +='<br>';
											     
	
        
                                                div += '</div>';
	  
	  
                                          div += '</div>';
										  
                                    div += '</div>';
									
                               div += '</div>'; 
}
									
									}
									else {
									 div += '';
									}
								
								   document.getElementById("listgroup").innerHTML = div;
							
								//});
			});
	
});


function modification(id_groupe){

   var id_groupe = id_groupe;
   var titre = document.getElementById("titre" + id_groupe).value;
   var device=sessionStorage.getItem("device");
var dataString='name='+titre+'&device='+device+'&id_groupe='+id_groupe;							
 $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/modifier_groupe.php", dataString,
   function (donnees) {  location.reload(); });				
									
}
function Suppression(id_groupe){
   var id_groupe = id_groupe;
   var device=sessionStorage.getItem("device");
var dataString='id_groupe='+id_groupe+'&device='+device;							
 $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/supprimer_groupe.php", dataString,
   function (donnees) {  location.reload(); });		
}