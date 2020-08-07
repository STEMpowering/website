<?php
  require_once 'sqlconn.php';

  $postInfo = 'body';
  $secs = time();
  // check if post bro
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // check if its json :(
    if (strcasecmp($_SERVER['CONTENT_TYPE'], 'application/json') == 0) {

      $ret = sqlConnect();
      if (!$ret->succ) {
        exit($ret->e);
      }
      $conn = $ret->conn;

      // decode into array with fields
      $contents = trim(file_get_contents('php://input'));
      $json = json_decode($contents);

      $idk = $conn->prepare( 'INSERT INTO tests() VALUES();' );
      $idk2 = $idk->execute();
    }
  }

?>
