<?php 
include '../../public/common/config.php';

$name=$_POST['name'];
$id=$_POST['id'];

$sql="update status set name='{$name}' where id={$id}";

if(mysql_query($sql)){
	echo '<script>location="index.php"</script>';
}
?>