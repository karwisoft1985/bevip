


// JavaScript Document

//  Declare SQL Query for SQLite
/*
var dropStat = "DROP TABLE IF EXISTS  statistique";
var dropTache = "DROP TABLE IF EXISTS  tache";
var dropTache2 = "DROP TABLE IF EXISTS tache2";
var dropCont = "DROP TABLE IF EXISTS  contact";
var dropstore = "DROP TABLE IF EXISTS   store";
var droputilisateur = "DROP TABLE IF EXISTS  utilisateur"; 
var droppays = "DROP TABLE IF EXISTS  pays"; 
var dropjournal = "DROP TABLE IF EXISTS  journal"; 
*/



var createTache = "CREATE TABLE IF NOT EXISTS  tache (id_tache Integer primary key ,titre TEXT,categorie text,date DATE,datedebut DATE,heure text,datefin DATE,heure_fin text,etat text,frequence text,sync Integer,rappel Integer, heurerap text, id_user Integer, id_cal Integer)";
//var createTache2 = "CREATE TABLE IF NOT EXISTS tache2 (id_tache Integer primary key,titre TEXT,categorie text,date DATE,datedebut DATE,datefin DATE,heure text,frequence text,etat text)";
var createStat = "CREATE TABLE IF NOT EXISTS  statistique (id_stat Integer primary key,taux TEXT,categorie text,date text,sync Integer)";
var createCont = "CREATE TABLE IF NOT EXISTS  contact (id_cont Integer primary key,name TEXT,phone text,photo text,partner text)";
var createNotif = "CREATE TABLE IF NOT EXISTS  notif (id_notif Integer primary key, nombre Integer)";
var createstore = "CREATE TABLE IF NOT EXISTS  store (id_store Integer primary key,name TEXT,categorie text,conseil text,url text)";
var creategroupe = "CREATE TABLE IF NOT EXISTS  groupe (id_groupe Integer primary key,name TEXT,categorie text,sync Integer,etat Integer)";
var createutilisateur = "CREATE TABLE IF NOT EXISTS  utilisateur (id_utilisateur Integer primary key,name TEXT,titre text,tel text,image text,pays text,lang text)";
//var createpays = "CREATE TABLE IF NOT EXISTS  pays (id_pay Integer primary key,nom_pay TEXT)";
var createjournal = "CREATE TABLE IF NOT EXISTS  journal (id_journal Integer primary key,nom_journal TEXT,logo_journal TEXT,lien_flux TEXT,nom_pay TEXT, type_rss TEXT)";

var db = openDatabase("bevip", "1.0", "bevip", 200000);  // Open SQLite Database
var dataset;
var DataType;

function initDatabase()  // Function Call When Page is ready.

{
try {

    if (!window.openDatabase)  // Check browser is supported SQLite or not.

    {

        alert('Databases are not supported in this browser.');

    }

    else {

 	   createTable();  // If supported then call Function for create table in SQLite
       
    }

}

catch (e) {

    if (e == 2) {

        console.log("Invalid database version.");

    } else {

        console.log("Unknown error " + e + ".");

    }

    return;

}

}




function createTable(){

   /*
	db.transaction(function (tx) { tx.executeSql(dropStat,[]); });
	db.transaction(function (tx) { tx.executeSql(dropTache,[]); });
    db.transaction(function (tx) {tx.executeSql(dropTache2,[]);});
	db.transaction(function (tx) { tx.executeSql(dropCont,[]); });
	
	db.transaction(function (tx) { tx.executeSql(dropstore,[]); });
	
	db.transaction(function (tx) { tx.executeSql(droputilisateur,[]); });
	
	db.transaction(function (tx) { tx.executeSql(droppays,[]); });
	
	db.transaction(function (tx) { tx.executeSql(dropjournal,[]); });
	
    */
	

	
	
    
	db.transaction(function (tx) { tx.executeSql(createTache,[]); });

	//db.transaction(function (tx) {tx.executeSql(createTache2,[]);});
	
	db.transaction(function (tx) { tx.executeSql(createStat,[]); });
	
	db.transaction(function (tx) { tx.executeSql(createCont,[]); });
	db.transaction(function (tx) { tx.executeSql(createNotif,[]); });
	
	db.transaction(function (tx) { tx.executeSql(createstore,[]); });
	db.transaction(function (tx) { tx.executeSql(creategroupe,[]); });
	
	db.transaction(function (tx) { tx.executeSql(createutilisateur,[]); });
    
	//db.transaction(function (tx) { tx.executeSql(createpays,[]); });
	
	db.transaction(function (tx) { tx.executeSql(createjournal,[]); });

    

}


initDatabase();
