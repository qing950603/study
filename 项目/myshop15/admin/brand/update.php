<?php 
include '../../public/common/config.php';
error_reporting(E_ALL ^ E_NOTICE);
$name=$_POST['name'];
$class_id=$_POST['class_id'];
$id=$_POST['id'];

$sql="update brand set name='{$name}',class_id='{$class_id}' where id={$id}";

if(mysql_query($sql)){
	echo '修改成功';
	echo '<script>location="index.php"</script>';
}
?>