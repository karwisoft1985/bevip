var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

document.addEventListener('deviceready', onDeviceReady.bind(this), false);
function onDeviceReady() {
	$.getJSON("http://karwisoft.tn/php_bevip/support/count.php",	
  function (donnees) {
 var nv_nombre = donnees.notif[0].nombre;
db.transaction(function(tx) {
tx.executeSql("SELECT nombre FROM notif", [] ,

								function(tx, result) { 	
									dataset = result.rows;	
									var item = dataset.item(0);
									var nombre = item['nombre'];
								if (nv_nombre > nombre){
cordova.plugins.notification.local.isScheduled(3, function (isScheduled) {
if(isScheduled == false){
msgtoday();
}
});
}
});
});	
}); 													
}												
function msgtoday(){
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 	
var today = new Date();
var tomorrow = new Date();
 tomorrow.setDate(today.getDate());
 tomorrow.setHours(today.getHours());
tomorrow.setMinutes(today.getMinutes());
tomorrow.setSeconds(today.getSeconds());
var tomorrow_at_6_am = new Date(tomorrow);
var sound = device.platform == 'Android' ? 'file://beep.mp3' : 'file://beep.caf';
if(lang=="fr"){
								  cordova.plugins.notification.local.schedule({
					
                id: 3,
                title: "Nouveau message",
                message: "Cliquez ici pour lire les nouveaux messages",  
                sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else if (lang == 'ar'){
								  cordova.plugins.notification.local.schedule({
					
                id: 3,
                title: "رسالة جديدة",
                message: "اضغط هنا لقراءة الرسائل الجديدة",  
                sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else{
								  cordova.plugins.notification.local.schedule({
					
                id: 3,
                title: "New message",
                message: "Click here to read the new messages",  
                sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
	cordova.plugins.notification.local.on("click", function(notification) {
	window.location.href = 'support.html';
});	
});	
});	
}	