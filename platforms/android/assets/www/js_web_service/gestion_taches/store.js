var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
 var contenuHtml='';
contenuHtml += '<a href="cree_objectif.html?cat='+cat+'">';
contenuHtml +='<div style="background:#ff5722;padding:10px;border-radius:100%;position:absolute;bottom:30px;right:30px;">';
contenuHtml +='<img src="assets/img/add.png"/></div></a>';
   document.getElementById("btnaj").innerHTML = contenuHtml;

});

$(document).ready(function () {
var CheminComplet = window.location.search;
var cat =CheminComplet.substring( CheminComplet.indexOf( "cat=" )+4 ,CheminComplet.length );
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 
sessionStorage.setItem("categorie",cat);
db.transaction(function(tx) {tx.executeSql("select * from store where categorie='"+cat+"'", [] ,
		
								function(tx, result) {

                                    dataset = result.rows;
                                    var div='';
									var c=0;
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										var id_store = item['id_store'];
										var name = item['name'];
										var conseil = item['conseil'];
										var url = item['url'];
										
										
									/* debut */
									
							         div += ' <a href="detail-store.html?id_store='+id_store+'&&name='+encodeURIComponent(name)+'">';
									 if(c % 2 == 0)
									 {
									 div += ' <div class="row" style="padding:5px;background:#8dc0d1;">';
									 }
									 else
									 {
									 div += ' <div class="row" style="padding:5px;background:#fff;">';
									 }
			                         
									 div += '<div class="col-md-6 col-sm-6 col-xs-6">';
									 
									 div += '<img src="assets/img/store/'+url+'" width="100%" class="img-responsive"  />';
									 
									 div += '</div>';
									 
				                     div += '<div class="col-md-6 col-sm-6 col-xs-6"><div style="font-size:16px;font-weight:bold;color:#000;margin-top:5px;">';
						
									if(lang=="fr"){
									     if(name=='Read regularly'){
					                     div +='Lire régulièrement';}	 
										 else if(name=='Take healthy food'){
					                     div +='Prenez des aliments sains';}										
										else if(name=='Economize'){
					                     div +='Economiser';}
										 else if(name=='Do sports'){
					                     div +='Faire du sport';}
										 else if(name=='Attend conferences'){
					                     div +='Assister à des conférences';}
										 else if(name=='Work hard'){
					                     div +='Travailler dur';}
										 else if(name=='Study'){
					                     div +='Etudier';}
										 else if(name=='Learn a language'){
					                     div +='Apprendre une langue';}
										 else if(name=='Spend time with family'){
					                     div +='Passer du temps en famille';}
										 else if(name=='Making weekends with family'){
					                     div +='Faire des week-ends en famille';}
										 else if(name=='lend touches'){
					                     div +='Prêter de petites attentions';}
										 else if(name=='See my friends'){
					                     div +='Voir mes amis';}
										 else if(name=='volunteering'){
					                     div +='Faire du bénévolat';}
										 else if(name=='give an association'){
					                     div +='Donner à une association';}
										}
										else if (lang == 'ar'){
				                     if(name=='Read regularly'){
					                     div +='أقرأ بانتظام';}	 
										 
										 else if(name=='Take healthy food'){
					                     div +='تناول طعام صحي';}										
										else if(name=='Economize'){
					                     div +='اقتصد';}
										 else if(name=='Do sports'){
					                     div +='ممارسة الرياضة';}
										 else if(name=='Attend conferences'){
					                     div +='حضور مؤتمرات';}
										 else if(name=='Work hard'){
					                     div +='عمل بجد';}
										 else if(name=='Study'){
					                     div +='دراسة';}
										 else if(name=='Learn a language'){
					                     div +='تعلم لغة';}
										 else if(name=='Spend time with family'){
					                     div +='قضاء وقت مع العائلة';}
										 else if(name=='Making weekends with family'){
					                     div +='جعل عطلة نهاية الأسبوع مع العائلة';}
										 else if(name=='lend touches'){
					                     div +='تقديم لمسات';}
										 else if(name=='See my friends'){
					                     div +='رؤية أصدقائي';}
										 else if(name=='volunteering'){
					                     div +='تطوع';}
										 else if(name=='give an association'){
					                     div +='منح لجمعية';}
										} 
										else  {
										
										div +=name;
										
										}
				                     div +=' </div></div>';
				 
			                     	 div +='</div></div></a>';


                                    /* fin */
                                   	
									
                                    c=c+1;
									}
									
									$("#liststore").html(div);
});
});
});
});
});


