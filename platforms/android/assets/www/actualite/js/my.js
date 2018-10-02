
            function initialize() {
				 $.ajax( {
            type: "GET",
			
            
	
			// url: "http://www.lapresse.ca/rss/225.xml",
            url: "http://www.alchourouk.com/xml_top_article/rss.xml",
            dataType: "xml",
            success: function(xml) 
                     {
						 var custum_table_div="<table class='list-flux-rss'>";
						var $items=$(xml).find('item');
						
						
						//start working with the first node 
						
						//find the link of the first node
						var link_article="";
						link_article=$items[0].getElementsByTagName('link')[0].childNodes[0].nodeValue;
						
						custum_first_div="";
						//default image bevip
						var urlImg="actualite/images/hdpi/IconImage_20140227100821221.png";
						article_description="";
						//xml with enclosure tag
						if( $items[0].getElementsByTagName('enclosure').length != 0 )
						{
						 urlImg=$items[0].getElementsByTagName('enclosure')[0].getAttribute('url');
						
						
						//description inside enclosure tag
						
							article_description= $items[0].getElementsByTagName('description')[0].childNodes[0].nodeValue;
						}else{
							
							//img was found in description tag
							if($items[0].getElementsByTagName('description')[0].childNodes[0].nodeValue.length != 0){
							var description = $items[0].getElementsByTagName('description')[0].childNodes[0].nodeValue;
								if(description.indexOf("src=") != 0){
								description=description.substring(description.indexOf("src=")+5);
								description=description.replace(/"/g, "'");							
								urlImg = description.substring(0,description.indexOf("'"));
								}
								
							
								//description with image
								var extract_description=$items[0].getElementsByTagName('description')[0].childNodes[0].nodeValue;
								if(extract_description.indexOf("</p>") != 0){
									// alert(extract_description.indexOf("</p>"));
				article_description=extract_description.substring(extract_description.indexOf("</p>"+4),extract_description.length);
				}
					}	
						}
						custum_first_div+='<div id="img-article">';
						custum_first_div+='<div style="background-image:url('+"'"+urlImg+
						"'"+');display:inline-block;position:relative;width:100%;height:250px;background-size:100% 250px;">'
						var title = $items[0].getElementsByTagName('title')[0].firstChild.nodeValue;
						custum_first_div+="<div id='description-article-flux-rss'>";
						custum_first_div+="<div id='sujet-article-flux-rss'>";
						custum_first_div+='<a href="new.html" target="_blank">'+title+"</a></div>";
						custum_first_div+="</div>	</div	</div>";
					
//*****************seesion de la premier resultat id=0 
// titre de larticle        :   title
// description de larticle  :   article_description
// lien de larticle         :   link_article
// image de larticle        :   urlImg


					//construct the viw list
						var custum_table_div="<table class='list-flux-rss'>";
						for (i = 1; i <  $items.length; i++) {
						
						
						//find the link of the first node
						var link_article="";
						link_article=$items[i].getElementsByTagName('link')[0].childNodes[0].nodeValue;
							
							//get the image 
						var urlImg="actualite/images/hdpi/IconImage_20140227100821221.png";
					var	article_description="";
						
							if( $items[i].getElementsByTagName('enclosure').length != 0 )
						{
						 urlImg=$items[i].getElementsByTagName('enclosure')[0].getAttribute('url');
						 //description inside enclosure tag
						
						article_description= $items[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
						 
						}else{
							//img was found in description tag
							if($items[i].getElementsByTagName('description')[0].childNodes[0].nodeValue.length != 0){
								var description = $items[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
								if(description.indexOf("src=") != 0){
								description=description.substring(description.indexOf("src=")+5);
								description=description.replace(/"/g, "'");
								urlImg = description.substring(0,description.indexOf("'"));
								}
											//description with image
								var extract_description=$items[i].getElementsByTagName('description')[0].childNodes[0].nodeValue;
								if(extract_description.indexOf("</p>") != 0){
									 // alert(extract_description.indexOf("</p>"));
				article_description=extract_description.substring(extract_description.indexOf("</p>"+4),extract_description.length);
				}
							}
						}
						custum_table_div+='<tr>';
						custum_table_div+='<td><img src='+"'"+urlImg+"'"+'title="Image article" width="68px" heigth="50px"></a></td>';
						var title = $items[i].getElementsByTagName('title')[0].firstChild.nodeValue;
						custum_table_div+="<td height='50px'><a href='new.html' target='_blank'>"+title+"</a></td>";
						custum_table_div+='</tr>'
                        }
						custum_table_div+='</table>';
						//*****************seesion de la premier resultat id= i
// titre de larticle        :   title
// description de larticle  :   article_description
// lien de larticle         :   link_article
// image de larticle        :   urlImg
						
						document.getElementById("fluxRSS").innerHTML = custum_first_div+custum_table_div;
                      }
        });     
            }
		
				
             $(document).ready(function() {
              //  $("#getfeed").click(function() {
                   // var url = $("#feedurl").val();
                    initialize();
               // });
            });

            
