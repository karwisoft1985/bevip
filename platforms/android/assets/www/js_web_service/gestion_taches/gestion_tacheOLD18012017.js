var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;


/*									
$(document).ready(function () {
db.transaction(function(tx) {tx.executeSql("select * from store", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									alert(dataset.length);
									
									
									if (dataset.length == 0) {

									
									db.transaction(ajoutstore());
							
								  }


});

});



});

function ajoutstore(){

return function(tx){
var reqaj = "insert  into store (name,categorie,conseil,url) values ('Read regularly', 'Personnel', 'Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience','store5.png'),('Take healthy food','Personnel','Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day','store3.png'),('Economize', 'Personnel', 'Saving regularly is essential to build your financial independence. Sets up a savings target.','store6.png'),('Do sports','Personnel','Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy','store4.png'),('Attend conferences','Professionnel','attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional','store7.png'),('Work hard', 'Professionnel', 'I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work','store8.png'),('Study', 'Professionnel', 'Studied not to know more but to know better. Sets up an objective study hours per day or week','store9.png'),('Learn a language', 'Professionnel', 'Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!','store10.png'),('See my friends', 'Sociale', 'Whether your life is busy, at work or at home, always keep a place for friends','store11.png'),('volunteering', 'Sociale', 'Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!','store12.png'),('give an association', 'Sociale', 'Gives money to charities to help those in need','store13.png'),('Spend time with family', 'Familiale', 'Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest','store16.png'),('Making weekends with family', 'Familiale', 'escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family','store14.png'),('lend touches', 'Familiale', 'the little things count a lot! make it a habit and strengthens your relationship','store15.png')";
tx.executeSql(reqaj, []);
}}
*/

