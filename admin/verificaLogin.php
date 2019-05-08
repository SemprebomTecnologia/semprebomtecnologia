<?php

// Exibir ou esconder erros do PHP
error_reporting( error_reporting() & ~E_NOTICE );
@ini_set('display_errors', 1);


 echo "<pre>";
 var_dump($_POST);
 exit('teste');

if (isset($_POST['username']) && $_POST['username'] == 'admin')  {        
    session_start();
    $_SESSION['username'] = $_POST['usernname'];        
    header('Location: dashboard.html');
}else{
    header('Location: index.php');
}







?>