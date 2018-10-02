$(document).ready(function () {
d = new Date ();
var date= d.toISOString().substring(0, 10);
var device=sessionStorage.getItem("device");
var dataString='date='+date+'&device='+device;
    $.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/afficher_tache.php", dataString,
        function (donnees) {

            var contenuHtml = '';
        
			 if (donnees.tache[0].id_tache != 0) {
            for (var i = 0; i < donnees.tache.length; i++) {
 contenuHtml += '<a  onmousedown="func(' + donnees.tache[i].id_tache + ')"  onmouseup="revert(' + donnees.tache[i].id_tache + ')">';
  contenuHtml += '<div class="tasks-bvp"> <div class="ent-partage-bvp">';
			     if(donnees.tache[i].categorie=='Personnel'){
				contenuHtml += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Sociale'){
				contenuHtml += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Familiale'){
				contenuHtml += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Professionnel'){
				contenuHtml += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
				 
				contenuHtml += ' <label class="name-user-ent-tasks-bvp">'+donnees.tache[i].titre+'</label><br>';
				 
				 contenuHtml += '<label class="time-user-ent-tasks-bvp">'+donnees.tache[i].heure+' h</label>';
				 
				contenuHtml += '<span class="dropdown">';
				contenuHtml += '<i class="fa fa-caret-down" style="color:#979292;float:right;font-size:12px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				contenuHtml += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				contenuHtml += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+donnees.tache[i].id_tache+');"><center>Update</center></li>';
				contenuHtml += '<li onclick="javascript:showmodalsupp('+donnees.tache[i].id_tache+');"><center>Delete</center></li>';
				contenuHtml += '</ul></span>';
				contenuHtml += '</div></div>';
				contenuHtml += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				contenuHtml += '</div></a>';
				/********************Modal modification********************/
	contenuHtml += '<div class="modal fade"  id="myModalmod' + donnees.tache[i].id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
contenuHtml += '<div class="modal-dialog">';
contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">Update task</h4>';
contenuHtml += '</div>';
		
contenuHtml += '<div class="modal-body"><input type="text"  class="form-control " value="'+donnees.tache[i].titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + donnees.tache[i].id_tache + '" /></div>';
		
contenuHtml += ' <div class="modal-body"><input type="time" value="'+donnees.tache[i].heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + donnees.tache[i].id_tache + '" /> </div>';
contenuHtml += '<div class="modal-footer"> <button type="button" class="btn" style="color:#fff" onclick="javascript:modification('+donnees.tache[i].id_tache+');">Save</button>';
       contenuHtml += ' </div> </div></div></div>';	
/*********************Modal suppression**************************/	  
contenuHtml += ' <div class="modal fade" id="myModalSupp'+ donnees.tache[i].id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    contenuHtml += '<div class="modal-dialog" role="document">';
  
                                          contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">Delete task</h4>';
contenuHtml += '</div>';
		
contenuHtml += '<div class="modal-body">';
												
												  contenuHtml += 'Do you really want to delete this task <b>'+donnees.tache[i].titre+' </b>?<br><br>';
												  
											     
												  contenuHtml += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">No </a><span style="padding-right:15%"></span>';
												 
			 contenuHtml += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+donnees.tache[i].id_tache+')">Yes</a></center>';
												 
												 
	  
        
                                                contenuHtml += '</div>';
	  
	  
                                          contenuHtml += '</div>';
										  
                                    contenuHtml += '</div>';
									
                               contenuHtml += '</div>'; 

}
}
                else {
                  
                    contenuHtml += '<div class="categorie-bvp"><div class="item-categorie-bvp">No tasks</div></div>';
                }
				
           
            document.getElementById("listtache").innerHTML = contenuHtml;
			
        });
});
function changertache(type){
d = new Date ();
var date= d.toISOString().substring(0, 10);
var device=sessionStorage.getItem("device");
var dataString='date='+date+'&device='+device+'&type='+type;
    $.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/changer_tache.php", dataString,
        function (donnees) {

            var contenuHtml = '';
        
			 if (donnees.tache[0].id_tache != 0) {
            for (var i = 0; i < donnees.tache.length; i++) {
 contenuHtml += '<a  onmousedown="func(' + donnees.tache[i].id_tache + ')"  onmouseup="revert(' + donnees.tache[i].id_tache + ')">';
  contenuHtml += '<div class="tasks-bvp"> <div class="ent-partage-bvp">';
			     if(donnees.tache[i].categorie=='Personnel'){
				contenuHtml += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Sociale'){
				contenuHtml += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Familiale'){
				contenuHtml += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				else if(donnees.tache[i].categorie=='Professionnel'){
				contenuHtml += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
				 
				contenuHtml += ' <label class="name-user-ent-tasks-bvp">'+donnees.tache[i].titre+'</label><br>';
				 
				 contenuHtml += '<label class="time-user-ent-tasks-bvp">'+donnees.tache[i].heure+' h</label>';
				 
				contenuHtml += '<span class="dropdown">';
				contenuHtml += '<i class="fa fa-caret-down" style="color:#979292;float:right;font-size:12px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				contenuHtml += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				contenuHtml += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+donnees.tache[i].id_tache+');"><center>Update</center></li>';
				contenuHtml += '<li onclick="javascript:showmodalsupp('+donnees.tache[i].id_tache+');"><center>Delete</center></li>';
				contenuHtml += '</ul></span>';
				contenuHtml += '</div></div>';
				contenuHtml += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				contenuHtml += '</div></a>';
				/********************Modal modification********************/
	contenuHtml += '<div class="modal fade"  id="myModalmod' + donnees.tache[i].id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
contenuHtml += '<div class="modal-dialog">';
contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">Update task</h4>';
contenuHtml += '</div>';
		
contenuHtml += '<div class="modal-body"><input type="text"  class="form-control " value="'+donnees.tache[i].titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + donnees.tache[i].id_tache + '" /></div>';
		
contenuHtml += ' <div class="modal-body"><input type="time" value="'+donnees.tache[i].heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + donnees.tache[i].id_tache + '" /> </div>';
contenuHtml += '<div class="modal-footer"> <button type="button" class="btn" style="color:#fff" onclick="javascript:modification('+donnees.tache[i].id_tache+');">Save</button>';
       contenuHtml += ' </div> </div></div></div>';	
/*********************Modal suppression**************************/  
contenuHtml += ' <div class="modal fade" id="myModalSupp'+ donnees.tache[i].id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    contenuHtml += '<div class="modal-dialog" role="document">';
  
                                          contenuHtml += '<div class="modal-content"><div class="modal-header">';
contenuHtml += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
contenuHtml += '  <h4 class="modal-title" id="myModalLabel">Delete task</h4>';
contenuHtml += '</div>';
		
contenuHtml += '<div class="modal-body">';
												
												  contenuHtml += 'Do you really want to delete this task <b>'+donnees.tache[i].titre+' </b>?<br><br>';
												  
											     
												  contenuHtml += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">No </a><span style="padding-right:15%"></span>';
												 
			 contenuHtml += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+donnees.tache[i].id_tache+')">Yes</a></center>';
												 
												 
	  
        
                                                contenuHtml += '</div>';
	  
	  
                                          contenuHtml += '</div>';
										  
                                    contenuHtml += '</div>';
									
                               contenuHtml += '</div>'; 

}
}
                else {
                  
                    contenuHtml += '<div class="categorie-bvp"><div class="item-categorie-bvp">No tasks</div></div>';
                }
				
           
            document.getElementById("listtache").innerHTML = contenuHtml;
			});
}
function modification(id_tache) {
   var id_tache = id_tache;
   var titre = document.getElementById("titre" + id_tache).value;
   var heure = document.getElementById("heure" + id_tache).value;
   d = new Date ();
	var date= d.toISOString().substring(0, 10);
   var dataString = 'id_tache=' + id_tache +'&titre=' + titre+'&heure=' + heure+'&date=' + date ;
	 $.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/modifier_tache.php", dataString,
        function (donnees) {
            location.reload();
        });
   }
   
   function Suppression(id_tache){

var dataString ='id_tache='+id_tache;


$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/supprimer_tache.php", dataString,
        function (donnees) {
		
	             location.reload();
		
		});


}

var timer;
var istrue = false;
var delay = 300; // how much long u have to hold click in MS
function func(id_tache)
{  var id_tache = id_tache;
   istrue = true;
   timer = setTimeout(function(){ makeChange(id_tache);},delay);
}

function makeChange(id_tache)
{  var id_tache = id_tache;
      if(timer)
      clearTimeout(timer);
      
      if(istrue)
      {
            // rest of your code
	$("#myModalmod" +id_tache).modal("show");

      }
}
function revert(id_tache)
{ 
 var id_tache = id_tache;
   istrue =false;
}
function showmodalmodif(id_tache){
$("#myModalmod" +id_tache).modal("show");
} 
function showmodalsupp(id_tache){
$("#myModalSupp" +id_tache).modal("show");
} 
function ajout_tache() {

var titre=document.getElementById("titre").value;

var categorie=document.getElementById("categorie").value;

var date=document.getElementById("date").value;

var heure=document.getElementById("heure").value;

var device=sessionStorage.getItem("device");


var dataString='titre='+titre+'&categorie='+categorie+'&date='+date+'&heure='+heure+'&device='+device;

$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/ajout_tache.php", dataString,

function (donnees) {
location.reload();

	});
}