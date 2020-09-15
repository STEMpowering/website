document.addEventListener('DOMContentLoaded', function() {
  var calendarE = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar( calendarE, {
    initialDate: '2020-09-01',
    editable: false,
    selectable: true,
    businessHours: true,
    dayMaxEvents: true, // allow "more" link when too many events
    /* Edit below to add events */
    events: [
      {
        title: 'What\'s in your Night Sky?',
        backgroundColor: '#c800ff',
        url: '#exp20-08',
        start: '2020-08-03',
        end: '2020-08-08' // set this to be the day immediately after you want the event to occupy
      },
      {
        title: 'Acid Base Chemistry',
        backgroundColor: '#c800ff',
        url: '#exp20-08',
        start: '2020-08-10',
        end: '2020-08-15' // set this to be the day immediately after you want the event to occupy
      },
      {
        title: 'Ice Cream Making Using Science',
        backgroundColor: '#c800ff',
        url: '#exp20-08',
        start: '2020-08-17',
        end: '2020-08-22' // set this to be the day immediately after you want the event to occupy
      },
      {
        title: 'Take Flight and Make Your Own Plan',
        backgroundColor: '#c800ff',
        url: '#exp20-08',
        start: '2020-08-24',
        end: '2020-08-29' // set this to be the day immediately after you want the event to occupy
      },
      {
        title: 'Learn What Makes Boats Float!',
        backgroundColor: '#c800ff',
        url: '#exp20-09',
        start: '2020-08-31',
        end: '2020-09-05' // set this to be the day immediately after you want the event to occupy
      },
      {
        title: 'Black Holes, At Home!',
        backgroundColor: '#c800ff',
        url: '#exp20-09',
        start: '2020-09-14',
        end: '2020-09-19' // set this to be the day immediately after you want the event to occupy
      }
    ]
  } );

  calendar.render();
 });


 // colours for showing active events: inactive: #aaaaaa
 //                                      active: #c800ff
