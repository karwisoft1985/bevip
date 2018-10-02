var db = openDatabase("bevip", "1.0", "bevip", 200000);
var dataset;
var DataType;

$(document).ready(function () {


db.transaction(function(tx) {tx.executeSql("select * from contact where partner='oui' order by name ASC", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									
							
									//mobileDiv = document.querySelector("#thelist");
									
									var oldname='';
									
									var div = '';
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										
										var name = item['name'];
										var phone = item['phone'];
										var photo = item['photo'];
										var partner = item['partner'];
										
										
										
										if(oldname != name){
										
										if(partner == 'oui')
										{
										
										  div += "<li><div><img src='"+photo+"' style='width:50px; height:50px; border-radius:100%;float:left;margin-right:20px;'/> "+name+"<br/><div style='padding-left:20px;'>"+phone+"</div></div></li>";
                                        
										}
										
										
										
										}
										else
										{
										div += '';
										}
                                        
                                        oldname=name;
                                        
                                        
										

									}
									
									 document.getElementById("thelist").innerHTML= div;
									
								
								});

			});


});

 
 
 	  

function send(phone_no)
{
 
 window.plugins.socialsharing.shareViaSMS('Discover Bevip on your smartphone! Download it from...', phone_no, function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)});

}



function refreshContactsDesc(){


return function(tx) {tx.executeSql("select * from contact where partner='oui' order by name ASC", [] ,
		
								function(tx, result) {

									dataset = result.rows;
									
									
							
									mobileDiv = document.querySelector("#thelist");
									
									var oldname='';
									
									for ( var i = 0, item = null; i < dataset.length; i++) {
									
										item = dataset.item(i);
										
										
										var name = item['name'];
										
										//alert(name);
										
										var phone = item['phone'];
										var photo = item['photo'];
										var partner = item['partner'];
										
										
										
										if(oldname != name){
										
										if(partner == 'oui')
										{
										
										  mobileDiv.innerHTML += "<li><div><img src='"+photo+"' style='width:50px; height:50px; border-radius:100%;float:left;margin-right:20px;'/> "+name+"<br/><div style='padding-left:20px;'>"+phone+"</div></div></li>";
                                        
										}
										
										
										
										}
										else
										{
										mobileDiv.innerHTML += '';
										}
                                        
                                        oldname=name;
                                        
                                        
										

									}
									
									
									
								
								});

			}




}