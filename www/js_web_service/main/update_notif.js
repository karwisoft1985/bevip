var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;
$(document).ready(function () {
$.getJSON("http://karwisoft.tn/php_bevip/support/count.php",
function (donnees) {	
var nombre =donnees.notif[0].nombre;
var reqn1 = "update notif set nombre= '"+ nombre + "' ";
db.transaction(function(tx) {
tx.executeSql(reqn1, []);		
});
});
});