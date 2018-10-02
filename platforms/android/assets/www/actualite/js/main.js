
document.addEventListener('tizenhwkey', function(e) {
	var isOnLine = navigator.onLine;
if(e.keyName =="back"){  
if (isOnLine) {
    sessionStorage.clear();
    history.back();
	}
	else
	{
	document.location.href="m-deconnecter.html";		
	}
} 
});
function listbloc(id1,id2,id3,id4)
{
if (id2 == "list-bloc-ville"){
document.getElementById(id1).style.display="none";
document.getElementById(id2).style.display="block";
document.getElementById(id3).style.display="none";
document.getElementById(id4).style.display="none";
document.getElementById("bloc-geolocatisation").style.visibility="visible";
}
else
if (id2 == "list-bloc-departement"){		
document.getElementById(id1).style.display="none";
document.getElementById(id2).style.display="block";
document.getElementById(id3).style.display="none";
document.getElementById(id4).style.display="none";
document.getElementById("bloc-geolocatisation").style.visibility="hidden";
}		
}
function AffBlocPerso(id)
{
	if (id == "bloc-geolocatisation"){
	document.getElementById(id).style.display="block";
	document.getElementById(id).style.position="absolute";
	document.getElementById(id).style.top="160px";
	document.getElementById("bloc-pos").style.position="absolute";
	document.getElementById("bloc-pos").style.top="220px";
	document.getElementById("text-ut-pos").style.display="block";
	document.getElementById("list-bloc").style.display="block";
	document.getElementById("bloc-pos").style.display="block";
	document.getElementById("bloc-param").style.display="none";
	
}
	else
	if (id == "bloc-personalisation-sport"){
	document.getElementById(id).style.display="block";
	document.getElementById(id).style.position="absolute";
	document.getElementById(id).style.top="160px";
	document.getElementById("text-sport").style.display="block";
	document.getElementById("list-sport").style.display="block";
	document.getElementById("bloc-param").style.display="none";
	
	}
	else
	if (id == "bloc-personalisation-actu"){
	document.getElementById(id).style.display="block";
	document.getElementById(id).style.position="absolute";
	document.getElementById(id).style.top="160px";
	document.getElementById("text-actu").style.display="block";
	document.getElementById("list-actu").style.display="block";
	document.getElementById("bloc-param").style.display="none";
	}
	else
	if (id == "bloc-personalisation-enimage"){
	document.getElementById(id).style.display="block";
	document.getElementById(id).style.position="absolute";
	document.getElementById(id).style.top="160px";
	document.getElementById("text-image").style.display="block";
	document.getElementById("list-image").style.display="block";
	document.getElementById("bloc-param").style.display="none";	
	}	
}
function sousMenu(id1,id2)
{
if(document.getElementById(id1).style.display=="block")
{
document.images[id2].src="images/hdpi/bt_menu_wrapper.png";
document.getElementById(id1).style.display="none";
}
else
{
document.images[id2].src="images/hdpi/bt_menu_unwrapper.png";
document.getElementById(id1).style.display="block";
}
}
function lireImage(fluxRss) {
$.getJSON(fluxRss, function(donnees) {
for(i=0;i <= donnees.items.length;i++)
{ 
$('#fluxRSS').append('<div style="background:#fff;">');
$('#fluxRSS').append('<a href="ContenuImage.html?flux='+fluxRss+'&&id='+i+'"<div style="background-image:url('+ donnees.items[i].preview[1].url+');display:inline-block;width:155px;height:110px;background-size:100% 110px;position:relative;margin:10px;border:1px solid #333;"><div style="display:block;background-color:#000;opacity:0.8;color:#fff;font-family:Helvetica,sans-serif;font-weight:bold;position:absolute;bottom:0;">'+donnees.items[i].title+'</div></div>');  
$('#fluxRSS').append('</div>');
}
});
}

	
function changerTaille(modif) {
	t = t + modif;
	document.getElementById("contenu-article-flux-rss").style.fontSize = t + "em";		
	}
function affpartage(id){
	if(document.getElementById(id).style.display =="inline-block")
		{
		document.getElementById(id).style.display="none";
		}
	else{
		document.getElementById(id).style.display="inline-block";
	}
}

