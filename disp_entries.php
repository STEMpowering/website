<style>
  .id {
    display: inline-block;
    padding-bottom: 2em;
    margin-left: 15%;
    margin-bottom: 2%;
  }
  .time {
    padding: 2%;
    display: inline-block;
    color: #00ff00;
    background-color: #000044;
  }
  .email {
    margin-left: 15%;
    padding: 2%;
  }
</style>
<?php

  require_once 'sqlconn.php';

  $ret = sqlConnect();
  if (!$ret->succ) {
    exit('Failure to connect to sql');
  }
  $conn = $ret->conn;

  $idk = $conn->prepare('SELECT * FROM emails;');
  if (!$idk->execute()) {
    exit('Failure in sql command');
  }
  $entries = $idk->fetchAll();

  foreach ( $entries as $entry ) {
    echo('<div class="row">');
    echo('<span class="time">');
    echo($entry['time']);
    echo('</span>');

    echo('<span class="email">');
    if ($entry['email'] == '') {
      echo('NULL');
    } else {
      echo($entry['email']);
    }
    echo('</span>');

    echo('<span class="id">');
    echo($entry['id']);
    echo('</span>');
    echo('</div>');
    //echo('<br>');
  }

?>
