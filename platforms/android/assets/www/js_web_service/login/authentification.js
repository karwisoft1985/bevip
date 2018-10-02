/***********Vérifier si l'adresse mac du tel est enregistrée dans la base**************/
 var db = openDatabase("bevip", "1.0", "bevip", 200000);  // Open SQLite Database
var dataset;
var DataType;

 document.addEventListener("deviceready",onDeviceReady,false);
 function onDeviceReady(){
	 window.MacAddress.getMacAddress(
function(macAddress) {mac(macAddress);},function(fail) {alert(fail);}
);
//window.plugins.imeiplugin.getImei(callback); 
//window.plugins.sim.getSimInfo(successCallback, errorCallback);
 }
function mac(macAddress){
var device= macAddress; 
sessionStorage.setItem("device",device);
  setTimeout(function(){  
db.transaction(function(tx) {tx.executeSql("select * from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								if (dataset.length > 0 ){
								
								document.location.href="actualite.html";
								
								}
								else{	
								
								verif_cnx();
								}
								
								});

});
 },500);
}
function verif_cnx(){
document.addEventListener("online", chkOnline(), false);
document.addEventListener("offline",chkOffline(), false);	
document.addEventListener("online",onOnline, false);	
}
function onOnline(){
chkOnline();
}
  function chkOffline()
            {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
								

  document.getElementById("msg-err-cnx").innerHTML = "<div style='text-align:center;margin-top:55%;'><img src='assets/img/wifi-off.png' /><br><br>";
	
if(lang=="fr"){
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%'>Vérifier votre connexion Internet</h2></div></center>";
	 }
	 else if (lang == 'ar'){
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%''>تثبت من الانترنت </h2></div></center>";
	 }
else{
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase'>Check your internet connection</h2></div></center>";
}
								});

});
            }
			function chkOnline()
            {
				var device=sessionStorage.getItem("device");
				
								create_tables();
								db.transaction(function(tx2) {tx2.executeSql("select * from store", [] ,
								function(tx2, result2) {
								dataset2 = result2.rows;
								if (dataset2.length == 0) {
								add_store();
								}                               
								});
								});	
								
								db.transaction(function(tx1) {tx1.executeSql("select * from journal", [] ,
								function(tx1, result1) {
								dataset1 = result1.rows;
								if (dataset1.length == 0) {
								add_journal();
								}                               
								});
								});
								
								db.transaction(function(tx3) {tx3.executeSql("select * from notif", [] ,
								function(tx3, result3) {
								dataset3 = result3.rows;
								if (dataset3.length == 0) {
								add_notif();
								}                               
								});
								});
				var dataString="device="+device;
				$.when($.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/verif_user.php",dataString),
						$.getJSON("http://karwisoft.tn/php_bevip/gestion_taches/list_taches.php",dataString)).then(function(data,donnees){						
							if ( data[0].verif_user[0].id_user != 0 ){
							if ( donnees[0].taches[0].id_tache != 0 ){
							var sync=1;
							for (var i = 0; i < donnees[0].taches.length; i++){
							db.transaction(ajoutListTasks(donnees[0].taches[i].titre,donnees[0].taches[i].categorie,donnees[0].taches[i].date,donnees[0].taches[i].date_deb,donnees[0].taches[i].date_fin,donnees[0].taches[i].heure_deb,donnees[0].taches[i].heure_fin,donnees[0].taches[i].etat,donnees[0].taches[i].frequence,donnees[0].taches[i].rappel,sync));								
								}
							}
if(data[0].verif_user[0].img==''){
var img="assets/img/UserImage.png";
}	
else{
var img='http://www.karwisoft.tn/php_bevip/upload/'+data[0].verif_user[0].img;
}
							var req = "insert or replace into utilisateur (name,titre,tel,image,pays,lang) values ('"
									+ data[0].verif_user[0].nom
									+ "','"
									+ data[0].verif_user[0].titre
									+ "','"
									+ data[0].verif_user[0].tel
									+ "','"+ img
									+ "','"
									+ data[0].verif_user[0].pays
									+ "','"
									+ data[0].verif_user[0].lang +"')";

                                    db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
									   location.href="actualite.html";
                                      
								   });						
							}
							else{	
								document.location.href="install1.html";						
								 
								}
							 });
			}
 /*function errorCallback(error){
 
    document.getElementById("simInfo").innerHTML=JSON.stringify(result);

 }*/
 
 function ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,planHeurefin,etat,frequence,rappel,sync){

return function(tx){
var req = "insert or replace into tache (titre,categorie,date,datedebut,datefin,heure,frequence,etat,heure_fin,rappel,sync) values ('"
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
									+ planHeurefin 
									+ "','"
									+ rappel 
									+ "','"
									+ sync + "')";
									
									tx.executeSql(req, []);
									

}
}
function add_store(){
var reqa1 = "insert into store(name,categorie,conseil,url) values ('Read regularly', 'Personnel', 'Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience','store5.png')";
var reqa2 = "insert into store(name,categorie,conseil,url) values ('Take healthy food', 'Personnel', 'Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day','store3.png')";									
var reqa3 = "insert into store(name,categorie,conseil,url) values ('Economize', 'Personnel', 'Saving regularly is essential to build your financial independence. Sets up a savings target.','store6.png')";									
var reqa4 = "insert into store(name,categorie,conseil,url) values ('Do sports', 'Personnel', 'Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy','store4.png')";									
var reqa5 = "insert into store(name,categorie,conseil,url) values ('Attend conferences', 'Professionnel', 'attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional','store7.png')";									
var reqa6 = "insert into store(name,categorie,conseil,url) values ('Work hard', 'Professionnel', 'I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work','store8.png')";	
var reqa7 = "insert into store(name,categorie,conseil,url) values ('Study', 'Professionnel', 'Studied not to know more but to know better. Sets up an objective study hours per day or week','store9.png')";	
var reqa8 = "insert into store(name,categorie,conseil,url) values ('Learn a language', 'Professionnel', 'Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!','store10.png')";
var reqa9 = "insert into store(name,categorie,conseil,url) values ('See my friends', 'Sociale', 'Whether your life is busy, at work or at home, always keep a place for friends','store11.png')";
var reqa10 = "insert into store(name,categorie,conseil,url) values ('volunteering', 'Sociale', 'Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!','store12.png')";
var reqa11 = "insert into store(name,categorie,conseil,url) values ('give an association', 'Sociale', 'Gives money to charities to help those in need','store13.png')";
var reqa12 = "insert into store(name,categorie,conseil,url) values ('Spend time with family', 'Familiale', 'Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest','store16.png')";
var reqa13 = "insert into store(name,categorie,conseil,url) values ('Making weekends with family', 'Familiale', 'escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family','store14.png')";
var reqa14 = "insert into store(name,categorie,conseil,url) values ('lend touches', 'Familiale', 'the little things count a lot! make it a habit and strengthens your relationship','store15.png')";



									 db.transaction(function(tx) {
							           
									   tx.executeSql(reqa1, []);
									   tx.executeSql(reqa2, []);
									   tx.executeSql(reqa3, []);
									   tx.executeSql(reqa4, []);
									   tx.executeSql(reqa5, []);
									   tx.executeSql(reqa6, []);
									   tx.executeSql(reqa7, []);
									   tx.executeSql(reqa8, []);
									   tx.executeSql(reqa9, []);
									   tx.executeSql(reqa10, []);
									   tx.executeSql(reqa11, []);
									   tx.executeSql(reqa12, []);
									   tx.executeSql(reqa13, []);
									   tx.executeSql(reqa14, []);
                                      
								   });
								   }
