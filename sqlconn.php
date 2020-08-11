<?php
  require_once 'dbconfig.php';

  function sqlConnect() {
    global $host, $dbname, $username, $password;

    $sqlInfo = 'mysql:host='.$host.';dbname='.$dbname;

    $ret = new stdClass();
    try {
      $conn = new PDO( $sqlInfo, $username, $password );
      $ret->succ = true;
      $ret->conn = $conn;
    } catch (PDOException $e) {
      $ret->succ = false;
      $ret->e = $e;
    }

    return $ret;
  }
?>
