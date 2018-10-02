 
var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

/********Récupération de l'adresse mac du tel, indicatif et etat sim  *******/
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady(){
 window.plugins.sim.getSimInfo(successCallback, errorCallback); 
 	 window.MacAddress.getMacAddress(
function(macAddress) {mac(macAddress);},function(fail) {alert(fail);}
);
  //window.plugins.imeiplugin.getImei(callback);   
        }
		
 function successCallback(result) {
  var country=JSON.stringify(result.countryCode);
  var simState=JSON.stringify(result.simState);
sessionStorage.setItem("country",country);
sessionStorage.setItem("simState",simState);
 }
 function indicatif_tel() {
	var simState=sessionStorage.getItem("simState");
	var country=sessionStorage.getItem("country");
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								item = dataset.item(0);
								
								var lang = item['lang'];
								
if(simState==5){
document.getElementById('empty').style.display='none';
}
else
{
document.getElementById('notempty').style.display='none';
} 

if (lang == 'ar' ){
 if(country=='"fr"'){
 
 document.getElementById("ind").innerHTML='<input  type="text"  style="width:20%;margin-right:10px;"  class="input-install" value="+33" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;" value="فرنسا" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="France" name="pays" id="pays" disabled="disabled"/>';
 
 }
 else if(country=='"tn"')
 {
 
 document.getElementById("ind").innerHTML='<input  type="text"  style="width:20%;margin-right:10px;"   class="input-install" value="+216" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;" value="تونس" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Tunisia" name="pays" id="pays" />';
 
 }else if(country=='"af"')
 {
 
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+93" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أفغانستان" name="country" id="country" disabled="disabled"/>';
   document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Afghanistan" name="pays" id="pays" />';
 }
 else if(country=='"al"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+355" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="ألبانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+213" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الجزائر" name="country" id="country" disabled="disabled"/>';
   document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Algeria" name="pays" id="pays" />';
 }
 else if(country=='"ad"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+376" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="أندورا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ao"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+244" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="أنغولا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ar"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+54" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="الأرجنتين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"am"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+374" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="أرمينيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"aw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+297" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Aruba" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"au"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+61" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أستراليا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"at"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+43" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Austria" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"az"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+994" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="أذربيجان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+973" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="البحرين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+880" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بنغلاديش" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"by"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+375" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Belarus" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"be"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+32" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بلجيكا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+501" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بليز" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+229" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بنين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+975" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بوتان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+591" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بوليفيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ba"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+387" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="البوسنة والهرسك" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"br"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+55" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="البرازيل" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+267" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بوتسوانا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"io"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+246" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="British Indian Ocean Territory" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+673" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بروناي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+359" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بلغاريا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+226" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="بوركينا فاسو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+257" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بوروندي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+238" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الرأس الأخضر" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"kh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+855" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كمبوديا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ky"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1345" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Caïmans" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+237" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الكاميرون" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ca"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كندا" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Canada" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"cl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+56" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تشيلي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+86" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الصين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"aq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+672" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Antarctica" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+357" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cyprus" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"co"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+57" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كولومبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"km"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+269" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Comoros" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+242" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الكونغو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+243" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جمهورية الكونغو الديمقراطية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ck"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+682" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cook Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+850" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كوريا الجنوبية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+82" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كوريا الشمالية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"so"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+252" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الصومال" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"za"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+27" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جنوب أفريقيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+506" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Costa Rica" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+385" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كرواتيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+53" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cuba" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+599" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Curacao" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+31" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="النرويج" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+45" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الدنمارك" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+253" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Djibouti" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"do"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1809" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جمهورية الدومينيكان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1767" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="دومينيكا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"eg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+20" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="مصر" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Egypte" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"sv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+503" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="السلفادور" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ae"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+971" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الإمارات العربية المتحدة" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="UAE" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ec"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+593" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الإكوادور" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+670" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="East Timor" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"er"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+291" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إريتريا " name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"es"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+34" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إسبانيا" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Spain" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ee"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+372" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إستونيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"us"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الولايات المتحدة الأمريكية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"et"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+251" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إثيوبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+500" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Falkland Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+298" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Faroe Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+679" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فيجي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+358" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فنلندا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+241" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الغابون" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+220" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غامبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ge"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+995" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جورجيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+233" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غانا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"de"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+49" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ألمانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+350" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Gibraltar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+30" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="اليونان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1473" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Grenade" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+299" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Greenland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1671" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guam" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+502" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غواتيمالا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+224" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غينيا" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"gq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+240" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غينيا الاستوائية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+245" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غينيا بيساو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+592" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="غيانا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ht"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+509" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="هايتي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+504" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="هندوراس" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+852" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Hong Kong" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+36" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Hungary" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"in"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+91" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الهند" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"id"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+62" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إندونيسيا" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"iq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+964" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="العراق" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Iraq" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ir"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+98" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إيران" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ie"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+353" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أيرلندا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"is"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+354" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Iceland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"it"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+39" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="إيطاليا" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Italy" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"jm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1876" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جامايكا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"jp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+81" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="اليابان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ci"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+225" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ivory Coast" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"jo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+962" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الأردن" name="country" id="country" disabled="disabled"/>';
 }

 else if(country=='"kz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+7" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كازاخستان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ke"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+254" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كينيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+996" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kirghizistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+965" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الكويت" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"xk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+383" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كوسوفو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ls"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+266" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Lesotho" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+371" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="لاتفيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+961" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="لبنان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"la"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+856" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="لاوس" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+996" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kyrgyzstan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+231" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ليبيريا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ly"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+218" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ليبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"li"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+423" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Liechtenstein" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+370" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ليتوانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+352" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="لوكسمبورغ" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+853" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Macau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+389" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Macedonia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+261" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="مدغشقر" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"my"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+60" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ماليزيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+265" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ملاوي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+960" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Maldives" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ml"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+223" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="مالي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+356" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="مالطا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1670" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Mariannes du Nord" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ma"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+212" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="المغرب" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden"  class="input-install" style="width:80%;margin:0px;" value="Marroco" name="pays" id="pays"/>';
 }

 else if(country=='"mh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+692" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Marshall Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+596" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Martinique" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+230" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mauritius" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+222" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="موريتانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mx"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+52" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="المكسيك" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+691" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Micronesia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+377" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="موناكو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"md"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+373" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Moldova" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+976" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="منغوليا" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"me"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+382" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Montenegro" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ms"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1664" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Montserrat" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+258" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="موزمبيق" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"na"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+264" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ناميبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+95" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Myanmar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+674" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ناورو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"np"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+977" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nepal" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ni"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+505" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="نيكاراغوا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ne"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+227" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="النيجر" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ng"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+234" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="نيجيريا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ki"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+686" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="كيريباتي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+683" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Niue" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"no"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+47" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Northern Mariana Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+597" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سورينام" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+687" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nouvelle-Calédonie" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"om"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+968" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="عمان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ug"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+256" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أوغندا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+998" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أوزبكستان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+92" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="باكستان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+680" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بالاو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ps"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+970" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فلسطين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+507" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بنما" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+675" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بابوا غينيا الجديدة" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"py"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+595" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="باراغواي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pe"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+51" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بيرو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ph"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+63" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الفلبين" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+64" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="New Zealand" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+687" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="New Caledonia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+48" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="بولندا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+689" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="French Polynesia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1787" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Porto Rico" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+351" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="البرتغال" name="country" id="country" disabled="disabled"/>';
 }
else if(country=='"qa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+974" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="قطر" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"yt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+262" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mayotte" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ro"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+40" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="رومانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+44" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="المملكة المتحدة" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"ru"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+7" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="روسيا" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Russia" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"rw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+250" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="رواندا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+290" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Helena" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1758" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سانت لوسيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+378" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سان مارينو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+590" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Barthelemy" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+508" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint-Pierre-et-Miquelon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1784" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint-Vincent-et-les Grenadines" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+677" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Solomon Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ws"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+685" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ساموا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+508" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Pierre and Miquelon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"as"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1684" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Samoa américaines" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"st"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+239" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ساو تومي وبرينسيب" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+221" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="السنغال" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+966" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="السعودية" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"rs"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+381" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="صربيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+248" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سيشل" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+232" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سيراليون" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+65" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Singapore" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+421" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سلوفاكيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"si"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+386" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سلوفينيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"so"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+252" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الصومال" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+94" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سريلانكا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+249" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="السودان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ss"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+211" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جنوب السودان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+94" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sri Lanka" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"se"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+46" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="السويد" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ch"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+41" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سويسرا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+597" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سورينام" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+268" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Swaziland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+963" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="سوريا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+886" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Taiwan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+992" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tajikistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+255" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تنزانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"td"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+235" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تشاد" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+238" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cape Verde" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+236" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="جمهورية أفريقيا الوسطى" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+420" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Czech Republic" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"th"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+66" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تايلاند" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+228" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="توغو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+690" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tokelau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"to"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+676" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تونغا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1868" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="ترينيداد وتوباغو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+993" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تركمانستان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1649" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Turks-et-Caïcos" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+90" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="تركيا" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Turkey" name="pays" id="pays" disabled="disabled"/>';

 }
 else if(country=='"tv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+688" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="توفالو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ua"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+380" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أوكرانيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+598" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الأوروغواي" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+998" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="أوزبكستان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+678" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فانواتو" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"va"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+379" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="الفاتيكان" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ve"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+58" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فنزويلا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1284" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Vierges britanniques" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1340" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Vierges des États-Unis" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+84" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="فيتنام" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"wf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+681" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Wallis and Futuna" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ye"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+967" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="اليمن" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"zm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+260" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="زامبيا" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"zw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+263" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="زيمبابوي" name="country" id="country" disabled="disabled"/>';
 }
 
 
 }
 else{
 if(country=='"fr"'){
 
 document.getElementById("ind").innerHTML='<input  type="text"  style="width:20%;margin-right:10px;"  class="input-install" value="+33" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;" value="France" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="France" name="pays" id="pays" />';
 
 }
 else if(country=='"tn"')
 {
 
 document.getElementById("ind").innerHTML='<input  type="text"  style="width:20%;margin-right:10px;"   class="input-install" value="+216" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;" value="Tunisia" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Tunisia" name="pays" id="pays"/>';
 
 }else if(country=='"af"')
 {
 
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+93" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Afghanistan" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Afghanistan" name="pays" id="pays" />';
 }
 else if(country=='"al"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+355" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Albania" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+213" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Algeria" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Algeria" name="pays" id="pays" />';
 }
 else if(country=='"ad"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+376" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Andorra" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ao"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+244" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Angola" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ar"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+54" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Argentina" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"am"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+374" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Armenia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"aw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+297" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Aruba" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"au"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+61" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Australia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"at"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+43" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Austria" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"az"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+994" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Azerbaijan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+973" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Bahrain" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+880" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Bangladesh" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"by"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+375" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Belarus" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"be"')
 {
 document.getElementById("ind").innerHTML='<input type="text"  style="width:20%;margin-right:10px;"   class="input-install"value="+32" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Belgium" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+501" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Belize" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+229" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Benin" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+975" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Bhutan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+591" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Bolivia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ba"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+387" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Bosnia and Herzegovina" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"br"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+55" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Brazil" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+267" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Botswana" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"io"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+246" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="British Indian Ocean Territory" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+673" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Brunei" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+359" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Bulgaria" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+226" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text" class="input-install" style="width:80%;margin:0px;"  value="Burkina Faso" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+257" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Burundi" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+238" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cabo Verde" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"kh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+855" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cambodia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ky"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1345" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Caïmans" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+237" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cameroon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ca"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Canada" name="country" id="country" disabled="disabled"/>';
document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Canada" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"cl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+56" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Chile" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+86" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Chine" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"aq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+672" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Antarctica" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+357" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cyprus" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"co"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+57" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Colombia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"km"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+269" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Comoros" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+242" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Republic of the Congo" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+243" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Democratic Republic of the Congo" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ck"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+682" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cook Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+850" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="North Korea" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+82" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="South Korea" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"so"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+252" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Somalia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"za"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+27" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="South Africa" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+506" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Costa Rica" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+385" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Croatia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+53" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cuba" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+599" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Curacao" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+31" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Netherlands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+45" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Danemark" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+253" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Djibouti" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"do"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1809" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="République dominicaine" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"dm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1767" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Dominique" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"eg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+20" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Egypte" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Egypte" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"sv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+503" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="El Salvador" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ae"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+971" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="United Arab Emirates" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="UAE" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ec"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+593" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ecuador" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+670" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="East Timor" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"er"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+291" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Eritrea" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"es"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+34" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Spain" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Spain" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ee"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+372" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Estonia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"us"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="United States" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"et"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+251" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ethiopia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+500" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Falkland Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+298" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Faroe Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+679" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Fiji" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+358" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Finland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+33" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="France" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden"  class="input-install" style="width:80%;margin:0px;" value="France" name="pays" id="pays" />';
 }
 else if(country=='"gb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+241" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Gabon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+220" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Gambia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ge"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+995" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Georgia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+233" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ghana" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"de"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+49" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Germany" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+350" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Gibraltar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+30" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Greece" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1473" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Grenade" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+299" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Greenland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1671" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guam" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+502" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guatemala" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+224" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guinea" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"gq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+240" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Equatorial Guinea" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+245" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guinea-Bissau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+592" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Guyana" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ht"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+509" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Haiti" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+504" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Honduras" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+852" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Hong Kong" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"hu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+36" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Hungary" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"in"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+91" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="India" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"id"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+62" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Indonesia" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"iq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+964" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Irak" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Iraq" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"ir"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+98" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Iran" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ie"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+353" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ireland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"is"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+354" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Iceland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"it"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+39" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Italy" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Italy" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"jm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1876" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Jamaïque" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"jp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+81" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Japan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ci"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+225" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ivory Coast" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"jo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+962" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Jordan" name="country" id="country" disabled="disabled"/>';
 }

 else if(country=='"kz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+7" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kazakhstan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ke"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+254" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kenya" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+996" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kirghizistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+965" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kuwait" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"xk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+383" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kosovo" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ls"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+266" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Lesotho" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+371" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Latvia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+961" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Lebanon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"la"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+856" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Laos" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"kg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+996" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kyrgyzstan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+231" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Liberia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ly"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+218" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Libya" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"li"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+423" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Liechtenstein" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+370" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Lithuania" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+352" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Luxembourg" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mo"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+853" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Macau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+389" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Macedonia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+261" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Madagascar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"my"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+60" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Malaysia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+265" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Malawi" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+960" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Maldives" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ml"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+223" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mali" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+356" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Malta" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mp"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1670" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Mariannes du Nord" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ma"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+212" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Morocco" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden"  class="input-install" style="width:80%;margin:0px;" value="Marroco" name="pays" id="pays" disabled="disabled"/>';
 }

 else if(country=='"mh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+692" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Marshall Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mq"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+596" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Martinique" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+230" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mauritius" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+222" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mauritania" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mx"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+52" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mexico" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"fm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+691" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Micronesia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+377" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Monaco" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"md"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+373" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Moldova" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+976" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mongolia" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"me"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+382" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Montenegro" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ms"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1664" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Montserrat" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+258" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mozambique" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"na"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+264" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Namibia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"mm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+95" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Myanmar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+674" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nauru" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"np"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+977" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nepal" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ni"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+505" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nicaragua" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ne"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+227" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Niger" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ng"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+234" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nigeria" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ki"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+686" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Kiribati" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+683" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Niue" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"no"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+47" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Northern Mariana Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+597" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Suriname" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+687" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Nouvelle-Calédonie" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"om"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+968" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Oman" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ug"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+256" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Uganda" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+998" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ouzbékistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+92" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Pakistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+680" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Palau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ps"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+970" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Palestine" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+507" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Panama" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+675" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Papua New Guinea" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"py"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+595" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Paraguay" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pe"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+51" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Peru" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ph"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+63" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Philippines" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+64" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="New Zealand" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"nc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+687" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="New Caledonia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+48" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Poland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+689" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="French Polynesia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1787" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Porto Rico" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+351" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Portugal" name="country" id="country" disabled="disabled"/>';
 }
else if(country=='"qa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+974" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Qatar" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"yt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+262" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Mayotte" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ro"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+40" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Roumania" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"gb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+44" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="United Kingdom" name="country" id="country" disabled="disabled"/>';
 } 
 else if(country=='"ru"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+7" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Russia" name="country" id="country" disabled="disabled"/>';
  document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Russia" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"rw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+250" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Rwanda" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sh"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+290" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Helena" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1758" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sainte-Lucie" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+378" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="San Marino" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"bl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+590" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Barthelemy" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+508" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint-Pierre-et-Miquelon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1784" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint-Vincent-et-les Grenadines" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sb"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+677" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Solomon Islands" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ws"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+685" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Samoa" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"pm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+508" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saint Pierre and Miquelon" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"as"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1684" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Samoa américaines" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"st"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+239" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sao Tome and Principe" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+221" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Senegal" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sa"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+966" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Saudi Arabia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"rs"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+381" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Serbia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+248" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Seychelles" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sl"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+232" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sierra Leone" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+65" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Singapore" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+421" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Slovakia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"si"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+386" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Slovenia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"so"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+252" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Somalie" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+94" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sri Lanka" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sd"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+249" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sudan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ss"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+211" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="South Sudan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"lk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+94" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sri Lanka" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"se"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+46" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Sweden" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ch"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+41" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Switzerland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+597" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Suriname" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+268" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Swaziland" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"sy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+963" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Syria" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+886" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Taiwan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tj"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+992" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tajikistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+255" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tanzania" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"td"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+235" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Chad" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+238" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Cape Verde" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+236" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Central African Republic" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"cz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+420" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Czech Republic" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"th"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+66" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Thailand" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+228" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Togo" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tk"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+690" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tokelau" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"to"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+676" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tonga" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tt"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1868" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Trinité-et-Tobago" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+993" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Turkmenistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tc"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1649" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Turks-et-Caïcos" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"tr"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+90" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Turkey" name="country" id="country" disabled="disabled"/>';
 document.getElementById("pays_flux").innerHTML='<input type="hidden" class="input-install" style="width:80%;margin:0px;" value="Turkey" name="pays" id="pays" disabled="disabled"/>';
 }
 else if(country=='"tv"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+688" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Tuvalu" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ua"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+380" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Ukraine" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uy"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+598" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Uruguay" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"uz"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+998" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Uzbekistan" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vu"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+678" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Vanuatu" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"va"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+379" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Vatican" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ve"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+58" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Venezuela" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vg"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1284" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Vierges britanniques" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vi"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+1340" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Îles Vierges des États-Unis" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"vn"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+84" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Vietnam" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"wf"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+681" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Wallis and Futuna" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"ye"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+967" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Yémen" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"zm"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+260" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Zambia" name="country" id="country" disabled="disabled"/>';
 }
 else if(country=='"zw"')
 {
 document.getElementById("ind").innerHTML='<input type="text" style="width:20%;margin-right:10px;"   class="input-install" value="+263" name="indicatif" id="indicatif" disabled="disabled"/>';
 document.getElementById("simInfo").innerHTML='<input type="text"  class="input-install" style="width:80%;margin:0px;" value="Zimbabwe" name="country" id="country" disabled="disabled"/>';
 }
 }
 //var device=JSON.stringify(result.deviceId);

  //document.getElementById("simId").innerHTML="<input type='hidden' value='"+device+"' id='device' name='device' />";
  //document.getElementById("emailsimId").innerHTML="<input type='hidden' value='"+device+"' id='emaildevice' name='emaildevice' />";
 });
 });
  }
 
 function mac(macAddress) {
 document.getElementById("simId").innerHTML="<input type='hidden' value='"+macAddress+"' id='device' name='device' />";
  document.getElementById("emailsimId").innerHTML="<input type='hidden' value='"+macAddress+"' id='emaildevice' name='emaildevice' />";
    }
 