function add_notif(){
	$.getJSON("http://karwisoft.tn/php_bevip/support/count.php",
  function (donnees) {	
  var nombre =donnees.notif[0].nombre;
  insert_notif(nombre);								   
});
}
function insert_notif(nombre){
var reqnot = "insert or replace into notif (nombre) values ('"+ nombre+ "')";
									
										db.transaction(function(tx) {										
									   tx.executeSql(reqnot, []);
							   
								   });
}
function add_journal(){
/*tunisie*/                         
//var reqa1 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('alchourouk','tunisie/alchourouk.png','http://www.alchourouk.com/xml_top_article/rss.xml','Tunisia','2')";
var reqa2 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('assabah','tunisie/assabah.jpg','http://www.assabah.com.tn/rss-feed.xml','Tunisia','5')";
var reqa3 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('letemps','tunisie/letemps.png','http://www.letemps.com.tn/rss-feed.xml','Tunisia','4')";
/*Canada*/
var reqa5 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('la presse','canada/logo_lapresseca.png','http://www.lapresse.ca/rss/225.xml','Canada','1')";
var reqa6 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('le journal de Québec','canada/journal_quebec.png','http://www.journaldequebec.com/rss.xml','Canada','3')";
var reqa7 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('le journal de Montréal','canada/journal_montreal.png','http://www.journaldemontreal.com/rss.xml','Canada','3')";
/* UAE */
var reqa13 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('albayan','uae/albayan.png','http://www.albayan.ae/1.446?ot=ot.AjaxPageLayout','UAE','7')";
var reqa14 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('alkhaleej','uae/alkhaleej.png','http://www.alkhaleej.ae/Feed/3b4f4fec-0a53-4327-a8ed-c8241e8327d2/edd54100-8fdd-4c3e-a0f9-1ab9b025f0c7/rss','UAE','8')";
var reqa15 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('emarat alyoum','uae/emarat_alyoum.png','http://www.emaratalyoum.com/1.533091?ot=ot.AjaxPageLayout','UAE','10')";
/*Turkey*/
var reqa17 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('turkiye','turkey/turkey.png','http://www.turkiyegazetesi.com.tr/rss/rss.xml','Turkey','12')";
/*Italy*/
var reqa21 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('CORRIERE DELLA SERA','italy/rcs.png','http://xml.corriereobjects.it/rss/politica.xml','Italy','13')";
var reqa22 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('gazzetta','italy/gazzetta.png','http://www.gazzetta.it/rss/calcio.xml','Italy','14')";
var reqa23 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('ilgiorno','italy/ilgiorno.png','http://www.ilgiorno.it/rss/','Italy','15')";
/*Espagne*/
var reqa25 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('marca','spain/marca.png','http://estaticos.marca.com/rss/futbol/almeria.xml','Spain','18')";
var reqa26 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('el mundo','spain/elmundo.png','http://estaticos.elmundo.es/elmundo/rss/portada.xml','Spain','19')";
var reqa27 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('ABC','spain/abc.png','http://www.abc.es/rss/feeds/abc_ultima.xml','Spain','20')";
/* Russia */
var reqa28 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Аргументы и Факты','russia/2.png','http://www.aif.ru/rss/all.php','Russia','21')";
var reqa29 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('RT на русском','russia/3.png','https://russian.rt.com/rss','Russia','23')";
/* suede */
var reqa31 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Nyheter Lerums Tidning','suede/1.png','http://www.lerumstidning.se/kategori/nyheter/feed/','Suede','22')";
/* belgique*/
var reqa34 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Het Belang van Limburg','belgique/3.png','http://www.hbvl.be/rss/section/d1618839-f921-43cc-af6a-a2b200a962dc','Belgique','24')";
var reqa35 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Lalibre.be - La Une','belgique/1.png','http://www.lalibre.be/rss.xml','Belgique','25')";
var reqa40 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('GAZET VAN ANTWERPEN','belgique/gazet.png','http://www.gva.be/rss/section/ca750cdf-3d1e-4621-90ef-a3260118e21c','Belgique','29')";
/*france*/
var reqa37 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Le Monde.fr','france/1.png','http://www.lemonde.fr/rss/une.xml','France','26')";
var reqa38 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('France Soir','france/2.png','http://www.francesoir.fr/rss.xml','France','27')";
var reqa39 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('La tribune','france/3.png','http://www.latribune.fr/feed.xml','France','28')";

									 db.transaction(function(tx) {	
									   tx.executeSql(reqa2, []);						           
									   //tx.executeSql(reqa1, []);
									   tx.executeSql(reqa3, []);									   
									   tx.executeSql(reqa5, []);
									   tx.executeSql(reqa6, []);
									   tx.executeSql(reqa7, []);									  
									   tx.executeSql(reqa13, []);
									   tx.executeSql(reqa14, []);
									   tx.executeSql(reqa15, []);									
									   tx.executeSql(reqa17, []);									   
									   tx.executeSql(reqa21, []);
									   tx.executeSql(reqa22, []);
									   tx.executeSql(reqa23, []);									   
									   tx.executeSql(reqa25, []);
									   tx.executeSql(reqa26, []);
									   tx.executeSql(reqa27, []);									  									  
									   tx.executeSql(reqa28, []);
									   tx.executeSql(reqa29, []);
									   tx.executeSql(reqa31, []);
									   tx.executeSql(reqa34, []);
									   tx.executeSql(reqa35, []);
									   tx.executeSql(reqa40, []);									   
									   tx.executeSql(reqa37, []);
									   tx.executeSql(reqa38, []);
									   tx.executeSql(reqa39, []);
									   
								   });
}	
function create_tables(){
var createTache = "CREATE TABLE IF NOT EXISTS  tache (id_tache Integer primary key ,titre TEXT,categorie text,date DATE,datedebut DATE,heure text,datefin DATE,heure_fin text,etat text,frequence text,sync Integer, id_user Integer)";
var createStat = "CREATE TABLE IF NOT EXISTS  statistique (id_stat Integer primary key,taux TEXT,categorie text,date text,sync Integer)";
var createCont = "CREATE TABLE IF NOT EXISTS  contact (id_cont Integer primary key,name TEXT,phone text,photo text,partner text)";
var createNotif = "CREATE TABLE IF NOT EXISTS  notif (id_notif Integer primary key, nombre Integer)";
var createstore = "CREATE TABLE IF NOT EXISTS  store (id_store Integer primary key,name TEXT,categorie text,conseil text,url text)";
var creategroupe = "CREATE TABLE IF NOT EXISTS  groupe (id_groupe Integer primary key,name TEXT,categorie text,sync Integer,etat Integer)";
var createutilisateur = "CREATE TABLE IF NOT EXISTS  utilisateur (id_utilisateur Integer primary key,name TEXT,titre text,tel text,image text,pays text,lang text)";
var createjournal = "CREATE TABLE IF NOT EXISTS  journal (id_journal Integer primary key,nom_journal TEXT,logo_journal TEXT,lien_flux TEXT,nom_pay TEXT, type_rss TEXT)";
	
	db.transaction(function (tx) { tx.executeSql(createTache,[]); });
	db.transaction(function (tx) { tx.executeSql(createStat,[]); });
	db.transaction(function (tx) { tx.executeSql(createCont,[]); });	
	db.transaction(function (tx) { tx.executeSql(createNotif,[]); });	
	db.transaction(function (tx) { tx.executeSql(createstore,[]); });
	db.transaction(function (tx) { tx.executeSql(creategroupe,[]); });	
	db.transaction(function (tx) { tx.executeSql(createutilisateur,[]); });   
	db.transaction(function (tx) { tx.executeSql(createjournal,[]); });
}