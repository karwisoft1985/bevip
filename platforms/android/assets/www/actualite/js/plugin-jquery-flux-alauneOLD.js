(function(l)
{

l.fn.rssfeed=function(b,h)
{ h=l.extend({
limit:10,
offset:1,
header:!0,
titletag:"div",
date:!0,
dateformat:"datetime",
content:!0,
snippet:!0,
media:!0,
showerror:!0,
errormsg:"",
key:null,
ssl:!1,
linktarget:"_self",
linkredirect:"",
linkcontent:!1,
sort:"",
sortasc:!0,
historical:!1
}
,h);
return this.each(function(z,q)
{	
var u=l(q),
f="";
h.ssl&&(f="s");
u.hasClass("rssFeed")||u.addClass("rssFeed");
if(null==b)
return!1;
0<h.offset&&(h.offset-=1);
h.limit+=h.offset;
var flux =b.toString();
f="http"+f+"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q="+encodeURIComponent(b);f+="&num="+h.limit;
l.getJSON(f+"&output=json_xml",function(b){
if(200==b.responseStatus){
var f=b.responseData,e=h;
if(b=f.feed){
var j=[],
d=0,
m="",
v="odd";
if(e.media){
var n=f.xmlString;
"Microsoft Internet Explorer"==navigator.appName?(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(n)):d=(new DOMParser).parseFromString(n,"text/xml");
n=d.getElementsByTagName("item")
}
e.header&&(m+='');
 m+='<div id="rssBody">';
var inc=1;
var nomPage="alaune";
for(f=e.offset;f<b.entries.length;f++)	
{ 
if(inc ==  1) 
{
d=f-e.offset;j[d]=[];   
j[d].html="";
if(e.media&&0<n.length&&(k=n[f].getElementsByTagName("enclosure"),0<k.length))
{	
for(g=0;g<k.length;g++)
{
var r=k[g].getAttribute("url")
}
}
var g=b.entries[f],a,c="",k=g.link;
j[d].html+='<div id="img-article">';
j[d].html+='<div style="background-image:url('+r+');display:inline-block;position:relative;width:100%;height:250px;background-size:100% 250px;"></a>';
j[d].html+="<div id='description-article-flux-rss'>";
j[d].html+="<a href='article-alaune.html?flux="+flux+"&&id="+inc+"'><div id='sujet-article-flux-rss'>"+g.title.substring(0,60)+"...</div></a>";
j[d].html+="</div>";
j[d].html+="</div>";

}
else
{
j[d].html+="<table class='list-flux-rss'>";
if(e.media&&0<n.length&&(k=n[f].getElementsByTagName("enclosure"),0<k.length))
{
for(g=0;g<k.length;g++)
{
var r=k[g].getAttribute("url")
}
 r='<tr><td><img src="'+r+'" title="Image article" width="68px" heigth="50px"></a></td>';
j[d].html+=r;
}
var g=b.entries[f],a,c="",k=g.link;

j[d].html+="<td height='50px'><a href='article-alaune.html?flux="+flux+"&&nompage="+nomPage+"&&id="+inc+"'>"+g.title+"</a></td></tr></table>";

}
inc++;
}
l.each(j,function(a){m+='<li class="rssRow">'+j[a].html+"</li>";});
m+="</div>";
l(q).html(m);
l("a",q).attr("target",e.linktarget)}l.isFunction(w)&&w.call(this,u)}
else h.showerror&&(d=""!=h.errormsg?h.errormsg:b.responseDetails),l(q).html('<div class="rssError"><p>'+d+"</p></div>")})}
)};var p=function(b){b+="";2>b.length&&
(b="0"+b);return b},x=function(b){return"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[b]}})(jQuery);