function errorCallback(error) {
 document.getElementById("simInfo").innerHTML=JSON.stringify(result);
 }
 
 /********************************/
function nextone() {
var lang=document.getElementById("lang").value;	
var req = "insert or replace into utilisateur (lang) values ('"+ lang +"')";

                                    db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
                                      
								   });			
indicatif_tel();
detect_lang();
poste_name();								   
document.getElementById("partone").style.display="none";
document.getElementById("parttwo").style.display="block";
document.getElementById("partthree").style.display="none";
document.getElementById("erreur").style.display="none";
}
 /********************************/
function next() {	
var tel=document.getElementById("tel").value;
if(tel==''){
document.getElementById("erreur").style.display="block";
}
else{ 
document.getElementById("partone").style.display="none";
document.getElementById("parttwo").style.display="none";
  document.getElementById("partthree").style.display="block";
  document.getElementById("erreur").style.display="none";
  }
}


/*****************Inscription avec sim****************/

function ajout(){
var lang=document.getElementById("lang").value;
var indicatif=document.getElementById("indicatif").value;
var country=document.getElementById("country").value;
var tel=document.getElementById("tel").value;
var device=document.getElementById("device").value;
var nom=document.getElementById("nom").value;
var titre=document.getElementById("titre").value;
var pays=document.getElementById("pays").value;
if(tel=='' || nom=='')
{
document.getElementById("erreur_name").style.display="block";
}
else
{
var dataString='indicatif='+indicatif+'&country='+country+'&tel='+tel+'&device='+device+'&nom='+nom+'&titre='+titre+'&lang='+lang;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/inscription_tel.php", dataString,

function (donnees){

                                    var img="assets/img/UserImage.png";
									
			                        var req = "update utilisateur set name='"+ nom+ "',titre='"+ titre+ "',tel='"+ tel+ "',image='"+ img+ "',pays='"+ pays + "' where  id_utilisateur='1' ";

                                    db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
									   location.href="actualite.html";
                                      
								   });





});
	
}
	 
}



