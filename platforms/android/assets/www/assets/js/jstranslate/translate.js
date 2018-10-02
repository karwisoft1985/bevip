 var db = openDatabase("bevip", "1.0", "bevip", 200000);  // Open SQLite Database
var dataset;
var DataType;
$(document).ready(function(){
	var lg;
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
	
if(lang=="fr"){
		lg="frensh";
	 }
	 else if (lang == 'ar'){
		 lg="arabic";
	 }
else{
	 lg="english";
}	 
	 $._.setLocale(lg);
  /* page connexion et inscription */
  $('#habitude').append("<div>" + $._('habitude')+"</div>");
  $('#rappel').append("<div>" + $._('rappel')+"</div>");
  $('#hrdb').append("<div>" + $._('hrdb')+"</div>");
  $('#10m').append("<div>" + $._('10m')+"</div>");
  $('#30m').append("<div>" + $._('30m')+"</div>");
  $('#1h').append("<div>" + $._('1h')+"</div>");
  $('#12h').append("<div>" + $._('12h')+"</div>");
  $('#Support').append("<div>" + $._('Support')+"</div>");
  $('#next').append("<div>" + $._('next')+"</div>");
  $('#name').append("<div>" + $._('name')+"</div>");
  $('#ok').append("<div>" + $._('ok')+"</div>");
    $('#affecter_task').append("<div>" + $._('affecter_task')+"</div>");
  $('#cnx').append("<div>" + $._('cnx')+"</div>");
    $('#membre').append("<div>" + $._('membre')+"</div>");
    $('#members').append("<div>" + $._('members')+"</div>");
  $('#phone').append("<div>" + $._('phone')+"</div>");
  $('#email').append("<div>" + $._('email')+"</div>");
  $('#save').append("<div>" + $._('save')+"</div>");
  $('#connexion').append("<div>" + $._('connexion')+"</div>");
  $('#calendar').append("<div>" + $._('calendar')+"</div>");
  $('#statistics').append("<div>" + $._('statistics')+"</div>");
  $('#project').append("<div>" + $._('project')+"</div>");
  $('#actualite').append("<div>" + $._('actualite')+"</div>");
  $('#video').append("<div>" + $._('video')+"</div>");
  $('#book').append("<div>" + $._('book')+"</div>");
  $('#salon').append("<div>" + $._('salon')+"</div>");
  $('#catind').append("<div>" + $._('catind')+"</div>");
  $('#catagr').append("<div>" + $._('catagr')+"</div>");
  $('#catmed').append("<div>" + $._('catmed')+"</div>");
  $('#catic').append("<div>" + $._('catic')+"</div>");
  $('#tasks').append("<div>" + $._('tasks')+"</div>");
  $('#personnel').append("<div>" + $._('personnel')+"</div>");
  $('#familial').append("<div>" + $._('familial')+"</div>");
  $('#tel_util').append("<div>" + $._('tel_util')+"</div>");
  $('#name_util').append("<div>" + $._('name_util')+"</div>");
  $('#delete_photo').append("<div>" + $._('delete_photo')+"</div>");
  $('#poste_util').append("<div>" + $._('poste_util')+"</div>");
  $('#professionnel').append("<div>" + $._('professionnel')+"</div>");
  $('#social').append("<div>" + $._('social')+"</div>");
  $('#task_type').append("<div>" + $._('task_type')+"</div>");
  $('#add_task').append("<div>" + $._('add_task')+"</div>");
  $('#close').append("<div>" + $._('close')+"</div>");
  $('#prev').append("<div>" + $._('prev')+"</div>");
  $('#mon').append("<div>" + $._('mon')+"</div>");
  $('#tue').append("<div>" + $._('tue')+"</div>");
  $('#wed').append("<div>" + $._('wed')+"</div>");
  $('#thu').append("<div>" + $._('thu')+"</div>");
  $('#fri').append("<div>" + $._('fri')+"</div>");
  $('#sat').append("<div>" + $._('sat')+"</div>");
  $('#sun').append("<div>" + $._('sun')+"</div>");
  $('#share').append("<div>" + $._('share')+"</div>");
  $('#date_deb').append("<div>" + $._('date_deb')+"</div>");
  $('#date_fin').append("<div>" + $._('date_fin')+"</div>");
  $('#heure_deb').append("<div>" + $._('heure_deb')+"</div>");
  $('#heure_fin').append("<div>" + $._('heure_fin')+"</div>");
  $('#freq').append("<div>" + $._('freq')+"</div>");
  $('#hebdomadaire').append("<div>" + $._('hebdomadaire')+"</div>");
  $('#quotidien').append("<div>" + $._('quotidien')+"</div>");
  $('#mensuel').append("<div>" + $._('mensuel')+"</div>");
  $('#personnalise').append("<div>" + $._('personnalise')+"</div>");
  $('#lundi').append("<div>" + $._('lundi')+"</div>");
  $('#mardi').append("<div>" + $._('mardi')+"</div>");
  $('#mercredi').append("<div>" + $._('mercredi')+"</div>");
  $('#jeudi').append("<div>" + $._('jeudi')+"</div>");
  $('#vendredi').append("<div>" + $._('vendredi')+"</div>");
  $('#samedi').append("<div>" + $._('samedi')+"</div>");
  $('#dimanche').append("<div>" + $._('dimanche')+"</div>");
  $('#valider').append("<div>" + $._('valider')+"</div>");
  $('#profil').append("<div>" + $._('profil')+"</div>");
  $('#num_tel').append("<div>" + $._('num_tel')+"</div>");
  $('#titre').append("<div>" + $._('titre')+"</div>");
  $('#photo_profil').append("<div>" + $._('photo_profil')+"</div>");
  $('#modif_info').append("<div>" + $._('modif_info')+"</div>");
  $('#appareil_photo').append("<div>" + $._('appareil_photo')+"</div>");
  $('#gallerie').append("<div>" + $._('gallerie')+"</div>");
  $('#change_photo').append("<div>" + $._('change_photo')+"</div>");
  $('#question_photo').append("<div>" + $._('question_photo')+"</div>");
  $('#yes').append("<div>" + $._('yes')+"</div>");
  $('#no').append("<div>" + $._('no')+"</div>");
  $('#pull_down').append("<div>" + $._('pull_down')+"</div>");
  $('#pull_up').append("<div>" + $._('pull_up')+"</div>");
  $('#evaluation').append("<div>" + $._('evaluation')+"</div>");
  $('#talk_coash').append("<div>" + $._('talk_coash')+"</div>");
  $('#talk').append("<div>" + $._('talk')+"</div>");
  $('#hey').append("<div>" + $._('hey')+"</div>");
  $('#suivant').append("<div>" + $._('suivant')+"</div>");
  $('#loading').append("<div>" + $._('loading')+"</div>");
  $('#partner').append("<div>" + $._('partner')+"</div>");
  $('#add_partner').append("<div>" + $._('add_partner')+"</div>");
  $('#aj_part').append("<div>" + $._('aj_part')+"</div>");
  $('#coash').append("<div>" + $._('coash')+"</div>");
  $('#add').append("<div>" + $._('add')+"</div>");
  $('#part').append("<div>" + $._('part')+"</div>");
  $('#request').append("<div>" + $._('request')+"</div>");
  $('#confirm').append("<div>" + $._('confirm')+"</div>");
  $('#cancel').append("<div>" + $._('cancel')+"</div>");
  $('#add_group').append("<div>" + $._('add_group')+"</div>");
  $('#name_group').append("<div>" + $._('name_group')+"</div>");
  $('#terminer').append("<div>" + $._('terminer')+"</div>");
  $('#part_grp').append("<div>" + $._('part_grp')+"</div>");
  $('#langage').append("<div>" + $._('langage')+"</div>");
  $('#conversations').append("<div>" + $._('conversations')+"</div>");

});
});
});