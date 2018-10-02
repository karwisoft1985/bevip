var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;


									
$(document).ready(function () {

db.transaction(function(tx) {tx.executeSql("select * from store", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									if (dataset.length == 0) {

									var req = "insert or replace into store (name,categorie,conseil,url) values ('Read regularly', 'Personnel', 'Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience','store5.png'),('Take healthy food','Personnel','Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day','store3.png'),('Economize', 'Personnel', 'Saving regularly is essential to build your financial independence. Sets up a savings target.','store6.png'),('Do sports','Personnel','Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy','store4.png'),('Attend conferences','Professionnel','attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional','store7.png'),('Work hard', 'Professionnel', 'I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work','store8.png'),('Study', 'Professionnel', 'Studied not to know more but to know better. Sets up an objective study hours per day or week','store9.png'),('Learn a language', 'Professionnel', 'Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!','store10.png'),('See my friends', 'Sociale', 'Whether your life is busy, at work or at home, always keep a place for friends','store11.png'),('volunteering', 'Sociale', 'Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!','store12.png'),('give an association', 'Sociale', 'Gives money to charities to help those in need','store13.png'),('Spend time with family', 'Familiale', 'Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest','store16.png'),('Making weekends with family', 'Familiale', 'escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family','store14.png'),('lend touches', 'Familiale', 'the little things count a lot! make it a habit and strengthens your relationship','store15.png')";

									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									});	
									
								  }


});

});


});



$(document).ready(function () {

d = new Date ();

var date= d.toISOString().substring(0, 10);

var device=sessionStorage.getItem("device");
        
//db.transaction(function(tx) {tx.executeSql("select * from tache2 where datedebut <='" + date + "' AND datefin >='" + date + "' order by id_tache desc", [] ,

db.transaction(function(tx) {tx.executeSql("select * from tache order by id_tache desc", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									
									var erreur = document.getElementById('listtache');

									if (dataset.length > 0) {
										erreur.innerHTML = "";
									} else {
										erreur.innerHTML = "<p align='center'>VIDE</p>";
									}
									
                                    var div='';
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_tache = item['id_tache'];
										var titre = item['titre'];
										var heure = item['heure'];
										var categorie = item['categorie'];
										var etat = item['etat'];
										
										var date = item['date'];
										
										
									/* debut */	
										
							          div += '<a  onmousedown="func(' + id_tache + ')"  onmouseup="revert(' + id_tache + ')">';
                                      div += '<div class="tasks-bvp"> <div class="ent-partage-bvp">';
			 
			 
			                           if(categorie=='Personnel'){
				                         div += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Sociale'){
				                         div += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Familiale'){
				                         div += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Professionnel'){
				                         div += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
				 
			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' h</label>';
				 
				div += '<span class="dropdown">';
				div += '<i class="fa fa-ellipsis-v" style="color:#979292;float:right;font-size:16px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				div += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				div += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+id_tache+');"><center>Update</center></li>';
				div += '<li onclick="javascript:showmodalsupp('+id_tache+');"><center>Delete</center></li>';
				div += '</ul></span>';
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">Update task</h4>';
div += '</div>';
		
div += '<div class="modal-body"><input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" /></div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += '<div class="modal-footer"> <button type="button" class="btn" style="color:#fff" onclick="javascript:modification('+id_tache+');">Save</button>';
div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">Delete task</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
												
												  div += 'Do you really want to delete this task <b>'+ titre +' </b>?<br><br>';
												  
											     
												  div += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">No </a><span style="padding-right:15%"></span>';
												 
			 div += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+ id_tache +')">Yes</a></center>';
												 
												 
	  
        
                                                div += '</div>';
	  
	  
                                          div += '</div>';
										  
                                    div += '</div>';
									
                               div += '</div>'; 



                            /* fin */
                                        
                                        
                                        
										

									}
									
									
									$("#listtache").html(div);
								
								});

			});

		
		
		
		
});