/**********************Inscription sans sim avec email ***********************/
function ajoutemail(){


var id_device=document.getElementById("emaildevice").value;
var email=document.getElementById("email").value;
var name=document.getElementById("nomemail").value;
var poste=document.getElementById("titremail").value;
var pays=document.getElementById("paysemail").value;
var lang=document.getElementById("lang").value;


if(email=='' || pays =='')
{
document.getElementById("erreurmail").style.display="block";
}
else
{
var dataString='id_device='+id_device+'&email='+email+'&name='+name+'&poste='+poste+'&lang='+lang;
$.getJSON("http://karwisoft.tn/php_bevip/gestion_inscription/inscription_mail.php", dataString,
function (donnees) {
     
	 
	 
	                                var img="assets/img/UserImage.png";
									
									
									var req = "update utilisateur set name='" + name + "',titre='" + poste + "', tel= '" + email + "',image = '" + img+ "',pays= '" + pays + "' where id_utilisateur = '1' ";

                                    db.transaction(function(tx) {
							           
									   tx.executeSql(req, []);
									   
									   document.location.href="actualite.html";
                                      
								   });

	});
}	 
}


$(document).ready(function () {
    db.transaction(function(tx) {tx.executeSql("select * from store", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									if (dataset.length == 0) {
									
									add_store();
							
									}                               

});
});
});
function add_store(){
var reqa1 = "insert into store(name,categorie,conseil,url) values ('Read regularly', 'Personnel', 'Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience','store5.png')";
var reqa2 = "insert into store(name,categorie,conseil,url) values ('Take healthy food', 'Personnel', 'Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day','store3.png')";									
var reqa3 = "insert into store(name,categorie,conseil,url) values ('Economize', 'Personnel', 'Saving regularly is essential to build your financial independence. Sets up a savings target.','store6.png')";									
var reqa4 = "insert into store(name,categorie,conseil,url) values ('Do sports', 'Personnel', 'Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy','store4.png')";									
var reqa5 = "insert into store(name,categorie,conseil,url) values ('Attend conferences', 'Professionnel', 'attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional','store7.png')";									
var reqa6 = "insert into store(name,categorie,conseil,url) values ('Work hard', 'Professionnel', 'I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work','store8.png')";	
var reqa7 = "insert into store(name,categorie,conseil,url) values ('Study', 'Professionnel', 'Studied not to know more but to know better. Sets up an objective study hours per day or week','store9.png')";	
var reqa8 = "insert into store(name,categorie,conseil,url) values ('Learn a language', 'Professionnel', 'Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!','store10.png')";
var reqa9 = "insert into store(name,categorie,conseil,url) values ('See my friends', 'Sociale', 'Whether your life is busy, at work or at home, always keep a place for friends','store11.png')";
var reqa10 = "insert into store(name,categorie,conseil,url) values ('volunteering', 'Sociale', 'Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!','store12.png')";
var reqa11 = "insert into store(name,categorie,conseil,url) values ('give an association', 'Sociale', 'Gives money to charities to help those in need','store13.png')";
var reqa12 = "insert into store(name,categorie,conseil,url) values ('Spend time with family', 'Familiale', 'Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest','store16.png')";
var reqa13 = "insert into store(name,categorie,conseil,url) values ('Making weekends with family', 'Familiale', 'escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family','store14.png')";
var reqa14 = "insert into store(name,categorie,conseil,url) values ('lend touches', 'Familiale', 'the little things count a lot! make it a habit and strengthens your relationship','store15.png')";



									 db.transaction(function(tx) {
							           
									   tx.executeSql(reqa1, []);
									   tx.executeSql(reqa2, []);
									   tx.executeSql(reqa3, []);
									   tx.executeSql(reqa4, []);
									   tx.executeSql(reqa5, []);
									   tx.executeSql(reqa6, []);
									   tx.executeSql(reqa7, []);
									   tx.executeSql(reqa8, []);
									   tx.executeSql(reqa9, []);
									   tx.executeSql(reqa10, []);
									   tx.executeSql(reqa11, []);
									   tx.executeSql(reqa12, []);
									   tx.executeSql(reqa13, []);
									   tx.executeSql(reqa14, []);
                                      
								   });
								   }



