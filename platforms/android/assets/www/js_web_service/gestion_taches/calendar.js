var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;
 document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
var startDate = new Date();
var endDate = new Date();
endDate.setDate(endDate.getDate()+30); 
// clean up the dates a bit
startDate.setMinutes(0);
endDate.setMinutes(0);
startDate.setSeconds(0);
endDate.setSeconds(0);
// add a few hours to the dates, JS will automatically update the date (+1 day) if necessary
startDate.setHours(0);
endDate.setHours(0);
window.plugins.calendar.findEvent(null, null, null, startDate, endDate, onSuccess, onError);
 }

function onSuccess(msg) {
if(msg.length > 0){
db.transaction(function(tx) {
for (var ki=0; ki < msg.length; ki++){
(function() {
 var titre = msg[ki].title;
var datedeb = msg[ki].startDate;
var datefin = msg[ki].endDate;
 var exist= msg[ki].hasOwnProperty('recurrence');
 if(exist){
 var freq=msg[ki].recurrence.freq;
 if(freq=='MONTHLY'){
var dm= msg[ki].recurrence.bymonthday;
 }
else if(freq=='WEEKLY'){
var countv= msg[ki].recurrence.byday.indexOf(',');
if(countv >= 0){
var item=msg[ki].recurrence.byday.split(",");
}
else{
var dayheb=msg[ki].recurrence.byday;
}	
 }
 }
var id_cal = msg[ki].id;
tx.executeSql("select id_tache from tache where id_cal = '" + id_cal + "'", [] ,
function(tx, result) {
dataset = result.rows;
if(dataset.length == 0){
var planDateDebut=datedeb.substring(0,10);
var planHeureJour=datedeb.substr(11,8); 
 var planDateFin= datefin.substring(0,10); 
 var planHeurefin= datefin.substr(11,8); 
 var categorie = 'G';
 var sync = 1;
var etat="";
if(!exist){
var frequence='quotidien';
for(var i=new Date(planDateDebut);i <= new Date(planDateFin); i.setDate(i.getDate()+1)){
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,planHeurefin,sync,id_cal);
}
}
else {
if(freq=='MONTHLY'){
var frequence='mensuel';		
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var now =new Date(planDateFin);
for (var i = new Date(a, m, dm); i <= now; i.setDate(i.getDate() + 1)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
jour="0"+i.getDate();
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+jour;
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
jour=i.getDate();
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate()< 10 && i.getMonth()+1 > 9){
jour="0"+i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+jour;
}
else {
jour=i.getDate();
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
if(jour==dm){
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,planHeurefin,sync, id_cal);
}
}
}

else if(freq=='WEEKLY'){
		 if(countv >= 0){
		for (var km = 0; km < item.length; km++) {
		 if(item[km]=="MO"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 1){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"lundi",etat,planHeurefin,sync, id_cal);
}
}
if(item[km]=="TU"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 2){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var t =new Date(a, m, j);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth() +1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth() +1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth() +1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"mardi",etat,planHeurefin,sync,id_cal);
}
}
if(item[km]=="WE"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 3){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
var t=new Date(a, m, j);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"mercredi",etat,planHeurefin,sync,id_cal);
}
}
if(item[km]=="TH"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 4){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"jeudi",etat,planHeurefin,sync,id_cal);
}
}
if(item[km]=="FR"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 5){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"vendredi",etat,planHeurefin,sync,id_cal);
}
}
if(item[km]=="SA"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 6){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"samedi",etat,planHeurefin,sync,id_cal);
}
}
if(item[km]=="SU"){
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == 0 ){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var jour= d.getDay();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,"dimanche",etat,planHeurefin,sync,id_cal);
}
}
	 }
	 }
	 else{
var frequence='hebdomadaire';
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var someDate = new Date(planDateDebut);
someDate.setDate(someDate.getDate() + 6);
if(dayheb=='MO'){
var eq=1;
}
else if(dayheb=='TU'){
var eq=2;
}
else if(dayheb=='WE'){
var eq=3;
}
else if(dayheb=='TH'){
var eq=4;
}
else if(dayheb=='FR'){
var eq=5;
}
else if(dayheb=='SA'){
var eq=6;
}
else if(dayheb=='SU'){
var eq=0;
}
for (var k = new Date(a, m, j); k <= someDate; k.setDate(k.getDate() + 1)) {
var jourk= k.getDay();
if(jourk == eq ){
planDateDebut=k.getFullYear()+"-"+(k.getMonth()+1)+"-"+k.getDate();
}
}
var d= new Date(planDateDebut);
var m= d.getMonth();
var a= d.getFullYear();
var j= d.getDate();
var now =new Date(planDateFin);
for (var i = new Date(a, m, j); i <= now; i.setDate(i.getDate() + 7)) {
if(i.getDate() < 10 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() < 10 && i.getMonth()+1 > 9){
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-0"+i.getDate();
}
else if(i.getDate() > 9 && i.getMonth()+1 < 10){
var datesys=i.getFullYear()+"-0"+(i.getMonth()+1)+"-"+i.getDate();
}
else
{
var datesys=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate();
}
ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,planHeurefin,sync, id_cal);
}
	 }
	 }


}
}
});
 })();
}
});
}
}
function onError(msg) {
  alert('Calendar error: ' + JSON.stringify(msg));
}

function ajoutListTasks(titre,categorie,datesys,planDateDebut,planDateFin,planHeureJour,frequence,etat,planHeurefin,sync, id_cal){
	 db.transaction(function(tx) {
		 tx.executeSql("select id_tache from tache where id_cal = '" + id_cal + "' and date= '" + datesys+ "'", [] ,
	function(tx, result) {
dataset = result.rows;
  if(dataset.length == 0){
var req = "insert or replace into tache (titre,categorie,date,datedebut,datefin,heure,frequence,etat,heure_fin, sync, id_cal) values ('"
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
									+ sync
									+ "','"
									+ id_cal + "')";									
									tx.executeSql(req, []);								

}
});
});
}