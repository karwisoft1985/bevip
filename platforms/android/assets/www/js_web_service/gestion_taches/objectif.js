var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;
$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );

var contenuHtml='';
var contenuHtml1='';
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 

contenuHtml += '<div style="background:#efefef;padding:20px;text-align:center;">';
contenuHtml += '<div style="border:1px solid #ddd;border-top-left-radius:20px;border-top-right-radius:20px;">';
if(cat=='Personnel'){
contenuHtml += '<img src="assets/img/store/storeper.png" style="width:100%;border-top-left-radius:20px;border-top-right-radius:20px;">';}
else if(cat=='Familiale'){
contenuHtml += '<img src="assets/img/store/storefam.png" style="width:100%;border-top-left-radius:20px;border-top-right-radius:20px;">';}
else if(cat=='Professionnel'){
contenuHtml += '<img src="assets/img/store/storepro.png" style="width:100%;border-top-left-radius:20px;border-top-right-radius:20px;">';}
else if(cat=='Sociale'){
contenuHtml += '<img src="assets/img/store/storesoc.png" style="width:100%;border-top-left-radius:20px;border-top-right-radius:20px;">';}


if(lang=="fr"){	
var categ=cat;
}
else if (lang == 'ar'){
 if(cat=="Familiale")
{var categ='عائلي';}
else if(cat=="Sociale")
{var categ='اجتماعي';}
else if(cat=="Personnel")
{var categ='شخصي';}
else if(cat=="Professionnel")
{var categ='إحترافي';}
}
else {
 if(cat=="Familiale")
{var categ='Family';}
else if(cat=="Sociale")
{var categ='Social';}
else if(cat=="Personnel")
{var categ='Personal';}
else if(cat=="Professionnel")
{var categ='Professional';}
}
					 
contenuHtml += '<div  style="padding:20px;text-align:center;background:#ff5722;color:#fff;font-size:17px;font-weight:bold;"  id="categorie" >'+categ+'<br><span  style="font-size:12px;font-weight:normal;">';
if(cat=="Familiale"){
if(lang=="fr"){
contenuHtml += 'Prouver à ceux que l’on aime de quoi on est capable est extrêmement important';
}
else if(lang == 'ar'){
contenuHtml += 'إثبات ما نحن قادرون على فعله للذين نحب هو في غاية الأهمية';
}
else {
contenuHtml += 'Prove to those we love what we are capable of is extremely important';
}
}
else if(cat=="Sociale")
{
if(lang=="fr"){
contenuHtml +='Rejoignez un projet social et participez à améliorer les conditions de vie d\'une population';}
else if(lang == 'ar'){
contenuHtml += 'إنضم إلى مشروع اجتماعي وشارك في تحسين الظروف المعيشية للسكان';
}
else {
contenuHtml += 'Join a social project and participate in improving the living conditions of a population';
}
}
else if(cat=="Professionnel")
{
if(lang=="fr"){	
contenuHtml +='Lorsque tout le monde sait exactement ce qui doit être fait et quand, le travail d\'équipe se fait tout en douceur';
}
else if(lang == 'ar'){
contenuHtml += 'عندما يعرف الجميع  ما يجب القيام به بالضبط ومتى، يتم العمل الجماعي بسلاسة';
}
else {
contenuHtml += 'When everyone knows exactly what needs to be done and when, teamwork is done smoothly';
}
}
else if(cat=="Personnel")
{
if(lang=="fr"){
contenuHtml +='Faites ce que vous souhaitez et profitez de plus de tranquillité d\'esprit en cours de route';
}
else if(lang == 'ar'){
contenuHtml += 'إفعل ما تريد وتمتع بمزيد من راحة البال';
}
else {
contenuHtml += 'Do what you want and enjoy more peace of mind along the way';
}
}

contenuHtml += '</span></div>';

contenuHtml += '</div>';
contenuHtml += '</div>';

                    if(lang=="fr"){
					
				         contenuHtml1 += '<option value="ponctuel">Evénement ponctuel</option>';
				         contenuHtml1 += '<option value="quotidien">Quotidien</option>';
				         contenuHtml1 += ' <option value="hebdomadaire">Hebdomadaire</option>';
						 contenuHtml1 += '<option value="mensuel">Mensuel</option>';
						 contenuHtml1 += '<option value="personnalise">Personnalisé</option>';
					}
					else if (lang == 'ar'){
					
				        contenuHtml1 += ' <option value="ponctuel">مرة واحدة</option>';
				        contenuHtml1 += ' <option value="quotidien">يوميا</option>';
				        contenuHtml1 += '  <option value="hebdomadaire">أسبوعيا</option>';
						contenuHtml1 += '<option value="mensuel">شهريا</option>';
						contenuHtml1 += ' <option value="personnalise">شخصي</option>';	
						
					}
					else {
				        contenuHtml1 += ' <option value="ponctuel">one-off event</option>';
				        contenuHtml1 += ' <option value="quotidien">Daily</option>';
				        contenuHtml1 += '  <option value="hebdomadaire">Weekly</option>';
					    contenuHtml1 += ' <option value="mensuel">Monthly</option>';
						contenuHtml1 += ' <option value="personnalise">Custom</option>';
					}
					
   document.getElementById("cat").innerHTML = contenuHtml;
   document.getElementById("type").innerHTML = contenuHtml1;

});
});
});
