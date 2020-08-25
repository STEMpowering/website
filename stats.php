<?php
  session_start();

  if (!$_SESSION['auth']) {
    header('Location: stats_login.php');
    exit();
  }
?>

<!DOCTYPE html>
<html>
<head>
  <title>STEM Stats</title>
  <link href="assets/css/stats.css" rel="stylesheet">
</head>
<body>
  <div id='header'>
    <img src="images/logo.png" alt="">
    <h1>Statistics</h1>
  </div>

  <div class='blocky'>
    <span class='big-stat' id='total'><div>Total Requests</div><div class='num' id='totalNum'>0</div></span>
    <span class='big-stat'><div>Today</div><div class='num' id='todayNum'>0</div></span>
    <!-- <span class='big-stat'><div>This week</div><div class='num' id='weekNum'>10</div></span> -->
    <span class='big-stat'><div>This month</div><div class='num' id='monthNum'>0</div></span>
  </div>

  <table id='all-emails'>
    <tr class='thead'>
      <th>Time</th>
      <th>Email</th>
      <th>ID</th>
    </tr>
  </table>

  <canvas id="emailChart"></canvas>

  <input id='logout' type='button' value='Logout' style='display: block; margin: auto; border-radius: 5px; margin-top: 3em; margin-bottom: 3em; font-size: 1.3em;'>

  <!-- Charting script -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <!-- JS to load data -->
  <script src='assets/js/stats.js'> </script>
</body>
</html>
