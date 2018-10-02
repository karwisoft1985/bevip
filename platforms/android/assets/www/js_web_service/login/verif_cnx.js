var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

             document.addEventListener("online",chkOnline,false);
			 document.addEventListener("offline",chkOffline,false);
			function chkOnline()
            {
			  location.reload();
            }
            function chkOffline()
            {
              document.getElementById("bl-bot").innerHTML = "<div style='text-align:center;margin-top:20%;'><img src='assets/img/wifi-off.png' /><br><br>";
               db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
	
if(lang=="fr"){
   document.getElementById("bl-bot").innerHTML += "<h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%''>Vérifier votre connexion Internet</h2></div>";
	 }
	 else if (lang == 'ar'){
   document.getElementById("bl-bot").innerHTML += "<h2 style='color:#ff5722;text-transform:uppercase;margin-left:2%''>تثبت من الانترنت </h2></div>";
	 }
else{
   document.getElementById("bl-bot").innerHTML += "<h2 style='color:#ff5722;text-transform:uppercase'>Check your internet connection</h2></div>";
}
			});
			});
			}
             
	  