$(document).ready(function () {
var CheminComplet = window.location.search;
var id_store =CheminComplet.substring( CheminComplet.indexOf( "id_store=" )+9 ,CheminComplet.length );
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 

db.transaction(function(tx) {tx.executeSql("select * from store where id_store='"+id_store+"'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
							
									var erreur = document.getElementById('detailstore');

									if (dataset.length > 0) {
										erreur.innerHTML = "";
									} else {
										erreur.innerHTML = "<p align='center'>VIDE</p>";
									}
									
                                    var div='';
									
										item = dataset.item(0);
										
										var name = item['name'];
										var conseil = item['conseil'];
											if(lang=="fr"){
											if(conseil=='Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience'){
											conseil='Lire régulièrement est une bonne habitude qui vous donne accès à une énorme quantité de connaissances et d\'expérience';
											}
											else if(conseil=='Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day'){
											conseil='Les fruits et légumes apportent vitamines, minéraux, fibres, etc. et sont indispensables pour une bonne santé. Les médecins en recommandent souvent au moins 5 par jour';
											}
											else if(conseil=='Saving regularly is essential to build your financial independence. Sets up a savings target'){
											conseil='Economiser régulièrement est essentiel pour construire ton autonomie financière. Définit un objectif d\'épargne';
											}
											else if(conseil=='Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy'){
											conseil='Pratiquer le sport améliore tes capacités respiratoires, renforce de nombreux muscles de ton corps et aide à te maintenir en bonne santé';
											}
											else if(conseil=='attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional'){
											conseil='Assister à des conférences ou des séminaires sur des sujets de ton choix étendra ton expertise et ton réseau et fera de toi un meilleur professionnel';
											}
											else if(conseil=='I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work'){
											conseil='Je crois en la chance, et je m\'aperçois que, plus je travaille dur, plus j\'en ai (Thomas Jefferson). Mesure le nombre d\'heures que tu passes à travailler';
											}
											else if(conseil=='Studied not to know more but to know better. Sets up an objective study hours per day or week'){
											conseil='Étudie, non pour savoir plus, mais pour savoir mieux. Fixe-toi un objectif d\'heures d\'étude par jour ou par semaine';
											}
											else if(conseil=='Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!'){
											conseil='Apprends une langue et accéde à de nombreuses cultures différentes. La pratique est mère du succès - beaucoup de pratique!';
											}
											else if(conseil=='Whether your life is busy, at work or at home, always keep a place for friends'){
											conseil='Peu importe que ta vie soit occupée, au travail ou à la maison, il faut toujours garder une place pour les amis';
											}
											else if(conseil=='Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!'){
											conseil='Implique-toi de manière bénévole et passe du temps pour la cause que tu défends. Il y a tant d\'associations qui sont à la recherche de personnes comme toi!';
											}
											else if(conseil=='Gives money to charities to help those in need'){
											conseil='Donne de l\'argent aux associations caritatives pour aider ceux qui sont dans le besoin';
											}
											else if(conseil=='Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest'){
											conseil='Nous sommes parfois absorbés par nos vies très occupées, et nous en oublions l\'essentiel: la famille, les gens qui nous sont le plus chers';
											}
											else if(conseil=='escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family'){
											conseil='Échappe à la routine et pars à la découverte d\'un endroit nouveau avec ta famille. Tu commenceras la semaine régénérée et cela fera un bien fou à ta famille';
											}
											else if(conseil=='the little things count a lot! make it a habit and strengthens your relationship'){
											conseil='Les petites attentions comptent énormément! Fais-en une habitude et renforce ta relation';
											}
											}
									else if (lang == 'ar'){
												if(conseil=='Read regularly is a good habit that gives you access to a huge quantity of knowledge and experience'){
											conseil='القراءة بانتظام هي عادة جيدة تمكنك من الوصول إلى كمية هائلة من المعارف والخبرات';
											}
											else if(conseil=='Fruits and vegetables provide vitamins, minerals, fiber, etc. and are indisoensables for good health. Doctors often recommend at least 5 per day'){
											conseil='الفواكه والخضروات توفر الفيتامينات والمعادن والألياف، الخ وهي ضرورية للصحة الجيدة. كثيرا ما يوصي الأطباء ما لا يقل عن 5 في اليوم';
											}
											else if(conseil=='Saving regularly is essential to build your financial independence. Sets up a savings target'){
											conseil='الإقتصاد بانتظام أمر ضروري لبناء الاستقلال المالي الخاص بك. حدد هدف التوفير';
											}
											else if(conseil=='Practice sport improves breathing capacity, strengthens many muscles of your body, and helps keep you healthy'){
											conseil='ممارسة الرياضة تحسن قدرتك على التنفس، ويقوي عضلات كثيرة في الجسم، ويساعد على الحفاظ على صحتك';
											}
											else if(conseil=='attend conferences or seminars on subjects of your choice expand your expertise and your network and will make you a better professional'){
											conseil='المشاركة في مؤتمرات أو ندوات حول مواضيع من اختيارك توسع من خبرتك و تجعلك محترف أفضل';
											}
											else if(conseil=='I believe in luck, and I find that the harder I work, the more I have (Thomas Jefferson). Measures the number of hours you spend at work'){
											conseil='أعتقد في الحظ، وأجد أن كلما أعمل أكثر، أحقق ذاتي أكثر (توماس جيفرسون). احسب عدد الساعات التي تقضيها في العمل';
											}
											else if(conseil=='Studied not to know more but to know better. Sets up an objective study hours per day or week'){
											conseil='ادرس، ليس لمعرفة أكثر ولكن لمعرفة أفضل. ضع عدد لساعات دراسة في يوم أو أسبوع ';
											}
											else if(conseil=='Learn a language and access to many different cultures. Practice is the mother of success - lots of practice!'){
											conseil='تعلم لغة وتعرف على العديد من الثقافات المختلفة. الممارسة هي أم النجاح - الكثير من الممارسة!';
											}
											else if(conseil=='Whether your life is busy, at work or at home, always keep a place for friends'){
											conseil='مهما كانت حياتك مشغولة، في العمل أو في المنزل، لا بد من ترك مكان للأصدقاء';
											}
											else if(conseil=='Get involved as volunteers and spends time to the cause that you defend. There are so many organizations that are looking for people like you!'){
											conseil='تطوع واقض وقتا للدفاع عن القضية التي تتبناها. هناك الكثير من الجمعيات التي تبحث عن شخص مثلك!';
											}
											else if(conseil=='Gives money to charities to help those in need'){
											conseil='اعط المال للجمعيات الخيرية لمساعدة المحتاجين';
											}
											else if(conseil=='Sometimes we are absorbed in our busy voice, and we forget the essential: the family, the people who are our dearest'){
											conseil='في بعض الأحيان ننشغل في حياتنا، وننسا الأساسيات: الأسرة، والناس الذين هم أعز ما لدينا';
											}
											else if(conseil=='escapes the routine and go to the discovery of a new place with your family. You will begin the week refreshed and it will make a fool vien your family'){
											conseil='ابتعد عن الروتين واذهب إلى اكتشاف مكان جديد مع عائلتك. سوف تبدأ الأسبوع بنشاط وتعطي شحنة معنوية لأسرتك';
											}
											else if(conseil=='the little things count a lot! make it a habit and strengthens your relationship'){
											conseil='الأشياء الصغيرة تحدث الفرق! اجعل منها عادة لتقوية علاقتك';
											}
									}
									else {
											conseil=conseil;
											}
									    document.getElementById("textbot").value = conseil; 
									    playbot();
										div +='<p style="text-align:center;padding:10px;">'+conseil+'</p>';
										
								    	$("#detailstore").html(div);
                                        });
										
                       });
});
});
});

 function playbot() {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 
        var u = new SpeechSynthesisUtterance();
        var x = document.getElementById("frm");
        var txt = "";
        txt = x.elements[0].value
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