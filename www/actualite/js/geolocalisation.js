
var lattitude=new Array; 
lattitude[0]="44.200000"; lattitude[1]="43.933333";lattitude[2]="43.650000";
lattitude[3]="44.433333"; lattitude[4]="43.216667";lattitude[5]="43.600000";
lattitude[6]="42.966667"; lattitude[7]="44.016667";lattitude[8]="43.183333";
lattitude[9]="44.333333"; lattitude[10]="43.233333";lattitude[11]="43.600000";
var longitude=new Array; 
longitude[0]="0.633333"; longitude[1]="2.150000"; longitude[2]="0.583333";
longitude[3]="1.433333"; longitude[4]="2.350000"; longitude[5]="2.250000";
longitude[6]="1.600000"; longitude[7]="1.350000"; longitude[8]="3.000000";
longitude[9]="2.566667"; longitude[10]="0.083333"; longitude[11]="1.433333";
var geolocalisation=new Array;
geolocalisation[0]=lattitude;
geolocalisation[1]=longitude;


function geolocaliser()
{
	document.getElementById("list-bloc-position").innerHTML="";
if (navigator.geolocation)
{
	var ville= new Array();
	ville[0]="Agen";ville[1]="Albi";ville[2]="Auch";
	ville[3]="Cahros";ville[4]="Carcassone";ville[5]="Castres";
	ville[6]="Foix";ville[7]="Montaubon";ville[8]="Narbonne";
	ville[9]="Rodez";ville[10]="Tarbes";ville[11]="Toulouse";
	
	var flux= new Array();
	flux[0]="http://www.ladepeche.fr/rss/agen.rss?mode=mobile";flux[1]="http://www.ladepeche.fr/rss/albi.rss?mode=mobile";flux[2]="http://www.ladepeche.fr/rss/auch.rss?mode=mobile";
	flux[3]="http://www.ladepeche.fr/rss/cahros.rss?mode=mobile";flux[4]="http://www.ladepeche.fr/rss/carcassone.rss?mode=mobile";flux[5]="http://www.ladepeche.fr/rss/castres.rss?mode=mobile";
	flux[6]="http://www.ladepeche.fr/rss/foix.rss?mode=mobile";flux[7]="http://www.ladepeche.fr/rss/montaubon.rss?mode=mobile";flux[8]="http://www.ladepeche.fr/rss/narbonne.rss?mode=mobile";
	flux[9]="http://www.ladepeche.fr/rss/rodez.rss?mode=mobile";flux[10]="http://www.ladepeche.fr/rss/tarbes.rss?mode=mobile";flux[11]="http://www.ladepeche.fr/rss/toulouse.rss?mode=mobile";
navigator.geolocation.getCurrentPosition(function(position)
{
var disatnce=new Array();
var resultat=new Array;
for(var i=0;i<=11;i++)
{
resultat[i]=distance(position.coords.latitude,position.coords.longitude,parseFloat(geolocalisation[0][i]),parseFloat(geolocalisation[1][i]));
}  
var tab=tri(resultat,ville,flux,function(a,b){return a<b ;});
for(var i=0;i<=4;i++)
{
$("#list-bloc-position").append("<a href=javascript:insertFluxGeo('"+tab[2][i]+"','"+tab[1][i]+"');><li>"+tab[1][i]+"<span id='preference-geo'>"+tab[0][i]+"</span></li></a>");
}
});
}
document.getElementById("list-bloc-position").style.display="block";
document.getElementById("list-bloc-position").style.position="absolute";
document.getElementById("list-bloc-position").style.top="52px";
document.getElementById("list-bloc").style.display="none";
document.getElementById("list-bloc-ville").style.display="none";
}


function distance(lat_a, lon_a, lat_b, lon_b) 
{
  a = Math.PI / 180;
  lat1 = lat_a * a;
  lat2 = lat_b * a;
  lon1 = lon_a * a;
  lon2 = lon_b * a;
  t1 = Math.sin(lat1) * Math.sin(lat2);
  t2 = Math.cos(lat1) * Math.cos(lat2);
  t3 = Math.cos(lon1 - lon2);
  t4 = t2 * t3;
  t5 = t1 + t4;
  rad_dist = Math.atan(-t5/Math.sqrt(-t5 * t5 +1)) + 2 * Math.atan(1); 
  return (rad_dist * 3437.74677 * 1.1508)*1.6093470878864446;            
} 
var f = function(a,b){
   return a<b ;
} 
function tri(kilometrage,ville,flux,f){
var tab=new Array();
for(var i= 0 ; i< kilometrage.length; i++){ 
// le tableau est trié de 0 à i-1
// La boucle interne recherche le maximum  
// de i+1 à la fin du tableau. 
for(var j=i+1; j< kilometrage.length; j++){
if(f(kilometrage[j],kilometrage[i]) ){
var temp1 = kilometrage[j];
kilometrage[j]=kilometrage[i];
kilometrage[i]=temp1;
var temp2 = ville[j];
ville[j]=ville[i];
ville[i]=temp2;
var temp3 = flux[j];
flux[j]=flux[i];
flux[i]=temp3;}}}   
tab[0]=kilometrage;
tab[1]=ville;
tab[2]=flux;
return tab;
}