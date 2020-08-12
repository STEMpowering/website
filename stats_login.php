<?php
  session_start();

  if ($_SESSION['auth']) {
    header('Location: stats.php');
  }

  // check if authentication request
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // check if its json :(
    if (strcasecmp($_SERVER['CONTENT_TYPE'], 'application/json') == 0) {
      $crap = trim(file_get_contents('php://input'));
      $json = json_decode($crap);

      if ($json->log == 'in' && auth($json->user, $json->pass)) { // trying to log in
        $_SESSION['auth'] = true;
        echo('stats.php');
      } else if ($json->log == 'out') { // trying to log out
        unset($_SESSION['auth']);
        session_destroy();
        echo('stats_login.php');
        exit();
      } else {
        echo('invalid');
      }
      exit();
    }
  }

  // check username and password against the admin hashes
  function auth($user, $pass) {
    $upath = 'assets/credentials/userhash'; $ppath = 'assets/credentials/passhash';
    $ufile = fopen($upath, 'r');
    $pfile = fopen($ppath, 'r');

    $uhash = fread($ufile, filesize($upath));
    $phash = fread($pfile, filesize($ppath));

    fclose($ufile); fclose($pfile);

    $uverify = password_verify($user, $uhash);
    $pverify = password_verify($pass, $phash);
    return $uverify && $pverify;
  }
?>
<!DOCTYPE html>
<html>
<head>
  <title>STEM Stats Login</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="assets/css/main.css" />
  <style>
    /* modal style */
    #subBtn {
      background-color: #f44336;
      margin-top: 0.8em;
      float: right;
      font-size: 1.2em;
      display: inline-block;
    }
    #subBtn:hover {
      background-color: #fa5c50;
    }
    #loginDes {
      margin-bottom: 1.5em;
    }
    #userIn {
      margin-bottom: 0.4em;
    }
  </style>
</head>
<body>
  <div id='email_modal' class='modal' style='display: none;'>
    <div style='padding-left: 1em; padding-right: 1em;'>
    <img src="images/logo.png" alt="" style='margin-left: 7em;'>
    <h3 id='loginDes'> Login </h3>
    <form onkeydown="return event.key != 'Enter';">
      <input type='text' id='userIn' placeholder="Username">
      <input type='password' id='passIn' placeholder="Password">
      <p style='color: red; display: none;' id='userError'> Invalid credentials </p>
      <input type='button' id='subBtn' value='Login'>
    </form>
    </div>
  </div>


  <!-- Scripts -->

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.dropotron.min.js"></script>
    <script src="assets/js/browser.min.js"></script>
    <script src="assets/js/breakpoints.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>

    <!-- jQuery Modal - by kylefox :) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" />
    <script>
      $('#email_modal').modal({
        escapeClose: false,
        clickClose: false,
        showClose: false
      });

      document.getElementById('subBtn').addEventListener('click', function(event) {
        let user = document.getElementById('userIn').value;
        let pass = document.getElementById('passIn').value;

        let data = {
          log: 'in',
          user: user,
          pass: pass
        };

        let url = 'stats_login.php';
        let payload = {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(data)
        };
        fetch(url, payload)
        .then(resp => resp.text())
        .then((text) => {
          if (text == 'invalid') {
            document.getElementById('userError').style.display = 'block';
          } else {
            document.getElementById('userError').style.display = 'none';
            window.location.href = text;
          }
        });
      });
    </script>
</body>
</html>
