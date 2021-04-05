// $(document).ready(() => {
//   alert()
// })

var ctx = document.getElementById('localGlobalChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'G.patinets',
      'L.patients',
      'G.Recovered',
      'L.Recorvered',
      'G.Deaths',
      'L.Deaths',
    ],
    datasets: [
      {
        label: 'People',
        data: [500000, 100000, 300000, 40000, 670000, 12000],
        backgroundColor: [
          'rgba(30, 144, 255, 0.6)',
          'rgba(30, 144, 255, 0.6)',
          'rgba(46, 213, 115, 0.6)',
          'rgba(46, 213, 115, 0.6)',
          'rgba(235, 77, 75, 0.6)',
          'rgba(235, 77, 75, 0.6)',
        ],
        borderColor: [
          'rgba(30, 144, 255, 1)',
          'rgba(30, 144, 255, 1)',
          'rgba(46, 213, 115, 1)',
          'rgba(46, 213, 115, 1)',
          'rgba(235, 77, 75, 1)',
          'rgba(235, 77, 75, 1)',
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})
