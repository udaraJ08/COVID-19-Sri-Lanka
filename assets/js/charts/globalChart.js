fetch('https://www.hpb.health.gov.lk/api/get-current-statistical').then(
  (res) => {
    res
      .json()
      .then((data) => {
        const ctx = document.getElementById('globalChart').getContext('2d')
        const myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Global Patients', 'sri lankan patients'],
            datasets: [
              {
                label: 'People',
                data: [
                  data.data.global_total_cases,
                  data.data.local_total_cases,
                ],
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
      })
      .catch((err) => {
        console.log(err)
      })
  }
)
