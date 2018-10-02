var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var som = 0;
var DataType;
$(document).ready(function () {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang'];  
 var contenuHtml1='';
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
 document.getElementById("type").innerHTML = contenuHtml1;
 });
 });
 });