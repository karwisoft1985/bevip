



var createMonSport = "CREATE TABLE IF NOT EXISTS  monsport(id INTEGER PRIMARY KEY AUTOINCREMENT,fluxrss TEXT,nom text)";
var createMonActu = "CREATE TABLE IF NOT EXISTS  monactu(id INTEGER PRIMARY KEY AUTOINCREMENT,fluxrss TEXT,nom text)";
var createAutourDeMoi = "CREATE TABLE IF NOT EXISTS  autourdemoi(id INTEGER PRIMARY KEY AUTOINCREMENT,fluxrss TEXT,nom text)";
var createEnImage = "CREATE TABLE IF NOT EXISTS  enimage(id INTEGER PRIMARY KEY AUTOINCREMENT,fluxrss TEXT,nom text)";
var createDownloadFlux = "CREATE TABLE IF NOT EXISTS  downloadFlux(id INTEGER PRIMARY KEY AUTOINCREMENT,titre TEXT,description text)";


var insertAutourDeMoi = "INSERT INTO autourdemoi (fluxrss,nom) VALUES (?,?)";
var insertMonSport = "INSERT INTO monsport (fluxrss,nom) VALUES (?,?)";
var insertMonActu = "INSERT INTO monactu (fluxrss,nom) VALUES (?,?)";
var insertEnImage = "INSERT INTO enimage (fluxrss,nom) VALUES (?,?)";

var selectMonSport = "SELECT nom FROM monsport where id= (SELECT MAX(id) FROM monsport)";
var selectMonActu = "SELECT nom FROM monactu where id= (SELECT MAX(id) FROM monactu)"; 
var selectAutourDeMoi ="SELECT nom FROM autourdemoi where id= (SELECT MAX(id) FROM autourdemoi)"; 
var selectEnImage = "SELECT nom FROM enimage where id= (SELECT MAX(id) FROM enimage)";

var db = openDatabase("LaDepeche", "1.0", "La Depeche", 200000);  
var dataset;
var DataType;
initDatabase();

function initDatabase()  
{
try {
if (!window.openDatabase)  
{
alert('Base de données inntrouvable'); // initialisation de la base données La Dépeche.fr pour la prémiére ouverture
}
else {
createTable();  
 }
 }
catch (e) {
if (e == 2) {
console.log("Base de données invalide");
}else {
console.log("Erreur " + e + ".");
}
 return;
}
}
function createTable()   
{
db.transaction(function (tx) { tx.executeSql(createAutourDeMoi,[]); });
db.transaction(function (tx) { tx.executeSql(createMonSport,[]); });
db.transaction(function (tx) { tx.executeSql(createMonActu,[]); });
db.transaction(function (tx) { tx.executeSql(createEnImage,[]); });
db.transaction(function (tx) { tx.executeSql(createDownloadFlux,[]); });
}
function insertFluxGeo(val1,val2) 
{
var flux=val1;
var nom=val2;
db.transaction(function (tx) { tx.executeSql(insertAutourDeMoi,[flux,nom]);
location.reload();	
});
}
function insertFluxSport(val1,val2) 
{
var flux=val1;
var nom=val2;
db.transaction(function (tx) { tx.executeSql(insertMonSport,[flux,nom]);
location.reload();   
}); 
}
function insertFluxActu(val1,val2) 
{
var flux=val1;
var nom=val2;
db.transaction(function (tx) { tx.executeSql(insertMonActu,[flux,nom]);
location.reload();    	     
});  
}
function insertFluxEnImage(val1,val2) 
{
var flux=val1;
var nom=val2;
db.transaction(function (tx) { tx.executeSql(insertEnImage,[flux,nom]); 
location.reload();      
}); 
}
function loadAndReset() 
{
showRecords() 
}
function affNomAutourDeMoi() 
{
db.transaction(function (tx) {
tx.executeSql(selectAutourDeMoi, [], function (tx, result) {
dataset = result.rows;
for (var i = 0, item = null; i < dataset.length; i++) {
item = dataset.item(i);
var nom =item['nom'];
document.getElementById("preference-geo").innerHTML=nom;
}
});
});	 
}
function affNomSport()
{
db.transaction(function (tx) {
 tx.executeSql(selectMonSport, [], function (tx, result) {
dataset = result.rows;
for (var i = 0, item = null; i < dataset.length; i++) {
item = dataset.item(i);
var nom =item['nom'];
document.getElementById("preference-sport").innerHTML=nom;
}
});
}); 
}
function affNomActu() 
{
db.transaction(function (tx) {
 tx.executeSql(selectMonActu,[], function (tx, result) {
dataset = result.rows;
 for (var i = 0, item = null; i < dataset.length; i++) {
item = dataset.item(i);
var nom =item['nom'];
document.getElementById("preference-actu").innerHTML=nom;
}
});
});
}
function affNomImage() 
{
db.transaction(function (tx) {
tx.executeSql(selectEnImage,[], function (tx, result) {
dataset = result.rows;
for (var i = 0, item = null; i < dataset.length; i++) {
item = dataset.item(i);
var nom =item['nom'];
document.getElementById("preference-image").innerHTML=nom;
}
});
}); 
}