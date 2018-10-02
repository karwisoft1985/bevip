$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
var userLang = navigator.language || navigator.userLanguage; 
 var contenuHtml='';
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
if(userLang=="fr-FR"){	
cat=cat;
}
else if (userLang == 'ar-EG' || userLang == 'ar-TN'){
 if(cat=="Familiale")
{cat='عائلي';}
else if(cat=="Sociale")
{cat='اجتماعي';}
else if(cat=="Personnel")
{cat='شخصي';}
else if(cat=="Professionnel")
{cat='إحترافي';}
}
else {
 if(cat=="Familiale")
{cat='Family';}
else if(cat=="Sociale")
{cat='Social';}
else if(cat=="Personnel")
{cat='Personal';}
else if(cat=="Professionnel")
{cat='Professional';}
}
					 
contenuHtml += '<div  style="padding:20px;text-align:center;background:#ff5722;color:#fff;font-size:17px;font-weight:bold;"  id="categorie" >'+cat+'<br><span  style="font-size:12px;font-weight:normal;">Equitis Romani autem esse filium criminis loco poni</span></div>';

contenuHtml += '</div>';
contenuHtml += '</div>';
					
   document.getElementById("cat").innerHTML = contenuHtml;

});
