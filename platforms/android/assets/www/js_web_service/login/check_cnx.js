
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

document.addEventListener("offline", chkOffline, false);	
            function chkOffline()
            {
  document.getElementById("msg-err-cnx").innerHTML = "<div style='text-align:center;padding-top:55%;'><img src='assets/img/wifi-off.png' /><br><br>";
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
	
if(lang=="fr"){
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%'>Vérifier votre connexion Internet</h2><br><button class='btn' style='background-color:#ff5722;color:#fff' onclick='reload()'>Réessayer</button></center></div>";
	 }
	 else if (lang == 'ar'){
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%''>تثبت من الانترنت </h2><br><button class='btn' style='background-color:#ff5722;color:#fff' onclick='reload()'>حاول من جديد</button></center></div>";
	 }
else{
   document.getElementById("msg-err-cnx").innerHTML += "<center><h2 style='color:#ff5722;text-transform:uppercase'>Check your internet connection</h2><br><button class='btn' style='background-color:#ff5722;color:#fff' onclick='reload()'>Retry</button></center></div>";
}
								});
								});
            }
			function reload(){
			location.reload();
			}