$(document).ready(function () {

d = new Date ();

var date= d.toISOString().substring(0, 10);

var device=sessionStorage.getItem("device");
var userLang = navigator.language || navigator.userLanguage;         
db.transaction(function(tx) {tx.executeSql("select * from tache where date = '" + date + "'  order by heure asc", [] ,

		
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
										var heure_fin = item['heure_fin'];
										
										
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
				 
			     if(userLang=="fr-FR"){
								

									if(name=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">Lire régulièrement</label><br>';}	 
										 else if(name=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prenez des aliments sains</label><br>';}										
										else if(name=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">Economiser</label><br>';}
										 else if(name=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du sport</label><br>';}
										 else if(name=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">Assister à des conférences</label><br>';}
										 else if(name=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">Travailler dur</label><br>';}
										 else if(name=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">Etudier</label><br>';}
										 else if(name=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">Apprendre une langue</label><br>';}
										 else if(name=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Passer du temps en famille</label><br>';}
										 else if(name=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire des week-ends en famille</label><br>';}
										 else if(name=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prêter de petites attentions</label><br>';}
										 else if(name=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">Voir mes amis</label><br>';}
										 else if(name=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du bénévolat</label><br>';}
										 else if(name=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">Donner à une association</label><br>';}
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
											}
										}
										else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
				                     if(name=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">أقرأ بانتظام</label><br>';}	 
										 else if(name=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">تناول طعام صحي</label><br>';}										
										else if(name=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">اقتصد</label><br>';}
										 else if(name=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">ممارسة الرياضة</label><br>';}
										 else if(name=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">حضور مؤتمرات</label><br>';}
										 else if(name=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">عمل بجد</label><br>';}
										 else if(name=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">دراسة</label><br>';}
										 else if(name=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">تعلم لغة</label><br>';}
										 else if(name=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">قضاء وقت مع العائلة</label><br>';}
										 else if(name=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">جعل عطلة نهاية الأسبوع مع العائلة</label><br>';}
										 else if(name=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">تقديم لمسات</label><br>';}
										 else if(name=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">رؤية أصدقائي</label><br>';}
										 else if(name=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">تطوع</label><br>';}
										 else if(name=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">منح لجمعية</label><br>';} 
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										 }
										} 
										else  {
										div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										}
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' - '+heure_fin+'</label>';
				 
				div += '<span class="dropdown">';
				div += '<i class="fa fa-ellipsis-v" style="color:#979292;float:right;font-size:16px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				div += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				div += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+id_tache+');"><center>';
				 if(userLang=="fr-FR"){
div +='Modifier';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='تعديل';}
else{div +='Update';}
				div +='</center></li>';
				div += '<li onclick="javascript:showmodalsupp('+id_tache+');"><center>';
								 if(userLang=="fr-FR"){
div +='Supprimer';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='حذف';}
else{div +='Delete';}
				div +='</center></li>';
				div += '</ul></span>';
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR"){
div +='Modifier tâche';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='تعديل مهمة';}
else{div +='Update task';}
div +='</h4>';
div += '</div>';
		if(userLang=="fr-FR"){
										if(titre=='Read regualary'){
					                  titre='Lire régulièrement';}	 
										 else if(titre=='Take healthy food'){
					                    titre='Prenez des aliments sains';}										
										else if(titre=='Economize'){
					                     titre='Economiser';}
										 else if(titre=='Do sports'){
					                    titre='Faire du sport';}
										 else if(titre=='Attend conferences'){
					                    titre='Assister à des conférences';}
										 else if(titre=='Work hard'){
					                   titre='Travailler dur';}
										 else if(titre=='Study'){
					                     titre='Etudier';}
										 else if(titre=='Learn a language'){
					                     titre='Apprendre une langue';}
										 else if(titre=='Spend time with family'){
					                     titre='Passer du temps en famille';}
										 else if(titre=='Making weekends with family'){
					                     titre='Faire des week-ends en famille';}
										 else if(titre=='lend touches'){
					                    titre='Prêter de petites attentions';}
										 else if(titre=='See my friends'){
					                     titre='Voir mes amis';}
										 else if(titre=='volunteering'){
					                     titre='Faire du bénévolat';}
										 else if(titre=='give an association'){
					                     titre='Donner à une association';}
										 else {
					                   	titre=titre;
											}
										}
										else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
				                     if(titre=='Read regualary'){
					                    titre='أقرأ بانتظام';}	 
										 else if(titre=='Take healthy food'){
					                   titre='تناول طعام صحي';}										
										else if(titre=='Economize'){
					                     titre='اقتصد';}
										 else if(titre=='Do sports'){
					                     titre='ممارسة الرياضة';}
										 else if(titre=='Attend conferences'){
					                    titre='حضور مؤتمرات';}
										 else if(titre=='Work hard'){
					                     titre='عمل بجد';}
										 else if(titre=='Study'){
					                     titre='دراسة';}
										 else if(titre=='Learn a language'){
					                     titre='تعلم لغة';}
										 else if(titre=='Spend time with family'){
					                     titre='قضاء وقت مع العائلة';}
										 else if(titre=='Making weekends with family'){
					                     titre='جعل عطلة نهاية الأسبوع مع العائلة';}
										 else if(titre=='lend touches'){
					                     titre='تقديم لمسات';}
										 else if(titre=='See my friends'){
					                   titre='رؤية أصدقائي';}
										 else if(titre=='volunteering'){
					                     titre='تطوع';}
										 else if(titre=='give an association'){
					                     titre='منح لجمعية';} 
										 else {
					                   			     titre=titre;
										 }
										} 
										else  {
										titre=titre;
										}	
div += '<div class="modal-body"><input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" /></div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += ' <div class="modal-body"><input type="time" value="'+heure_fin+'" class="form-control " style="width:90%;margin:15px;" name="heure_fin" id="heure_fin' + id_tache + '" /> </div>';
div += '<div class="modal-footer">';
div += '<button type="button" class="btn" style="color:#fff;float:right;font-size:10px" onclick="javascript:modification('+id_tache+');">Save for this task</button>';
div += '<button type="button" class="btn" style="color:#fff;float:left;font-size:10px" onclick="javascript:modification_all('+id_tache+');">Save for this and future tasks</button>';
div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR"){
div +='Supprimer tâche';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='حذف مهمة';}
else{div +='Delete task';}
div +='</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
div += '<center>';
												if(userLang=="fr-FR"){
													div +='Voulez-vous supprimer?';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +=' هل تريد حذف';}
													else{div +='Do you want to delete?';}
												  div += '<br><br></center>';
												  
											     
												 
												 
			 div += '<center><a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+ id_tache +')">';
												if(userLang=="fr-FR"){
													div +='Cette tâche';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='هذه المهمة';}
													else{div +='This task';}
			 div +='</a></center><br>';

			 div += '<center><a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression_all('+ id_tache +')">';
												if(userLang=="fr-FR"){
													div +='Ce et les futures tâches';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='هذا والمهام المستقبلية';}
													else{div +='This and future tasks';}
			 div +='</a></center><br>';
						 div += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">';
												   if(userLang=="fr-FR"){
													div +='Annuler';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='إلغاء';}
													else{div +='Cancel';}
												  div +='</a></center>';						 
												 
	  
        
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
var userLang = navigator.language || navigator.userLanguage; 
db.transaction(function(tx) {tx.executeSql("select * from tache where date = '" + date + "' and categorie='"+ type +"' order by heure asc", [] ,
		
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
				 if(userLang=="fr-FR"){
								

									if(name=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">Lire régulièrement</label><br>';}	 
										 else if(name=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prenez des aliments sains</label><br>';}										
										else if(name=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">Economiser</label><br>';}
										 else if(name=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du sport</label><br>';}
										 else if(name=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">Assister à des conférences</label><br>';}
										 else if(name=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">Travailler dur</label><br>';}
										 else if(name=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">Etudier</label><br>';}
										 else if(name=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">Apprendre une langue</label><br>';}
										 else if(name=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Passer du temps en famille</label><br>';}
										 else if(name=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire des week-ends en famille</label><br>';}
										 else if(name=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prêter de petites attentions</label><br>';}
										 else if(name=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">Voir mes amis</label><br>';}
										 else if(name=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du bénévolat</label><br>';}
										 else if(name=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">Donner à une association</label><br>';}
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
											}
										}
										else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
				                     if(name=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">أقرأ بانتظام</label><br>';}	 
										 else if(name=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">تناول طعام صحي</label><br>';}										
										else if(name=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">اقتصد</label><br>';}
										 else if(name=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">ممارسة الرياضة</label><br>';}
										 else if(name=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">حضور مؤتمرات</label><br>';}
										 else if(name=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">عمل بجد</label><br>';}
										 else if(name=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">دراسة</label><br>';}
										 else if(name=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">تعلم لغة</label><br>';}
										 else if(name=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">قضاء وقت مع العائلة</label><br>';}
										 else if(name=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">جعل عطلة نهاية الأسبوع مع العائلة</label><br>';}
										 else if(name=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">تقديم لمسات</label><br>';}
										 else if(name=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">رؤية أصدقائي</label><br>';}
										 else if(name=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">تطوع</label><br>';}
										 else if(name=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">منح لجمعية</label><br>';} 
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										 }
										} 
										else  {
										div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										}
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' - '+heure_fin+'</label>';
				 
				div += '<span class="dropdown">';
				div += '<i class="fa fa-ellipsis-v" style="color:#979292;float:right;font-size:16px;margin-top:-15px;" aria-hidden="true" data-toggle="dropdown"></i>';
				div += '<ul class="dropdown-menu"  style="margin-left:120px; margin-top:-25px;min-width:100px">';
				div += '<li style="padding-bottom:10px" onclick="javascript:showmodalmodif('+id_tache+');"><center>';
 if(userLang=="fr-FR"){
div +='Modifier';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='تعديل';}
else{div +='Update';}
				div +='</center></li>';
				div += '<li onclick="javascript:showmodalsupp('+id_tache+');"><center>';
								 if(userLang=="fr-FR"){
div +='Supprimer';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='حذف';}
else{div +='Delete';}
				div +='</center></li>';
				div += '</ul></span>';
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR"){
div +='Modifier tâche';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='تعديل مهمة';}
else{div +='Update task';}
div +='</h4>';
div += '</div>';
										if(userLang=="fr-FR"){
										if(titre=='Read regularly'){
					                  titre='Lire régulièrement';}	 
										 else if(titre=='Take healthy food'){
					                    titre='Prenez des aliments sains';}										
										else if(titre=='Economize'){
					                     titre='Economiser';}
										 else if(titre=='Do sports'){
					                    titre='Faire du sport';}
										 else if(titre=='Attend conferences'){
					                    titre='Assister à des conférences';}
										 else if(titre=='Work hard'){
					                   titre='Travailler dur';}
										 else if(titre=='Study'){
					                     titre='Etudier';}
										 else if(titre=='Learn a language'){
					                     titre='Apprendre une langue';}
										 else if(titre=='Spend time with family'){
					                     titre='Passer du temps en famille';}
										 else if(titre=='Making weekends with family'){
					                     titre='Faire des week-ends en famille';}
										 else if(titre=='lend touches'){
					                    titre='Prêter de petites attentions';}
										 else if(titre=='See my friends'){
					                     titre='Voir mes amis';}
										 else if(titre=='volunteering'){
					                     titre='Faire du bénévolat';}
										 else if(titre=='give an association'){
					                     titre='Donner à une association';}
										 else {
					                   	titre=titre;
											}
										}
										else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
				                     if(titre=='Read regularly'){
					                    titre='أقرأ بانتظام';}	 
										 else if(titre=='Take healthy food'){
					                   titre='تناول طعام صحي';}										
										else if(titre=='Economize'){
					                     titre='اقتصد';}
										 else if(titre=='Do sports'){
					                     titre='ممارسة الرياضة';}
										 else if(titre=='Attend conferences'){
					                    titre='حضور مؤتمرات';}
										 else if(titre=='Work hard'){
					                     titre='عمل بجد';}
										 else if(titre=='Study'){
					                     titre='دراسة';}
										 else if(titre=='Learn a language'){
					                     titre='تعلم لغة';}
										 else if(titre=='Spend time with family'){
					                     titre='قضاء وقت مع العائلة';}
										 else if(titre=='Making weekends with family'){
					                     titre='جعل عطلة نهاية الأسبوع مع العائلة';}
										 else if(titre=='lend touches'){
					                     titre='تقديم لمسات';}
										 else if(titre=='See my friends'){
					                   titre='رؤية أصدقائي';}
										 else if(titre=='volunteering'){
					                     titre='تطوع';}
										 else if(titre=='give an association'){
					                     titre='منح لجمعية';} 
										 else {
					                   			     titre=titre;
										 }
										} 
										else  {
										titre=titre;
										}	
div += '<div class="modal-body"><input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" /></div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += '<div class="modal-footer">';
div += '<button type="button" class="btn" style="color:#fff;float:right;font-size:10px" onclick="javascript:modification('+id_tache+');">Save for this task</button>';
div += '<button type="button" class="btn" style="color:#fff;float:left;font-size:10px" onclick="javascript:modification_all('+id_tache+');">Save for this and future tasks</button>';

div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(userLang=="fr-FR"){
div +='Supprimer tâche';}
 else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
div +='حذف مهمة';}
else{div +='Delete task';}
div +='</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
								if(userLang=="fr-FR"){
													div +='Voulez-vous supprimer?';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +=' هل تريد حذف';}
													else{div +='Do you want to delete?';}
												  div += '<br><br></center>';
												  
											     
												 
												 
			 div += '<center><a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression('+ id_tache +')">';
												if(userLang=="fr-FR"){
													div +='Cette tâche';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='هذه المهمة';}
													else{div +='This task';}
			 div +='</a></center><br>';

			 div += '<center><a class="btn"  style="background-color:#ff5722; color:#fff" href="#" onclick="javascript:Suppression_all('+ id_tache +')">';
												if(userLang=="fr-FR"){
													div +='Ce et les futures tâches';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='هذا والمهام المستقبلية';}
													else{div +='This and future tasks';}
			 div +='</a></center><br>';
						 div += '<center><a class="btn" style="background-color:#ff5722; color:#fff" onclick="javascript:location.reload();">';
												   if(userLang=="fr-FR"){
													div +='Annuler';}
													else if(userLang == 'ar-EG' || userLang == 'ar-TN'){
													div +='إلغاء';}
													else{div +='Cancel';}
												  div +='</a></center>';						 
												 
												 
												 
	  
        
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


function modification(id_tache){

   var id_tache = id_tache;
   var titre = document.getElementById("titre" + id_tache).value;
   var heure = document.getElementById("heure" + id_tache).value;
   var heure_fin = document.getElementById("heure_fin" + id_tache).value;
   d = new Date ();
	var date= d.toISOString().substring(0, 10);
	var req = "update tache set titre='"+titre+"', heure='"+heure+"', heure_fin='"+heure_fin+"' where id_tache='"+id_tache+"'";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });
}
function modification_all(id_tache){

   var id_tache = id_tache;
   var titre = document.getElementById("titre" + id_tache).value;
   var heure = document.getElementById("heure" + id_tache).value;
   var heure_fin = document.getElementById("heure_fin" + id_tache).value;
   d = new Date ();
	var date= d.toISOString().substring(0, 10);
	db.transaction(function(tx) {tx.executeSql("select titre, datedebut,datefin from tache where id_tache = '" + id_tache + "'", [] ,

		
								function(tx, result) {

									dataset = result.rows;
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var titre_deb = item['titre'];
										var datedebut = item['datedebut'];
										var datefin = item['datefin'];
										}
	var req = "update tache set titre='"+titre+"', heure='"+heure+"', heure_fin='"+heure_fin+"' where titre='" + titre_deb + "' and date>='" + date + "'and datedebut='" + datedebut + "'and datefin='" + datefin + "'";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });
							        });
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
function Suppression_all(id_tache){
db.transaction(function(tx) {tx.executeSql("select titre, datedebut,datefin from tache where id_tache = '" + id_tache + "'", [] ,

		
								function(tx, result) {

									dataset = result.rows;
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var titre = item['titre'];
										var datedebut = item['datedebut'];
										var datefin = item['datefin'];
										}
d = new Date ();
var date= d.toISOString().substring(0, 10);
db.transaction(function(tx) {
		tx.executeSql("delete from tache where titre='" + titre + "' and date>='" + date + "'and datedebut='" + datedebut + "'and datefin='" + datefin + "'", []);
		
		location.reload(); 
		
});
});
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


/*
function ajout_tache(){

var titre=document.getElementById("titre").value;

var categorie=document.getElementById("categorie").value;

var date=document.getElementById("date").value;

var etat='';

var heure=document.getElementById("heure").value;

var device=sessionStorage.getItem("device");

//var device=1;

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
									



var dataString='titre='+titre+'&categorie='+categorie+'&date='+date+'&heure='+heure+'&device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/ajout_tache.php", dataString,

function (donnees) {
location.reload();

	});
	

}
*/


function plantasks(){

var titre=sessionStorage.getItem("title");



var categorie=sessionStorage.getItem("categorie");

var planDateDebut=document.getElementById("plan-date-debut").value;

var planHeureJour=document.getElementById("plan-heure-jour").value;

var planDateFin=document.getElementById("plan-date-fin").value;

var planHeurefin=document.getElementById("plan-heure-fin").value;


var frequence=document.getElementById("frequence").value;

if(frequence=="personnalise"){
	$("#myModalfreq").modal("show");

}
var etat="";

var jourDebut = parseInt(planDateDebut.substring(planDateDebut.lastIndexOf("-")+1,planDateDebut.length));

var jourFin = parseInt(planDateFin.substring(planDateFin.lastIndexOf("-")+1,planDateFin.length));

d = new Date ();
var date= d.toISOString().substring(0, 10);
if(frequence=="quotidien"){
for(var i=jourDebut;i <= jourFin; i++){

if(i < 10){
var datesys=d.getFullYear()+"-"+(d.getMonth()+1)+"-0"+i;
}
else
{
var datesys=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+i;
}



db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));




}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
else if(frequence=="hebdomadaire"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}

db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));




}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
else if(frequence=="mensuel"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 1)) {
if(i.getDate() < 10){
jour="0"+i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+jour;
}
else
{
jour=i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+jour;
}
if(jour==j){
db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));
}



}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}




}

function personnalisetasks(){
var titre=sessionStorage.getItem("title");
var categorie=sessionStorage.getItem("categorie");

var planDateDebut=document.getElementById("plan-date-debut").value;
var planHeureJour=document.getElementById("plan-heure-jour").value;
var planHeurefin=document.getElementById("plan-heure-fin").value;

var planDateFin=document.getElementById("plan-date-fin").value;
 var checkSemaine1 = document.getElementById("checkSemaine1").checked;
 var checkSemaine2 = document.getElementById("checkSemaine2").checked;
 var checkSemaine3 = document.getElementById("checkSemaine3").checked;
 var checkSemaine4 = document.getElementById("checkSemaine4").checked;
 var checkSemaine5 = document.getElementById("checkSemaine5").checked;
 var checkSemaine6 = document.getElementById("checkSemaine6").checked;
 var checkSemaine7 = document.getElementById("checkSemaine7").checked;
var etat="";

var jourDebut = parseInt(planDateDebut.substring(planDateDebut.lastIndexOf("-")+1,planDateDebut.length));

var jourFin = parseInt(planDateFin.substring(planDateFin.lastIndexOf("-")+1,planDateFin.length));

d = new Date ();
var date= d.toISOString().substring(0, 10);
var pdd=planDateDebut;
if(checkSemaine1==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 1 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 1 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"lundi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine2==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 2 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 2 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"mardi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine3==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 3 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 3 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"mercredi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine4==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 4 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 4 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"jeudi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine5==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 5 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 5 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"vendredi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine6==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 6 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 6 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"samedi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine7==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 0 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 0 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"dimanche",etat,jourDebut,jourFin,planHeurefin));
}
}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
/**************create objective******************/
function createtasks(){
var CheminComplet = window.location.search;

var categorie =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
var titre=document.getElementById("title").value;
var planDateDebut=document.getElementById("plan-date-debut").value;


var planHeureJour=document.getElementById("plan-heure-jour").value;

var planDateFin=document.getElementById("plan-date-fin").value;
var planHeurefin=document.getElementById("plan-heure-fin").value;

var frequence=document.getElementById("frequence").value;
if(frequence=="personnalise"){
	$("#myModalfreqobj").modal("show");

}
var etat="";

var jourDebut = parseInt(planDateDebut.substring(planDateDebut.lastIndexOf("-")+1,planDateDebut.length));

var jourFin = parseInt(planDateFin.substring(planDateFin.lastIndexOf("-")+1,planDateFin.length));

d = new Date ();
var date= d.toISOString().substring(0, 10);
if(frequence=="quotidien"){
for(var i=jourDebut;i <= jourFin; i++){

if(i < 10){
var datesys=d.getFullYear()+"-"+(d.getMonth()+1)+"-0"+i;
}
else
{
var datesys=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+i;
}



db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));




}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
else if(frequence=="hebdomadaire"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}

db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));




}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
else if(frequence=="mensuel"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 1)) {
if(i.getDate() < 10){
jour="0"+i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+jour;
}
else
{
jour=i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+jour;
}
if(jour==j){
db.transaction(ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin));
}



}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}




}

function personnalisecreatetasks(){
var CheminComplet = window.location.search;

var categorie =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
var titre=document.getElementById("title").value;

var planDateDebut=document.getElementById("plan-date-debut").value;
var planHeureJour=document.getElementById("plan-heure-jour").value;
var planHeurefin=document.getElementById("plan-heure-fin").value;

var planDateFin=document.getElementById("plan-date-fin").value;
 var checkSemaine1 = document.getElementById("checkSemaine1").checked;
 var checkSemaine2 = document.getElementById("checkSemaine2").checked;
 var checkSemaine3 = document.getElementById("checkSemaine3").checked;
 var checkSemaine4 = document.getElementById("checkSemaine4").checked;
 var checkSemaine5 = document.getElementById("checkSemaine5").checked;
 var checkSemaine6 = document.getElementById("checkSemaine6").checked;
 var checkSemaine7 = document.getElementById("checkSemaine7").checked;
var etat="";

var jourDebut = parseInt(planDateDebut.substring(planDateDebut.lastIndexOf("-")+1,planDateDebut.length));

var jourFin = parseInt(planDateFin.substring(planDateFin.lastIndexOf("-")+1,planDateFin.length));

d = new Date ();
var date= d.toISOString().substring(0, 10);
var pdd=planDateDebut;
if(checkSemaine1==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 1 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 1 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"lundi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine2==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 2 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 2 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"mardi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine3==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 3 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 3 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"mercredi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine4==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 4 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 4 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"jeudi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine5==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 5 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 5 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"vendredi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine6==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 6 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 6 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"samedi",etat,jourDebut,jourFin,planHeurefin));
}
}
if(checkSemaine7==true){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 0 && k.getDate() <= 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-0"+k.getDate();
}
if(jourk == 0 && k.getDate() > 9){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
}

for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
db.transaction(ajoutListTasks(titre,categorie,datesys,pdd,planDateFin,planHeureJour,"dimanche",etat,jourDebut,jourFin,planHeurefin));
}
}
setTimeout(function(){ location.href="tasks.html"; }, 1000);
}
/************************************************/

function ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,jourDebut,jourFin,planHeurefin){

return function(tx){

alert(titre);
alert(categorie);
alert(datesys);
alert(planDateDebut);
alert(planDateFin);
alert(planHeureJour);
alert(frequence);
alert(etat);
alert(jourDebut);
alert(jourFin);
alert(planHeurefin);

var req = "insert into tache (titre,categorie,date,datedebut,datefin,heure,frequence,etat,heure_fin) values ('"
									+ titre
									+ "','"
									+ categorie
									+ "','"
									+ datesys
									+ "','"
									+ planDateDebut
									+ "','"
									+ planDateFin
									+ "','"
									+ planHeureJour
									+ "','"
									+ frequence
									+ "','"
									+ etat 
									+ "','"
									+ planHeurefin + "')";
									
									tx.executeSql(req, []);
									
									
									
}


}





