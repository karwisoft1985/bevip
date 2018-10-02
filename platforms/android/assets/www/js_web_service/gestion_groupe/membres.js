var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;

$(document).ready(function () {
var device=sessionStorage.getItem("device");
var CheminComplet = window.location.search;
var id =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id_groupe=" )+10 ,CheminComplet.length ));
var contenuHtml='';
db.transaction(function(tx) {tx.executeSql("select name,categorie from groupe where id_groupe = '" + id + "'", [] ,
							
							function(tx, result) {

									dataset = result.rows;
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var name = item['name'];
										var categorie = item['categorie'];
										}

   var dataString = 'device=' + device+'&name=' + name+'&categorie=' + categorie;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/afficher_partner.php", dataString,
		function (donnees) {
		if(donnees.users[0].id_partner!='')
		{
		contenuHtml +='<div class="scrollmenu" >';
		   for (var i = 0; i < donnees.users.length; i++) {
  contenuHtml +='<a href="recherche_part.html?id_user='+donnees.users[i].id_partner+'">';		   
		 if (donnees.users[i].photo != '')
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;width:100%;display:block;"> <img src="http://karwisoft.tn/php_bevip/upload/'+donnees.users[i].photo+'" style="width:65px;margin-right:10px;" />';
					   }
					   else
					   {
					      contenuHtml +='<div style="padding:10px;text-decoration:none;text-transform:uppercase;font-size:16px;color:#000;width:100%;display:block;"> <img src= "http://karwisoft.tn/php_bevip/upload/avatar.png" style="border-radius:100%;width:50px;margin-right:10px;"/>';
					   }
					   
					   contenuHtml += '<br><span style="font-size:10px">'+donnees.users[i].nom+'</span>';		
  contenuHtml +='</a>';					   
		} 
		contenuHtml +='</div>';
		}
		   else{
		   contenuHtml +='';
		   }
		   
  document.getElementById("members").innerHTML = contenuHtml;
        });
        });
});
});


