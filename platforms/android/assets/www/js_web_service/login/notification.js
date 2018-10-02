document.addEventListener('deviceready', onDeviceReady.bind(this), false);
function onDeviceReady() {
var date = new Date();
var j=date.getDate();
if(j<10){
j='0'+j;
}
var m=date.getMonth()+1;
if(m<10){
m='0'+m;
}
var y=date.getFullYear();
date=y+'-'+m+'-'+j;
db.transaction(function(tx) {
tx.executeSql("SELECT id_tache,heure,titre,date,rappel,heurerap FROM tache where date = '" + date+"'", [] ,

								function(tx, result) { 								
				
                var sound = device.platform == 'Android' ? 'file://0564.wav' : 'file://beep.caf';
									dataset = result.rows;	
									if (dataset.length > 0){
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, resultl) {

                                datasetl = resultl.rows;
								
								iteml = datasetl.item(0);
								
								var lang = iteml['lang']; 
								
									for ( var i = 0, item = null; i < dataset.length; i++) {
										item = dataset.item(i);
										var id_tache = item['id_tache'];
										var titre = item['titre'];
										var datedeb = item['date'];
										var heure = item['heure'];
										var rappel = item['rappel'];
										var heurerap = item['heurerap'];
										if(rappel==1){
										if(lang=="fr"){
										if(titre=='Read regularly'){
					                     titre ='Lire régulièrement';}	 
										 else if(titre=='Take healthy food'){
					                      titre ='Prenez des aliments sains';}										
										else if(titre=='Economize'){
					                     titre ='Economiser';}
										 else if(titre=='Do sports'){
					                     titre ='Faire du sport';}
										 else if(titre=='Attend conferences'){
					                     titre ='Assister à des conférences';}
										 else if(titre=='Work hard'){
										titre ='Travailler dur';}
										 else if(titre=='Study'){
					                     titre ='Etudier';}
										 else if(titre=='Learn a language'){
					                     titre ='Apprendre une langue';}
										 else if(titre=='Spend time with family'){
					                     titre ='Passer du temps en famille';}
										 else if(titre=='Making weekends with family'){
					                    titre ='Faire des week-ends en famille';}
										 else if(titre=='lend touches'){
					                     titre ='Prêter de petites attentions';}
										 else if(titre=='See my friends'){
					                     titre ='Voir mes amis';}
										 else if(titre=='volunteering'){
					                     titre ='Faire du bénévolat';}
										 else if(titre=='give an association'){
					                     titre ='Donner à une association';}
										 else {
										titre =titre;
											}
										}
										else if (lang == 'ar'){
										if(titre=='Read regularly'){
					                    titre ='أقرأ بانتظام';}	 
										 else if(titre=='Take healthy food'){
					                     titre ='تناول طعام صحي';}										
										else if(titre=='Economize'){
					                     titre ='اقتصد';}
										 else if(titre=='Do sports'){
					                     titre ='ممارسة الرياضة';}
										 else if(titre=='Attend conferences'){
					                     titre ='حضور مؤتمرات';}
										 else if(titre=='Work hard'){
					                     titre ='عمل بجد';}
										 else if(titre=='Study'){
					                     titre ='دراسة';}
										 else if(titre=='Learn a language'){
					                     titre ='تعلم لغة';}
										 else if(titre=='Spend time with family'){
					                     titre ='قضاء وقت مع العائلة';}
										 else if(titre=='Making weekends with family'){
					                     titre ='جعل عطلة نهاية الأسبوع مع العائلة';}
										 else if(titre=='lend touches'){
					                     titre ='تقديم لمسات';}
										 else if(titre=='See my friends'){
					                     titre ='رؤية أصدقائي';}
										 else if(titre=='volunteering'){
					                     titre ='تطوع';}
										 else if(titre=='give an association'){
					                     titre ='منح لجمعية';} 
										  else {
										titre =titre;
											}
										} 
										 else {
										titre =titre;
											}										
										
var tomorrowt = new Date();
var day=datedeb.substring(8, 10);
tomorrowt.setDate(day);	
 var hour=heure.substring(0, 2);
 var min=heure.substring(3, 5);
tomorrowt.setHours(hour);
tomorrowt.setMinutes(min);
tomorrowt.setSeconds(00);
if(heurerap=='heure_deb'){
var heure_deb=tomorrowt;}
else{
var y=tomorrowt.getFullYear();		
var mm=tomorrowt.getMonth();	
var d=tomorrowt.getDate();	
var h=tomorrowt.getHours();	
var m=tomorrowt.getMinutes();	
var tomorrowtold = new Date(y, mm, d, h, m, 0, 0);
if(heurerap=='10_min'){
var heure_deb = new Date(tomorrowtold - 10*60*1000);}
else if(heurerap=='30_min'){
var heure_deb = new Date(tomorrowtold - 30*60*1000);}
else if(heurerap=='1_h'){
var heure_deb = new Date(tomorrowtold - 1*60*60*1000);}
}			
								
				cordova.plugins.notification.local.schedule({					
                id: id_tache,
				title: titre,  
				message:heure,	
                //sound: sound,			
				at: heure_deb
            });	
	cordova.plugins.notification.local.on("click", function(notification) {
	window.location.href = 'tasks.html';
});		

}									
}

});
});
}

cordova.plugins.notification.local.isScheduled(1, function (isScheduled) {
if(isScheduled == true){
today();
}
/*else{
today();
}*/
});
cordova.plugins.notification.local.isScheduled(2, function (isScheduled) {
if(isScheduled == true){
tomorrow();
}/*
else{
today();
}*/
});													
function today(){
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
var today = new Date();
var tomorrow = new Date();
 tomorrow.setDate(today.getDate());
 tomorrow.setHours(22);
tomorrow.setMinutes(00);
tomorrow.setSeconds(00);
var tomorrow_at_6_am = new Date(tomorrow);
                var sound = device.platform == 'Android' ? 'file://beep.mp3' : 'file://beep.caf';
									if (dataset.length > 0){
if(lang=="fr"){
								  cordova.plugins.notification.local.schedule({
					
                id: 1,
                title: "Suivez vos projets",
                message: "Veuillez cocher les tâches terminées",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else if (lang == 'ar'){
								  cordova.plugins.notification.local.schedule({
					
                id: 1,
                title: "تابع مشاريعك",
                message: "يرجى وضع علامة للمهام المكتملة",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else{
								  cordova.plugins.notification.local.schedule({
					
                id: 1,
                title: "Follow your projects",
                message: "Please check the completed tasks",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
	cordova.plugins.notification.local.on("click", function(notification) {
	window.location.href = 'evaluation.html';
});	
	
}
else{
if(lang=="fr"){
					  cordova.plugins.notification.local.schedule({
						
                id: 1,
                title: "Rappel",
                message: "Un but sans plan n'est qu'un souhait",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
}
	else if (lang == 'ar'){
						  cordova.plugins.notification.local.schedule({
						
                id: 1,
                title: "تذكير",
                message: "هدف بدون خطة هو مجرد رغبة",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
	}
	else{
						  cordova.plugins.notification.local.schedule({
						
                id: 1,
                title: "Reminder",
                message: "A goal without a plan is just a wish",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
			}

	cordova.plugins.notification.local.on("click", function(notification) {

	window.location.href = 'store.html';
	playbot();
});

}
});
});
}					
function tomorrow(){
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
tomorrow.setHours(22);
tomorrow.setMinutes(00);
tomorrow.setSeconds(00);
var tomorrow_at_6_am = new Date(tomorrow);
                var sound = device.platform == 'Android' ? 'file://beep.mp3' : 'file://beep.caf';

									if (dataset.length > 0){
if(lang=="fr"){
								  cordova.plugins.notification.local.schedule({
					
                id: 2,
                title: "Suivez vos projets",
                message: "Veuillez cocher les tâches terminées",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else if (lang == 'ar'){
								  cordova.plugins.notification.local.schedule({
					
                id: 2,
                title: "تابع مشاريعك",
                message: "يرجى وضع علامة للمهام المكتملة",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
		else{
								  cordova.plugins.notification.local.schedule({
					
                id: 2,
                title: "Follow your projects",
                message: "Please check the completed tasks",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });
		}
	cordova.plugins.notification.local.on("click", function(notification) {
	window.location.href = 'evaluation.html';
});
}
else{
if(lang=="fr"){
					  cordova.plugins.notification.local.schedule({
						
                id: 2,
                title: "Rappel",
                message: "Un but sans plan n'est qu'un souhait",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
}
	else if (lang == 'ar'){
						  cordova.plugins.notification.local.schedule({
						
                id: 2,
                title: "تذكير",
                message: "هدف بدون خطة هو مجرد رغبة",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
	}
	else{
						  cordova.plugins.notification.local.schedule({
						
                id: 2,
                title: "Reminder",
                message: "A goal without a plan is just a wish",  
                //sound: sound,
				firstAt: tomorrow_at_6_am
            });	
			}

	cordova.plugins.notification.local.on("click", function(notification) {
	window.location.href = 'store.html';
	//playbot();
});

}
});
});
}
});
});
}

 function playbot() {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
        var u = new SpeechSynthesisUtterance();
		if(lang=="fr"){
        var txt = "Un bon plan mis en œuvre aujourd'hui est meilleur qu'un plan parfait mis en œuvre demain";}
		else if (lang == 'ar'){
        var txt = "خطة جيدة تنفذ اليوم خير من خطة ممتازة تنفذ غدا";}
		else{
        var txt = "A good plan implemented today is better than a perfect plan implemented tomorrow";}
        u.text = txt;
       if (lang == 'ar'){
		u.lang = 'ar-EG';
		}
		else if(lang=="fr"){
		u.lang = 'fr-FR';
		}
		else {
		u.lang = 'en-US';
		} 
        speechSynthesis.speak(u);  
		});		
		});		
      }