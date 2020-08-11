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

      // decode json payload
      $contents = trim(file_get_contents('php://input'));
      $json = json_decode($contents);

      $idk = $conn->prepare( 'INSERT INTO emails(email, time) VALUES(:email, :time);' );
      $idk2 = $idk->execute( ['email' => $json->email, 'time' => $json->time] );

      // send download
      $filename = 'assets/experiment_pdfs/' . $json->file;
      if(file_exists($filename)){

          //Get file type and set it as Content Type
          $finfo = finfo_open(FILEINFO_MIME_TYPE);
          header('Content-Type: ' . finfo_file($finfo, $filename));
          finfo_close($finfo);

          //Use Content-Disposition: attachment to specify the filename
          header('Content-Disposition: attachment; filename='.basename($filename));

          //No cache
          header('Expires: 0');
          header('Cache-Control: must-revalidate');
          header('Pragma: public');

          //Define file size
          header('Content-Length: ' . filesize($filename));

          ob_clean();
          flush();
          readfile($filename);
          exit;
      }
    }
  }

?>
