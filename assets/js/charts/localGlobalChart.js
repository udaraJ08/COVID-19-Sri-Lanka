fetch('https://www.hpb.health.gov.lk/api/get-current-statistical').then(
  (res) => {
    res.json().then((data) => {
      const ctx = document.getElementById('localGlobalChart').getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'G.total patinets',
            'L.total patients',
            'G.total Recovered',
            'L.total Recorvered',
            'G.total total Deaths',
            'L.total Deaths',
          ],
          datasets: [
            {
              label: 'People',
              data: [
                data.data.global_total_cases,
                data.data.local_total_cases,
                data.data.global_recovered,
                data.data.local_recovered,
                data.data.global_deaths,
                data.data.local_deaths,
              ],
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
    })
  }
)
