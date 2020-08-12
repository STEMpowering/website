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
  <style>
    body {
      font-family: "proxima-nova", sans-serif;
      width: 90%;
      margin: auto;
    }
    #header {
      width: 100%;
      font-family: "proxima-nova", sans-serif;
      display: inline-block;
      margin-left: 10em;
    }
    img {
      margin-left:10%;
      width: 20%;
      display: inline-block;
    }
    h1 {
      font-family: "proxima-nova-soft", sans-serif;
      display: inline-block;
      color: #ff3399;
      font-size: 6em;
      margin-left: 1em;
    }
    table {
      width: 100%;
      text-align: center;
      margin-top: 3em;
      border-spacing: 1px;
      border-style: solid;
      border-radius: 10px;
    }
    tr.thead {
      color: white;
      background-color: #cc00cc;
    }
    tr.thead th:first-child {
      border-radius:10px 0px 0px 0px;
    }
    tr.thead th:last-child {
      border-radius:0px 10px 0px 0px;
    }

    div.blocky {
      display: inline-block;
      margin: auto;
      width: 100%;
      background: rgb(226,226,255);
      background: linear-gradient(90deg, rgba(226,226,255,1) 0%, rgba(86,75,255,1) 100%);
      border-radius: 10px;
      padding-bottom: 2em;
    }

    .big-stat {
      display: inline-block;
      background-color: #ff3399;
      border-radius: 10px;
      padding: 0.1em 2em 0.1em 0.3em;
      color: white;
      font-size: 2em;
      opacity: 1;
      margin: 1em 0em 0em 2em;
      margin-top: 1.6em;
      float: left;
    }
    .big-stat:hover {
      opacity: 1;
    }
    .big-stat .num {
      color: black;
    }
    #total {
      margin-top: 1em;
      font-size: 3em;
    }
    td {
      font-family: courier;
      padding: 0.2em;
    }
    th {
      padding: 0.2em;
    }

    #emailChart {
      margin-top: 4em;
    }
  </style>
</head>
<body>
  <div id='header'>
    <img src="images/logo.png" alt="">
    <h1>Statistics</h1>
  </div>

  <div class='blocky'>
    <span class='big-stat' id='total'><div>Total Requests</div><div class='num' id='totalNum'>45</div></span>
    <span class='big-stat'><div>Today</div><div class='num' id='todayNum'>5</div></span>
    <!-- <span class='big-stat'><div>This week</div><div class='num' id='weekNum'>10</div></span> -->
    <span class='big-stat'><div>This month</div><div class='num' id='monthNum'>20</div></span>
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
