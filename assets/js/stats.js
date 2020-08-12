// this script retrieves email data from the server from get_stats.php,
// and displays the data

// email count for months in last year (from month today minus one for last year)
let chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    let year = parseInt(date.slice(0, 4), 10);
    //alert(year.toString() + ' ' + yrT.toString());

    if (year >= (yrT - 1)) {

      let month = parseInt(date.slice(5, 7), 10);

      if (year == (yrT - 1) && (month >= (mT + 2))) {
        month -= (mT + 2);
        chartData[month] += 1;
      } else if (year == yrT && (month <= (mT + 1))) {
        month += 12 - (mT + 2);
        chartData[month] += 1;
      }

      //document.getElementById('out').innerHTML += month;
      //document.getElementById('out').innerHTML += '  ';

    }

    document.getElementById('all-emails').appendChild(newEntry);

  });

  document.getElementById('todayNum').innerHTML = todayCount;
  document.getElementById('monthNum').innerHTML = monthCount;

  chartSetup();
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

function chartSetup() {
  // chart setup
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let date = new Date();
  let monthI = date.getMonth();
  let labels = months.slice(0, monthI+1);
  // insert previous ones at beginning
  let newMonths = months.slice(monthI+1).reverse();
  newMonths.forEach(function(item, index) {
    labels.unshift(item);
  });

  var ctx = document.getElementById('emailChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
          labels: labels,
          datasets: [{
              backgroundColor: 'rgb(255, 0, 123)',//'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: chartData
          }]
      },

      // Configuration options go here
      options:
      {
        legend: { display: false },
        scales: {
          yAxes: [{
              ticks: {
                  //max: 5,
                  min: 0,
                  //stepSize: 1
                  precision: 0
              },
              scaleLabel: {
                display: true, labelString: 'Emails', fontColor: '#000'
              }
          }]
        },
        title: { display: true, text: 'Year in review', fontColor: '#000', fontSize: 18 }
      }
  });
}
