
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;


$(document).ready(function () {
d = new Date ();
var date= d.toISOString().substring(0, 10);
var CheminComplet = window.location.search;
var dat =CheminComplet.substring( CheminComplet.indexOf( "date=" )+5 ,CheminComplet.length );
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];         
		
		db.transaction(function(tx) {tx.executeSql("select * from tache where date='" +dat+ "' order by heure asc", [] ,
		
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
										var sync = item['sync'];
										var etat = item['etat'];
										var date = item['date'];
										var heure_fin = item['heure_fin'];
										
																	         
                                      div += '<div class="tasks-bvp">';
									div +='<div class="dropdown" style="float:right;">';
									div +='<i class="fa fa-ellipsis-v" aria-hidden="true" style="font-size:28px;color:#fff" class="dropbtn"></i>';
									div +='<div class="dropdown-content">';
									div +='<a data-toggle="modal" data-target="#myModalmod' + id_tache + '">';
									if(lang=="fr"){
									div +='Modifier';}
									else if (lang == 'ar'){
				                    div +='تحديث';}
									else{
									div +='Update';
									}
									div +='</a>';
									div +='<a data-toggle="modal" data-target="#myModalSupp' + id_tache + '">';
										if(lang=="fr"){
									div +='Supprimer';}
									else if (lang == 'ar'){
				                    div +='حذف';}
									else{
									div +='Delete';
									}
									div +='</a>';
									div +='</div></div>';
									
									  div += '<a onmousedown="func(' + id_tache + ')"  onmouseup="revert(' + id_tache + ')">';
									  div += '<div class="ent-partage-bvp">';
										if(categorie=='Personnel' || categorie=='G'){
				                         div += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Sociale'){
				                         div += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Familiale'){
				                         div += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Professionnel'){
				                         div += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
			   	 
									if(lang=="fr"){
								

									if(titre=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">Lire régulièrement</label><br>';}	 
										 else if(titre=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prenez des aliments sains</label><br>';}										
										else if(titre=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">Economiser</label><br>';}
										 else if(titre=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du sport</label><br>';}
										 else if(titre=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">Assister à des conférences</label><br>';}
										 else if(titre=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">Travailler dur</label><br>';}
										 else if(titre=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">Etudier</label><br>';}
										 else if(titre=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">Apprendre une langue</label><br>';}
										 else if(titre=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Passer du temps en famille</label><br>';}
										 else if(titre=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire des week-ends en famille</label><br>';}
										 else if(titre=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prêter de petites attentions</label><br>';}
										 else if(titre=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">Voir mes amis</label><br>';}
										 else if(titre=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du bénévolat</label><br>';}
										 else if(titre=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">Donner à une association</label><br>';}
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
											}
										}
										else if (lang == 'ar'){
				                     if(titre=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">أقرأ بانتظام</label><br>';}	 
										 else if(titre=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">تناول طعام صحي</label><br>';}										
										else if(titre=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">اقتصد</label><br>';}
										 else if(titre=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">ممارسة الرياضة</label><br>';}
										 else if(titre=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">حضور مؤتمرات</label><br>';}
										 else if(titre=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">عمل بجد</label><br>';}
										 else if(titre=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">دراسة</label><br>';}
										 else if(titre=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">تعلم لغة</label><br>';}
										 else if(titre=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">قضاء وقت مع العائلة</label><br>';}
										 else if(titre=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">جعل عطلة نهاية الأسبوع مع العائلة</label><br>';}
										 else if(titre=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">تقديم لمسات</label><br>';}
										 else if(titre=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">رؤية أصدقائي</label><br>';}
										 else if(titre=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">تطوع</label><br>';}
										 else if(titre=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">منح لجمعية</label><br>';} 
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										 }
										} 
										else  {
										div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										}
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' - '+heure_fin+'</label>';
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '<i class="fa fa-trash-o" aria-hidden="true" style="float:right; font-size:20px;margin-right:50px;color:#fff" onclick="javascript:showmodalsupp('+id_tache+');"></i>';
div += '  <h4 class="modal-title" id="myModalLabel">';
if(lang=="fr"){
div +='Modifier tâche';}
 else if (lang == 'ar'){
div +='تعديل مهمة';}
else{div +='Update task';}
div +='</h4>';
div += '</div>';
if(lang=="fr"){
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
										else if (lang == 'ar'){
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
div += '<div class="modal-body">';
if(lang=="fr"){


									if(titre=='Read regularly'){
										 div += '<input type="text"  class="form-control " value="Lire régulièrement" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }	 
										 else if(titre=='Take healthy food'){
										 div += '<input type="text"  class="form-control " value="Prenez des aliments sains" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }										
										else if(titre=='Economize'){
										 div += '<input type="text"  class="form-control " value="Economiser" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Do sports'){
										 div += '<input type="text"  class="form-control " value="Faire du sport" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Attend conferences'){
										 div += '<input type="text"  class="form-control " value="Assister à des conférences" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Work hard'){
										 div += '<input type="text"  class="form-control " value="Travailler dur" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Study'){
										 div += '<input type="text"  class="form-control " value="Etudier" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Learn a language'){
										 div += '<input type="text"  class="form-control " value="Apprendre une langue" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Spend time with family'){
										 div += '<input type="text"  class="form-control " value="Passer du temps en famille" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Making weekends with family'){
										 div += '<input type="text"  class="form-control " value="Faire des week-ends en famille" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='lend touches'){
										 div += '<input type="text"  class="form-control " value="Prêter de petites attentions" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='See my friends'){
										 div += '<input type="text"  class="form-control " value="Voir mes amis" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='volunteering'){
										 div += '<input type="text"  class="form-control " value="Faire du bénévolat" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='give an association'){									
										 div += '<input type="text"  class="form-control " value="Donner à une association" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else {										
										 div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
											}
										}
										else if (lang == 'ar'){
				                     if(titre=='Read regularly'){
										 div +='<input type="text"  class="form-control " value="أقرأ بانتظام" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                   }	 
										 else if(titre=='Take healthy food'){
										 div +='<input type="text"  class="form-control " value="تناول طعام صحي" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }										
										else if(titre=='Economize'){
										 div +='<input type="text"  class="form-control " value="اقتصد" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Do sports'){
										 div +='<input type="text"  class="form-control " value="ممارسة الرياضة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Attend conferences'){
										 div +='<input type="text"  class="form-control " value="حضور مؤتمرات" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Work hard'){
										 div +='<input type="text"  class="form-control " value="عمل بجد" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Study'){
										 div +='<input type="text"  class="form-control " value="دراسة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Learn a language'){
										 div +='<input type="text"  class="form-control " value="تعلم لغة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Spend time with family'){
										 div +='<input type="text"  class="form-control " value="قضاء وقت مع العائلة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										}
										 else if(titre=='Making weekends with family'){
										 div +='<input type="text"  class="form-control " value="جعل عطلة نهاية الأسبوع مع العائلة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='lend touches'){
										 div +='<input type="text"  class="form-control " value="تقديم لمسات" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										 else if(titre=='See my friends'){
										 div +='<input type="text"  class="form-control " value="رؤية أصدقائي" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										 else if(titre=='volunteering'){
										 div +='<input type="text"  class="form-control " value="تطوع" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='give an association'){
										 div +='<input type="text"  class="form-control " value="منح لجمعية" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';} 
										 else {
					                   			     div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										} 
										else  {
										div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										}
div +='</div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += ' <div class="modal-body"><input type="time" value="'+heure_fin+'" class="form-control " style="width:90%;margin:15px;" name="heure_fin" id="heure_fin' + id_tache + '" /> </div>';
if(categorie=='G'){
div += ' <div class="modal-body"><select class="form-control" type="text" style="width:90%;margin:15px;" name="categorie" id="categorie' + id_tache + '" required="required">';
 if(lang=="fr"){
 div += '<option value="Personnel">Personnel</option>';
div += '<option value="Familiale">Familiale</option>';
div += '<option value="Professionnel">Professionnel</option>';
div += '<option value="Sociale">Sociale</option>';
 }
 else if (lang == 'ar'){
div += '<option value="Personnel">شخصي</option>';
div += '<option value="Familiale">عائلي</option>';
div += '<option value="Professionnel">مهني</option>';
div += '<option value="Sociale">إجتماعي</option>';
 }
else{
div += '<option value="Personnel">Personal</option>';
div += '<option value="Familiale">Family</option>';
div += '<option value="Professionnel">Professional</option>';
div += '<option value="Sociale">Social</option>';
}	
div +='</select>';
div +='<input type="hidden" value="0" name="sync" id="sync' + id_tache + '" /> </div>';
}
else{
div += '<input type="hidden"  class="form-control " value="'+sync+'" name="sync" id="sync' + id_tache + '" />';
div += '<input type="hidden"  class="form-control " value="'+categorie+'" name="categorie" id="categorie' + id_tache + '" />';
}
div += '<div class="modal-footer">';
if(lang=="fr"){
div +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification_all('+id_tache+');">Enregistrer';}
 else if (lang == 'ar'){
div +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification_all('+id_tache+');">حفظ';}
else{div +='<button type="button" class="btn" style="color:#fff;float:right;" onclick="javascript:modification_all('+id_tache+');">Save';}
div += '</button>';

div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(lang=="fr"){
div +='Supprimer tâche';}
 else if (lang == 'ar'){
div +='حذف مهمة';}
else{div +='Delete task';}

div +='</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
div +='<center>';
												if(lang=="fr"){
													div +='Voulez-vous supprimer cette tâche?';}
													else if (lang == 'ar'){
													div +=' هل تريد حذف هذه المهمة';}
													else{div +='Do you want to delete this task?';}
												  div += '<br><br></center>';
												  
											     
												 
												 
			 div += '<center><a class="btn btn-danger"  style="margin-right:10%" onclick="javascript:Suppression_all('+ id_tache +')">';
												if(lang=="fr"){
													div +='Oui';}
													else if (lang == 'ar'){
													div +='نعم';}
													else{div +='Yes';}
			 div +='</a><a class="btn btn-success"  class="close" data-dismiss="modal">';
												if(lang=="fr"){
													div +='Non';}
													else if(lang == 'ar'){
													div +='لا';}
													else{div +='No';}
			 div +='</a></center>';
						
                                                div += '</div>';
	  
	  
                                          div += '</div>';
										  
                                    div += '</div>';
									
                               div += '</div>'; 	

									}
									
									$("#listtache").html(div);
								
								});

			});

		
		
		
		
});
});
});


function changertache(type){
var CheminComplet = window.location.search;
var date =CheminComplet.substring( CheminComplet.indexOf( "date=" )+5 ,CheminComplet.length );
var device=sessionStorage.getItem("device");
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];     

db.transaction(function(tx) {tx.executeSql("select * from tache where date='" + date + "'  and categorie='"+ type +"' order by id_tache desc", [] ,
		
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
										var sync = item['sync'];
										var etat = item['etat'];
										var heure_fin = item['heure_fin'];
										
										
										
									/* debut */	
										
							         div += '<div class="tasks-bvp">';
									  
									  	div +='<div class="dropdown" style="float:right;">';
									div +='<i class="fa fa-ellipsis-v" aria-hidden="true" style="font-size:28px;color:#fff" class="dropbtn"></i>';
									div +='<div class="dropdown-content">';
									div +='<a data-toggle="modal" data-target="#myModalmod' + id_tache + '">';
									if(lang=="fr"){
									div +='Modifier';}
									else if (lang == 'ar'){
				                    div +='تحديث';}
									else{
									div +='Update';
									}
									div +='</a>';
									div +='<a data-toggle="modal" data-target="#myModalSupp' + id_tache + '">';
										if(lang=="fr"){
									div +='Supprimer';}
									else if (lang == 'ar'){
				                    div +='حذف';}
									else{
									div +='Delete';
									}
									div +='</a>';
									div +='</div></div>';
									
									    div += '<a  onmousedown="func(' + id_tache + ')"  onmouseup="revert(' + id_tache + ')">';
										div +='<div class="ent-partage-bvp">';			 
			                           if(categorie=='Personnel'){
				                         div += ' <img src="assets/img/perso.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Sociale'){
				                         div += ' <img src="assets/img/soc.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Familiale'){
				                         div += ' <img src="assets/img/fam.png" class="img-ent-tasks-bvp"  />';}
				                         else if(categorie=='Professionnel'){
				                         div += ' <img src="assets/img/pro.png" class="img-ent-tasks-bvp"  />';}
									if(lang=="fr"){
								

									if(titre=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">Lire régulièrement</label><br>';}	 
										 else if(titre=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prenez des aliments sains</label><br>';}										
										else if(titre=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">Economiser</label><br>';}
										 else if(titre=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du sport</label><br>';}
										 else if(titre=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">Assister à des conférences</label><br>';}
										 else if(titre=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">Travailler dur</label><br>';}
										 else if(titre=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">Etudier</label><br>';}
										 else if(titre=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">Apprendre une langue</label><br>';}
										 else if(titre=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Passer du temps en famille</label><br>';}
										 else if(titre=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire des week-ends en famille</label><br>';}
										 else if(titre=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">Prêter de petites attentions</label><br>';}
										 else if(titre=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">Voir mes amis</label><br>';}
										 else if(titre=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">Faire du bénévolat</label><br>';}
										 else if(titre=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">Donner à une association</label><br>';}
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
											}
										}
										else if (lang == 'ar'){
				                     if(titre=='Read regularly'){
					                     div +='<label class="name-user-ent-tasks-bvp">أقرأ بانتظام</label><br>';}	 
										 else if(titre=='Take healthy food'){
					                     div +='<label class="name-user-ent-tasks-bvp">تناول طعام صحي</label><br>';}										
										else if(titre=='Economize'){
					                     div +='<label class="name-user-ent-tasks-bvp">اقتصد</label><br>';}
										 else if(titre=='Do sports'){
					                     div +='<label class="name-user-ent-tasks-bvp">ممارسة الرياضة</label><br>';}
										 else if(titre=='Attend conferences'){
					                     div +='<label class="name-user-ent-tasks-bvp">حضور مؤتمرات</label><br>';}
										 else if(titre=='Work hard'){
					                     div +='<label class="name-user-ent-tasks-bvp">عمل بجد</label><br>';}
										 else if(titre=='Study'){
					                     div +='<label class="name-user-ent-tasks-bvp">دراسة</label><br>';}
										 else if(titre=='Learn a language'){
					                     div +='<label class="name-user-ent-tasks-bvp">تعلم لغة</label><br>';}
										 else if(titre=='Spend time with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">قضاء وقت مع العائلة</label><br>';}
										 else if(titre=='Making weekends with family'){
					                     div +='<label class="name-user-ent-tasks-bvp">جعل عطلة نهاية الأسبوع مع العائلة</label><br>';}
										 else if(titre=='lend touches'){
					                     div +='<label class="name-user-ent-tasks-bvp">تقديم لمسات</label><br>';}
										 else if(titre=='See my friends'){
					                     div +='<label class="name-user-ent-tasks-bvp">رؤية أصدقائي</label><br>';}
										 else if(titre=='volunteering'){
					                     div +='<label class="name-user-ent-tasks-bvp">تطوع</label><br>';}
										 else if(titre=='give an association'){
					                     div +='<label class="name-user-ent-tasks-bvp">منح لجمعية</label><br>';} 
										 else {
					                   			     div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										 }
										} 
										else  {
										div += ' <label class="name-user-ent-tasks-bvp">'+titre+'</label><br>';
										}
				 div += '<label class="time-user-ent-tasks-bvp">'+heure+' - '+heure_fin+'</label>';
				 
				div += '</div></div>';
				div += ' <div class="bl-projet-task" style="background:#175da3;"   >';
				div += '</div></a>';
				
div += '<div class="modal fade"  id="myModalmod' + id_tache + '" artabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">';
div += '<div class="modal-dialog">';
div += '<div class="modal-content"><div class="modal-header">';
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '<i class="fa fa-trash-o" aria-hidden="true" style="float:right; font-size:20px;margin-right:50px;color:#fff" onclick="javascript:showmodalsupp('+id_tache+');"></i>';
div += '  <h4 class="modal-title" id="myModalLabel">';
if(lang=="fr"){
div +='Modifier tâche';}
 else if (lang == 'ar'){
div +='تعديل مهمة';}
else{div +='Update task';}
div +='</h4>';
div += '</div>';
if(lang=="fr"){
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
										else if (lang == 'ar'){
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
div += '<div class="modal-body">';
if(lang=="fr"){


									if(titre=='Read regularly'){
										 div += '<input type="text"  class="form-control " value="Lire régulièrement" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }	 
										 else if(titre=='Take healthy food'){
										 div += '<input type="text"  class="form-control " value="Prenez des aliments sains" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }										
										else if(titre=='Economize'){
										 div += '<input type="text"  class="form-control " value="Economiser" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Do sports'){
										 div += '<input type="text"  class="form-control " value="Faire du sport" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Attend conferences'){
										 div += '<input type="text"  class="form-control " value="Assister à des conférences" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Work hard'){
										 div += '<input type="text"  class="form-control " value="Travailler dur" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Study'){
										 div += '<input type="text"  class="form-control " value="Etudier" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Learn a language'){
										 div += '<input type="text"  class="form-control " value="Apprendre une langue" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Spend time with family'){
										 div += '<input type="text"  class="form-control " value="Passer du temps en famille" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Making weekends with family'){
										 div += '<input type="text"  class="form-control " value="Faire des week-ends en famille" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='lend touches'){
										 div += '<input type="text"  class="form-control " value="Prêter de petites attentions" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='See my friends'){
										 div += '<input type="text"  class="form-control " value="Voir mes amis" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='volunteering'){
										 div += '<input type="text"  class="form-control " value="Faire du bénévolat" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='give an association'){									
										 div += '<input type="text"  class="form-control " value="Donner à une association" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else {										
										 div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
											}
										}
										else if (lang == 'ar'){
				                     if(titre=='Read regularly'){
										 div +='<input type="text"  class="form-control " value="أقرأ بانتظام" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                   }	 
										 else if(titre=='Take healthy food'){
										 div +='<input type="text"  class="form-control " value="تناول طعام صحي" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }										
										else if(titre=='Economize'){
										 div +='<input type="text"  class="form-control " value="اقتصد" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Do sports'){
										 div +='<input type="text"  class="form-control " value="ممارسة الرياضة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                     }
										 else if(titre=='Attend conferences'){
										 div +='<input type="text"  class="form-control " value="حضور مؤتمرات" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
					                    }
										 else if(titre=='Work hard'){
										 div +='<input type="text"  class="form-control " value="عمل بجد" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Study'){
										 div +='<input type="text"  class="form-control " value="دراسة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Learn a language'){
										 div +='<input type="text"  class="form-control " value="تعلم لغة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='Spend time with family'){
										 div +='<input type="text"  class="form-control " value="قضاء وقت مع العائلة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										}
										 else if(titre=='Making weekends with family'){
										 div +='<input type="text"  class="form-control " value="جعل عطلة نهاية الأسبوع مع العائلة" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='lend touches'){
										 div +='<input type="text"  class="form-control " value="تقديم لمسات" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										 else if(titre=='See my friends'){
										 div +='<input type="text"  class="form-control " value="رؤية أصدقائي" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										 else if(titre=='volunteering'){
										 div +='<input type="text"  class="form-control " value="تطوع" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';}
										 else if(titre=='give an association'){
										 div +='<input type="text"  class="form-control " value="منح لجمعية" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';} 
										 else {
					                   			     div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										 }
										} 
										else  {
										div += '<input type="text"  class="form-control " value="'+titre+'" style="width:90%;margin:15px;" name="titre" id="titre' + id_tache + '" />';
										}
div +='</div>';
div += ' <div class="modal-body"><input type="time" value="'+heure+'" class="form-control " style="width:90%;margin:15px;" name="heure" id="heure' + id_tache + '" /> </div>';
div += '<input type="hidden"  class="form-control " value="'+sync+'" name="sync" id="sync' + id_tache + '" />';
div += '<input type="hidden"  class="form-control " value="'+categorie+'" name="categorie" id="categorie' + id_tache + '" />';
div += '<div class="modal-footer">';
if(lang=="fr"){
div +='<button type="button" class="btn" style="color:#fff;float:right;font-size:9px; padding-left:0px; padding-right:0px" onclick="javascript:modification_all('+id_tache+');">Enregistrer';}
 else if (lang == 'ar'){
div +='<button type="button" class="btn" style="color:#fff;float:right;font-size:10px" onclick="javascript:modification_all('+id_tache+');">حفظ';}
else{div +='<button type="button" class="btn" style="color:#fff;float:right;font-size:10px;" onclick="javascript:modification_all('+id_tache+');">Save';}
div += '</button>';

div += ' </div> </div></div></div>';	
  
div += ' <div class="modal fade" id="myModalSupp'+ id_tache +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">';

                                    div += '<div class="modal-dialog" role="document">';
  
                                    div += '<div class="modal-content"><div class="modal-header">';
									
div += '<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true" class="modal_button">&times;</span><span class="sr-only">Close</span></button>';
div += '  <h4 class="modal-title" id="myModalLabel">';
 if(lang=="fr"){
div +='Supprimer tâche';}
 else if (lang == 'ar'){
div +='حذف مهمة';}
else{div +='Delete task';}
div +='</h4>';
div += '</div>';
		
div += '<div class="modal-body">';
					div +='<center>';							
				 if(lang=="fr"){
													div +='Voulez-vous supprimer cette tâche?';}
													else if (lang == 'ar'){
													div +=' هل تريد حذف هذه المهمة';}
													else{div +='Do you want to delete This task?';}
												  div += '<br><br></center>';
												  
											     
												 
												 
			 div += '<center><a class="btn btn-danger" style="margin-right:10%" onclick="javascript:Suppression_all('+ id_tache +')">';
						 if(lang=="fr"){
													div +='Oui';}
													else if (lang == 'ar'){
													div +='نعم';}
													else{div +='Yes';}
			 div +='</a><a class="btn btn-success"  class="close" data-dismiss="modal">';
												if(lang=="fr"){
													div +='Non';}
													else if(lang == 'ar'){
													div +='لا';}
													else{div +='No';}
			 div +='</a></center>';

			 
                                                div += '</div>';
	  
	  
                                          div += '</div>';
										  
                                    div += '</div>';
									
                               div += '</div>'; 	

									}
									
									
									$("#listtache").html(div);
								
								});

			});
});
});
}

function modification_all(id_tache){

   var id_tache = id_tache;
   var titre = document.getElementById("titre" + id_tache).value;
   var heure = document.getElementById("heure" + id_tache).value;
   var sync = document.getElementById("sync" + id_tache).value;
   var categorie = document.getElementById("categorie" + id_tache).value;
   var heure_fin = document.getElementById("heure_fin" + id_tache).value;
	var CheminComplet = window.location.search;
	var date =CheminComplet.substring( CheminComplet.indexOf( "date=" )+5 ,CheminComplet.length );
	db.transaction(function(tx) {tx.executeSql("select titre, datedebut,datefin from tache where id_tache = '" + id_tache + "'", [] ,

		
								function(tx, result) {

									dataset = result.rows;
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var titre_deb = item['titre'];
										var datedebut = item['datedebut'];
										var datefin = item['datefin'];
										}
	var req = "update tache set titre='"+titre+"', heure='"+heure+"', sync='"+sync+"', categorie='"+categorie+"', heure_fin='"+heure_fin+"' where titre='" + titre_deb + "' and date>='" + date + "'and datedebut='" + datedebut + "'and datefin='" + datefin + "'";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });
							        });
							        });
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
var CheminComplet = window.location.search;
var date =CheminComplet.substring( CheminComplet.indexOf( "date=" )+5 ,CheminComplet.length );
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
$("#myModalmod" +id_tache).modal("hide");
$("#myModalSupp" +id_tache).modal("show");
} 



function ajout_tache(){

var titre=document.getElementById("titre").value;

var categorie=document.getElementById("categorie").value;

var date=document.getElementById("date").value;

var etat='Not done';

var heure=document.getElementById("heure").value;

var id_user=1;

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
									+ id_user + "')";
									
									db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
									   location.reload(); 
									   
							        });

}