function changertache(type){
d = new Date ();
var date= d.toISOString().substring(0, 10);
var device=sessionStorage.getItem("device");
db.transaction(function(tx) {tx.executeSql("select * from tache where date='" + date + "' and id_user ='"+ device +"' and categorie='"+ type +"' order by id_tache desc", [] ,
		
								function(tx, result) {

									dataset = result.rows;
							
									var erreur = document.getElementById('listtache');

									if (dataset.length > 0) {
										erreur.innerHTML = "";
									} else {
										erreur.innerHTML = "<p align='center'>VIDE</p>";
									}
									
                                    var div='';
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_tache = item['id_tache'];
										var titre = item['titre'];
										var heure = item['heure'];
										var categorie = item['categorie'];
										var etat = item['etat'];
										
										
										
									/* debut */	
										
							          div += '<a  onmousedown="func(' + id_tache + ')"  onmouseup="revert(' + id_tache + ')">';
                                      div += '<div class="tasks-bvp"> <div class="ent-partage-bvp">';
			 
			 
			                           if(categorie=='Personnel'){
				                         div += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Sociale'){
				                         div += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Familiale'){
				                         div += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Professionnel'){
				                         div += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
				 
			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' h</label>';
				 
				div += '<span class="dropdown">';
				div += '<i class="fa fa-ellipsis-v" style="color:#979292;float:right;font-size:16px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				div += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				div += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+id_tache+');"><center>Update</center></li>';
				div += '<li onclick="javascript:showmodalsupp('+id_tache+');"><center>Delete</center></li>';
				div += '</ul></span>';
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">Update task</h4>';
div += '</div>';
		
div += '<div class="modal-body"><input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" /></div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += '<div class="modal-footer"> <button type="button" class="btn" style="color:#fff" onclick="javascript:modification('+id_tache+');">Save</button>';
div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">Delete task</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
												
												  div += 'Do you really want to delete this task <b>'+ titre +' </b>?<br><br>';
												  
											     
												  div += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">No </a><span style="padding-right:15%"></span>';
												 
			 div += '<a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+ id_tache +')">Yes</a></center>';
												 
												 
	  
        
                                                div += '</div>';
	  
	  
                                          div += '</div>';
										  
                                    div += '</div>';
									
                               div += '</div>'; 



                            /* fin */
                                        
                                        
                                        
										

									}
									
									
									$("#listtache").html(div);
								
								});

			});
}
function modification(id_tache) {
   var id_tache = id_tache;
   var titre = document.getElementById("titre" + id_tache).value;
   var heure = document.getElementById("heure" + id_tache).value;
   d = new Date ();
	var date= d.toISOString().substring(0, 10);
	var req = "update tache set titre='"+titre+"', heure='"+heure+"' where id_tache='"+id_tache+"'";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });
   }
   
function Suppression(id_tache){
db.transaction(function(tx) {
		tx.executeSql("delete from tache where id_tache='" + id_tache + "'", []);
		
		location.reload(); 
		
});

/*
var dataString ='id_tache='+id_tache;


$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/supprimer_tache.php", dataString,
        function (donnees) {
		
	             location.reload();
		
		});
*/


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



function ajout_tache(){

var titre=document.getElementById("titre").value;

var categorie=document.getElementById("categorie").value;

var date=document.getElementById("date").value;

var etat='Not done';

var heure=document.getElementById("heure").value;

var device=sessionStorage.getItem("device");



var req = "insert or replace into tache (titre,categorie,date,heure,etat,id_user) values ('"
									+ titre
									+ "','"
									+ categorie
									+ "','"
									+ date
									+ "','"
									+ heure
									+ "','"
									+ etat
									+ "','"
									+ device+ "')";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });
									

/*

var dataString='titre='+titre+'&categorie='+categorie+'&date='+date+'&heure='+heure+'&device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/ajout_tache.php", dataString,

function (donnees) {
location.reload();

	});
	
*/



}



function plantasks(){

var titre=sessionStorage.getItem("title");

var categorie=sessionStorage.getItem("categorie");

var planDateDebut=document.getElementById("plan-date-debut").value;

var planHeureJour=document.getElementById("plan-heure-jour").value;

var planDateFin=document.getElementById("plan-date-fin").value;

var frequence=document.getElementById("frequence").value;

var etat="not done";

/*

var checkSemaine1=document.getElementById("checkSemaine1").value;

var checkSemaine2=document.getElementById("checkSemaine2").value;

var checkSemaine3=document.getElementById("checkSemaine3").value;

var checkSemaine4=document.getElementById("checkSemaine4").value;

var checkSemaine5=document.getElementById("checkSemaine5").value;

var checkSemaine6=document.getElementById("checkSemaine6").value;

var checkSemaine7=document.getElementById("checkSemaine7").value;

*/

var req = "insert or replace into tache (titre,categorie,datedebut,datefin,heure,frequence,etat) values ('"
									+ titre
									+ "','"
									+ categorie
									+ "','"
									+ planDateDebut
									+ "','"
									+ planDateFin
									+ "','"
									+ planHeureJour
									+ "','"
									+ frequence
									+ "','"
									+ etat + "')";
									
									
									db.transaction(function(tx) {
							           
									tx.executeSql(req, []);
									
									
									     location.href="tasks.html";
                                      
									   
									});
									
									


									
										   

}



