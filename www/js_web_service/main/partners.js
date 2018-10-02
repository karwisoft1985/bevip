var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

$(document).ready(function () {
db.transaction(function(tx) {tx.executeSql("select lang from utilisateur where id_utilisateur='1'", [] ,
		
								function(tx, result) {

                                dataset = result.rows;
								
								item = dataset.item(0);
								
								var lang = item['lang']; 
								
$.getJSON("http://karwisoft.tn/php_bevip/partners/products.php",
  function (donnees) {	
	var div ='';										
									 for (var i = 0; i < donnees.products.length; i++){
										 if((i % 2)==0){
									  div += '<div class="row" style="padding:5px;background:#fff;">';}
									  else{
									div += '<div class="row" style="padding:5px;background:#8dc0d1;">';}
									 div += '<div class="col-md-12 col-sm-12 col-xs-12">';
									 div += '<center><img src="http://karwisoft.tn/php_bevip/partners/img/'+donnees.products[i].img+'" style="width:80%;" class="img-responsive" /></center>';									 
									 div += '<div style="font-size:16px;font-weight:bold;color:#000;margin-top:5px;">';						
					                 div +='<center>'+donnees.products[i].title+'<br><span style="color:red">'+donnees.products[i].price+'</span></center></div>';
					                 div +='<p style="text-align: justify; padding:10px;">'+donnees.products[i].description+'</p>';
									  div +='<center><p><a href="'+donnees.products[i].url+'" style="color:#0000EE"><b>';
									   if(lang=='fr'){
										div +='Voir plus'	;
									  }
									  else if(lang=='ar'){
										div +='المزيد'	;
									  }
									  else {
										div +='See more';
									  }
									  div +="</b></a><br><div class=\"bottom-partage\" onclick=\"share('"+donnees.products[i].title+"', '"+donnees.products[i].img+"', '"+donnees.products[i].url+"');\"><i class=\"fa fa-share-alt\" style=\"color:#fff;font-family:14px;\"></i> ";
									  if(lang=='fr'){
										div +='Partager'	;
									  }
									  else if(lang=='ar'){
										div +='شارك'	;
									  }
									  else {
										div +='Share';
									  }
									  div +='</div></center></div></div>';
										}
																		
									$("#listpartners").html(div);

});
});
});
});

function share(title,img,url){
window.plugins.socialsharing.share(title, null,'http://karwisoft.tn/php_bevip/partners/img/'+img, url);
}	