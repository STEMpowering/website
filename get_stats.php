<?php
  // for getting all the emails that were sent to download experiments
  session_start();

  if (!$_SESSION['auth']) { // ensure user is authenticated
    exit('Bad credentials');
  }

  require_once 'sqlconn.php';

  $ret = sqlConnect();
  if (!$ret->succ) {
    exit('Failure to connect to sql');
  }
  $conn = $ret->conn;

  $idk = $conn->prepare('SELECT * FROM emails ORDER BY time DESC;');
  if (!$idk->execute()) {
    exit('Failure in sql command');
  }
  $entries = $idk->fetchAll(PDO::FETCH_ASSOC);

  header('Content-Type: application/json');
  $json = json_encode($entries);
  echo($json);
?>