$(document).ready(function () {

/*
var reqa4 = "insert into pays(nom_pay) values ('Canada')";
var reqa5 = "insert into pays(nom_pay) values ('Qatar')";
var reqa6 = "insert into pays(nom_pay) values ('Senegal')";
var reqa7 = "insert into pays(nom_pay) values ('Sweden')";
var reqa8 = "insert into pays(nom_pay) values ('Belgium')";
var reqa9 = "insert into pays(nom_pay) values ('Germany')";
var reqa10 = "insert into pays(nom_pay) values ('United Kingdom')";
var reqa11 = "insert into pays(nom_pay) values ('Italia')";
*/



									 db.transaction(function(tx) {
							           
									   tx.executeSql(reqa1, []);
									   tx.executeSql(reqa2, []);
									   tx.executeSql(reqa3, []);
									   
									   /*
									   tx.executeSql(reqa4, []);
									   tx.executeSql(reqa5, []);
									   tx.executeSql(reqa6, []);
									   tx.executeSql(reqa7, []);
									   tx.executeSql(reqa8, []);
									   tx.executeSql(reqa9, []);
									   tx.executeSql(reqa10, []);
									   tx.executeSql(reqa11, []);
									   */
                                      
								   });
								   
});

$(document).ready(function () {


       
/*tunisie*/                         
//var reqa1 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('alchourouk','tunisie/alchourouk.png','http://www.alchourouk.com/xml_top_article/rss.xml','Tunisia','2')";
var reqa2 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('assabah','tunisie/assabah.jpg','http://www.assabah.com.tn/rss-feed.xml','Tunisia','5')";
var reqa3 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('letemps','tunisie/letemps.png','http://www.letemps.com.tn/rss-feed.xml','Tunisia','4')";


/*Canada*/
var reqa5 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('la presse','canada/logo_lapresseca.png','http://www.lapresse.ca/rss/225.xml','Canada','1')";
var reqa6 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('le journal de Québec','canada/journal_quebec.png','http://www.journaldequebec.com/rss.xml','Canada','3')";
var reqa7 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('le journal de Montréal','canada/journal_montreal.png','http://www.journaldemontreal.com/rss.xml','Canada','3')";

/* UAE */
var reqa13 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('albayan','uae/albayan.png','http://www.albayan.ae/1.446?ot=ot.AjaxPageLayout','UAE','7')";
var reqa14 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('alkhaleej','uae/alkhaleej.png','http://www.alkhaleej.ae/Feed/3b4f4fec-0a53-4327-a8ed-c8241e8327d2/edd54100-8fdd-4c3e-a0f9-1ab9b025f0c7/rss','UAE','8')";
var reqa15 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('emarat alyoum','uae/emarat_alyoum.png','http://www.emaratalyoum.com/1.533091?ot=ot.AjaxPageLayout','UAE','10')";

/*Turkey*/
var reqa17 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('turkiye','turkey/turkey.png','http://www.turkiyegazetesi.com.tr/rss/rss.xml','Turkey','12')";

/*Italy*/
var reqa21 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('CORRIERE DELLA SERA','italy/rcs.png','http://xml.corriereobjects.it/rss/politica.xml','Italy','13')";
var reqa22 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('gazzetta','italy/gazzetta.png','http://www.gazzetta.it/rss/calcio.xml','Italy','14')";
var reqa23 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('ilgiorno','italy/ilgiorno.png','http://www.ilgiorno.it/rss/','Italy','15')";

/*Espagne*/
var reqa25 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('marca','spain/marca.png','http://estaticos.marca.com/rss/futbol/almeria.xml','Spain','18')";
var reqa26 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('el mundo','spain/elmundo.png','http://estaticos.elmundo.es/elmundo/rss/portada.xml','Spain','19')";
var reqa27 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('ABC','spain/abc.png','http://www.abc.es/rss/feeds/abc_ultima.xml','Spain','20')";


/* Russia */
var reqa28 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Аргументы и Факты','russia/2.png','http://www.aif.ru/rss/all.php','Russia','21')";
var reqa29 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('RT на русском','russia/3.png','https://russian.rt.com/rss','Russia','23')";



/* suede */
var reqa31 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Nyheter Lerums Tidning','suede/1.png','http://www.lerumstidning.se/kategori/nyheter/feed/','Suede','22')";


/* belgique*/
var reqa34 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Het Belang van Limburg','belgique/3.png','http://www.hbvl.be/rss/section/d1618839-f921-43cc-af6a-a2b200a962dc','Belgique','24')";
var reqa35 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Lalibre.be - La Une','belgique/1.png','http://www.lalibre.be/rss.xml','Belgique','25')";
var reqa40 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('GAZET VAN ANTWERPEN','belgique/gazet.png','http://www.gva.be/rss/section/ca750cdf-3d1e-4621-90ef-a3260118e21c','Belgique','29')";


/*france*/
var reqa37 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('Le Monde.fr','france/1.png','http://www.lemonde.fr/rss/une.xml','France','26')";
var reqa38 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('France Soir','france/2.png','http://www.francesoir.fr/rss.xml','France','27')";
var reqa39 = "insert into journal(nom_journal,logo_journal,lien_flux,nom_pay, type_rss) values ('La tribune','france/3.png','http://www.latribune.fr/feed.xml','France','28')";



									 db.transaction(function(tx) {
							           
									   //tx.executeSql(reqa1, []);
									   tx.executeSql(reqa2, []);
									   tx.executeSql(reqa3, []);
									   
									   tx.executeSql(reqa5, []);
									   tx.executeSql(reqa6, []);
									   tx.executeSql(reqa7, []);
									  
									   tx.executeSql(reqa13, []);
									   tx.executeSql(reqa14, []);
									   tx.executeSql(reqa15, []);
									
									   tx.executeSql(reqa17, []);
									   
									   tx.executeSql(reqa21, []);
									   tx.executeSql(reqa22, []);
									   tx.executeSql(reqa23, []);
									   
									   tx.executeSql(reqa25, []);
									   tx.executeSql(reqa26, []);
									   tx.executeSql(reqa27, []);
									   
									   
									   tx.executeSql(reqa28, []);
									   tx.executeSql(reqa29, []);
									   
									   
									   tx.executeSql(reqa31, []);
									   
									   
									   
									   tx.executeSql(reqa34, []);
									   tx.executeSql(reqa35, []);
									   tx.executeSql(reqa40, []);
									   
									   tx.executeSql(reqa37, []);
									   tx.executeSql(reqa38, []);
									   tx.executeSql(reqa39, []);
									   
								   });
								   
});

function detect_lang(){
	var lg;
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];
	
if(lang=="fr"){
		lg="frensh";
	 }
	 else if (lang == 'ar'){
		 lg="arabic";
	 }
else{
	 lg="english";
}	 
	 $._.setLocale(lg);
  /* page connexion et inscription */
  $('#next').append("<div>" + $._('next')+"</div>");
  $('#ok').append("<div>" + $._('ok')+"</div>");
  $('#email').append("<div>" + $._('email')+"</div>");
  $('#save').append("<div>" + $._('save')+"</div>");

});
});
}