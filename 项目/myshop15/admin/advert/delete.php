<?php 
include '../../public/common/config.php';

$id=$_GET['id'];
$img=$_GET['img'];
$file="../../public/uploads/{$img}";
$file2="../../public/uploads/thumb_{$img}";

$sql="delete from advert where id={$id}";

if(mysql_query($sql)){
	//删除图片
	unlink($file);
	unlink($file2);

	echo '<script>location="index.php"</script>';
}
?>