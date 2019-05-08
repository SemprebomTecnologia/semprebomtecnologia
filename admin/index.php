<?php

// Exibir ou esconder erros do PHP
error_reporting( error_reporting() & ~E_NOTICE );
@ini_set('display_errors', 1);



if (isset($_GET['login']) && $_GET['login'] == 'freire')  {        
    $_SESSION['user'] = $_GET['login'];    
    session_start();
    header('Location: dashboard.html');
} 







?>