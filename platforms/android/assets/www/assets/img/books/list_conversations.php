<?php  
include('../connect.php');
$device=$_GET['device'];
$req=mysql_query("select id_user, nom from users where device ='$device'") or die("probleme");
$row=mysql_fetch_array($req);
$id_user=$row['id_user'];
$files = glob($id_user."_*.txt");
$compteur = count($files);
$files1 = glob("*_".$id_user.".txt");
$compteur1 = count($files1);
$nombre=$compteur+$compteur1;
foreach ($files1  as $filename1) {
$data[]=array(
'filename' => $filename1,
'name' => nameexp($filename1),
);
}
foreach ($files  as $filename) {
$data[]=array(
'filename' => $filename,
'name' => namedest($filename),
);
}
echo '{"files":'.json_encode($data).'}';
function namedest($filename){
$id_dest=substr($filename, strpos($filename, '_')+1, strpos($filename, '.txt')-2);
$reqd=mysql_query("select nom from users where id_user ='$id_dest'") or die("probleme");
$rowd=mysql_fetch_array($reqd);
$name=$rowd['nom'];
return $name;
}
function nameexp($filename1){
$id_exp=substr($filename1, 0, strpos($filename1, '_'));
$reqe=mysql_query("select nom from users where id_user ='$id_exp'") or die("probleme");
$rowe=mysql_fetch_array($reqe);
$name=$rowe['nom'];
return $name;
}
?>	