$(document).ready(function () {
var device=sessionStorage.getItem("device");
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.indexOf( "&nom" ) );
var nom=CheminComplet.substring( CheminComplet.indexOf( "&nom=" )+5 ,CheminComplet.length);
var userLang = navigator.language || navigator.userLanguage;  
var contenuHtml='';
var dataString='name='+nom+'&categorie='+cat+'&device='+device;
       $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/afficher_but.php", dataString,
		function (donnees) {
		if(donnees.groupe[0].id!='')
		{contenuHtml +=' <br>';
		   for (var i = 0; i < donnees.groupe.length; i++) {
		    if(donnees.groupe[i].id_user == donnees.groupe[i].id_utili){
			if(donnees.groupe[i].type=='but'){
			contenuHtml +=' <div style="border: 1px solid #979292;background:#8dc0d1; padding:10px;margin:10px;color:#000"  onmousedown="func(' + donnees.groupe[i].id + ')"  onmouseup="revert(' + donnees.groupe[i].id + ')">';}
			 else if(donnees.groupe[i].type=='projet'){
			contenuHtml +='<a href="tasks_members.html?id='+donnees.groupe[i].id+'&id_group='+donnees.groupe[i].id_group+'&nom='+nom+'&cat='+cat+'"><div onmousedown="func(' + donnees.groupe[i].id + ')"  onmouseup="revert(' + donnees.groupe[i].id + ')" style="border: 1px solid #979292;background:#ff5722; padding:10px;margin:10px; color:#fff">';}
						}	
						else{
			if(donnees.groupe[i].type=='but'){
			contenuHtml +=' <div style="border: 1px solid #979292;background:#8dc0d1; padding:10px;margin:10px;color:#000">';}
			 else if(donnees.groupe[i].type=='projet'){
			contenuHtml +='<a href="tasks_members.html?id='+donnees.groupe[i].id+'&id_group='+donnees.groupe[i].id_group+'&nom='+nom+'&cat='+cat+'"><div style="border: 1px solid #979292;background:#ff5722; padding:10px;margin:10px; color:#fff">';}
						}				 
contenuHtml += '<center><label class="name-user-ent-tasks-bvp">'+donnees.groupe[i].titre+'</label><br>';	
if(donnees.groupe[i].type=='but'){
contenuHtml += '<label style="color: #696969;font-size:12px">'+donnees.groupe[i].date_deb+' -> '+donnees.groupe[i].date_fin+'</label>';	}		  
 else if(donnees.groupe[i].type=='projet'){
contenuHtml += '<label style="color: #bdbdbd;font-size:12px">'+donnees.groupe[i].date_deb+' -> '+donnees.groupe[i].date_fin+'</label>';	}		  
contenuHtml += '</center></div>';
if(donnees.groupe[i].type=='projet'){
contenuHtml += '</a>';
}	
contenuHtml += '<div class="modal fade"  id="myModalmod'+donnees.groupe[i].id+'" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
contenuHtml += '<div class="modal-dialog">';
contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';

contenuHtml += '<i class="fa fa-trash-o" aria-hidden="true" style="float:right; font-size:20px;margin-right:50px;color:#fff" onclick="javascript:showmodalsupp('+donnees.groupe[i].id+');"></i>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
contenuHtml += 'Modifier';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
contenuHtml += 'تعديل ';}
else{contenuHtml += 'Update';}
contenuHtml += '</h4>';
contenuHtml += '</div>';
	
contenuHtml += '<div class="modal-body">';
contenuHtml += '<input type="text"  class="form-control " value="'+donnees.groupe[i].titre+'" style="width:90%;margin:15px;" id="nom'+donnees.groupe[i].id+'" />';
contenuHtml += '<input type="date"  class="form-control " value="'+donnees.groupe[i].date_deb+'" style="width:90%;margin:15px;" id="debut'+donnees.groupe[i].id+'" />';
contenuHtml += '<input type="date"  class="form-control " value="'+donnees.groupe[i].date_fin+'" style="width:90%;margin:15px;"  id="fin'+donnees.groupe[i].id+'" />';
										
contenuHtml += '</div>';
contenuHtml += '<div class="modal-footer">';
 if(userLang=="fr-FR" || userLang=="fr-CA"|| userLang=="fr-BE"|| userLang=="fr-CH"|| userLang=="fr-LU" || userLang=="fr-MC"){
contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right; padding-left:0px; padding-right:0px" onclick="javascript:modification('+donnees.groupe[i].id+');">Enregistrer';}
 else if (userLang == 'ar-EG' || userLang == 'ar-TN' || userLang == 'ar-SA'|| userLang == 'ar-DZ'|| userLang == 'ar-YE'|| userLang == 'ar-JO'|| userLang == 'ar-KW'|| userLang == 'ar-BH'|| userLang == 'ar-QA'|| userLang == 'ar-AE'|| userLang == 'ar-LB'|| userLang == 'ar-SY'|| userLang == 'ar-MA'|| userLang == 'ar-OM'|| userLang == 'ar-IQ'|| userLang == 'ar-LY'){
contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.groupe[i].id+');">حفظ';}
else{contenuHtml += '<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification('+donnees.groupe[i].id+');">Save';}
contenuHtml += '</button>';
 contenuHtml += ' </div> </div></div></div>';	

contenuHtml += ' <div class="modal fade" id="myModalSupp'+donnees.groupe[i].id+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

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
												  contenuHtml += '<b> '+donnees.groupe[i].titre+'</b> ?<br><br></center>';
												  
				contenuHtml += '<center><a class="btn"  style="background-color:#ff5722; color:#fff; margin-right:10px" href="#" onclick="javascript:Suppression('+donnees.groupe[i].id+')">';
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
		   
  document.getElementById("taches").innerHTML = contenuHtml;
        });
});
function modification(id){
   var name = document.getElementById("nom" + id).value;
   var date_deb = document.getElementById("debut" + id).value;
   var date_fin = document.getElementById("fin" + id).value;
var dataString='name='+name+'&id='+id+'&date_deb='+date_deb+'&date_fin='+date_fin;
   $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/modif_tache.php", dataString,
function (donnees) {location.reload();});
}
function Suppression(id){
var dataString='id='+id;
   $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/supprimer_tache.php", dataString,
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
$(document).ready( function () {
var device=sessionStorage.getItem("device");
var CheminComplet = window.location.search;
var id =parseInt(CheminComplet.substring( CheminComplet.indexOf( "id=" )+3 ,CheminComplet.length ));
var nom =CheminComplet.substring( CheminComplet.indexOf( "&nom=" )+5 ,CheminComplet.length );
var cat=CheminComplet.substring( CheminComplet.indexOf( "&cat=" )+5 , CheminComplet.indexOf( "&nom" ));
var lang = navigator.language || navigator.language; 
contenuHtml = '';
contenuHtml += '<a  href="" data-toggle="modal" data-target="#myModalobj"  style="margin-left:10%">';
 contenuHtml += ' <i class="fa fa-plus" aria-hidden="true" style="color:#000;font-size:20px;"></i> ';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  '<label style="color:#000;font-size:16px;">Ajouter but</label>';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  '<label style="color:#000;font-size:16px;">أضف هدف</label>';}
					 else {contenuHtml +=  '<label style="color:#000;font-size:16px;">Add goal</label>';}
  contenuHtml += '</a>';
  
   contenuHtml += '<div class="modal fade"  id="myModalobj" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
 contenuHtml += '<div class="modal-dialog">';
 contenuHtml += '<div class="modal-content"><div class="modal-header">';
 contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU" || lang=="fr-MC"){
 contenuHtml +='Ajout but';}
 else if (lang == 'ar-EG' || lang == 'ar-TN' || lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY'){
 contenuHtml +='إضافة هدف';}
else{ contenuHtml +='add goal';}
 contenuHtml +='</h4>';
 contenuHtml += '</div>';
	var d = new Date ();
	var date= d.toISOString().substring(0, 10);
	var j=d.getDate()+1;
	if(j<10){
	j="0"+j;
	}
	var m=d.getMonth()+1;
	if(m<10){
	m="0"+m;
	}
	var tomorrow=d.getFullYear()+"-"+m+"-"+j;
 contenuHtml += '<div class="modal-body">';
 contenuHtml += '<label><span id="titre"></span></label><br>';
contenuHtml += '<input type="text" class="form-control" style="width:100%;"  id="title" /><br><br>';
contenuHtml += '<label><span id="date_deb"></span></label><br>';
contenuHtml += '<input type="date" id="date_debut" value="'+date+'" class="input-plan-tasks"  style="width:100%;" /> <br><br>';
contenuHtml += ' <label><span id="date_fin"></span></label><br>';
contenuHtml += '<input type="date" id="date-fin" value="'+tomorrow+'" class="input-plan-tasks" style="width:100%;" /> <br><br>';									
 contenuHtml +='</div>';
 contenuHtml += '<div class="modal-footer">';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU" || lang=="fr-MC"){
 contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right; padding-left:0px; padding-right:0px" onclick="javascript:ajt_but();">Enregistrer';}
 else if (lang == 'ar-EG' || lang == 'ar-TN' || lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY'){
 contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:ajt_but();">حفظ';}
else{ contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:ajt_but();">Save';}
 contenuHtml += '</button>';
  contenuHtml += ' </div> </div></div></div>';	
  
contenuHtml += '<a  href="" data-toggle="modal" data-target="#myModalprojet" style="float:right; margin-right:10%">';
 contenuHtml += ' <i class="fa fa-plus" aria-hidden="true" style="color:#000;font-size:20px;"></i> ';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU"){
				contenuHtml +=  '<label style="color:#000;font-size:16px;">Ajouter projet</label>';	}
   else if (lang == 'ar-EG' || lang == 'ar-TN'|| lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY')
   {contenuHtml +=  '<label style="color:#000;font-size:16px;">أضف مشروع</label>';}
					 else {contenuHtml +=  '<label style="color:#000;font-size:16px;">Add project</label>';}
  contenuHtml += '</a>';
   
    contenuHtml += '<div class="modal fade"  id="myModalprojet" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
 contenuHtml += '<div class="modal-dialog">';
 contenuHtml += '<div class="modal-content"><div class="modal-header">';
 contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU" || lang=="fr-MC"){
 contenuHtml +='Ajout projet';}
 else if (lang == 'ar-EG' || lang == 'ar-TN' || lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY'){
 contenuHtml +='إضافة مشروع';}
else{ contenuHtml +='add project';}
 contenuHtml +='</h4>';
 contenuHtml += '</div>';
 contenuHtml += '<div class="modal-body">';
 contenuHtml += '<label><span id="titr"></span></label><br>';
contenuHtml += '<input type="text" class="form-control" style="width:100%;"  id="titl" /><br><br>';
contenuHtml += '<label><span id="datedeb"></span></label><br>';
contenuHtml += '<input type="date" id="datedebut" value="'+date+'" class="input-plan-tasks"  style="width:100%;" /> <br><br>';
contenuHtml += ' <label><span id="datefin"></span></label><br>';
contenuHtml += '<input type="date" id="datfin" value="'+tomorrow+'" class="input-plan-tasks" style="width:100%;" /> <br><br>';									
 contenuHtml +='</div>';
 contenuHtml += '<div class="modal-footer">';
 if(lang=="fr-FR" || lang=="fr-CA"|| lang=="fr-BE"|| lang=="fr-CH"|| lang=="fr-LU" || lang=="fr-MC"){
 contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right; padding-left:0px; padding-right:0px" onclick="javascript:ajt_projet();">Enregistrer';}
 else if (lang == 'ar-EG' || lang == 'ar-TN' || lang == 'ar-SA'|| lang == 'ar-DZ'|| lang == 'ar-YE'|| lang == 'ar-JO'|| lang == 'ar-KW'|| lang == 'ar-BH'|| lang == 'ar-QA'|| lang == 'ar-AE'|| lang == 'ar-LB'|| lang == 'ar-SY'|| lang == 'ar-MA'|| lang == 'ar-OM'|| lang == 'ar-IQ'|| lang == 'ar-LY'){
 contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:ajt_projet();">حفظ';}
else{ contenuHtml +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:ajt_projet();">Save';}
 contenuHtml += '</button>';
  contenuHtml += ' </div> </div></div></div>';	
   
              document.getElementById("ajt_obj").innerHTML = contenuHtml;
			  });
function ajt_but(){
   var titre = document.getElementById("title").value;
   var date_debut = document.getElementById("date_debut").value;
   var date_fin = document.getElementById("date-fin").value;
	var device=sessionStorage.getItem("device");
	var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.indexOf( "&nom" ) );
var nom=CheminComplet.substring( CheminComplet.indexOf( "&nom=" )+5 ,CheminComplet.length);
var dataString='name='+nom+'&categorie='+cat+'&titre='+titre+'&date_deb='+date_debut+'&date_fin='+date_fin+'&device='+device;
   $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajout_but.php", dataString,
function (donnees) {location.reload();});
}
function ajt_projet(){
   var titre = document.getElementById("titl").value;
   var date_debut = document.getElementById("datedebut").value;
   var date_fin = document.getElementById("datfin").value;
	var device=sessionStorage.getItem("device");
	var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.indexOf( "&nom" ) );
var nom=CheminComplet.substring( CheminComplet.indexOf( "&nom=" )+5 ,CheminComplet.length);
var dataString='name='+nom+'&categorie='+cat+'&titre='+titre+'&date_deb='+date_debut+'&date_fin='+date_fin+'&device='+device;
  $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajout_projet.php", dataString,
function (donnees) {location.href="tasks_members.html?id="+donnees.group+"&nom="+nom+"&cat="+cat;});
}