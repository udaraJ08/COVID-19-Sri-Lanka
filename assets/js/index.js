let navVis = false

$(document).ready(() => {
  $('#mobileNav').css('display', 'none')
  settingLocalData()
})

$(window).on('load', function (e) {
  $('#pageLoader').fadeOut()
  $('body').css('overflow', 'auto')
})

$('#hmbBtn').on('click', () => {
  if (navVis == false) {
    $('#mobileNav').fadeIn()
    $('#mobileNav').css({
      display: 'flex',
    })

    navVis = true
  } else {
    $('#mobileNav').hide('slide', { direction: 'right' }, 500)
    $('#mobileNav').css({})
    navVis = false
  }
})

function settingLocalData() {
  fetch('https://www.hpb.health.gov.lk/api/get-current-statistical').then(
    (res) =>
      res
        .json()
        .then((data) => {
          $('#lNewCases').html(data.data.local_new_cases)
          $('#lTotRecovered').html(data.data.local_recovered)
          $('#lTotDeaths').html(data.data.local_deaths)
          $('#today').html(data.data.update_date_time)
        })
        .catch((err) => {
          console.log(err)
        })
        .catch((err) => {
          console.log(err)
        })
  )
}
