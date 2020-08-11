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
      margin-top: 2em;
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
      opacity: 0.75;
      margin: 1em 0em 0em 2em;
      margin-top: 1.5em;
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
      margin-top: 1em;
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

  <script>
    // email count for months in last year (from month today minus one for last year)
    let chartData = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // request data from server to get our email entries
    let url = 'get_stats.php'
    let payload = {
      method: 'POST'
    };
    fetch(url, payload)
    .then(resp => resp.json())
    .then((data) => {
      document.getElementById('totalNum').innerHTML = data.length;
      let todayCount = 0;
      let weekCount = 0;
      let monthCount = 0;

      data.forEach((item, index) => {
        let newEntry = document.createElement('TR');

        let time = document.createElement('TD');
        time.innerHTML = item.time;
        newEntry.appendChild(time);

        let email = document.createElement('TD');
        email.innerHTML = item.email;
        newEntry.appendChild(email);

        let id = document.createElement('TD');
        id.innerHTML = item.id;
        newEntry.appendChild(id);

        // stupid formatting to read the sql date format
        var today = new Date();
        let yrT = today.getFullYear();
        let mT = today.getMonth();

        var formatMonth = ("0" + (mT+1)).slice(-2);
        today = yrT +'-'+ formatMonth +'-'+today.getDate();

        let date = item.time.slice(0, 10);
        if (date == today) {
          todayCount++;
        }
        if (date.slice(0, 7) == today.slice(0, 7)) {
          monthCount++;
        }

        // get the year for month sorting
        let year = parseInt(date.slice(0, 4));
        //alert(year.toString() + ' ' + yrT.toString());

        if (year >= (yrT - 1)) {

          let month = parseInt(date.slice(5, 7), 10);

          if (year == (yrT - 1) && (month >= mT + 1)) {
            month -= (mT - 1);
            chartData[month] += 1;
          } else if (year == yrT && (month <= mT)) {
            month += 12 - mT;
            chartData[month] += 1;
          }

        }

        document.getElementById('all-emails').appendChild(newEntry);
      });

      document.getElementById('todayNum').innerHTML = todayCount;
      document.getElementById('monthNum').innerHTML = monthCount;
     });


     // event listener for logging out
     document.getElementById('logout').addEventListener('click', function(event) {
      let url = 'stats_login.php';
      let data = {
        log: 'out'
      };
      let payload = {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(url, payload)
      .then(resp => resp.text())
      .then((text) => { window.location.href = 'stats_login.php'; });
    });
  </script>

  <!-- Charting script -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script>
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date();
  let monthI = date.getMonth();
  let labels = months.slice(0, monthI+1);
  // insert previous ones at beginning
  let newMonths = months.slice(monthI+1).reverse();
  newMonths.forEach(function(item, index) {
    labels.unshift(item);
  });

  /*chartData.forEach(function(item, index) {
    alert(item);
  });*/

  var ctx = document.getElementById('emailChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: chartData
          }]
      },

      // Configuration options go here
      options:
      { legend: { display: false },
      scales: {
        yAxes: [{
            ticks: {
                //max: 5,
                //min: 0,
                stepSize: 1
            }
        }]
    } }
  });
  </script>
</body>
</html>
