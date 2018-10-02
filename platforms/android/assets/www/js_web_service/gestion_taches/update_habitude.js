$(document).ready(function () {
var d = new Date ();
var date= d.toISOString().substring(0, 10);
db.transaction(function(tx) {
tx.executeSql("SELECT id_tache FROM tache where frequence = 'habitude' and date != '" + date +"' ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
										
var req = "update tache set date= '"+ date+ "' , etat ='' where frequence = 'habitude' and date != '" + date +"' ";									
									tx.executeSql(req, []);		
									
										}
										});									

});

});
	$(document).ready(function () {	
document.addEventListener("online", chkOnline, false);	
			function chkOnline()
            {
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM tache where sync = 0 ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_tache = item['id_tache'];
										var titre = item['titre'];
										var categorie = item['categorie'];
										var etat = item['etat'];
										var date = item['date'];
										var date_deb = item['datedebut'];
										var date_fin = item['datefin'];
										var heure = item['heure'];
										var heure_fin = item['heure_fin'];
										var frequence = item['frequence'];
										var rappel = item['rappel'];
										var heurerap = item['heurerap'];
										var device=sessionStorage.getItem("device");
var dataString='titre='+titre+'&categorie='+categorie+'&date='+date+'&date_deb='+date_deb+'&date_fin='+date_fin+'&heure='+heure+'&heure_fin='+heure_fin+'&etat='+etat+'&frequence='+frequence+'&rappel='+rappel+'&heurerap='+heurerap+'&device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/ajout_tache.php", dataString,
function (donnees) { });
var req = "update tache set sync= 1 where id_tache = '" + id_tache +"' ";									
									tx.executeSql(req, []);		
									}
										}
										});									

});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM statistique where sync = 0 ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_stat = item['id_stat'];
										var taux = item['taux'];
										var categorie = item['categorie'];
										var date = item['date'];
										var device=sessionStorage.getItem("device");
var dataString='taux='+taux+'&categorie='+categorie+'&date='+date+'&device='+device;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_statistique/ajout_stat.php", dataString,
function (donnees) { });
var req1 = "update statistique set sync= 1 where id_stat = '" + id_stat +"' ";									
									tx.executeSql(req1, []);		
									}
										}
										});									

});
db.transaction(function(tx) {
tx.executeSql("SELECT * FROM groupe where etat = 1 ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
									
									for (var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_groupe = item['id_groupe'];
										var name = item['name'];
										var categorie = item['categorie'];
										var device=sessionStorage.getItem("device");
                                        var dataString='name='+name+'&categorie='+categorie+'&device='+device;
                                        $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/supprimer_groupe.php", dataString,
                                        function (donnees) { });
										
										     var req3 = "delete from groupe where id_groupe = '" + id_groupe +"' ";									
									         tx.executeSql(req3, []);
											 
									  }
									   
									}
										});									

});


db.transaction(function(tx) {
tx.executeSql("SELECT * FROM groupe where sync = 0 ", [] ,
				
									function(tx, result) { 
									dataset = result.rows;	
									if (dataset.length != 0){
									
									for (var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_groupe = item['id_groupe'];
										var name = item['name'];
										var categorie = item['categorie'];
										var device=sessionStorage.getItem("device");
                                        var dataString='name='+name+'&categorie='+categorie+'&device='+device;
                                        $.getJSON("http://karwisoft.tn/php_bevip/gestion_groupe/ajout_groupe.php", dataString,
                                        function (donnees) { });
										
										     var req2 = "update groupe set sync= 1 where id_groupe = '" + id_groupe +"' ";									
									         tx.executeSql(req2, []);
											 
									  }
									   
									}
										});									

});

	
	
			}
			
			
     });
