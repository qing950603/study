<?php 
include '../../public/common/config.php';

$name=$_POST['name'];

$sql="insert into status(name) values('{$name}')";

if(mysql_query($sql)){
	echo '<script>location="index.php"</script>';
}
?>