function redim(r)
{
	var x='zoom';
	var ch1=r.substring(0,47);
	var ch2=r.substring(54,r.length);
	var ch3=ch1+x+ch2;
	return(ch3);
}
function urlville(Texte) {
	//adresse contient la racine ou se trouve le fichier Json 
	var adresse="http://www.karwisoft.com/LaDepeche/fluxRss.json";
	if (Texte == 'agen')
		$.getJSON(adresse,  function(donnees) {
			document.location.href = donnees.ville[1].agen;
		});
	if (Texte == 'toulouse')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[0].toulouse;
		});
	if (Texte == 'auch')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[2].auch;
		});
	if (Texte == 'carcassonne')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[3].carcassonne;
		});
	if (Texte == 'albi')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[4].albi;
		});
	if (Texte == 'cahors')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[5].cahors;
		});
	if (Texte == 'castres')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[6].castres;
		});
	if (Texte == 'foix')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[7].foix;
		});
	if (Texte == 'montauban')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[8].montauban;
		});
	if (Texte == 'narbonne')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[9].narbonne;
		});
	if (Texte == 'rodez')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[10].rodez;
		});
	if (Texte == 'tarbes')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.ville[11].tarbes;
		});
	if (Texte == 'ariege')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[0].ariege;
		});
	if (Texte == 'aude')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[1].aude;
		});
	if (Texte == 'aveyron')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[2].aveyron;
		});
	if (Texte == 'haute-garonne')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[3].hauteg;
		});
	if (Texte == 'gers')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[4].gers;
		});
	if (Texte == 'lot')
		$.getJSON(adresse,function(donnees) {
			document.location.href = donnees.departement[5].lot;
		});
	if (Texte == 'lot-et-garonne')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[6].lotg;
		});
	if (Texte == 'hautes-pyrenees')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[7].hautesp;
		});
	if (Texte == 'tarn')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[8].tarn;
		});
	if (Texte == 'tarn-et-garonne')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.departement[9].tarng;
		});
		if (Texte == 'sports')
		$.getJSON(adresse, function(donnees) {
			
			document.location.href = donnees.autres[0].sports;
		});
		if (Texte == 'top-14')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[1].top14;
		});
		if (Texte == 'pro-d2')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[2].prod2;
		});
		if (Texte == 'stade-toulousain')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[3].stadetoulousain;
		});
		if (Texte == 'toulouse-football-club')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[4].toulousefootballclub;
		});
		if (Texte == 'actu')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[5].actu;
		});
		if (Texte == 'faits-divers')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[6].faitsdivers;
		});
		if (Texte == 'france')
		$.getJSON(adresse,  function(donnees) {
			document.location.href = donnees.autres[7].france;
		});
		if (Texte == 'international')
		$.getJSON(adresse,  function(donnees) {
			document.location.href = donnees.autres[8].international;
		});
		if (Texte == 'eco')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[9].eco;
		});
		if (Texte == 'people')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[10].people;
		});
		if (Texte == 'insolite')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[11].insolite;
		});
		if (Texte == 'home')
		$.getJSON(adresse, function(donnees) {
			document.location.href = donnees.autres[12].home;
		});
}

function dateFr(dt){
	var jour=dt.substring(0,3);
	//alert(jour);	
	var ch1=dt.substring(3,7);
	//alert(ch1);
	var ch2=dt.substring(dt.length-20,dt.length);
	//alert(ch2);
	var mois=dt.substring(dt.length-23,dt.length-20);
	//alert(mois);
	
	
	var jourFr;
	if (jour == 'Mon')
	{
	jourFr="Lun";	
	}
	if (jour == 'Tue')
	{
	jourFr="Mar";	
	}
	if (jour == 'Wed')
	{
	jourFr="Mer";	
	}
	if (jour == 'Thu')
	{
	jourFr="Jeu";	
	}
	if (jour == 'Fri')
	{
	jourFr="Ven";	
	}
	if (jour == 'Sat')
	{
	jourFr="Sam";	
	}
	if (jour == 'Sun')
	{
	jourFr="Dim";	
	}
		
	var moisFr;
	if (mois == 'Jan')
	{
	moisFr="Jan";	
	}
	
	if (mois == 'Feb')
	{
	moisFr="Fev";	
	}
	
	if (mois == 'Mar')
	{
	moisFr="Mar";	
	}
	
	if (mois == ' Apr')
	{
	moisFr="Avr";	
	}
	
	if (mois == ' May')
	{
	moisFr="Mai";	
	}
	
	if (mois == ' Jun')
	{
	moisFr="Jun";	
	}
	
	if (mois == 'Jul')
	{
	moisFr="Jul";	
	}
	
	if (mois == 'Aug')
	{
	moisFr="Aou";	
	}
	
	if (mois == 'Sep')
	{
	moisFr="Sep";	
	}
	
	if (mois == 'Oct')
	{
	moisFr="Oct";	
	}
	
	if (mois == 'Nov')
	{
	moisFr="Nov";	
	}
	
	if (mois == 'Dec')
	{
	moisFr="Dec";	
	}
	var dateFR=jourFr+ch1+" "+moisFr+ch2;
	return dateFR;
}