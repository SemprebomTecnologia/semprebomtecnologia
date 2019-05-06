<?php
/*
	SEMPREBOM TECNOLOGIA  - Direitos Reservados @2019
	Arquivo com configurações básicas do sistema: Banco de Dados, modo de execução, diretório de instalação, etc.
*/

// Set region of time
date_default_timezone_set('America/Sao_Paulo');
// Se você instalou via compositor, apenas use este código para requerer o autoloader no topo de seus projetos.
require '../../vendor/autoload.php' ; 
//require 'Medoo.php' ;  


//exit('medoo')
// Usando o namespace do Medoo
//use Medoo \ Medoo ; 


// Exibir ou esconder erros do PHP
error_reporting( error_reporting() & ~E_NOTICE );
@ini_set('display_errors', 1);

/* Configurações BD */
define('DB_DRIVER', 'mysql');
define('DB_HOST', 'sisfacil.mysql.uhserver.com');
define('DB_USER', 'adminsys');
define('DB_PASSWORD', 'maria281016@');
define('DB_DATABASE', 'sisfacil');

global $DB;

$DB = new Medoo\Medoo([
	'database_type' => DB_DRIVER,
	'database_name' => DB_DATABASE,
	'server' => DB_HOST,
	'username' => DB_USER,
	'password' => DB_PASSWORD,
]);

  


?>