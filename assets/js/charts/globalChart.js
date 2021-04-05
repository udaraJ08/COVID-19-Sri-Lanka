var ctx = document.getElementById('globalChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Global Patients', 'sri lankan patients'],
    datasets: [
      {
        label: 'People',
        data: [500000, 100000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(186, 220, 88,0.6)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(186, 220, 88, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
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
